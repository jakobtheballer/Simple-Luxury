const BASE_URL = "https://simpleluxuryservice.de";

export type BlogCategory = "Yacht Charters" | "Villas" | "Guides" | "Services";

export type BlogContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "tip"; label: string; text: string }
  | { type: "list"; heading?: string; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  description: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  readingTime: string;
  content: BlogContent[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-yacht-charter-ibiza",
    title: "Best Time for Yacht Charters in Ibiza – Season Guide 2025",
    category: "Yacht Charters",
    description: "Complete guide to seasons, weather, pricing & booking tips for yacht charters in Ibiza. Find out when to book for the best experience.",
    date: "2024-04-19",
    author: "Simple Luxury",
    image: "/blog/ibiza-yacht.jpg",
    excerpt: "Timing your Ibiza yacht charter correctly makes the difference between a good trip and an exceptional one. Here is everything you need to know.",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The Balearic season runs from April through October, but each month brings a fundamentally different experience on the water. Knowing which period suits your priorities — crowds, prices, weather, water temperature — determines the entire character of your charter.",
      },
      { type: "heading", text: "Spring: April & May" },
      {
        type: "paragraph",
        text: "April and May offer the most unspoiled version of Ibiza from the water. Anchorages that draw dozens of boats in August are empty in May. The island is still green after winter rain, the light is soft, and the sea — hovering around 17–19°C — is cool but entirely swimmable. Charter prices run 20–30% below peak, and booking flexibility is far greater.",
      },
      {
        type: "tip",
        label: "Spring Insider",
        text: "A west-coast sunset charter in May — Cala Comte and Es Vedrà with no other vessels in sight — is an experience that July simply cannot replicate at any price.",
      },
      { type: "heading", text: "Summer: June – August" },
      {
        type: "paragraph",
        text: "Peak season brings warm seas (24–27°C), long days and the full social energy of Ibiza. Day charters to the northern calas or across to Formentera are in high demand. June is particularly underrated — the light quality and sea conditions are excellent, the island is busy without being overwhelming, and the best anchorages are still reachable. July and August require booking 6–8 weeks in advance.",
      },
      {
        type: "list",
        heading: "Peak Season Essentials",
        items: [
          "Book 6–8 weeks ahead for preferred July and August dates",
          "Formentera crossings are busiest midday — depart before 09:30",
          "Overnight charter availability is severely limited in August",
          "Premium anchorages fill by 11:00 — positioning early is key",
        ],
      },
      { type: "heading", text: "Autumn: September & October" },
      {
        type: "paragraph",
        text: "September is the month that seasoned Ibiza visitors keep quietly to themselves. The sea reaches its annual peak temperature — around 26°C — the crowds thin noticeably and prices ease by 15–25%. October brings extraordinary afternoon light, glassy conditions and a more contemplative atmosphere. The island's closing parties in October add a particular energy to an otherwise peaceful month.",
      },
      {
        type: "tip",
        label: "Best Value Window",
        text: "September offers peak-season water temperatures at shoulder-season prices with far greater booking flexibility. If your schedule allows it, this is the optimal month for a Balearic charter.",
      },
    ],
  },
  {
    slug: "private-villa-wedding-mallorca",
    title: "Private Villa Wedding Planning Guide – Mallorca & Ibiza",
    category: "Villas",
    description: "How to plan a luxury wedding at a private villa in the Balearic Islands. Venues, logistics, vendors and everything your concierge handles.",
    date: "2024-04-20",
    author: "Simple Luxury",
    image: "/blog/wedding-villa.jpg",
    excerpt: "A private villa wedding in the Balearics requires local expertise, trusted vendors and exceptional organisation. Here is what a proper concierge service actually does.",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "A villa wedding in Mallorca or Ibiza is one of the most personal and memorable ways to celebrate — but the logistics are significantly more complex than a hotel wedding. The difference between an exceptional experience and an expensive disappointment is almost entirely a question of who is managing the details.",
      },
      { type: "heading", text: "Choosing the Right Villa" },
      {
        type: "paragraph",
        text: "The property determines everything else. Guest capacity, terrace space, pool configuration, proximity to accommodation for guests, kitchen access for catering — these are the practical criteria. Equally important is the character of the property. A clifftop estate in the north of Ibiza creates a very different atmosphere to a modernist finca in the interior of Mallorca. We visit every property we recommend personally.",
      },
      {
        type: "list",
        heading: "What to Evaluate in a Villa",
        items: [
          "Outdoor terrace capacity and shelter from prevailing winds",
          "Kitchen facilities for catering teams",
          "Overnight accommodation for core wedding party",
          "Access road suitability for supplier vehicles",
          "Local noise restrictions and curfew hours",
          "Proximity to guest accommodation and airports",
        ],
      },
      { type: "heading", text: "Vendor Coordination" },
      {
        type: "paragraph",
        text: "The Balearic Islands have an established network of high-quality wedding suppliers — florists, caterers, musicians, photographers and officiants — but access to the best of them requires relationships built over years. The most sought-after vendors in Ibiza and Mallorca are booked 12–18 months in advance for peak-season dates. Our concierge network includes direct access to vendors who do not advertise publicly.",
      },
      {
        type: "tip",
        label: "Timing",
        text: "The ideal window for a Balearic villa wedding is late May, early June or September — exceptional weather, manageable vendor availability and the island at a pace that makes the logistics workable.",
      },
      { type: "heading", text: "What Our Concierge Handles" },
      {
        type: "paragraph",
        text: "For destination weddings, we typically manage the vendor shortlist and contracts, logistics coordination on the day, guest transfers from airport and accommodation, yacht charter for the wedding party, private chef briefings, restaurant bookings for pre and post-wedding meals, and on-the-day liaison with all suppliers. The couple's role is to enjoy the island.",
      },
    ],
  },
  {
    slug: "formentera-day-trip-ibiza",
    title: "Formentera Day Trip by Yacht from Ibiza – Complete Itinerary",
    category: "Guides",
    description: "Perfect day trip from Ibiza to Formentera by private yacht. Beaches, anchorages, lunch spots and everything you need to plan the crossing.",
    date: "2024-04-21",
    author: "Simple Luxury",
    image: "/blog/formentera.jpg",
    excerpt: "The crossing from Ibiza to Formentera takes less than an hour by private charter. What you find on the other side justifies every minute of it.",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Formentera is Ibiza's quieter, cleaner neighbour — separated by a narrow channel of shallow turquoise water that produces some of the most extraordinary sea colour in the Mediterranean. A private day charter from Ibiza is the only way to experience the island properly, arriving at the right beaches at the right time without the constraints of a ferry schedule.",
      },
      { type: "heading", text: "Departure and the Crossing" },
      {
        type: "paragraph",
        text: "Departing Ibiza Marina between 09:00 and 09:30 is optimal. The crossing through Es Freus — the channel between the two islands — takes approximately 45 minutes to an hour depending on the vessel. The shallow, reef-studded water creates a colour gradient that consistently surprises first-time visitors. The route passes close to the small islands of S'Espalmador, where a brief stop is worth making if conditions allow.",
      },
      {
        type: "tip",
        label: "S'Espalmador",
        text: "This uninhabited island between Ibiza and Formentera has a natural mud lagoon reputed for its skin benefits. The water around it is extraordinary — anchor here before the main crossing for a quieter morning swim.",
      },
      { type: "heading", text: "The Best Anchorages" },
      {
        type: "paragraph",
        text: "Ses Illetes on the northern tip of Formentera is consistently cited as one of the most beautiful beaches in the world. The water is shallow and flat, the sand is white, and the colour is Caribbean. Arriving by private charter means you can position the boat in the water and swim directly from the stern — the experience that the ferry passengers watching from the beach cannot replicate.",
      },
      {
        type: "list",
        heading: "Recommended Anchorages by Time",
        items: [
          "10:00 – S'Espalmador: morning swim, quiet anchorage",
          "11:30 – Ses Illetes north: prime position before the midday crowd",
          "13:30 – Llevant beach: lunch swim, calmer water",
          "15:30 – La Savina area: optional stop at Tanga beach bar",
          "17:00 – Begin return crossing to Ibiza",
        ],
      },
      { type: "heading", text: "Lunch on the Water" },
      {
        type: "paragraph",
        text: "We recommend provisioning the yacht for lunch rather than mooring at Formentera's beach restaurants. The wait times at peak season are long and the experience of eating on deck at anchor — fresh seafood, cold wine, the island visible in every direction — is categorically superior. Our team provisions the boat the morning of departure.",
      },
    ],
  },
  {
    slug: "luxury-concierge-services-balearics",
    title: "Luxury Concierge Services – What's Included & How It Works",
    category: "Services",
    description: "Complete guide to luxury concierge services in the Balearic Islands. What a real concierge handles, what to expect, and how to make the most of it.",
    date: "2024-04-22",
    author: "Simple Luxury",
    image: "/blog/concierge.jpg",
    excerpt: "A genuine luxury concierge does not simply make reservations. Here is what a proper service actually looks like in Ibiza and Mallorca.",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The term 'concierge' is used loosely across the hospitality industry. A hotel concierge points you towards a list of partners. A genuine luxury concierge in the Balearics operates on relationships — with boat captains, restaurant owners, villa managers, club directors and a network of people who make things happen because they want to, not because they are paid a referral fee.",
      },
      { type: "heading", text: "What We Actually Handle" },
      {
        type: "list",
        items: [
          "Private yacht charter booking and crew briefing",
          "Villa sourcing, viewing coordination and contract management",
          "Airport arrivals with meet-and-greet and luggage transfer",
          "Restaurant reservations including priority access to fully booked venues",
          "Private chef sourcing, menu planning and kitchen coordination",
          "VIP club access, booth reservations and guest list management",
          "Helicopter and private boat transfer scheduling",
          "Provisioning for yacht charters and villa arrivals",
          "Spa, wellness and personal shopping bookings",
          "On-the-ground support during your stay — 24/7 availability",
        ],
      },
      { type: "heading", text: "How the Process Works" },
      {
        type: "paragraph",
        text: "Contact us with your dates, group size and an outline of what you have in mind. We respond with a proposal — not a generic package, but a considered itinerary based on what is actually available and what we genuinely recommend for your timing. For most bookings, we ask for 2–4 weeks notice. For complex multi-week itineraries or summer peak dates, longer lead time improves outcomes significantly.",
      },
      {
        type: "tip",
        label: "What To Tell Us",
        text: "The more context you give, the better the result. Group composition, budget range, priorities (sea time versus nightlife versus food versus privacy) and any specific requests you already have in mind — all of this lets us build something specific rather than generic.",
      },
      { type: "heading", text: "The Difference It Makes" },
      {
        type: "paragraph",
        text: "The practical value of a concierge service is not the individual bookings — it is the coordination. A private chef confirmed, then the yacht delayed, then a restaurant reservation that no longer fits the timing: resolving these dependencies in real time, with local relationships that allow adjustments, is where the service earns its place. Your experience remains seamless because everything runs through one team who knows the full picture.",
      },
    ],
  },
  {
    slug: "yacht-charter-vs-hotel-balearics",
    title: "Yacht Charter vs Hotel – Why Private Charters Win",
    category: "Yacht Charters",
    description: "Honest comparison of luxury yacht charters versus traditional hotel stays in the Balearic Islands. Privacy, flexibility, value and experience.",
    date: "2024-04-23",
    author: "Simple Luxury",
    image: "/blog/yacht-vs-hotel.jpg",
    excerpt: "A luxury hotel in Ibiza costs as much as a private charter. The experiences are not remotely comparable.",
    readingTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "The price of a private day charter on a quality vessel in Ibiza is broadly comparable to a night at a five-star hotel. Set out in those terms, the choice deserves more examination than most people give it.",
      },
      { type: "heading", text: "Privacy" },
      {
        type: "paragraph",
        text: "A luxury hotel room is a private space surrounded by public ones. The pool is shared. The beach is shared. The restaurant involves waiting and being seated. On a private charter, every square metre of the vessel is yours. The anchorages you choose are effectively yours — particularly in May, June and September. The experience is qualitatively different in a way that photographs do not capture.",
      },
      { type: "heading", text: "Flexibility" },
      {
        type: "paragraph",
        text: "A hotel locks you into its geography. A charter goes where you want. Cala Comte for the sunset, Formentera for lunch, a northern cala for the morning swim — the itinerary adjusts to the conditions, your mood and what the day offers. No check-in times, no desk queues, no fixed meal sittings.",
      },
      {
        type: "tip",
        label: "The Real Comparison",
        text: "A premium hotel suite in Ibiza in August: €800–1,500 per night. A private catamaran day charter for up to 10 guests: €1,200–2,500. Split between a group, the charter often costs less per person than the hotel room — and the experience is incomparably better.",
      },
      { type: "heading", text: "The Case for Combining Both" },
      {
        type: "paragraph",
        text: "The strongest Balearic itinerary uses a private villa as a base and supplements it with yacht charter days. The villa provides a proper home — kitchen, pool, space to decompress. The charter provides access to what the islands do best: the water, the calas, the perspective of seeing the coastline from the sea. Our concierge service is built around exactly this combination.",
      },
    ],
  },
  {
    slug: "top-restaurants-ibiza-concierge-picks",
    title: "Top 5 Restaurants in Ibiza – Concierge Recommendations",
    category: "Guides",
    description: "The best luxury restaurants in Ibiza selected by our concierge team. From clifftop terraces to hidden gardens — where to eat and how to book.",
    date: "2024-04-24",
    author: "Simple Luxury",
    image: "/blog/restaurants-ibiza.jpg",
    excerpt: "Ibiza's dining scene has moved well beyond party food. These five restaurants represent the serious end of the island's kitchen.",
    readingTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "The quality of Ibiza's restaurant scene is consistently underestimated. The island attracts exceptional culinary talent — chefs who want the clientele, the produce and the setting — and the best tables here match anything available on the mainland. Booking them requires either a long lead time or the right relationships. These five consistently deliver.",
      },
      { type: "heading", text: "01 — Nobu Ibiza Bay" },
      {
        type: "paragraph",
        text: "The hotel restaurant with arguably the best terrace position on the island — a wide deck facing west, open to the sea, perfectly oriented for the sunset. The black cod with miso is the obvious order, the wagyu is exceptional and the omakase menu, booked in advance, is worth requesting for a special evening. Accessible through our priority reservation line.",
      },
      { type: "heading", text: "02 — Amante" },
      {
        type: "paragraph",
        text: "A clifftop setting above Cala Sol d'en Serra on the east coast, Amante earns its reputation through a combination of excellent Mediterranean seafood, immaculate service and a view that makes it impossible to rush. Dinner here frequently extends well beyond midnight without any sense of the evening being over. The paella and the lobster are both outstanding.",
      },
      { type: "heading", text: "03 — La Paloma" },
      {
        type: "paragraph",
        text: "Hidden in an orange grove near Sant Llorenç, La Paloma has been producing honest, beautiful food quietly for years. Lunch under the trees — dishes built around that morning's market produce — feels like stumbling onto something private. The setting is bohemian without being self-consciously so. One of the few restaurants on the island that improves with every visit.",
      },
      { type: "heading", text: "04 — Es Torrent" },
      {
        type: "paragraph",
        text: "A beach restaurant in the proper sense — tables on the sand, boats moored metres away, seafood arriving from the boats to the kitchen the same morning. The whole fish baked in salt is exceptional. Arriving by private tender from an anchored charter is the obvious approach. Booking is essential and demand significantly exceeds supply in July and August.",
      },
      { type: "heading", text: "05 — Sublimotion" },
      {
        type: "paragraph",
        text: "Ibiza's most theatrical dining experience — twelve guests, twenty courses, an immersive multi-sensory journey coordinated across a purpose-built dining room at Hard Rock Hotel. One of the most expensive restaurants in the world and, by a significant margin, one of the most memorable evenings available anywhere on the island. Advance booking through our concierge is advisable.",
      },
      {
        type: "tip",
        label: "Booking Access",
        text: "Our concierge service holds priority reservation access at all five of these restaurants. For July and August dates, we recommend engaging at least 4–6 weeks in advance.",
      },
    ],
  },
  {
    slug: "mallorca-beach-guide-complete-handbook",
    title: "Mallorca Beach Guide – Your Complete Local's Handbook",
    category: "Guides",
    description: "Comprehensive guide to the best beaches in Mallorca with insider tips on access, crowds, water quality and what makes each one worth visiting.",
    date: "2024-04-25",
    author: "Simple Luxury",
    image: "/blog/mallorca-beaches.jpg",
    excerpt: "Mallorca has over 260 beaches. Most visitors see the same five. Here is where the locals and the charter captains actually go.",
    readingTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Mallorca's coastline stretches for 550 kilometres and contains more variety than most people realise. The overdeveloped south coast beaches are only a small part of the picture. The northeast, the northwest and the Serra de Tramuntana coast are different in character — quieter, harder to reach by road and significantly more rewarding.",
      },
      { type: "heading", text: "Cala Mesquida — Northeast Coast" },
      {
        type: "paragraph",
        text: "A long, wide bay with fine sand and a natural dune system that has protected it from over-development. The water is clear and the beach faces northeast, making it excellent in the morning and calm in the afternoon when the prevailing wind drops. Accessible by road, but the drive is long enough to deter casual visitors. Consistent quality throughout the season.",
      },
      { type: "heading", text: "Cala Varques — East Coast" },
      {
        type: "paragraph",
        text: "One of Mallorca's genuinely unspoiled coves — accessible only on foot along a 30-minute pine-forest path or by private tender from an anchored vessel. The water is extraordinary: flat, shallow and a shade of turquoise that looks artificially enhanced in photographs. No facilities, no sunbeds, no vendors. Exactly what many people are looking for and increasingly difficult to find.",
      },
      {
        type: "tip",
        label: "Charter Advantage",
        text: "Cala Varques and many of the best east-coast calas are accessible by tender from an anchored charter yacht. You arrive before the walkers, have the beach to yourself in the morning, and depart when you choose.",
      },
      { type: "heading", text: "Sa Calobra — Northwest" },
      {
        type: "paragraph",
        text: "The most dramatic beach setting on the island. A river gorge cuts through limestone mountains to emerge at a shingle cove — the Torrent de Pareis — framed by cliffs several hundred metres high. The sea is calm and extraordinarily clear. The drive down the mountain road is famous in its own right. Arrive by boat in summer to avoid the coach parties.",
      },
      { type: "heading", text: "Platja de Muro — North" },
      {
        type: "paragraph",
        text: "Eight kilometres of unbroken fine sand, backed by dunes and a protected lagoon. The water is shallow and warm, the beach is wide enough to absorb significant numbers without feeling crowded, and the infrastructure — parking, facilities, beach clubs — is genuinely well managed. Excellent for families or larger groups who want a full beach day without the logistics of a remote cala.",
      },
      {
        type: "list",
        heading: "By Boat: Best Mallorca Anchorages",
        items: [
          "Cala Llombards — sheltered south coast cove with crystal water",
          "Cala Mondragó — protected natural park, two connected bays",
          "Portals Vells — sea caves accessible by dinghy, empty in morning",
          "Cala Figuera — fishing village atmosphere, excellent lunch options",
        ],
      },
    ],
  },
  {
    slug: "private-yacht-charter-pricing-guide",
    title: "Private Yacht Charter Pricing Guide – What to Expect",
    category: "Yacht Charters",
    description: "Transparent breakdown of private yacht charter pricing in Ibiza & Mallorca. Day rates, week rates, what's included and what costs extra.",
    date: "2024-04-26",
    author: "Simple Luxury",
    image: "/blog/yacht-pricing.jpg",
    excerpt: "Charter pricing in the Balearics is often quoted without enough context. Here is what is actually included, what is not, and how to compare properly.",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Charter pricing varies significantly depending on vessel type, season, duration and what is included in the base rate. Quoted prices are rarely the complete picture — understanding the structure of charter costs is essential before comparing options.",
      },
      { type: "heading", text: "Day Charter Rates" },
      {
        type: "paragraph",
        text: "Day charters on quality vessels in the Balearics run from approximately €1,200 for a mid-size catamaran to €8,000+ for a premium motor yacht. The rate covers the vessel, crew (captain and one deckhand on most catamarans) and fuel within the agreed operating area. Most day charters are 8 hours from departure to return.",
      },
      {
        type: "list",
        heading: "What Day Charter Rates Include",
        items: [
          "Vessel for the agreed hours (typically 09:00–17:00 or 10:00–18:00)",
          "Captain and crew",
          "Fuel for the planned itinerary",
          "Basic safety equipment and snorkelling gear",
          "Tender and water toys on most vessels",
        ],
      },
      {
        type: "list",
        heading: "What Is Typically Extra",
        items: [
          "Provisioning: food, drinks and ice (usually €40–80pp for a full day)",
          "Additional fuel for extended range requests",
          "Marina fees if overnight mooring is required",
          "Private chef (€250–500 for the day)",
          "Water sports equipment beyond standard toys",
        ],
      },
      { type: "heading", text: "Week Charter Rates" },
      {
        type: "paragraph",
        text: "Week charters are priced differently — the base rate covers the vessel and crew for 7 days, but the additional costs (provisioning, marina fees, fuel) are budgeted separately and can add 30–40% to the base rate. A realistic week charter budget for a quality 50-foot catamaran with full provisioning in peak season is €15,000–20,000 for up to 8 guests.",
      },
      {
        type: "tip",
        label: "True Cost Calculation",
        text: "Take the quoted base rate and add 35% for a realistic all-in budget. This accounts for provisioning, fuel, marina fees and crew gratuity (typically 10–15% of base rate for week charters).",
      },
      { type: "heading", text: "Seasonal Pricing" },
      {
        type: "paragraph",
        text: "Prices peak in July and August, with June and September running approximately 15–20% lower. April, May and October offer the largest discounts — often 25–35% below peak — with minimal compromise on conditions. Our fleet pricing is transparent: what you see is what you pay, with provisioning quoted separately based on your preferences.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return blogPosts.slice(0, count);
  const sameCategory = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  return [...sameCategory, ...others].slice(0, count);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export { BASE_URL };
