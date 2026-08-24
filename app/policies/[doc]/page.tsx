import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DOCS, docBySlug } from "@/lib/policies";

export function generateStaticParams() {
  return DOCS.map((d) => ({ doc: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doc: string }>;
}): Promise<Metadata> {
  const { doc } = await params;
  const d = docBySlug(doc);
  if (!d) return { title: "Not found" };
  return {
    title: `${d.title} — Mountain G.O.A.T Supply Co.`,
    description: d.blurb,
  };
}

export default async function PolicyDoc({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  const d = docBySlug(doc);
  if (!d) notFound();

  return (
    <main style={{ padding: "56px var(--pad) 90px", maxWidth: 760, margin: "0 auto" }}>
      <Link href="/policies" className="sub-muted" style={{ fontSize: 15 }}>
        ← All policies
      </Link>

      <h1 style={{ margin: "16px 0 10px", font: "400 clamp(34px,4.6vw,56px)/1 var(--disp)" }}>
        {d.title}
      </h1>
      <p style={{ margin: "0 0 6px", fontSize: 17, color: "rgba(51,64,42,.68)" }}>{d.intro}</p>
      <p style={{ margin: "0 0 38px", fontSize: 14, color: "rgba(51,64,42,.5)" }}>
        Last updated {d.updated}
      </p>

      {d.sections.map((s) => (
        <section key={s.h} style={{ marginBottom: 32 }}>
          <h2 className="h-mid" style={{ marginBottom: 12 }}>{s.h}</h2>
          {s.ps.map((p, i) => (
            <p key={i} className="bitp" style={{ fontSize: 17, marginBottom: 14 }}>{p}</p>
          ))}
        </section>
      ))}

      <nav
        style={{
          display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40, paddingTop: 24,
          borderTop: "1.5px solid rgba(51,64,42,.15)",
        }}
      >
        {DOCS.filter((o) => o.slug !== d.slug).map((o) => (
          <Link key={o.slug} href={`/policies/${o.slug}`} className="sub-muted" style={{ fontSize: 16 }}>
            {o.title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
