"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/** A cart line stores identity and quantity only. Price, name and image are
    re-read from the live Fourthwall catalog on render, so a cart left open
    while prices change never shows a stale figure. */
export type Line = { key: string; variantId: string; slug: string; qty: number };

/** What the live catalog knows about a variant, keyed by variantId. */
export type PriceBook = Record<
  string,
  { price: number; compareAt?: number; name: string; colour: string; size: string; image?: string }
>;

type Ctx = {
  cart: Line[];
  count: number;
  add: (line: Omit<Line, "key" | "qty">) => void;
  bump: (key: string, d: number) => void;
  clear: () => void;
};
const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("mgsc-cart") || "[]");
      setCart(Array.isArray(raw) ? raw.filter((l) => l && l.variantId) : []);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("mgsc-cart", JSON.stringify(cart));
  }, [cart, ready]);

  const add = (line: Omit<Line, "key" | "qty">) => {
    const key = line.variantId;
    setCart((c) => {
      const hit = c.find((l) => l.key === key);
      return hit
        ? c.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l))
        : [...c, { ...line, key, qty: 1 }];
    });
  };
  const bump = (key: string, d: number) =>
    setCart((c) => c.map((l) => (l.key === key ? { ...l, qty: l.qty + d } : l)).filter((l) => l.qty > 0));
  const clear = () => setCart([]);
  const count = cart.reduce((a, l) => a + l.qty, 0);

  return <CartCtx.Provider value={{ cart, count, add, bump, clear }}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
}

/** Price the cart against the live catalog.

    Deliberately returns a subtotal and nothing else. Shipping and sales tax
    both depend on the destination address, which is collected on Fourthwall's
    checkout, and their cart API exposes neither. Inventing them here means
    showing a total that changes on the next screen. */
export function priceCart(cart: Line[], book: PriceBook) {
  const lines = cart
    .map((l) => {
      const v = book[l.variantId];
      if (!v) return null; // variant pulled from the store since it was added
      return { ...l, ...v, total: +(v.price * l.qty).toFixed(2) };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);
  const subtotal = +lines.reduce((a, l) => a + l.total, 0).toFixed(2);
  const missing = cart.length - lines.length;
  return { lines, subtotal, missing };
}
