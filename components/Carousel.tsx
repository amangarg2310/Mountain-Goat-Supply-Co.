"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/fourthwall";

/* Horizontal product rail.

   Every design is in here, so nothing is hidden behind a slice of four, and
   the shopper decides what they see rather than a random draw deciding for
   them. Randomising per page load was the other option and it is worse: the
   page can no longer be cached, a shopper who saw a shirt yesterday cannot
   find it again, and analytics stop being comparable between sessions.

   Native scrolling with snap points does the work. The arrows just nudge that
   scroll, so touch swipe, trackpad, keyboard and screen readers all behave
   normally and there is no custom transform to fight with. */
export default function Carousel({ products }: { products: Product[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function measure() {
    const el = rail.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }

  useEffect(() => {
    measure();
    const el = rail.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function nudge(dir: -1 | 1) {
    const el = rail.current;
    if (!el) return;
    // Move by whole cards so a card never ends up half cut off.
    const card = el.querySelector<HTMLElement>(".pcard");
    const step = card ? card.offsetWidth + 26 : el.clientWidth * 0.8;
    const page = Math.max(1, Math.floor(el.clientWidth / step));
    el.scrollBy({ left: dir * step * page, behavior: "smooth" });
  }

  return (
    <div className="rail-wrap">
      <button
        type="button"
        className="rail-arrow left"
        aria-label="Previous designs"
        disabled={atStart}
        onClick={() => nudge(-1)}
      >
        ‹
      </button>

      <div className="rail" ref={rail} onScroll={measure} tabIndex={0} aria-label="Product designs">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      <button
        type="button"
        className="rail-arrow right"
        aria-label="More designs"
        disabled={atEnd}
        onClick={() => nudge(1)}
      >
        ›
      </button>
    </div>
  );
}
