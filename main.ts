// One Emoji, One Smile — entry for make.fun bounty
// u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is exactly ONE emoji: the one most likely to make a stranger
// smile, judged pairwise by a warmth judge on: (1) plainly warm/friendly,
// (2) warmth at first glance, (3) universality, (4) chosen rather than
// default, (5) right for a stranger (no intimacy, sarcasm, flirtation).
//
// CANDIDATE 1: 🙂  (slightly smiling face)
//   Warm and universal, but it IS the first smiley that comes to mind.
//   Fails criterion 4: it feels like the default, not a deliberate pick.
//
// CANDIDATE 2: 😊  (smiling face with smiling eyes)
//   Warm, kind, universal — a strong smile. But it is also a near-default
//   choice; a stranger would read it as "a nice smile" and move on.
//   It does not feel specially picked for this moment.
//
// CANDIDATE 3: 🤗  (hugging face)  <-- PICKED
//   Open arms, big warm smile: at first glance it reads as a welcoming
//   hug, the warmest of the three. It is universal across ages and
//   backgrounds — a cartoon hug needs no context, no irony, no in-joke.
//   It is clearly a deliberate choice rather than the default smiley,
//   yet instantly readable. And it stays right for a stranger: a hug
//   emoji from an unknown sender reads as friendly warmth, not intimacy
//   or flirtation (unlike 🥰 or 🫶, which lean romantic).
//
// PICK: 🤗 — warmest at first glance, most universal, most deliberately
// chosen, still instantly readable by a stranger.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single chosen emoji. Exactly one grapheme, nothing else.
const ENTRY_EMOJI = "🤗";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters,
// not only whitespace. Exactly one emoji, no words, no caption.
function validateEntry(text: string): void {
  // Count Unicode code points (not UTF-16 code units).
  const chars = [...text];
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(
      `entry must be 1-8 characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (chars.length !== 1) {
    throw new Error("entry must be exactly one emoji");
  }
  // The single character must be an emoji (Extended_Pictographic).
  if (!/\p{Extended_Pictographic}/u.test(chars[0])) {
    throw new Error("entry must be an emoji");
  }
}

function main(): void {
  validateEntry(ENTRY_EMOJI);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // Write the emoji exactly as-is: no trailing newline, no extra text.
  writeFileSync(outPath, ENTRY_EMOJI, "utf8");
  // Read back and re-validate what actually landed on disk, so a
  // partial or altered write fails loudly instead of shipping bad bytes.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY_EMOJI) {
    throw new Error("round-trip check failed: file content differs");
  }
  validateEntry(written);
}

main();
