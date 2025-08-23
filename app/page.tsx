"use client";
import React, { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/heroSection";
import HeroAnimation from "@/components/heroAnimation";
import About from "./about/page";
import Projects from "./projects/page";
import Articles from "./articles/page";
import Contact from "./contact/page";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {/* Hero Animation */}
      <HeroAnimation onAnimationComplete={handleAnimationComplete} />

      {/* Main Content */}
      <div
        className={`min-h-screen bg-white transition-opacity duration-500 ${
          showMainContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />

        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="articles" className="min-h-screen">
          <Articles />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
