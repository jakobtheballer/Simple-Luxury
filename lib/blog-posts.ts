const BASE_URL = "https://simpleluxuryservice.de";

export type BlogCategory = "Yacht Charters" | "Villas" | "Guides" | "Services";

export type BlogContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "tip"; label: string; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "cta"; text: string; href: string; label: string }
  | { type: "image"; alt: string; caption: string };

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
    image: "/blog/ibiza-yacht.svg",
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
      {
        type: "cta",
        text: "Ready to plan your Ibiza yacht charter? Browse our fleet of private catamarans available from spring through October.",
        href: "/fleet",
        label: "View Available Yachts",
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
    image: "/blog/wedding-villa.svg",
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
      {
        type: "cta",
        text: "Browse our handpicked collection of private villas across Ibiza, Mallorca and Formentera — each visited personally and selected for quality, privacy and character.",
        href: "/villas",
        label: "View Private Villas",
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
      {
        type: "cta",
        text: "Our concierge team manages vendor coordination, logistics and on-the-day support for villa weddings across the Balearic Islands.",
        href: "/services",
        label: "Explore Concierge Services",
      },
    ],
  },
  {
    slug: "formentera-day-trip-ibiza",
    title: "Formentera Day Trip from Ibiza – Complete Itinerary & Guide",
    category: "Guides",
    description: "Complete day trip guide from Ibiza to Formentera by yacht or ferry. Best beaches, restaurants, itinerary, timing & insider tips for the perfect island escape.",
    date: "2024-04-21",
    author: "Simple Luxury",
    image: "/blog/formentera.svg",
    excerpt: "Just 30 minutes from Ibiza lies Formentera — a small island with Caribbean-quality water, white sand beaches, and an unhurried pace that the larger island has long since lost. Here is how to experience it properly.",
    readingTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "Just 30 minutes from Ibiza lies Formentera — the smallest of the Balearic Islands and, by most measures, the most beautiful. The water here is extraordinary: flat, shallow, and a shade of turquoise that photographs consistently fail to capture. The beaches are unhurried. The restaurants serve fish that arrived that morning. And unlike Ibiza, there is no queue for any of it — if you know how to arrive.",
      },
      {
        type: "paragraph",
        text: "The operative word is how. Formentera receives hundreds of day-trippers by ferry every summer morning, all arriving at the same time, all heading to the same beaches. The island is small enough that this concentration is felt immediately. The alternative — a private yacht charter departing at 10am, stopping first at Illa Espalmador before the ferries land — delivers a categorically different experience. This guide covers both options, and explains exactly why the difference matters.",
      },
      {
        type: "image",
        alt: "Turquoise waters of Formentera viewed from a private yacht at anchor",
        caption: "Formentera from the water — the crossing from Ibiza takes under an hour by private charter",
      },
      { type: "heading", text: "Yacht Charter vs Ferry to Formentera – Which Option Wins?" },
      {
        type: "paragraph",
        text: "Both options get you to Formentera. The experience on arrival, and the flexibility you have once there, are not remotely comparable. Here is an honest breakdown of each.",
      },
      {
        type: "list",
        heading: "Ferry — The Budget Route",
        items: [
          "Cost: €20–30 per person return (€200–300 for a group of ten)",
          "Journey time: 30–35 minutes, departures roughly hourly",
          "No booking flexibility — you leave and return on the ferry's schedule",
          "No access to Illa Espalmador, sea caves or offshore anchorages",
          "Beaches and restaurants are crowded with ferry arrivals between 11:30am and 3pm",
          "Works well for solo travellers or couples on a budget",
        ],
      },
      {
        type: "list",
        heading: "Private Yacht Charter — The Better Option",
        items: [
          "Cost: €1,200–1,600 for the day; €120–160 per person in a group of ten",
          "Depart when you choose — 10am means Illa Espalmador before anyone else",
          "Access to beaches and anchorages no ferry can reach",
          "Professional crew with local knowledge of tides, anchorages and conditions",
          "Snorkelling from the boat, paddleboards, on-deck food and drinks",
          "Stable catamaran platform — minimal motion even in choppy conditions",
          "Entire boat is exclusively yours — no shared space",
        ],
      },
      {
        type: "tip",
        label: "The Real Cost Comparison",
        text: "A private charter at €1,400 shared between ten people costs €140 per person — approximately €110 more than the ferry, per head. For that premium you gain an entirely private vessel, access to beaches no ferry visits, a professional crew, snorkelling equipment and complete flexibility over your schedule. The comparison is rarely as straightforward as the headline numbers suggest.",
      },
      {
        type: "cta",
        text: "Browse our Formentera-ready charter fleet — catamarans available for day charters departing Ibiza, with crew, snorkelling gear and flexible itineraries.",
        href: "/fleet",
        label: "View Charter Fleet",
      },
      { type: "heading", text: "The Perfect Formentera Day – Hour by Hour" },
      {
        type: "paragraph",
        text: "The following itinerary is based on hundreds of charters we have run from Ibiza to Formentera. It is optimised for a 10am departure — late enough to sleep in, early enough to reach Illa Espalmador before the ferry crowds. The crew manages everything; your role is simply to enjoy the progression of the day.",
      },
      {
        type: "list",
        heading: "10:00 — Depart Ibiza Marina",
        items: [
          "Board the yacht at Ibiza Marina — crew are ready and briefed",
          "Coffee, juice and light breakfast served on deck as you clear the harbour",
          "The crossing begins with views of Ibiza's old town from the sea",
          "Crew briefs the group on the day's route and conditions",
        ],
      },
      {
        type: "image",
        alt: "Yacht departing Ibiza Marina at dawn with Es Vedrà in background",
        caption: "Departing at 10am — late enough to rest, early enough to arrive before the crowds",
      },
      {
        type: "list",
        heading: "11:00 — Illa Espalmador: The Secret First Stop",
        items: [
          "A small uninhabited island between Ibiza and Formentera",
          "Accessible only by private vessel — ferries pass but cannot anchor",
          "Pristine white sand beach with no facilities and no crowds at 11am",
          "Water visibility of 20–25 metres — exceptional snorkelling conditions",
          "Sea turtles are occasionally sighted in the surrounding shallows",
          "90-minute stop: swim, snorkel, explore the beach",
        ],
      },
      {
        type: "tip",
        label: "Why 10am Matters",
        text: "Illa Espalmador is at its best before midday. Ferry passengers from Ibiza begin arriving at Formentera around 11:30am and some make their way here by rented boat in the afternoon. At 11am, with a 10am departure, you typically have the island entirely to yourself.",
      },
      {
        type: "list",
        heading: "12:30 — Sail Along the Formentera Coastline",
        items: [
          "A 20-minute sail from Espalmador to the northern tip of Formentera",
          "Crew points out the lighthouse at La Mola visible from the sea",
          "Swimming possible from the boat en route",
          "Light refreshments served on deck",
        ],
      },
      { type: "heading", text: "Lunch – Three Restaurants Worth Knowing" },
      {
        type: "paragraph",
        text: "Formentera's beach restaurant scene has improved significantly over the past decade. The following three represent consistent quality across different styles — our concierge pre-books whichever you select the day before your charter. The tender drops you directly at the beach; no transport, no waiting.",
      },
      {
        type: "tip",
        label: "Besó Beach",
        text: "Premium beachfront restaurant with a relaxed, upscale atmosphere. The menu focuses on fresh Mediterranean cuisine and grilled seafood with excellent wine. Appropriate for all occasions — families, groups, celebrations. Mains €20–35.",
      },
      {
        type: "tip",
        label: "Duplo Beach Club",
        text: "Modern, sophisticated setting with a broad Mediterranean menu and consistent execution. Popular with groups and ideal for a longer lunch with good food across varied preferences. Mains €20–35.",
      },
      {
        type: "tip",
        label: "Hannah",
        text: "The most refined of the three — gourmet Mediterranean cuisine with premium seafood and an elegant setting suited to couples, anniversaries or anyone wanting a more considered dining experience. Mains €25–40.",
      },
      {
        type: "image",
        alt: "Fresh grilled seafood lunch at a Formentera beach restaurant with Mediterranean views",
        caption: "Lunch at Formentera — the fish arrived this morning; the table is yours for as long as you need it",
      },
      {
        type: "list",
        heading: "3:00 — Afternoon Beach Time",
        items: [
          "Return to the yacht or remain at the beach — entirely your choice",
          "Paddleboards available from the boat",
          "Swimming from the stern or the beach",
          "Crew manages the boat while guests enjoy the afternoon",
          "Optional: explore nearby coves by tender",
        ],
      },
      {
        type: "list",
        heading: "4:00 — Optional: Sea Caves & Hidden Coves",
        items: [
          "The coastline between Formentera and Ibiza contains several sea caves",
          "Accessible only by private tender — inaccessible from shore",
          "Snorkelling conditions inside the caves are exceptional",
          "Crystal-clear water, dramatic rock formations",
          "Zero crowds at any time of day",
        ],
      },
      {
        type: "image",
        alt: "Snorkelling in crystal-clear Formentera sea cave with colourful fish visible",
        caption: "The sea caves between the two islands — accessible only by private tender",
      },
      {
        type: "list",
        heading: "5:00 — Sunset Sailing Back to Ibiza",
        items: [
          "Depart Formentera as the afternoon light begins to soften",
          "The crossing back faces west — directly into the sunset",
          "Aperitifs and snacks served on deck",
          "The most photographed part of the day for most groups",
          "Arrival in Ibiza Marina at approximately 6:30pm",
        ],
      },
      {
        type: "tip",
        label: "For Proposals & Celebrations",
        text: "The return crossing at sunset — just your group, the golden light, the sea quiet — is one of the most naturally beautiful moments available anywhere in the Mediterranean. If you have a proposal, anniversary or birthday in mind, brief the crew before departure. They will arrange the details.",
      },
      { type: "heading", text: "Formentera's Best Beaches – Beyond the Tourist Trail" },
      {
        type: "paragraph",
        text: "Formentera is small enough that most visitors see the same three or four beaches. By boat, the full coastline is accessible. These are the ones that consistently stand apart.",
      },
      {
        type: "list",
        heading: "Ses Illetes",
        items: [
          "The island's most famous beach — and justifiably so",
          "Shallow, flat water in multiple shades of turquoise",
          "Fine white sand, minimal development, excellent facilities",
          "Best visited early morning (before 11am) or late afternoon",
          "Arrives by private charter or tender — walk-in access via ferry is a 30-minute hike",
        ],
      },
      {
        type: "list",
        heading: "Playa Migjorn",
        items: [
          "Five kilometres of unbroken sand — the island's longest beach",
          "Noticeably less crowded than Ses Illetes at any time of day",
          "Several good beach restaurants along the length of the beach",
          "Faces south — excellent light throughout the afternoon",
          "Ideal for larger groups wanting space and variety",
        ],
      },
      {
        type: "list",
        heading: "Cala Saona",
        items: [
          "The most intimate beach on the island — small, cliff-framed, west-facing",
          "Perfect sunset position from approximately 6pm",
          "Calm, sheltered water — excellent for swimming",
          "Accessible by car and by boat; the boat approach is more dramatic",
          "Best for couples or small groups wanting a quieter setting",
        ],
      },
      {
        type: "list",
        heading: "Illa Espalmador",
        items: [
          "Uninhabited island; no facilities, no ferry access, no crowds",
          "Only accessible by private vessel — the defining advantage of a charter",
          "White sand beaches on the sheltered eastern side",
          "Natural saltwater lagoon on the interior — reputed for its mineral content",
          "Snorkelling around the island is consistently exceptional",
        ],
      },
      {
        type: "image",
        alt: "Aerial view of Illa Espalmador showing white sand beaches and turquoise lagoon",
        caption: "Illa Espalmador — uninhabited, pristine, and inaccessible without a private vessel",
      },
      { type: "heading", text: "What to Pack for Your Formentera Day Trip" },
      {
        type: "list",
        heading: "Essentials",
        items: [
          "SPF 50+ sunscreen — reef-safe formulas preferred in protected waters",
          "Polarised sunglasses — the glare off the water is intense at midday",
          "Two swimsuits — one dries while you wear the other",
          "Lightweight cover-up for the return sailing when temperatures drop",
          "Waterproof case for phone or camera",
          "Water shoes or reef shoes for rocky cove entries",
          "Light sweater — evenings on the water are cooler than they appear",
        ],
      },
      {
        type: "list",
        heading: "Formentera-Specific",
        items: [
          "Underwater camera or GoPro — the visibility at Espalmador is 20+ metres",
          "Insect repellent for sunset hours near the beach",
          "Dry clothes and shoes for dinner in Ibiza on return",
          "Small dry bag for valuables on the beach",
          "Cash in small denominations — most restaurants accept cards but smaller vendors may not",
        ],
      },
      {
        type: "tip",
        label: "Underwater Photography",
        text: "The snorkelling at Illa Espalmador produces consistently exceptional underwater photographs. Sea turtles, octopus, sea bass and the occasional barracuda are all regularly sighted. A waterproof camera or GoPro is genuinely worthwhile here.",
      },
      { type: "heading", text: "Insider Secrets & Pro Tips" },
      {
        type: "paragraph",
        text: "The following observations come from operating charters on this route for several years. They are the kind of detail that makes a material difference to the quality of the day.",
      },
      {
        type: "list",
        heading: "Timing",
        items: [
          "10am departure is optimal — late enough to feel rested, early enough for Espalmador pristine",
          "Avoid the Formentera coast between 11:30am and 3pm — maximum ferry crowd overlap",
          "Weekdays throughout the season are noticeably quieter than weekends",
          "September and October offer the best combination of weather, water and crowd levels",
        ],
      },
      {
        type: "list",
        heading: "On the Water",
        items: [
          "Water clarity at Espalmador reaches 20–25 metres in good conditions",
          "Best snorkelling light is between 10am and noon — sun angle is optimal",
          "Catamarans are exceptionally stable — motion sickness is rarely an issue",
          "The crew carries all necessary safety equipment and certifications",
          "Shower and changing facilities on board for post-swim freshening up",
        ],
      },
      {
        type: "list",
        heading: "Restaurant",
        items: [
          "Our concierge books the table the day before — request your restaurant when booking",
          "Arriving by tender from an anchored boat avoids the midday pedestrian traffic entirely",
          "1:15pm arrival at the restaurant is the optimal timing — post-rush, pre-afternoon",
          "The fresh catch of the day at any of the three restaurants is always the safest order",
          "Lunch typically runs 90 minutes to two hours — no need to rush back",
        ],
      },
      {
        type: "tip",
        label: "Special Occasions",
        text: "If you are planning a proposal, anniversary or birthday celebration, brief the crew before departure. Champagne can be arranged, specific sunset positions selected, and the restaurant notified for appropriate table arrangements. The more notice you give, the more precisely the day can be calibrated.",
      },
      { type: "heading", text: "How to Book Your Perfect Formentera Day Trip" },
      {
        type: "paragraph",
        text: "The process is straightforward. Our team handles everything from charter selection to restaurant reservation to on-the-day coordination. What follows is what to expect.",
      },
      {
        type: "list",
        heading: "The Booking Process",
        items: [
          "Step 1: Contact our team with your date, group size and any celebration requirements",
          "Step 2: Receive a charter recommendation matched to your group — vessel type, capacity, budget",
          "Step 3: Confirm your restaurant preference from the three options (Besó, Duplo or Hannah)",
          "Step 4: We handle the restaurant reservation, itinerary briefing and crew preparation",
          "Step 5: Arrive at the marina at 10am — everything is ready",
        ],
      },
      {
        type: "list",
        heading: "What's Included",
        items: [
          "Professional captain and crew for the full day",
          "All safety equipment and current maritime certifications",
          "Fuel for the planned itinerary",
          "Snorkelling equipment for all guests",
          "Paddleboards and standard water sports equipment",
          "Restaurant reservation at your chosen venue",
          "Tender for transfers between boat and beach",
          "24/7 concierge contact throughout the day",
        ],
      },
      {
        type: "tip",
        label: "Cost Breakdown",
        text: "Small group (4–6 guests): €1,200–1,400 for the day. Medium group (6–10 guests): €1,400–1,600 for the day. Per person at full capacity: €120–200, depending on vessel. Restaurant lunch is separate: €20–40 per person depending on choice. Total per person, all in: approximately €160–240.",
      },
      {
        type: "cta",
        text: "Our Formentera charters depart Ibiza at 10am. Browse available vessels and check dates for your preferred trip.",
        href: "/fleet",
        label: "Book Your Formentera Charter",
      },
      { type: "heading", text: "Formentera Is Best Experienced From the Water" },
      {
        type: "paragraph",
        text: "The Balearics have dozens of beautiful beaches. But Formentera is different — it is the right size, the right pace and the right quality of water for a single perfect day. Illa Espalmador before anyone else arrives. Fresh fish at a beach table with the sea at your feet. The sunset on the return crossing with a glass in hand. These are not complicated pleasures, but they require arriving correctly.",
      },
      {
        type: "paragraph",
        text: "A private charter means you control the timing, the stops and the pace of the day. The crew manages everything else. Your only task is to be present for one of the better days available anywhere in the Mediterranean.",
      },
      {
        type: "cta",
        text: "Read our complete Formentera destination guide for more on beaches, restaurants and what makes the island worth understanding properly.",
        href: "/guides/formentera",
        label: "Read the Formentera Guide",
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
    image: "/blog/concierge.svg",
    excerpt: "A genuine luxury concierge does not simply make reservations. Here is what a proper service actually looks like in Ibiza and Mallorca.",
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The term concierge is used loosely across the hospitality industry. A hotel concierge points you towards a list of partners. A genuine luxury concierge in the Balearics operates on relationships — with boat captains, restaurant owners, villa managers, club directors and a network of people who make things happen because they want to, not because they are paid a referral fee.",
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
        text: "The more context you give, the better the result. Group composition, budget range, priorities — sea time versus nightlife versus food versus privacy — and any specific requests you already have in mind. All of this lets us build something specific rather than generic.",
      },
      { type: "heading", text: "The Difference It Makes" },
      {
        type: "paragraph",
        text: "The practical value of a concierge service is not the individual bookings — it is the coordination. A private chef confirmed, then the yacht delayed, then a restaurant reservation that no longer fits the timing: resolving these dependencies in real time, with local relationships that allow adjustments, is where the service earns its place. Your experience remains seamless because everything runs through one team who knows the full picture.",
      },
      {
        type: "cta",
        text: "Explore our full range of concierge services across Ibiza, Mallorca and Formentera — from yacht charters to private dining to VIP access.",
        href: "/services",
        label: "View All Services",
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
    image: "/blog/yacht-vs-hotel.svg",
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
      {
        type: "cta",
        text: "Browse our charter fleet — catamarans and motor yachts available for day and overnight charters across Ibiza, Mallorca and Formentera.",
        href: "/fleet",
        label: "View Yacht Fleet",
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
    image: "/blog/restaurants-ibiza.svg",
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
      {
        type: "cta",
        text: "Explore our complete Ibiza destination guide — beaches, experiences, where to stay and more insider recommendations from our team.",
        href: "/guides/ibiza",
        label: "Read the Full Ibiza Guide",
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
    image: "/blog/mallorca-beaches.svg",
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
      {
        type: "cta",
        text: "Read our complete Mallorca destination guide for more on beaches, restaurants, where to stay and the best experiences on the island.",
        href: "/guides/mallorca",
        label: "Read the Mallorca Guide",
      },
      {
        type: "cta",
        text: "The best Mallorca beaches are most accessible by private charter. Browse our fleet of Mallorca-based vessels.",
        href: "/fleet",
        label: "View Mallorca Charter Fleet",
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
    image: "/blog/yacht-pricing.svg",
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
      {
        type: "cta",
        text: "View our full charter fleet with transparent pricing — day rates, week rates and availability for Ibiza and Mallorca.",
        href: "/fleet",
        label: "View Charter Pricing & Fleet",
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
