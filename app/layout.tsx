import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { getLocalBusinessSchema, getOrganizationSchema, getServiceSchema } from "@/lib/structured-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simple Luxury | Hütter & Streich Adventures – Yacht Charter & Concierge Ibiza Mallorca",
  description: "Hütter & Streich Adventures – premium luxury concierge and yacht charter in Ibiza, Mallorca & Formentera. Private charters, exclusive villas, fine dining, and bespoke experiences.",
  keywords: "luxury concierge Ibiza, yacht charter Mallorca, Hütter Streich Adventures, private villas Balearics, luxury experiences Formentera, yacht charter Ibiza, concierge service Mallorca",
  metadataBase: new URL("https://simpleluxuryservice.de"),
  alternates: {
    canonical: "https://simpleluxuryservice.de",
  },
  openGraph: {
    title: "Simple Luxury | Hütter & Streich Adventures – Exclusive Balearic Experiences",
    description: "Hütter & Streich Adventures – premium concierge & yacht charter services in Ibiza, Mallorca and Formentera.",
    url: "https://simpleluxuryservice.de",
    siteName: "Simple Luxury",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simple Luxury – Yacht Charter & Concierge Ibiza Mallorca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Luxury | Hütter & Streich Adventures – Exclusive Balearic Experiences",
    description: "Hütter & Streich Adventures – luxury concierge, yacht charters & private villas in Ibiza, Mallorca & Formentera.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "KTxqWXPhIvSCMiYQNr_4iDO3_nUyy123zWim9Gjr9e4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">

        <Nav />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema()) }} />

        <div className="flex-1">
          {children}
        </div>

        {/* FOOTER */}
        <footer className="bg-[#0A0A0A] text-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Gold top line */}
            <div className="h-px bg-[#C9A96E]/40" />

            <div className="py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              {/* Brand */}
              <div>
                <p className="text-base tracking-[0.2em] uppercase text-white font-light mb-1">Simple Luxury</p>
                <p className="text-xs text-white/40 tracking-[0.15em] uppercase">Mediterranean · Experiences</p>
              </div>

              {/* Nav links */}
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { href: "/fleet", label: "Hütter Yachts" },
                  { href: "/fleet/all", label: "Full Fleet" },
                  { href: "/villas", label: "Villas" },
                  { href: "/services", label: "Services" },
                ].map(({ href, label }) => (
                  <a key={href} href={href} className="text-xs uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors duration-300">
                    {label}
                  </a>
                ))}
              </div>

              {/* Legal */}
              <div className="flex gap-5">
                <a href="/impressum"   className="text-xs text-white/30 hover:text-[#C9A96E] transition-colors duration-300">Impressum</a>
                <span className="text-white/15 text-xs">|</span>
                <a href="/datenschutz" className="text-xs text-white/30 hover:text-[#C9A96E] transition-colors duration-300">Datenschutz</a>
              </div>
            </div>

            <div className="border-t border-white/8 pb-8 pt-6 text-xs text-white/20 text-center">
              © 2026 Simple Luxury Services. All rights reserved.
            </div>
          </div>
        </footer>

        {/* WhatsApp */}
        <a
          href="https://wa.me/4915738248355"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#25D366" }}
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
