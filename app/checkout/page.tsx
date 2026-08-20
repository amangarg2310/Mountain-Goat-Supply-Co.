"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart, cartMath } from "@/components/CartContext";
import { checkoutUrl } from "@/lib/fourthwall";

export default function Checkout() {
  const { cart, count } = useCart();
  const { lines, subtotal, ship, tax, total } = cartMath(cart);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const go = async () => {
    setBusy(true);
    setErr(null);
    const url = await checkoutUrl(cart.map((l) => ({ variantId: l.variantId, qty: l.qty })));
    if (url) { window.location.href = url; return; }
    setBusy(false);
    setErr("We could not reach the checkout just now. Give it a moment and try again.");
  };

  if (!lines.length)
    return (
      <main style={{ padding: "46px var(--pad) 80px", maxWidth: 1080, margin: "0 auto" }}>
        <h1 className="h-page">Checkout</h1>
        <div className="empty">
          <p style={{ margin: "0 0 22px", fontSize: 16, color: "rgba(51,64,42,.65)" }}>
            Nothing to check out. Fastest transaction we have ever processed.
          </p>
          <Link href="/shop" className="btn-rust" style={{ padding: "15px 26px", fontSize: 13 }}>Go get something</Link>
        </div>
      </main>
    );

  return (
    <main style={{ padding: "46px var(--pad) 80px", maxWidth: 1080, margin: "0 auto" }}>
      <Link href="/cart" className="backlink" style={{ marginBottom: 18 }}>← Back to cart</Link>
      <h1 className="h-page">Checkout</h1>
      <div className="cartgrid">
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <fieldset>
            <legend>What happens next</legend>
            <div className="fwnote">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
                <rect x="3" y="10" width="18" height="11" rx="2.5" stroke="#33402A" strokeWidth="2" />
                <path d="M8 10V7a4 4 0 118 0v3" stroke="#33402A" strokeWidth="2" />
              </svg>
              <span>
                Shipping and card details happen on the next screen, handled by Fourthwall&rsquo;s secure checkout.
                We never see your card number. Best for everyone.
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(51,64,42,.72)" }}>
              Your cart carries over exactly as it is below. Final shipping and tax get calculated there, so treat the
              numbers on this page as a close estimate.
            </p>
          </fieldset>

          <div>
            <button className="addbtn" style={{ width: "100%" }} onClick={go} disabled={busy}>
              {busy ? "Opening checkout…" : <>Continue to secure checkout&nbsp;&nbsp;·&nbsp;&nbsp;${total}</>}
            </button>
            {err ? (
              <p role="alert" style={{ margin: "10px 0 0", textAlign: "center", fontSize: 13, color: "var(--rust)" }}>{err}</p>
            ) : (
              <p style={{ margin: "10px 0 0", textAlign: "center", fontSize: 12.5, color: "rgba(51,64,42,.55)" }}>
                Nothing is charged until Fourthwall says so.
              </p>
            )}
          </div>
        </div>

        <aside className="summary">
          <h2 style={{ fontSize: 22 }}>{count} in the pack</h2>
          {lines.map((l) => (
            <div key={l.key} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13.5, color: "rgba(254,247,238,.84)" }}>
              <span>
                {l.qty} × {l.name}
                <br />
                <span style={{ font: "700 9px/1.6 var(--mono)", letterSpacing: ".12em", color: "rgba(254,247,238,.55)" }}>
                  {l.colour.toUpperCase()} · {l.size}
                </span>
              </span>
              <span style={{ fontFamily: "var(--mono)" }}>${l.total.toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="row"><span>Subtotal</span><span className="v">${subtotal.toFixed(2)}</span></div>
          <div className="row"><span>Shipping</span><span className="v">{ship === 0 ? "Free" : "$7.00"}</span></div>
          <div className="row"><span>Est. tax</span><span className="v">${tax}</span></div>
          <hr />
          <div className="totalrow"><span className="t">Total</span><span className="v">${total}</span></div>
        </aside>
      </div>
    </main>
  );
}
