"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import HireMeButton from "./hireMe";
import Image from "next/image";
import Portrait from "@/assets/Portrait.png";

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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container flex items-center min-h-screen px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-20">
        <div className="grid items-center w-full grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Image - shown first on mobile, second on desktop */}
          <div className="flex justify-center order-1 lg:justify-start lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src={Portrait}
                alt="Profile"
                fill
                className="object-cover rounded-full lg:rounded-none"
                priority
              />
            </div>
          </div>

          {/* Content - shown second on mobile, first on desktop */}
          <div className="order-2 space-y-6 text-center sm:space-y-8 lg:text-left lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">Turning Vision Into</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Reality With One Intelligent Line of
                </span>
                <span className="block">Code At a Time.</span>
              </h1>

              <p className="max-w-lg mx-auto text-base leading-relaxed text-gray-600 lg:mx-0 sm:text-lg lg:text-xl">
                I believe great software isn&#39;t just built—it&#39;s imagined,
                designed, and refined. With a passion for AI and product
                thinking, I engineer meaningful digital experiences that learn,
                adapt, and perform.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={openResume}
                className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gray-900 rounded-lg shadow-lg group hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
              >
                Resume
                <FaExternalLinkAlt
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 transform border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white hover:-translate-y-1"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <HireMeButton />
    </main>
  );
};

export default HeroSection;
