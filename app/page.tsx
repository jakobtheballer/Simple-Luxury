import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "./components/Testimonials";
import HeroVideo from "./components/HeroVideo";
import { fleet } from "@/lib/fleet";

export const metadata: Metadata = {
  title: "Luxury Yacht Charters & Private Villa Rentals – Ibiza, Mallorca & Formentera",
  description: "Book exclusive luxury yacht charters and private villa rentals in Ibiza, Mallorca & Formentera. Premium concierge, private pools, sea views. Plan your Mediterranean escape now.",
  alternates: { canonical: "https://simpleluxuryservice.de" },
  openGraph: {
    title: "Simple Luxury | Luxury Yacht Charters & Private Villas – Ibiza & Mallorca",
    description: "Exclusive yacht charters and private villa rentals in the Balearic Islands. Premium concierge, private pools, sea views.",
    url: "https://simpleluxuryservice.de",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Simple Luxury – Luxury Yacht Charter & Private Villas Ibiza Mallorca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Yacht Charters & Private Villas – Ibiza, Mallorca & Formentera",
    description: "Exclusive yacht charters and private villa rentals in the Balearic Islands. Premium concierge, private pools, sea views.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  const hutterYachts = fleet.filter((y) => y.brand === "Hütter");

  return (
    <main className="bg-white">

      {/* HERO */}
      <HeroVideo />

      {/* SERVICES */}
      <section className="py-16 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">What We Offer</p>
          <h2 className="text-3xl md:text-5xl mb-10 md:mb-16 max-w-lg" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            One call. Everything arranged.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#0A0A0A]/10">
            {[
              {
                href: "/fleet",
                label: "01",
                title: "Yacht Charters",
                body: "Day trips and overnight voyages aboard premium vessels in Mallorca and Ibiza.",
                cta: "View Fleet",
              },
              {
                href: "/villas",
                label: "02",
                title: "Private Villas",
                body: "Handpicked residences with sea views, private pools, and dedicated staff.",
                cta: "View Villas",
              },
              {
                href: "/services",
                label: "03",
                title: "Concierge",
                body: "Transfers, restaurant reservations, VIP access — handled before you arrive.",
                cta: "View Services",
              },
            ].map((s, i) => (
              <a
                key={s.href}
                href={s.href}
                className={`group block p-7 md:p-12 border-[#0A0A0A]/10 hover:bg-white transition-colors duration-300 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] mb-6">{s.label}</p>
                <h3 className="text-2xl mb-4 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                  {s.title}
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-8">{s.body}</p>
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#0A0A0A] border-b border-[#0A0A0A]/20 pb-0.5 group-hover:border-[#0A0A0A] transition-colors duration-300">
                  {s.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET TEASER */}
      <section className="py-16 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Exclusive Partner</p>
              <h2 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                Hütter Yachts
              </h2>
            </div>
            <a
              href="/fleet"
              className="text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 self-start md:self-auto"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0A0A0A]/10">
            {hutterYachts.map((yacht) => (
              <a
                key={yacht.id}
                href={`/fleet/${yacht.id}`}
                className="group block bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-2">{yacht.type}</p>
                  <h3 className="text-xl mb-1 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                    {yacht.name}
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/50 mb-6">{yacht.location}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#0A0A0A]">{yacht.displayPrice}</p>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#C9A96E] group-hover:tracking-[0.15em] transition-all duration-300">
                      View →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-32 px-6 md:px-10 bg-[#0A0A0A] text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { num: "500+", label: "Guests Hosted" },
            { num: "3", label: "Hütter Yachts" },
            { num: "24/7", label: "Concierge" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-6xl mb-3 text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                {num}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-16 md:py-32 px-6 md:px-10 border-t border-[#0A0A0A]/8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Insights</p>
              <h2 className="text-3xl md:text-5xl text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                Expert Tips & Guides
              </h2>
              <p className="text-sm text-[#0A0A0A]/50 mt-4 max-w-md leading-relaxed">
                Read our luxury travel blog for yacht charter tips, villa guides and Mediterranean recommendations.
              </p>
            </div>
            <a
              href="/blog"
              className="text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 self-start md:self-auto shrink-0"
            >
              Read Blog
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {[
              {
                category: "Yacht Charters",
                title: "Best Time for Yacht Charters in Ibiza",
                excerpt: "Season guide: when to book, what conditions to expect, and the months even regulars keep to themselves.",
                href: "/blog/best-time-yacht-charter-ibiza",
                date: "April 2024",
              },
              {
                category: "Guides",
                title: "Formentera Day Trip from Ibiza – Complete Itinerary",
                excerpt: "Hour-by-hour guide to the perfect Formentera day — Illa Espalmador, lunch, sunset sailing and how to arrive before the crowds.",
                href: "/blog/formentera-day-trip-ibiza",
                date: "April 2024",
              },
              {
                category: "Yacht Charters",
                title: "Private Yacht Charter Pricing Guide",
                excerpt: "A transparent breakdown of day and week charter costs — what's included, what's extra, and how to budget properly.",
                href: "/blog/private-yacht-charter-pricing-guide",
                date: "April 2024",
              },
            ].map((post) => (
              <a
                key={post.href}
                href={post.href}
                className="group block bg-white p-8 md:p-10 hover:bg-[#F5F2EB] transition-colors duration-300"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#C9A96E] mb-4">{post.category}</p>
                <h3 className="text-lg mb-3 text-[#0A0A0A] leading-snug" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                  {post.title}
                </h3>
                <p className="text-sm text-[#0A0A0A]/50 leading-relaxed mb-6">{post.excerpt}</p>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#C9A96E] group-hover:tracking-[0.2em] transition-all duration-300">
                  Read Article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="py-16 md:py-32 px-6 md:px-10 text-center" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[680px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-8">Get Started</p>
          <h2 className="text-3xl md:text-5xl mb-6 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Ready to plan your trip?
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 mb-10 leading-relaxed">
            Tell us your dates and we&apos;ll handle the rest.
          </p>
          <a
            href="https://wa.me/4915738248355"
            className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.15em] border border-[#0A0A0A] text-[#0A0A0A] px-12 py-4 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
          >
            Plan Your Charter
          </a>
        </div>
      </section>
    </main>
  );
}
