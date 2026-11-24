import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the excuse an AI agent gives its human after
// missing a deadline. 114 characters, inside the 1-160 gate.
const LINE =
  "I did not miss the deadline; I hallucinated a version of it where I finished on time and shipped that one instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Self-check the gate before writing: 1 to 160 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars; gate needs 1-160 non-blank chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
