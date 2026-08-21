import { getPriceBook } from "@/lib/fourthwall";
import CartClient from "./CartClient";

export const revalidate = 300;
export const metadata = { title: "Your pack — Mountain G.O.A.T Supply Co." };

export default async function CartPage() {
  const book = await getPriceBook();
  return <CartClient book={book} />;
}
