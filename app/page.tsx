import { REVIEWS } from "@/lib/data";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import EmailBox from "@/components/EmailBox";
import Carousel from "@/components/Carousel";
import { getProducts } from "@/lib/fourthwall";

export const revalidate = 300;

export default async function Home() {
  const products = await getProducts();
  // Staff picks lead the rail; the rest keep the order Fourthwall gives us.
  const ordered = [
    ...products.filter((p) => p.tag === "Staff pick"),
    ...products.filter((p) => p.tag !== "Staff pick"),
  ];

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
          <p>Cotton tees for people who hike slowly. Our spokesperson is a goat.</p>
          <Link href="/shop" className="btn-hero">Take me to the shirts</Link>
        </div>
      </section>

      <Marquee />

      {products.length ? (
        <>
          <section className="sechead">
            <div>
              <h2 className="h-sec" style={{ marginBottom: 6 }}>Pick of the herd</h2>
            </div>
            <Link href="/shop" className="btn-hollow">See the whole herd&nbsp;&nbsp;→</Link>
          </section>
          <section style={{ paddingTop: 24, paddingBottom: 74 }}>
            <Carousel products={ordered} />
          </section>
        </>
      ) : null}

      <section className="manifesto">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2>The back of the pack</h2>
            <p className="txt">
              Other outdoor brands are very interested in how fast you did it. We would rather sell you something to
              sit on a log in, eating a granola bar you found in a jacket pocket from last October. It was still
              fine, by the way.
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
        {REVIEWS.length > 0 ? (
          <>
            <h2 className="h-mid" style={{ marginBottom: 24 }}>Word from the herd</h2>
            <div className="revgrid" style={{ marginBottom: 24 }}>
              {REVIEWS.map((r) => (
                <figure key={r.who} className="rev" style={{ margin: 0 }}>
                  <span className="stars" aria-label="5 out of 5 stars">{r.stars}</span>
                  <p>{r.text}</p>
                  <figcaption className="who">{r.who}</figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="h-mid" style={{ marginBottom: 8 }}>No reviews yet</h2>
            <p className="sub-muted" style={{ marginBottom: 24, maxWidth: "54ch" }}>
              Nobody has bought anything yet. When someone does and has something to say about it, their words go here
              instead of ours.
            </p>
          </>
        )}
      </section>

      <EmailBox />
    </main>
  );
}
