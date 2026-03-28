"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import type { Yacht, LocationTag, BoatType } from "@/lib/fleet";

const LOCATION_BADGE: Record<LocationTag, { label: string; color: string }> = {
  Mallorca:   { label: "Mallorca",   color: "#FF9800" },
  Ibiza:      { label: "Ibiza",      color: "#2196F3" },
  Formentera: { label: "Formentera", color: "#9C27B0" },
};

const MAX_PRICE = 50000;

function allLocationsForYacht(y: Yacht): LocationTag[] {
  return [y.locationTag, ...(y.additionalLocations ?? [])];
}

export default function FleetFilterClient({ yachts }: { yachts: Yacht[] }) {
  const [location, setLocation] = useState<LocationTag | "All">("All");
  const [boatType, setBoatType] = useState<BoatType | "All">("All");
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [sort, setSort]         = useState<"price-asc" | "price-desc" | "name">("price-asc");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allTypes = useMemo(
    () => Array.from(new Set(yachts.map((y) => y.boatType))) as BoatType[],
    [yachts]
  );
  const allLocations = useMemo(
    () => Array.from(new Set(yachts.flatMap(allLocationsForYacht))) as LocationTag[],
    [yachts]
  );

  const filtered = useMemo(() => {
    let result = yachts
      .filter((y) => location === "All" || allLocationsForYacht(y).includes(location))
      .filter((y) => boatType === "All" || y.boatType === boatType)
      .filter((y) => y.dayPrice <= maxPrice);

    if (sort === "price-asc")  result = [...result].sort((a, b) => a.dayPrice - b.dayPrice);
    if (sort === "price-desc") result = [...result].sort((a, b) => b.dayPrice - a.dayPrice);
    if (sort === "name")       result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [yachts, location, boatType, maxPrice, sort]);

  const hasActiveFilter = location !== "All" || boatType !== "All" || maxPrice < MAX_PRICE;

  function reset() {
    setLocation("All");
    setBoatType("All");
    setMaxPrice(MAX_PRICE);
    setSort("price-asc");
  }

  return (
    <>
      {/* FILTER BAR */}
      <div className="lg:sticky top-16 z-30 text-white shadow-lg" style={{ backgroundColor: "#0D1F2D" }}>
        {/* Mobile toggle */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden w-full px-4 py-3 flex items-center justify-between text-sm font-bold"
        >
          <span>Filters {hasActiveFilter && <span className="text-[#FFD700]">·</span>}</span>
          <span className="text-white/60 text-xs">{filtersOpen ? "▲ Hide" : "▼ Show"}</span>
        </button>

        <div className={`lg:block overflow-hidden transition-all duration-300 ${filtersOpen ? "max-h-[400px]" : "max-h-0 lg:max-h-none"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-wrap gap-3 md:gap-4 items-end">

          {/* Location */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/50 mb-2">Location</p>
            <div className="flex gap-1.5 flex-wrap">
              {(["All", ...allLocations] as (LocationTag | "All")[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className="px-3 py-1.5 rounded text-xs font-bold transition-all"
                  style={{
                    backgroundColor: location === loc ? "#ffffff" : "rgba(255,255,255,0.08)",
                    color: location === loc ? "#0D1F2D" : "rgba(255,255,255,0.7)",
                    border: location === loc ? "1px solid transparent" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {loc === "All" ? "All Locations" : loc}
                </button>
              ))}
            </div>
          </div>

          {/* Boat Type */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/50 mb-2">Type</p>
            <div className="flex gap-1.5 flex-wrap">
              {(["All", ...allTypes] as (BoatType | "All")[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setBoatType(t)}
                  className="px-3 py-1.5 rounded text-xs font-bold transition-all"
                  style={{
                    backgroundColor: boatType === t ? "#ffffff" : "rgba(255,255,255,0.08)",
                    color: boatType === t ? "#0D1F2D" : "rgba(255,255,255,0.7)",
                    border: boatType === t ? "1px solid transparent" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t === "All" ? "All Types" : t}
                </button>
              ))}
            </div>
          </div>

          {/* Price slider */}
          <div className="flex-1 min-w-48">
            <p className="text-[9px] uppercase tracking-widest text-white/50 mb-2">
              Max Price:{" "}
              <span className="text-white font-bold">
                {maxPrice >= MAX_PRICE ? "No limit" : `€${maxPrice.toLocaleString()}/day`}
              </span>
            </p>
            <input
              type="range"
              min={500}
              max={MAX_PRICE}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-white h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-white/30 mt-1">
              <span>€500</span><span>€{MAX_PRICE.toLocaleString()}+</span>
            </div>
          </div>

          {/* Sort */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/50 mb-2">Sort</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-white/10 text-white text-xs px-3 py-1.5 rounded border border-white/20 cursor-pointer focus:outline-none"
            >
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {/* Reset */}
          {hasActiveFilter && (
            <button
              onClick={reset}
              className="px-4 py-1.5 rounded text-xs font-bold border border-white/30 hover:border-white/70 text-white/70 hover:text-white transition-all"
            >
              ✕ Reset
            </button>
          )}
        </div>
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-2 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <span className="font-bold text-gray-800">{filtered.length}</span> of{" "}
          <span className="font-bold text-gray-800">{yachts.length}</span> yachts
        </p>
      </div>

      {/* GRID */}
      <section className="pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">⚓</p>
            <p className="text-xl font-bold text-gray-700 mb-2">No yachts found</p>
            <p className="text-gray-400 mb-8">Try adjusting your filters.</p>
            <button
              onClick={reset}
              className="px-8 py-3 rounded font-bold text-white hover:opacity-90 transition"
              style={{ backgroundColor: "#0D1F2D" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {filtered.map((yacht) => {
              const locations = allLocationsForYacht(yacht);
              const isWeekCharter = yacht.charterType === "week";

              return (
                <a
                  key={yacht.id}
                  href={`/fleet/${yacht.id}`}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block bg-white"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={yacht.image}
                      alt={`${yacht.name} – ${yacht.type}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Location badges — supports multiple */}
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {locations.map((loc) => (
                        <span
                          key={loc}
                          className="text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wide"
                          style={{ backgroundColor: LOCATION_BADGE[loc].color }}
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                    {/* Type badge */}
                    <span className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded">
                      {yacht.boatType}
                    </span>
                    {/* Week charter badge */}
                    {isWeekCharter && (
                      <span className="absolute bottom-2 right-2 bg-[#FFD700] text-[#0D1F2D] text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                        Week Charter
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h2 className="text-sm font-bold truncate mb-0.5" style={{ color: "#0D1F2D" }}>
                      {yacht.name}
                    </h2>
                    <p className="text-gray-400 text-[11px] mb-3">{yacht.length} · {yacht.location}</p>

                    <div className="flex gap-1.5 mb-4 flex-wrap">
                      <span className="bg-gray-50 rounded px-2 py-0.5 text-[10px] text-gray-600">{yacht.dayGuests} guests</span>
                      <span className="bg-gray-50 rounded px-2 py-0.5 text-[10px] text-gray-600">{yacht.cabins} cabins</span>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-1 flex items-center justify-between">
                      <p className="text-sm font-bold" style={{ color: "#0D1F2D" }}>{yacht.displayPrice}</p>
                      <span className="text-[#0D1F2D] text-xs font-bold group-hover:translate-x-1 transition-transform">
                        More info →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
