import type { Metadata } from "next";
import { fleet } from "@/lib/fleet";
import FleetFilterClient from "./FleetFilterClient";

export const metadata: Metadata = {
  title: "Our Luxury Fleet – Mallorca & Ibiza | Simple Luxury",
  description:
    "Browse our full luxury fleet for charter in Mallorca & Ibiza. Filter by location, type, and price.",
};

export default function AllFleetPage() {
  return (
    <main className="bg-white pt-16">
      {/* HEADER */}
      <section className="py-12 px-8 text-center max-w-3xl mx-auto">
        <a href="/fleet" className="text-gray-400 hover:text-gray-700 text-sm mb-6 inline-block">
          ← Hütter Yachts
        </a>
        <h1 className="text-5xl font-bold mb-2" style={{ color: "#0D1F2D" }}>Our Luxury Fleet</h1>
        <p className="text-gray-400 mt-2">Mallorca · Ibiza · Mediterranean</p>
      </section>

      {/* FILTER + GRID (Client) */}
      <FleetFilterClient yachts={fleet} />

      {/* CTA */}
      <section className="py-16 px-8 text-white text-center" style={{ backgroundColor: "#0D1F2D" }}>
        <h2 className="text-2xl font-bold mb-3">Can&apos;t find what you&apos;re looking for?</h2>
        <p className="text-white/70 mb-6">We have access to hundreds of yachts across the Mediterranean.</p>
        <a
          href="https://wa.me/4915738248355"
          className="font-bold px-10 py-3 rounded text-base hover:opacity-90 hover:scale-105 transition-transform inline-block shadow-lg"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
        >
          ASK US ON WHATSAPP
        </a>
      </section>
    </main>
  );
}
