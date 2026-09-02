import type { Metadata } from "next";
import { SIZETABLE, FAQS } from "@/lib/data";

export const metadata: Metadata = { title: "Fit & FAQ — Mountain G.O.A.T Supply Co." };

export default function Fit() {
  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 860, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 10px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>Fit &amp; FAQ</h1>
      <p style={{ margin: "0 0 34px", fontSize: 17, color: "rgba(51,64,42,.68)" }}>
        Inches, laid flat. Relaxed fit, so size down for something closer to the frame.
      </p>
      <div className="tablewrap">
        <table>
          <thead>
            <tr><th>SIZE</th><th className="r">CHEST</th><th className="r">LENGTH</th><th className="r">SLEEVE</th></tr>
          </thead>
          <tbody>
            {SIZETABLE.map((r) => (
              <tr key={r[0]}><td>{r[0]}</td><td className="r">{r[1]}</td><td className="r">{r[2]}</td><td className="r">{r[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={{ margin: "0 0 18px", font: "400 clamp(28px,3.2vw,40px)/1 var(--disp)" }}>Questions we get</h2>
      {FAQS.map((f, i) => (
        <details className="faq" key={i} open={i === 0}>
          <summary>{f.q}</summary>
          <p className="a">{f.a}</p>
        </details>
      ))}
    </main>
  );
}
