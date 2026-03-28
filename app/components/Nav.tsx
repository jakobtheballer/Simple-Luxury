"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0D1F2D]/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-wide">SIMPLE LUXURY</a>

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
