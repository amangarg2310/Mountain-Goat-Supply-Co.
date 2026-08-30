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
  intro: string;
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
          "Most orders arrive within eight to ten business days.",
          "International orders run longer and vary more than we can usefully promise. Busy periods and holidays stretch these numbers too.",
          "If yours is running late we would rather tell you than let you refresh a tracking page.",
        ],
      },
      {
        h: "Tracking",
        ps: [
          "A tracking number is emailed as soon as your order is on its way. If nothing has arrived and nothing has moved after ten business days, get in touch and we will chase it.",
          "Carriers occasionally mark a parcel delivered a day or two before it actually turns up. If yours says delivered and it is not there, give it forty eight hours before assuming the worst.",
        ],
      },
      {
        h: "Wrong address and failed delivery",
        ps: [
          "Please make sure your shipping address is correct before placing your order. We are not responsible for orders that are delayed, returned or undeliverable because the address given was incorrect or incomplete, or because a package was not collected.",
          "If an order is returned to sender, additional shipping charges may apply before it can be sent again.",
        ],
      },
    ],
  },
  {
    slug: "returns",
    title: "Returns and refunds",
    nav: "Returns",
    blurb: "No refunds for change of mind. Anything we got wrong, we fix.",
    intro: "The short version: check the size guide before you order, and if the shirt turns up wrong, tell us.",
    updated: UPDATED,
    sections: [
      {
        h: "No refunds",
        ps: [
          "Because our garments are printed to order, we do not accept returns or issue refunds for change of mind, incorrect size selection, or personal preference. Please review the product description and size guide carefully before placing your order.",
          "If your item arrives damaged, defective, or different from what you ordered, contact us and we will work with you to make it right.",
          "Nothing in this policy limits any rights or remedies you may have under applicable consumer protection laws.",
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
        h: "Cancellations",
        ps: [
          "Orders enter production shortly after they are placed and generally cannot be cancelled or changed once production has begun.",
          "If you spot a mistake immediately after ordering, message us straight away and we will tell you honestly whether it is still possible to catch it.",
        ],
      },
      {
        h: "Print and colour variations",
        ps: [
          "Our products are printed to order, so minor variations in print placement, colour, scale and appearance may occur from one item to another. Colours may also appear slightly different depending on your screen settings and the garment material.",
          "These normal production variations are not considered defects.",
        ],
      },
      {
        h: "Wrong address and failed delivery",
        ps: [
          "Please make sure your shipping address is correct before placing your order. We are not responsible for orders that are delayed, returned or undeliverable because the address given was incorrect or incomplete, or because a package was not collected.",
          "If an order is returned to sender, additional shipping charges may apply before it can be sent again.",
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
          `Mountain G.O.A.T Supply Co. is operated by ${ENTITY}, a company incorporated in ${JURISDICTION}. We run mountaingoathiking.com and are the organisation responsible for the information described here.`,
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
          "Meta (Facebook) Pixel runs on this site. It records page views and shopping actions and links them to a Meta account where one exists, so we can measure whether our ads work and show ads to people who have visited. It sets its own cookies and sends data to Meta, who act as an independent controller under their own policy.",
          "We do not sell, rent or trade personal information to anybody.",
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
          "Two kinds. Functional cookies keep your cart working between pages. Advertising cookies are set by the Meta Pixel described above and are used for ad measurement and retargeting.",
          "You can block or clear cookies in your browser settings, and you can limit ad targeting in your Meta account under Ad Preferences. Fourthwall's checkout sets its own cookies once you leave our pages for theirs.",
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
          `By using mountaingoathiking.com or placing an order you agree to these terms. The site is operated by ${ENTITY} ("we", "us"), incorporated in ${JURISDICTION}. If you do not agree to them, please do not use the site.`,
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
