import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/app/portfolio-data";

export default function ArticlesSection() {
  return (
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
                <span className="a-cta">Read Article &#8599;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
