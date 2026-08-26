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
  /* Sincere by design. The artwork is a genuinely nice night sky and the
     shirt means what it says, so the copy plays it straight. Undercutting
     your own product with a joke it isn't making just confuses the buyer. */
  "quiet-moments": {
    tag: "New",
    blurb: "No joke on this one. Just a good night sky.",
    desc:
      "Look up, get lost, find peace. Stay wild, stay present. We sell a lot of shirts that take the mickey out of hiking, and then there is this one, which does not. Some nights on a trail are exactly as good as people say they are. Garment-dyed cotton, printed when you order.",
  },
  "hide-and-seek-champion": {
    tag: "New",
    blurb: "Undefeated since 1967. Still only ever photographed blurry.",
    desc:
      "Nearly sixty years unbeaten and the only surviving footage is out of focus, which is either evidence of nothing or the greatest defensive performance in the history of the sport. Bigfoot, full pack, mid-stride, going wherever he likes. Printed on garment-dyed cotton.",
  },
  "an-honest-mistake-was-made": {
    tag: "New",
    blurb: "No charges filed. The bear has moved on.",
    desc:
      "The hiker is inside the bear. The bear looks untroubled. The caption declines to assign blame to anybody. If you enjoy the specific comedy of a catastrophic outcome described in the language of a minor clerical error, this is the shirt.",
  },
  "this-is-technically-outdoors": {
    tag: "New",
    blurb: "A lake counts. The floatie counts. We checked.",
    desc:
      "Snorkel mask, rubber duck ring, one goat committing to a swim with no intention of hiking anywhere afterwards. Nobody said the outdoors had to involve elevation. For people whose summer plans peak at a lake and stay there.",
  },
  "minimal-black-comfort-colors-tee": {
    name: "The Quiet One",
    blurb: "Just the logo. Our most understated opinion.",
    desc:
      "One small MGSC mark, centre chest. No goat, no slogan, no bit. For days you want the club without the commentary. Garment-dyed Comfort Colors heavyweight that softens with every wash. Seven colours, and despite the name, most of them are not black.",
  },
  "mountain-goat-trail-hiker-tee": {
    name: "Slow Hiking Society Tee",
    tag: "New",
    blurb: "The club where we only hike when our friends force us.",
    desc:
      "The official Slow Hiking Society crest: one goat, sunglasses, full pack, zero urgency. No dues, no meetings. If a friend dragged you up a hill this year, you are already a member. Garment-dyed cotton, printed when you order.",
  },
  "professional-hiker": {
    blurb: "Two hundred feet in. Calling it a summit.",
    desc:
      "Professional is a strong word. It is, however, on the shirt, and nobody at the trailhead is checking credentials. The crest reads guiding people 20 feet up and back since whenever, which is roughly accurate.",
  },
  "coffee-lover": {
    blurb: "The hike starts after the second cup.",
    desc:
      "A goat, a mug, a mountain it has no immediate plans to climb. Caffeine-fuelled peak performance with zero urgency. For hikers whose turnaround point is wherever the thermos runs out.",
  },
  "wild-places-good-times": {
    tag: "New",
    blurb: "Better with a banjo and a bad decision.",
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
    blurb: "A trail and no signal. That is the whole plan.",
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
