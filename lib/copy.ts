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
  kind?: string;
};

export const COPY: Record<string, Copy> = {
  /* Sincere by design. The artwork is a genuinely nice night sky and the
     shirt means what it says, so the copy plays it straight. Undercutting
     your own product with a joke it isn't making just confuses the buyer. */
  /* The design reads I LOVE SEEING BIG NATURALS over a mountain range. The
     joke only works if the copy plays it completely straight, so it does. */
  "big-naturals": {
    tag: "New",
    blurb: "It is a mountain range, and we will not be taking questions.",
    desc:
      "<p>A wide valley, a calm lake, two extremely large mountains. That is the whole picture and we stand by it.</p><p>If somebody reads something else into it, that is a them problem, and you get to say so with a completely straight face. Garment-dyed Comfort Colors cotton in nine colours.</p>",
  },
  "quiet-moments": {
    tag: "New",
    blurb: "We make a lot of jokes, but this one is just a genuinely nice night sky.",
    desc:
      "Look up, get lost, find peace. Stay wild, stay present. We sell a lot of shirts that take the mickey out of hiking, and then there is this one, which does not. Some nights on a trail are exactly as good as people say they are. Garment-dyed Comfort Colors cotton.",
  },
  "hide-and-seek-champion": {
    tag: "New",
    blurb: "Undefeated since 1967, and every photograph of him is still out of focus.",
    desc:
      "Nearly sixty years unbeaten and the only surviving footage is out of focus, which is either evidence of nothing or the greatest defensive performance in the history of the sport. Bigfoot, full pack, mid-stride, going wherever he likes. Printed on garment-dyed cotton.",
  },
  /* Artwork check, August 2026: the design reads TRULY ONE WITH NATURE over a
     walking bear with a skeleton hiker curled up inside it. The old copy here
     described a caption the shirt no longer carries. */
  "an-honest-mistake-was-made": {
    tag: "New",
    blurb: "A skeleton hiker riding inside a bear, filed under becoming one with nature.",
    desc:
      "The hiker is inside the bear, boots up, pack still on, entirely at peace. The bear is walking on like nothing happened. The caption calls this being truly one with nature, which is technically correct and not remotely reassuring.",
  },
  "this-is-technically-outdoors": {
    tag: "New",
    blurb: "A goat floating on a rubber duck ring, which is still outdoors if you think about it.",
    desc:
      "Snorkel mask, rubber duck ring, one goat committing to a swim with no intention of hiking anywhere afterwards. Nobody said the outdoors had to involve elevation. For people whose summer plans peak at a lake and stay there.",
  },
  "minimal-black-comfort-colors-tee": {
    name: "The Quiet One",
    blurb: "Just the logo, small, for days you would rather not explain a shirt to anybody.",
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
    blurb: "A certificate nobody issued, for hiking two hundred feet and calling it a summit.",
    desc:
      "<p>A certified professional hiker, according to the only body that issues the certificate, which is us.</p><p>Professional is a strong word. It is, however, on the shirt, and nobody at the trailhead is checking credentials. Garment-dyed Comfort Colors cotton.</p>",
  },
  "coffee-lover": {
    blurb: "Snacks first and summits later, which in practice tends to mean summits never.",
    desc:
      "<p>Snacks first, summits later. The goat has a mug, a view and no intention of moving.</p><p>For hikers whose real turnaround point is wherever the thermos runs out. Garment-dyed Comfort Colors cotton.</p>",
  },
  "wild-places-good-times": {
    tag: "Staff pick",
    blurb: "A goat playing banjo, because every hike improves with one bad idea in it.",
    desc:
      "Nine colours, which is more decisions than we usually make in a day. Garment-dyed cotton that softens with every wash and every trip you nearly cancelled.",
  },
  "g-o-a-t-hiker": {
    blurb: "A dictionary entry for the friend who climbs things they shouldn't and snacks aggressively.",
    desc:
      "<p>A straight dictionary entry for a kind of hiker everybody has met. Climbs things they shouldn't, snacks aggressively, stands on ledges nobody asked them to stand on.</p><p>If you recognise yourself in the definition, the shirt is not an accusation. It is closer to a name tag. Garment-dyed Comfort Colors cotton.</p>",
  },
  "worst-case-scenario": {
    blurb: "The worst that happens is a bear kills you, so everything under that is fine.",
    desc:
      "Trail anxiety gets easier once you name the ceiling. Either a bear gets you or it doesn't. Everything under that line is mosquitoes and a wet sock. The bear on the shirt is giving a thumbs up next to a sign reading nature doesn't care about your feelings.",
  },
  "bear-encounter-checklist": {
    blurb: "A four step checklist that gives up and turns into regret somewhere around step three.",
    desc:
      "<p>Stay calm. Back away. Question your life choices. Remember that you chose hiking.</p><p>The bear is holding the clipboard, which tells you who set the agenda. Verdict at the bottom of the list reads probably fine. Garment-dyed Comfort Colors cotton.</p>",
  },
  "bear-safety-stay-calm": {
    blurb: "Real advice, right up until it explains that panicking only makes the last few minutes worse.",
    desc:
      "<p>The shirt opens with real bear safety guidance and then quietly finishes the thought. Panicking, it explains, only makes your last few minutes worse.</p><p>Correct in every particular and comforting in none of them. Garment-dyed Comfort Colors cotton.</p>",
  },
  "just-outrun-your-buddy": {
    blurb: "You never had to outrun the bear, only the friend who invited you.",
    desc:
      "You don't need to be fast. You need to be slightly less slow than whoever invited you. Wearing it up front keeps the terms clear at the trailhead.",
  },
  "mountain-g-o-a-t-essential-tee": {
    tag: "Staff pick",
    blurb: "The logo, the goat and the whole argument on one shirt.",
    desc:
      "Garment-dyed heavyweight cotton. Softens every trip, hides most of a granola bar, and outlasts the enthusiasm that made you buy it. This is the one we actually wear.",
  },
  "mountain-g-o-a-t-psychedelic": {
    blurb: "Hour six, no water left, and the mountain has started doing things.",
    desc:
      "Somewhere past the fourth false summit the colours go sideways. We had an artist draw what that looks like. Nobody who has finished a long descent has argued with it.",
  },
  /* The Over Elevated Club line. The artwork is one arched wordmark, so the
     joke lives in the copy playing the club completely straight.

     Specs below are checked against the Fourthwall blanks, August 2026:
       tee    Comfort Colors garment-dyed heavyweight, DTG print, 8 colours
       cap    Yupoong 6245CM dad hat, chino twill, EMBROIDERED, buckle, 10 colours
       bucket Big Accessories BX003, cotton twill, PRINTED (not stitched), 2 colours
       flask  Allcolor 1020, 17oz double-walled steel, screw cap, 6h, hand wash
     Do not describe the bucket hat as embroidered. It is a print. */
  "over-elevated-tee": {
    tag: "New",
    kind: "TEE",
    blurb: "Membership shirt for people who climbed higher than the plan said and have opinions about it now.",
    desc:
      "<p>Small chest mark, big claim. The Over Elevated Club is for anybody who went further up than intended and then pretended that was the plan all along.</p><p>No initiation, no fees. If your ears have ever popped on a walk, you are in. Garment-dyed heavyweight cotton in eight colours.</p>",
  },
  "over-elevated-cap": {
    tag: "New",
    kind: "CAP",
    blurb: "An embroidered hat that admits you went too far up and would do it again.",
    desc:
      "<p>The club wordmark stitched onto an unstructured low profile dad hat. Brim low on the way up, lower on the way down.</p><p>Cotton twill, buckle strap at the back, one size that fits most heads. Ten colours.</p>",
  },
  "over-elevated-bucket-hat": {
    tag: "New",
    kind: "HAT",
    blurb: "Sun off your face, and a public admission that you peaked in the geographic sense.",
    desc:
      "<p>A bucket hat does two things. It keeps the sun off your face and it announces that you have stopped caring what the sun thinks of your outfit.</p><p>Cotton twill with the club wordmark printed up front, a two and a quarter inch brim, and sewn eyelets so your head can breathe. Two colours, one size, zero aerodynamics.</p>",
  },
  "over-elevated-club-hydration-flask": {
    tag: "New",
    kind: "FLASK",
    blurb: "Cold water at altitude, which is the entire membership benefit.",
    desc:
      "<p>Seventeen ounces of double-walled stainless steel with a screw-on leak-proof cap. Holds a temperature for about six hours, hot or cold.</p><p>Slim enough for a cup holder on the drive to the trailhead, which is where a good deal of our hydration happens. Hand wash only.</p>",
  },
  "the-minimalist": {
    tag: "Staff pick",
    blurb: "The only shirt we make with nothing written on it.",
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
