import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mallorca Travel Guide | Beaches, Wine, Culture & Dining",
  description: "Explore Mallorca's top attractions, beaches, wineries, and restaurants. Complete travel guide for luxury experiences.",
  alternates: { canonical: "https://simpleluxuryservice.de/guides/mallorca" },
  openGraph: {
    title: "Mallorca: Mediterranean Majesty & Luxury | Simple Luxury",
    description:
      "Mountains, vineyards, hidden coves and Palma's cultural scene — the complete luxury guide to Mallorca.",
    url: "https://simpleluxuryservice.de/guides/mallorca",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mallorca Luxury Guide – Simple Luxury" }],
  },
};

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

export default function MallorcaGuidePage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Destination Guide · Mallorca
          </p>
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-8xl text-white font-light leading-[1.05] mb-8`}
          >
            Mallorca: Mediterranean<br />Majesty & Luxury
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Mallorca is the island most people think they know — and the island that surprises almost everyone
            who arrives with the right itinerary. There are mountains here that rival the Alps in drama,
            vineyards that produce genuinely serious wine, a capital city with a cultural life most
            Europeans would envy, and coves accessible only by sea that remain pristine despite
            four million annual visitors finding everything else. This is the version of Mallorca we work in.
          </p>
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
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light mb-14`} style={{ color: DARK }}>
            Top 5 Exclusive Experiences
          </h2>

          <div className="space-y-16">

            {/* Experience 1 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>01</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Private Yacht Charter Along the Tramuntana Coast
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  The Serra de Tramuntana descends directly into the sea along Mallorca's northwest coast,
                  creating a stretch of cliff, pine and turquoise water that looks as though it belongs
                  in a different continent. This is best seen from the deck of a <a href="/fleet" className="underline hover:opacity-70" style={{ color: DARK }}>private charter yacht</a> —
                  moving slowly north from Port de Sóller, pausing in coves that have no road access,
                  diving from the bow into water of extraordinary clarity. The mountains above make the
                  scale genuinely humbling. We anchor for lunch, continue to Cap Formentor in the afternoon,
                  and return at the hour when the cliffs catch the last light. It's a day that consistently
                  exceeds expectations, which is saying something given how high they tend to be.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Full day. Departs Port de Sóller or Palma. Cap Formentor route. <a href="/fleet" className="underline" style={{ color: DARK }}>Browse our fleet.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>02</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Mountain Cycling: Tramuntana Roads & Col de Sóller
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Mallorca has been the winter training ground for professional cycling teams for thirty years,
                  and the reason is the quality of the roads through the Tramuntana mountains.
                  The passes — Coll de Sóller, Puig Major, Sa Calobra — are climbs that serious riders travel
                  specifically to experience, but the roads are also quiet and beautifully maintained enough
                  to be genuinely enjoyable for anyone who cycles reasonably. We provide handmade carbon bikes
                  fitted to your measurements, a guide who knows the routes in both directions,
                  a support vehicle and cold towels and good coffee at the top of every climb.
                  Non-riders can join by car and meet you at the viewpoints — which are worth the journey
                  regardless of how you get there.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Half or full day. All levels from intermediate. Fitted bikes and guide included. <a href="/contact" className="underline" style={{ color: DARK }}>Enquire to book.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>03</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Wine Tasting in the Binissalem & Pla i Llevant Regions
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Mallorca's wine is having a serious moment — not as a curiosity but as wine that
                  competes at an international level. The Manto Negro grape produces reds of real structure
                  and character, and the interior estates — Bodegas Macià Batle, Son Prim, Vins Miquel Gelabert —
                  are beautiful properties as well as serious producers. We arrange private cellar visits
                  and tutored tastings with the winemakers themselves, then lunch in the vine rows:
                  cold meats, aged cheeses, bread and oil from the estate, wine poured generously.
                  It's one of those afternoons that turns into an evening without anyone noticing the time.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Half day. 2–3 estates. Private tastings and vineyard lunch. <a href="/services" className="underline" style={{ color: DARK }}>Part of our concierge.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>04</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Helicopter Tour: Tramuntana & the Hidden Coves
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Mallorca's size means a helicopter reveals things impossible to grasp from the ground —
                  the full sweep of the Tramuntana range from Sa Calobra to Cap Formentor,
                  the density of hidden coves along the east coast, the patchwork of agricultural
                  land in the interior, the ancient watchtowers on the clifftops and the sudden,
                  improbable blue of the Caló des Moro from above. We design the flight path around
                  your interests: architecture, nature, photography, or simply the grandest possible
                  view of an island you've come to love. Inter-island connections to Ibiza and Formentera
                  are also available for guests moving between properties.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">30–90 minutes. Up to 5 passengers. Custom routing. <a href="/contact" className="underline" style={{ color: DARK }}>Enquire here.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>05</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Private Chef Dinner in a Tramuntana Finca
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  The fincas of the Tramuntana foothills — old stone, high ceilings, terraces looking
                  over olive groves to the sea — deserve food that matches them. We work with chefs
                  who understand Mallorcan ingredients: sobrasada from the Tramuntana pigs, ensaimada
                  pastry, tumbet vegetables from kitchen gardens, fish from the morning's Palma market.
                  The menu is designed around your preferences but rooted in what's exceptional that day.
                  Six to ten courses, wine from the island, served as the light fades over the mountains.
                  This is what the best evening in Mallorca feels like, and it's available through
                  our <a href="/services" className="underline hover:opacity-70" style={{ color: DARK }}>concierge service</a>.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Available any evening. 4–12 guests. Menu designed to your preferences. <a href="/contact" className="underline" style={{ color: DARK }}>Book via concierge.</a></p>
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
            Where to Stay in Mallorca
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Mallorca has the widest range of exceptional private villas in the Balearics — from modernist
            cliffside properties above the Tramuntana to grand fincas in the interior and contemporary
            estates on the east coast. All bookable through our <a href="/villas" className="underline hover:opacity-70" style={{ color: DARK }}>villa programme</a>.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Villa Mestre", desc: "A clifftop estate on the northwest coast with direct sea access, a heated infinity pool and views stretching to the horizon. Six bedrooms, full staff, impeccable." },
              { name: "Villa Tom", desc: "A contemporary finca above the Tramuntana. Architecture that references the landscape — stone, glass, long horizontal lines. Five bedrooms. The pool seems to extend into the mountain valley below." },
              { name: "Villa Pep Luis", desc: "Traditional Mallorcan finca in the interior. Olive groves, an old stone threshing floor, a wine cellar and a kitchen garden. Unhurried, genuinely private, and exactly what the word 'escape' should mean." },
              { name: "The Daniel Dream", desc: "A design-forward property near Alcúdia Bay. Four bedrooms, a double-level pool and a terrace kitchen designed for long summer dinners. The east coast light here is exceptional." },
              { name: "Bella Vista", desc: "Set above the bay of Palma with panoramic views of the city and cathedral. Close enough for dinner, far enough for privacy. Eight guests across four suites." },
              { name: "Teguis Mansion", desc: "The grandest property in our Mallorca collection. Twelve bedrooms, a ballroom, an historic library, a chapel and grounds large enough to get lost in. For groups who want the full estate experience." },
            ].map((v) => (
              <a key={v.name} href="/villas" className="group block p-6 bg-white rounded hover:shadow-md transition-shadow duration-300">
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
            The Finest Beaches in Mallorca
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Mallorca has over two hundred beaches. These five represent the full range — dramatic cliffs,
            Caribbean flats, hidden coves — and each rewards the effort it takes to reach them.
          </p>
          <div className="space-y-8">
            {[
              {
                name: "Sa Calobra",
                region: "Northwest / Tramuntana",
                desc: "Reached by either a legendary road of fourteen hairpin bends descending through the mountains, or by boat from Port de Sóller — the latter being significantly more dramatic. The cove at the bottom is dark sand and cold, clear water hemmed in by vertical cliffs. It's genuinely spectacular in a way that requires seeing to understand, and arriving by water gives you the approach completely to yourself.",
              },
              {
                name: "Caló des Moro",
                region: "Southeast Coast",
                desc: "A narrow, deep inlet on the southeast coast that looks designed rather than natural — the water is luminous turquoise, the surrounding rock is pale gold and the whole thing is small enough to feel intimate even when it's busy. The twenty-minute walk in keeps numbers manageable. One of the most photographed spots in the Mediterranean and, unusually, every photograph is accurate.",
              },
              {
                name: "Cala Banyalbufar",
                region: "Northwest / Tramuntana",
                desc: "Below the village of Banyalbufar, a series of small coves cut into the Tramuntana cliffs give access to swimming in deep, dark blue water — very different from the shallow turquoise of the east. The setting is austere and beautiful. Ancient terraced agriculture clings to the cliff above, and the sense of being somewhere that hasn't changed much in centuries is not entirely an illusion.",
              },
              {
                name: "Cala Varques",
                region: "East Coast",
                desc: "A forty-minute walk through pine forest from the nearest road leads to a wide, sheltered cove with shallow, warm water and a natural swimming pool carved into the rock on the left side. The walk keeps it quiet. The caves accessible by swimming hold some of the most remarkable underwater formations in the island. Bring provisions and stay the afternoon.",
              },
              {
                name: "Illetes (Formentor Peninsula)",
                region: "Northwest",
                desc: "The peninsula that caps the northwest of the island has its own microclimate, its own pace and, at Playa de Formentor, one of the most elegant stretches of white sand in the Mediterranean. The Hotel Formentor, restored to its original 1930s grandeur, provides an impeccable backdrop for a long lunch. Access by boat in high summer avoids the road queues.",
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
            Culinary Excellence in Mallorca
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Palma has quietly become one of the more interesting food cities in southern Europe.
            These restaurants represent the serious end of the island's dining scene.
            Priority reservations through our <a href="/services" className="underline hover:opacity-70" style={{ color: DARK }}>concierge service</a>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Aromata", type: "Modern Mallorcan", desc: "Andreu Genestra's Palma restaurant applies the same rigorous attention to local produce that earned his main restaurant a Michelin star. The tasting menu draws on the island's extraordinary breadth of ingredients — lamb from the hills, fish from the bay, vegetables from kitchen gardens. One of the island's most considered dining experiences." },
              { name: "Es Fum (St. Regis)", type: "Fine Dining / Mediterranean", desc: "Two Michelin stars. The kitchen takes Mallorcan ingredients and applies a level of technical precision that would be impressive anywhere in Europe. The dining room looks over the Tramuntana and the service is exactly what the setting demands. The most formally excellent meal you'll have on the island." },
              { name: "Bens d'Avall", type: "Traditional / Clifftop", desc: "Perched on the cliff road between Deià and Sóller, Bens d'Avall has been serving the same combination of Mallorcan cooking and extraordinary views for over thirty years. The terraced terrace looking down to the sea is one of the finest restaurant settings in the Mediterranean. The sofrit pagès — lamb and potato stew — is the one dish to order." },
              { name: "Hotel Corazón Palma", type: "Modern / Rooftop", desc: "The rooftop restaurant at this beautifully restored Palma palacio combines an outstanding view over the old city with a kitchen that takes the city's culinary moment seriously. The natural wine list is one of the better ones on the island. An excellent choice for Sunday lunch before a flight." },
              { name: "Palma Riad", type: "Mediterranean / Cultural", desc: "Housed in a converted Arab bath in the heart of Palma's historic centre, Palma Riad serves food that matches the quality of its extraordinary setting. The courtyard is one of the city's hidden treasures. The menu leans North African and eastern Mediterranean — aromas and spice profiles that feel entirely at home in a building of this age." },
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
            When to Visit Mallorca
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                season: "Spring",
                months: "March – May",
                desc: "Mallorca in spring has a particular quality that returning visitors mention above almost everything else. The almond blossom comes first — a brief, extraordinary white flowering across the interior in February and March — followed by the full green of the Tramuntana and wildflowers on the valley floors. The cycling is at its best, the hiking trails are clear and the restaurants in Palma are reliably bookable. One of the finest places in Europe to be in April.",
                highlight: "Best for: cycling, hiking, Palma cultural scene",
              },
              {
                season: "Summer",
                months: "June – August",
                desc: "The island is busy and fully operational. The yacht marinas — Port Adriano, Puerto Portals, Puerto de Pollença — are spectacular in summer with fleets of superyachts and the social scene that goes with them. The sea is warm, the beach clubs are at full capacity and access to the most popular coves requires either an early start or a boat. For the full season experience, it remains superb.",
                highlight: "Best for: yacht charter, beach clubs, social scene",
              },
              {
                season: "Autumn",
                months: "September – October",
                desc: "September to mid-October represents Mallorca at something close to perfection. The sea is at its warmest — often reaching 26°C — the summer visitors have largely gone, the restaurants are in full flow and there's a settled, satisfied quality to the island that high season crowds prevent. The Tramuntana is at its most dramatic in the flat October light. Highly recommended.",
                highlight: "Best for: sea temperature, hiking, fine dining",
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
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Simple Luxury in Mallorca</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light text-white mb-6`}>
            Our Exclusive Experiences
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-2xl">
            Mallorca has rewarded our investment in it. We know the chefs, the boat captains, the winemakers,
            the villa managers and the people who make things happen quietly. What we offer here isn't
            a programme — it's access to the island that exists beyond the guidebooks.
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
            <a href="/guides/ibiza" className="group p-8 bg-white rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-14" style={{ backgroundColor: GOLD }} />
              <h3 className={`${cormorant.className} text-2xl font-light mb-2`} style={{ color: DARK }}>Ibiza</h3>
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">Sunsets over Es Vedrà, hidden coves, world-class cuisine and the most extraordinary nightlife in the Mediterranean.</p>
              <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>Read Guide →</span>
            </a>
            <a href="/guides/formentera" className="group p-8 bg-white rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-14" style={{ backgroundColor: GOLD }} />
              <h3 className={`${cormorant.className} text-2xl font-light mb-2`} style={{ color: DARK }}>Formentera</h3>
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">The smallest, quietest and arguably most beautiful island in the Balearics. Caribbean water, Mediterranean soul.</p>
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
            Ready for Your Mallorca Experience?
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us your dates and the kind of stay you have in mind. We'll handle everything from there.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xs uppercase tracking-[0.2em] text-[#0A0A0A] font-medium transition-opacity duration-300 hover:opacity-80"
            style={{ backgroundColor: GOLD }}
          >
            Plan My Mallorca Trip
          </a>
        </div>
      </section>

    </main>
  );
}
