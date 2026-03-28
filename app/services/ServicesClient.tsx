"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "concierge",
    title: "Concierge Services",
    description: "White-glove treatment, 24/7",
    icon: "🎩",
    category: "experiences",
    features: ["Restaurant bookings", "VIP access", "Travel planning", "Event coordination", "24/7 support"],
  },
  {
    id: "day-charter",
    title: "Full-Day Charter",
    description: "8 hours of Mediterranean bliss",
    icon: "⛵",
    category: "charters",
    features: ["8 hours", "Up to 12 guests", "Crew included", "Lunch & drinks", "Water sports"],
  },
  {
    id: "sunset-charter",
    title: "Sunset Experience",
    description: "Golden hour on the Mediterranean",
    icon: "🌅",
    category: "charters",
    features: ["4–5 hours", "Up to 10 guests", "Captain & crew", "Aperitifs included", "Premium wine"],
  },
  {
    id: "week-charter",
    title: "Week-Long Expedition",
    description: "Explore multiple islands at your own pace",
    icon: "🗺️",
    category: "charters",
    features: ["7 days", "Full crew", "All meals", "Mallorca · Ibiza · Formentera", "Flexible itinerary"],
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description: "Relax and unwind at sea",
    icon: "🧘",
    category: "addons",
    features: ["Massage therapy", "Yoga classes", "Wellness coaching", "Spa products", "Relaxation packages"],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Team building and celebrations on the water",
    icon: "🎯",
    category: "events",
    features: ["AV equipment", "Meeting spaces", "Team activities", "Full catering", "Transport logistics"],
  },
];

const CATEGORIES = [
  { id: "all",          label: "All Services" },
  { id: "charters",    label: "Charters" },
  { id: "experiences", label: "Concierge" },
  { id: "addons",      label: "Add-Ons" },
  { id: "events",      label: "Events" },
];

const WA = "https://wa.me/4915738248355";

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 px-8" style={{ backgroundColor: "#F8F8F6" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">What We Offer</p>
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: "#0D1F2D" }}>Our Services</h2>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2 rounded text-sm font-bold transition-all"
              style={{
                backgroundColor: activeCategory === cat.id ? "#0D1F2D" : "#ffffff",
                color:           activeCategory === cat.id ? "#ffffff"  : "#0D1F2D",
                border: "1px solid #0D1F2D",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0D1F2D" }}>{service.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{service.description}</p>
              <ul className="space-y-1.5 mb-6">
                {service.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <a
                  href={`${WA}?text=${encodeURIComponent(`Hi, I'm interested in: ${service.title}`)}`}
                  className="block w-full text-center text-xs font-bold px-4 py-2.5 rounded text-white hover:opacity-90 transition"
                  style={{ backgroundColor: "#0D1F2D" }}
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
