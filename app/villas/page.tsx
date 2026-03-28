import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Villa Rental Mallorca Ibiza - Luxury Accommodations",
  description: "Exclusive villa rentals in Mallorca, Ibiza & Formentera. Private pools, sea views, concierge service. Book your Mediterranean villa.",
};

const villas = [
  {
    image: "/images/Hero.jpg",
    name: "Villa Ibiza Sunset",
    subtitle: "4 Bedrooms",
    location: "Ibiza, Balearic Islands",
    price: "€2,500",
    capacity: 8,
    amenities: ["Infinity Pool", "Sea View Terrace", "Gourmet Kitchen", "Beach Access"],
    features: ["Private Chef Available", "Security System", "Smart Home"],
    included: ["Daily Housekeeping", "Welcome Package", "Concierge Service", "Beach Towels & Equipment"],
    availableInfo: "Available year-round. Minimum 3 nights.",
  },
  {
    image: "/images/Hero.jpg",
    name: "Villa Mallorca Cove",
    subtitle: "6 Bedrooms",
    location: "Mallorca, Balearic Islands",
    price: "€1,800",
    capacity: 12,
    amenities: ["Olympic Pool", "Multi-Level Terrace", "Wine Cellar", "Spa"],
    features: ["Yacht Dock Access", "24/7 Security", "Helicopter Landing Pad Available"],
    included: ["Daily Housekeeping", "Yacht Transfer Option", "Personal Concierge", "Airport Pickup"],
    availableInfo: "Available year-round. Minimum 5 nights.",
  },
  {
    image: "/images/Hero.jpg",
    name: "Villa Formentera Private",
    subtitle: "8 Bedrooms",
    location: "Formentera, Balearic Islands",
    price: "€3,200",
    capacity: 16,
    amenities: ["Private Beach", "Infinity Pool", "Cinema Room", "Wellness Center"],
    features: ["Helipad", "Submarine Dock Possible", "Exclusive Island Access"],
    included: ["Full Staff (Chef, Butler, Maid)", "Private Beach Access", "Water Toys", "VIP Transfers"],
    availableInfo: "Available May–October. Minimum 7 nights.",
  },
];

export default function VillasPage() {
  return (
    <main className="bg-white">
      {/* Back */}
      <div className="px-8 pt-8">
        <a href="/" className="text-gray-600 hover:text-black font-medium">&larr; Back to Home</a>
      </div>

      {/* Header */}
      <section className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">Luxury Villa Rentals</h1>
        <p className="text-xl text-gray-500 font-light mb-2">Ibiza & Mallorca</p>
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Escape to your private Mediterranean paradise. Our handpicked villas offer
          stunning views, world-class amenities, and personalized concierge service.
        </p>
      </section>

      {/* Villas */}
      <section className="pb-32 px-8 max-w-7xl mx-auto space-y-24">
        {villas.map((villa, i) => (
          <div key={villa.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <img src={villa.image} alt={villa.name} className={`w-full h-96 object-cover ${i % 2 === 1 ? "lg:order-2" : ""}`}/>
            <div className={`p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-sm text-gray-500 mb-2">📍 {villa.location}</p>
              <h2 className="text-4xl font-bold mb-1">{villa.name}</h2>
              <p className="text-gray-500 text-lg mb-6">{villa.subtitle}</p>

              {/* Price */}
              <div className="text-3xl font-bold text-black mb-8">
                {villa.price}<span className="text-lg font-normal text-gray-500">/night</span>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Capacity</p>
                  <p className="text-gray-600">{villa.capacity} Guests</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800">Availability</p>
                  <p className="text-gray-600">{villa.availableInfo.split(".")[0]}</p>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <p className="font-bold mb-3">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {villa.amenities.map((a) => (
                    <span key={a} className="bg-black text-white text-xs px-3 py-1 rounded-full">{a}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="font-bold mb-3">Features</p>
                <ul className="space-y-1">
                  {villa.features.map((f) => (
                    <li key={f} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included */}
              <div className="mb-6">
                <p className="font-bold mb-3">Included Services</p>
                <ul className="space-y-1">
                  {villa.included.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-500 mb-8">{villa.availableInfo}</p>

              <a
                href="https://wa.me/4915738248355"
                className="bg-black text-white px-10 py-4 font-bold rounded text-lg hover:bg-gray-800 hover:scale-105 transition-transform inline-block w-full text-center"
              >
                BOOK VILLA
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
