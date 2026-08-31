/* One call, every destination.

   Each commerce event goes to GA4 (gtag) and Meta (fbq) with the names each
   platform expects, so funnels line up across both without anyone remembering
   two vocabularies. Every helper no-ops when a destination is not loaded,
   which is also what makes them safe to call before consent tooling exists.

   The funnel these produce:
     view_item -> add_to_cart -> begin_checkout -> purchase (fired by
     Fourthwall's own pixel settings, since checkout happens on their domain).
   Abandonment at any stage is the drop between two adjacent counts. */

type Item = { id: string; name: string; price: number; qty?: number };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ga(event: string, params: Record<string, unknown>) {
  window.gtag?.("event", event, params);
}
function meta(event: string, params: Record<string, unknown>) {
  window.fbq?.("track", event, params);
}

const gaItems = (items: Item[]) =>
  items.map((i) => ({ item_id: i.id, item_name: i.name, price: i.price, quantity: i.qty ?? 1 }));

export function trackViewItem(item: Item) {
  ga("view_item", { currency: "USD", value: item.price, items: gaItems([item]) });
  meta("ViewContent", { content_ids: [item.id], content_name: item.name, content_type: "product", value: item.price, currency: "USD" });
}

export function trackAddToCart(item: Item) {
  ga("add_to_cart", { currency: "USD", value: item.price * (item.qty ?? 1), items: gaItems([item]) });
  meta("AddToCart", { content_ids: [item.id], content_name: item.name, content_type: "product", value: item.price * (item.qty ?? 1), currency: "USD" });
}

export function trackBeginCheckout(items: Item[], value: number) {
  ga("begin_checkout", { currency: "USD", value, items: gaItems(items) });
  meta("InitiateCheckout", {
    content_ids: items.map((i) => i.id),
    num_items: items.reduce((a, i) => a + (i.qty ?? 1), 0),
    value,
    currency: "USD",
  });
}
