import { getProducts } from "@/lib/fourthwall";
import ShopClient from "./ShopClient";

export const revalidate = 300;
export const metadata = { title: "Shop — Mountain G.O.A.T Supply Co." };

export default async function Shop() {
  const products = await getProducts();
  return <ShopClient products={products} />;
}
