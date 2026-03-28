import type { Metadata } from "next";
import Image from "next/image";
import { fleet } from "@/lib/fleet";

export const metadata: Metadata = {
  title: "Hütter Yachts – Exclusive Partner | Simple Luxury",
  description:
    "Hütter Yachts: Dr. No, Moneypenny & Goldfinger. Power Catamarans for day charters & overnight stays in Mallorca & Ibiza.",
};

export default function FleetPage() {
  return (
    <main className="bg-white pt-16">
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/85 via-[#0D1F2D]/30 to-transparent" />
        <div className="relative z-10 px-10 pb-10 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Simple Luxury · Exclusive Partner</p>
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <h1 className="text-5xl font-bold">Hütter Yachts</h1>
            <span className="bg-[#FFD700] text-[#0D1F2D] px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider">
              ✦ Exclusive Partner
            </span>
          </div>
          <p className="text-base font-light text-white/70">Mallorca · Ibiza · Mediterranean</p>
        </div>
      </section>

      {/* 3 BOATS — large cards */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleet.filter((y) => y.brand === "Hütter").map((yacht) => (
            <a
              key={yacht.id}
              href={`/fleet/${yacht.id}`}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow block"
            >
              {/* Image */}
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={yacht.image}
                  alt={`${yacht.name} – ${yacht.type}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{yacht.type}</p>
                  <h2 className="text-2xl font-bold">{yacht.name}</h2>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4">📍 {yacht.location}</p>

                {/* Specs row */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { label: "Length", value: yacht.length },
                    { label: "Day Guests", value: `${yacht.dayGuests}` },
                    { label: "Cabins", value: `${yacht.cabins}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-gray-50 rounded-lg p-3 text-center">
                      <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">{label}</p>
                      <p className="font-bold text-gray-900 text-sm">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400">From</p>
                    <p className="text-xl font-bold" style={{ color: "#0D1F2D" }}>
                      {yacht.pricing.reduce((min, p) =>
                        parseInt(p.price.replace(/\D/g, "")) < parseInt(min.replace(/\D/g, "")) ? p.price : min,
                        yacht.pricing[0].price
                      )}
                      <span className="text-xs font-normal text-gray-400">/day</span>
                    </p>
                  </div>
                  <span
                    className="text-sm font-bold px-5 py-2 rounded-full text-white group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "#0D1F2D" }}
                  >
                    View →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LINK TO FULL FLEET */}
      <section className="pb-14 px-6 text-center">
        <p className="text-gray-500 mb-4">Looking for more options?</p>
        <a
          href="/fleet/all"
          className="border-2 border-[#0D1F2D] text-[#0D1F2D] px-10 py-3 rounded font-bold hover:bg-[#0D1F2D] hover:text-white transition inline-block"
        >
          VIEW OUR LUXURY FLEET →
        </a>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 text-white text-center" style={{ backgroundColor: "#0D1F2D" }}>
        <h2 className="text-2xl font-bold mb-3">Not sure which yacht fits best?</h2>
        <p className="text-white/70 mb-6">Message us — we&apos;ll match you with the perfect vessel.</p>
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
