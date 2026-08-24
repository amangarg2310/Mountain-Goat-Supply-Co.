"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/fourthwall";

export function ArtBox({ p, big }: { p: Product; big?: boolean }) {
  const src = p.images[0];
  return (
    <div className={`art${big ? " big" : ""}`}>
      {src ? (
        <img src={src} alt={p.name} loading={big ? "eager" : "lazy"} />
      ) : (
        <span className="ph">{p.name}</span>
      )}
      {p.tag ? <span className="ptag">{p.tag}</span> : null}
    </div>
  );
}

/* One image element whose src swaps, rather than every colourway stacked and
   cross-faded. A 13-card grid at 7 colours each would be ~90 image requests
   on first paint; this keeps it at 13 and only fetches the rest of a card's
   colours once someone shows interest in that card. */
export default function ProductCard({ p }: { p: Product }) {
  const shots = p.colours.length
    ? p.colours.map((c) => ({ name: c.name, swatch: c.swatch, src: c.images[0] ?? p.images[0] }))
    : [{ name: "", swatch: "", src: p.images[0] }];

  const [i, setI] = useState(0);
  const [warmed, setWarmed] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pull the remaining colourways into cache the first time a card is engaged.
  function warm() {
    if (warmed) return;
    setWarmed(true);
    shots.forEach((s) => { if (s.src) { const im = new Image(); im.src = s.src; } });
  }

  function startCycle() {
    warm();
    if (shots.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (timer.current) return;
    timer.current = setInterval(() => setI((n) => (n + 1) % shots.length), 950);
  }

  function stopCycle() {
    if (timer.current) { clearInterval(timer.current); timer.current = null; }
    setI(0);
  }

  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);

  const active = shots[Math.min(i, shots.length - 1)];

  return (
    <div
      className="pcard"
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
      onFocus={warm}
    >
      <Link href={`/product/${p.slug}`} className="pcard-hit" aria-label={p.name}>
        <div className="art">
          {active?.src ? (
            <img
              key={active.src}
              src={active.src}
              alt={`${p.name}${active.name ? ` in ${active.name}` : ""}`}
              loading="lazy"
              className="art-fade"
            />
          ) : (
            <span className="ph">{p.name}</span>
          )}
          {p.tag ? <span className="ptag">{p.tag}</span> : null}
        </div>
      </Link>

      <div style={{ display: "flex", flexDirection: "column", gap: 5, padding: "0 4px 4px" }}>
        <Link href={`/product/${p.slug}`} className="pcard-text">
          <h3 className="pname">{p.name}</h3>
          <p className="pblurb">{p.blurb}</p>
        </Link>

        {shots.length > 1 ? (
          <div className="cdots" role="group" aria-label={`${shots.length} colours`}>
            {shots.map((s, n) => (
              <button
                key={s.name || n}
                type="button"
                className={`cdot${n === i ? " on" : ""}`}
                style={{ background: s.swatch }}
                aria-label={s.name}
                aria-pressed={n === i}
                onClick={(e) => { e.preventDefault(); warm(); stopCycleTo(n); }}
                onMouseEnter={() => { warm(); setI(n); }}
              />
            ))}
          </div>
        ) : null}

        <div className="prow">
          <span>
            {p.compareAt ? <span className="cmp">${p.compareAt}</span> : null}${p.price}
          </span>
          <span className="pkind">{p.kind}</span>
        </div>
      </div>
    </div>
  );

  function stopCycleTo(n: number) {
    if (timer.current) { clearInterval(timer.current); timer.current = null; }
    setI(n);
  }
}
