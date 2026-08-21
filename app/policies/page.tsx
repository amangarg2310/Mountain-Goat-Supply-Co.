import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & returns — Mountain G.O.A.T Supply Co.",
  description: "How long orders take, what shipping costs, and how to send something back.",
};

const SECTIONS = [
  {
    h: "Shipping",
    ps: [
      "Everything is printed when you order it, so nothing sits in a warehouse waiting. Production takes three to five business days, then transit on top of that.",
      "Shipping is free on orders over $50. Under that it's a flat $7 within the US. International goes to most countries and the exact cost is calculated at checkout.",
      "You'll get a tracking number by email as soon as the order leaves the printer. If it hasn't shown up after a week, that email is the first thing to check, and then us.",
    ],
  },
  {
    h: "Returns and exchanges",
    ps: [
      "Thirty days from delivery, unworn and unwashed, no questions asked. Email us and we'll send a return label.",
      "If it arrives damaged, misprinted or just isn't what the page said it was, that's on us. Send a photo and we'll replace it or refund you. You don't need to ship the faulty one back.",
      "Sizing exchanges are free once per order. The fit runs relaxed, so if you're between sizes the guide on the Fit page is worth two minutes.",
    ],
  },
  {
    h: "Payment and privacy",
    ps: [
      "Checkout is handled by Fourthwall. Card details go to them, never to us, and never through this site.",
      "We keep your email if you ask for order updates or sign up for drops. We don't sell it and we don't have the infrastructure to do anything clever with it.",
    ],
  },
  {
    h: "Getting hold of us",
    ps: [
      "hello@mountaingoathiking.com. A real person answers, usually within a day, occasionally from a trailhead car park.",
    ],
  },
];

export default function Policies() {
  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 10px", font: "400 clamp(38px,5vw,62px)/1 var(--disp)" }}>Shipping &amp; returns</h1>
      <p style={{ margin: "0 0 38px", fontSize: 17, color: "rgba(51,64,42,.68)" }}>
        The boring page. Worth reading before you order, not after.
      </p>
      {SECTIONS.map((s) => (
        <section key={s.h} style={{ marginBottom: 34 }}>
          <h2 className="h-mid" style={{ marginBottom: 12 }}>{s.h}</h2>
          {s.ps.map((p, i) => (
            <p key={i} className="bitp" style={{ fontSize: 17, marginBottom: 14 }}>{p}</p>
          ))}
        </section>
      ))}
      <Link href="/shop" className="btn-rust" style={{ marginTop: 12 }}>Right, the shirts</Link>
    </main>
  );
}
