"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Emma & Marco",
    role: "Wedding Celebration",
    text: "Absolutely unforgettable. Simple Luxury made our wedding day perfect — the crew was professional, the yacht immaculate, and the entire experience exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Alexander König",
    role: "Corporate Retreat",
    text: "Booked BLUE INFINITY ONE for a corporate event. The concierge handled every detail flawlessly. My team felt like royalty. Highly recommend for business occasions.",
    rating: 5,
  },
  {
    name: "Sophia & Family",
    role: "Family Vacation",
    text: "The kids loved the water sports, and we parents loved the luxury and relaxation. Best holiday we've ever had. Can't wait to book again next summer.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Island Hopping Charter",
    text: "Chartered PETITCHET for island hopping. The captain knew every hidden cala. Fresh seafood, beautiful sunsets, and pure Mediterranean bliss.",
    rating: 5,
  },
  {
    name: "Lisa & David",
    role: "Anniversary Trip",
    text: "Pure romance on the water. The sunset dinner on the aft deck was magical. Thank you for making our 25th anniversary so special.",
    rating: 5,
  },
  {
    name: "François Dupont",
    role: "Luxury Travel Enthusiast",
    text: "I've chartered yachts worldwide — Simple Luxury Services stands out for genuine attention to detail and real hospitality. Will absolutely return.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8" style={{ backgroundColor: "#F8F8F6" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Customer Stories</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12" style={{ color: "#0D1F2D" }}>
          What Our Guests Say
        </h2>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-[#FFD700] text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm md:text-lg text-gray-700 text-center italic leading-relaxed mb-6 md:mb-8">
            &ldquo;{t.text}&rdquo;
          </p>

          {/* Author */}
          <div className="text-center mb-8">
            <p className="font-bold text-sm tracking-wide" style={{ color: "#0D1F2D" }}>{t.name}</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t.role}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: i === idx ? "#0D1F2D" : "#D1D5DB" }}
                />
              ))}
            </div>

            <button
              onClick={() => setIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
