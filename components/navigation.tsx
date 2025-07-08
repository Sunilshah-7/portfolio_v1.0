"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Articles", path: "/articles" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-1 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setActiveSection(item.name)}
            className={`text-base font-medium transition-all duration-300 hover:text-blue-600 ${
              activeSection === item.name
                ? "text-gray-900 border-b-2 border-blue-600 pb-1"
                : "text-gray-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>

      <div className="flex space-x-6 items-center">
        <Link
          href="https://x.com/SunilShah2416"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaTwitter className="text-[#1DA1F2] text-2xl hover:text-gray-900 transition-colors" />
        </Link>
        <Link
          href="https://github.com/Sunilshah-7/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaGithub className="text-gray-900 text-2xl hover:text-blue-600 transition-colors" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sunilshah77/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaLinkedin className="text-[#0077B5] text-2xl hover:text-gray-900 transition-colors" />
        </Link>
        <Link
          href="https://stackoverflow.com/users/10602401/sunil-shah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <BsStackOverflow className="text-[#F48024] text-2xl hover:text-gray-900 transition-colors" />
        </Link>
        <Link
          href="https://codepen.io/sunilshah-7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <FaCodepen className="text-[#000000] text-2xl hover:text-gray-900 transition-colors" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
