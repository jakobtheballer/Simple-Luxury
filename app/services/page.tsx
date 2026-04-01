import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Services – Charters, Villas & Concierge | Simple Luxury",
  description: "Private yacht charters, island hopping and bespoke concierge across Mallorca, Ibiza and Formentera.",
};

const WA = "https://wa.me/4915738248355";

const SERVICES = [
  {
    id: "day-charter",
    title: "Day Charters",
    body: "From a half-day sunset cruise to a full 8-hour expedition. Choose your vessel, set your course.",
    details: ["Captain & crew included", "Snorkeling gear", "Personalised itinerary", "Insurance included"],
    image: "/images/Hero.jpg",
    href: "/fleet",
    cta: "View Fleet",
  },
  {
    id: "week-charter",
    title: "Week Charters",
    body: "Seven days aboard a private yacht. Mallorca, Ibiza, Formentera — on your schedule, at your pace.",
    details: ["Full professional crew", "All meals & beverages", "Island hopping", "Custom itinerary"],
    image: "/images/Hero.jpg",
    href: "/fleet/all",
    cta: "Browse Yachts",
  },
  {
    id: "villas",
    title: "Private Villas",
    body: "Handpicked residences with sea views, private pools, and dedicated staff on the Balearic Islands.",
    details: ["Daily housekeeping", "Concierge on call", "Airport transfers", "Welcome package"],
    image: "/images/Hero.jpg",
    href: "/villas",
    cta: "View Villas",
  },
  {
    id: "concierge",
    title: "Concierge",
    body: "Restaurant reservations, VIP access, helicopter transfers, private events — handled before you land.",
    details: ["24/7 availability", "Restaurant bookings", "VIP event access", "Travel coordination"],
    image: "/images/Hero.jpg",
    href: `${WA}?text=${encodeURIComponent("Hi, I'd like to discuss concierge services")}`,
    cta: "Get in Touch",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-16">

      {/* HEADER */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">What We Offer</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-lg" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Every detail.<br />Taken care of.
          </h1>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            From the moment you arrive to the moment you leave, we handle everything so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* SERVICES — alternating layout */}
      <section className="py-16 md:py-24">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className="border-b border-[#0A0A0A]/6 last:border-0"
          >
            <div className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`} style={{ aspectRatio: "4/3", minHeight: "320px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center py-8 md:py-16 px-6 md:px-10 ${i % 2 === 1 ? "lg:order-1 lg:pr-16 lg:pl-0" : "lg:pl-16 lg:pr-0"}`}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">0{i + 1}</p>
                <h2 className="text-3xl md:text-4xl mb-5 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                  {service.title}
                </h2>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-8 max-w-sm">{service.body}</p>
                <div className="space-y-2.5 mb-10">
                  {service.details.map((d) => (
                    <div key={d} className="flex items-center gap-3 text-sm text-[#0A0A0A]/60">
                      <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
                <a
                  href={service.href}
                  className="sm:self-start block w-full sm:w-auto text-center text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3.5 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
                >
                  {service.cta} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-8">Get Started</p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Tell us what you need.
          </h2>
          <p className="text-sm text-white/40 mb-10">We&apos;ll handle the rest.</p>
          <a
            href={`${WA}?text=${encodeURIComponent("Hi, I'd like to discuss my experience")}`}
            className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            Plan Your Experience
          </a>
        </div>
      </section>
    </main>
  );
}
