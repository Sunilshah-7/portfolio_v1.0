import { FaLinkedin } from "react-icons/fa";
import AboutSection from "@/app/about/AboutSection";
import ArticlesSection from "@/app/articles/ArticlesSection";
import ContactSection from "@/app/contact/ContactSection";
import ProjectsSection from "@/app/projects/ProjectsSection";
import { SOCIAL_LINKS } from "@/app/portfolio-data";
import PixelWordmark from "@/components/pixelWordmark";
import PortfolioHeader from "@/components/portfolioHeader";
import RevealOnScroll from "@/components/revealOnScroll";

export default function Home() {
  return (
    <div className="portfolio">
      <RevealOnScroll />
      <PortfolioHeader />
      <main>
        <section id="hero" className="portfolio-hero">
          <p className="portfolio-intro">
            <span>I build AI tools and full-stack applications</span>{" "}
            <span>for exploring documents, managing</span>{" "}
            <span>infrastructure, and making sense of data.</span>
          </p>

          <div className="portfolio-hero-bottom">
            <ul className="portfolio-at-a-glance" aria-label="At a glance">
              <li>AI &amp; Full-Stack Engineer</li>
              <li>MS in Computer Science</li>
              <li>Washington, DC</li>
            </ul>
            <div className="portfolio-name-row">
              <PixelWordmark />
              <a
                className="portfolio-linkedin"
                href={SOCIAL_LINKS[2].href}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="portfolio-practice" aria-label="What I do">
          <div className="rv">
            <h2>Applied AI</h2>
            <p>I build tools for working with policy documents, SEC filings, and educational videos.</p>
          </div>
          <div className="rv">
            <h2>Full-stack development</h2>
            <p>I build web applications and dashboards for managing content, orders, and AI infrastructure.</p>
          </div>
          <div className="rv">
            <h2>Hardware &amp; robotics</h2>
            <p>My research covers prosthetic hand control, mobile robot navigation, and LiDAR blind spot detection.</p>
          </div>
        </section>

        <ProjectsSection />
        <AboutSection />
        <ArticlesSection />
        <ContactSection />
      </main>

      <footer className="portfolio-footer">
        <p>&copy; 2026 Sunil Shah</p>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </div>
  );
}
