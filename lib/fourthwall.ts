/* ============================================================
   Fourthwall Storefront API adapter — LIVE CATALOG.

   Shop: mountain-goat-supply-co-shop.fourthwall.com
   The storefront token is public by design (client-safe).

   Products, photography, colours, sizes and prices all come
   from Fourthwall. lib/copy.ts layers the brand voice on top.
   ============================================================ */
import { copyFor, XSELL } from "./copy";

const TOKEN = process.env.NEXT_PUBLIC_FW_STOREFRONT_TOKEN;
const CHECKOUT_DOMAIN =
  process.env.NEXT_PUBLIC_FW_CHECKOUT_DOMAIN ||
  "mountain-goat-supply-co-shop.fourthwall.com";
const API = "https://storefront-api.fourthwall.com/v1";

export const fourthwallEnabled = Boolean(TOKEN);

/* ---------- raw API shapes ---------- */
type RawImage = { id: string; url: string; width?: number; height?: number };
type RawVariant = {
  id: string;
  name?: string;
  sku?: string;
  unitPrice?: { value: number; currency: string };
  compareAtPrice?: { value: number } | null;
  attributes?: {
    description?: string;
    color?: { name?: string; swatch?: string };
    size?: { name?: string };
  };
  stock?: { type?: string; inStock?: number };
  images?: RawImage[];
};
type RawProduct = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  images?: RawImage[];
  variants?: RawVariant[];
  additionalInformation?: { type?: string; title?: string; bodyHtml?: string }[];
};

/* ---------- app-facing shapes ---------- */
export type Colour = { name: string; swatch: string; image?: string; images: string[] };
export type Variant = {
  id: string;
  sku?: string;
  price: number;
  compareAt?: number;
  colour: string;
  size: string;
  inStock: boolean;
  image?: string;
};
export type Product = {
  id: string;
  slug: string;
  name: string;
  kind: "TEE" | "HOODIE";
  tag?: string;
  blurb: string;
  desc: string;
  price: number;
  compareAt?: number;
  images: string[];
  colours: Colour[];
  sizes: string[];
  variants: Variant[];
  details: { title: string; bodyHtml: string }[];
};

let cache: { at: number; products: Product[] } | null = null;
const TTL = 5 * 60_000;


/* Fourthwall descriptions arrive as HTML ("<p>...</p>"). We keep Fourthwall as
   the source of truth so edits there flow through, but render as plain text:
   paragraphs become blank-line breaks, entities are decoded, tags dropped. */
function stripHtml(html: string): string {
  return html
    .replace(/<\/(p|div|li|h[1-6])>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function guessKind(name: string): "TEE" | "HOODIE" {
  return /hood|crew|sweat/i.test(name) ? "HOODIE" : "TEE";
}

function normalise(raw: RawProduct): Product {
  const c = copyFor(raw.slug);
  const variants: Variant[] = (raw.variants ?? []).map((v) => ({
    id: v.id,
    sku: v.sku,
    price: v.unitPrice?.value ?? 0,
    compareAt: v.compareAtPrice?.value ?? undefined,
    colour: v.attributes?.color?.name ?? "Default",
    size: v.attributes?.size?.name ?? "OS",
    inStock: v.stock?.type === "UNLIMITED" || (v.stock?.inStock ?? 0) > 0,
    image: v.images?.[0]?.url,
  }));

  // Distinct colours in Fourthwall's order. Each carries its own photo set so
  // picking a swatch actually swaps the shirt you are looking at.
  const colours: Colour[] = [];
  for (const v of raw.variants ?? []) {
    const nm = v.attributes?.color?.name;
    if (!nm) continue;
    const existing = colours.find((x) => x.name === nm);
    const urls = (v.images ?? []).map((i) => i.url);
    if (existing) {
      for (const u of urls) if (!existing.images.includes(u)) existing.images.push(u);
      continue;
    }
    colours.push({
      name: nm,
      swatch: v.attributes?.color?.swatch || "#cccccc",
      image: urls[0],
      images: urls,
    });
  }

  const sizes: string[] = [];
  for (const v of variants) if (!sizes.includes(v.size)) sizes.push(v.size);

  const prices = variants.map((v) => v.price).filter((p) => p > 0);

  return {
    id: raw.id,
    slug: raw.slug,
    name: c.name ?? raw.name,
    kind: c.kind ?? guessKind(raw.name),
    tag: c.tag,
    blurb: c.blurb,
    desc: raw.description?.trim() ? stripHtml(raw.description) : c.desc,
    price: prices.length ? Math.min(...prices) : 0,
    compareAt: variants.find((v) => v.compareAt)?.compareAt,
    images: (raw.images ?? []).map((i) => i.url),
    colours,
    sizes,
    variants,
    details: (raw.additionalInformation ?? [])
      .filter((a) => a.title && a.bodyHtml)
      .map((a) => ({ title: a.title!, bodyHtml: a.bodyHtml! })),
  };
}

export async function getProducts(force = false): Promise<Product[]> {
  if (!fourthwallEnabled) return [];
  if (!force && cache && Date.now() - cache.at < TTL) return cache.products;
  try {
    // Fourthwall pages this endpoint and defaults to 10 per page. Without an
    // explicit size and a page loop, the catalog silently truncates the moment
    // there are more than ten products. Ask for a large page, then follow
    // hasNextPage in case the ceiling is lower than we asked for.
    const all: RawProduct[] = [];
    let page = 0;
    for (;;) {
      const url =
        `${API}/collections/all/products?storefront_token=${TOKEN}` +
        `&size=100&page=${page}`;
      const res = await fetch(
        url,
        // NOTE: the build logs "items over 2MB can not be cached" here. Expected:
        // the payload is photo metadata and skips Next's fetch cache. Page-level
        // ISR still caches the render. Do NOT switch to no-store, that opts /
        // and /shop out of static generation.
        force ? { cache: "no-store" } : { next: { revalidate: 300 } }
      );
      if (!res.ok) throw new Error(`FW ${res.status}`);
      const json = await res.json();
      all.push(...(json.results ?? []));
      if (!json.paging?.hasNextPage || page > 20) break;
      page += 1;
    }
    const products = all.map(normalise);
    cache = { at: Date.now(), products };
    return products;
  } catch {
    return cache?.products ?? [];
  }
}

/** Look up one product. Fourthwall serves slugs from a distributed cache, so a
    freshly renamed product can briefly resolve on some nodes and not others.
    If the first lookup misses, retry once with the cache bypassed before the
    caller gives up and 404s a product that genuinely exists. */
export async function getProduct(slug: string): Promise<Product | undefined> {
  const hit = (await getProducts()).find((p) => p.slug === slug);
  if (hit) return hit;
  return (await getProducts(true)).find((p) => p.slug === slug);
}

export async function getRelated(slug: string): Promise<Product[]> {
  const all = await getProducts();
  const want = XSELL[slug] ?? [];
  const picked = want
    .map((s) => all.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));
  if (picked.length >= 2) return picked.slice(0, 2);
  const filler = all.filter((p) => p.slug !== slug && !picked.includes(p));
  return [...picked, ...filler].slice(0, 2);
}

/** Create a Fourthwall cart and return the hosted checkout URL. */
export async function checkoutUrl(
  lines: { variantId: string; qty: number }[]
): Promise<string | null> {
  if (!fourthwallEnabled || !lines.length) return null;
  try {
    const res = await fetch(`${API}/carts?storefront_token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: lines.map((l) => ({ variantId: l.variantId, quantity: l.qty })),
      }),
    });
    if (!res.ok) throw new Error(`FW cart ${res.status}`);
    const cart = await res.json();
    return `https://${CHECKOUT_DOMAIN}/checkout/?cartCurrency=USD&cartId=${cart.id}`;
  } catch {
    return null;
  }
}

/** variantId -> live pricing and labels, for re-pricing a stored cart.
    The cart keeps identity only; every figure shown comes from here. */
export async function getPriceBook(): Promise<
  Record<string, { price: number; compareAt?: number; name: string; colour: string; size: string; image?: string }>
> {
  const products = await getProducts();
  const book: Record<string, { price: number; compareAt?: number; name: string; colour: string; size: string; image?: string }> = {};
  for (const p of products) {
    for (const v of p.variants) {
      book[v.id] = {
        price: v.price,
        compareAt: v.compareAt,
        name: p.name,
        colour: v.colour,
        size: v.size,
        image: v.image ?? p.colours.find((c) => c.name === v.colour)?.images?.[0] ?? p.images[0],
      };
    }
  }
  return book;
}
