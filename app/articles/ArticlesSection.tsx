import Image from "next/image";
import { ARTICLES } from "@/app/portfolio-data";

export default function ArticlesSection() {
  return (
    <section id="articles" aria-labelledby="articles-title">
      <div className="inner">
        <h2 className="editorial-title rv" id="articles-title">Articles &amp; Insights</h2>
        <div className="writing-index">
          {ARTICLES.map((article, index) => (
            <article key={article.link} className="writing-entry rv">
              <a
                className="writing-link"
                href={article.link}
                target="_blank"
                rel="noreferrer"
                aria-labelledby={`article-title-${index}`}
              >
                <div className="writing-figure">
                  <Image
                    src={article.img}
                    alt=""
                    fill
                    sizes={index === 0 ? "(max-width: 850px) 90vw, 44vw" : "140px"}
                  />
                </div>
                <div className="writing-copy">
                  <p className="editorial-meta">{article.time}</p>
                  <h3 id={`article-title-${index}`}>{article.title}</h3>
                  <p className="writing-summary">{article.desc}</p>
                </div>
                <span className="writing-arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
