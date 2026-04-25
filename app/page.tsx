"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import HeroAnimation from "@/components/heroAnimation";
import Portrait from "@/assets/Portrait.png";
import AIYoutubeAssistant from "@/assets/ai-youtube-assistant.png";
import AIParliament from "@/assets/ai-parliament.png";
import Agrotrack from "@/assets/agrotrack.png";
import Eghumti from "@/assets/eghumti.png";
import Robotics from "@/assets/robotics.png";
import OrderManagement from "@/assets/order-management.png";
import DecentralizedAI from "@/assets/decentralized_ai.png";
import HardwareAI from "@/assets/hardware_ai.png";
import HumorAI from "@/assets/humor_ai.png";
import TrustworthyAI from "@/assets/trustworthy_ai.png";
import HealthAI from "@/assets/health_ai.jpg";
import Prosthesis from "@/assets/prosthesis.png";
import MobileRobot from "@/assets/mobile_robot.png";
import Lidar from "@/assets/lidar.png";

type CardItem = {
  title: string;
  desc: string;
  img: StaticImageData;
};

type ResearchItem = CardItem & {
  link?: string;
};

type Project = Omit<CardItem, never> & {
  n: number;
  tags: string[];
  link: string;
};

type Article = Omit<CardItem, never> & {
  time: string;
  link: string;
};

const NAV_ITEMS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Articles", id: "articles" },
  { name: "Contact", id: "contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "X", short: "X", href: "https://x.com/SunilShah2416" },
  { label: "GitHub", short: "GH", href: "https://github.com/Sunilshah-7/" },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/sunilshah77/",
  },
  {
    label: "Stack Overflow",
    short: "SO",
    href: "https://stackoverflow.com/users/10602401/sunil-shah",
  },
] as const;

const CONTACT_SOCIALS = [
  ...SOCIAL_LINKS,
  { label: "CodePen", short: "CP", href: "https://codepen.io/sunilshah-7" },
] as const;

const SKILLS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "YOLOv7",
  "OpenCV",
  "Mask R-CNN",
  "React.js",
  "Next.js",
  "Node.js",
  "Django",
  "Flask",
  "AWS Lambda",
  "ONNX",
  "TensorRT",
  "PostgreSQL",
  "Docker",
  "MATLAB",
  "LLMs",
  "Electron.js",
  "Sentence Transformers",
];

const RESEARCH: ResearchItem[] = [
  {
    title: "EMG Signals to Control Prosthetic Hands",
    desc: "ANN-based deep learning system to interpret muscle patterns and translate them into real-time prosthetic actions.",
    img: Prosthesis,
    link: "https://www.researchgate.net/publication/371575279_ELECTROMYOGRAPHY_SIGNALS_TO_CONTROL_PROSTHETIC_HANDS",
  },
  {
    title: "Indoor Path Planning for Mobile Robot",
    desc: "A* algorithm in MATLAB for accurate indoor navigation between any two positions on a predefined warehouse map.",
    img: MobileRobot,
    link: "https://www.researchgate.net/publication/368936297_INDOOR_PATH_FINDING_AND_PLANNING_OF_A_MOBILE_ROBOT_FOR_WAREHOUSES",
  },
  {
    title: "Blind Spot Detection Using LIDAR",
    desc: "LIDAR sensor integration with ML algorithms to identify and classify objects in autonomous vehicle blind spots.",
    img: Lidar,
  },
];

const PROJECTS: Project[] = [
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

const ARTICLES: Article[] = [
  {
    title: "Decentralized AI & International AI Governance",
    time: "12 min read",
    img: DecentralizedAI,
    desc: "The intersection of decentralized AI technologies and international governance frameworks - challenges and opportunities.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/decentralized-ai-international-ai-governance/",
  },
  {
    title: "How Much Do You Trust AI in Hardware Projects?",
    time: "20 min read",
    img: HardwareAI,
    desc: "Exploring AI-driven hardware development - where the boundaries of trust get tested.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/05/12/how-much-do-you-trust-ai-in-building-hardware-projects/",
  },
  {
    title: "Can AI Take a Joke? Humor & Sarcasm with GPT-4",
    time: "15 min read",
    img: HumorAI,
    desc: "Delving into the complexities of humor and sarcasm in AI - can machines truly get the joke?",
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/31/can-ai-take-a-joke-exploring-humor-and-sarcasm-with-gpt/",
  },
  {
    title: "Trustworthy Game Agents",
    time: "18 min read",
    img: TrustworthyAI,
    desc: "Challenges of building trustworthy AI agents in gaming - fairness, accountability, and transparency.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/03/26/trustworthy-game-agents/",
  },
  {
    title: "Risks of Deploying AI Models in Healthcare",
    time: "10 min read",
    img: HealthAI,
    desc: "Analyzing the potential risks and ethical considerations when AI meets healthcare.",
    link: "https://blogs.gwu.edu/sunil-shah/2025/02/05/analyzing-and-understanding-the-risks-associated-with-deploying-ai-models-like-chatgpt-in-healthcare/",
  },
];

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(700px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) scale(1.025)`;
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
  };

  const open = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={cardRef}
      className="p-card rv group"
      style={{ transitionDelay: `${index * 0.07}s` }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={open}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <div className="p-shimmer" />
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-ext"
        onClick={(event) => event.stopPropagation()}
      >
        ↗
      </Link>
      <div className="p-overlay">
        <p className="p-num">{String(project.n).padStart(2, "0")}</p>
        <h3 className="p-title">{project.title}</h3>
        <p className="p-desc">{project.desc}</p>
        <div className="p-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="p-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    document
      .querySelectorAll<HTMLElement>(".rv,.rvL,.rvR")
      .forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.2, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const targets = document.querySelectorAll<HTMLElement>(
      "a,button,.p-card,.a-card,.r-card,.tag",
    );
    const listeners = Array.from(targets).map((element) => {
      const enter = () => ring.classList.add("hover");
      const leave = () => ring.classList.remove("hover");
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
      return { element, enter, leave };
    });

    const animate = () => {
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frame = window.requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frame);
      listeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cur-dot" aria-hidden="true" />
      <div ref={cursorRingRef} className="cur-ring" aria-hidden="true" />

      <nav id="nav" className={isScrolled ? "solid" : ""}>
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? "active" : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-logo">
          S<em>.</em>Shah
        </div>
        <div className="nav-icons">
          {SOCIAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {item.short}
            </Link>
          ))}
        </div>
      </nav>

      <section id="hero">
        <HeroAnimation />
        <div className="grid-bg" />

        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">
              AI Engineer &amp; Full-Stack Developer
            </p>
            <h1 className="hero-name">
              Turning
              <br />
              Vision
              <br />
              Into <span className="grad">Reality.</span>
            </h1>
            <p className="hero-sub">
              One intelligent line of code at a time. Passionate about AI,
              robotics, and building meaningful digital experiences that learn,
              adapt, and perform.
            </p>
            <div className="hero-btns">
              <Link
                href="https://drive.google.com/file/d/1rIXUUY9Qm3rdlIsywc4yu6qJvCsZewNG/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p"
              >
                CV ↗
              </Link>
              <button
                type="button"
                className="btn-o"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <div className="float-tag2">
              <div className="tl">Location</div>
              <div className="tv2">United States</div>
            </div>
            <Image
              src={Portrait}
              alt="Sunil Shah"
              className="portrait-img"
              priority
            />
            <div className="portrait-ring" />
            <div className="float-tag">
              <div className="tv">MS @GWU&apos;26</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <section id="about">
        <div className="inner">
          <span className="s-label rv">Background</span>
          <h2 className="s-title rv">
            Education &amp; <b>Experience</b>
          </h2>

          <div className="about-grid">
            <div className="rvL">
              <p className="col-head">Education</p>
              <div className="tl-wrap">
                <div className="tl-item">
                  <p className="tl-period">Aug 2024 - May 2026</p>
                  <h3 className="tl-title">Master of Computer Science</h3>
                  <p className="tl-org">
                    George Washington University · Washington DC, USA
                  </p>
                  <p className="tl-desc">Software Engineering and Systems</p>
                </div>
                <div className="tl-item">
                  <p className="tl-period">2018 - 2023</p>
                  <h3 className="tl-title">
                    B.E. Electronics, Communication &amp; Information
                    Engineering
                  </h3>
                  <p className="tl-org">
                    Tribhuvan University · Pokhara, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="rvR">
              <p className="col-head">Work Experience</p>
              <div className="tl-wrap">
                <div className="tl-item">
                  <p className="tl-period">Sep 2025 - Present</p>
                  <h3 className="tl-title">OSPO Student Ambassador</h3>
                  <p className="tl-org">George Washington University · DC</p>
                  <p className="tl-desc">
                    ML-driven UN SDG classifier using sentence transformers to
                    analyze open-source repositories.
                  </p>
                </div>
                <div className="tl-item">
                  <p className="tl-period">Mar 2025 - Aug 2025</p>
                  <h3 className="tl-title">Machine Learning Intern</h3>
                  <p className="tl-org">DriverAI LLC · Arizona, USA</p>
                  <p className="tl-desc">
                    End-to-end computer vision pipeline - YOLOv7, Mask R-CNN,
                    OCR, ONNX, TensorRT for edge deployment.
                  </p>
                </div>
                <div className="tl-item">
                  <p className="tl-period">Oct 2024 - Mar 2025</p>
                  <h3 className="tl-title">Full Stack Engineer</h3>
                  <p className="tl-org">GWU Writing in the Disciplines · DC</p>
                  <p className="tl-desc">
                    Enterprise reporting dashboard - React/Next.js, AWS Lambda,
                    Django RBAC for 20+ department heads.
                  </p>
                </div>
                <div className="tl-item">
                  <p className="tl-period">Nov 2020 - Jul 2024</p>
                  <h3 className="tl-title">Software Engineer</h3>
                  <p className="tl-org">Upwork · Remote</p>
                  <p className="tl-desc">
                    Scalable full-stack solutions in healthcare, sustainability,
                    and logistics using React, Node.js, Flask.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-wrap rv" style={{ transitionDelay: "0.15s" }}>
            <p className="col-head">Technical Skills</p>
            <div className="tag-cloud">
              {SKILLS.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="research-row">
            {RESEARCH.map((item, index) => (
              <div
                key={item.title}
                className="r-card rv"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="r-img">
                  <Image
                    src={item.img}
                    alt={item.title}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="r-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  {item.link ? (
                    <Link
                      className="r-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Paper ↗
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="inner">
          <span className="s-label rv">Work</span>
          <h2 className="s-title rv">
            Featured <b>Projects</b>
          </h2>
          <div className="proj-grid">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.n} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="articles">
        <div className="inner">
          <span className="s-label rv">Writing</span>
          <h2 className="s-title rv">
            Articles &amp; <b>Insights</b>
          </h2>
          <div className="art-grid">
            {ARTICLES.map((article, index) => (
              <Link
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="a-card rv"
                style={{ transitionDelay: `${index * 0.07}s` }}
              >
                <div className="a-img">
                  <Image
                    src={article.img}
                    alt={article.title}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="a-body">
                  <p className="a-time">{article.time}</p>
                  <h3 className="a-title">{article.title}</h3>
                  <p className="a-desc">{article.desc}</p>
                  <span className="a-cta">Read Article ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="inner">
          <div className="contact-center">
            <span className="s-label rv contact-label">What&apos;s Next?</span>
            <h2 className="s-title rv contact-title">
              Get In <b>Touch</b>
            </h2>
            <p className="contact-sub rv">
              Let&apos;s chat! Whether you have a question, a project idea, or
              just want to connect - I&apos;m always happy to hear from you.
            </p>
            <form
              className="c-form rv"
              action="https://formspree.io/f/mvgqeonk"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="c-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="c-input"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="c-input"
                required
              />
              <button type="submit" className="c-btn">
                Say Hello →
              </button>
            </form>
            <div className="c-socials rv">
              {CONTACT_SOCIALS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.short}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 Sunil Shah · AI Engineer &amp; Full-Stack Developer ·
          Washington DC
        </p>
      </footer>
    </>
  );
}
