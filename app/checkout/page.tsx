"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, cartMath } from "@/components/CartContext";
import { checkoutUrl } from "@/lib/fourthwall";

export default function Checkout() {
  const { cart, count, clear } = useCart();
  const { lines, total } = cartMath(cart);
  const router = useRouter();

  const placeOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = await checkoutUrl(cart.map((l) => {
      const [, color, size] = l.key.split("|");
      return { id: l.id, qty: l.qty, color, size };
    }));
    if (url) { window.location.href = url; return; } // Fourthwall hosted checkout
    clear();
    const orderNo = "MG-" + Math.floor(2000 + Math.random() * 7999);
    router.push(`/done?o=${orderNo}`);
  };

  return (
    <main style={{ padding: "46px var(--pad) 80px", maxWidth: 1080, margin: "0 auto" }}>
      <Link href="/cart" className="backlink" style={{ marginBottom: 18 }}>← BACK TO CART</Link>
      <h1 className="h-page">Checkout</h1>
      <div className="cartgrid">
        <form onSubmit={placeOrder} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <fieldset>
            <legend>CONTACT</legend>
            <input type="email" required placeholder="you@email.com" aria-label="Email" />
            <label className="checklabel">
              <input type="checkbox" defaultChecked /> Email me when we think of more jokes
            </label>
          </fieldset>
          <fieldset className="two">
            <legend>SHIP TO</legend>
            <input required placeholder="First name" aria-label="First name" />
            <input required placeholder="Last name" aria-label="Last name" />
            <input required placeholder="Street address" aria-label="Street address" style={{ gridColumn: "span 2" }} />
            <input required placeholder="City" aria-label="City" />
            <input required placeholder="ZIP" aria-label="ZIP" />
          </fieldset>
          <fieldset>
            <legend>PAYMENT</legend>
            <div className="fwnote">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
                <rect x="3" y="10" width="18" height="11" rx="2.5" stroke="#33402A" strokeWidth="2" />
                <path d="M8 10V7a4 4 0 118 0v3" stroke="#33402A" strokeWidth="2" />
              </svg>
              <span>Card details happen on the next screen, handled by Fourthwall&rsquo;s secure checkout. We never see your number, which is honestly best for everyone.</span>
            </div>
          </fieldset>
          <div>
            <button type="submit" className="addbtn" style={{ width: "100%" }}>PLACE ORDER&nbsp;&nbsp;·&nbsp;&nbsp;${total}</button>
            <p style={{ margin: "10px 0 0", textAlign: "center", fontSize: 12.5, color: "rgba(51,64,42,.55)" }}>
              Nothing is charged until Fourthwall says so.
            </p>
          </div>
        </form>
        <aside className="summary">
          <h2 style={{ fontSize: 22 }}>{count} in the pack</h2>
          {lines.map((l) => (
            <div key={l.key} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13.5, color: "rgba(254,247,238,.84)" }}>
              <span>
                {l.qty} × {l.name}
                <br />
                <span style={{ font: "700 9px/1.6 var(--mono)", letterSpacing: ".12em", color: "rgba(254,247,238,.55)" }}>{l.variant.toUpperCase()}</span>
              </span>
              <span style={{ fontFamily: "var(--mono)" }}>${l.total}.00</span>
            </div>
          ))}
          <hr />
          <div className="totalrow"><span className="t">Total</span><span className="v">${total}</span></div>
        </aside>
      </div>
    </main>
  );
}
