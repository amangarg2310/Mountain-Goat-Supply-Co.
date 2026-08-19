import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "Mountain G.O.A.T Supply Co. — Anti-Hustle Outdoor Apparel",
  description: "Technical apparel for people who hike, snack, question life, then hike some more. Elevation optional. Snacks mandatory.",
  openGraph: {
    title: "Mountain G.O.A.T Supply Co.",
    description: "Anti-hustle outdoor apparel. Elevation optional, snacks mandatory.",
    images: ["/assets/hero-billboard.jpg"],
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
