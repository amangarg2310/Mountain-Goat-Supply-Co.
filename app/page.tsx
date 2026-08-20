import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import EmailBox from "@/components/EmailBox";
import ProductCard from "@/components/ProductCard";
import { REVIEWS } from "@/lib/data";
import { getProducts } from "@/lib/fourthwall";

export const revalidate = 300;

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <section className="hero">
        <picture>
          <source media="(max-width: 760px)" srcSet="/assets/hero-sm.jpg" />
          <img
            className="hero-img"
            src="/assets/hero.jpg"
            alt="A hiker in an Over Elevated Club tee sharing a granola bar with a goat in sunglasses and a Goat Goals tee, mountains behind them"
            fetchPriority="high"
            width={1766}
            height={891}
          />
        </picture>
        <div className="hero-copy">
          <h1>
            Hike now,<br />regret less<br />(maybe).
          </h1>
          <p>Cotton shirts for people who hike slowly and stop often.</p>
          <Link href="/shop" className="btn-hero">Shop the shirts</Link>
        </div>
      </section>

      <Marquee />

      {products.length ? (
        <>
          <section className="sechead">
            <div>
              <h2 className="h-sec" style={{ marginBottom: 6 }}>Everything we make</h2>
              <p className="sub-muted">
                {products.length} design{products.length === 1 ? "" : "s"}. All in stock.
              </p>
            </div>
            <Link href="/shop" className="btn-hollow">View all&nbsp;&nbsp;→</Link>
          </section>
          <section className="pad" style={{ paddingTop: 24, paddingBottom: 74 }}>
            <div className="grid">{products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}</div>
          </section>
        </>
      ) : null}

      <section className="manifesto">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2>Somebody had to speak for the back of the pack</h2>
            <p className="txt">
              Every other outdoor brand is selling you a personal record. We make things to wear while sitting on a log,
              eating a bar you found in a jacket pocket from last October. The mountain has never asked how fast you got
              there. Neither will we.
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
        <h2 className="h-mid" style={{ marginBottom: 8 }}>Reviews we didn't edit</h2>
        <p className="sub-muted" style={{ marginBottom: 28 }}>
          Verified buyers. Unverified fitness. 4.9 average, and the missing star explains itself below.
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
