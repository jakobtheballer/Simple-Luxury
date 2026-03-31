"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "560px" }}>
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/Hero.jpg"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6 animate-fade-up">
          Mallorca · Ibiza · Formentera
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-up-delay"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          Luxury Made Simple
        </h1>
        <p className="text-base md:text-lg text-white/60 max-w-md mb-10 font-light animate-fade-up-delay-2">
          Private yacht charters and concierge across the Mediterranean.
        </p>
        <a
          href="https://wa.me/4915738248355"
          className="text-[11px] uppercase tracking-[0.15em] border border-white/50 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 animate-fade-up-delay-2"
        >
          Plan Your Charter
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60 animate-bounce" style={{ height: "40%" }} />
        </div>
      </div>
    </section>
  );
}
