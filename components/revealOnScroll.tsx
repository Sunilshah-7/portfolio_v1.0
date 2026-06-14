"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
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

  return null;
}
