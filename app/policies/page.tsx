import Link from "next/link";
import type { Metadata } from "next";
import { DOCS } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Policies — Mountain G.O.A.T Supply Co.",
  description: "Shipping, returns, privacy and terms. The boring pages, kept short.",
};

export default function Policies() {
  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 10px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>
        The boring pages
      </h1>
      <p style={{ margin: "0 0 38px", fontSize: 17, color: "rgba(51,64,42,.68)", maxWidth: "52ch" }}>
        Worth reading before you order rather than after. We kept them short so that is actually
        possible.
      </p>

      <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
        {DOCS.map((d) => (
          <Link
            key={d.slug}
            href={`/policies/${d.slug}`}
            style={{
              display: "block", padding: "22px 24px", borderRadius: 16,
              border: "1.5px solid rgba(51,64,42,.18)", background: "var(--card)",
              textDecoration: "none",
            }}
          >
            <span style={{ display: "block", font: "400 25px/1.2 var(--disp)", marginBottom: 4 }}>
              {d.title}
            </span>
            <span style={{ fontSize: 16, color: "rgba(51,64,42,.68)" }}>{d.blurb}</span>
          </Link>
        ))}
      </div>

      <p style={{ fontSize: 17, marginBottom: 24 }} className="bitp">
        Anything not covered here goes through the{" "}
        <Link href="/#contact">contact form</Link>. A real person answers, usually within a day,
        occasionally from a trailhead car park.
      </p>

      <Link href="/shop" className="btn-rust">Right, the shirts</Link>
    </main>
  );
}
