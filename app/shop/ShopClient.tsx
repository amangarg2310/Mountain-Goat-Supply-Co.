"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/fourthwall";

const FILTERS = ["ALL", "TEE", "HOODIE"] as const;

export default function ShopClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const kinds = new Set(products.map((p) => p.kind));
  // Only worth filtering when there is more than one kind to filter between.
  // With a tees-only catalog the row is just "Everything / Tees", which is noise.
  const showFilters = kinds.size > 1;
  const tabs = FILTERS.filter((f) => f === "ALL" || kinds.has(f as Product["kind"]));
  const shown = products.filter((p) => filter === "ALL" || p.kind === filter);

  return (
    <main style={{ padding: "46px var(--pad) 80px" }}>
      <h1 className="h-display" style={{ marginBottom: 8 }}>Everything we bleat about</h1>
      <p style={{ margin: "0 0 26px", fontSize: 17, color: "rgba(51,64,42,.68)" }}>
        All tees. Several jokes. No performance fabrics.
      </p>

      {products.length === 0 ? (
        <div className="empty">
          <p style={{ margin: "0 0 6px", font: "400 27px/1.2 var(--disp)" }}>The shelves are empty</p>
          <p style={{ margin: 0, fontSize: 16, color: "rgba(51,64,42,.65)" }}>
            Which is either a supply chain problem or a lifestyle. Check back shortly.
          </p>
        </div>
      ) : (
        <>
          {showFilters ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, paddingBottom: 24, borderBottom: "1.5px solid rgba(51,64,42,.16)" }}>
              {tabs.map((f) => (
                <button key={f} className={`chip${filter === f ? " on" : ""}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f === "ALL" ? "Everything" : f.charAt(0) + f.slice(1).toLowerCase() + "s"}
                </button>
              ))}
            </div>
          ) : null}
          <div className="grid">{shown.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        </>
      )}
    </main>
  );
}
