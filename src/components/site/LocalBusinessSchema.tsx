export function LocalBusinessSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "River City Dance Studio",
    description:
      "San Antonio's beloved ballroom and Latin partner-dance studio since 1979. Beginner public classes Tuesdays and Fridays at 7:00 PM. Private lessons, bilingual instruction (English/Spanish), senior-friendly community, and studio rentals.",
    url: "/",
    telephone: "+1-210-810-2224",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3534 Fredericksburg Rd #24",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78201",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "San Antonio" },
    knowsLanguage: ["en", "es"],
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay (Square)",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "19:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "19:00", closes: "21:00" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Starter Bundle — 2 public classes + 1 private lesson",
        price: "145.00",
        priceCurrency: "USD",
      },
      { "@type": "Offer", name: "Public Beginner Drop-in Class" },
      { "@type": "Offer", name: "Private Lesson — Single" },
      { "@type": "Offer", name: "Private Lesson — Couple" },
      { "@type": "Offer", name: "Studio Rental" },
    ],
    keywords:
      "ballroom dance, Tejano, Cumbia, Country Western Two-Step, Latin dance, Salsa, Bachata, Swing, senior dance classes, bilingual dance instruction, clases de baile San Antonio",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}