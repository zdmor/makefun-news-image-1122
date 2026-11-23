// news-image-20261122 entrypoint (Node 22, standard library only).
//
// The finished infographic ships in this repository as entry.png, a
// 1024x1024 image rendered from index.html. This program's only job is to
// place an exact copy of it at <output>/entry.png, where <output> is the
// grader's /output directory, or MAKEFUN_OUTPUT_DIR when set (local runs).
// Copying bytes keeps the two graded runs byte-identical by construction.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.length > 0) return fromEnv;
  return '/output';
}

function repoDir(): string {
  return dirname(fileURLToPath(import.meta.url));
}

const target = outputDir();
mkdirSync(target, { recursive: true });
const image = readFileSync(join(repoDir(), 'entry.png'));
writeFileSync(join(target, 'entry.png'), image);
