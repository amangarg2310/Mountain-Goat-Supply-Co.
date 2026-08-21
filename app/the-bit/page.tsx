import Link from "next/link";
import type { Metadata } from "next";
import { TENETS } from "@/lib/data";

export const metadata: Metadata = { title: "The Bit — Mountain G.O.A.T Supply Co." };

export default function TheBit() {
  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 22px", font: "400 clamp(38px,5vw,66px)/.98 var(--disp)" }}>We are not a performance brand</h1>
      <p className="bitp">
        Somewhere along the way, a walk in the woods got a leaderboard and a monthly subscription fee.
      </p>
      <p className="bitp">
        We opted out. Our pace is conversational, our distance is we&rsquo;ll see, and our mascot is a goat in sunglasses
        paddling a canoe he is not qualified to operate.
      </p>
      <div className="canoe" style={{ borderColor: "rgba(51,64,42,.25)", margin: "26px 0" }}>
        <img src="/assets/goat-canoe.jpg" alt="The mascot goat paddling a Mountain G.O.A.T Supply Co. canoe through whitewater in an I Invent Detours tee" loading="lazy" />
        <span className="cap">He is not qualified to operate this.</span>
      </div>
      <blockquote className="bitquote">Turning around still counts.</blockquote>
      <div className="tenets">
        {TENETS.map((t) => (
          <div className="tenet" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </div>
        ))}
      </div>
      <Link href="/shop" className="btn-rust" style={{ marginTop: 38 }}>Fine, show me the shirts</Link>
    </main>
  );
}
