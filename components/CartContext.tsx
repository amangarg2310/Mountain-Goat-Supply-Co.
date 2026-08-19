"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { PRODUCTS } from "@/lib/data";

export type Line = { key: string; id: string; qty: number };
type Ctx = {
  cart: Line[]; count: number;
  add: (id: string, color: string, size: string) => void;
  bump: (key: string, d: number) => void;
  clear: () => void;
};
const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setCart(JSON.parse(localStorage.getItem("mgsc-cart") || "[]")); } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem("mgsc-cart", JSON.stringify(cart)); }, [cart, ready]);

  const add = (id: string, color: string, size: string) => {
    const key = `${id}|${color}|${size}`;
    setCart((c) => {
      const hit = c.find((l) => l.key === key);
      return hit ? c.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l)) : [...c, { key, id, qty: 1 }];
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
export function cartLines(cart: Line[]) {
  return cart.map((l) => {
    const p = PRODUCTS.find((x) => x.id === l.id)!;
    const [, color, size] = l.key.split("|");
    return { ...l, name: p.name, tone: p.tone, variant: `${color} · ${size}`, total: p.price * l.qty };
  });
}
export function cartMath(cart: Line[]) {
  const lines = cartLines(cart);
  const subtotal = lines.reduce((a, l) => a + l.total, 0);
  const ship = subtotal >= 75 || subtotal === 0 ? 0 : 7;
  const tax = +(subtotal * 0.081).toFixed(2);
  const total = (subtotal + ship + tax).toFixed(2);
  return { lines, subtotal, ship, tax: tax.toFixed(2), total };
}
