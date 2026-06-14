"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "@/app/about/AboutSection";
import ArticlesSection from "@/app/articles/ArticlesSection";
import ContactSection from "@/app/contact/ContactSection";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/app/portfolio-data";
import ProjectsSection from "@/app/projects/ProjectsSection";
import Portrait from "@/assets/Portrait.png";
import HeroAnimation from "@/components/heroAnimation";
import RevealOnScroll from "@/components/revealOnScroll";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.2, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const targets = document.querySelectorAll<HTMLElement>(
      "a,button,.p-card,.a-card,.r-card,.tag",
    );
    const listeners = Array.from(targets).map((element) => {
      const enter = () => ring.classList.add("hover");
      const leave = () => ring.classList.remove("hover");
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
      return { element, enter, leave };
    });

    const animate = () => {
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frame = window.requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frame);
      listeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <RevealOnScroll />
      <div ref={cursorDotRef} className="cur-dot" aria-hidden="true" />
      <div ref={cursorRingRef} className="cur-ring" aria-hidden="true" />

      <nav id="nav" className={isScrolled ? "solid" : ""}>
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? "active" : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-logo">
          S<em>.</em>Shah
        </div>
        <div className="nav-icons">
          {SOCIAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {item.short}
            </Link>
          ))}
        </div>
      </nav>

      <section id="hero">
        <HeroAnimation />
        <div className="grid-bg" />

        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">
              Hardware / Software &amp; AI Engineer
            </p>
            <h1 className="hero-name">
              Turning
              <br />
              Vision
              <br />
              Into <span className="grad">Reality.</span>
            </h1>
            <p className="hero-sub">
              One intelligent line of code at a time. Passionate about AI,
              robotics, and building meaningful digital experiences that learn,
              adapt, and perform.
            </p>
            <div className="hero-btns">
              <Link
                href="https://drive.google.com/file/d/1tRMxsY1TNBmqVCbnaOb-CDD8fh-_sH8m/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p"
              >
                CV &#8599;
              </Link>
              <button
                type="button"
                className="btn-o"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <div className="float-tag2">
              <div className="tl">Location</div>
              <div className="tv2">United States</div>
            </div>
            <Image
              src={Portrait}
              alt="Sunil Shah"
              className="portrait-img"
              priority
            />
            <div className="portrait-ring" />
            <div className="float-tag">
              <div className="tv">MS @GWU&apos;26</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />

      <footer>
        <p>
          &copy; 2026 Sunil Shah &middot; AI Engineer &amp; Full-Stack Developer
          &middot; Washington DC
        </p>
      </footer>
    </>
  );
}
