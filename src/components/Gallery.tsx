"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [animKey, setAnimKey] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const open = useCallback((i: number) => {
    setDirection(1);
    setIndex(i);
    setAnimKey((k) => k + 1);
  }, []);

  const close = useCallback(() => setIndex(null), []);

  const go = useCallback(
    (delta: 1 | -1) => {
      setIndex((cur) => {
        if (cur === null) return cur;
        const next = (cur + delta + images.length) % images.length;
        return next;
      });
      setDirection(delta);
      setAnimKey((k) => k + 1);
    },
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, go]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => open(i)}
            className="reveal-on-scroll aspect-[4/3] shadow-lg group relative overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ transitionDelay: `${(i % 4) * 100}ms` }}
            aria-label={`Otvoriť fotku ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Naša práca ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {mounted && index !== null && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galéria"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm gallery-fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors text-3xl font-light"
            aria-label="Zavrieť"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-primary transition-colors text-4xl font-light"
            aria-label="Predchádzajúca"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-primary transition-colors text-4xl font-light"
            aria-label="Nasledujúca"
          >
            ›
          </button>

          <div
            className="relative w-[92vw] h-[80vh] md:w-[85vw] md:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              key={animKey}
              className={
                direction === 1
                  ? "gallery-slide-in-right absolute inset-0"
                  : "gallery-slide-in-left absolute inset-0"
              }
            >
              <Image
                src={images[index]}
                alt={`Naša práca ${index + 1}`}
                fill
                sizes="90vw"
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm font-light tracking-wider">
            {index + 1} / {images.length}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
