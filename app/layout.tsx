import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mountaingoathiking.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mountain G.O.A.T Supply Co. — Shirts for slow hikers",
  description: "Garment-dyed cotton tees for people who hike slowly, stop often and turn around without apologising.",
  openGraph: {
    title: "Mountain G.O.A.T Supply Co.",
    description: "Cotton shirts for people who hike slowly and stop often.",
    images: ["/assets/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Hanken+Grotesk:ital,wght@0,300..800;1,400..600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
