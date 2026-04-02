import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibiza Luxury Guide 2025 – Best Experiences, Beaches & Villas | Simple Luxury",
  description:
    "The definitive luxury guide to Ibiza. Discover hidden coves, private yacht charters, Michelin-starred dining, exclusive villas and the island's best beaches — curated by Simple Luxury.",
  alternates: { canonical: "https://simpleluxuryservice.de/guides/ibiza" },
  openGraph: {
    title: "Ibiza: The Ultimate Luxury Guide | Simple Luxury",
    description:
      "Private yacht charters, exclusive villas, fine dining and the finest beaches in Ibiza — your complete luxury guide.",
    url: "https://simpleluxuryservice.de/guides/ibiza",
    images: [{ url: "/images/guides/ibiza/ibiza-hero-yacht-sunset.jpg", width: 1200, height: 630, alt: "Ibiza Luxury Guide – Simple Luxury" }],
  },
};

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

function GuideImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 w-full">
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption
          className={`${cormorant.className} mt-3 text-sm font-light text-center`}
          style={{ color: `${DARK}60` }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function IbizaGuidePage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Destination Guide · Ibiza
          </p>
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-8xl text-white font-light leading-[1.05] mb-8`}
          >
            Ibiza: The Ultimate<br />Luxury Guide
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Beyond the clubs and the crowds lies a different Ibiza — one of secluded coves, ancient fincas,
            world-class cuisine and seas so clear they barely seem real. This is the island we know intimately,
            and the one we want to show you.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10 -mt-1" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto pb-16 md:pb-20">
          <GuideImage
            src="/images/guides/ibiza/ibiza-hero-yacht-sunset.jpg"
            alt="Luxury superyacht sailing at sunset in Ibiza with turquoise Mediterranean waters"
            caption="The west coast of Ibiza, viewed from the deck of a private charter yacht at golden hour"
            priority
          />
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="py-10 px-6 md:px-10 border-b border-[#0A0A0A]/8" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: GOLD }}>In This Guide</p>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Top 5 Experiences", "#experiences"],
              ["Where to Stay", "#where-to-stay"],
              ["The Finest Beaches", "#beaches"],
              ["Culinary Excellence", "#dining"],
              ["When to Visit", "#when-to-visit"],
              ["Book Your Experience", "#cta"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs uppercase tracking-[0.1em] hover:opacity-60 transition-opacity duration-300"
                style={{ color: DARK }}
              >
                → {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* TOP 5 EXPERIENCES */}
      <section id="experiences" className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Curated Experiences</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-8`} style={{ color: DARK }}>
            Top 5 Exclusive Experiences
          </h2>

          <GuideImage
            src="/images/guides/ibiza/ibiza-yacht-sailing.jpg"
            alt="Professional crew sailing luxury yacht with sunset drinks on deck"
            caption="Aboard a private charter — Ibiza's west coast from the water"
          />

          <div className="space-y-16 mt-8">

            {/* Experience 1 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>01</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Private Yacht Charter at Sunset
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  There is no better way to experience Ibiza than from the water as the sun drops behind Es Vedrà.
                  Aboard one of our <a href="/fleet" className="underline hover:opacity-70 transition-opacity" style={{ color: DARK }}>private charter yachts</a>,
                  the west coast transforms into something extraordinary — jagged cliffs turning amber,
                  the sea shimmering in shades of copper and rose. We position the vessel at anchor in a quiet bay,
                  a private chef brings dinner on deck, and for a few hours the island belongs entirely to you.
                  Whether you prefer a sleek motor yacht or a sailing catamaran, we match the vessel to the moment.
                  Aperitivo, dinner, or simply drifting — your evening, your pace.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">2–4 hours from Ibiza Marina. Best May–October. Available from <a href="/fleet" className="underline" style={{ color: DARK }}>€1,200</a> per session.</p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>02</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Explore Hidden Coves by Speedboat
                </h3>
                <GuideImage
                  src="/images/guides/ibiza/ibiza-turquoise-cove.jpg"
                  alt="Turquoise Mediterranean waters with dramatic cliffs framing secluded beach cove"
                  caption="One of Ibiza's many calas — accessible only from the sea"
                />
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Ibiza's coastline conceals more than a hundred calas — small, sheltered coves accessible only by sea.
                  Most visitors never find them. We do. A private speedboat departs in the morning and charts a course
                  along the northern and southern coasts, pausing wherever the water catches your eye.
                  Crystal-clear shallows over white sand, caves carved by centuries of tide, boulders perfect for diving.
                  We carry snorkelling gear, a cold box with wine and food, and complete flexibility.
                  No schedule, no other passengers, no commentary over a loudspeaker.
                  Just the sound of water and the quiet satisfaction of finding something most people never see.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Full or half-day. North coast or south coast routes. Snorkelling and picnic included. <a href="/contact" className="underline" style={{ color: DARK }}>Enquire to book.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>03</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Private Chef Dining in Villa
                </h3>
                <GuideImage
                  src="/images/guides/ibiza/ibiza-gourmet-dining.jpg"
                  alt="Gourmet Mediterranean seafood plating on luxury villa terrace"
                  caption="A private chef dinner — the best table on the island is often your own"
                />
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Some nights, the best table on the island is yours. We arrange a private chef —
                  Ibiza has extraordinary culinary talent working quietly away from the restaurant circuit —
                  who designs a menu around your preferences, sources from local producers and market stalls that morning,
                  and transforms your terrace into something better than any restaurant.
                  A five-course dinner with wine pairing, served overlooking the sea or around a candlelit pool,
                  feels categorically different from any restaurant experience.
                  It's intimate, unhurried, and tailored entirely to you.
                  This is one of our most-requested <a href="/services" className="underline hover:opacity-70 transition-opacity" style={{ color: DARK }}>concierge services</a>.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Available any evening. 4–7 guests ideal. Menu tailored to preferences. <a href="/contact" className="underline" style={{ color: DARK }}>Book through our concierge.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>04</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  VIP Club Access & After-Dark Ibiza
                </h3>
                <GuideImage
                  src="/images/guides/ibiza/ibiza-vip-nightclub.jpg"
                  alt="Elegant luxury nightclub interior with sophisticated bar lounge"
                  caption="Ibiza's clubs at their best — when you know the right people"
                />
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  If you want to experience Ibiza's legendary nightlife without the queues, the ordinary tables
                  or the indignity of a €40 gin and tonic in a crowded bar, we handle it properly.
                  Our relationships with the island's clubs — Pacha, Hi, DC-10, Amnesia — mean guaranteed access,
                  private booth reservations and the kind of welcome that makes the difference between an experience
                  and an event. We also know the smaller, more discerning venues that don't advertise:
                  the terrace bars that stay open until dawn with a crowd worth being part of,
                  the residencies where the music actually matters. Tell us what kind of night you're after
                  and we'll make it happen.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">All major clubs. VIP tables, bottle service, transfers. <a href="/services" className="underline" style={{ color: DARK }}>Part of our concierge offering.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>05</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Helicopter Tour of the Island
                </h3>
                <GuideImage
                  src="/images/guides/ibiza/ibiza-aerial-helicopter.jpg"
                  alt="Aerial view of Ibiza coastline and Es Vedrà island from helicopter"
                  caption="Es Vedrà and the southwest coast from a private helicopter"
                />
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Ibiza from the air is a revelation — the patchwork of white salt flats at Ses Salines,
                  the dense pine forests of the interior, the irregular turquoise of the northern calas,
                  and Dalt Vila rising above the old town in pale stone. A private helicopter tour lasting
                  thirty to sixty minutes covers the full island and provides a perspective that reframes
                  everything you've already seen at ground level. For guests arriving or departing,
                  we can also arrange helicopter transfers from Mallorca or mainland Spain —
                  a seamless way to begin an island stay on the right note.
                  Speak to our team about routing and timing.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">30 or 60-minute tours. Up to 4 passengers. Inter-island transfers also available. <a href="/contact" className="underline" style={{ color: DARK }}>Enquire here.</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHERE TO STAY */}
      <section id="where-to-stay" className="py-16 md:py-28 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Private Residences</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-6`} style={{ color: DARK }}>
            Where to Stay in Ibiza
          </h2>
          <GuideImage
            src="/images/guides/ibiza/ibiza-villa-pool.jpg"
            alt="Luxury clifftop villa with infinity pool overlooking Mediterranean Sea"
            caption="A clifftop infinity pool — the private villas we recommend are chosen for views like this"
          />
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            The right villa makes everything else easier. These are properties we know personally —
            places where the staff understand discretion, the pools are genuinely private and the views
            are worth waking up for. All bookable through our <a href="/villas" className="underline hover:opacity-70" style={{ color: DARK }}>villa programme</a>.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Villa Mestre", desc: "Clifftop perch above the west coast with a saltwater infinity pool and uninterrupted views towards Formentera.", href: "/villas" },
              { name: "Villa Tom", desc: "A modernist finca outside Santa Gertrudis. Five bedrooms, olive groves, a wine cellar and genuine seclusion.", href: "/villas" },
              { name: "Villa Pep Luis", desc: "Traditional Ibizan architecture brought quietly up to date. Located minutes from Ibiza Town but a world apart.", href: "/villas" },
            ].map((v) => (
              <a key={v.name} href={v.href} className="group block p-6 bg-white rounded hover:shadow-md transition-shadow duration-300">
                <div className="h-px w-8 mb-4 transition-all duration-300 group-hover:w-12" style={{ backgroundColor: GOLD }} />
                <h3 className={`${cormorant.className} text-xl font-light mb-3`} style={{ color: DARK }}>{v.name}</h3>
                <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">{v.desc}</p>
                <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>View Villa →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BEACHES */}
      <section id="beaches" className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Coastline</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-6`} style={{ color: DARK }}>
            The Finest Beaches in Ibiza
          </h2>
          <GuideImage
            src="/images/guides/ibiza/ibiza-pristine-beach.jpg"
            alt="Pristine turquoise beach with golden sand and crystal clear Mediterranean waters"
            caption="Ibiza's coastline at its finest — clear water, fine sand, no crowds"
          />
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Ibiza has over fifty beaches. These four stand apart — each different in character,
            all exceptional in their own way.
          </p>
          <div className="space-y-8">
            {[
              {
                name: "Cala Comte",
                region: "West Coast",
                desc: "The sunset benchmark. Multiple small coves sit sheltered within a single bay, each with water in a different shade of blue. The rock formations divide the beach into natural private areas, and the view towards the small offshore island of S'Illa des Bosc is about as close to perfect as the Mediterranean gets. Arrive by boat to find the best spot before the afternoon crowds.",
              },
              {
                name: "Es Cavallet",
                region: "South Coast",
                desc: "Long, white and backed by low dunes and pines, Es Cavallet is one of Ibiza's most composed beaches. The Natural Park status keeps development minimal, the water is shallow and clear, and the atmosphere — particularly at the northern end — is calm and unhurried. The beach restaurant serves grilled fish and cold rosé that you won't need to dress up for.",
              },
              {
                name: "Cala Benirrás",
                region: "North Coast",
                desc: "This north coast cove has a character entirely its own. Surrounded by tall cliffs covered in pine, the beach is small and sheltered with dark sand — unusual for Ibiza. On Sunday evenings, drummers gather on the rocks to accompany the sunset. It's one of the island's genuinely unrepeatable moments, and no photograph has ever done it justice.",
              },
              {
                name: "Ses Salines",
                region: "South Coast",
                desc: "Part of a protected natural park that stretches between Ibiza and Formentera, Ses Salines is long, pale and cosmopolitan without being overwhelming. The water is extraordinary — flat, turquoise and warm well into October. The beach clubs here have improved dramatically and a long lunch at Jockey Club remains one of the better ways to spend an afternoon on the island.",
              },
            ].map((b) => (
              <div key={b.name} className="grid md:grid-cols-[160px_1fr] gap-6 pb-8 border-b border-[#0A0A0A]/8 last:border-0 last:pb-0">
                <div>
                  <h3 className={`${cormorant.className} text-xl font-light`} style={{ color: DARK }}>{b.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: GOLD }}>{b.region}</p>
                </div>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINING */}
      <section id="dining" className="py-16 md:py-28 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Food & Wine</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-6`} style={{ color: DARK }}>
            Culinary Excellence in Ibiza
          </h2>
          <GuideImage
            src="/images/guides/ibiza/ibiza-beachclub-dining.jpg"
            alt="Bohemian beach club dining with sunset Mediterranean views"
            caption="Dining in Ibiza at its best — the sea as backdrop, the evening unhurried"
          />
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Ibiza's dining scene has moved well beyond party food. These restaurants represent the serious end
            of the island's kitchen — places where the cooking matches the setting.
            Priority reservations through our <a href="/services" className="underline hover:opacity-70" style={{ color: DARK }}>concierge service</a>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Nobu Ibiza Bay", type: "Japanese / Fusion", desc: "The hotel restaurant with arguably the best terrace position on the island. The black cod with miso is the obvious order, but the omakase is worth booking ahead." },
              { name: "Sublimotion", type: "Avant-garde", desc: "Ibiza's most theatrical dining experience — twelve guests, twenty courses, an immersive multi-sensory journey. One of the most expensive restaurants in the world, and one of the most memorable." },
              { name: "La Paloma", type: "Organic Mediterranean", desc: "Hidden in an orange grove near Sant Llorenç, La Paloma has been doing honest, beautiful food quietly for years. Lunch under the trees feels like stumbling onto something private." },
              { name: "Amante", type: "Mediterranean", desc: "A clifftop setting above Cala Sol d'en Serra, Amante earns its reputation through a combination of excellent seafood, impeccable service and a view that makes it impossible to rush." },
            ].map((r) => (
              <div key={r.name} className="p-6 bg-white rounded">
                <h3 className={`${cormorant.className} text-xl font-light mb-1`} style={{ color: DARK }}>{r.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: GOLD }}>{r.type}</p>
                <p className="text-xs text-[#0A0A0A]/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO VISIT */}
      <section id="when-to-visit" className="py-16 md:py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Seasonal Guide</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-12`} style={{ color: DARK }}>
            When to Visit Ibiza
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                season: "Spring",
                months: "April – May",
                desc: "The island at its most beautiful. The land is still green, almond blossom gives way to wildflowers, the sea is warming and the crowds haven't arrived. Restaurants are easier to book, villas are more available and the whole island feels unhurried. Ideal for those who want the atmosphere without the intensity.",
                highlight: "Best for: hiking, photography, villa retreats",
              },
              {
                season: "Summer",
                months: "June – August",
                desc: "Peak season. The clubs are at full power, the beaches are alive and the social energy is unlike anywhere else in Europe. The sea is warm enough to swim at midnight. Booking lead times are longer, prices are higher, but the experience is uniquely Ibizan. For the full island spectacle, there is no other time.",
                highlight: "Best for: nightlife, yachting, beach clubs",
              },
              {
                season: "Autumn",
                months: "September – October",
                desc: "September is a secret Ibiza regulars keep to themselves. The water is at its warmest, the weather holds, the crowds thin and prices ease. The closing parties in October are among the best events on the island calendar — a way to see the clubs at their most considered. The shoulder season at its finest.",
                highlight: "Best for: sea temperature, value, closing parties",
              },
            ].map((s) => (
              <div key={s.season} className="p-6 rounded border border-[#0A0A0A]/8">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>{s.months}</p>
                <h3 className={`${cormorant.className} text-2xl font-light mb-3`} style={{ color: DARK }}>{s.season}</h3>
                <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[10px] text-[#0A0A0A]/40 italic">{s.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUSIVE EXPERIENCES */}
      <section className="py-16 md:py-28 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Simple Luxury in Ibiza</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light text-white mb-6`}>
            Our Exclusive Experiences
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-2xl">
            We've spent years building relationships on this island — with boat captains, chefs, villa owners
            and a network of people who make things happen. What we offer isn't a catalogue: it's access.
            Explore our services below.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Charter a Yacht", href: "/fleet" },
              { label: "Private Villas", href: "/villas" },
              { label: "All Services", href: "/services" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-all duration-300 hover:bg-white hover:text-[#0A0A0A]"
                style={{ borderColor: `${GOLD}60`, color: GOLD }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVER ALL THREE ISLANDS */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Explore More</p>
          <h2 className={`${cormorant.className} text-3xl md:text-5xl font-light mb-10`} style={{ color: DARK }}>
            Discover All Three Islands
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/guides/formentera" className="group p-8 bg-white rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-14" style={{ backgroundColor: GOLD }} />
              <h3 className={`${cormorant.className} text-2xl font-light mb-2`} style={{ color: DARK }}>Formentera</h3>
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">Caribbean water, Mediterranean soul. The quietest and arguably most beautiful island in the Balearics.</p>
              <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>Read Guide →</span>
            </a>
            <a href="/guides/mallorca" className="group p-8 bg-white rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-14" style={{ backgroundColor: GOLD }} />
              <h3 className={`${cormorant.className} text-2xl font-light mb-2`} style={{ color: DARK }}>Mallorca</h3>
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">Mountains, vineyards, hidden coves and a capital city with a genuine cultural life. The most complete island.</p>
              <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>Get Started</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light text-white mb-6`}>
            Ready for Your Ibiza Experience?
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us when you're arriving and what you have in mind. We'll take it from there.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xs uppercase tracking-[0.2em] text-[#0A0A0A] font-medium transition-opacity duration-300 hover:opacity-80"
            style={{ backgroundColor: GOLD }}
          >
            Plan My Ibiza Trip
          </a>
        </div>
      </section>

    </main>
  );
}
