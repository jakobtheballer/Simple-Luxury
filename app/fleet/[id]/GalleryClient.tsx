"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export default function GalleryClient({ images, name }: { images: string[]; name: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setLightbox((p) => (p !== null ? (p + 1) % images.length : null));
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightbox((p) => (p !== null ? (p - 1 + images.length) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, goNext, goPrev]);

  if (images.length <= 1) return null;

  return (
    <>
      {/* GRID */}
      <section>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Gallery</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#0A0A0A]/8">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden focus:outline-none"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={src}
                alt={`${name} – ${i + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs uppercase tracking-[0.15em]">View</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-8 text-white/50 hover:text-white text-3xl font-light z-10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-6 text-white/50 hover:text-white text-5xl font-light z-10 px-4 py-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl mx-20 aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${name} – ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            className="absolute right-6 text-white/50 hover:text-white text-5xl font-light z-10 px-4 py-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>
          <p className="absolute bottom-6 text-white/30 text-[10px] uppercase tracking-[0.2em]">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
