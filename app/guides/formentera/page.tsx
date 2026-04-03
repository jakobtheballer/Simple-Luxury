import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formentera Travel Guide | Beaches & Hidden Gems",
  description: "Discover Formentera's best beaches, restaurants, and secret spots. Your complete guide to this Mediterranean paradise.",
  alternates: { canonical: "https://simpleluxuryservice.de/guides/formentera" },
  openGraph: {
    title: "Formentera: Escape to Mediterranean Serenity | Simple Luxury",
    description:
      "The quietest corner of the Balearics. Turquoise water, empty beaches, and a pace of life that resets everything.",
    url: "https://simpleluxuryservice.de/guides/formentera",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Formentera Luxury Guide – Simple Luxury" }],
  },
};

const GOLD = "#C9A96E";
const DARK = "#0A0A0A";
const CREAM = "#F5F2EB";

export default function FormenteraGuidePage() {
  return (
    <main className="bg-white pt-16">

      {/* HERO */}
      <section className="py-20 md:py-36 px-6 md:px-10" style={{ backgroundColor: DARK }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Destination Guide · Formentera
          </p>
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-8xl text-white font-light leading-[1.05] mb-8`}
          >
            Formentera: Escape<br />to Mediterranean<br />Serenity
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            Formentera is the island people describe as what the Mediterranean used to be — before
            motorways, cruise ships and Instagram. It has stayed small on purpose. The water here
            is absurdly beautiful. The pace is genuinely unhurried. And once you've been, you understand
            why people come back every year and tell almost nobody about it.
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
                  Private Beach Clubs & Ses Illetes by Boat
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Ses Illetes consistently ranks among the most beautiful beaches in Europe, and the best way
                  to arrive is by water. We arrange a private boat transfer from Ibiza — a forty-minute crossing
                  that begins to feel like a journey rather than a commute as the flat outline of Formentera
                  emerges from the sea. Once there, we secure a position at one of the beach clubs that actually
                  merit the name: places with good kitchens, decent wine lists, sun loungers set wide apart
                  and staff who understand that attentiveness isn't the same as intrusion.
                  The water at Ses Illetes is shallow for a long way out and impossibly clear — children wade,
                  adults float, and time moves differently than it does anywhere else.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Private transfer from Ibiza Marina. Full day. Beach club access arranged. <a href="/contact" className="underline" style={{ color: DARK }}>Book with our concierge.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>02</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Snorkelling & Freediving the Posidonia Meadows
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  The waters around Formentera are a UNESCO-protected marine reserve, and the reason is immediately
                  apparent when you put your face below the surface. Ancient posidonia seagrass meadows cover
                  the seabed, filtering the water to that extraordinary Caribbean clarity and supporting an
                  ecosystem dense with life — octopus, barracuda, sea horses, rays.
                  A private guide leads you to the sites that most visitors never find: shallow caves, underwater
                  rock formations and the channels between islands where the current carries schools of fish.
                  Full freediving instruction is available, or we keep it simple with quality masks and fins.
                  Either way, it's unlike anything you've seen in the Mediterranean.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Half or full day. Expert marine guide. Freediving instruction available. <a href="/fleet" className="underline" style={{ color: DARK }}>Departs from our fleet.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>03</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Sunset Sailing Between the Islands
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  The channel between Ibiza and Formentera at sunset is one of those natural spectacles
                  that photographs fail to capture. The light angles down from the north, the water in the
                  straits catches it differently than open sea, and you find yourself watching it in silence
                  without quite knowing why. We plan the route carefully — departing in the afternoon,
                  drifting through the channel as the sun falls, anchoring in a quiet bay on the Formentera
                  side as the sky goes dark. A <a href="/fleet" className="underline hover:opacity-70" style={{ color: DARK }}>private sailing catamaran</a> is the vessel for this particular evening.
                  Dinner is prepared on board. No schedule. No other boats. Just the passage of light over water.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">5–6 hours. Inter-island route. Private chef dinner on board. <a href="/contact" className="underline" style={{ color: DARK }}>Enquire here.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>04</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Exploring Sant Francesc & the Artisan Villages
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Formentera is small enough to cross in under an hour, which makes the interior feel
                  like a different world. Sant Francesc Xavier, the island's small capital, has a square
                  flanked by a whitewashed church, a handful of excellent small restaurants and a
                  weekly market that sells the kind of ceramic and textile work that feels genuinely
                  Balearic rather than manufactured for tourists. The villages of El Pilar de la Mola
                  and Sant Ferran de ses Roques have their own rhythms — afternoon card games outside the bar,
                  a bakery that closes at noon, views across lavender fields to the sea.
                  We arrange a guide who knows the people as well as the places.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Half-day tour. Private guide. Markets, studios and local tastings. <a href="/services" className="underline" style={{ color: DARK }}>Part of our concierge.</a></p>
                </div>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="grid md:grid-cols-[80px_1fr] gap-6">
              <span className={`${cormorant.className} text-6xl font-light leading-none`} style={{ color: `${GOLD}40` }}>05</span>
              <div>
                <h3 className={`${cormorant.className} text-2xl md:text-3xl font-light mb-4`} style={{ color: DARK }}>
                  Wellness Retreat & Private Spa Days
                </h3>
                <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-4">
                  Formentera's quiet lends itself to restoration in a way that more visited islands can't match.
                  The light here has a particular quality — clean and flat, especially in May and September —
                  that makes mornings feel genuinely restorative. We arrange in-villa spa treatments with
                  therapists who travel to you: massage, osteopathy, yoga and meditation, all conducted
                  on a shaded terrace with the sea as your backdrop. For a full programme, we design
                  multi-day wellness retreats combining daily practice, nutritional catering and gentle activity —
                  sailing, cycling the island's quiet lanes — that leaves you feeling substantially better
                  than when you arrived. This is what the island is actually for.
                </p>
                <div className="p-4 rounded border-l-2" style={{ backgroundColor: CREAM, borderColor: GOLD }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: GOLD }}>In a nutshell</p>
                  <p className="text-xs text-[#0A0A0A]/70">Single sessions or multi-day programmes. In-villa delivery. <a href="/services" className="underline" style={{ color: DARK }}>Book via our concierge.</a></p>
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
            Where to Stay in Formentera
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Formentera has no large hotels worth recommending. The island is best experienced from a private villa —
            quiet, fully staffed, and positioned to make the most of the light and the sea.
            All available through our <a href="/villas" className="underline hover:opacity-70" style={{ color: DARK }}>villa programme</a>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Villa Nieves", desc: "A traditional Formenteran house with contemporary interiors. Four bedrooms, a garden pool and direct access to a quiet cove. One of the island's most sought-after properties in high season.", href: "/villas" },
              { name: "Casa Pepe", desc: "More intimate in scale but exceptional in position — a hillside finca looking across the channel towards Ibiza. Perfect for couples or small groups who want genuine seclusion and remarkable sunsets.", href: "/villas" },
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
            The Finest Beaches in Formentera
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            A small island with a disproportionate number of exceptional beaches. The water here is consistently
            rated among the clearest in Europe — the posidonia meadows see to that.
          </p>
          <div className="space-y-8">
            {[
              {
                name: "Ses Illetes",
                region: "North Peninsula",
                desc: "Consistently ranked in the top five beaches in Europe. A narrow sandbar extending into the straits between Ibiza and Formentera, with water on both sides and a clarity that looks photoshopped until you're actually standing in it. The sand is fine, white and firm underfoot. The beach clubs are genuinely good. Arrive by boat to make the most of it.",
              },
              {
                name: "Playa de Llevant",
                region: "North Peninsula",
                desc: "The quieter, eastern face of the Ses Illetes peninsula. Longer, less visited and with a slight breeze that makes hot afternoons bearable. The water is slightly deeper here but just as clear, and the view back towards the salt flats and the island interior has an unusual, almost painterly quality in the late afternoon light.",
              },
              {
                name: "Caló des Mort",
                region: "South Coast",
                desc: "Dramatic and remote, Caló des Mort is a deep, narrow inlet cut into the rocky southern cliffs. The approach on foot takes twenty minutes over limestone rock, which keeps the numbers down. The reward is a sheltered cove of deep turquoise water with no beach club, no facilities and no noise. One of the most beautiful natural swimming spots in the Balearics.",
              },
              {
                name: "Platja de Migjorn",
                region: "South Coast",
                desc: "The longest beach on the island at nearly five kilometres. Migjorn faces south and catches the afternoon sun well into October. Unlike the northern beaches, it has sections of genuine solitude — walk ten minutes from the nearest track and you can have a stretch of sand entirely to yourself. The beach bars at the eastern end are low-key and excellent.",
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
            Culinary Excellence in Formentera
          </h2>
          <p className="text-sm text-[#0A0A0A]/60 leading-relaxed mb-12 max-w-2xl">
            Formentera's restaurants are honest rather than flashy. The best kitchens on the island
            are more interested in what came out of the sea that morning than in proving anything.
            Priority reservations through our <a href="/services" className="underline hover:opacity-70" style={{ color: DARK }}>concierge service</a>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Beso Beach", type: "Mediterranean / Beach Club", desc: "Set directly on the sands of Ses Illetes, Beso Beach has earned its loyal following through a combination of exceptional fish, an unusually good wine list and an atmosphere that manages to feel both relaxed and considered. The paella is genuinely among the best on either island." },
              { name: "Blue Bar", type: "Cocktails & Light Bites", desc: "A Formentera institution in the truest sense — the same family, the same whitewashed building at Platja de Migjorn, for over forty years. The cocktails are made properly. The sunsets from the terrace are the kind that stop conversation. Not the most serious kitchen, but arguably the most essential stop on the island." },
              { name: "Can Forn", type: "Traditional Formenteran", desc: "Hidden in the interior near Sant Ferran, Can Forn is where locals go when they want to eat properly. Traditional recipes — sobrasada, tumbet, fresh fish with aioli — executed without fuss in a setting that feels like a family home. One of the few places on the island that closes when the season ends because it doesn't need tourists." },
              { name: "Juan y Andrea", type: "Seafood / Beach", desc: "One of the most famous beach restaurants in the Mediterranean, and the reputation is deserved. The paella and the grilled lobster are the reasons people come — and they come back year after year. Mooring available for those arriving by boat. Book weeks ahead in July and August." },
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
            When to Visit Formentera
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                season: "Spring",
                months: "April – May",
                desc: "The island at its most beautiful and least visited. The water is still cool but the light is extraordinary, the wildflowers cover the island interior, and you can have Ses Illetes entirely to yourself on a Tuesday morning. Spring is Formentera for people who know Formentera — serene, inexpensive relative to summer, and quietly magnificent.",
                highlight: "Best for: solitude, photography, cycling",
              },
              {
                season: "Summer",
                months: "June – August",
                desc: "The island fills up in July and August, and even Formentera — which has strict limits on tourist numbers and no new hotel development — feels busy by its own standards. But busy here means forty people at a beach that elsewhere would have four hundred. The water temperature peaks and the evenings are long and warm. Book everything well ahead.",
                highlight: "Best for: sea swimming, beach clubs, boat trips",
              },
              {
                season: "Autumn",
                months: "September – October",
                desc: "September on Formentera might be the finest month in the Balearic calendar. The summer visitors leave, the restaurants are still open, the water is warmer than in August and the light turns golden well before sunset. The island returns to the pace of itself. If you can only visit once, consider early September the default.",
                highlight: "Best for: sea temperature, atmosphere, value",
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
          <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>Simple Luxury in Formentera</p>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl font-light text-white mb-6`}>
            Our Exclusive Experiences
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-2xl">
            Getting to Formentera and making the most of it requires knowing the right people and
            the right timing. We handle the logistics — ferry, boat transfer, villa, provisions,
            activities — so that the only thing you do when you arrive is relax.
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
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">The island that contains multitudes — hidden coves, extraordinary food, world-famous sunsets and a nightlife unlike anywhere on earth.</p>
              <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: GOLD }}>Read Guide →</span>
            </a>
            <a href="/guides/mallorca" className="group p-8 bg-white rounded hover:shadow-md transition-shadow duration-300">
              <div className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-14" style={{ backgroundColor: GOLD }} />
              <h3 className={`${cormorant.className} text-2xl font-light mb-2`} style={{ color: DARK }}>Mallorca</h3>
              <p className="text-xs text-[#0A0A0A]/60 leading-relaxed mb-4">Mountains, vineyards, superyacht harbours and a capital city with a genuine cultural life. The largest and most varied island.</p>
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
            Ready for Your Formentera Experience?
          </h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us when you're coming and what kind of stay you have in mind. We arrange everything from there.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xs uppercase tracking-[0.2em] text-[#0A0A0A] font-medium transition-opacity duration-300 hover:opacity-80"
            style={{ backgroundColor: GOLD }}
          >
            Plan My Formentera Trip
          </a>
        </div>
      </section>

    </main>
  );
}
