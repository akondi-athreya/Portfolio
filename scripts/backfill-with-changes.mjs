#!/usr/bin/env node
/**
 * Backfill activity with realistic file changes across selected months.
 *
 * - Modifies random source files (comments, minor tweaks, string updates)
 * - Each commit touches 1-3 files with plausible changes
 * - Backdated commits with natural timestamps
 * - Leaves ~15 random days empty for authenticity
 *
 * Usage:
 *   node ./scripts/backfill-with-changes.mjs [--leave=15] [--branch=main] [--push]
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

const repoRoot = process.cwd();

// Find all JS/JSX source files in src/ and related directories
function findSourceFiles() {
  const dirs = ['./src', './public', '.'];
  const allFiles = [];
  for (const dir of dirs) {
    try {
      const files = sh(`find ${dir} -maxdepth 4 -type f \\( -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.md" \\) 2>/dev/null | head -100`).split('\n').filter(Boolean);
      allFiles.push(...files);
    } catch (_) {}
  }
  // Remove duplicates and exclude node_modules, git, build
  const seen = new Set();
  return allFiles.filter(f => {
    if (seen.has(f)) return false;
    if (f.includes('node_modules') || f.includes('.git')) return false;
    seen.add(f);
    return true;
  }).slice(0, 50); // limit to 50 files
}

const sourceFiles = findSourceFiles();
if (!sourceFiles.length) {
  console.error('No source files found. Aborting.');
  process.exit(1);
}

console.log(`Found ${sourceFiles.length} source files to modify.`);

// Types of changes to make
const changes = [
  (content) => {
    // Add comment
    const lines = content.split('\n');
    const insertIdx = randInt(0, Math.min(lines.length - 1, 20));
    lines.splice(insertIdx, 0, `// Minor update: ${choice(['perf', 'readability', 'consistency', 'clarity'])}`);
    return lines.join('\n');
  },
  (content) => {
    // Update variable/string (safely)
    if (content.includes('TODO') || content.includes('FIXME')) {
      return content.replace(/TODO|FIXME/g, match => match);
    }
    // Add trailing comment to a random line
    const lines = content.split('\n').map((line, i) => {
      if (i > 0 && i < lines.length - 1 && line.trim() && !line.trim().startsWith('//') && Math.random() < 0.05) {
        return line + ' // updated';
      }
      return line;
    });
    return lines.join('\n');
  },
  (content) => {
    // Whitespace/formatting tweak
    return content.replace(/\n\n+/g, '\n\n').replace(/  +/g, ' ');
  },
  (content) => {
    // Update a comment or string
    const lines = content.split('\n');
    const targetIdx = lines.findIndex(l => l.length > 20 && l.length < 100);
    if (targetIdx >= 0) {
      const line = lines[targetIdx];
      if (line.includes('//')) {
        lines[targetIdx] = line.replace(/\/\/ .*/, `// Updated ${new Date().getFullYear()}`);
      }
    }
    return lines.join('\n');
  }
];

function applyRandomChange(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content) return false;
    const changeFunc = choice(changes);
    const newContent = changeFunc(content);
    if (newContent === content) return false; // no change
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (e) {
    return false;
  }
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

// Build skip set (prefer weekends)
const allDays = allDaysAcrossMonths(year, months);
const weekendCandidates = [];
const weekdayCandidates = [];
for (const { y, m, d } of allDays) {
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
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

function commitsForDay() {
  const r = Math.random();
  if (r < 0.60) return randInt(1, 2);
  if (r < 0.90) return randInt(3, 4);
  return randInt(5, 6);
}

function randomHour() {
  const weights = [8,9,10,11,12,13,14,15,16,17,18,19,20];
  const bias = [1,2,4,6,6,6,6,6,5,4,3,2,1];
  const total = bias.reduce((a,b)=>a+b,0);
  let pick = randInt(1,total);
  for (let i=0;i<weights.length;i++) { pick -= bias[i]; if (pick<=0) return weights[i]; }
  return 14;
}

// Commit message pool (same as before)
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
  const msg = line.charAt(0).toUpperCase() + line.slice(1);
  if (Math.random() < 0.45) return msg;
  return `${type}${scope}: ${msg}`;
}

// Start backfill
const startBranch = sh('git rev-parse --abbrev-ref HEAD');
if (startBranch !== targetBranch) {
  sh(`git checkout ${targetBranch}`);
}
const baseBranch = sh('git rev-parse --abbrev-ref HEAD');
const tmpBranch = `backfill-${year}-${Date.now().toString(36)}`;
sh(`git checkout -b ${tmpBranch}`);
console.log(`Checked out temp branch: ${tmpBranch}`);

console.log(`Generating commits with file changes for ${months.join(', ')} ${year}...`);
let commitCount = 0;
for (const { y, m, d } of allDays) {
  if (leaveSet.has(`${y}-${m}-${d}`)) continue;
  
  const numCommits = commitsForDay();
  for (let i = 0; i < numCommits; i++) {
    const hour = randomHour();
    const minute = randInt(0, 59);
    const second = randInt(0, 59);
    const date = new Date(Date.UTC(y, m - 1, d, hour, minute, second));
    const ts = formatGitDate(date);

    // Pick 1-3 random files to modify
    const filesToModify = [];
    const numFiles = randInt(1, 3);
    for (let j = 0; j < numFiles; j++) {
      const f = choice(sourceFiles);
      if (!filesToModify.includes(f)) filesToModify.push(f);
    }

    // Apply changes
    let changedCount = 0;
    for (const file of filesToModify) {
      if (applyRandomChange(file)) {
        sh(`git add "${file}"`);
        changedCount++;
      }
    }

    if (changedCount > 0) {
      const msg = randomMessage();
      shInherit(`GIT_AUTHOR_DATE='${ts}' GIT_COMMITTER_DATE='${ts}' git commit -m "${msg}" --no-verify`);
      commitCount++;
      process.stdout.write('.');
    }
  }
}

console.log(`\n\nCreated ${commitCount} commits with file changes.`);
console.log(`Merging ${tmpBranch} into ${baseBranch}...`);
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
  sh(`git checkout ${startBranch}`);
}

console.log('Done. Backdated commits with real file changes are merged.');
