"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import AIYoutubeAssistant from "@/assets/ai-youtube-assistant.png";
import AIParliament from "@/assets/ai-parliament.png";
import Agrotrack from "@/assets/agrotrack.png";
import Eghumti from "@/assets/eghumti.png";
import Robotics from "@/assets/robotics.png";
import OrderManagement from "@/assets/order-management.png";
import type { StaticImageData } from "next/image";

const projects = [
  {
    n: 1,
    title: "AI Assistant for Educational YouTube Videos",
    desc: "Turning YouTube Learning into an Interactive Experience",
    img: AIYoutubeAssistant,
    tags: ["AI", "Video AI", "NLP", "Learning"],
    link: "https://github.com/Sunilshah-7/ASP-project/tree/allComponents",
  },
  {
    n: 2,
    title: "AI Parliament",
    desc: "Debating Policies, Powered by AI",
    img: AIParliament,
    tags: ["Multi-Agent", "Policy", "Debate"],
    link: "https://github.com/Aarekaz/JH_hackathon",
  },
  {
    n: 3,
    title: "Agrotrack",
    desc: "AI for Smarter, Greener Farming",
    img: Agrotrack,
    tags: ["AgriTech", "AI", "Sustainability"],
    link: "https://devpost.com/software/terrasync",
  },
  {
    n: 4,
    title: "Eghumti E-Commerce Store",
    desc: "Your All-in-One Online Store Solution",
    img: Eghumti,
    tags: ["React", "Ecommerce", "Stripe"],
    link: "https://github.com/Sunilshah-7/nextjs-commerce",
  },
  {
    n: 5,
    title: "Robotics Club Landing Page",
    desc: "Dynamic Web Experience for Robotics",
    img: Robotics,
    tags: ["Next.js", "Laravel", "Web"],
    link: "https://github.com/WRCRoboticsClub/frontend",
  },
  {
    n: 6,
    title: "Admin Order Management",
    desc: "Smart Dashboard for Orders & Analytics",
    img: OrderManagement,
    tags: ["Analytics", "Dashboard", "React"],
    link: "https://github.com/Sunilshah-7/admin-dashboard",
  },
];

interface Project {
  n: number;
  title: string;
  desc: string;
  img: StaticImageData;
  tags: string[];
  link: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(700px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) scale(1.025)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "";
    }
  };

  const openLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="rv relative h-[330px] rounded-[16px] overflow-hidden border border-[var(--border)] cursor-pointer transition-all duration-[350ms] hover:border-[rgba(74,143,255,0.3)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.65),0_0_0_1px_rgba(74,143,255,0.1)]"
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={openLink}
    >
      {/* Background Image */}
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-[550ms]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Shimmer Overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-[350ms]"
        style={{
          background:
            "linear-gradient(135deg, rgba(74,143,255,0.08), rgba(155,108,247,0.06))",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,18,0.95) 0%, rgba(4,8,18,0.5) 45%, transparent 100%)",
        }}
      >
        {/* Project Number */}
        <p className="text-[0.6rem] tracking-[0.25em] text-[rgba(255,255,255,0.35)] mb-1">
          {String(project.n).padStart(2, "0")}
        </p>

        {/* Title */}
        <h3 className="font-[var(--font-space)] text-[1rem] font-bold text-white mb-1 leading-[1.25]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[0.74rem] text-[rgba(255,255,255,0.55)] mb-3">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-[0.55rem] py-[0.18rem] rounded-[100px] bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.1)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* External Link Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          window.open(project.link, "_blank");
        }}
        className="absolute top-4 right-4 w-[34px] h-[34px] rounded-full bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.18)] flex items-center justify-center text-white text-[0.75rem] no-underline opacity-0 transition-all duration-300 hover:bg-[rgba(0,0,0,0.6)]"
        style={{
          transform: "translateY(-6px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "none";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.transform = "translateY(-6px)";
        }}
      >
        ↗
      </a>

      {/* Hover Image Scale */}
      <style jsx>{`
        &:hover img {
          transform: scale(1.09);
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".rv");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[var(--bg)] relative overflow-hidden py-[7rem]"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,143,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-8">
        {/* Section Label */}
        <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[var(--blue)] block mb-[0.6rem] rv">
          Work
        </span>
        <h2 className="font-[var(--font-space)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.025em] leading-[1.1] mb-16 rv">
          Featured <b className="text-[var(--blue)]">Projects</b>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.n} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
