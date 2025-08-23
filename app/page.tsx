import React from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/heroSection";
import About from "./about/page";
import Projects from "./projects/page";
import Articles from "./articles/page";
import Contact from "./contact/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import Articles from "./articles/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
  );
}
