"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          scrolled ? "bg-[#0A0A0A]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex flex-col leading-none group">
            <span className="text-sm tracking-[0.2em] uppercase text-white font-light group-hover:text-[#C9A96E] transition-colors duration-300">
              Simple Luxury
            </span>
            <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase hidden sm:block mt-0.5">
              Mediterranean · Experiences
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1">
                Yachts
                <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-44 bg-[#0A0A0A] border border-white/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/fleet" className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                  Hütter Yachts
                </a>
                <a href="/fleet/all" className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                  Full Fleet
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1">
                Guides
                <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-48 bg-[#0A0A0A] border border-white/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/guides/ibiza" className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                  Ibiza Guide
                </a>
                <a href="/guides/formentera" className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                  Formentera Guide
                </a>
                <a href="/guides/mallorca" className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                  Mallorca Guide
                </a>
              </div>
            </div>
            {[
              { href: "/villas", label: "Villas" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300">
                {label}
              </a>
            ))}
            <a
              href="https://wa.me/4915738248355"
              className="text-[11px] uppercase tracking-[0.1em] border border-white/30 text-white px-5 py-2 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1.5"
            aria-label="Menu"
          >
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-4 bg-white ml-auto" />
            <span className="block h-px w-6 bg-white" />
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col">
          {/* Close */}
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-sm tracking-[0.2em] uppercase text-white font-light">Simple Luxury</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-2xl font-light"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {[
              { href: "/fleet", label: "Hütter Yachts" },
              { href: "/fleet/all", label: "Full Fleet" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-2xl tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {label}
              </a>
            ))}

            {/* Guides accordion */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setGuidesOpen((v) => !v)}
                className="text-2xl tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Guides
                <svg
                  className={`w-4 h-4 opacity-50 transition-transform duration-300 ${guidesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {guidesOpen && (
                <div className="flex flex-col items-center gap-4">
                  {[
                    { href: "/guides/ibiza", label: "Ibiza" },
                    { href: "/guides/formentera", label: "Formentera" },
                    { href: "/guides/mallorca", label: "Mallorca" },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-base tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-300 uppercase"
                    >
                      → {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/villas", label: "Villas" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-2xl tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-12 text-center">
            <div className="h-px bg-white/10 mb-8" />
            <a
              href="https://wa.me/4915738248355"
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-8 py-3 inline-block hover:border-white transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
