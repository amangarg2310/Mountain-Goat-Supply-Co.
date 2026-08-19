"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import { LOGO_URL } from "@/lib/data";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/the-bit", label: "The Bit" },
  { href: "/fit", label: "Fit & FAQ" },
];

export default function Header() {
  const { count } = useCart();
  const path = usePathname();
  return (
    <>
      <div className="topbar">Free shipping over $75 &nbsp;·&nbsp; Ships in 3–5 days &nbsp;·&nbsp; Still faster than we hike</div>
      <header className="site">
        <Link href="/" className="logo-btn" aria-label="Mountain G.O.A.T Supply Co. home">
          <img src={LOGO_URL} alt="Mountain G.O.A.T Supply Co." />
          <span className="logo-tag">ELEVATION.<br />SNACKS.<br />REPEAT.</span>
        </Link>
        <nav className="main" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navlink" aria-current={path === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/cart" className="cartbtn">CART <span className="cartn">{count}</span></Link>
        </nav>
      </header>
    </>
  );
}
