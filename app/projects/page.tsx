"use client";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import AIYoutubeAssistant from "@/assets/ai-youtube-assistant.png";
import AIParliament from "@/assets/ai-parliament.png";
import Agrotrack from "@/assets/agrotrack.png";
import Eghumti from "@/assets/eghumti.png";
import Robotics from "@/assets/robotics.png";
import OrderManagement from "@/assets/order-management.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI assistant for Educational YouTube videos",
      description: "Turning YouTube Learning into an Interactive Experience",
      image: AIYoutubeAssistant,
      color: "from-purple-600 to-blue-600",
      tags: [
        "AI",
        "Video AI",
        "Youtube",
        "Learning Assistant",
        "Summarization",
        "Interactive Learning",
      ],
      link: "https://github.com/Sunilshah-7/ASP-project/tree/allComponents",
    },
    {
      id: 2,
      title: "AI Parliament",
      description: "Debating Policies, Powered by AI",
      image: AIParliament,
      color: "from-slate-700 to-purple-600",
      tags: [
        "AI",
        "Debate",
        "Policy",
        "Discussion",
        "Multi Agent Systems",
        "Governance Tech",
      ],
      link: "https://github.com/Aarekaz/JH_hackathon",
    },
    {
      id: 3,
      title: "Agrotrack",
      description: "AI for Smarter, Greener Farming",
      image: Agrotrack,
      color: "from-blue-500 to-cyan-500",
      tags: [
        "AI in Agriculture",
        "Sustainability",
        "Crop Rotation",
        "Precision Farming",
      ],
      link: "https://devpost.com/software/terrasync",
    },
    {
      id: 4,
      title: "Eghumti Ecommerce Online Store",
      description: "Your All-in-One Online Store Solution",
      image: Eghumti,
      color: "from-green-600 to-blue-600",
      tags: [
        "Ecommerce",
        "Web Development",
        "React",
        "Payment Integration",
        "Stripe",
      ],
      link: "https://github.com/Sunilshah-7/nextjs-commerce",
    },
    {
      id: 5,
      title: "Robotics Club Landing Page",
      description: "Showcasing Robotics with a Dynamic Web Experience",
      image: Robotics,
      color: "from-orange-500 to-red-500",
      tags: [
        "Community Website",
        "Web Development",
        "Next.js",
        "Robotics",
        "Laravel",
      ],
      link: "https://github.com/WRCRoboticsClub/frontend",
    },
    {
      id: 6,
      title: "Admin Order Management",
      description: "Smart Dashboard for Orders, Users, and Analytics",
      image: OrderManagement,
      color: "from-indigo-600 to-purple-600",
      tags: [
        "Order Management",
        "Data Analytics",
        "Admin tools",
        "Visualization",
        "Business Automation",
      ],
      link: "https://github.com/Sunilshah-7/admin-dashboard",
    },
  ];

  const visibleProjects = Array.from({ length: 3 }, (_, offset) => {
    return projects[(currentIndex + offset) % projects.length];
  });

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const viewProject = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fbf7f0_0%,#f1ebe3_44%,#e6ded2_100%)] text-stone-900">
      <div className="absolute inset-0 pointer-events-none opacity-70 bg-[linear-gradient(180deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0.18)_100%)]" />
      <div className="absolute -top-28 left-[-5rem] h-80 w-80 rounded-full bg-[#8ac8db]/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 h-96 w-96 rounded-full bg-[#d3c1a4]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-400/60 bg-white/45 text-stone-700 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-x-1 hover:bg-white/70"
            aria-label="Previous projects"
          >
            <MdChevronLeft className="h-7 w-7" />
          </button>

          <div className="max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 sm:text-sm">
              Featured Projects
            </p>
          </div>

          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-400/60 bg-white/45 text-stone-700 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:translate-x-1 hover:bg-white/70"
            aria-label="Next projects"
          >
            <MdChevronRight className="h-7 w-7" />
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const isFeatured = index === 2;

            return (
              <article
                key={`${project.id}-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => viewProject(project.link)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    viewProject(project.link);
                  }
                }}
                className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/65 bg-white/40 shadow-[0_24px_80px_rgba(88,72,58,0.14)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(88,72,58,0.18)] ${
                  isFeatured ? "sm:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
                  />
                </div>

                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus-within:opacity-100 bg-gradient-to-t ${
                    isFeatured
                      ? "from-black/82 via-black/40 to-transparent"
                      : index === 1
                        ? "from-slate-950/80 via-slate-900/40 to-transparent"
                        : "from-black/72 via-black/24 to-transparent"
                  }`}
                />

                <div className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-80 group-focus-within:opacity-80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_42%)]" />

                <div className="relative flex h-full flex-col justify-between p-5 opacity-0 pointer-events-none translate-y-4 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <span className="hidden rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm sm:inline-flex">
                      Open Project
                    </span>
                  </div>

                  <div className="space-y-4 text-white">
                    <div>
                      <h3
                        className={`font-semibold leading-tight ${
                          isFeatured ? "text-2xl sm:text-[2rem]" : "text-2xl"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`mt-3 max-w-sm text-sm leading-6 text-white/84 ${
                          isFeatured ? "sm:text-base" : ""
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, isFeatured ? 4 : 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/18 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    {/* <p className="max-w-[11rem] text-xs leading-5 text-white/72 sm:max-w-[13rem] sm:text-sm">
                      {isFeatured
                        ? "Selected to feel closest to the reference layout, with a stronger emphasis on copy and tags."
                        : "Click to open the project and explore the source or live demo."}
                    </p> */}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/25"
                    >
                      View
                      <MdChevronRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 sm:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-stone-900"
                  : "w-2.5 bg-stone-400/70"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
