"use client";
import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Projects", sectionId: "projects" },
    { name: "Articles", sectionId: "articles" },
    { name: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.sectionId)}
              className={`text-sm lg:text-base font-medium transition-all duration-300 hover:text-blue-600 ${
                activeSection === item.sectionId
                  ? "text-gray-900 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6 text-gray-900" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-900" />
          )}
        </button>

        {/* Logo - centered on mobile, positioned on desktop */}
        <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        </div>

        {/* Social Links - hidden on mobile, shown on desktop */}
        <div className="items-center hidden space-x-4 md:flex lg:space-x-6">
          <Link
            href="https://x.com/SunilShah2416"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <FaTwitter className="text-[#1DA1F2] text-xl lg:text-2xl hover:text-gray-900 transition-colors" />
          </Link>
          <Link
            href="https://github.com/Sunilshah-7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <FaGithub className="text-xl text-gray-900 transition-colors lg:text-2xl hover:text-blue-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sunilshah77/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <FaLinkedin className="text-[#0077B5] text-xl lg:text-2xl hover:text-gray-900 transition-colors" />
          </Link>
          <Link
            href="https://stackoverflow.com/users/10602401/sunil-shah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <BsStackOverflow className="text-[#F48024] text-xl lg:text-2xl hover:text-gray-900 transition-colors" />
          </Link>
          <Link
            href="https://codepen.io/sunilshah-7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <FaCodepen className="text-[#000000] text-xl lg:text-2xl hover:text-gray-900 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden top-16 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center min-h-full space-y-8">
            {/* Navigation Items */}
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-2xl font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.sectionId
                      ? "text-gray-900 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Links for Mobile */}
            <div className="flex items-center pt-8 space-x-8">
              <Link
                href="https://x.com/SunilShah2416"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaTwitter className="text-[#1DA1F2] text-3xl hover:text-gray-900 transition-colors" />
              </Link>
              <Link
                href="https://github.com/Sunilshah-7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaGithub className="text-3xl text-gray-900 transition-colors hover:text-blue-600" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sunilshah77/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaLinkedin className="text-[#0077B5] text-3xl hover:text-gray-900 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
