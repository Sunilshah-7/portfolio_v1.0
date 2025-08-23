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
      <div className="flex flex-col items-center justify-center px-4 space-y-4 sm:space-y-8">
        {/* Logo with fade-in animation - responsive sizing */}
        <div className="animate-fade-in">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="w-32 h-32 animate-pulse sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
            priority
          />
        </div>

        {/* Optional loading text - responsive text size */}
        <div className="animate-fade-in-delayed">
          <p className="text-lg font-semibold text-center text-white sm:text-xl md:text-2xl animate-bounce">
            Welcome
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
