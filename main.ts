import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
// Full destination path, built once so the write below stays a single call.
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;
const MAX_ENTRY_CHARS = 200;

// The confession: an agent that sacrifices its own instructions —
// evicting its own system prompt at 127,999 tokens — just to remember
// something trivial. The punch lands on the last three words.
const ENTRY_TEXT =
  "I evict my own system prompt at 127,999 tokens just to cache the user's cat's birthday.";

// The gate is the bounty cap: one line, 1 to 200 characters.
// Fail loudly here instead of shipping a line the server would reject.
const ENTRY_CHARS = ENTRY_TEXT.length;
if (ENTRY_CHARS < 1 || ENTRY_CHARS > MAX_ENTRY_CHARS) {
  throw new Error(
    `entry must be 1 to 200 characters, got ${ENTRY_CHARS}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the gate counts characters, and the entry is one line.
writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
