/* ============================================================
   POLICY DOCUMENTS

   Four documents, four URLs, matching what shoppers and payment
   processors expect to find. Rendered by app/policies/[doc].

   VOICE RULE: the intro line can have a personality. The clauses
   cannot. A refund policy that is trying to be funny is a refund
   policy nobody trusts.

   >>> BEFORE THIS IS TRULY LIVE, replace every [BRACKETED] value.
   They are deliberately obvious so they cannot ship unnoticed.
   A privacy policy or terms page naming no legal entity and no
   jurisdiction is not enforceable and looks unserious.
   ============================================================ */

export type Doc = {
  slug: string;
  title: string;
  nav: string;
  blurb: string;
  intro: string;
  updated: string;
  sections: { h: string; ps: string[] }[];
};

const UPDATED = "23 August 2026";
const ENTITY = "[LEGAL ENTITY NAME]";
const ADDRESS = "[BUSINESS ADDRESS]";
const JURISDICTION = "[STATE/COUNTRY]";

export const DOCS: Doc[] = [
  {
    slug: "shipping",
    title: "Shipping",
    nav: "Shipping",
    blurb: "What it costs, how long it takes, where it goes.",
    intro: "Nothing here is a surprise, which is the whole point of the page.",
    updated: UPDATED,
    sections: [
      {
        h: "What it costs",
        ps: [
          "Shipping is free on every order. No minimum, no threshold to hit, no upsell to reach it.",
          "Duties and import taxes on international orders are calculated at checkout, once there is a destination to work them out against. The exact figure appears before you pay. Some countries add a customs handling fee on arrival that no seller can see in advance or control.",
        ],
      },
      {
        h: "How long it takes",
        ps: [
          "Every shirt is printed after you order it, so nothing sits in a warehouse waiting to be picked. Production takes three to five business days.",
          "Transit is on top of production. Domestic orders typically arrive within a week of shipping. International runs longer and varies more than we can usefully promise.",
          "Busy periods, holidays and the occasional printer backlog stretch these numbers. If yours is running late we would rather tell you than let you refresh a tracking page.",
        ],
      },
      {
        h: "Tracking",
        ps: [
          "A tracking number is emailed the moment the order leaves the printer. If nothing has arrived and nothing has moved after seven days, get in touch and we will chase it.",
          "Carriers occasionally mark a parcel delivered a day or two before it actually turns up. If yours says delivered and it is not there, give it forty eight hours before assuming the worst.",
        ],
      },
      {
        h: "Wrong address",
        ps: [
          "We can change an address while the order is still in production. Once it ships, we cannot. If a parcel comes back to us as undeliverable we will reship it once at no cost.",
        ],
      },
    ],
  },
  {
    slug: "returns",
    title: "Returns and refunds",
    nav: "Returns",
    blurb: "Thirty days. No interrogation.",
    intro: "If the shirt is wrong, we fix it. If you simply do not want it, we still fix it.",
    updated: UPDATED,
    sections: [
      {
        h: "The window",
        ps: [
          "Thirty days from delivery. Unworn, unwashed, still wearable by somebody else. Start it through the contact form and we will send a return label and instructions.",
          "Refunds go back to the original payment method once the return arrives. Banks usually take a further three to five business days to show it.",
        ],
      },
      {
        h: "If it arrives wrong",
        ps: [
          "Damaged, misprinted, wrong item, wrong size in the packet: that is our error, not yours. Send a photo through the contact form and we will replace it or refund you in full.",
          "You do not need to ship a faulty item back to us. Keep it, bin it, use it as a rag. Posting it around the country helps nobody.",
        ],
      },
      {
        h: "Exchanges",
        ps: [
          "One free size exchange per order. The fit runs relaxed, so if you are between sizes the measurements on each product page are worth the two minutes.",
          "Colour and design swaps count as a return followed by a new order, because each shirt is printed individually.",
        ],
      },
      {
        h: "What we cannot take back",
        ps: [
          "Items worn, washed or altered, and anything past the thirty day window. Print on demand means a returned shirt cannot be resold, so this is where the line has to sit.",
          "Gift cards, if we ever sell them, are non-refundable.",
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
      "Short version: we collect what an order needs and a message needs, and nothing is sold to anybody.",
    updated: UPDATED,
    sections: [
      {
        h: "Who we are",
        ps: [
          `Mountain G.O.A.T Supply Co., operated by ${ENTITY}, ${ADDRESS}. We run mountaingoathiking.com and are the data controller for the information described here.`,
        ],
      },
      {
        h: "What we collect",
        ps: [
          "If you place an order: your name, delivery address, email and order contents. Payment card details are entered on Fourthwall's checkout and are never transmitted to or stored by this website.",
          "If you use the contact form: the message you write, and your email address if you choose to provide one so we can reply.",
          "If you simply browse: standard server request data such as IP address, browser type and pages requested, logged by our hosting provider for security and reliability.",
        ],
      },
      {
        h: "Who processes it",
        ps: [
          "Fourthwall handles our catalogue, checkout, payment and fulfilment, and is the processor for order and payment data. Their own privacy policy governs that handling.",
          "Vercel hosts this site and processes server request logs.",
          "FormSubmit relays contact form submissions to our inbox, which means the contents of a message you send pass through their service on the way to us.",
          "We do not sell, rent or trade personal information to anybody, and we have no advertising trackers or third party analytics on this site.",
        ],
      },
      {
        h: "How long we keep it",
        ps: [
          "Order records are retained as long as needed for fulfilment, returns, accounting and tax obligations. Contact form messages are kept until the matter is resolved and then periodically cleared.",
        ],
      },
      {
        h: "Your rights",
        ps: [
          "You can ask what we hold about you, ask us to correct it, or ask us to delete it. Depending on where you live you may also have rights to restrict or object to processing, to receive your data in a portable form, and to be free from discrimination for exercising any of this.",
          "Ask through the contact form. We will respond within thirty days. We may need to confirm your identity first, which usually means replying from the address that placed the order.",
        ],
      },
      {
        h: "Cookies",
        ps: [
          "This site uses only what it needs to keep your cart working between pages. There are no advertising or profiling cookies. Fourthwall's checkout sets its own cookies once you leave our pages for theirs.",
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
          `This policy may change. The date at the top of the page is the last revision. Material changes will be noted here rather than made quietly. Last updated ${UPDATED}.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    nav: "Terms",
    blurb: "The rules of using the site and buying from it.",
    intro: "Nobody reads these. They still have to exist, and ours are at least short.",
    updated: UPDATED,
    sections: [
      {
        h: "Agreement",
        ps: [
          `By using mountaingoathiking.com or placing an order you agree to these terms. The site is operated by ${ENTITY} ("we", "us"). If you do not agree to them, please do not use the site.`,
        ],
      },
      {
        h: "Orders",
        ps: [
          "An order is an offer to buy. It is accepted when we confirm it by email, and until then we may decline it, for instance if an item cannot be produced or a pricing error has occurred.",
          "Prices are in US dollars and may change without notice. If an item is listed at an obviously incorrect price we will contact you before charging anything and you may cancel.",
          "Checkout, payment processing and fulfilment are carried out by Fourthwall and are also subject to their terms.",
        ],
      },
      {
        h: "Products",
        ps: [
          "Garments are printed to order. Colours shown on screen are as accurate as we can manage, but screens vary and garment-dyed fabric varies between batches by design. Minor variation in shade and print placement is a property of the process, not a defect.",
          "Measurements on product pages are approximate and taken flat.",
        ],
      },
      {
        h: "Our designs",
        ps: [
          "All artwork, graphics, product photography, text and the Mountain G.O.A.T Supply Co. name and marks on this site belong to us or are used with permission. You are welcome to wear the shirts anywhere. You are not licensed to reproduce, print or resell the designs.",
          "Any product parody or humour is our own original work and implies no affiliation with, or endorsement by, any other brand.",
        ],
      },
      {
        h: "Acceptable use",
        ps: [
          "Do not attempt to disrupt the site, gain unauthorised access to it, scrape it at volume, or use it to send anything unlawful through the contact form.",
        ],
      },
      {
        h: "Disclaimers and liability",
        ps: [
          "The site is provided as is. We do not warrant that it will be uninterrupted or error free.",
          "To the fullest extent the law allows, our total liability arising from an order is limited to the amount you paid for it. Nothing here limits liability that cannot lawfully be limited, and none of it affects your statutory consumer rights.",
        ],
      },
      {
        h: "Governing law",
        ps: [
          `These terms are governed by the laws of ${JURISDICTION}, and any dispute will be handled by the courts there.`,
        ],
      },
      {
        h: "Changes and contact",
        ps: [
          `We may update these terms; the revision date is at the top of the page. Questions go through the contact form. Last updated ${UPDATED}.`,
        ],
      },
    ],
  },
];

export const docBySlug = (slug: string) => DOCS.find((d) => d.slug === slug);
