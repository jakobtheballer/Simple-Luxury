import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fleet, getYacht } from "@/lib/fleet";
import GalleryClient from "./GalleryClient";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return fleet.map((y) => ({ id: y.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const yacht = getYacht(id);
  if (!yacht) return {};
  return {
    title: `${yacht.name} – ${yacht.type} | Simple Luxury`,
    description: `Charter ${yacht.name} in ${yacht.location}. ${yacht.shortDescription}. Prices from ${yacht.pricing[0].price}/day incl. VAT.`,
  };
}

export default async function YachtDetailPage({ params }: Props) {
  const { id } = await params;
  const yacht = getYacht(id);
  if (!yacht) notFound();

  const lowestPrice = yacht.pricing.reduce((min, p) =>
    parseInt(p.price.replace(/\D/g, "")) < parseInt(min.replace(/\D/g, "")) ? p.price : min,
    yacht.pricing[0].price
  );

  return (
    <main className="bg-white pt-16">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": yacht.name,
            "description": yacht.description,
            "category": "Yacht Charter Mallorca Ibiza",
            "offers": yacht.pricing.map((p) => ({
              "@type": "Offer",
              "name": `${p.season} – ${p.months}`,
              "price": p.price.replace("€", "").replace(",", ""),
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
            })),
          }),
        }}
      />

      {/* FULL-WIDTH IMAGE CAROUSEL */}
      <GalleryClient images={yacht.images} name={yacht.name} />

      {/* TITLE SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <a href="/fleet" className="text-gray-400 hover:text-gray-600 text-sm font-medium flex items-center gap-1.5 mb-3">
            ← All Yachts
          </a>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">{yacht.type} · {yacht.location}</p>
          {yacht.brand === "Hütter" ? (
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#0D1F2D" }}>
                  {yacht.name}
                </h1>
                <span className="bg-[#FFD700] text-[#0D1F2D] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0">
                  ✦ Exclusive Partner
                </span>
              </div>
              <p className="text-gray-500 text-base md:text-lg">{yacht.shortDescription}</p>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color: "#0D1F2D" }}>{yacht.name}</h1>
              <p className="text-gray-500 text-base md:text-lg">{yacht.shortDescription}</p>
            </div>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Charter From</p>
          <p className="text-3xl md:text-4xl font-bold" style={{ color: "#0D1F2D" }}>{lowestPrice}</p>
          <p className="text-xs text-gray-400 mt-1">per day · VAT included</p>
        </div>
      </div>

      {/* HOUSE OF HÜTTER BRANDING STRIP */}
      {yacht.brand === "Hütter" && (
        <div className="border-y border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hutter-logo.svg" alt="House of Hütter" className="h-9 w-auto" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Exclusive Partner</p>
                <p className="text-sm font-bold" style={{ color: "#6b3f2a" }}>House of Hütter</p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "#e46a22" }}>
              Hütter GT Fleet
            </span>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">

        {/* LEFT: Main content */}
        <div className="lg:col-span-2 space-y-10 md:space-y-14">

          {/* Quick Specs */}
          <section>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {yacht.specs.map(({ label, value }) => (
                <div key={label} className="rounded-xl p-4 md:p-5 border border-gray-200 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">{label}</p>
                  <p className="font-bold text-gray-900 text-sm md:text-base">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: "#0D1F2D" }}>About This Yacht</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{yacht.description}</p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: "#0D1F2D" }}>Features & Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {yacht.features.map((f) => (
                <div key={f} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                  <span style={{ color: "#25D366" }} className="text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-800 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Water Toys */}
          {yacht.waterToys && yacht.waterToys.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: "#0D1F2D" }}>Water Toys</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {yacht.waterToys.map((toy) => (
                  <div key={toy} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                    <span className="text-blue-500 text-lg flex-shrink-0">🌊</span>
                    <span className="text-gray-800 text-sm font-medium">{toy}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing Table */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3" style={{ color: "#0D1F2D" }}>Pricing</h2>
            <p className="text-gray-500 text-sm mb-4 md:mb-6">
              {yacht.charterType === "week"
                ? "Week charter prices · VAT (21%) & APA (35%) not included"
                : "All prices per day · VAT (21%) included"}
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#0D1F2D" }}>
                    <th className="text-left text-white text-xs uppercase tracking-wider px-4 md:px-6 py-3 md:py-4">Season</th>
                    <th className="text-left text-white text-xs uppercase tracking-wider px-4 md:px-6 py-3 md:py-4">Period</th>
                    <th className="text-right text-white text-xs uppercase tracking-wider px-4 md:px-6 py-3 md:py-4">Price / Day</th>
                  </tr>
                </thead>
                <tbody>
                  {yacht.pricing.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-gray-800 text-sm">{row.season}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600 text-sm">{row.months}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-right font-bold text-base md:text-xl" style={{ color: "#0D1F2D" }}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Included / Not Included */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" style={{ color: "#0D1F2D" }}>What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-green-50 rounded-2xl p-5 md:p-6 border border-green-100">
                <h3 className="font-bold text-green-800 mb-3 md:mb-4 flex items-center gap-2">
                  <span>✓</span> Included
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {yacht.included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-green-900 text-sm">
                      <span className="text-green-500 font-bold flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-200">
                <h3 className="font-bold text-gray-700 mb-3 md:mb-4 flex items-center gap-2">
                  <span>+</span> Not Included
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {yacht.notIncluded.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="text-gray-400 flex-shrink-0">+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Mobile CTA */}
          <div className="lg:hidden">
            <a
              href={`https://wa.me/4915738248355?text=Hi%2C%20I%27d%20like%20to%20charter%20${encodeURIComponent(yacht.name)}.`}
              className="block w-full text-center text-white font-bold py-4 rounded-xl text-lg hover:opacity-90 transition shadow"
              style={{ backgroundColor: "#25D366" }}
            >
              BOOK NOW via WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT: Sticky booking card */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="p-6 text-white" style={{ backgroundColor: "#0D1F2D" }}>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Charter From</p>
              <p className="text-4xl font-bold">{lowestPrice}<span className="text-base font-normal text-white/60">/day</span></p>
              <p className="text-white/60 text-xs mt-1">VAT included · APA extra</p>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <div className="space-y-3 pb-4 border-b border-gray-100">
                {[
                  { label: "Location", value: yacht.location },
                  { label: "Day Guests", value: `Up to ${yacht.dayGuests}` },
                  { label: "Overnight", value: `${yacht.overnightGuests} guests · ${yacht.cabins} cabins` },
                  { label: "Crew", value: `${yacht.crew} Captain` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/4915738248355?text=Hi%2C%20I%27d%20like%20to%20charter%20${encodeURIComponent(yacht.name)}.`}
                className="block w-full text-center text-white font-bold py-4 rounded-xl text-lg hover:opacity-90 hover:scale-105 transition-transform shadow"
                style={{ backgroundColor: "#25D366" }}
              >
                BOOK NOW
              </a>
              <p className="text-center text-xs text-gray-400">We reply within 15 minutes</p>

              <a
                href={`https://wa.me/4915738248355?text=Hi%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(yacht.name)}.`}
                className="block w-full text-center font-bold py-3 rounded-xl text-sm border-2 border-gray-200 hover:border-gray-400 transition-colors text-gray-700"
              >
                Ask a Question
              </a>

              {yacht.brand === "Hütter" && (
                <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hutter-logo.svg" alt="House of Hütter" className="h-7 w-auto" />
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400">Exclusive Partner</p>
                    <p className="text-xs font-bold" style={{ color: "#6b3f2a" }}>House of Hütter</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
