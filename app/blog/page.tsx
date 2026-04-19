import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { blogPosts } from "@/lib/blog-posts";
import { generateBlogListSchema } from "@/lib/blog-schema";
import BlogCard from "@/app/components/BlogCard";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

export const metadata: Metadata = {
  title: "Luxury Travel Blog | Yacht Charter & Villa Guides – Balearic Islands",
  description: "Expert guides on luxury yacht charters, private villas and Mediterranean travel in Ibiza, Mallorca & Formentera. Insider tips from our concierge team.",
  keywords: "luxury travel blog ibiza, yacht charter guide mallorca, balearic islands travel tips, ibiza villa guide, luxury concierge tips, formentera day trip, mallorca beach guide",
  alternates: { canonical: "https://simpleluxuryservice.de/blog" },
  openGraph: {
    title: "Luxury Travel Blog | Yacht Charter & Villa Guides | Simple Luxury",
    description: "Expert guides on luxury yacht charters, private villas and Mediterranean travel in Ibiza, Mallorca & Formentera.",
    url: "https://simpleluxuryservice.de/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Simple Luxury Travel Blog – Ibiza & Mallorca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel Blog | Yacht Charter & Villa Guides",
    description: "Expert guides on luxury yacht charters, private villas and Mediterranean travel in Ibiza, Mallorca & Formentera.",
    images: ["/og-image.jpg"],
  },
};

const CATEGORIES = ["All", "Yacht Charters", "Villas", "Guides", "Services"] as const;

export default function BlogPage() {
  return (
    <main className="bg-white pt-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogListSchema()) }}
      />

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Simple Luxury · Insights
          </p>
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-8xl text-white font-light leading-[1.05] mb-8 max-w-3xl`}
          >
            Luxury Travel Blog –<br />Mediterranean Guides & Tips
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Insider guides on yacht charters, private villas, dining and travel across Ibiza, Mallorca
            and Formentera — written by the team that arranges it all.
          </p>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="py-6 px-6 md:px-10 border-b border-[#0A0A0A]/8 sticky top-16 z-20 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
              className="text-[10px] uppercase tracking-[0.15em] px-4 py-2 border border-[#0A0A0A]/15 hover:border-[#0A0A0A] transition-colors duration-200"
              style={{ color: DARK }}
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-10" style={{ color: GOLD }}>
            Latest Article
          </p>
          {(() => {
            const featured = blogPosts[blogPosts.length - 1];
            return (
              <a
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-px bg-[#0A0A0A]/8 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="relative bg-[#0A0A0A]"
                  style={{ minHeight: "380px" }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <p className="text-[9px] uppercase tracking-[0.25em] mb-3" style={{ color: GOLD }}>
                      {featured.category}
                    </p>
                    <p className={`${cormorant.className} text-4xl md:text-5xl text-white font-light leading-tight`}>
                      {featured.title}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>
                    {featured.readingTime}
                  </p>
                  <p className="text-base text-[#0A0A0A]/60 leading-relaxed mb-10">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-px w-6 transition-all duration-300 group-hover:w-12"
                      style={{ backgroundColor: GOLD }}
                    />
                    <span
                      className="text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: GOLD }}
                    >
                      Read Article
                    </span>
                  </div>
                </div>
              </a>
            );
          })()}
        </div>
      </section>

      {/* ALL POSTS GRID */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-10" style={{ color: GOLD }}>
            All Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-14 md:py-24 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
            Explore Our Services
          </p>
          <h2
            className={`${cormorant.className} text-3xl md:text-5xl font-light mb-12 max-w-xl`}
            style={{ color: DARK }}
          >
            Ready to book your Balearic experience?
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {[
              { href: "/fleet", label: "Yacht Charters", desc: "Private catamarans for day trips and overnight voyages in Ibiza and Mallorca." },
              { href: "/villas", label: "Private Villas", desc: "Handpicked villas with private pools, sea views and 24/7 concierge support." },
              { href: "/services", label: "Concierge", desc: "Transfers, restaurant bookings, VIP access — handled before you arrive." },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group block bg-white p-8 md:p-10 hover:bg-[#0A0A0A] transition-colors duration-300"
              >
                <div className="h-px w-6 mb-6 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: GOLD }} />
                <h3
                  className="text-lg mb-3 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, color: DARK }}
                >
                  {item.label}
                </h3>
                <p className="text-sm text-[#0A0A0A]/55 group-hover:text-white/50 leading-relaxed mb-6 transition-colors duration-300">
                  {item.desc}
                </p>
                <span className="text-[10px] uppercase tracking-[0.15em] group-hover:text-white transition-colors duration-300" style={{ color: GOLD }}>
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
