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
  // Square Appointments booking flow. All CTAs route to the same start page
  // for now; split into per-service links once they exist in Square.
  square: {
    bookClass: "https://app.squareup.com/appointments/book/rwbsg1e9i7s0au/LTABMC72S9B6G/start",
    bundle: "https://book.squareup.com/appointments/rwbsg1e9i7s0au/location/LTABMC72S9B6G/services/GSSMLMPOWJCBRWNQTBPDWQLD",
    privateInquiry: "https://app.squareup.com/appointments/book/rwbsg1e9i7s0au/LTABMC72S9B6G/start",
  },
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;