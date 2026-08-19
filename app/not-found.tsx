import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "90px var(--pad) 120px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ margin: "0 0 14px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>You invented a detour</h1>
      <p style={{ margin: "0 0 30px", fontSize: 18, lineHeight: 1.6, color: "rgba(51,64,42,.74)" }}>
        This page does not exist, which technically makes it the quietest spot on the whole site. Enjoy it for a second,
        then head back.
      </p>
      <Link href="/" className="btn-rust">BACK TO THE TRAILHEAD</Link>
    </main>
  );
}
