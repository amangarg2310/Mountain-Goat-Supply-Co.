import Link from "next/link";
import type { Product } from "@/lib/data";

export function ArtBox({ p, tag, big }: { p: Product; tag?: string; big?: boolean }) {
  return (
    <div
      className={`art${big ? " big" : ""}`}
      style={{ background: p.tone, backgroundImage: "repeating-linear-gradient(135deg,rgba(35,42,28,.06) 0 2px,transparent 2px 10px)" }}
    >
      <span className="ph">{p.art}</span>
      {tag ? <span className="ptag">{tag}</span> : null}
    </div>
  );
}

export function Price({ p, cmpClass }: { p: Product; cmpClass?: string }) {
  return (
    <span><span className={`cmp ${cmpClass || ""}`}>${p.cmp}</span>${p.price}</span>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.id}`} className="pcard">
      <ArtBox p={p} tag={p.tag} />
      <div style={{ display: "flex", flexDirection: "column", gap: 5, padding: "0 4px 4px" }}>
        <h3 className="pname">{p.name}</h3>
        <p className="pblurb">{p.blurb}</p>
        <div className="prow">
          <Price p={p} />
          <span className="pkind">{p.kind}</span>
        </div>
      </div>
    </Link>
  );
}
