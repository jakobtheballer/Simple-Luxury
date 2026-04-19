import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Villa Rental Ibiza & Mallorca | Luxury Villas Balearic Islands",
  description: "Exclusive private villa rentals in Ibiza, Mallorca & Formentera. 4–12 guests, private pools, sea views, 24/7 concierge. Handpicked luxury villas in the Balearics.",
  keywords: "private villa rental ibiza, luxury villa mallorca, villa rental formentera, ibiza villa hire, mallorca luxury villa, balearic islands villa rental, private pool villa ibiza, sea view villa mallorca",
  alternates: { canonical: "https://simpleluxuryservice.de/villas" },
  openGraph: {
    title: "Private Villa Rental Ibiza & Mallorca | Simple Luxury",
    description: "Exclusive private villa rentals in Ibiza, Mallorca and Formentera. 4–12 guests, private pools, sea views, 24/7 concierge support.",
    url: "https://simpleluxuryservice.de/villas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Private Villa Rental Ibiza Mallorca – Simple Luxury" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Villa Rental Ibiza & Mallorca | Simple Luxury",
    description: "Exclusive private villa rentals in the Balearics. Private pools, sea views, 24/7 concierge.",
    images: ["/og-image.jpg"],
  },
};

const villas = [
  { name: "Villa Mestre",      location: "Ibiza" },
  { name: "Villa Tom",         location: "Ibiza" },
  { name: "Villa Pep Luis",    location: "Ibiza" },
  { name: "Villa Nieves",      location: "Formentera" },
  { name: "The Daniel Dream",  location: "Mallorca" },
  { name: "Casa Pepe",         location: "Formentera" },
  { name: "Bella Vista",       location: "Mallorca" },
  { name: "Teguis Mansion",    location: "Mallorca" },
];

export default function VillasPage() {
  return (
    <main className="bg-white pt-16">

      {/* HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Private Residences</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-2xl" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Luxury Villas in the Balearics
          </h1>
        </div>
      </section>

      {/* INTRO + PROPERTIES */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left: text */}
          <div>
            <p className="text-base text-[#0A0A0A]/70 leading-relaxed mb-6">
              We offer a curated collection of exclusive private villas across Ibiza, Mallorca, and Formentera. Each property is handpicked for luxury, privacy, and elegance.
            </p>
            <p className="text-base text-[#0A0A0A]/70 leading-relaxed mb-6">
              From clifftop Mediterranean estates with sweeping sea views to bohemian sanctuaries tucked into the island interior, our villas accommodate groups of 4–12 guests. Every property is selected personally — not for its listing, but for the experience it delivers.
            </p>
            <p className="text-base text-[#0A0A0A]/70 leading-relaxed mb-6">
              All villas come with full concierge support. We handle transfers, provisioning, private chefs, boat hire, restaurant reservations and anything else that makes the difference between a good holiday and a genuinely exceptional one.
            </p>
            <p className="text-base text-[#0A0A0A]/70 leading-relaxed mb-10">
              For personalised information, availability, and booking, contact our concierge team at{" "}
              <a
                href="mailto:booking@simpleluxuryservice.de"
                className="underline hover:text-[#C9A96E] transition-colors duration-300"
                style={{ color: "#0A0A0A" }}
              >
                booking@simpleluxuryservice.de
              </a>
            </p>
            <a
              href="/contact"
              className="inline-block text-center text-[11px] uppercase tracking-[0.15em] px-10 py-4 text-[#0A0A0A] font-medium hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#C9A96E" }}
            >
              Contact Us for Villa Details
            </a>
          </div>

          {/* Right: property list */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-8">Available Properties</p>
            <div className="space-y-px">
              {villas.map((v) => (
                <div
                  key={v.name}
                  className="flex items-center justify-between py-5 border-b border-[#0A0A0A]/8"
                >
                  <h2
                    className="text-lg text-[#0A0A0A]"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                  >
                    {v.name}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#0A0A0A]/40">
                    {v.location}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#0A0A0A]/40 mt-6 leading-relaxed">
              Additional properties available on request. Our portfolio changes seasonally — speak to our concierge for current availability.
            </p>
          </div>

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="text-center text-[11px] uppercase tracking-[0.15em] px-10 py-4 text-[#0A0A0A] font-medium hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#C9A96E" }}
            >
              Contact Us for Villa Details
            </a>
            <a
              href="https://wa.me/4915738248355"
              className="text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
