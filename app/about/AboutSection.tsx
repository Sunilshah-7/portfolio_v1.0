import Image from "next/image";
import Link from "next/link";
import { RESEARCH, SKILLS } from "@/app/portfolio-data";

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

        <h2 className="s-title rv">
          Research <b>Projects</b>
        </h2>

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
                    Read Paper &#8599;
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
