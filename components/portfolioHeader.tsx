"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/app/portfolio-data";

const resume = "https://drive.google.com/file/d/1tRMxsY1TNBmqVCbnaOb-CDD8fh-_sH8m/view?usp=drive_link";

function PrimaryLinks() {
  return (
    <>
      {NAV_ITEMS.map(({ name, id }) => <a key={id} href={`#${id}`}>{name}</a>)}
      <a href={resume} target="_blank" rel="noreferrer">Resume</a>
    </>
  );
}

export default function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const percentage = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.current?.style.setProperty("--progress", String(ratio));
      if (percentage.current) percentage.current.textContent = `${Math.round(ratio * 100)}%`;
    }

    const observer = new ResizeObserver(updateProgress);
    observer.observe(document.body);
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }

    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="portfolio-header" ref={header}>
        <a href="#hero" className="portfolio-signature" aria-label="Sunil Shah, home">S. Shah</a>
        <nav className="portfolio-nav" aria-label="Primary"><PrimaryLinks /></nav>
        <button
          ref={toggle}
          type="button"
          className="portfolio-menu-button"
          aria-expanded={open}
          aria-controls="portfolio-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? "×" : "−"}</span>
        </button>
        <nav
          id="portfolio-menu"
          className="portfolio-menu"
          aria-label="Portfolio and social links"
          hidden={!open}
          onClick={(event) => {
            if (event.target instanceof HTMLAnchorElement) setOpen(false);
          }}
        >
          <div className="portfolio-mobile-links"><PrimaryLinks /></div>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
          ))}
        </nav>
      </header>
      <div className="portfolio-progress" ref={progress} aria-hidden="true">
        <span ref={percentage}>0%</span>
        <div />
      </div>
    </>
  );
}
