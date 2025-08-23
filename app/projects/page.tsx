"use client";
import React, { useState, useEffect } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

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

  // Auto scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const viewProject = (e: React.MouseEvent<HTMLDivElement>, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link);
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <div className="w-full px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-base text-gray-400 sm:text-lg">
            Discover my latest work and creations
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main carousel container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={(e) => viewProject(e, project.link)}
                className="relative flex-shrink-0 w-full cursor-pointer group"
              >
                {/* Hover tooltip - hidden on mobile */}
                <div className="absolute z-10 hidden px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 transform -translate-x-1/2 rounded-lg opacity-0 pointer-events-none top-4 left-1/2 bg-black/80 group-hover:opacity-100 whitespace-nowrap sm:block">
                  Click to View project
                </div>

                <div className="relative h-80 sm:h-96 md:h-[500px] mx-2 sm:mx-4">
                  {/* Project Card */}
                  <div
                    className={`h-full rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden group cursor-pointer transform transition-all duration-300`}
                  >
                    {/* Layout - stacked on mobile, side-by-side on desktop */}
                    <div className="flex flex-col h-full md:flex-row">
                      {/* Content Section */}
                      <div className="flex-1 p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col justify-between h-full">
                          <div>
                            <h3 className="mb-2 text-xl font-bold leading-tight text-white sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
                              {project.title}
                            </h3>
                            <p className="mb-4 text-sm sm:mb-6 sm:text-base md:text-lg text-white/90">
                              {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-4 sm:gap-2 sm:mb-6">
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 text-xs font-medium text-white rounded-full sm:px-3 sm:text-sm bg-white/20 backdrop-blur-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="flex-1 p-2 sm:p-4 md:p-4">
                        <div className="relative h-32 overflow-hidden transition-transform duration-300 sm:h-48 md:h-full rounded-xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full transition-all duration-300 rounded-xl"
                          />
                          {/* Subtle overlay on image */}
                          <div className="absolute inset-0 transition-opacity duration-300 rounded-xl bg-black/10 group-hover:bg-black/5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/10 group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute items-center justify-center hidden w-10 h-10 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full sm:flex sm:w-12 sm:h-12 left-2 sm:left-4 top-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
            aria-label="Previous project"
          >
            <MdChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute items-center justify-center hidden w-10 h-10 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full sm:flex sm:w-12 sm:h-12 right-2 sm:right-4 top-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110"
            aria-label="Next project"
          >
            <MdChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
