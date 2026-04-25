"use client";
import React, { useEffect, useRef } from "react";

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas = canvasEl;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;

    let W = canvas.width;
    let H = canvas.height;
    let pts: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      s: number;
      o: number;
    }> = [];

    function rnd(a: number, b: number) {
      return a + Math.random() * (b - a);
    }

    function resizeCv() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initParticles() {
      pts = [];
      for (let i = 0; i < 110; i++) {
        pts.push({
          x: rnd(0, 1),
          y: rnd(0, 1),
          vx: rnd(-0.00015, 0.00015),
          vy: rnd(-0.00015, 0.00015),
          s: rnd(0.5, 2),
          o: rnd(0.1, 0.5),
        });
      }
    }

    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / W;
      mouseY = e.clientY / H;
    };

    function drawParticles() {
      context.clearRect(0, 0, W, H);

      // Update and draw particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const ax = a.x * W;
        const ay = a.y * H;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const bx = b.x * W;
          const by = b.y * H;
          const dx = ax - bx;
          const dy = ay - by;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(74,143,255,${0.08 * (1 - d / 120)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
        // Draw particle
        context.beginPath();
        context.arc(ax, ay, a.s, 0, Math.PI * 2);
        context.fillStyle = `rgba(74,143,255,${a.o})`;
        context.fill();
      }

      // Mouse-reactive glow
      const mx = mouseX * W;
      const my = mouseY * H;
      const rg = context.createRadialGradient(mx, my, 0, mx, my, 200);
      rg.addColorStop(0, "rgba(74,143,255,0.04)");
      rg.addColorStop(1, "transparent");
      context.fillStyle = rg;
      context.fillRect(0, 0, W, H);

      requestAnimationFrame(drawParticles);
    }

    // Initialize
    resizeCv();
    initParticles();
    drawParticles();

    // Event listeners
    window.addEventListener("resize", resizeCv);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCv);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="pcanvas"
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default HeroAnimation;
