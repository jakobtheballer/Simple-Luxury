import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Curated Luxury Experiences | Simple Luxury",
  description: "Yacht charters, accommodation, fine dining, VIP transportation and lifestyle management across Mallorca, Ibiza and Formentera.",
};

const WA = "https://wa.me/4915738248355";

const SERVICES = [
  {
    num: "01",
    title: "Yacht & Marine Services",
    body: "Private day charters, week-long expeditions, and bespoke sailing experiences aboard premium vessels across the Balearic Islands.",
    details: [
      "Day & week charters",
      "Hütter power catamarans",
      "Superyachts & motor yachts",
      "Snorkeling & water toys",
      "Island hopping itineraries",
    ],
    href: "/fleet",
    cta: "View Fleet",
  },
  {
    num: "02",
    title: "Accommodation Curation",
    body: "Handpicked villas and residences with sea views, private pools, and dedicated staff — sourced to match your exact requirements.",
    details: [
      "Private villa rentals",
      "Sea view properties",
      "Daily housekeeping",
      "Welcome package",
      "Concierge on call",
    ],
    href: "/villas",
    cta: "View Villas",
  },
  {
    num: "03",
    title: "Fine Dining & Restaurants",
    body: "Priority reservations at the best tables in Mallorca and Ibiza — from Michelin-starred kitchens to private beach dinners.",
    details: [
      "Restaurant reservations",
      "Private chef on board",
      "Beach & sunset dinners",
      "Wine & tasting menus",
      "Exclusive tables secured",
    ],
    href: `${WA}?text=${encodeURIComponent("Hi, I'd like to arrange a dining experience.")}`,
    cta: "Enquire",
  },
  {
    num: "04",
    title: "VIP Transportation",
    body: "Seamless transfers from arrival to departure — helicopter, private boat, and chauffeur services coordinated around your schedule.",
    details: [
      "Helicopter transfers",
      "Private boat transfers",
      "Chauffeur & car service",
      "Airport meet & greet",
      "Cross-island logistics",
    ],
    href: `${WA}?text=${encodeURIComponent("Hi, I'd like to arrange VIP transportation.")}`,
    cta: "Enquire",
  },
  {
    num: "05",
    title: "Lifestyle Management",
    body: "From personal shopping and wellness retreats to private events — we manage the details so every moment on the islands is effortless.",
    details: [
      "Personal shopping",
      "Spa & wellness bookings",
      "Private event planning",
      "Yacht provisioning",
      "24/7 availability",
    ],
    href: `${WA}?text=${encodeURIComponent("Hi, I'd like to discuss lifestyle management.")}`,
    cta: "Enquire",
  },
  {
    num: "06",
    title: "Local Expertise & Insider Access",
    body: "Deep knowledge of the islands — hidden calas, exclusive venues, and experiences that don't appear in any guide.",
    details: [
      "Hidden coves & beaches",
      "VIP club & venue access",
      "Local cultural experiences",
      "Exclusive private events",
      "On-island expertise",
    ],
    href: `${WA}?text=${encodeURIComponent("Hi, I'd like to know more about your insider access.")}`,
    cta: "Enquire",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="py-14 md:py-28 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">What We Offer</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#0A0A0A] max-w-2xl" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Curated Luxury Experiences in the Balearics
          </h1>
          <p className="text-sm text-[#0A0A0A]/50 mt-6 max-w-md leading-relaxed">
            Every detail arranged. Every moment considered. From the moment you arrive to the moment you leave.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0A0A]/8">
          {SERVICES.map((s) => (
            <div key={s.num} className="bg-white p-8 md:p-10 flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">{s.num}</p>
              <h2 className="text-xl md:text-2xl mb-4 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                {s.title}
              </h2>
              <p className="text-sm text-[#0A0A0A]/55 leading-relaxed mb-8">{s.body}</p>
              <div className="space-y-2.5 mb-10 flex-1">
                {s.details.map((d) => (
                  <div key={d} className="flex items-center gap-3 text-sm text-[#0A0A0A]/60">
                    <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
              <a
                href={s.href}
                className="self-start text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/25 text-[#0A0A0A] px-7 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-14 md:py-28 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-8">Bespoke</p>
          <h2 className="text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Other Services Available on Request
          </h2>
          <p className="text-sm text-white/40 mb-10 leading-relaxed">
            Don&apos;t see what you&apos;re looking for? We arrange experiences beyond the standard — just ask.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${WA}?text=${encodeURIComponent("Hi, I'd like to discuss a bespoke service.")}`}
              className="block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Send an Enquiry →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
