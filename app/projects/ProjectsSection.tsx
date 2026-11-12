import Image from "next/image";
import { PROJECTS } from "@/app/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="inner">
        <h2 className="s-title rv" id="projects-title">Selected Works</h2>
        <div className="project-list">
          {PROJECTS.map((project) => (
            <article className="project-entry rv" key={project.n}>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-labelledby={`project-title-${project.n}`}
              >
                <div className="project-media">
                  <Image
                    src={project.img}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 92vw, 52vw"
                  />
                </div>
                <div className="project-copy">
                  <h3 id={`project-title-${project.n}`}>
                    {project.title} <span aria-hidden="true">↗</span>
                  </h3>
                  <p>{project.desc}</p>
                  <ul>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
