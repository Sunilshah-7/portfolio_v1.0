"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const HeroAnimation = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    // Start the slide animation after 2 seconds
    const timer = setTimeout(() => {
      setIsSliding(true);

      // Complete the animation after slide transition
      setTimeout(() => {
        setIsVisible(false);
        onAnimationComplete();
      }, 800); // Match this with CSS transition duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-blue-200 flex items-center justify-center transition-transform duration-800 ease-in-out ${
        isSliding ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo with fade-in animation */}
        <div className="animate-fade-in">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="animate-pulse"
            priority
          />
        </div>

        {/* Optional loading text */}
        <div className="animate-fade-in-delayed">
          <p className="text-2xl font-semibold text-white animate-bounce">
            Welcome
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
