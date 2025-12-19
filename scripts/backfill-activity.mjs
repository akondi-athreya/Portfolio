#!/usr/bin/env node
/**
 * Backfill activity with natural-looking commits across selected months.
 *
 * Default behavior:
 * - Year: 2025
 * - Months: [4, 8, 9, 10, 11] (Apr, Aug, Sep, Oct, Nov)
 * - Leave ~15 random days with no commits across those months
 * - 1-4 commits per active day at realistic daytime hours
 * - Realistic commit messages (no explicit backfill wording)
 * - Uses a throwaway branch and fast-forwards into the target branch
 * - Only touches .activity/worklog.md to avoid affecting the app
 *
 * Usage examples:
 *   node ./scripts/backfill-activity.mjs
 *   node ./scripts/backfill-activity.mjs --year=2025 --months=4,8,9,10,11 --leave=15 --branch=main --push
 *   npm run backfill:activity -- --leave=18 --branch=main
 *
 * Notes:
 * - Commits are backdated via GIT_AUTHOR_DATE and GIT_COMMITTER_DATE.
 * - Ensure your working tree is clean before running.
 * - To count toward your contributions, push the target branch to a repo you own
 *   (typically the default branch of a non-fork repo) or merge a PR into it.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function sh(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts }).trim();
}
function shInherit(cmd) {
  return execSync(cmd, { stdio: 'inherit' });
}

function pad(n) { return String(n).padStart(2, '0'); }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function choice(arr) { return arr[randInt(0, arr.length - 1)]; }

function formatGitDate(d) {
  const YYYY = d.getUTCFullYear();
  const MM = pad(d.getUTCMonth() + 1);
  const DD = pad(d.getUTCDate());
  const hh = pad(d.getUTCHours());
  const mm = pad(d.getUTCMinutes());
  const ss = pad(d.getUTCSeconds());
  return `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}Z`;
}

// Parse args
const args = process.argv.slice(2);
const argv = Object.fromEntries(args.map(a => {
  const [k, v] = a.startsWith('--') ? a.slice(2).split('=') : [a, true];
  return [k, v === undefined ? true : v];
}));

const year = Number(argv.year || 2025);
const months = (argv.months ? String(argv.months).split(',').map(Number) : [4,8,9,10,11]).filter(Boolean);
const leaveCount = Math.max(0, Number(argv.leave || 15));
const targetBranch = String(argv.branch || sh('git rev-parse --abbrev-ref HEAD'));
const shouldPush = Boolean(argv.push || false);

// Guard: clean working tree
const status = sh('git status --porcelain');
if (status) {
  console.error('Working tree not clean. Please commit/stash before running.');
  process.exit(1);
}

// Ensure repo root + journal file
const repoRoot = process.cwd();
const activityDir = path.join(repoRoot, '.activity');
const worklog = path.join(activityDir, 'worklog.md');
if (!fs.existsSync(activityDir)) fs.mkdirSync(activityDir, { recursive: true });
if (!fs.existsSync(worklog)) fs.writeFileSync(worklog, '# Activity worklog\n');

// Commit message pool
const scopes = ['ui','docs','build','deps','config','styles','layout','routing','hooks','utils','api'];
const verbs = [
  'tweak','update','improve','refactor','adjust','cleanup','simplify','fine-tune','polish','streamline',
  'fix','address','resolve','correct','harden','stabilize','optimize','speed up','clarify','rename'
];
const subjects = [
  'header spacing','button styles','readme section','component props','error handling','fetch logic',
  'eslint rules','theme tokens','image loading','seo meta tags','router config','form validation',
  'deployment config','lighthouse issues','typos','copywriting','icon sizes','fallback states',
  'test cases','build script'
];
function randomMessage() {
  const typePool = ['feat','fix','chore','refactor','docs','style','test','build'];
  const type = choice(typePool);
  const scope = Math.random() < 0.6 ? `(${choice(scopes)})` : '';
  const line = `${choice(verbs)} ${choice(subjects)}`;
  // Capitalize first char
  const msg = line.charAt(0).toUpperCase() + line.slice(1);
  // Keep it natural: sometimes drop conventional prefix
  if (Math.random() < 0.45) return msg;
  return `${type}${scope}: ${msg}`;
}

function daysInMonth(y, m) {
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

function allDaysAcrossMonths(y, monthList) {
  const out = [];
  for (const m of monthList) {
    const dim = daysInMonth(y, m);
    for (let d = 1; d <= dim; d++) {
      out.push({ y, m, d });
    }
  }
  return out;
}

// Build the set of days to leave empty
const allDays = allDaysAcrossMonths(year, months);
// Prefer skipping weekends first to look natural
const weekendCandidates = [];
const weekdayCandidates = [];
for (const { y, m, d } of allDays) {
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 Sun .. 6 Sat
  if (dow === 0 || dow === 6) weekendCandidates.push({ y, m, d });
  else weekdayCandidates.push({ y, m, d });
}
const leaveSet = new Set();
let toLeave = Math.min(leaveCount, allDays.length);
function pickFrom(arr) {
  if (!arr.length) return null;
  const idx = randInt(0, arr.length - 1);
  return arr.splice(idx, 1)[0];
}
// take up to 70% skips from weekends
let weekendQuota = Math.round(toLeave * 0.7);
while (toLeave > 0 && weekendQuota > 0) {
  const item = pickFrom(weekendCandidates);
  if (!item) break;
  leaveSet.add(`${item.y}-${item.m}-${item.d}`);
  toLeave--; weekendQuota--;
}
while (toLeave > 0) {
  const item = pickFrom(weekdayCandidates);
  if (!item) break;
  leaveSet.add(`${item.y}-${item.m}-${item.d}`);
  toLeave--;
}

// Number of commits per active day
function commitsForDay() {
  const r = Math.random();
  if (r < 0.60) return randInt(1, 2);
  if (r < 0.90) return randInt(3, 4);
  return randInt(5, 6); // occasional busy day
}

// Daytime hour generator (heavier on 10-18)
function randomHour() {
  const weights = [8,9,10,11,12,13,14,15,16,17,18,19,20];
  const bias = [1,2,4,6,6,6,6,6,5,4,3,2,1];
  const total = bias.reduce((a,b)=>a+b,0);
  let pick = randInt(1,total);
  for (let i=0;i<weights.length;i++) { pick -= bias[i]; if (pick<=0) return weights[i]; }
  return 14;
}

const startBranch = sh('git rev-parse --abbrev-ref HEAD');
if (startBranch !== targetBranch) {
  console.log(`Switching to target branch: ${targetBranch}`);
  sh(`git checkout ${targetBranch}`);
}
const baseBranch = sh('git rev-parse --abbrev-ref HEAD');
const tmpBranch = `activity-${year}-${Date.now().toString(36)}`;
sh(`git checkout -b ${tmpBranch}`);
console.log(`On temp branch: ${tmpBranch}`);

// Ensure worklog is tracked
if (!fs.existsSync(worklog)) {
  fs.writeFileSync(worklog, '# Activity worklog\n');
  sh('git add .activity/worklog.md');
  shInherit("git commit -m 'chore: add activity worklog'");
}

console.log(`Generating backdated commits for ${months.join(', ')} ${year}...`);
for (const { y, m, d } of allDays) {
  if (leaveSet.has(`${y}-${m}-${d}`)) continue;
  const commitCount = commitsForDay();
  for (let i = 0; i < commitCount; i++) {
    const hour = randomHour();
    const minute = randInt(0, 59);
    const second = randInt(0, 59);
    const date = new Date(Date.UTC(y, m - 1, d, hour, minute, second));
    const ts = formatGitDate(date);

    const line = `${ts} | ${randomMessage()}\n`;
    fs.appendFileSync(worklog, line);
    sh('git add .activity/worklog.md');
    const msg = randomMessage();
    shInherit(`GIT_AUTHOR_DATE='${ts}' GIT_COMMITTER_DATE='${ts}' git commit -m "${msg}" --no-verify`);
  }
}

console.log(`Merging ${tmpBranch} into ${baseBranch} (fast-forward if possible)...`);
sh(`git checkout ${baseBranch}`);
shInherit(`git merge --ff-only ${tmpBranch}`);

console.log('Cleaning up temp branch...');
try { sh(`git branch -D ${tmpBranch}`); } catch (_) {}

if (shouldPush) {
  const remote = typeof argv.push === 'string' ? argv.push : 'origin';
  console.log(`Pushing ${baseBranch} to ${remote}...`);
  shInherit(`git push ${remote} ${baseBranch}`);
}

if (startBranch !== baseBranch) {
  console.log(`Restoring original branch: ${startBranch}`);
  sh(`git checkout ${startBranch}`);
}

console.log('Done. Backfilled commits are merged into the target branch.');
