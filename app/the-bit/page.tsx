import Link from "next/link";
import type { Metadata } from "next";
import { TENETS } from "@/lib/data";

export const metadata: Metadata = { title: "The Bit — Mountain G.O.A.T Supply Co." };

export default function TheBit() {
  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 22px", font: "400 clamp(38px,5vw,66px)/.98 var(--disp)" }}>Anti-hustle outdoor apparel</h1>
      <p className="bitp">
        Mountain G.O.A.T Supply Co. exists because somewhere along the way a walk in the woods turned into a benchmark,
        the benchmark got a leaderboard, and the leaderboard got a monthly subscription fee.
      </p>
      <p className="bitp">
        We opted out. Our official pace is conversational. Our official distance is we&rsquo;ll see. Our mascot is a goat in
        sunglasses paddling a canoe he does not appear qualified to operate, which we feel communicates the mission clearly.
      </p>
      <div className="canoe" style={{ borderColor: "rgba(51,64,42,.25)", margin: "26px 0" }}>
        <img src="/assets/goat-canoe.jpg" alt="The mascot goat paddling a Mountain G.O.A.T Supply Co. canoe through whitewater in an I Invent Detours tee" loading="lazy" />
        <span className="cap">EXHIBIT A. THE MISSION, COMMUNICATED CLEARLY.</span>
      </div>
      <blockquote className="bitquote">Elevation. Snacks. Repeat.</blockquote>
      <div className="tenets">
        {TENETS.map((t) => (
          <div className="tenet" key={t.no}>
            <span className="no">{t.no}</span>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </div>
        ))}
      </div>
      <Link href="/shop" className="btn-rust" style={{ marginTop: 38 }}>FINE, SHOW ME THE SHIRTS</Link>
    </main>
  );
}
