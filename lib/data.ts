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

/* No reviews yet. The store is new and we are not inventing any.
   When real ones arrive, they replace this block. */
export const REVIEWS: { stars: string; text: string; who: string }[] = [];

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
  { q: "Do you ship internationally?", a: "Yes, most places, three to five business days." },
  { q: "Returns?", a: "Thirty days, unworn, no questions asked. If you wore it and a bear ate it, we want to hear about that." },
];

export const LOGO_URL =
  "https://imgproxy.fourthwall.dev/pW9OwSiEfQ78erdr66NtQ_FFxQJP68h1F1HwEPbUy7o/w:320/sm:1/enc/o7VcSOk-L58paEvr/AI-bCtQZcW2CXWJu/K0oekAd8HECojJa_/cFL3Kw2K7MlD0O7N/ggqCf-2Fy65kfcGA/54Gc_nlcsowRrypC/DjjrqvI-bpEe-wR9/n7oF2TSHMPPf3Mgb/D0zBLnpTahMWL8KE/LAFUYpT8gUyXusV9/PdGb_pkyk0suNYOa/pJ6ZGusLL3RUWLGa/qCdOwHYgJPWhCxvg/iB0Z0g1HQD_TTyTH/DHZRM-ppFeKmbctC/Py79yi7gfu5YHwU7.webp";
