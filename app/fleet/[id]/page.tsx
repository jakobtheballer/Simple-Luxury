import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${yacht.name} – Charter ${yacht.location} | Simple Luxury`,
    description: `${yacht.shortDescription}. ${yacht.type} available in ${yacht.location}. From ${yacht.pricing[0].price}/day.`,
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
    <main className="bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: yacht.name,
            description: yacht.description,
            category: "Yacht Charter",
            offers: yacht.pricing.map((p) => ({
              "@type": "Offer",
              name: `${p.season} – ${p.months}`,
              price: p.price.replace(/[€,]/g, ""),
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            })),
          }),
        }}
      />

      {/* HERO IMAGE */}
      <div className="relative w-full overflow-hidden" style={{ height: "75vh", minHeight: "500px" }}>
        <Image
          src={yacht.image}
          alt={yacht.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/10 to-transparent" />
        <a
          href="/fleet"
          className="absolute top-20 left-6 md:left-10 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 z-10"
        >
          ← Fleet
        </a>
        <div className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 z-10 flex items-end justify-between">
          <div className="text-white">
            {yacht.brand === "Hütter" && (
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-3">Exclusive Partner · House of Hütter</p>
            )}
            <h1 className="text-3xl md:text-6xl text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
              {yacht.name}
            </h1>
            <p className="text-sm text-white/50 mt-2">{yacht.type} · {yacht.location}</p>
          </div>
          <div className="text-right text-white hidden md:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">From</p>
            <p className="text-3xl text-white" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>{lowestPrice}</p>
            <p className="text-[9px] text-white/40 mt-1">per day · VAT included</p>
          </div>
        </div>
      </div>

      {/* SPECS ROW */}
      <div className="border-b border-[#0A0A0A]/8" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 md:py-8 flex flex-wrap gap-x-8 gap-y-4">
          {yacht.specs.map(({ label, value }, i) => (
            <div key={label} className={`flex items-center gap-8 ${i > 0 ? "" : ""}`}>
              {i > 0 && <div className="hidden md:block w-px h-8 bg-[#0A0A0A]/15" />}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0A0A0A]/35 mb-1">{label}</p>
                <p className="text-sm font-medium text-[#0A0A0A]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-20">

          {/* LEFT 60%: Description + Gallery + Features */}
          <div className="lg:col-span-3 space-y-16 md:space-y-20">

            {/* Description */}
            <section>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">About</p>
              <p className="text-[#0A0A0A]/70 leading-relaxed" style={{ maxWidth: "680px" }}>
                {yacht.description}
              </p>
            </section>

            {/* Gallery */}
            <GalleryClient images={yacht.images} name={yacht.name} />

            {/* Features */}
            <section>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Features & Amenities</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {yacht.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-[#0A0A0A]/70">
                    <span className="w-px h-4 bg-[#C9A96E] flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </section>

            {/* Water Toys */}
            {yacht.waterToys && yacht.waterToys.length > 0 && (
              <section>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">Water Toys</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {yacht.waterToys.map((toy) => (
                    <div key={toy} className="flex items-center gap-3 text-sm text-[#0A0A0A]/70">
                      <span className="w-px h-4 bg-[#0A0A0A]/20 flex-shrink-0" />
                      {toy}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Included / Not Included */}
            <section>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-6">What&apos;s Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/40 mb-4">Included</p>
                  <div className="space-y-2.5">
                    {yacht.included.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[#0A0A0A]/70">
                        <span className="text-[#C9A96E] text-xs">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/40 mb-4">Not Included</p>
                  <div className="space-y-2.5">
                    {yacht.notIncluded.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[#0A0A0A]/50">
                        <span className="text-[#0A0A0A]/25 text-xs">+</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT 40%: Sticky booking */}
          <div className="lg:col-span-2">
            <div className="lg:sticky top-24">

              {/* Price card */}
              <div className="border border-[#0A0A0A]/12 mb-8" style={{ backgroundColor: "#F5F2EB" }}>
                <div className="p-8 border-b border-[#0A0A0A]/8">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-2">Charter From</p>
                  <p className="text-4xl text-[#0A0A0A] mb-1" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                    {lowestPrice}
                  </p>
                  <p className="text-[10px] text-[#0A0A0A]/40">per day · VAT included</p>
                </div>

                <div className="p-8 space-y-3">
                  {[
                    { label: "Location", value: yacht.location },
                    { label: "Day Guests", value: `Up to ${yacht.dayGuests}` },
                    { label: "Overnight", value: `${yacht.overnightGuests} guests · ${yacht.cabins} cabins` },
                    { label: "Crew", value: `${yacht.crew} Captain` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm border-b border-[#0A0A0A]/6 pb-3 last:border-0 last:pb-0">
                      <span className="text-[#0A0A0A]/40">{label}</span>
                      <span className="text-[#0A0A0A] font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing table */}
              <div className="mb-8">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-4">
                  {yacht.charterType === "week" ? "Weekly rates · VAT & APA extra" : "Daily rates · VAT included"}
                </p>
                <div className="space-y-0 border border-[#0A0A0A]/8">
                  {yacht.pricing.map((row, i) => (
                    <div key={i} className={`flex justify-between items-center px-5 py-3.5 text-sm border-b border-[#0A0A0A]/6 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F5F2EB]"}`}>
                      <div>
                        <span className="text-[#0A0A0A]">{row.season}</span>
                        <span className="text-[#0A0A0A]/40 text-xs ml-2">{row.months}</span>
                      </div>
                      <span className="font-medium text-[#0A0A0A]">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/4915738248355?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20${encodeURIComponent(yacht.name)}.`}
                  className="block w-full text-center text-[11px] uppercase tracking-[0.15em] bg-[#0A0A0A] text-white py-4 hover:bg-[#0A0A0A]/80 transition-colors duration-300"
                >
                  Inquire About This Yacht
                </a>
                <a
                  href={`https://wa.me/4915738248355?text=Hi%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(yacht.name)}.`}
                  className="block w-full text-center text-[11px] uppercase tracking-[0.15em] border border-[#0A0A0A]/20 text-[#0A0A0A] py-4 hover:border-[#0A0A0A] transition-colors duration-300"
                >
                  Ask a Question
                </a>
                <p className="text-center text-[10px] text-[#0A0A0A]/30">We reply within 15 minutes</p>
              </div>

              {/* Hütter branding */}
              {yacht.brand === "Hütter" && (
                <div className="mt-8 pt-8 border-t border-[#0A0A0A]/8 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hutter-logo.svg" alt="House of Hütter" className="h-8 w-auto opacity-70" />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30">Exclusive Partner</p>
                    <p className="text-xs text-[#0A0A0A]/60">House of Hütter</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="bg-[#0A0A0A] py-16 md:py-20 px-6 md:px-10 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-2xl md:text-3xl text-white mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Ready to book?
          </h2>
          <p className="text-sm text-white/40 mb-8">Tell us your dates and we&apos;ll handle everything.</p>
          <a
            href={`https://wa.me/4915738248355?text=Hi%2C%20I%27d%20like%20to%20book%20${encodeURIComponent(yacht.name)}.`}
            className="block w-full sm:w-auto sm:inline-block text-center text-[11px] uppercase tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            Plan Your Charter
          </a>
        </div>
      </div>
    </main>
  );
}
