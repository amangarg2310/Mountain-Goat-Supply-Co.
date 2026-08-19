import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  return { title: p ? `${p.name} — Mountain G.O.A.T Supply Co.` : "Product" };
}
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) notFound();
  return <ProductClient p={p} />;
}
