import Link from "next/link";
import { LOGO_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div className="col">
          <img src={LOGO_URL} alt="Mountain G.O.A.T Supply Co." />
          <p style={{ margin: 0, maxWidth: "34ch", fontSize: "14.5px", lineHeight: 1.6 }}>
            Garment-dyed cotton tees. Printed when you order.
          </p>
        </div>
        <div className="col">
          <span className="lab">Shop</span>
          <Link href="/shop">All products</Link>
          <Link href="/fit">Fit &amp; FAQ</Link>
          <Link href="/the-bit">The Bit</Link>
        </div>
        <div className="col">
          <span className="lab">Help</span>
          <Link href="/policies">Returns &amp; exchanges</Link>
          <Link href="/policies">Shipping</Link>
          <a href="mailto:hello@mountaingoathiking.com">Contact a human</a>
        </div>
      </div>
      <p className="copyline">© 2026 Mountain G.O.A.T Supply Co. &nbsp;·&nbsp; No summits were reached in the making of this store</p>
    </footer>
  );
}
