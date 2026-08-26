"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/fourthwall";
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

export default function ProductClient({ p, related }: { p: Product; related: Product[] }) {
  const { add } = useCart();
  // Open on the colour that owns the product's first image, so the page
  // matches the thumbnail the shopper just clicked (cards render images[0]).
  const initialColour =
    p.colours.find((c) => c.images.includes(p.images[0]))?.name ??
    p.colours[0]?.name ?? "Default";
  const [colour, setColour] = useState(initialColour);
  const [size, setSize] = useState(p.sizes[2] ?? p.sizes[0] ?? "OS");
  const [shot, setShot] = useState(0);
  const [added, setAdded] = useState(false);

  const variant = p.variants.find((v) => v.colour === colour && v.size === size);
  const price = variant?.price ?? p.price;
  // Gallery follows the selected colour, so the swatch actually changes the shirt.
  const active = p.colours.find((c) => c.name === colour);
  const gallery = (active?.images?.length ? active.images : p.images).slice(0, 6);
  const hero = gallery[Math.min(shot, gallery.length - 1)] ?? gallery[0];

  const doAdd = () => {
    if (!variant) return;
    add({ variantId: variant.id, slug: p.slug });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <main style={{ padding: "30px var(--pad) 110px" }}>
      <Link href="/shop" className="backlink" style={{ marginBottom: 22 }}>← Back to shop</Link>
      <div className="pd">
        <div>
          <div className="art big">
            {hero ? <img src={hero} alt={p.name} /> : <span className="ph">{p.name}</span>}
          </div>
          {gallery.length > 1 ? (
            <div className="thumbrow">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={`thumb${i === shot ? " on" : ""}`}
                  aria-label={`View photo ${i + 1}`}
                  aria-pressed={i === shot}
                  onClick={() => setShot(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="pd-info">
          <div>
            <h1 className="h-pd">{p.name}</h1>
            <p className="pd-price">
              {p.compareAt ? <span className="cmp" style={{ fontSize: 16 }}>${p.compareAt}.00</span> : null}
              ${price}
            </p>
          </div>
          <p className="pd-desc">{p.desc}</p>

          {p.colours.length > 1 ? (
            <div>
              <span className="lbl" style={{ marginBottom: 10 }}>
                Colour&nbsp;&nbsp;·&nbsp;&nbsp;{colour.toUpperCase()}
              </span>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {p.colours.map((c) => (
                  <button
                    key={c.name}
                    className={`swatch${colour === c.name ? " on" : ""}`}
                    title={c.name}
                    aria-label={`Color ${c.name}`}
                    aria-pressed={colour === c.name}
                    style={{ background: c.swatch }}
                    onClick={() => { setColour(c.name); setShot(0); }}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
              <span className="lbl">Size</span>
              <Link href="/fit" className="backlink" style={{ fontSize: 10, color: "var(--rust)", textDecoration: "underline" }}>Size guide</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {p.sizes.map((z) => {
                const ok = p.variants.some((v) => v.colour === colour && v.size === z && v.inStock);
                return (
                  <button
                    key={z}
                    className={`sizebtn${size === z ? " on" : ""}`}
                    aria-pressed={size === z}
                    disabled={!ok}
                    title={ok ? undefined : "Out of stock"}
                    onClick={() => setSize(z)}
                  >
                    {z}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="addbtn" onClick={doAdd} disabled={!variant}>
            {added ? "In the pack ✓" : variant ? <>Add to cart&nbsp;&nbsp;·&nbsp;&nbsp;${price}</> : "Pick a combination"}
          </button>

          <div className="trust">
            <div><Star /><span>Comfort Colors garment-dyed cotton. Softens every wash</span></div>
            <div><Loop /><span>Thirty day returns. The bear clause applies.</span></div>
            <div><Box /><span>Printed when you order. Ships in 3 to 5 days</span></div>
          </div>

          <div className="guarantee">
            <span className="t">If something goes wrong</span>
            <p>Damaged, defective or just wrong. Full refund inside 30 days. A real person answers, usually the one who feeds the goat.</p>
          </div>

          {p.details.length ? (
            <div>
              {p.details.map((d) => (
                <details className="faq" key={d.title}>
                  <summary>{d.title}</summary>
                  <div className="a" dangerouslySetInnerHTML={{ __html: d.bodyHtml }} />
                </details>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {related.length ? (
        <section style={{ marginTop: 70, maxWidth: 900 }}>
          <h2 className="h-mid" style={{ marginBottom: 6 }}>The goat also recommends</h2>
          <p className="sub-muted" style={{ marginBottom: 24 }}>He has never been wrong. He has also never been asked.</p>
          <div className="xsell">{related.map((x) => <ProductCard key={x.id} p={x} />)}</div>
        </section>
      ) : null}

      <div className="sticky-atc">
        <div>
          <div className="n">{p.name}</div>
          <div className="p">${price}</div>
        </div>
        <button className="addbtn" style={{ padding: "14px 22px", fontSize: 12.5 }} onClick={doAdd} disabled={!variant}>
          {added ? "In the pack ✓" : "Add to cart"}
        </button>
      </div>
    </main>
  );
}
