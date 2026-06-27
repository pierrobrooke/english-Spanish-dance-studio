## Queued changes (apply in build mode)

### 1. Wire Square booking URL into all CTAs
Update `src/components/site/SiteData.ts` so every Square link points to the booking flow you shared:

```
https://app.squareup.com/appointments/book/rwbsg1e9i7s0au/LTABMC72S9B6G/start
```

Affected fields in `STUDIO.square`:
- `bookClass` — used by Hero, Schedule, Nav "Book" buttons
- `bundle` — used by the featured $145 Starter Bundle card in Pricing
- `privateInquiry` — used as fallback for private lesson CTAs

All three will resolve to the same Square Appointments start page until you give me deeper links per service. Once you set up separate Square service links (one per: drop-in class, private single, private couple, $145 bundle), I can split them out.

### 2. Pricing card CTAs
In `src/components/site/Pricing.tsx`, the Drop-in / Private Single / Private Couple cards currently show "Pricing coming soon" with a phone-call link. I'll add a secondary "Book on Square" button (linking to the same booking URL) alongside the call link, so visitors can self-serve booking even while prices are TBD. The $145 bundle button already points to Square.

### 3. Still waiting on you (no change yet)
These remain placeholders until you provide values — flagging so nothing is forgotten:
- **Google Form embed URL** for studio rental → `STUDIO.rentalFormEmbedUrl`
- **Final price points** for drop-in, private single, private couple, rental rate
- **Real Instagram / Facebook URLs** → `STUDIO.social`
- **Confirm phone, email, address** in `SiteData.ts` are correct (currently pulled from the old site)

### Technical notes
- Single-file logic change (`SiteData.ts`) + small JSX additions in `Pricing.tsx`. No new dependencies, no routing or schema changes.
- Buttons open in a new tab (`target="_blank" rel="noopener noreferrer"`), matching the existing bundle button pattern.
