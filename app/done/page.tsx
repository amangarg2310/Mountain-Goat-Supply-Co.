import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Order confirmed — Mountain G.O.A.T Supply Co." };

export default async function Done({ searchParams }: { searchParams: Promise<{ o?: string }> }) {
  const { o } = await searchParams;
  return (
    <main style={{ padding: "90px var(--pad) 120px", maxWidth: 680, margin: "0 auto", textAlign: "center", animation: "mgsc-in 500ms cubic-bezier(.16,1,.3,1) both" }}>
      <span style={{ display: "inline-block", padding: "7px 14px", borderRadius: 999, background: "var(--forest)", color: "var(--cream)", font: "700 10px/1 var(--mono)", letterSpacing: ".2em", marginBottom: 22 }}>
        ORDER {o || "MG-0000"}
      </span>
      <h1 style={{ margin: "0 0 14px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>You did a thing</h1>
      <p style={{ margin: "0 0 30px", fontSize: 18, lineHeight: 1.6, color: "rgba(51,64,42,.74)" }}>
        Confirmation is on its way. Your order leaves the building in three to five days, which is still a faster pace
        than we maintain on flat ground.
      </p>
      <Link href="/" className="btn-hollow" style={{ padding: "16px 28px", fontSize: 13 }}>BACK TO THE TRAILHEAD</Link>
    </main>
  );
}
