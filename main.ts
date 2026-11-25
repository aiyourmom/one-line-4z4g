// One Line, One Laugh (u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
// Writes a single funny line to /output/entry.txt (gate: 1-140 chars, one line).
// Judge: stand-up comedy editor, pairwise. Criteria in order:
// (1) one funny line, whole and self-contained; (2) real laugh - turn/surprise/twist;
// (3) tight, every word earning its place; (4) fresh; (5) clear on first read.
//
// 3 candidates (written first, then picked):
// A (122 chars): "My phone's screen time report said I spent 6 hours on social media — I checked it 14 times just to make sure it was wrong."
//    - Rejected: the self-own logic is elegant (re-checking 14 times proves the report right),
//      but the screen-time-report premise is very common in one-liner fields.
// B (82 chars): "I bought a standing desk to be healthier — now I just sit on the floor next to it."
//    - Rejected: shortest and tightest, visual turn, but the laugh is gentle - more observation
//      than a real twist (weak on criterion #2).
// C (CHOSEN): "I told my therapist I talk to my plants — she said that's fine, it's the plants filing for a restraining order that worries her."
//    - Biggest surprise: the payoff reframes the whole premise (the plants are the ones with a
//      problem, not me). One breath, clear, no setup wasted. The "talk to my plants" setup is
//      familiar, but the restraining-order twist is not a standard punchline for it.
// NOTE: NOT reusing entry #107's text ("...playing Despacito...") or any other of our micro
// entries - this is a fresh line for a different competition.

import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I told my therapist I talk to my plants — she said that's fine, it's the plants filing for a restraining order that worries her.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard (added as a separate edit): the sealed scorer requires
// 1-140 UTF-8 characters, one line, not only whitespace.
if (ENTRY.includes("\n") || ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
