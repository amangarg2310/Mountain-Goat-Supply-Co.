"use client";
import { useState } from "react";
import Link from "next/link";
import { COLORS, SIZES, XSELL, PRODUCTS, type Product } from "@/lib/data";
import { useCart } from "@/components/CartContext";
import ProductCard, { ArtBox } from "@/components/ProductCard";

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#E0B54F" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>
);
const Loop = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33402A" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 12a9 9 0 019-9 9 9 0 018 4.7M21 12a9 9 0 01-9 9 9 9 0 01-8-4.7"/><path d="M21 3v5h-5M3 21v-5h5"/></svg>
);
const Box = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33402A" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
);

export default function ProductClient({ p }: { p: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState("Bone");
  const [size, setSize] = useState("L");
  const [added, setAdded] = useState(false);
  const xs = (XSELL[p.id] || []).map((id) => PRODUCTS.find((x) => x.id === id)!).filter(Boolean);

  const doAdd = () => {
    add(p.id, color, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main style={{ padding: "30px var(--pad) 110px" }}>
      <Link href="/shop" className="backlink" style={{ marginBottom: 22 }}>← BACK TO SHOP</Link>
      <div className="pd">
        <div>
          <ArtBox p={p} big />
          <div className="thumbrow">
            <div className="thumb">BACK<br />PRINT</div>
            <div className="thumb">FABRIC<br />DETAIL</div>
            {p.id === "paddle" ? (
              <div className="thumb"><img src="/assets/goat-canoe.jpg" alt="The goat wearing this brand on an actual river, mid rapids" /></div>
            ) : (
              <div className="thumb">ON<br />TRAIL</div>
            )}
          </div>
        </div>
        <div className="pd-info">
          <div>
            <h1 className="h-pd">{p.name}</h1>
            <p className="pd-price"><span className="cmp" style={{ fontSize: 16 }}>${p.cmp}.00</span>${p.price}.00</p>
            <span className="salebadge">MARKED DOWN. DON&rsquo;T ASK.</span>
          </div>
          <p className="pd-desc">{p.desc}</p>
          <div>
            <span className="lbl" style={{ marginBottom: 10 }}>COLOR&nbsp;&nbsp;·&nbsp;&nbsp;{color.toUpperCase()}</span>
            <div style={{ display: "flex", gap: 10 }}>
              {COLORS.map((c) => (
                <button key={c.name} className={`swatch${color === c.name ? " on" : ""}`} title={c.name}
                  aria-label={`Color ${c.name}`} aria-pressed={color === c.name}
                  style={{ background: c.hex }} onClick={() => setColor(c.name)} />
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
              <span className="lbl">SIZE</span>
              <Link href="/fit" className="backlink" style={{ fontSize: 10, color: "var(--rust)", textDecoration: "underline" }}>SIZE GUIDE</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SIZES.map((z) => (
                <button key={z} className={`sizebtn${size === z ? " on" : ""}`} aria-pressed={size === z} onClick={() => setSize(z)}>{z}</button>
              ))}
            </div>
          </div>
          <button className="addbtn" onClick={doAdd}>
            {added ? "IN THE PACK ✓" : <>ADD TO CART&nbsp;&nbsp;·&nbsp;&nbsp;${p.price}.00</>}
          </button>
          <div className="trust">
            <div><Star /><span>4.9 from verified sitters, trail adjacents, and one skeptical spouse</span></div>
            <div><Loop /><span>Thirty day returns. The bear clause applies.</span></div>
            <div><Box /><span>Ships in 3 to 5 days, which for us is sprinting</span></div>
          </div>
          <div className="guarantee">
            <span className="t">THE SOMETHING WENT WRONG POLICY</span>
            <p>Damaged, defective, or just wrong. Full refund inside 30 days. An actual human replies, usually the one who feeds the goat.</p>
          </div>
          <div className="specs">
            {[
              ["FABRIC", p.kind === "HOODIE" ? "10 oz cotton fleece" : "6.5 oz ringspun cotton"],
              ["PRINT", "Water-based screen print, two colors"],
              ["FIT", "Relaxed. Sized for sitting."],
              ["CARE", "Cold wash. Hang dry. Ignore."],
              ["SHIPS", "3–5 business days"],
            ].map(([k, v]) => (
              <div key={k}><span className="k">{k}</span><span style={{ textAlign: "right" }}>{v}</span></div>
            ))}
          </div>
        </div>
      </div>
      <section style={{ marginTop: 70, maxWidth: 900 }}>
        <h2 className="h-mid" style={{ marginBottom: 6 }}>The goat also recommends</h2>
        <p className="sub-muted" style={{ marginBottom: 24 }}>He has never been wrong. He has also never been asked.</p>
        <div className="xsell">{xs.map((x) => <ProductCard key={x.id} p={x} />)}</div>
      </section>
      <div className="sticky-atc">
        <div>
          <div className="n">{p.name}</div>
          <div className="p"><span className="cmp">${p.cmp}</span> ${p.price}.00</div>
        </div>
        <button className="addbtn" style={{ padding: "14px 22px", fontSize: 12.5 }} onClick={doAdd}>
          {added ? "IN THE PACK ✓" : "ADD TO CART"}
        </button>
      </div>
    </main>
  );
}
