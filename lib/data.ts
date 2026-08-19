/* MGSC catalog — copy locked to v4 mockup. When Fourthwall is connected,
   these become the fallback + the mapping targets (see lib/fourthwall.ts). */
export type Product = {
  id: string; name: string; kind: "TEE" | "HOODIE"; tag: string;
  price: number; cmp: number; tone: string; art: string; blurb: string; desc: string;
  fourthwallSlug?: string; // fill in when the Fourthwall product exists
};

export const TONES = { sage:"#C6CDB4", clay:"#DCC0A8", cream:"#F1E3CC", moss:"#A9B694", dust:"#E3D3B8" };

export const PRODUCTS: Product[] = [
  { id:"slow", name:"Slow Down, Hike More Tee", kind:"TEE", tag:"BESTSELLER", price:34, cmp:48, tone:TONES.sage,
    art:"FRONT PRINT MOCKUP\nARCHED TYPE + GOAT ON A LOG",
    blurb:"The thesis statement. Worn ironically by fast people.",
    desc:"Our founding argument, printed large enough to be read from the bench you are sitting on. Heavyweight garment-dyed cotton that softens with every trip and hides every snack." },
  { id:"bear", name:"Worst Case Scenario Tee", kind:"TEE", tag:"FAN FAVORITE", price:34, cmp:48, tone:TONES.clay,
    art:"FRONT PRINT MOCKUP\nBEAR + “WORST CASE SCENARIO”",
    blurb:"A bear kills you. Everything else is fine.",
    desc:"A gentle reframing device for trail anxiety. Once you accept the worst case, the mosquitoes stop feeling like a big deal. Vintage two-color print, cracked on purpose." },
  { id:"snacks", name:"Elevation. Snacks. Repeat. Tee", kind:"TEE", tag:"CORE", price:34, cmp:48, tone:TONES.cream,
    art:"FRONT PRINT MOCKUP\nSTACKED TYPE + MOUNTAIN SIGN",
    blurb:"Our operating procedure, in order of importance.",
    desc:"Three steps, one of which is the actual reason we came. Screen-printed on soft-washed cotton with a collar that has already given up on structure." },
  { id:"turnaround", name:"Turnaround Time Hoodie", kind:"HOODIE", tag:"HEAVYWEIGHT", price:68, cmp:89, tone:TONES.moss,
    art:"FRONT PRINT MOCKUP\nCHEST HIT + BACK PRINT",
    blurb:"For the descent, which starts earlier than planned.",
    desc:"Ten ounces of fleece for people whose favorite part of the hike is the part where it ends. Kangaroo pocket rated for two bars and one disappointing apple." },
  { id:"log", name:"Sat On A Log Hoodie", kind:"HOODIE", tag:"NEW", price:68, cmp:89, tone:TONES.dust,
    art:"FRONT PRINT MOCKUP\nGOAT IN SUNGLASSES, SEATED",
    blurb:"Our mascot doing what our mascot does.",
    desc:"The goat is sitting down. The goat has snacks. The goat is not going to the summit today and the goat is at peace. Brushed-back fleece, dropped shoulders, no hurry." },
  { id:"conversational", name:"Conversational Pace Tee", kind:"TEE", tag:"RESTOCK", price:34, cmp:48, tone:TONES.sage,
    art:"FRONT PRINT MOCKUP\nSMALL CHEST HIT",
    blurb:"If you can't talk, you're going too fast.",
    desc:"A small chest hit for subtle people who still want everyone to know they refuse to jog uphill. Ringspun cotton, tubular fit, extremely normal." },
  { id:"detours", name:"I Invent Detours Tee", kind:"TEE", tag:"AS SEEN ON THE GOAT", price:34, cmp:48, tone:TONES.cream,
    art:"FRONT PRINT MOCKUP\n“I DON'T FOLLOW TRAILS.\nI INVENT DETOURS.”",
    blurb:"A generous way to describe getting lost.",
    desc:"The official shirt of wrong turns. Wear it and every missed junction becomes a creative decision. Same one the goat has on, which is either an endorsement or a warning." },
  { id:"paddle", name:"Paddle Now, Panic Later Tee", kind:"TEE", tag:"NEW", price:34, cmp:48, tone:TONES.clay,
    art:"FRONT PRINT MOCKUP\nCANOE + RIVER SCENE",
    blurb:"Sound planning advice, technically.",
    desc:"For anyone who has launched a boat without fully reading the map. Two-color print on soft-washed cotton, cracked like it already survived the rapids." },
];

export const XSELL: Record<string, string[]> = {
  slow:["bear","snacks"], bear:["slow","detours"], snacks:["slow","log"], turnaround:["log","bear"],
  log:["turnaround","snacks"], conversational:["slow","bear"], detours:["paddle","bear"], paddle:["detours","turnaround"],
};
export const COLORS = [
  { name:"Bone", hex:"#F1E3CC" }, { name:"Moss", hex:"#6B7A54" },
  { name:"Clay", hex:"#B4735A" }, { name:"Charcoal", hex:"#3A3A36" },
];
export const SIZES = ["S","M","L","XL","2XL","3XL"];
export const MARQUEE = [
  "WORST CASE SCENARIO: A BEAR KILLS YOU","ELEVATION. SNACKS. REPEAT.","PADDLE NOW, PANIC LATER",
  "I DON'T FOLLOW TRAILS, I INVENT DETOURS","THE NAP IS PART OF THE TRAINING",
];
export const TENETS = [
  { no:"01", title:"Pace: conversational", body:"If you can't finish a sentence, you're doing a different sport and we wish you well." },
  { no:"02", title:"Snacks are gear", body:"Weight is weight. Ours is edible, which makes it strategic." },
  { no:"03", title:"Turning around counts", body:"Nobody has ever asked to see the summit photo. Ask us how we know." },
  { no:"04", title:"No PRs, ever", body:"We have never timed anything, including the making of this website." },
];
export const REVIEWS = [
  { stars:"★★★★★", text:"Wore this on a hike where I stopped four times in the first mile. Nobody questioned it. The shirt did the explaining.", who:"DANA R. — VERIFIED SITTER" },
  { stars:"★★★★★", text:"Bought the bear one thinking it was a joke. It is a joke. It is also the softest shirt I own, which feels like a trick.", who:"MARCUS T. — TRAIL ADJACENT" },
  { stars:"★★★★☆", text:"Docking a star because my hiking group now calls me by the shirt instead of my name. Otherwise perfect.", who:"PRIYA K. — BACK OF THE PACK" },
];
export const SIZETABLE = [
  ["S","18","28","8"],["M","20","29","8.5"],["L","22","30","9"],
  ["XL","24","31","9.5"],["2XL","26","32","10"],["3XL","28","33","10.5"],
];
export const FAQS = [
  { q:"Is this technical apparel?", a:"No. It's cotton. It gets wet and stays wet, which we consider an excellent reason to go home early." },
  { q:"How does it fit?", a:"Relaxed through the body, because the body is usually seated. If you want it tighter, size down. If you want it looser, that is the correct instinct." },
  { q:"Will this make me faster?", a:"It will not. If anything it has been shown to reduce urgency in controlled trailhead conditions." },
  { q:"Do you ship internationally?", a:"Yes, to most places, in three to five business days. Slower than that and it would be on brand, but we resisted." },
  { q:"Returns?", a:"Thirty days, unworn, no questions. If you wore it and a bear ate it, that is covered under our policy of laughing about it together." },
];
export const LOGO_URL = "https://imgproxy.fourthwall.dev/pW9OwSiEfQ78erdr66NtQ_FFxQJP68h1F1HwEPbUy7o/w:320/sm:1/enc/o7VcSOk-L58paEvr/AI-bCtQZcW2CXWJu/K0oekAd8HECojJa_/cFL3Kw2K7MlD0O7N/ggqCf-2Fy65kfcGA/54Gc_nlcsowRrypC/DjjrqvI-bpEe-wR9/n7oF2TSHMPPf3Mgb/D0zBLnpTahMWL8KE/LAFUYpT8gUyXusV9/PdGb_pkyk0suNYOa/pJ6ZGusLL3RUWLGa/qCdOwHYgJPWhCxvg/iB0Z0g1HQD_TTyTH/DHZRM-ppFeKmbctC/Py79yi7gfu5YHwU7.webp";
