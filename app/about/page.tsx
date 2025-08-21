import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineExperiment } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Lidar from "@/assets/lidar.png";
import MobileRobot from "@/assets/mobile_robot.png";
import Prosthesis from "@/assets/prosthesis.png";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science, Software Engineering and Systems",
      institution: "GEORGE WASHINGTON UNIVERSITY, WASHINGTON DC, USA",
      year: "August 2024 - May 2026",
    },
    {
      degree:
        "Bachelor of Electronics, Communication and Information Engineering",
      institution: "TRIBHUVAN UNIVERSITY, POKHARA, NEPAL",
      year: "2018 - 2023",
    },
  ];
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <section className="mt-16">
        <h2 className="flex items-center gap-4 mb-12 text-4xl font-bold tracking-wider text-gray-900">
          <IoBookOutline /> EDUCATION
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-400 border-4 border-white rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="ml-16">
                {/* Title */}
                <h2 className="mb-2 text-3xl font-bold text-black">
                  {item.degree}
                </h2>

                {/* Organization and Period */}
                <div className="mb-6 text-xl font-semibold tracking-wider text-blue-400">
                  {item.institution} | {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const WorkExperience = () => {
  const experienceData = [
    {
      title: "Machine Learning Intern",
      company: "DriverAI LLC",
      location: "Arizona, USA",
      period: "Mar 2025 - Aug 2025",
      achievements: [
        "Developed and deployed a full end-to-end computer vision system for grocery item recognition and labeling, encompassing model benchmarking (YOLOv7, Faster R-CNN, SSD) and selection for production, modular ML pipeline design with efficient retraining, OCR integration for packaging text, large-scale dataset annotation and segmentation with Mask R-CNN, and optimization for mobile edge deployment (via ONNX and TensorRT), collectively improving accuracy, speed, and reliability of real-time product identification.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company:
        "Writing in the Disciplines, Columbian College of Arts and Sciences, George Washington University",
      location: "Washington DC, USA",
      period: "Oct 2024 - Mar 2025",
      achievements: [
        "Engineered and led the full lifecycle of a secure, performance-optimized Enterprise Reporting Dashboard—integrating React.js/Next.js, AWS Lambda, and Django-based access control—to streamline data access for 20+ department heads, enforce role-based compliance for sensitive academic records, and deliver responsive, user-driven features through iterative stakeholder collaboration.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Upwork",
      location: "Remote",
      period: "Nov 2020 - Jul 2024",
      achievements: [
        "Spearheaded the design and delivery of scalable full-stack solutions across healthcare, sustainability, and logistics domains—building modular CMS platforms, real-time analytics dashboards, and cross-platform communication systems—leveraging modern stacks (React.js, Node.js, Flask, Electron.js) and agile CI/CD practices to cut development turnaround by 60%, boost reporting accuracy by 20%, and streamline operational decision-making for diverse clients.",
      ],
    },
    {
      title: "Deep Learning Engineer Intern",
      company: "Ak consulting Pvt Ltd",
      location: "Kathmandu, Nepal",
      period: "Jun 2020 – Aug 2020",
      achievements: [
        "Designed a Swift-based data collection application that enabled 50+ volunteers to gather over 1,000 speech samples, contributing to a 30% performance boost in CNN model accuracy through PyTorch-driven deep learning optimizations.",
      ],
    },
  ];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <section className="mt-16">
        <h2 className="flex items-center gap-4 mb-12 text-4xl font-bold tracking-wider text-gray-900">
          <MdOutlineWorkOutline /> WORK EXPERIENCE
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400"></div>

          {/* Timeline Items */}
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-400 border-4 border-white rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content */}
              <div className="ml-16">
                {/* Title */}
                <h2 className="mb-2 text-3xl font-bold text-black">
                  {item.title}
                </h2>

                {/* Organization and Period */}
                <div className="mb-6 text-xl font-semibold tracking-wider text-blue-400">
                  {item.company} , {item.location} | {item.period}
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      {/* <div className="flex-shrink-0 w-2 h-2 mt-3 mr-4 bg-black rounded-full"></div> */}
                      <p className="text-base leading-relaxed text-black">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ResearchExperience = () => {
  const researchData = [
    {
      title: "Electromyography signals to control prosthetic hands ",
      subtitle: "A Machine Learning Approach to Prosthetic Hand Control",
      image: Prosthesis,
      description:
        "This project focuses on using electromyography (EMG) signals from the human arm, processed through deep learning and neural networks, to control the movements of a prosthetic hand. By training an artificial neural network on EMG signal datasets, the system learns to accurately interpret muscle patterns and translate them into real-time prosthetic actions, offering a potential solution for people without hands.",
      actions: [
        {
          label: "Read Paper",
          href: "https://www.researchgate.net/publication/371575279_ELECTROMYOGRAPHY_SIGNALS_TO_CONTROL_PROSTHETIC_HANDS",
          variant: "outline",
        },
      ],
    },
    {
      title:
        "Indoor path finding and planning of a mobile robot for warehouses",
      subtitle: "Using A* Algorithm for Efficient Navigation",
      image: MobileRobot,
      description:
        "The project aims to develop hardware and software-based solutions for indoor path planning and tracking of a mobile robot, using the A* shortest path finding algorithm in MATLAB. The focus is on accurate calibration of the path to ensure successful displacement and navigation between any two positions on a predefined indoor map.",
      actions: [
        {
          label: "Read Paper",
          href: "https://www.researchgate.net/publication/368936297_INDOOR_PATH_FINDING_AND_PLANNING_OF_A_MOBILE_ROBOT_FOR_WAREHOUSES",
          variant: "outline",
        },
      ],
    },
    {
      title: "Blind spot detection using LIDAR",
      subtitle: "Using LIDAR for Enhanced Object Detection",
      image: Lidar,
      description:
        "The project focuses on utilizing LIDAR technology to improve blind spot detection in autonomous vehicles. By integrating LIDAR sensors with advanced machine learning algorithms, the system aims to accurately identify and classify objects in the vehicle's blind spots, enhancing overall safety and navigation capabilities.",
    },
  ];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <section className="mt-16">
        <h2 className="flex items-center gap-4 mb-12 text-4xl font-bold tracking-wider text-gray-900">
          <AiOutlineExperiment />
          RESEARCH EXPERIENCE
        </h2>

        {/* Changed from horizontal flex to vertical stack */}
        <div className="space-y-6">
          {researchData.map((research, index) => (
            <div
              key={index}
              className="flex overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
            >
              {/* Modified left side - Remove background and padding, adjust Image */}
              <div className="relative flex-shrink-0 w-1/3 h-[300px]">
                <Image
                  src={research.image}
                  alt={research.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Right side - Content */}
              <div className="flex-1 p-6">
                <h3 className="mb-2 text-xl font-bold text-black">
                  {research.title}
                </h3>
                <p className="mb-2 text-sm text-gray-600">
                  {research.subtitle}
                </p>
                <p className="mb-4 text-sm text-gray-700">
                  {research.description}
                </p>

                {/* Action buttons */}
                <div className="flex space-x-2">
                  {research.actions?.map((action, actionIndex) => (
                    <Link
                      key={actionIndex}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 text-sm rounded-full transition-colors ${
                        action.variant === "outline"
                          ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Education />
      <WorkExperience />
      <ResearchExperience />
    </div>
  );
};

export default About;
