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
    <section className="relative w-full overflow-hidden" style={{ height: "80vh", minHeight: "500px" }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/Hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Moneypenny_Jose_A_Arribas1.mov" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6" style={{ animation: "var(--animate-fade-in)" }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg" style={{ animation: "var(--animate-slide-up)" }}>
          Luxury Made Simple
        </h1>
        <p className="text-lg md:text-2xl font-light mb-3 md:mb-4 drop-shadow-md" style={{ animation: "var(--animate-slide-up-delay)" }}>
          Yacht Charters &amp; Concierge Services
        </p>
        <p className="text-sm md:text-lg font-light mb-8 md:mb-10 text-white/80">
          Mallorca · Ibiza · Mediterranean
        </p>
        <a
          href="https://wa.me/4915738248355"
          className="bg-white text-[#0D1F2D] px-8 md:px-14 py-4 md:py-5 font-bold rounded text-base md:text-lg hover:bg-gray-100 hover:scale-105 transition-transform inline-block shadow-lg"
        >
          BOOK NOW
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
