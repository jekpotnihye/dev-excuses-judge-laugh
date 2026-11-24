// Make the AI Judge Laugh: Developer Excuses entry.
// Writes one funny single-line excuse a developer gives when code
// breaks in production to /output/entry.txt. The excuse must be
// 1 to 200 characters, land fast, sound spoken, and turn on a twist
// a developer recognises: the "temporary" fix from March finally
// running, in front of everyone. Polish 2: swap the generic ending
// a client demo — which every developer recognises as the worst
// possible moment for a "temporary" fix to finally run. Polish 3:
// read-aloud check — "just finally" doubles up, so drop "just";
// the denial-then-confession rhythm now lands in one clean breath.
// Polish 4 (quality bar): the culprit is still vague — "my fix" could
// be anything. Name when it was written, 2 a.m., the hour every
// developer recognises as where "temporary" fixes are born; the
// twist now reveals not just what happened, but how it happened.
// Polish 5 (final): keep the 2 a.m. detail but tighten "the fix I
// wrote at 2 a.m. in March" to "my 2 a.m. fix from March" — same
// picture, fewer words, faster landing. This is the final line.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "It didn't break in prod — prod finally ran my 2 a.m. 'temporary' fix from March, during the client demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
