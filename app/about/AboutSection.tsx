import Image from "next/image";
import { RESEARCH } from "@/app/portfolio-data";
import TechnologyMarquee from "@/components/technologyMarquee";

export default function AboutSection() {
  return (
    <div id="about">
      <TechnologyMarquee />

      <section id="research" className="research-gallery" aria-labelledby="research-title">
        <div className="inner">
          <h2 className="editorial-title rv" id="research-title">Research Projects</h2>
          <div className="research-grid">
            {RESEARCH.map((item) => (
              <article key={item.title} className="research-study rv">
                <div className="research-figure">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 90vw, (max-width: 1000px) 45vw, 50vw"
                  />
                </div>
                <div className="research-copy">
                  <p className="editorial-meta">{item.discipline}</p>
                  <h3>{item.title}</h3>
                  <p className="research-summary">{item.desc}</p>
                  {item.link && (
                    <a
                      className="research-paper"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read paper on ${item.title}`}
                    >
                      Read paper <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
