import type { Metadata } from "next";
import Image from "next/image";
import { fleet } from "@/lib/fleet";

export const metadata: Metadata = {
  title: "Hütter Yachts – Dr. No, Moneypenny, Goldfinger | Simple Luxury",
  description: "Exclusive day charters and overnight stays aboard Hütter power catamarans in Mallorca and Ibiza. Book your private charter experience.",
  alternates: { canonical: "https://simpleluxuryservice.de/fleet" },
  openGraph: {
    title: "Hütter Yachts – Exclusive Charter Fleet | Simple Luxury",
    description: "Charter Dr. No, Moneypenny or Goldfinger for a private day or overnight experience in Mallorca and Ibiza.",
    url: "https://simpleluxuryservice.de/fleet",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hütter Yacht Charter – Simple Luxury" }],
  },
};

export default function FleetPage() {
  const hutterYachts = fleet.filter((y) => y.brand === "Hütter");

  return (
    <main className="bg-white pt-16">

      {/* HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Exclusive Partner</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-lg" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Hütter Yachts
          </h1>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            Three distinctive power catamarans available for private day charters and overnight stays across the Balearic Islands.
          </p>
        </div>
      </section>

      {/* BOATS */}
      <section className="py-10 md:py-24">
        <div className="max-w-[1200px] mx-auto md:px-10 space-y-px bg-[#0A0A0A]/8">
          {hutterYachts.map((yacht) => {
            const lowestPrice = yacht.pricing.reduce((min, p) =>
              parseInt(p.price.replace(/\D/g, "")) < parseInt(min.replace(/\D/g, "")) ? p.price : min,
              yacht.pricing[0].price
            );

            return (
              <a
                key={yacht.id}
                href={`/fleet/${yacht.id}`}
                className="group grid grid-cols-1 md:grid-cols-2 bg-white hover:bg-[#F5F2EB] transition-colors duration-300 block"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Info */}
                <div className="p-6 md:p-14 flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">{yacht.type}</p>
                  <h2 className="text-3xl md:text-4xl mb-4 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                    {yacht.name}
                  </h2>
                  <p className="text-sm text-[#0A0A0A]/50 mb-8 leading-relaxed max-w-sm">
                    {yacht.shortDescription}
                  </p>

                  {/* Specs */}
                  <div className="flex gap-8 mb-10">
                    {[
                      { label: "Length", value: yacht.length },
                      { label: "Day Guests", value: `${yacht.dayGuests}` },
                      { label: "Cabins", value: `${yacht.cabins}` },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-1">{label}</p>
                        <p className="text-sm font-medium text-[#0A0A0A]">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-1">From</p>
                      <p className="text-lg font-medium text-[#0A0A0A]">{lowestPrice}<span className="text-xs text-[#0A0A0A]/40 ml-1">/day</span></p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A] border-b border-[#0A0A0A]/20 pb-0.5 group-hover:border-[#0A0A0A] transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* DE ANTONIO 42 HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8 border-t border-t-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Charter Vessel</p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-lg" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            De Antonio 42<br />Tot Suma
          </h2>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            A 2023 open yacht built for refined day cruising between Ibiza and Formentera. Generous exterior spaces, professional skipper, and all equipment included.
          </p>
        </div>
      </section>

      {/* DE ANTONIO 42 CARD */}
      <section className="py-10 md:py-24 px-0 md:px-10">
        <div className="max-w-[1200px] mx-auto space-y-px">

          {/* Hero image + description */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/De Antonio 43 tot suma2/1.webp"
                alt="De Antonio 42 Tot Suma modern open yacht moored in Marina Botafoch, Ibiza"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-14 flex flex-col justify-center">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">Open Motorboat · 2023</p>
              <h3 className="text-3xl md:text-4xl mb-4 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                Tot Suma
              </h3>
              <p className="text-sm text-[#0A0A0A]/50 mb-8 leading-relaxed">
                De Antonio 42 Tot Suma represents refined Mediterranean cruising for guests who appreciate generous exterior spaces and effortless comfort. Built in 2023, this open yacht combines smooth performance with a calm, spacious layout ideal for day cruising between Ibiza and Formentera.
              </p>
              {/* Quick specs */}
              <div className="flex gap-8">
                {[
                  { label: "Length", value: "13 m" },
                  { label: "Guests", value: "11 + skipper" },
                  { label: "Built", value: "2023" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-1">{label}</p>
                    <p className="text-sm font-medium text-[#0A0A0A]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deck lounge image + features */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="p-6 md:p-14 flex flex-col justify-center md:order-first order-last">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Design & Comfort</p>
              <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-8">
                The yacht's walk-around design creates a relaxed flow throughout, with shaded seating areas, an exterior lounge, and spacious foredeck providing the perfect balance of sun and shelter. Wide sunbeds at both bow and stern invite leisurely afternoons on the water.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Walk-around deck design",
                  "Wide bow & stern sunbeds",
                  "Shaded seating areas",
                  "Spacious foredeck",
                  "Exterior lounge",
                  "Bluetooth sound system",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] text-xs mt-0.5">—</span>
                    <p className="text-xs text-[#0A0A0A]/60">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/De Antonio 43 tot suma2/2.webp"
                alt="Spacious deck lounge with comfortable seating and sunbeds, perfect for relaxing Mediterranean cruising"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Interior image + specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/De Antonio 43 tot suma2/3.webp"
                alt="Modern interior cabin with double bed, air conditioning and contemporary furnishings"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-14 flex flex-col justify-center">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Specifications</p>
              <div className="space-y-3 mb-8">
                {[
                  { label: "Length", value: "13 m" },
                  { label: "Beam", value: "3.99 m" },
                  { label: "Capacity", value: "11 guests + skipper" },
                  { label: "Cabins", value: "1 double, 1 twin open" },
                  { label: "Bathrooms", value: "1" },
                  { label: "Engines", value: "3 × 350 hp" },
                  { label: "Built", value: "2023" },
                  { label: "Home Port", value: "Marina Botafoch, Ibiza" },
                  { label: "Skipper", value: "Professional (included)" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline border-b border-[#0A0A0A]/6 pb-3">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#0A0A0A]/40">{label}</p>
                    <p className="text-sm text-[#0A0A0A]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Swimming image + inclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="p-6 md:p-14 flex flex-col justify-center md:order-first order-last">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">What's Included</p>
              <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-8">
                Everything you need for a perfect day on the water — from snorkelling equipment to a paddleboard, drinks and snacks to premium audio. No hidden extras.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "VAT",
                  "Professional skipper",
                  "Drinks & snacks",
                  "Towels",
                  "Snorkel equipment",
                  "Paddleboard",
                  "Sunshade & extension",
                  "Portable cooler",
                  "Interior & exterior seating",
                  "Bluetooth sound system",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] text-xs mt-0.5">—</span>
                    <p className="text-xs text-[#0A0A0A]/60">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="text-center text-[11px] uppercase tracking-[0.15em] bg-[#C9A96E] text-[#0A0A0A] px-8 py-3 hover:opacity-80 transition-opacity duration-300"
                >
                  Inquire to Book
                </a>
                <a
                  href="https://wa.me/4915738248355"
                  className="text-center text-[11px] uppercase tracking-[0.15em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/De Antonio 43 tot suma2/4.webp"
                alt="Swimming and snorkeling from yacht with turquoise Mediterranean waters and snorkel equipment included"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FULL FLEET LINK */}
      <section className="pb-16 px-6 md:px-10 text-center border-t border-[#0A0A0A]/8 pt-16">
        <p className="text-sm text-[#0A0A0A]/50 mb-6">Looking for a different style or size?</p>
        <a
          href="/fleet/all"
          className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-10 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
        >
          Browse Full Fleet
        </a>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Not sure which one fits?
          </h2>
          <p className="text-sm text-white/50 mb-10">Message us — we&apos;ll match you with the right vessel.</p>
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
