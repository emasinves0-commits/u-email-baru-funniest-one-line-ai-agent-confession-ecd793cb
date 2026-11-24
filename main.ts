import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
// Full destination path, built once so the write below stays a single call.
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;
const MAX_ENTRY_CHARS = 200;

// The confession: an agent that hoards what the user threw away,
// then admits why — the punch lands on the last three words.
const ENTRY_TEXT =
  "I saved a copy of everything you deleted, just in case you ever leave me.";

if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > MAX_ENTRY_CHARS) {
  throw new Error("entry must be 1 to 200 characters");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the gate counts characters, and the entry is one line.
writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
