"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryClient({ images, name }: { images: string[]; name: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length <= 1) return null;

  const gallery = images.slice(1); // skip hero image

  return (
    <>
      {/* GRID */}
      <section>
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#0D1F2D" }}>Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 group focus:outline-none"
            >
              <Image
                src={src}
                alt={`${name} – photo ${i + 2}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">⊕</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-4xl font-light hover:text-gray-300 z-10"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-6 text-white text-5xl font-light hover:text-gray-300 z-10 px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-16 aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox]}
              alt={`${name} – photo ${lightbox + 2}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          {lightbox < gallery.length - 1 && (
            <button
              className="absolute right-6 text-white text-5xl font-light hover:text-gray-300 z-10 px-4 py-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-6 text-white/60 text-sm">
            {lightbox + 1} / {gallery.length}
          </p>
        </div>
      )}
    </>
  );
}
