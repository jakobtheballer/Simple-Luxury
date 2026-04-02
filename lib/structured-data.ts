const BASE_URL = "https://simpleluxuryservice.de";

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "Simple Luxury",
  alternateName: "Simple Luxury – Hütter & Streich Adventures",
  description:
    "Premium luxury concierge and yacht charter services in the Balearic Islands. Private yacht charters, exclusive villas, fine dining, and bespoke lifestyle experiences.",
  url: BASE_URL,
  telephone: "+4915738248355",
  email: "booking@simpleluxuryservice.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Moltkestraße 39",
    addressLocality: "Heidelberg",
    postalCode: "69120",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Ibiza",       sameAs: "https://en.wikipedia.org/wiki/Ibiza" },
    { "@type": "City", name: "Mallorca",    sameAs: "https://en.wikipedia.org/wiki/Mallorca" },
    { "@type": "City", name: "Formentera",  sameAs: "https://en.wikipedia.org/wiki/Formentera" },
  ],
  knowsAbout: [
    "Yacht Charter", "Luxury Concierge", "Villa Rental",
    "Fine Dining", "Lifestyle Management", "Travel Services",
    "VIP Transportation", "Mediterranean Sailing",
  ],
  sameAs: [
    "https://instagram.com/simpleluxuryservice",
    "https://tiktok.com/@simpleluxuryservice",
  ],
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Simple Luxury – Hütter & Streich Adventures",
  alternateName: "Simple Luxury",
  url: BASE_URL,
  logo: `${BASE_URL}/hutter-logo.svg`,
  description: "Premium luxury concierge and yacht charter services in the Balearic Islands.",
  foundingDate: "2024",
  founders: [
    { "@type": "Person", name: "Moritz Hütter" },
    { "@type": "Person", name: "Jakob Streich"  },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+4915738248355",
    email: "booking@simpleluxuryservice.de",
    availableLanguage: ["German", "English"],
  },
  sameAs: [
    "https://instagram.com/simpleluxuryservice",
    "https://tiktok.com/@simpleluxuryservice",
  ],
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/#services`,
  name: "Luxury Concierge & Yacht Charter",
  provider: { "@type": "LocalBusiness", name: "Simple Luxury", url: BASE_URL },
  areaServed: ["Ibiza", "Mallorca", "Formentera"],
  hasOfferingDetails: [
    {
      "@type": "Service",
      name: "Yacht Charter",
      description: "Private luxury yacht charters in Ibiza, Mallorca and Formentera. Day charters, week charters, and overnight expeditions.",
      url: `${BASE_URL}/fleet`,
    },
    {
      "@type": "Service",
      name: "Villa Rental",
      description: "Exclusive private villa rentals in the Balearic Islands with sea views, private pools and dedicated staff.",
      url: `${BASE_URL}/villas`,
    },
    {
      "@type": "Service",
      name: "Concierge Services",
      description: "Premium concierge and lifestyle management for high-net-worth clients.",
      url: `${BASE_URL}/services`,
    },
    {
      "@type": "Service",
      name: "Fine Dining Reservations",
      description: "Priority reservations at the best restaurants in Ibiza and Mallorca.",
    },
    {
      "@type": "Service",
      name: "VIP Transportation",
      description: "Helicopter transfers, private boat transfers, and chauffeur services.",
    },
  ],
});
