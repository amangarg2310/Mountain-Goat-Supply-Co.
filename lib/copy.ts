/* ============================================================
   MGSC COPY LAYER

   Catalog is live from Fourthwall. This file is the part a
   machine can't supply: the voice.

   Rules that keep this from sounding generated:
   - Not every line is a punchline. Some are just facts.
   - No trailing ", which ..." ironic qualifiers.
   - Vary length. Short. Then something longer that earns it.

   Keyed by Fourthwall slug. Add a product in Fourthwall and it
   shows up using FALLBACK. Write an entry and it gets the real
   treatment.
   ============================================================ */

export type Copy = {
  name?: string;
  tag?: string;
  blurb: string;
  desc: string;
  kind?: "TEE" | "HOODIE";
};

export const COPY: Record<string, Copy> = {
  "wild-places-good-times": {
    tag: "New",
    blurb: "Two things that are easier to find than a parking spot.",
    desc:
      "Nine colours, which is more decisions than we usually make in a day. Garment-dyed cotton that softens with every wash and every trip you nearly cancelled.",
  },
  "g-o-a-t-hiker": {
    tag: "New",
    blurb: "Greatest of all time. Lowest of all paces.",
    desc:
      "The acronym does the work here. Wear it in front of people who take the sport seriously and see how long it takes them to read it twice.",
  },
  "worst-case-scenario": {
    tag: "Fan favourite",
    blurb: "A bear kills you. Everything else is fine.",
    desc:
      "Trail anxiety gets easier once you name the ceiling. Either a bear gets you or it doesn't. Everything under that line is mosquitoes and a wet sock. Two colour print on garment-dyed cotton.",
  },
  "bear-encounter-checklist": {
    tag: "Bestseller",
    blurb: "Steps you will not remember.",
    desc:
      "Every instruction on here is correct. None of it is retrievable while a bear is looking at you. We printed it anyway so at least the bear gets a copy.",
  },
  "bear-safety-stay-calm": {
    blurb: "The advice is stay calm. That's the whole advice.",
    desc:
      "Two words that have never once worked on anybody. Printed large enough that a friend can point at your chest instead of finishing the sentence.",
  },
  "just-outrun-your-buddy": {
    tag: "As seen on the goat",
    blurb: "Everyone's plan. Nobody's out loud.",
    desc:
      "You don't need to be fast. You need to be slightly less slow than whoever invited you. Wearing it up front keeps the terms clear at the trailhead.",
  },
  "mountain-g-o-a-t-essential-tee": {
    tag: "The flagship",
    blurb: "The logo, the goat, the whole argument.",
    desc:
      "Garment-dyed heavyweight cotton. Softens every trip, hides most of a granola bar, and outlasts the enthusiasm that made you buy it. This is the one we actually wear.",
  },
  "mountain-g-o-a-t-psychedelic": {
    tag: "New",
    blurb: "Hour six. No water. The mountain starts doing things.",
    desc:
      "Somewhere past the fourth false summit the colours go sideways. We had an artist draw what that looks like. Nobody who has finished a long descent has argued with it.",
  },
  "the-minimalist": {
    blurb: "Small print. Same opinion.",
    desc:
      "For people who want the affiliation without the announcement. Quiet enough for a coffee shop. Legible enough that the right person nods on the way past.",
  },
};

/* The product was renamed WORSE -> WORST and its slug moved with it.
   Fourthwall caches slugs across nodes, so accept both spellings. */
COPY["worse-case-scenario"] = COPY["worst-case-scenario"];

/** Any Fourthwall product with no entry above. */
export const FALLBACK: Copy = {
  blurb: "New in. Joke pending.",
  desc:
    "Fresh off the press. Our copywriter is sitting on a log somewhere. Same cotton, same relaxed cut, same refusal to make you faster.",
  kind: "TEE",
};

export function copyFor(slug: string): Copy {
  return COPY[slug] ?? FALLBACK;
}

/** Cross-sell ordering, by slug. Falls back to whatever else exists. */
export const XSELL: Record<string, string[]> = {
  "worst-case-scenario": ["bear-encounter-checklist", "just-outrun-your-buddy"],
  "bear-encounter-checklist": ["bear-safety-stay-calm", "worst-case-scenario"],
  "bear-safety-stay-calm": ["bear-encounter-checklist", "just-outrun-your-buddy"],
  "just-outrun-your-buddy": ["worst-case-scenario", "mountain-g-o-a-t-essential-tee"],
  "mountain-g-o-a-t-essential-tee": ["mountain-g-o-a-t-psychedelic", "the-minimalist"],
  "mountain-g-o-a-t-psychedelic": ["mountain-g-o-a-t-essential-tee", "the-minimalist"],
  "the-minimalist": ["mountain-g-o-a-t-essential-tee", "worst-case-scenario"],
  "wild-places-good-times": ["g-o-a-t-hiker", "the-minimalist"],
  "g-o-a-t-hiker": ["mountain-g-o-a-t-essential-tee", "wild-places-good-times"],
};
XSELL["worse-case-scenario"] = XSELL["worst-case-scenario"];
