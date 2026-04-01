"use client";

import { useRef, useEffect } from "react";

const VIDEOS = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4"];

export default function HeroVideo() {
  const mobileRef = useRef<HTMLVideoElement>(null);
  const refs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  useEffect(() => {
    mobileRef.current?.play().catch(() => {});
    refs.forEach((r) => r.current?.play().catch(() => {}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ width: "100vw", height: "100svh", minHeight: "560px" }}>

      {/* MOBILE: single hero video */}
      <video
        ref={mobileRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="md:hidden absolute inset-0"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DESKTOP: 3 videos side by side */}
      <div className="hidden md:flex absolute inset-0">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={refs[i]}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="flex-1 h-full"
            style={{ objectFit: "cover", width: "33.333%" }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6 animate-fade-up">
          Mallorca · Ibiza · Formentera
        </p>
        <h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-up-delay"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          Luxury Made Simple
        </h1>
        <p className="text-base md:text-lg text-white/60 max-w-md mb-10 font-light animate-fade-up-delay-2">
          Private yacht charters and concierge across the Mediterranean.
        </p>
        <a
          href="https://wa.me/4915738248355"
          className="block w-full sm:w-auto text-center text-[11px] uppercase tracking-[0.15em] border border-white/50 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 animate-fade-up-delay-2"
        >
          Plan Your Charter
        </a>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60 animate-bounce" style={{ height: "40%" }} />
        </div>
      </div>
    </section>
  );
}
