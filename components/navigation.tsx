"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
// import { HiMenu, HiX } from "react-icons/hi";
// import Image from "next/image";
// import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems
        .map((item) => {
          const el = document.getElementById(item.sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            return { id: item.sectionId, top: rect.top };
          }
          return null;
        })
        .filter(Boolean);

      const visibleSection = sections.find(
        (s) => s && s.top >= -100 && s.top < 300,
      );
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-200 transition-all duration-300 px-8 py-5 ${
          isScrolled
            ? "bg-[rgba(6,10,20, 0.88)] backdrop-blur-[24px] shadow-[0_1px_0_var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          {/* Left Navigation links */}
          <ul className="items-center hidden gap-10 list-none md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-[0.82rem] font-medium tracking-[0.06em] transition-colors duration-200 relative pb-[12px] ${
                    activeSection === item.sectionId
                      ? "text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[var(--blue)] transition-all duration-300 ${
                      activeSection == item.sectionId ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="text-[1.2rem] font-bold tracking-[-0.02em] font-[var(--font-space)] text-[var(--text)]">
            S<em className="not-italic text-[var(--blue)]">.</em>Shah
          </div>

          {/* <button
            className="relative z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900" />
            )}
          </button> */}

          {/* Right: Social Links */}
          {/* <div className="items-center hidden gap-5 md:flex">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div> */}

          {/* Social Links - hidden on mobile, shown on desktop */}
          <div className="items-center hidden gap-5 md:flex">
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

        {/* Mobile Menu button */}
        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 flex items-start bg-[var(--bg)] md:hidden">
            <div className="flex flex-col items-center px-4 pt-24">
              {/* Navigation Items */}
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`text-lg font-medium py-4 px-6 transition-colors ${
                      activeSection === item.sectionId
                        ? "text-[var(--text)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex items-center gap-8 mt-12">
                  <Link
                    href="https://x.com/SunilShah2416"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <FaTwitter className="text-3xl text-blue-400 transition-colors hover:text-white" />
                  </Link>
                  <Link
                    href="https://github.com/Sunilshah-7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <FaGithub className="text-3xl text-white transition-colors hover:text-blue-400" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sunilshah77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <FaLinkedin className="text-3xl text-blue-400 transition-colors hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Social Links for Mobile */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
