"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/** A cart line is a self-contained snapshot taken at add-to-cart time,
    so cart and checkout never need the catalog in memory. */
export type Line = {
  key: string;
  variantId: string;
  slug: string;
  name: string;
  colour: string;
  size: string;
  price: number;
  image?: string;
  qty: number;
};

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
      // Drop any legacy lines from the pre-Fourthwall schema.
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
    setCart((c) =>
      c.map((l) => (l.key === key ? { ...l, qty: l.qty + d } : l)).filter((l) => l.qty > 0)
    );
  const clear = () => setCart([]);
  const count = cart.reduce((a, l) => a + l.qty, 0);

  return (
    <CartCtx.Provider value={{ cart, count, add, bump, clear }}>{children}</CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
}

/** Keep in step with the Fourthwall shipping rule, or the site promises
    something the hosted checkout will not honour. */
export const FREE_SHIP = 50;

export function cartMath(cart: Line[]) {
  const lines = cart.map((l) => ({ ...l, total: +(l.price * l.qty).toFixed(2) }));
  const subtotal = +lines.reduce((a, l) => a + l.total, 0).toFixed(2);
  const ship = subtotal >= FREE_SHIP || subtotal === 0 ? 0 : 7;
  const tax = +(subtotal * 0.081).toFixed(2);
  const total = (subtotal + ship + tax).toFixed(2);
  return { lines, subtotal, ship, tax: tax.toFixed(2), total };
}
