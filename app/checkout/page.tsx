import { getPriceBook } from "@/lib/fourthwall";
import CheckoutClient from "./CheckoutClient";

export const revalidate = 300;
export const metadata = { title: "Checkout — Mountain G.O.A.T Supply Co." };

export default async function CheckoutPage() {
  const book = await getPriceBook();
  return <CheckoutClient book={book} />;
}
