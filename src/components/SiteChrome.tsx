"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SiteChrome() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

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
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
