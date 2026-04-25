"use client";

import { useEffect } from "react";

export default function SiteChrome() {
  useEffect(() => {
    const header = document.getElementById("site-header");

    const onScroll = () => {
      if (header) {
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }

      const heroParallax = document.querySelector<HTMLElement>(".hero-parallax");
      if (heroParallax) {
        const speed = parseFloat(
          heroParallax.getAttribute("data-speed") || "0.1"
        );
        heroParallax.style.transform = `translateY(${window.scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => revealObserver.observe(el));

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            imageObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".image-reveal-wrapper")
      .forEach((el) => imageObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return null;
}
