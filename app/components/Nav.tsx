"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0D1F2D]/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          {/* Yacht SVG Icon */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 shrink-0 group-hover:scale-110 transition-transform duration-300"
          >
            {/* Hull */}
            <path d="M4 26 Q20 30 36 26 L33 31 Q20 34 7 31 Z" fill="#FFD700" />
            {/* Mast */}
            <line x1="20" y1="26" x2="20" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Main sail */}
            <path d="M20 10 L20 25 L7 24 Z" fill="white" opacity="0.9"/>
            {/* Jib */}
            <path d="M20 13 L20 25 L31 23 Z" fill="white" opacity="0.5"/>
            {/* Wave lines */}
            <path d="M2 33 Q8 31 14 33 Q20 35 26 33 Q32 31 38 33" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
          </svg>
          {/* Text */}
          <div className="leading-none">
            <p className="text-base font-bold tracking-[0.18em] text-white group-hover:text-[#FFD700] transition-colors duration-300">
              SIMPLE LUXURY
            </p>
            <p className="text-[8px] tracking-[0.25em] text-white/40 uppercase mt-0.5 hidden sm:block">
              Mediterranean · Experiences
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/fleet" className="hover:text-[#25D366] transition-colors flex items-center gap-1.5">
            Hütter Yachts
            <span className="bg-[#FFD700] text-[#0D1F2D] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide leading-none">Partner</span>
          </a>
          <div className="relative group">
            <button className="hover:text-[#25D366] transition-colors flex items-center gap-1">
              Yachts <span className="text-[10px] text-white/50 group-hover:text-[#25D366]">▾</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#0D1F2D] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/fleet" className="block px-4 py-3 text-sm hover:text-[#25D366] hover:bg-white/5 transition-colors border-b border-white/10">
                Hütter Yachts
                <span className="block text-[10px] text-white/40 mt-0.5">Dr. No · Moneypenny · Goldfinger</span>
              </a>
              <a href="/fleet/all" className="block px-4 py-3 text-sm hover:text-[#25D366] hover:bg-white/5 transition-colors">
                Our Luxury Fleet
                <span className="block text-[10px] text-white/40 mt-0.5">All available yachts</span>
              </a>
            </div>
          </div>
          <a href="/villas" className="hover:text-[#25D366] transition-colors">Villas</a>
          <a href="/services" className="hover:text-[#25D366] transition-colors">Services</a>
          <a
            href="https://wa.me/4915738248355"
            className="bg-[#25D366] text-white px-5 py-2 rounded font-bold hover:bg-green-500 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          <a href="https://wa.me/4915738248355" className="bg-[#25D366] text-white px-3 py-1.5 rounded font-bold text-xs">
            Book
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1F2D] border-t border-white/10 px-5 py-4 space-y-1">
          <a href="/fleet" onClick={() => setOpen(false)} className="flex items-center gap-2 py-3 text-sm font-medium border-b border-white/10">
            Hütter Yachts
            <span className="bg-[#FFD700] text-[#0D1F2D] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Partner</span>
          </a>
          <a href="/fleet/all" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium border-b border-white/10 text-white/80">Our Luxury Fleet</a>
          <a href="/villas" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium border-b border-white/10 text-white/80">Villas</a>
          <a href="/services" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-white/80">Services</a>
        </div>
      )}
    </nav>
  );
}
