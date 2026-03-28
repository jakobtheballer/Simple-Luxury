import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services – Luxury Yacht Charters & Concierge | Simple Luxury",
  description: "Luxury yacht charters, island hopping, and bespoke concierge in Mallorca, Ibiza & Formentera.",
};

const WA = "https://wa.me/4915738248355";

const CHARTER_OPTIONS = [
  {
    name: "Half-Day",
    duration: "4–5 hours",
    guests: "Up to 10 guests",
    highlight: false,
    features: ["Professional Captain", "Light refreshments", "Snorkeling gear", "Basic water toys", "Insurance included"],
  },
  {
    name: "Full-Day",
    duration: "8 hours",
    guests: "Up to 12 guests",
    highlight: true,
    features: ["Full crew (Captain + Steward)", "Gourmet lunch", "Premium beverages", "All water sports", "Insurance included", "Personalised itinerary"],
  },
  {
    name: "Week Charter",
    duration: "7 days",
    guests: "Up to 12 guests",
    highlight: false,
    features: ["Full professional crew", "All meals & beverages", "Island hopping", "All water sports & toys", "Insurance included", "Custom itinerary"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-end justify-start bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/Hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/85 via-[#0D1F2D]/20 to-transparent" />
        <div className="relative z-10 px-6 md:px-10 pb-8 md:pb-10 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2 md:mb-3">Mallorca · Ibiza · Mediterranean</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Luxury Experiences</h1>
          <p className="text-sm md:text-lg font-light text-white/70">Tailored to your desires. Crafted for perfection.</p>
        </div>
        <a
          href="#services"
          className="absolute bottom-8 right-10 z-10 text-sm font-bold text-white/80 hover:text-white transition"
        >
          Explore ↓
        </a>
      </section>

      {/* FEATURED */}
      <section className="py-10 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="p-6 md:p-10 lg:p-14">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Featured Service</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-3 mb-4 md:mb-5" style={{ color: "#0D1F2D" }}>Luxury Yacht Charters</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Experience the Mediterranean in ultimate style. From intimate half-day cruises to week-long expeditions — our fleet of premium yachts is crewed by professionals dedicated to your comfort and pleasure.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Professional crew — Captain, Steward, Chef",
                "Gourmet catering & premium beverages",
                "Water sports & equipment included",
                "Full insurance & safety compliance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`${WA}?text=${encodeURIComponent("Hi, I'm interested in a yacht charter")}`}
                className="px-8 py-3 rounded font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: "#25D366" }}
              >
                Book on WhatsApp
              </a>
              <a
                href="/fleet/all"
                className="px-8 py-3 rounded font-bold border-2 hover:bg-gray-50 transition"
                style={{ borderColor: "#0D1F2D", color: "#0D1F2D" }}
              >
                View Fleet →
              </a>
            </div>
          </div>
          <div
            className="h-80 lg:h-auto min-h-[380px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Hero.jpg')" }}
          />
        </div>
      </section>

      {/* FILTERABLE SERVICES GRID (client) */}
      <ServicesClient />

      {/* CHARTER OPTIONS */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Charter Options</p>
          <h2 className="text-4xl font-bold text-center mb-3" style={{ color: "#0D1F2D" }}>How Would You Like to Charter?</h2>
          <p className="text-center text-gray-400 mb-12">From a few hours to a full week — we have the right format for you</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {CHARTER_OPTIONS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${tier.highlight ? "shadow-2xl md:-mt-4" : "border border-gray-200"}`}
                style={tier.highlight ? { backgroundColor: "#0D1F2D", color: "#fff" } : { backgroundColor: "#fff" }}
              >
                {tier.highlight && (
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: "#FFD700", color: "#0D1F2D" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className={`text-sm mb-7 ${tier.highlight ? "text-white/60" : "text-gray-400"}`}>
                  {tier.duration} · {tier.guests}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className={`font-bold ${tier.highlight ? "text-[#FFD700]" : "text-green-500"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Hi, I'd like to book a ${tier.name} charter`)}`}
                  className="block w-full text-center font-bold py-3 rounded-xl transition"
                  style={
                    tier.highlight
                      ? { backgroundColor: "#FFD700", color: "#0D1F2D" }
                      : { backgroundColor: "#0D1F2D", color: "#fff" }
                  }
                >
                  Enquire about {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <section className="py-20 px-8 text-white text-center" style={{ backgroundColor: "#0D1F2D" }}>
        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Experience?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">Our team is here to customise every detail. Message us and we&apos;ll make it happen.</p>
        <a
          href={`${WA}?text=${encodeURIComponent("Hi, I'd like to discuss my perfect experience")}`}
          className="font-bold px-10 py-4 rounded text-base hover:opacity-90 hover:scale-105 transition-transform inline-block shadow-lg"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
        >
          GET IN TOUCH ON WHATSAPP
        </a>
      </section>
    </main>
  );
}
