"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function GalleryClient({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [lightbox, setLightbox] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((p) => (p + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [autoPlay, goNext]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, goNext, goPrev]);

  if (images.length === 0) return null;

  return (
    <>
      {/* CAROUSEL */}
      <div className="relative w-full bg-gray-900 overflow-hidden" style={{ height: "70vh", minHeight: "400px" }}>
        {/* Images */}
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={src}
              alt={`${name} – ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/70 via-[#0D1F2D]/10 to-transparent pointer-events-none" />

        {/* Prev */}
        <button
          onClick={() => { setAutoPlay(false); goPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all text-lg md:text-xl font-bold"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={() => { setAutoPlay(false); goNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all text-lg md:text-xl font-bold"
          aria-label="Next"
        >
          ›
        </button>

        {/* Counter + expand */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center gap-2">
          <button
            onClick={() => setLightbox(true)}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-all"
          >
            <span>⊞</span> {current + 1} / {images.length}
          </button>
        </div>

        {/* Autoplay dot pulse */}
        {autoPlay && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white/60 text-[10px] uppercase tracking-widest hidden sm:inline">Auto</span>
          </div>
        )}

        {/* Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-8 pb-4 md:pb-6">
          <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-1 scrollbar-hide justify-center">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => { setAutoPlay(false); setCurrent(i); }}
                className={`flex-shrink-0 rounded overflow-hidden transition-all duration-200 ${
                  i === current
                    ? "ring-2 ring-white opacity-100 scale-105"
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ width: 48, height: 36 }}
              >
                <Image
                  src={src}
                  alt={`${name} thumb ${i + 1}`}
                  width={48}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl font-light hover:text-gray-300 z-10"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <button
            className="absolute left-4 md:left-8 text-white text-6xl font-light hover:text-gray-300 z-10 px-3 py-2"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl mx-16 aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`${name} – ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            className="absolute right-4 md:right-8 text-white text-6xl font-light hover:text-gray-300 z-10 px-3 py-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>
          <p className="absolute bottom-6 text-white/50 text-sm">{current + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
