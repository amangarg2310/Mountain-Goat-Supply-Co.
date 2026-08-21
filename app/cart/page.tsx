"use client";
import Link from "next/link";
import { useCart, cartMath, FREE_SHIP } from "@/components/CartContext";

export default function Cart() {
  const { cart, bump } = useCart();
  const { lines, subtotal, ship, tax, total } = cartMath(cart);
  const pct = Math.min(100, Math.round((subtotal / FREE_SHIP) * 100));

  if (!lines.length)
    return (
      <main style={{ padding: "46px var(--pad) 80px", maxWidth: 1080, margin: "0 auto" }}>
        <h1 className="h-page">Your pack</h1>
        <div className="empty">
          <p style={{ margin: "0 0 6px", font: "400 27px/1.2 var(--disp)" }}>Suspiciously light</p>
          <p style={{ margin: "0 0 22px", fontSize: 16, color: "rgba(51,64,42,.65)" }}>
            There is nothing in here.
          </p>
          <Link href="/shop" className="btn-rust" style={{ padding: "15px 26px", fontSize: 13 }}>Let's fix that</Link>
        </div>
      </main>
    );

  return (
    <main style={{ padding: "46px var(--pad) 80px", maxWidth: 1080, margin: "0 auto" }}>
      <h1 className="h-page">Your pack</h1>
      <div className="cartgrid">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {lines.map((l) => (
            <div className="lineitem" key={l.key}>
              <div className="linetone">
                {l.image ? <img src={l.image} alt={l.name} /> : null}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <h3 style={{ margin: 0, font: "400 19px/1.15 var(--disp)" }}>{l.name}</h3>
                <span style={{ font: "700 10px/1 var(--mono)", letterSpacing: ".14em", color: "rgba(51,64,42,.55)" }}>
                  {l.colour.toUpperCase()} · {l.size}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                  <button className="qtybtn" aria-label="Decrease quantity" onClick={() => bump(l.key, -1)}>−</button>
                  <span style={{ minWidth: 20, textAlign: "center", font: "700 13px/1 var(--mono)" }}>{l.qty}</span>
                  <button className="qtybtn" aria-label="Increase quantity" onClick={() => bump(l.key, 1)}>+</button>
                  <button className="removebtn" onClick={() => bump(l.key, -l.qty)}>Remove</button>
                </div>
              </div>
              <span style={{ font: "700 15px/1 var(--mono)" }}>${l.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <aside className="summary">
          <h2>Summary</h2>
          <div className="shipbar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progress toward free shipping">
            <i style={{ width: `${pct}%` }} />
          </div>
          <p className="note">
            {subtotal >= FREE_SHIP
              ? "Free shipping unlocked. You have peaked, financially."
              : `$${(FREE_SHIP - subtotal).toFixed(2)} more for free shipping. No pressure.`}
          </p>
          <div className="row"><span>Subtotal</span><span className="v">${subtotal.toFixed(2)}</span></div>
          <div className="row"><span>Shipping</span><span className="v">{ship === 0 ? "Free" : "$7.00"}</span></div>
          <div className="row"><span>Est. tax</span><span className="v">${tax}</span></div>
          <hr />
          <div className="totalrow"><span className="t">Total</span><span className="v">${total}</span></div>
          <Link href="/checkout" className="btn-butter" style={{ marginTop: 10 }}>Checkout</Link>
          <p className="note">Payment, taxes and fulfillment handled by Fourthwall&rsquo;s secure checkout.</p>
        </aside>
      </div>
    </main>
  );
}
