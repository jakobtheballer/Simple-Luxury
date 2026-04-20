export type FAQLink = {
  label: string;
  href: string;
};

export type FAQ = {
  question: string;
  shortAnswer: string;
  paragraphs: string[];
  list?: string[];
  links?: FAQLink[];
};

export const faqs: FAQ[] = [
  {
    question: "How do I book a yacht charter?",
    shortAnswer:
      "Contact our concierge team via WhatsApp, email or the contact form with your dates, group size and any requests. We respond within two hours, 24/7.",
    paragraphs: [
      "Booking is handled entirely by our concierge team. Reach us via WhatsApp (+49 1573 8248355), email or the contact form with your preferred dates, group size and any specific requests. We confirm availability, recommend the most suitable vessel for your group, and handle everything from there.",
      "We pre-book restaurants, arrange any additional activities, and brief the crew before departure. There is no online booking form to wrestle with — the process is a conversation, which allows us to build the right experience from the start. Our team responds within two hours, at any time of day.",
    ],
    links: [
      { label: "View available yachts", href: "/fleet" },
      { label: "Contact our team", href: "/contact" },
    ],
  },
  {
    question: "What's included in a yacht charter?",
    shortAnswer:
      "Professional crew, all safety equipment, fuel, docking, snorkelling gear and water sports. Food and drinks are arranged separately but pre-booked by our concierge.",
    paragraphs: [
      "Every charter includes a professional captain and crew, all safety equipment and current maritime certifications, fuel for the agreed itinerary, docking fees, snorkelling equipment and standard water toys including paddleboards.",
      "Food and restaurant bookings are handled separately — our concierge pre-books your chosen restaurant the day before, and the tender brings you directly to the beach. Drinks and provisions can be pre-stocked on the yacht on request: champagne, wine, beer, soft drinks and fresh food are all available. Just tell us what you want aboard.",
    ],
    links: [{ label: "Browse our charter fleet", href: "/fleet" }],
  },
  {
    question: "Why charter a private yacht instead of staying at a hotel?",
    shortAnswer:
      "Privacy, flexibility and access to beaches no hotel or ferry can reach. Per person, a charter shared across a group often costs less than a five-star hotel room.",
    paragraphs: [
      "A luxury hotel offers comfort within fixed geography. A private charter goes where you want, when you want. The anchorages you choose are effectively yours — particularly in May, June and September. The sea caves, remote calas and beaches accessible only by boat are not available to hotel guests at any price.",
    ],
    list: [
      "Privacy: your group, your vessel, no shared spaces or shared beach",
      "Flexibility: no fixed meal times, no check-in queues, itinerary adjusts to your mood",
      "Exclusive access: secret coves, Illa Espalmador, sea caves — inaccessible by any other means",
      "Value: at full capacity, a charter per person often costs less than a five-star hotel room",
      "Customisation: restaurants, activities and celebrations all arranged around you",
      "Experience: waking up in a new anchorage, swimming from your own deck — categorically different from any hotel",
    ],
    paragraphs2: [
      "Hotels are comfortable. Yacht charters are the kind of experience people describe for years afterwards.",
    ],
    links: [
      { label: "View our charter fleet", href: "/fleet" },
      { label: "Read: Yacht charter vs hotel", href: "/blog/yacht-charter-vs-hotel-balearics" },
    ],
  } as FAQ & { paragraphs2: string[] },
  {
    question: "Can I customise my charter experience?",
    shortAnswer:
      "Entirely. The itinerary, restaurants, activities and pace of the day are built around your preferences — not a pre-set package.",
    paragraphs: [
      "Every charter is built around what you actually want. Tell us your preferences — specific anchorages, a particular restaurant, a surprise proposal, a birthday celebration, an all-day snorkelling focus, a preference for quieter coves over the main beaches — and we organise accordingly.",
      "The crew is briefed on your preferences before departure. Itineraries can be adjusted during the day based on conditions, mood or anything else. There is no fixed route and no obligation to follow the standard tourist circuit.",
    ],
    links: [{ label: "Explore all services", href: "/services" }],
  },
  {
    question: "What is your cancellation policy?",
    shortAnswer:
      "Cancel 30+ days before for a full refund, 15–30 days for a 50% refund. Bad weather always results in a free reschedule or full refund.",
    paragraphs: [
      "We apply a straightforward policy: cancellations made 30 or more days before the charter date receive a full refund. Cancellations between 15 and 30 days receive a 50% refund. Cancellations less than 15 days before departure are non-refundable unless we are able to rebook the slot.",
      "Weather cancellations are treated differently. If conditions make sailing unsafe or the experience significantly worse than expected, we reschedule at no cost or issue a full refund. Your safety and satisfaction take priority over the booking.",
    ],
  },
  {
    question: "Do you arrange weddings and proposals?",
    shortAnswer:
      "Yes — yacht weddings, villa weddings, proposals and anniversary celebrations. Our concierge coordinates catering, photographers, decorations and guest logistics.",
    paragraphs: [
      "We arrange yacht-based ceremonies, villa weddings, surprise proposals and celebration charters regularly. The logistics are handled entirely by our concierge: catering, floral arrangements, photographer briefing, guest accommodation and on-the-day coordination.",
      "A sunset proposal on a private deck above Formentera, or a ceremony at anchor in a quiet Ibiza cala — these are not complicated to arrange when you have the right people. Brief us on what you have in mind and we will make it specific and executable.",
    ],
    links: [
      { label: "Villa wedding planning guide", href: "/blog/private-villa-wedding-mallorca" },
      { label: "View private villas", href: "/villas" },
      { label: "Contact our concierge", href: "/contact" },
    ],
  },
  {
    question: "How many guests can a yacht accommodate?",
    shortAnswer:
      "Our fleet ranges from 4 to 12 guests depending on the vessel. Catamarans are the most stable and spacious option for groups.",
    paragraphs: [
      "Vessel capacity depends on the yacht — our fleet ranges from intimate boats suited to 4–6 guests through to catamarans accommodating up to 12 guests for day charters. Overnight capacity is smaller due to cabin configuration.",
      "Catamarans are our most popular choice for groups: the wide deck space is comfortable, the twin-hull design provides exceptional stability, and the layout allows guests to spread out across multiple levels. For larger groups or events requiring multiple vessels, we can coordinate two boats sailing together.",
    ],
    links: [{ label: "Browse the full fleet", href: "/fleet/all" }],
  },
  {
    question: "How do I book a private villa?",
    shortAnswer:
      "The same way as a charter — contact our concierge with your dates, group size and preferences. We match you with the right property from our handpicked portfolio.",
    paragraphs: [
      "Contact our concierge with your dates, group size and what matters most to you: sea view, pool configuration, proximity to Ibiza Town, number of bedrooms, whether you need a catering kitchen. We match you with the most suitable property from our portfolio — every villa we recommend has been visited personally.",
      "We also arrange everything that comes with the villa: arrival transfers, welcome provisioning, private chef bookings, restaurant reservations and any yacht charters you want to add. The villa is the base; we build the rest of the itinerary around it.",
    ],
    links: [
      { label: "View our villa portfolio", href: "/villas" },
      { label: "Concierge services", href: "/services" },
    ],
  },
  {
    question: "Is concierge service included with every booking?",
    shortAnswer:
      "Yes. 24/7 concierge access is standard on all yacht charters. Restaurant reservations, VIP access, transfers and last-minute requests are all handled by our team.",
    paragraphs: [
      "24/7 concierge support is included with every charter and villa booking. Need a restaurant reservation made while you are anchored off Formentera? Done in minutes. VIP club access for the evening? We arrange it. A last-minute helicopter transfer? Handled.",
      "Our concierge team knows the Balearic Islands from years of operating here — the restaurants that do not advertise, the club contacts that matter, the beach clubs with the best positioning at any given time of day. That knowledge is part of what you are engaging when you book with us.",
    ],
    links: [{ label: "All concierge services", href: "/services" }],
  },
  {
    question: "What if I need to make last-minute changes?",
    shortAnswer:
      "Call or WhatsApp us at any time. Itinerary changes, restaurant switches, extended charter hours — the crew and concierge are flexible and responsive.",
    paragraphs: [
      "Conditions on the water change, preferences evolve, and the day sometimes has better ideas than the plan. Call or WhatsApp our team at any point during your charter — itinerary changes, restaurant switches, decisions to extend by two hours or head somewhere different are all manageable in real time.",
      "The crew is briefed to be flexible. There is no rigid script to follow. Luxury should be effortless, and that means the people running the experience respond to what you actually want, not what was written on a form three weeks ago.",
    ],
  },
  {
    question: "Is snorkelling equipment provided?",
    shortAnswer:
      "Yes — masks, snorkels, fins and wetsuits are all on board. The crew knows the best spots for visibility, sea turtles and marine life.",
    paragraphs: [
      "All snorkelling equipment is included: masks, snorkels, fins and wetsuits where conditions call for them. The crew knows the water around each island intimately — where the visibility reaches 20–25 metres, where sea turtles are regularly sighted, where the coves have the most interesting marine life.",
      "First-time snorkellers are guided and encouraged. If you want to bring an underwater camera or GoPro, the conditions in Formentera and around Illa Espalmador in particular make it genuinely worthwhile.",
    ],
    links: [
      { label: "Formentera day trip guide", href: "/blog/formentera-day-trip-ibiza" },
    ],
  },
  {
    question: "Are your captains and crew professionally certified?",
    shortAnswer:
      "All captains hold valid maritime certifications and carry extensive local knowledge. Safety is the non-negotiable baseline; exceptional hospitality is what we build on top of it.",
    paragraphs: [
      "Every captain on our fleet holds current maritime certifications appropriate to the vessel and operating area. They are experienced in Mediterranean conditions, familiar with the anchorages, currents and tidal patterns around the Balearic Islands, and briefed on your group's preferences before departure.",
      "Beyond certifications, our crew selection prioritises hospitality. The captains and hostesses we work with are not just competent sailors — they are people who understand that the technical management of the boat is the baseline, and that creating a genuinely enjoyable day for the group is the actual job.",
    ],
  },
  {
    question: "Can I bring my own food and drinks?",
    shortAnswer:
      "Yes. You can bring whatever you like, or we can pre-stock the yacht with anything you want. We recommend letting us book the restaurant — the food is exceptional.",
    paragraphs: [
      "You are welcome to bring your own food, drinks and provisions. There are no restrictions. If you would prefer us to pre-stock the yacht — specific wines, champagne, beer, fresh fruit, picnic provisions — we arrange this before departure. Just tell us what you want and it will be on board.",
      "That said, the beach restaurants in Formentera and around Ibiza represent some of the best cooking available anywhere in the Mediterranean. We recommend at least one proper lunch at a table — it is part of the experience, not a diversion from it.",
    ],
    links: [
      { label: "Top restaurants in Ibiza", href: "/blog/top-restaurants-ibiza-concierge-picks" },
    ],
  },
  {
    question: "What makes Simple Luxury different from other charter companies?",
    shortAnswer:
      "We are a small team with deep local relationships, genuine 24/7 availability, and a focus on handling everything so you do not have to think about logistics at all.",
    paragraphs: [
      "We are not a large booking platform. Simple Luxury is a small team — Hütter & Streich — that has spent years building relationships with the best captains, restaurants, villa managers and suppliers across the Balearic Islands. When we recommend something, it is because we know it personally.",
      "The practical difference is in the detail. Our concierge is genuinely available around the clock, not just during business hours. We handle the dependencies — yacht timing, restaurant reservation, transfer from airport to villa — as a single coordinated team rather than three separate vendors. And when something needs to change, we fix it without you noticing it was ever a problem.",
    ],
    links: [
      { label: "Our services", href: "/services" },
      { label: "Read our guides", href: "/guides" },
    ],
  },
];

export function generateFAQSchema(faqList: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.shortAnswer,
      },
    })),
  };
}
