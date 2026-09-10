export const STUDIO = {
  name: "River City Dance Studio",
  phone: "(210) 810-2224",
  phoneHref: "tel:+12108102224",
  email: "rivercitydancestudio.sat@gmail.com",
  emailHref: "mailto:rivercitydancestudio.sat@gmail.com",
  address: "3534 Fredericksburg Rd #24",
  city: "San Antonio",
  region: "TX",
  postal: "78201",
  mapHref: "https://www.google.com/maps/dir/?api=1&destination=3534+Fredericksburg+Rd+%2324+San+Antonio+TX+78201",
  // Replace this with the actual Google Form embed URL when ready.
  rentalFormEmbedUrl: "",
  // Square Appointments booking flow, one link per service.
  square: {
    bookClass: "https://book.squareup.com/appointments/rwbsg1e9i7s0au/location/LTABMC72S9B6G/services/OFZYFSUIUSHAODC75MI6HXQ6",
    privateSingle: "https://book.squareup.com/appointments/rwbsg1e9i7s0au/location/LTABMC72S9B6G/services/X67TYCRAGEPLHUBHNH7R6LYC",
    privateCouple: "https://book.squareup.com/appointments/rwbsg1e9i7s0au/location/LTABMC72S9B6G/services/GSSMLMPOWJCBRWNQTBPDWQLD",
    bundle: "",
    privateInquiry: "https://app.squareup.com/appointments/book/rwbsg1e9i7s0au/LTABMC72S9B6G/start",
  },
  // Per-service price points (USD). TBD entries await final pricing.
  prices: {
    publicClass: 25,
    privateSingle: 100,
    privateCouple: 150,
    rental: null as number | null,
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;