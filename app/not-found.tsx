import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "90px var(--pad) 120px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ margin: "0 0 14px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>You invented a detour</h1>
      <p style={{ margin: "0 0 30px", fontSize: 18, lineHeight: 1.6, color: "rgba(51,64,42,.74)" }}>
        This page doesn't exist. Quietest spot on the site, though. Head back whenever you're ready.
      </p>
      <Link href="/" className="btn-rust">Back to the trailhead</Link>
    </main>
  );
}
