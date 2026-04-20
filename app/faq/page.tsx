import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { faqs, generateFAQSchema } from "@/lib/faq-data";
import FAQAccordion from "@/app/components/FAQAccordion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

export const metadata: Metadata = {
  title: "FAQ – Yacht Charters & Villa Rentals Ibiza & Mallorca",
  description:
    "Answers to common questions about luxury yacht charters, private villas, concierge services, and bookings in the Balearic Islands.",
  keywords:
    "yacht charter FAQ, villa rental questions, luxury concierge help, booking guide ibiza mallorca, balearic islands charter questions",
  alternates: { canonical: "https://simpleluxuryservice.de/faq" },
  openGraph: {
    title: "FAQ | Simple Luxury – Yacht Charters & Villas Ibiza & Mallorca",
    description:
      "Answers to common questions about yacht charters, private villas and concierge services across the Balearic Islands.",
    url: "https://simpleluxuryservice.de/faq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simple Luxury FAQ – Yacht Charters & Villas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Simple Luxury – Yacht Charters & Villas",
    description:
      "Common questions about yacht charters, private villas and concierge services in Ibiza, Mallorca & Formentera.",
    images: ["/og-image.jpg"],
  },
};

const CATEGORIES = [
  {
    label: "Yacht Charters",
    indices: [0, 1, 2, 3, 6, 10, 11, 12, 13],
  },
  {
    label: "Villas & Concierge",
    indices: [5, 7, 8, 9],
  },
  {
    label: "Policies",
    indices: [4],
  },
];

export default function FAQPage() {
  const schema = generateFAQSchema(faqs);

  return (
    <main className="bg-white pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Simple Luxury · Help & Information
          </p>
          <h1
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-7xl text-white font-light leading-[1.05] mb-8 max-w-3xl`}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Everything you need to know about yacht charters, private villas and concierge
            services across the Balearic Islands — answered honestly.
          </p>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section
        className="py-8 px-6 md:px-10 border-b border-[#0A0A0A]/8"
        style={{ backgroundColor: CREAM }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3">
          {[
            { label: "Yacht Charters", href: "#charters" },
            { label: "What's Included", href: "#included" },
            { label: "Booking & Policy", href: "#booking" },
            { label: "Villas & Concierge", href: "#villas" },
            { label: "Crew & Safety", href: "#crew" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[10px] uppercase tracking-[0.15em] px-4 py-2 border border-[#0A0A0A]/15 hover:border-[#0A0A0A] transition-colors duration-200"
              style={{ color: DARK }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[220px_1fr] gap-16">

          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <p
                  className="text-[9px] uppercase tracking-[0.25em] mb-5"
                  style={{ color: GOLD }}
                >
                  Topics
                </p>
                <nav className="space-y-3">
                  {[
                    { label: "Booking a Charter", href: "#q-0" },
                    { label: "What's Included", href: "#q-1" },
                    { label: "Charter vs Hotel", href: "#q-2" },
                    { label: "Customisation", href: "#q-3" },
                    { label: "Cancellation", href: "#q-4" },
                    { label: "Weddings", href: "#q-5" },
                    { label: "Guest Capacity", href: "#q-6" },
                    { label: "Villa Bookings", href: "#q-7" },
                    { label: "Concierge", href: "#q-8" },
                    { label: "Last-Minute Changes", href: "#q-9" },
                    { label: "Snorkelling", href: "#q-10" },
                    { label: "Crew & Safety", href: "#q-11" },
                    { label: "Food & Drinks", href: "#q-12" },
                    { label: "Why Simple Luxury", href: "#q-13" },
                  ].map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="block text-[10px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-200 py-0.5"
                    >
                      → {label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#0A0A0A]/8">
                <p
                  className="text-[9px] uppercase tracking-[0.25em] mb-4"
                  style={{ color: GOLD }}
                >
                  Quick Contact
                </p>
                <a
                  href="https://wa.me/4915738248355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] uppercase tracking-[0.1em] px-5 py-3 text-white text-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: DARK }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </aside>

          {/* Accordions */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-8"
              style={{ color: GOLD }}
            >
              {faqs.length} Questions Answered
            </p>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} id={`q-${i}`}>
                  <FAQAccordion faq={faq as Parameters<typeof FAQAccordion>[0]["faq"]} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LINKS */}
      <section className="py-14 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-4"
            style={{ color: GOLD }}
          >
            Explore Further
          </p>
          <h2
            className={`${cormorant.className} text-3xl md:text-4xl font-light mb-10`}
            style={{ color: DARK }}
          >
            Ready to start planning?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0A0A0A]/8">
            {[
              {
                href: "/fleet",
                label: "Yacht Fleet",
                desc: "Browse our catamarans and motor yachts with transparent day rates.",
              },
              {
                href: "/villas",
                label: "Private Villas",
                desc: "Handpicked properties with private pools, sea views and concierge.",
              },
              {
                href: "/services",
                label: "All Services",
                desc: "Transfers, dining, VIP access and lifestyle management.",
              },
              {
                href: "/guides",
                label: "Island Guides",
                desc: "Destination guides to Ibiza, Mallorca and Formentera.",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group block bg-white p-7 hover:bg-[#0A0A0A] transition-colors duration-300"
              >
                <div
                  className="h-px w-5 mb-5 group-hover:w-9 transition-all duration-300"
                  style={{ backgroundColor: GOLD }}
                />
                <h3
                  className="text-sm mb-2 group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    color: DARK,
                  }}
                >
                  {item.label}
                </h3>
                <p className="text-xs text-[#0A0A0A]/50 group-hover:text-white/50 leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[640px] mx-auto">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ color: GOLD }}
          >
            Still Have Questions?
          </p>
          <h2
            className={`${cormorant.className} text-4xl md:text-5xl font-light text-white mb-6`}
          >
            Our concierge team is here 24/7
          </h2>
          <p className="text-sm text-white/40 mb-10 leading-relaxed">
            If you did not find the answer you were looking for, reach us directly. We
            respond within two hours at any time of day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4915738248355"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[11px] uppercase tracking-[0.15em] px-10 py-4 text-[#0A0A0A] font-medium hover:opacity-80 transition-opacity"
              style={{ backgroundColor: GOLD }}
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:booking@simpleluxuryservice.de"
              className="text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Send an Email
            </a>
            <a
              href="/contact"
              className="text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Contact Form →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
