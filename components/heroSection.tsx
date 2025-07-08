"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import HireMeButton from "./hireMe";
// import AnimatedLightbulb from "./lightBulb";
import Image from "next/image";
import Portrait from "@/assets/Portrait.png";

const HeroSection = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{
            left: mousePosition.x * 0.02 + "px",
            top: mousePosition.y * 0.02 + "px",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
          style={{
            right: (1920 - mousePosition.x) * 0.015 + "px",
            top: mousePosition.y * 0.025 + 100 + "px",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
          style={{
            left: mousePosition.x * 0.01 + 200 + "px",
            bottom: (1080 - mousePosition.y) * 0.02 + "px",
          }}
        ></div>
      </div> */}

      <div className="container mx-auto px-8 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="flex justify-center lg:justify-start">
            <Image src={Portrait} alt="Profile" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Turning Vision Into</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Reality With One Intelligent Line of
                </span>
                <span className="block">Code At a Time.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {/* As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development. */}
                I believe great software isn’t just built—it’s imagined,
                designed, and refined. With a passion for AI and product
                thinking, I engineer meaningful digital experiences that learn,
                adapt, and perform.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {/* <FileText size={20} /> */}
                Resume
                <FaExternalLinkAlt
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <HireMeButton />
      {/* <AnimatedLightbulb /> */}
    </main>
  );
};

export default HeroSection;
