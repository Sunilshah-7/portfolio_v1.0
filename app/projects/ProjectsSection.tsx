"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "@/app/portfolio-data";

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
        &#8599;
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

export default function ProjectsSection() {
  return (
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
  );
}
