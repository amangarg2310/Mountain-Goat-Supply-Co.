/* Brand furniture. The catalog itself is live from Fourthwall
   (see lib/fourthwall.ts) and the product voice lives in lib/copy.ts. */

export const MARQUEE = [
  "WORST CASE SCENARIO: A BEAR KILLS YOU",
  "JUST OUTRUN YOUR BUDDY",
  "TURNING AROUND STILL COUNTS",
  "BEAR SAFETY: STAY CALM",
  "THE NAP IS PART OF THE TRAINING",
  "CONVERSATIONAL PACE ONLY",
];

export const TENETS = [
  { title: "Conversational pace", body: "If you can't finish a sentence, you're doing a different sport." },
  { title: "Snacks are gear", body: "Weight is weight. Ours is edible." },
  { title: "Turning around counts", body: "Nobody has ever asked to see the summit photo." },
  { title: "No PRs", body: "We have never timed anything." },
];

export const REVIEWS: { stars: string; text: string; who: string }[] = [
  { stars: "★★★★★", text: "Love the shirts and colors available. Highly recommended!", who: "Tom D." },
  { stars: "★★★★★", text: "Bought a shirt for my hiking obsessed brother and he loves it! Very high quality and he says he gets lot of compliments", who: "Kalvin G." },
  { stars: "★★★★★", text: "The design is what caught my attention! Definetely a convo starter shirt.", who: "Kelvin T." },
];

/* Inches, laid flat. Extended to 4XL to match the live Fourthwall range. */
export const SIZETABLE = [
  ["S", "18", "28", "8"],
  ["M", "20", "29", "8.5"],
  ["L", "22", "30", "9"],
  ["XL", "24", "31", "9.5"],
  ["2XL", "26", "32", "10"],
  ["3XL", "28", "33", "10.5"],
  ["4XL", "30", "34", "11"],
];

export const FAQS = [
  { q: "Is this technical apparel?", a: "No. It's cotton. It gets wet and stays wet." },
  { q: "How does it fit?", a: "Relaxed through the body. Size down if you want it closer to the frame. Size up if you're being honest with yourself." },
  { q: "Will this make me faster?", a: "No." },
  { q: "How long does shipping take?", a: "Usually about eight to ten business days. Shirts are printed after you order, and once it is with the carrier the timing is theirs." },
  { q: "Do you ship internationally?", a: "Yes, most places. It takes longer." },
  { q: "Returns?", a: "Damaged, defective or not what you ordered, we fix it. We cannot take one back over sizing or a change of heart, so check the size guide first." },
];

export const LOGO_URL =
  "https://imgproxy.fourthwall.dev/pW9OwSiEfQ78erdr66NtQ_FFxQJP68h1F1HwEPbUy7o/w:320/sm:1/enc/o7VcSOk-L58paEvr/AI-bCtQZcW2CXWJu/K0oekAd8HECojJa_/cFL3Kw2K7MlD0O7N/ggqCf-2Fy65kfcGA/54Gc_nlcsowRrypC/DjjrqvI-bpEe-wR9/n7oF2TSHMPPf3Mgb/D0zBLnpTahMWL8KE/LAFUYpT8gUyXusV9/PdGb_pkyk0suNYOa/pJ6ZGusLL3RUWLGa/qCdOwHYgJPWhCxvg/iB0Z0g1HQD_TTyTH/DHZRM-ppFeKmbctC/Py79yi7gfu5YHwU7.webp";
