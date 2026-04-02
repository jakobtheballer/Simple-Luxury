import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Private Villas – Mallorca, Ibiza & Formentera | Simple Luxury",
  description: "Exclusive villa rentals on the Balearic Islands. Private pools, sea views, dedicated staff. Curated selection for discerning guests.",
  alternates: { canonical: "https://simpleluxuryservice.de/villas" },
  openGraph: {
    title: "Exclusive Private Villas | Simple Luxury",
    description: "Luxury villa rentals in Mallorca, Ibiza and Formentera with private pools, sea views and dedicated staff.",
    url: "https://simpleluxuryservice.de/villas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Private Villas Ibiza Mallorca – Simple Luxury" }],
  },
};

const villas = [
  {
    image: "/images/Hero.jpg",
    name: "Villa Ibiza Sunset",
    location: "Ibiza",
    bedrooms: 4,
    capacity: 8,
    price: "€2,500",
    amenities: ["Infinity Pool", "Sea View Terrace", "Gourmet Kitchen", "Beach Access"],
    availableInfo: "Available year-round. Minimum 3 nights.",
  },
  {
    image: "/images/Hero.jpg",
    name: "Villa Mallorca Cove",
    location: "Mallorca",
    bedrooms: 6,
    capacity: 12,
    price: "€1,800",
    amenities: ["Olympic Pool", "Multi-Level Terrace", "Wine Cellar", "Spa"],
    availableInfo: "Available year-round. Minimum 5 nights.",
  },
  {
    image: "/images/Hero.jpg",
    name: "Villa Formentera",
    location: "Formentera",
    bedrooms: 8,
    capacity: 16,
    price: "€3,200",
    amenities: ["Private Beach", "Infinity Pool", "Cinema Room", "Wellness Center"],
    availableInfo: "Available May–October. Minimum 7 nights.",
  },
];

export default function VillasPage() {
  return (
    <main className="bg-white pt-16">

      {/* HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Private Residences</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-lg" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Luxury Villas
          </h1>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            Handpicked residences across Ibiza, Mallorca and Formentera — each with private pools, sea views, and dedicated concierge.
          </p>
        </div>
      </section>

      {/* VILLAS */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto md:px-10 space-y-px bg-[#0A0A0A]/8">
          {villas.map((villa, i) => (
            <div key={villa.name} className="grid grid-cols-1 lg:grid-cols-2 bg-white">
              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`} style={{ aspectRatio: "4/3", minHeight: "300px" }}>
                <Image
                  src={villa.image}
                  alt={villa.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className={`flex flex-col justify-center py-8 px-6 md:px-14 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">{villa.location}</p>
                <h2 className="text-3xl md:text-4xl mb-2 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                  {villa.name}
                </h2>
                <p className="text-sm text-[#0A0A0A]/40 mb-8">{villa.availableInfo}</p>

                {/* Specs */}
                <div className="flex gap-8 mb-8 pb-8 border-b border-[#0A0A0A]/8">
                  {[
                    { label: "Bedrooms", value: villa.bedrooms },
                    { label: "Guests", value: villa.capacity },
                    { label: "From / night", value: villa.price },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-1">{label}</p>
                      <p className="text-sm font-medium text-[#0A0A0A]">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="space-y-2.5 mb-10">
                  {villa.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 text-sm text-[#0A0A0A]/60">
                      <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/4915738248355"
                  className="sm:self-start block w-full sm:w-auto text-center text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3.5 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
                >
                  Enquire About This Villa →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Something specific in mind?
          </h2>
          <p className="text-sm text-white/40 mb-10">
            Our concierge team has access to an exclusive portfolio across the Balearic Islands.
          </p>
          <a
            href="https://wa.me/4915738248355"
            className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            Speak to Concierge
          </a>
        </div>
      </section>
    </main>
  );
}
