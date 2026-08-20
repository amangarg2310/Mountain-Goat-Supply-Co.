import Link from "next/link";
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

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="pcard">
      <ArtBox p={p} />
      <div style={{ display: "flex", flexDirection: "column", gap: 5, padding: "0 4px 4px" }}>
        <h3 className="pname">{p.name}</h3>
        <p className="pblurb">{p.blurb}</p>
        <div className="prow">
          <span>
            {p.compareAt ? <span className="cmp">${p.compareAt}</span> : null}${p.price}
          </span>
          <span className="pkind">{p.kind}</span>
        </div>
      </div>
    </Link>
  );
}
