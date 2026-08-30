/* ============================================================
   MGSC COPY LAYER

   Catalog is live from Fourthwall. This file is the part a
   machine can't supply: the voice.

   Rules that keep this from sounding generated:
   - Not every line is a punchline. Some are just facts.
   - No trailing ", which .." ironic qualifiers.
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
  /* The design reads I LOVE SEEING BIG NATURALS over a mountain range. The
     joke only works if the copy plays it completely straight, so it does. */
  "big-naturals": {
    tag: "New",
    blurb: "It's the mountains. Obviously it's the mountains.",
    desc:
      "<p>A wide valley, a calm lake, two extremely large mountains. That is the whole picture and we stand by it.</p><p>If somebody reads something else into it, that is a them problem, and you get to say so with a completely straight face. Garment-dyed Comfort Colors cotton in nine colours.</p>",
  },
  "quiet-moments": {
    tag: "New",
    blurb: "No joke on this one. Just a good night sky.",
    desc:
      "Look up, get lost, find peace. Stay wild, stay present. We sell a lot of shirts that take the mickey out of hiking, and then there is this one, which does not. Some nights on a trail are exactly as good as people say they are. Garment-dyed Comfort Colors cotton.",
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
  "slow-hiking-society": {
    tag: "Staff pick",
    blurb: "The club where we only hike when our friends force us.",
    desc:
      "<p>The official Slow Hiking Society crest. One goat, sunglasses, full pack, zero urgency. The club where we only hike when our friends force us.</p><p>No dues, no meetings, no minimum pace. If somebody dragged you up a hill this year, you are already a member. Garment-dyed Comfort Colors cotton.</p>",
  },
  "professional-hiker": {
    blurb: "Two hundred feet in. Calling it a summit.",
    desc:
      "<p>A certified professional hiker, according to the only body that issues the certificate, which is us.</p><p>Professional is a strong word. It is, however, on the shirt, and nobody at the trailhead is checking credentials. Garment-dyed Comfort Colors cotton.</p>",
  },
  "coffee-lover": {
    blurb:
      "Snacks first. Summits later. Possibly never.",
    desc:
      "<p>Snacks first, summits later. The goat has a mug, a view and no intention of moving.</p><p>For hikers whose real turnaround point is wherever the thermos runs out. Garment-dyed Comfort Colors cotton.</p>",
  },
  "wild-places-good-times": {
    tag: "Staff pick",
    blurb: "Better with a banjo and a bad decision.",
    desc:
      "Nine colours, which is more decisions than we usually make in a day. Garment-dyed cotton that softens with every wash and every trip you nearly cancelled.",
  },
  "g-o-a-t-hiker": {
    blurb:
      "Climbs things it shouldn't. Snacks aggressively.",
    desc:
      "<p>A straight dictionary entry for a kind of hiker everybody has met. Climbs things they shouldn't, snacks aggressively, stands on ledges nobody asked them to stand on.</p><p>If you recognise yourself in the definition, the shirt is not an accusation. It is closer to a name tag. Garment-dyed Comfort Colors cotton.</p>",
  },
  "worst-case-scenario": {
    blurb: "A bear kills you. Everything else is fine.",
    desc:
      "Trail anxiety gets easier once you name the ceiling. Either a bear gets you or it doesn't. Everything under that line is mosquitoes and a wet sock. Two colour print on garment-dyed cotton.",
  },
  "bear-encounter-checklist": {
    blurb:
      "Four steps. The last two are just regret.",
    desc:
      "<p>Stay calm. Back away. Question your life choices. Remember that you chose hiking.</p><p>The bear is holding the clipboard, which tells you who set the agenda. Verdict at the bottom of the list reads probably fine. Garment-dyed Comfort Colors cotton.</p>",
  },
  "bear-safety-stay-calm": {
    blurb:
      "Sound advice, right up until the second half.",
    desc:
      "<p>The shirt opens with real bear safety guidance and then quietly finishes the thought. Panicking, it explains, only makes your last few minutes worse.</p><p>Correct in every particular and comforting in none of them. Garment-dyed Comfort Colors cotton.</p>",
  },
  "just-outrun-your-buddy": {
    blurb: "Everyone's plan. Nobody's out loud.",
    desc:
      "You don't need to be fast. You need to be slightly less slow than whoever invited you. Wearing it up front keeps the terms clear at the trailhead.",
  },
  "mountain-g-o-a-t-essential-tee": {
    tag: "Staff pick",
    blurb: "The logo, the goat, the whole argument.",
    desc:
      "Garment-dyed heavyweight cotton. Softens every trip, hides most of a granola bar, and outlasts the enthusiasm that made you buy it. This is the one we actually wear.",
  },
  "mountain-g-o-a-t-psychedelic": {
    blurb: "Hour six. No water. The mountain starts doing things.",
    desc:
      "Somewhere past the fourth false summit the colours go sideways. We had an artist draw what that looks like. Nobody who has finished a long descent has argued with it.",
  },
  "the-minimalist": {
    tag: "Staff pick",
    blurb:
      "The one with nothing written on it.",
    desc:
      "<p>Line art mountains, a small sun, a path heading off somewhere. No slogan, no punchline, no opinion.</p><p>We had to make one eventually. Wear it on days you would rather not explain a shirt to anybody. Garment-dyed Comfort Colors cotton.</p>",
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
