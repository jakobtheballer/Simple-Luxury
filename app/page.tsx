import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "./components/Testimonials";
import { fleet } from "@/lib/fleet";

export const metadata: Metadata = {
  title: "Luxury Yacht Charter Mallorca Ibiza | Simple Luxury Services",
  description: "Premium yacht rentals in Mallorca & Ibiza. Fleet: Dr. No, Moneypenny, Goldfinger. 24/7 concierge, exclusive experiences.",
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center relative pt-16" style={{backgroundImage: "url('/images/Hero.jpg')"}}>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 text-center text-white max-w-2xl px-6" style={{ animation: "var(--animate-fade-in)" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6" style={{ animation: "var(--animate-slide-up)" }}>Luxury Made Simple</h1>
          <p className="text-lg md:text-2xl font-light mb-3 md:mb-4" style={{ animation: "var(--animate-slide-up-delay)" }}>Yacht Charters & Concierge Services</p>
          <p className="text-sm md:text-lg font-light mb-8 md:mb-10 text-white/80">Mallorca · Ibiza · Mediterranean</p>
          <a href="https://wa.me/4915738248355" className="bg-white text-black px-8 md:px-14 py-4 md:py-5 font-bold rounded text-base md:text-lg hover:bg-gray-100 hover:scale-105 transition-transform inline-block shadow-lg">BOOK NOW</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-10 md:mb-16 text-base md:text-lg">Everything for your Mediterranean experience</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <a href="/yachts" className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition block">
              <div className="relative h-56 w-full bg-gray-100">
                <Image src="/images/Hero.jpg" alt="Yachts" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-[26px] font-bold mb-3">Yacht Charters</h3>
                <p className="text-gray-600">Yacht Charter Mallorca & Ibiza — premium vessels for unforgettable Mediterranean sailing.</p>
              </div>
            </a>
            <a href="/villas" className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition block">
              <div className="relative h-56 w-full bg-gray-100">
                <Image src="/images/Hero.jpg" alt="Villas" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-[26px] font-bold mb-3">Villa Rentals</h3>
                <p className="text-gray-600">Ibiza Boat Rental & villa packages — private luxury accommodations on the Balearic Islands.</p>
              </div>
            </a>
            <a href="/services" className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition block">
              <div className="relative h-56 w-full bg-gray-100">
                <Image src="/images/Hero.jpg" alt="Concierge" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-[26px] font-bold mb-3">Concierge</h3>
                <p className="text-gray-600">24/7 personal assistance — Luxury Catamaran bookings, transfers, fine dining, VIP access.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FLEET TEASER */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4">Hütter Yachts</h2>
        <p className="text-center text-gray-600 mb-10 md:mb-16 text-base md:text-lg">Dr. No · Moneypenny · Goldfinger</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.filter((y) => y.brand === "Hütter").map((yacht) => (
            <a key={yacht.id} href={`/fleet/${yacht.id}`} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition block">
              <div className="relative h-56 w-full bg-gray-100">
                <Image src={yacht.image} alt={yacht.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{yacht.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{yacht.shortDescription}</p>
                <p className="text-xl font-bold text-[#0D1F2D]">{yacht.displayPrice}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/fleet" className="border-2 border-black text-black px-12 py-4 font-bold rounded text-lg hover:bg-black hover:text-white transition inline-block">VIEW ALL HÜTTER YACHTS</a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-28 px-4 md:px-8 text-white" style={{ backgroundColor: "#0D1F2D" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 md:gap-12 text-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">500+</h3>
            <p className="text-sm md:text-xl text-white/70">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">24/7</h3>
            <p className="text-sm md:text-xl text-white/70">Available</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">100%</h3>
            <p className="text-sm md:text-xl text-white/70">Quality</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="py-16 md:py-28 px-4 md:px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Ready?</h2>
        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10">Let&apos;s create your perfect Mediterranean Sailing experience.</p>
        <a href="https://wa.me/4915738248355" className="text-white px-8 md:px-14 py-4 md:py-5 font-bold rounded text-base md:text-lg hover:opacity-90 hover:scale-105 transition-transform inline-block shadow-lg" style={{ backgroundColor: "#0D1F2D" }}>GET IN TOUCH</a>
      </section>
    </main>
  );
}
