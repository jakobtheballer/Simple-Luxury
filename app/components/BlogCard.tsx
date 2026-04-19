import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";
import { formatDate } from "@/lib/blog-posts";

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";

const CATEGORY_COLOR: Record<string, string> = {
  "Yacht Charters": "#1A3A5C",
  Villas: "#4A2C17",
  Guides: "#1C3A1C",
  Services: "#3A1C3A",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-[#0A0A0A]/8 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          onError={() => {}}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[9px] uppercase tracking-[0.2em] text-white px-3 py-1.5 font-medium"
            style={{ backgroundColor: CATEGORY_COLOR[post.category] ?? DARK }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[9px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>
            {formatDate(post.date)}
          </span>
          <span className="text-[#0A0A0A]/20 text-xs">·</span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/40">
            {post.readingTime}
          </span>
        </div>

        <h3
          className="text-xl mb-3 leading-snug transition-opacity duration-300 group-hover:opacity-70"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, color: DARK }}
        >
          {post.title}
        </h3>

        <p className="text-sm text-[#0A0A0A]/55 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2">
          <div
            className="h-px w-5 transition-all duration-300 group-hover:w-8"
            style={{ backgroundColor: GOLD }}
          />
          <span
            className="text-[10px] uppercase tracking-[0.15em]"
            style={{ color: GOLD }}
          >
            Read Article
          </span>
        </div>
      </div>
    </a>
  );
}
