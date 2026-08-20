import { notFound } from "next/navigation";
import { getProducts, getProduct, getRelated } from "@/lib/fourthwall";
import ProductClient from "./ProductClient";

export const revalidate = 300;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = await getProduct(id);
  return {
    title: p ? `${p.name} — Mountain G.O.A.T Supply Co.` : "Product",
    description: p?.blurb,
    openGraph: p?.images[0] ? { images: [p.images[0]] } : undefined,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = await getProduct(id);
  if (!p) notFound();
  const related = await getRelated(id);
  return <ProductClient p={p} related={related} />;
}
