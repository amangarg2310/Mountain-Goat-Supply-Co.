# Mountain G.O.A.T Supply Co. — Storefront

Production port of the locked v4 mockup (`MGSC-Store-v4.html`). Next.js App Router, no CSS framework — the design system is `app/globals.css` and it is the source of truth. Do not restyle casually; the vibe is load-bearing.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo. Zero config needed.
3. Project → Settings → Domains → add your domain, follow the DNS instructions (A record for apex, CNAME for www). SSL is automatic.

## Fourthwall (when the store exists)

The site runs on local catalog data until Fourthwall is connected. To flip it live:

1. Create the shop and the 8 products in the Fourthwall dashboard.
2. Settings → For developers → copy the Storefront token.
3. Add env vars (locally in `.env.local`, and in Vercel → Settings → Environment Variables):
   ```
   NEXT_PUBLIC_FW_STOREFRONT_TOKEN=ptkn_...
   NEXT_PUBLIC_FW_CHECKOUT_DOMAIN=mountain-goat-supply-co-shop.fourthwall.com   # already the code default
   ```
4. In `lib/data.ts`, set `fourthwallSlug` on each product to its Fourthwall slug.
5. Finish the cart handoff in `lib/fourthwall.ts` → `checkoutUrl()` (marked TODO): map local ids to FW variant ids, `POST /v1/carts`, redirect to the hosted checkout. Until then, checkout runs the in-site simulation and never touches payment data.

## Where things live

- `lib/data.ts` — catalog, copy, marquee lines, FAQs. All locked v4 copy.
- `lib/fourthwall.ts` — Storefront API adapter with graceful fallback.
- `components/CartContext.tsx` — cart state, localStorage persistence, totals.
- `app/globals.css` — the entire design system.
- `public/assets/` — hero billboard + goat canoe imagery.

## Still on the list

- Real product photography/mockups to replace the print-placeholder tiles.
- Meta Pixel + analytics before ad spend.
- Email capture → hook the form to your ESP (currently a friendly no-op).
- Policy pages (returns, shipping, privacy) — footer links are stubs.
