import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destination Guides – Ibiza, Formentera & Mallorca | Simple Luxury",
  description:
    "Explore curated luxury guides to the Balearic Islands. Discover the finest experiences, beaches, restaurants, and where to stay in Ibiza, Formentera and Mallorca.",
  alternates: { canonical: "https://simpleluxuryservice.de/guides" },
  openGraph: {
    title: "Destination Guides | Ibiza, Formentera & Mallorca | Simple Luxury",
    description:
      "Curated guides to the Balearic Islands — luxury experiences, beaches, restaurants and private villas.",
    url: "https://simpleluxuryservice.de/guides",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Balearic Island Guides – Simple Luxury" }],
  },
};

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

const guides = [
  {
    island: "Ibiza",
    href: "/guides/ibiza",
    label: "The Ultimate Luxury Guide",
    desc: "Beyond the clubs and the crowds lies a different Ibiza — one of hidden coves, world-class cuisine and seas that barely seem real. From private sunset charters and secret beaches to Michelin-starred terraces and VIP access, this is the island as it should be experienced.",
  },
  {
    island: "Formentera",
    href: "/guides/formentera",
    label: "Escape to Mediterranean Serenity",
    desc: "The smallest and arguably most beautiful island in the Balearics. Formentera has no large hotels worth recommending, no motorways and no mass tourism — just extraordinary water, unhurried pace and a coastline that makes the Caribbean look ordinary.",
  },
  {
    island: "Mallorca",
    href: "/guides/mallorca",
    label: "Mediterranean Majesty & Luxury",
    desc: "Mountains that descend directly into the sea, vineyards producing serious wine, a capital with a genuine cultural life and coves accessible only by boat. Mallorca contains more variety than most countries and rewards those who know where to look.",
  },
];

export default function GuidesIndexPage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Simple Luxury · Balearic Islands
          </p>
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-8xl text-white font-light leading-[1.05] mb-8 max-w-3xl`}
          >
            Destination Guides
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Three islands. Each entirely different in character, united by extraordinary water and a quality
            of light that defines the Mediterranean at its best. These guides are built from years of
            direct experience — the beaches, the kitchens, the boat routes and the people that make
            each island worth knowing properly. Use them to plan, or use them as a reason to let us plan for you.
          </p>
        </div>
      </section>

      {/* GUIDE CARDS */}
      <section className="py-16 md:py-28 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-12" style={{ color: GOLD }}>
            Choose Your Island
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((g) => (
              <a
                key={g.island}
                href={g.href}
                className="group block bg-white rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image placeholder */}
                <div
                  className="w-full h-52 flex items-end p-6"
                  style={{ backgroundColor: DARK }}
                >
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] mb-2" style={{ color: GOLD }}>
                      {g.label}
                    </p>
                    <p
                      className={`${cormorant.className} text-3xl text-white font-light`}
                    >
                      {g.island}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-6">
                    {g.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-px w-6 transition-all duration-300 group-hover:w-10"
                      style={{ backgroundColor: GOLD }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                      Read Guide
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S IN EACH GUIDE */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
            What You'll Find
          </p>
          <h2
            className={`${cormorant.className} text-3xl md:text-5xl font-light mb-12 max-w-xl`}
            style={{ color: DARK }}
          >
            Each guide covers everything that matters
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Top Experiences", desc: "Five curated activities per island, each with practical booking detail and an honest summary." },
              { title: "Where to Stay", desc: "Only the private villas and properties we know personally — no paid placements, no guesswork." },
              { title: "The Finest Beaches", desc: "The ones worth the effort, with honest assessments of what makes each one exceptional." },
              { title: "Dining & Restaurants", desc: "From cliff-edge terrace restaurants to hidden village kitchens — with priority reservation access through our concierge." },
            ].map((item) => (
              <div key={item.title} className="border-t-2 pt-6" style={{ borderColor: GOLD }}>
                <h3
                  className={`${cormorant.className} text-xl font-light mb-3`}
                  style={{ color: DARK }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#0A0A0A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              Ready to Visit?
            </p>
            <h2
              className={`${cormorant.className} text-4xl md:text-5xl font-light text-white max-w-lg`}
            >
              Let us plan your Balearic experience
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/contact"
              className="px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#0A0A0A] font-medium transition-opacity duration-300 hover:opacity-80 text-center"
              style={{ backgroundColor: GOLD }}
            >
              Get in Touch
            </a>
            <a
              href="/fleet"
              className="px-8 py-4 text-xs uppercase tracking-[0.2em] text-white border transition-all duration-300 hover:bg-white hover:text-[#0A0A0A] text-center"
              style={{ borderColor: "rgba(201,169,110,0.4)" }}
            >
              Browse Yachts
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
