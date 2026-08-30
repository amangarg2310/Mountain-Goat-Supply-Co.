import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Order confirmed — Mountain G.O.A.T Supply Co." };

/* Legacy route. Checkout now hands off to Fourthwall, which runs its own
   confirmation page. Kept so any old bookmark still lands somewhere sane. */
export default async function Done({ searchParams }: { searchParams: Promise<{ o?: string }> }) {
  const { o } = await searchParams;
  return (
    <main style={{ padding: "90px var(--pad) 120px", maxWidth: 680, margin: "0 auto", textAlign: "center", animation: "mgsc-in 500ms cubic-bezier(.16,1,.3,1) both" }}>
      {o ? <span className="ordertag">Order {o}</span> : null}
      <h1 style={{ margin: "0 0 14px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>You did a thing</h1>
      <p style={{ margin: "0 0 30px", fontSize: 18, lineHeight: 1.6, color: "rgba(51,64,42,.74)" }}>
        Confirmation is on its way. Expect the parcel in eight to ten business days. Still quicker than we move on
        flat ground.
      </p>
      <Link href="/" className="btn-hollow" style={{ padding: "16px 28px", fontSize: 13 }}>Back to the trailhead</Link>
    </main>
  );
}
