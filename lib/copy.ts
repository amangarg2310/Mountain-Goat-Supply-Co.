/* ============================================================
   MGSC COPY LAYER

   The catalog itself is live from Fourthwall (names, photos,
   colours, sizes, prices). This file is the part a machine
   cannot supply: the voice.

   Keyed by Fourthwall product slug. Add a product in Fourthwall
   and it appears on the site immediately using FALLBACK copy.
   Write an entry here and it gets the full treatment.
   ============================================================ */

export type Copy = {
  /** Overrides the Fourthwall product name. Leave undefined to use theirs. */
  name?: string;
  /** Small badge on the card. */
  tag?: string;
  /** One line under the product name on cards. */
  blurb: string;
  /** Longer paragraph on the product page. */
  desc: string;
  /** Drives the shop filter. */
  kind?: "TEE" | "HOODIE";
};

export const COPY: Record<string, Copy> = {
  "worst-case-scenario": {
    tag: "FAN FAVORITE",
    blurb: "A bear kills you. Everything else is fine.",
    desc:
      "A gentle reframing device for trail anxiety. Once you accept the worst case, the mosquitoes stop feeling like a big deal. Wear it as a coping mechanism or a warning to whoever agreed to come with you.",
  },
  "bear-encounter-checklist": {
    tag: "BESTSELLER",
    blurb: "Instructions you will not read in time.",
    desc:
      "Every step is correct. Every step is also impossible to recall while a bear is looking at you. We printed it on a shirt so the bear can read it, which felt like the more realistic plan.",
  },
  "bear-safety-stay-calm": {
    tag: "CORE",
    blurb: "The advice is stay calm. That is the whole advice.",
    desc:
      "Two words that have never once worked on anybody. Printed large so a member of your group can point at your chest instead of finishing their sentence.",
  },
  "just-outrun-your-buddy": {
    tag: "AS SEEN ON THE GOAT",
    blurb: "The strategy nobody admits to and everybody has.",
    desc:
      "You do not need to be fast. You need to be marginally less slow than the person who invited you. Wear it openly so the terms of the friendship are clear before the trailhead.",
  },
  "mountain-g-o-a-t-essential-tee": {
    tag: "THE FLAGSHIP",
    blurb: "The logo, the goat, the entire thesis.",
    desc:
      "Our founding argument, printed large enough to be read from the bench you are sitting on. Heavyweight cotton that softens with every trip and hides every snack.",
  },
  "mountain-g-o-a-t-psychedelic": {
    tag: "NEW",
    blurb: "What the summit looks like on hour six with no water.",
    desc:
      "Somewhere past the fourth false peak the mountain starts doing things colour-wise. We had an artist draw it. Nobody who has finished a long descent has questioned the accuracy.",
  },
  "the-minimalist": {
    tag: "QUIET ONE",
    blurb: "For subtle people who still want credit.",
    desc:
      "A small hit for anyone who wants the affiliation without the announcement. Understated enough for a coffee shop, legible enough that the right person will nod at you.",
  },
};

/** Used for any Fourthwall product with no entry above. */
/* The product was renamed WORSE -> WORST and its slug changed with it. The
   storefront API caches slugs for a while, so accept both spellings. */
COPY["worse-case-scenario"] = COPY["worst-case-scenario"];

export const FALLBACK: Copy = {
  blurb: "New. We have not written the joke yet.",
  desc:
    "This one is fresh off the press and our copywriter is currently sitting on a log. Same heavyweight cotton, same relaxed fit, same refusal to make you faster.",
  kind: "TEE",
};

export function copyFor(slug: string): Copy {
  return COPY[slug] ?? FALLBACK;
}

/** Cross-sell ordering, by slug. Falls back to "everything else". */
export const XSELL: Record<string, string[]> = {
  "worst-case-scenario": ["bear-encounter-checklist", "just-outrun-your-buddy"],
  "bear-encounter-checklist": ["bear-safety-stay-calm", "worst-case-scenario"],
  "bear-safety-stay-calm": ["bear-encounter-checklist", "just-outrun-your-buddy"],
  "just-outrun-your-buddy": ["worst-case-scenario", "mountain-g-o-a-t-essential-tee"],
  "mountain-g-o-a-t-essential-tee": ["mountain-g-o-a-t-psychedelic", "the-minimalist"],
  "mountain-g-o-a-t-psychedelic": ["mountain-g-o-a-t-essential-tee", "the-minimalist"],
  "the-minimalist": ["mountain-g-o-a-t-essential-tee", "worst-case-scenario"],
};
XSELL["worse-case-scenario"] = XSELL["worst-case-scenario"];
