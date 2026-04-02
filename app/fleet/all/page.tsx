import type { Metadata } from "next";
import { fleet } from "@/lib/fleet";
import FleetFilterClient from "./FleetFilterClient";

export const metadata: Metadata = {
  title: "Full Fleet – Yacht Charters Mallorca & Ibiza | Simple Luxury",
  description: "Browse our complete fleet of luxury yachts available for charter in Mallorca, Ibiza and Formentera. Day charters, week charters, and overnight expeditions.",
  alternates: { canonical: "https://simpleluxuryservice.de/fleet/all" },
  openGraph: {
    title: "Full Charter Fleet | Simple Luxury",
    description: "Luxury yachts available for private charter in Mallorca, Ibiza and Formentera.",
    url: "https://simpleluxuryservice.de/fleet/all",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Luxury Yacht Charter Fleet – Simple Luxury" }],
  },
};

export default function AllFleetPage() {
  return (
    <main className="bg-white pt-16">

      {/* HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <a href="/fleet" className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300 mb-8 inline-block">
            ← Hütter Yachts
          </a>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">All Available Vessels</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Full Fleet
          </h1>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            Mallorca · Ibiza · Formentera
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <FleetFilterClient yachts={fleet} />

      {/* CTA */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Need something specific?
          </h2>
          <p className="text-sm text-white/50 mb-10">We have access to hundreds of vessels across the Mediterranean.</p>
          <a
            href="https://wa.me/4915738248355"
            className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
