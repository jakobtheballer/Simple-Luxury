"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import type { Yacht, LocationTag, BoatType } from "@/lib/fleet";

const MAX_PRICE = 50000;

function allLocationsForYacht(y: Yacht): LocationTag[] {
  return [y.locationTag, ...(y.additionalLocations ?? [])];
}

export default function FleetFilterClient({ yachts }: { yachts: Yacht[] }) {
  const [location, setLocation] = useState<LocationTag | "All">("All");
  const [boatType, setBoatType] = useState<BoatType | "All">("All");
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "name">("price-asc");
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
      <div className="bg-[#0A0A0A] text-white border-b border-white/10">
        {/* Mobile toggle */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden w-full px-6 py-3.5 flex items-center justify-between"
        >
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/60">
            Filters {hasActiveFilter && <span className="text-[#C9A96E]">·</span>}
          </span>
          <span className="text-white/40 text-xs">{filtersOpen ? "▲" : "▼"}</span>
        </button>

        <div className={`lg:block overflow-hidden transition-all duration-300 ${filtersOpen ? "max-h-[400px]" : "max-h-0 lg:max-h-none"}`}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 flex flex-wrap gap-8 items-end">

            {/* Location */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2.5">Location</p>
              <div className="flex gap-2 flex-wrap">
                {(["All", ...allLocations] as (LocationTag | "All")[]).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocation(loc)}
                    className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-all duration-200"
                    style={{
                      borderColor: location === loc ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)",
                      color: location === loc ? "#fff" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {loc === "All" ? "All" : loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2.5">Type</p>
              <div className="flex gap-2 flex-wrap">
                {(["All", ...allTypes] as (BoatType | "All")[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setBoatType(t)}
                    className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-all duration-200"
                    style={{
                      borderColor: boatType === t ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)",
                      color: boatType === t ? "#fff" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {t === "All" ? "All" : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Price presets */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2.5">Budget</p>
              <div className="flex gap-2 flex-wrap">
                {([
                  { label: "All",       value: MAX_PRICE },
                  { label: "≤ €5k",     value: 5000 },
                  { label: "≤ €10k",    value: 10000 },
                  { label: "≤ €20k",    value: 20000 },
                ] as { label: string; value: number }[]).map(({ label, value }) => (
                  <button
                    key={label}
                    onClick={() => setMaxPrice(value)}
                    className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-all duration-200"
                    style={{
                      borderColor: maxPrice === value ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)",
                      color: maxPrice === value ? "#fff" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2.5">Sort</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="bg-transparent text-white text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-white/15 cursor-pointer focus:outline-none hover:border-white/40 transition-colors"
              >
                <option value="price-asc" className="bg-[#0A0A0A]">Price ↑</option>
                <option value="price-desc" className="bg-[#0A0A0A]">Price ↓</option>
                <option value="name" className="bg-[#0A0A0A]">Name A–Z</option>
              </select>
            </div>

            {/* Reset */}
            {hasActiveFilter && (
              <button
                onClick={reset}
                className="text-[10px] uppercase tracking-[0.1em] text-white/30 hover:text-white transition-colors duration-200"
              >
                × Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* COUNT */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-8 pb-2">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0A0A0A]/40">
          {filtered.length} of {yachts.length} vessels
        </p>
      </div>

      {/* GRID */}
      <section className="pb-16 md:pb-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-6 opacity-20">—</p>
            <p className="text-lg text-[#0A0A0A]/40 mb-2" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>No vessels found</p>
            <p className="text-sm text-[#0A0A0A]/30 mb-8">Try adjusting your filters.</p>
            <button
              onClick={reset}
              className="text-[11px] uppercase tracking-[0.1em] border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-[#0A0A0A]/8">
            {filtered.map((yacht) => {
              const locations = allLocationsForYacht(yacht);
              return (
                <a
                  key={yacht.id}
                  href={`/fleet/${yacht.id}`}
                  className="group block bg-white hover:bg-[#F5F2EB] transition-colors duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={yacht.image}
                      alt={`${yacht.name} – ${yacht.type}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    {/* Charter type badge */}
                    {yacht.charterType === "week" && (
                      <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.15em] bg-[#0A0A0A]/80 text-white px-2.5 py-1">
                        Week Charter
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6 md:p-8">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#C9A96E] mb-2">
                      {locations.join(" · ")}
                    </p>
                    <h2 className="text-lg mb-1 text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
                      {yacht.name}
                    </h2>
                    <p className="text-xs text-[#0A0A0A]/40 mb-5">{yacht.boatType} · {yacht.length}</p>

                    <div className="flex gap-5 mb-5">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-0.5">Guests</p>
                        <p className="text-sm text-[#0A0A0A]">{yacht.dayGuests}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#0A0A0A]/30 mb-0.5">Cabins</p>
                        <p className="text-sm text-[#0A0A0A]">{yacht.cabins}</p>
                      </div>
                    </div>

                    <div className="border-t border-[#0A0A0A]/8 pt-4 flex items-center justify-between">
                      <p className="text-sm font-medium text-[#0A0A0A]">{yacht.displayPrice}</p>
                      <span className="text-[10px] uppercase tracking-[0.1em] text-[#C9A96E] group-hover:tracking-[0.15em] transition-all duration-300">
                        View →
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
