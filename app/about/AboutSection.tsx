import Image from "next/image";
import { RESEARCH } from "@/app/portfolio-data";
import TechnologyMarquee from "@/components/technologyMarquee";

export default function AboutSection() {
  return (
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
                  George Washington University &middot; Washington DC, USA
                </p>
                <p className="tl-desc">Software Engineering and Systems</p>
              </div>
              <div className="tl-item">
                <p className="tl-period">2018 - 2023</p>
                <h3 className="tl-title">
                  B.E. Electronics, Communication &amp; Information Engineering
                </h3>
                <p className="tl-org">
                  Tribhuvan University &middot; Pokhara, Nepal
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
                <p className="tl-org">George Washington University &middot; DC</p>
                <p className="tl-desc">
                  ML-driven UN SDG classifier using sentence transformers to
                  analyze open-source repositories.
                </p>
              </div>
              <div className="tl-item">
                <p className="tl-period">Mar 2025 - Aug 2025</p>
                <h3 className="tl-title">Machine Learning Intern</h3>
                <p className="tl-org">DriverAI LLC &middot; Arizona, USA</p>
                <p className="tl-desc">
                  End-to-end computer vision pipeline - YOLOv7, Mask R-CNN,
                  OCR, ONNX, TensorRT for edge deployment.
                </p>
              </div>
              <div className="tl-item">
                <p className="tl-period">Oct 2024 - Mar 2025</p>
                <h3 className="tl-title">Full Stack Engineer</h3>
                <p className="tl-org">
                  GWU Writing in the Disciplines &middot; DC
                </p>
                <p className="tl-desc">
                  Enterprise reporting dashboard - React/Next.js, AWS Lambda,
                  Django RBAC for 20+ department heads.
                </p>
              </div>
              <div className="tl-item">
                <p className="tl-period">Nov 2020 - Jul 2024</p>
                <h3 className="tl-title">Software Engineer</h3>
                <p className="tl-org">Upwork &middot; Remote</p>
                <p className="tl-desc">
                  Scalable full-stack solutions in healthcare, sustainability,
                  and logistics using React, Node.js, Flask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
