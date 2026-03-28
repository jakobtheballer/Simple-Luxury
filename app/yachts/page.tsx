import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Yacht Charter Mallorca Ibiza - Dr. No, Moneypenny, Goldfinger",
  description: "Charter our premium yachts in Mallorca & Ibiza. 55ft Catamaran, 42ft Sport Yacht, 65ft Motor Yacht. Book now.",
};

const yachts = [
  {
    image: "/images/goldfinger.jpg",
    name: "Dr. No",
    subtitle: "55ft Luxury Catamaran",
    capacity: 8,
    cabins: "4 (Master + 3 Guest)",
    price: "€5,000",
    bathrooms: 2,
    kitchen: "Full Kitchen",
    extras: "Sundeck, Watersports Equipment",
    features: ["Solar Panels", "Smart Climate Control", "Gourmet Catering"],
    bestFor: "Couples Getaway, Family Vacation, Sailing Experience",
    included: ["Professional Crew", "Fuel", "Watersports Equipment", "Snorkeling Gear", "Welcome Drinks"],
  },
  {
    image: "/images/moneypenny.jpg",
    name: "Moneypenny",
    subtitle: "42ft Sport Yacht",
    capacity: 6,
    cabins: "3 (Master + 2 Guest)",
    price: "€3,500",
    bathrooms: 1,
    kitchen: "Galley Kitchen",
    extras: "Open Deck, Jet Ski Included",
    features: ["High-Speed Cruising", "Open-Air Dining", "Premium Sound System"],
    bestFor: "Water Sports, Bachelor Party, Speed & Thrills",
    included: ["Professional Crew", "Fuel", "Jet Ski", "Paddleboards", "Champagne on Arrival"],
  },
  {
    image: "/images/dr-no.jpg",
    name: "Goldfinger",
    subtitle: "65ft Motor Yacht",
    capacity: 10,
    cabins: "5 (Master + 4 Guest)",
    price: "€6,500",
    bathrooms: 3,
    kitchen: "Full Professional Kitchen",
    extras: "Jacuzzi, Helipad-Ready",
    features: ["Luxury Interior", "Entertainment System", "VIP Crew", "Michelin Chef Available"],
    bestFor: "Luxury Events, Corporate Charter, Multi-Family Trip",
    included: ["Captain & Full Crew", "Fuel", "Jacuzzi", "Gourmet Catering", "VIP Transfers"],
  },
];

export default function YachtsPage() {
  return (
    <main className="bg-white">
      {/* Back */}
      <div className="px-8 pt-8">
        <a href="/" className="text-gray-600 hover:text-black font-medium">&larr; Back to Home</a>
      </div>

      {/* Header */}
      <section className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">Our Luxury Fleet</h1>
        <p className="text-xl text-gray-500 font-light mb-2">Mallorca & Ibiza</p>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Experience the Mediterranean in unparalleled style aboard our premium yachts.
          Each vessel is meticulously maintained and staffed with professional crews.
        </p>
      </section>

      {/* Yachts */}
      <section className="pb-32 px-8 max-w-7xl mx-auto space-y-24">
        {yachts.map((yacht) => (
          <div key={yacht.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
            <img src={yacht.image} alt={yacht.name} className="w-full h-96 object-cover"/>
            <div className="p-10">
              <h2 className="text-4xl font-bold mb-1">{yacht.name}</h2>
              <p className="text-gray-500 text-lg mb-6">{yacht.subtitle}</p>

              {/* Price */}
              <div className="text-3xl font-bold text-black mb-8">
                {yacht.price}<span className="text-lg font-normal text-gray-500">/night</span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Capacity</p>
                  <p className="text-gray-600">{yacht.capacity} Guests</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Cabins</p>
                  <p className="text-gray-600">{yacht.cabins}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Bathrooms</p>
                  <p className="text-gray-600">{yacht.bathrooms}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Kitchen</p>
                  <p className="text-gray-600">{yacht.kitchen}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="font-bold mb-3">Features</p>
                <div className="flex flex-wrap gap-2">
                  {yacht.features.map((f) => (
                    <span key={f} className="bg-black text-white text-xs px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="mb-6">
                <p className="font-bold mb-3">Included Services</p>
                <ul className="space-y-1">
                  {yacht.included.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <p className="text-sm text-gray-500 mb-8">
                <span className="font-bold text-gray-700">Best for:</span> {yacht.bestFor}
              </p>

              <p className="text-sm text-gray-500 mb-6 italic">Customization available — contact us for tailored packages.</p>

              <a
                href="https://wa.me/4915738248355"
                className="bg-black text-white px-10 py-4 font-bold rounded text-lg hover:bg-gray-800 hover:scale-105 transition-transform inline-block w-full text-center"
              >
                BOOK THIS YACHT
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
