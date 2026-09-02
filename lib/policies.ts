/* ============================================================
   POLICY DOCUMENTS

   Four documents, four URLs, matching what shoppers and payment
   processors expect to find. Rendered by app/policies/[doc].

   VOICE RULE: the intro line can have a personality. The clauses
   cannot. A refund policy that is trying to be funny is a refund
   policy nobody trusts.

   >>> Operating entity and jurisdiction are set from the company's
   incorporation. A registered business address is still worth adding
   to the privacy page if the company ever registers one publicly.
   ============================================================ */

export type Doc = {
  slug: string;
  title: string;
  nav: string;
  blurb: string;
  /* Optional on purpose. An intro earns its place only when it tells the
     reader something the sections do not, like the one on returns. A line
     that just announces the page exists is cut. */
  intro?: string;
  updated: string;
  sections: { h: string; ps: string[] }[];
};

const UPDATED = "30 August 2026";
const ENTITY = "1573809 B.C. LTD.";
const JURISDICTION = "British Columbia, Canada";

export const DOCS: Doc[] = [
  {
    slug: "shipping",
    title: "Shipping",
    nav: "Shipping",
    blurb: "What it costs, how long it takes, where it goes.",
    updated: UPDATED,
    sections: [
      {
        h: "What it costs",
        ps: [
          "Shipping costs are shown at checkout before you pay. We run free shipping promotions from time to time, and when one is on it is announced on the site.",
          "Duties and import taxes on international orders are also calculated at checkout, once there is a destination to work them out against. Some countries add a customs handling fee on arrival that no seller can see in advance.",
        ],
      },
      {
        h: "How long it takes",
        ps: [
          "Most orders arrive within about eight to ten business days. Shirts are printed after you order, so that window covers making it and moving it.",
          "International orders take longer. Busy periods and holidays stretch every estimate on this page.",
          "Once a parcel is with the carrier, the timing is theirs, not ours. If yours is running late, tell us and we will chase it.",
        ],
      },
      {
        h: "Tracking",
        ps: [
          "A tracking number is emailed as soon as your order ships.",
          "Carriers sometimes mark a parcel delivered a day or two early. If yours says delivered and it is not there, give it forty eight hours before assuming the worst.",
        ],
      },
      {
        h: "Wrong address and failed delivery",
        ps: [
          "Check your address before you order. We are not responsible for parcels delayed, returned or lost because the address was wrong or incomplete, or because nobody collected it.",
          "If an order comes back to us, reshipping it may cost extra.",
        ],
      },
    ],
  },
  {
    slug: "returns",
    title: "Returns and refunds",
    nav: "Returns",
    blurb: "No refunds for change of mind. Anything we got wrong, we fix.",
    intro: "Check the size guide before you order. If the shirt turns up wrong, tell us and we will sort it.",
    updated: UPDATED,
    sections: [
      {
        h: "No refunds",
        ps: [
          "Every garment is printed after you order it, so we cannot accept returns or issue refunds for change of mind, wrong size chosen, or personal preference. Check the size guide first.",
          "If your item arrives damaged, defective, or different from what you ordered, send us a photo through the form on the homepage and we will make it right.",
          "Nothing here limits any rights you have under consumer protection law.",
        ],
      },
      {
        h: "Cancellations",
        ps: [
          "Orders go into production quickly and usually cannot be changed or cancelled once they do.",
          "If you spot a mistake right after ordering, message us straight away and we will tell you honestly whether we can still catch it.",
        ],
      },
      {
        h: "Print and colour variations",
        ps: [
          "Print placement, colour and scale vary slightly from one printed item to the next. Colours also look different depending on your screen and the garment.",
          "That variation is how the process works, not a defect.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    nav: "Privacy",
    blurb: "What we collect, who touches it, how to make us delete it.",
    intro:
      "We collect what an order needs and what a message needs. None of it is sold to anybody.",
    updated: UPDATED,
    sections: [
      {
        h: "Who we are",
        ps: [
          `Mountain G.O.A.T Supply Co. is operated by ${ENTITY}, a company incorporated in ${JURISDICTION}. We run mountaingoathiking.com and are the organisation responsible for the information described here.`,
        ],
      },
      {
        h: "What we collect",
        ps: [
          "Place an order and we receive your name, delivery address, email and order contents. Card details are entered on Fourthwall's checkout and never reach this website.",
          "Use the contact form and we receive your message, plus your email address if you give one so we can reply.",
          "Just browsing, our host logs standard request data such as IP address, browser type and pages requested, for security and reliability.",
        ],
      },
      {
        h: "Who processes it",
        ps: [
          "Fourthwall runs our catalogue, checkout, payment and fulfilment, so order and payment data is handled under their privacy policy.",
          "Vercel hosts this site and processes server request logs.",
          "FormSubmit relays contact form messages to our inbox, so what you write passes through their service on the way to us.",
          "Meta Pixel records page views and shopping actions and links them to a Meta account where one exists, which is how we measure whether our ads work. It sets its own cookies and sends that data to Meta, who handle it under their own policy.",
          "We do not sell, rent or trade personal information to anybody.",
        ],
      },
      {
        h: "How long we keep it",
        ps: [
          "Order records stay as long as fulfilment, returns, accounting and tax require. Contact form messages are cleared once the matter is settled.",
        ],
      },
      {
        h: "Your rights",
        ps: [
          "You can ask what we hold about you, ask us to correct it, or ask us to delete it. Depending on where you live you may also have rights to restrict or object to processing, to receive your data in a portable form, and to be free from discrimination for exercising any of this.",
          "Ask through the contact form and we will respond within thirty days. We may need to confirm it is you first, which usually means replying from the address that placed the order.",
        ],
      },
      {
        h: "Cookies",
        ps: [
          "Two kinds. Functional cookies keep your cart working between pages. Advertising cookies come from the Meta Pixel above and are used for ad measurement and retargeting.",
          "Block or clear them in your browser settings, and limit ad targeting in your Meta account under Ad Preferences. Fourthwall's checkout sets its own cookies once you leave our pages for theirs.",
        ],
      },
      {
        h: "Children",
        ps: [
          "This shop is not directed at children under 13 and we do not knowingly collect their information. If you believe a child has provided us data, tell us and we will delete it.",
        ],
      },
      {
        h: "Changes",
        ps: [
          "This policy may change. The date at the top is the last revision, and material changes get noted here rather than made quietly.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    nav: "Terms",
    blurb: "The rules of using the site and buying from it.",
    updated: UPDATED,
    sections: [
      {
        h: "Agreement",
        ps: [
          `Using mountaingoathiking.com or placing an order means you agree to these terms. The site is operated by ${ENTITY} ("we", "us"), incorporated in ${JURISDICTION}. If you do not agree, please do not use the site.`,
        ],
      },
      {
        h: "Orders",
        ps: [
          "An order is an offer to buy, accepted when we confirm it by email. Until then we may decline it, for example if an item cannot be produced or a price was wrong.",
          "Prices are in US dollars and may change without notice. If something is listed at an obviously wrong price we will contact you before charging anything, and you can cancel.",
          "Checkout, payment and fulfilment run through Fourthwall, so their terms apply too.",
        ],
      },
      {
        h: "Products",
        ps: [
          "Garments are printed after you order. On-screen colours are as accurate as we can manage, but screens differ and garment-dyed fabric shifts between batches by design. Small differences in shade and print placement are part of the process, not defects.",
          "Measurements on product pages are approximate and taken flat.",
        ],
      },
      {
        h: "Our designs",
        ps: [
          "The artwork, photography, text and the Mountain G.O.A.T Supply Co. name and marks belong to us or are used with permission. Wear the shirts anywhere you like. You may not reproduce, print or resell the designs.",
          "Any parody or humour in a product is our own original work and implies no affiliation with any other brand.",
        ],
      },
      {
        h: "Acceptable use",
        ps: [
          "Do not disrupt the site, break into it, scrape it at volume, or push anything unlawful through the contact form.",
        ],
      },
      {
        h: "Disclaimers and liability",
        ps: [
          "The site is provided as is. We do not promise it will be uninterrupted or error free.",
          "As far as the law allows, our total liability on an order is limited to what you paid for it. Nothing here limits liability that cannot lawfully be limited, or affects your statutory consumer rights.",
        ],
      },
      {
        h: "Governing law",
        ps: [
          `These terms are governed by the laws of ${JURISDICTION}, and disputes go to the courts there.`,
        ],
      },
      {
        h: "Changes and contact",
        ps: [
          "We may update these terms, with the revision date shown at the top. Questions go through the contact form.",
        ],
      },
    ],
  },
];

export const docBySlug = (slug: string) => DOCS.find((d) => d.slug === slug);
