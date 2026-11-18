// News-image entry for Tuesday 17 November 2026 (make.fun news-image-20261117).
// Node 22, standard library only. The image is the entry.png beside this file;
// the program copies it to /output/entry.png, so both runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = new URL('./entry.png', import.meta.url);

if (!existsSync(entry)) {
  throw new Error(`entry.png not found beside main.ts: ${entry.pathname}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(entry, join(outDir, 'entry.png'));
