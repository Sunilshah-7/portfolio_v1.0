"use client";
import React from "react";
import Image from "next/image";
import Portrait from "@/assets/Portrait.png";
import HeroAnimation from "./heroAnimation";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openResume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1rIXUUY9Qm3rdlIsywc4yu6qJvCsZewNG/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden">
      {/* Particle Background */}
      <HeroAnimation />

      {/* Grid Background Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,143,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,143,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center">
        {/* Left: Hero Text */}
        <div className="hero-text">
          {/* Eyebrow */}
          <p
            className="text-[0.7rem] tracking-[0.35em] uppercase text-[var(--blue)] mb-6 opacity-0"
            style={{ animation: "fadeUp 0.9s 0.3s both" }}
          >
            AI Engineer & Full-Stack Developer
          </p>

          {/* Name */}
          <h1
            className="font-[var(--font-space)] text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1.0] tracking-[-0.04em] mb-6 opacity-0"
            style={{ animation: "fadeUp 0.9s 0.5s both" }}
          >
            Turning<br />Vision<br />Into{" "}
            <span
              className="bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(120deg, var(--blue) 0%, var(--purple) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Reality.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[1rem] text-[var(--muted)] leading-[1.8] max-w-[460px] mb-10 opacity-0"
            style={{ animation: "fadeUp 0.9s 0.7s both" }}
          >
            One intelligent line of code at a time. Passionate about AI, robotics,
            and building meaningful digital experiences that learn, adapt, and perform.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 opacity-0"
            style={{ animation: "fadeUp 0.9s 0.9s both" }}
          >
            <button
              onClick={openResume}
              className="px-7 py-[0.8rem] rounded-[7px] text-[0.82rem] font-bold tracking-[0.04em] bg-[var(--blue)] text-white border-none cursor-pointer shadow-[0_0_28px_rgba(74,143,255,0.35)] hover:bg-[#6ba5ff] hover:-translate-y-[2px] hover:shadow-[0_0_40px_rgba(74,143,255,0.55)] transition-all duration-250"
            >
              Resume ↗
            </button>
            <button
              onClick={scrollToContact}
              className="px-7 py-[0.8rem] rounded-[7px] text-[0.82rem] font-bold tracking-[0.04em] bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--blue)] hover:text-[var(--blue)] hover:-translate-y-[2px] transition-all duration-250"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Portrait */}
        <div
          className="relative opacity-0"
          style={{
            animation: "fadeIn 1.2s 0.6s both, portraitFloat 7s ease-in-out infinite",
          }}
        >
          {/* Glow Effect */}
          <div
            className="absolute -inset-[30px] rounded-[24px] z-[1]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(74,143,255,0.22) 0%, rgba(155,108,247,0.1) 50%, transparent 75%)",
              animation: "gPulse 5s ease-in-out infinite",
            }}
          />

          {/* Top-left Floating Tag */}
          <div
            className="absolute -top-[18px] -left-[18px] z-[5] bg-[var(--glass)] backdrop-blur-[20px] border border-[var(--border)] rounded-[10px] px-3 py-[0.75rem]"
          >
            <p className="text-[0.6rem] tracking-[0.12em] uppercase text-[var(--muted)]">
              Location
            </p>
            <p className="font-[var(--font-space)] text-[0.85rem] font-bold text-[var(--purple)]">
              Washington DC
            </p>
          </div>

          {/* Portrait Image */}
          <div className="relative w-full aspect-[5/6] overflow-hidden rounded-[14px] z-[2]">
            <Image
              src={Portrait}
              alt="Sunil Shah"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Border Ring Gradient */}
          <div
            className="absolute inset-0 rounded-[14px] z-[3] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(74,143,255,0.5), rgba(155,108,247,0.4), transparent 60%, rgba(74,143,255,0.2))",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />

          {/* Bottom-right Floating Tag */}
          <div
            className="absolute -bottom-[18px] -right-[18px] z-[5] bg-[var(--glass)] backdrop-blur-[20px] border border-[var(--border)] rounded-[10px] px-3 py-[0.75rem]"
          >
            <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--muted)]">
              Currently
            </p>
            <p className="font-[var(--font-space)] text-[0.9rem] font-bold text-[var(--blue)]">
              MS @ GWU &apos;26
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted)] opacity-0"
        style={{ animation: "fadeIn 1s 1.8s both" }}
      >
        <div
          className="w-[1px] h-[44px]"
          style={{
            background: "linear-gradient(to bottom, var(--blue), transparent)",
            animation: "scrollLine 2.2s ease-in-out infinite",
          }}
        />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
