"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data";

const FILTERS = ["ALL", "TEE", "HOODIE"] as const;

export default function Shop() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const shown = PRODUCTS.filter((p) => filter === "ALL" || p.kind === filter);
  return (
    <main style={{ padding: "46px var(--pad) 80px" }}>
      <h1 className="h-display" style={{ marginBottom: 8 }}>Everything we make</h1>
      <p style={{ margin: "0 0 26px", fontSize: 17, color: "rgba(51,64,42,.68)" }}>
        Tees and hoodies. Several jokes. No performance fabrics.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32, paddingBottom: 24, borderBottom: "1.5px solid rgba(51,64,42,.16)" }}>
        {FILTERS.map((f) => (
          <button key={f} className={`chip${filter === f ? " on" : ""}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === "ALL" ? "EVERYTHING" : f + "S"}
          </button>
        ))}
      </div>
      <div className="grid">{shown.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </main>
  );
}
