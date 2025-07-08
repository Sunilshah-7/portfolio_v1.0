import React from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
    </div>
  );
}
