import type { BlogPost } from "./blog-posts";

const BASE_URL = "https://simpleluxuryservice.de";

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}${post.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Simple Luxury",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/hutter-logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    articleBody: post.content
      .filter((block) => block.type === "paragraph")
      .map((block) => (block as { type: "paragraph"; text: string }).text)
      .join(" "),
    keywords: post.description,
    articleSection: post.category,
    inLanguage: "en",
    url: `${BASE_URL}/blog/${post.slug}`,
  };
}

export function generateBlogListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog`,
    name: "Simple Luxury – Mediterranean Travel Blog",
    description: "Expert guides on luxury yacht charters, private villa rentals and concierge services in Ibiza, Mallorca & Formentera.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Simple Luxury",
      url: BASE_URL,
    },
    inLanguage: "en",
  };
}
