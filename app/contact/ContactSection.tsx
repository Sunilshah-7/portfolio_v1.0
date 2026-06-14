import Link from "next/link";
import { CONTACT_SOCIALS } from "@/app/portfolio-data";

export default function ContactSection() {
  return (
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
              Say Hello &rarr;
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
  );
}
