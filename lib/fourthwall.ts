/* ============================================================
   Fourthwall Storefront API adapter — LIVE-WIRED.
   Shop: mountain-goat-supply-co-shop.fourthwall.com
   The storefront token is public by design (client-side safe).

   Behavior:
   - Products: pulls the live catalog and merges prices/variants onto
     the locked local catalog (copy and design stay authoritative here).
     Falls back to local data on any error or while products are drafts.
   - Checkout: creates a Fourthwall cart and redirects to the hosted,
     PCI-compliant checkout. Falls back to the in-site simulation when
     a product has no published Fourthwall counterpart yet.

   To finish per product: publish it in the Fourthwall dashboard, then
   set `fourthwallSlug` in lib/data.ts to the product's slug.
   ============================================================ */
import { PRODUCTS, type Product } from "./data";

const TOKEN = process.env.NEXT_PUBLIC_FW_STOREFRONT_TOKEN;
const CHECKOUT_DOMAIN = process.env.NEXT_PUBLIC_FW_CHECKOUT_DOMAIN || "mountain-goat-supply-co-shop.fourthwall.com";
const API = "https://storefront-api.fourthwall.com/v1";

export const fourthwallEnabled = Boolean(TOKEN);

type FWVariant = {
  id: string;
  name?: string;
  unitPrice?: { value: number; currency: string };
  attributes?: { description?: string; color?: { name?: string }; size?: { name?: string } };
};
type FWProduct = { id: string; name: string; slug: string; variants?: FWVariant[] };

let liveCache: { at: number; products: FWProduct[] } | null = null;

async function fetchLive(): Promise<FWProduct[]> {
  if (!fourthwallEnabled) return [];
  if (liveCache && Date.now() - liveCache.at < 5 * 60_000) return liveCache.products;
  try {
    const res = await fetch(`${API}/collections/all/products?storefront_token=${TOKEN}`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`FW ${res.status}`);
    const json = await res.json();
    liveCache = { at: Date.now(), products: json.results ?? [] };
    return liveCache.products;
  } catch {
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  const live = await fetchLive();
  if (!live.length) return PRODUCTS;
  return PRODUCTS.map((p) => {
    const match = live.find((r) => r.slug === p.fourthwallSlug);
    const unit = match?.variants?.[0]?.unitPrice?.value;
    return unit ? { ...p, price: Math.round(unit) } : p;
  });
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.id === id);
}

function pickVariant(fw: FWProduct, color: string, size: string): FWVariant | undefined {
  const vs = fw.variants ?? [];
  return (
    vs.find((v) => {
      const c = v.attributes?.color?.name?.toLowerCase();
      const s = v.attributes?.size?.name?.toLowerCase();
      return c === color.toLowerCase() && s === size.toLowerCase();
    }) ||
    vs.find((v) => (v.name || "").toLowerCase().includes(size.toLowerCase())) ||
    vs[0]
  );
}

/** Create a Fourthwall cart from local lines and return the hosted checkout URL.
    Returns null if nothing could be mapped (caller falls back to simulation). */
export async function checkoutUrl(lines: { id: string; qty: number; color: string; size: string }[]): Promise<string | null> {
  if (!fourthwallEnabled) return null;
  const live = await fetchLive();
  if (!live.length) return null;

  const items: { variantId: string; quantity: number }[] = [];
  for (const l of lines) {
    const local = PRODUCTS.find((p) => p.id === l.id);
    const fw = live.find((r) => r.slug === local?.fourthwallSlug);
    if (!fw) continue;
    const variant = pickVariant(fw, l.color, l.size);
    if (variant) items.push({ variantId: variant.id, quantity: l.qty });
  }
  if (!items.length) return null;

  try {
    const res = await fetch(`${API}/carts?storefront_token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    if (!res.ok) throw new Error(`FW cart ${res.status}`);
    const cart = await res.json();
    return `https://${CHECKOUT_DOMAIN}/checkout/?cartCurrency=USD&cartId=${cart.id}`;
  } catch {
    return null;
  }
}
