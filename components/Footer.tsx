import Link from "next/link";
import { LOGO_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div className="col">
          <img src={LOGO_URL} alt="Mountain G.O.A.T Supply Co." />
          <p style={{ margin: 0, maxWidth: "34ch", fontSize: "14.5px", lineHeight: 1.6 }}>
            Anti-hustle outdoor apparel. Elevation optional, snacks mandatory.
          </p>
        </div>
        <div className="col">
          <span className="lab">SHOP</span>
          <Link href="/shop">All products</Link>
          <Link href="/fit">Fit &amp; FAQ</Link>
          <Link href="/the-bit">The Bit</Link>
        </div>
        <div className="col">
          <span className="lab">THE FINE PRINT</span>
          <a href="#">Returns &amp; exchanges</a>
          <a href="#">Shipping</a>
          <a href="mailto:hello@mountaingoatsupply.co">Contact a human</a>
        </div>
      </div>
      <p className="copyline">© 2026 MGSC — MOUNTAIN G.O.A.T SUPPLY CO. &nbsp;·&nbsp; NO SUMMITS WERE REACHED IN THE MAKING OF THIS STORE</p>
    </footer>
  );
}
