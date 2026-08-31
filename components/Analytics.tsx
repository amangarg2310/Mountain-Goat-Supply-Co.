"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* GA4 + Microsoft Clarity, both gated on env vars so the code ships now and
   turns itself on the moment the IDs exist in Vercel. Nothing loads until
   they are set, so there is no phantom third-party traffic before launch.

   GA4     -> NEXT_PUBLIC_GA4_ID      (G-XXXXXXX, from the GA4 property)
   Clarity -> NEXT_PUBLIC_CLARITY_ID  (from clarity.microsoft.com, free)

   Clarity supplies the heatmaps and session recordings that Shopify stores
   get from apps. Building cursor tracking by hand would mean collecting and
   storing behavioural data ourselves; Clarity does it with rage-click
   detection and GDPR tooling included, for nothing.

   Like the Meta pixel, GA4 needs the SPA fix: this site never reloads the
   document between pages, so page_view must be sent on each route change.
   send_page_view:false stops the automatic one so nothing double counts. */
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (!GA_ID) return;
    if (first.current) {
      first.current = false;
      return; // the config call below sends the first page_view
    }
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return (
    <>
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}

      {CLARITY_ID ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      ) : null}
    </>
  );
}
