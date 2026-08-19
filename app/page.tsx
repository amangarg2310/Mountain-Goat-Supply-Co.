import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import EmailBox from "@/components/EmailBox";
import ProductCard from "@/components/ProductCard";
import { REVIEWS } from "@/lib/data";
import { getProducts } from "@/lib/fourthwall";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <section className="hero-bill">
        <h1 className="sr-only">
          Hike Now, Regret Less (Maybe). Mountain G.O.A.T Supply Co. Technical apparel for people who hike, snack, question life, then hike some more.
        </h1>
        <img
          src="/assets/hero-billboard.jpg"
          alt="A hiker in an Over Elevated Club tee sharing a granola bar with a goat in sunglasses and a Goat Goals tee, mountains behind them, headline reading Hike Now, Regret Less, Maybe"
          fetchPriority="high"
        />
        <Link href="/shop" className="bill-btn" aria-label="Shop the chaos" />
        <svg className="cue" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </section>
      <div className="m-cta"><Link href="/shop" className="btn-chaos">SHOP THE CHAOS</Link></div>
      <Marquee />

      <section className="sechead">
        <div>
          <h2 className="h-sec" style={{ marginBottom: 6 }}>The whole catalog</h2>
          <p className="sub-muted">Eight designs. All in stock, which surprised us too.</p>
        </div>
        <Link href="/shop" className="btn-hollow">VIEW ALL&nbsp;&nbsp;→</Link>
      </section>
      <section className="pad" style={{ paddingTop: 24, paddingBottom: 74 }}>
        <div className="grid">{products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>

      <section className="manifesto">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2>Somebody had to represent the back of the pack</h2>
            <p className="txt">
              Every other outdoor brand wants to sell you a personal record. We sell you something to wear while sitting
              on a log, eating a bar you found in a jacket pocket from last October. The mountain has never once asked
              how fast you got there. Neither will we.
            </p>
            <blockquote>&ldquo;Worst Case Scenario: A Bear Kills You.&rdquo;</blockquote>
          </div>
        </Reveal>
        <Reveal>
          <div className="canoe">
            <img src="/assets/goat-canoe.jpg" alt="The MGSC goat in sunglasses and an I Invent Detours tee, paddling a Mountain G.O.A.T Supply Co. canoe through rapids" loading="lazy" />
          </div>
        </Reveal>
      </section>

      <section style={{ padding: "70px var(--pad) 20px" }}>
        <h2 className="h-mid" style={{ marginBottom: 8 }}>Reviews we did not edit</h2>
        <p className="sub-muted" style={{ marginBottom: 28 }}>
          Verified buyers. Unverified fitness. 4.9 average, and the missing star is explained below.
        </p>
        <div className="revgrid">
          {REVIEWS.map((r, i) => (
            <Reveal key={i}>
              <div className="rev">
                <span className="stars" aria-label="rating">{r.stars}</span>
                <p>{r.text}</p>
                <span className="who">{r.who}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <EmailBox />
    </main>
  );
}
