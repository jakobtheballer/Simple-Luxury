import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { blogPosts, getBlogPost, getRelatedPosts, formatDate } from "@/lib/blog-posts";
import type { BlogContent } from "@/lib/blog-posts";
import { generateBlogPostSchema } from "@/lib/blog-schema";
import BlogCard from "@/app/components/BlogCard";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const BASE = "https://simpleluxuryservice.de";
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${BASE}${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${BASE}${post.image}`],
    },
  };
}

function ContentBlock({ block }: { block: BlogContent }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base text-[#0A0A0A]/65 leading-[1.85] mb-6">
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2
        className={`${cormorant.className} text-2xl md:text-3xl font-light mt-14 mb-5`}
        style={{ color: DARK }}
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "tip") {
    return (
      <div
        className="my-8 p-6 border-l-2"
        style={{ backgroundColor: CREAM, borderColor: GOLD }}
      >
        <p className="text-[9px] uppercase tracking-[0.25em] mb-2" style={{ color: GOLD }}>
          {block.label}
        </p>
        <p className="text-sm text-[#0A0A0A]/70 leading-relaxed">{block.text}</p>
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="my-8">
        {block.heading && (
          <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>
            {block.heading}
          </p>
        )}
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-sm text-[#0A0A0A]/65 leading-relaxed">
              <span className="mt-1.5 w-px h-4 flex-shrink-0" style={{ backgroundColor: GOLD }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "cta") {
    return (
      <div className="my-10 p-7 border border-[#0A0A0A]/10 flex flex-col sm:flex-row sm:items-center gap-5">
        <p className="text-sm text-[#0A0A0A]/60 leading-relaxed flex-1">{block.text}</p>
        <a
          href={block.href}
          className="shrink-0 text-[10px] uppercase tracking-[0.15em] px-7 py-3.5 text-white whitespace-nowrap hover:opacity-80 transition-opacity"
          style={{ backgroundColor: DARK }}
        >
          {block.label} →
        </a>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="my-10">
        <div
          className="w-full flex items-center justify-center text-center p-10"
          style={{ aspectRatio: "16/9", backgroundColor: "#F5F2EB" }}
        >
          <div>
            <div className="h-px w-12 mx-auto mb-4" style={{ backgroundColor: GOLD }} />
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/40">{block.alt}</p>
          </div>
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-xs text-center text-[#0A0A0A]/40 italic">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const shareText = encodeURIComponent(`${post.title} – Simple Luxury`);
  const shareUrl = encodeURIComponent(`https://simpleluxuryservice.de/blog/${post.slug}`);

  return (
    <main className="bg-white pt-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
      />

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <a
              href="/blog"
              className="text-[9px] uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              style={{ color: GOLD }}
            >
              ← Blog
            </a>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              {post.category}
            </span>
          </div>

          <h1
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-7xl text-white font-light leading-[1.05] mb-8`}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              {formatDate(post.date)}
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              {post.readingTime}
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              By {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-14 md:py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_220px] gap-16">

          {/* Content */}
          <article>
            <p
              className={`${cormorant.className} text-2xl md:text-3xl font-light leading-snug mb-10`}
              style={{ color: DARK }}
            >
              {post.excerpt}
            </p>
            <div className="h-px w-12 mb-10" style={{ backgroundColor: GOLD }} />

            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* CTA */}
            <div className="p-7 border border-[#0A0A0A]/10">
              <p className="text-[9px] uppercase tracking-[0.25em] mb-3" style={{ color: GOLD }}>
                Ready to Book?
              </p>
              <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-6">
                Our concierge team handles everything — from charter to villa to arrival transfers.
              </p>
              <a
                href="/fleet"
                className="block text-center text-[10px] uppercase tracking-[0.15em] px-6 py-3.5 text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: DARK }}
              >
                Book Your Charter →
              </a>
              <a
                href="https://wa.me/4915738248355"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[10px] uppercase tracking-[0.15em] px-6 py-3.5 border border-[#0A0A0A]/20 text-[#0A0A0A]/60 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all duration-200 mt-3"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Share */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
                Share
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Share on WhatsApp
                </a>
                <a
                  href={`mailto:?subject=${shareText}&body=I thought you might enjoy this article: https://simpleluxuryservice.de/blog/${post.slug}`}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Share via Email
                </a>
              </div>
            </div>

            {/* Internal Nav */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
                Explore
              </p>
              <div className="space-y-2">
                {[
                  { href: "/fleet", label: "Yacht Charters" },
                  { href: "/villas", label: "Private Villas" },
                  { href: "/services", label: "Concierge" },
                  { href: "/guides", label: "Destination Guides" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-[10px] uppercase tracking-[0.1em] text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-200 py-1"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 md:py-24 px-6 md:px-10 bg-[#0A0A0A] text-white text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Ready to Experience It
          </p>
          <h2
            className={`${cormorant.className} text-4xl md:text-5xl font-light text-white mb-6`}
          >
            Book Your Charter Now
          </h2>
          <p className="text-sm text-white/40 mb-10 leading-relaxed">
            Our concierge team handles everything from charter booking to arrival transfers. Tell us your dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/fleet"
              className="text-center text-[11px] uppercase tracking-[0.15em] px-10 py-4 text-[#0A0A0A] font-medium hover:opacity-80 transition-opacity"
              style={{ backgroundColor: GOLD }}
            >
              View Yacht Fleet
            </a>
            <a
              href="https://wa.me/4915738248355"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
            Continue Reading
          </p>
          <h2
            className={`${cormorant.className} text-3xl md:text-4xl font-light mb-12`}
            style={{ color: DARK }}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {related.map((p) => (
              <div key={p.slug} className="bg-white">
                <BlogCard post={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
