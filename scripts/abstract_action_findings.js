#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.ROOT || path.resolve(scriptDir, '..');

function usage() {
  console.log(`Usage: abstract_action_findings.js [--all|--only PAGE|--action FILE] [--force]

Fast deterministic abstraction for todo/actions/*.md.

Options:
  --all          Process all action files. Default if --only/--action is absent.
  --only PAGE    Process one page label, with or without .md/.json.
  --action FILE  Process one action Markdown file.
  --force        Overwrite existing valid abstraction JSON.
  --output-dir D Output directory. Default: todo/abstractions.
`);
}

const args = process.argv.slice(2);
let mode = 'all';
let only = '';
let actionFile = '';
let force = false;
let outputDir = path.join(root, 'todo/abstractions');
let actionDir = path.join(root, 'todo/actions');
let researchDir = path.join(root, 'todo/research');
let promptPath = path.join(root, 'abstraction-prompt.md');

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--all') {
    mode = 'all';
  } else if (arg === '--only') {
    only = normalizePage(args[++i] || '');
    mode = 'only';
  } else if (arg === '--action') {
    actionFile = path.resolve(args[++i] || '');
    mode = 'action';
  } else if (arg === '--force') {
    force = true;
  } else if (arg === '--output-dir') {
    outputDir = path.resolve(args[++i] || '');
  } else if (arg === '--action-dir') {
    actionDir = path.resolve(args[++i] || '');
  } else if (arg === '--research-dir') {
    researchDir = path.resolve(args[++i] || '');
  } else if (arg === '--prompt') {
    promptPath = path.resolve(args[++i] || '');
  } else if (arg === '-h' || arg === '--help') {
    usage();
    process.exit(0);
  } else {
    console.error(`Unknown argument: ${arg}`);
    usage();
    process.exit(2);
  }
}

fs.mkdirSync(outputDir, { recursive: true });
writeSchema();

const files = selectActionFiles();
let processed = 0;
let skipped = 0;
let failed = 0;

for (const file of files) {
  const pageLabel = normalizePage(path.basename(file, '.md'));
  const outputPath = path.join(outputDir, `${pageLabel}.json`);
  if (!force && isValidJsonFile(outputPath)) {
    skipped++;
    continue;
  }
  try {
    const dataset = abstractPage(file, pageLabel);
    fs.writeFileSync(outputPath, `${JSON.stringify(dataset, null, 2)}\n`);
    JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    processed++;
    console.log(`wrote ${path.relative(root, outputPath)}`);
  } catch (error) {
    failed++;
    console.error(`failed ${file}: ${error.stack || error.message}`);
  }
}

console.log(`abstraction finished; processed=${processed} skipped=${skipped} failed=${failed}`);
process.exit(failed ? 1 : 0);

function normalizePage(value) {
  return String(value || '').replace(/\.md$/, '').replace(/\.json$/, '');
}

function selectActionFiles() {
  if (mode === 'action') {
    if (!actionFile || !fs.existsSync(actionFile)) throw new Error(`Action file not found: ${actionFile}`);
    return [actionFile];
  }
  if (mode === 'only') {
    if (!only) throw new Error('--only requires a page label');
    const file = path.join(actionDir, `${only}.md`);
    if (!fs.existsSync(file)) throw new Error(`Action file not found: ${file}`);
    return [file];
  }
  return fs.readdirSync(actionDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => path.join(actionDir, name))
    .filter((file) => fs.statSync(file).size > 0)
    .sort();
}

function isValidJsonFile(file) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) return false;
  try {
    JSON.parse(fs.readFileSync(file, 'utf8'));
    return true;
  } catch {
    return false;
  }
}

function writeSchema() {
  const schemaPath = path.join(outputDir, 'actionable-findings.schema.ts');
  let schema = '';
  if (fs.existsSync(promptPath)) {
    const prompt = fs.readFileSync(promptPath, 'utf8');
    const match = prompt.match(/```typescript\n([\s\S]*?)\n```/);
    if (match) schema = match[1].trim();
  }
  if (!schema) throw new Error(`Could not extract TypeScript schema from ${promptPath}`);
  fs.writeFileSync(schemaPath, `${schema}\n`);
}

function abstractPage(actionPath, pageLabel) {
  const actionText = fs.readFileSync(actionPath, 'utf8');
  const researchPath = path.join(researchDir, `${pageLabel}.md`);
  const researchText = fs.existsSync(researchPath) ? fs.readFileSync(researchPath, 'utf8') : '';
  const summary = cleanText(section(actionText, 'Summary')) || '';
  const mismatchSection = cleanText(section(actionText, 'Intent-vs-implementation mismatches'));
  const overlookedSection = cleanText(section(actionText, 'Overlooked or newly noticed problems'));
  const findingBlocks = parseFindingBlocks(actionText);
  const parseWarnings = [];
  const provisional = /provisional status|investigation in progress|\bpending\b/i.test(actionText);

  const findings = findingBlocks.map((block) => parseFinding(block, {
    pageLabel,
    actionPath,
    researchPath,
    researchText,
    mismatchSection,
    overlookedSection,
    parseWarnings,
  }));

  let status = 'has-findings';
  let noFindingReason;
  if (findings.length === 0) {
    if (provisional) {
      status = 'incomplete-or-unparseable';
      noFindingReason = summary || 'Action file appears provisional or pending.';
      parseWarnings.push('No finding headings were found and the action file appears provisional or pending.');
    } else {
      status = /no actionable findings|none found/i.test(actionText) ? 'no-actionable-findings' : 'incomplete-or-unparseable';
      noFindingReason = summary || 'No high-signal finding headings were found.';
      if (status === 'incomplete-or-unparseable') parseWarnings.push('No H/E/G finding headings were found.');
    }
  }

  const review = {
    pageLabel,
    actionFilePath: rel(actionPath),
    researchFilePath: fs.existsSync(researchPath) ? rel(researchPath) : undefined,
    status,
    summary,
    findingCount: findings.length,
    findings,
    noFindingReason,
    parseWarnings,
  };

  const totals = emptyTotals();
  totals.pagesReviewed = 1;
  if (findings.length > 0) totals.pagesWithFindings = 1;
  if (status === 'no-actionable-findings') totals.pagesWithNoActionableFindings = 1;
  totals.findings = findings.length;
  for (const finding of findings) {
    totals.byPriority[finding.priority] = (totals.byPriority[finding.priority] || 0) + 1;
    totals.byKind[finding.kind] = (totals.byKind[finding.kind] || 0) + 1;
    totals.byCategory[finding.category] = (totals.byCategory[finding.category] || 0) + 1;
  }

  return {
    schemaVersion: '1.0',
    generatedAt: new Date().toISOString(),
    sourceActionFilesGlob: rel(actionPath),
    sourceResearchDir: rel(researchDir),
    pageReviews: [review],
    totals,
  };
}

function parseFindingBlocks(markdown) {
  const heading = /^###\s+([HEG]-\d{3,})(?:\s*:\s*|\s+)(.+?)\s*$/gm;
  const matches = [...markdown.matchAll(heading)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : nextSecondLevel(markdown, start);
    return {
      localId: match[1],
      title: cleanInline(match[2]),
      body: markdown.slice(start, end).trim(),
    };
  });
}

function nextSecondLevel(markdown, start) {
  const rest = markdown.slice(start);
  const match = rest.match(/^##\s+/m);
  return match ? start + match.index : markdown.length;
}

function parseFinding(block, context) {
  const fields = parseBulletFields(block.body);
  const combined = [block.title, block.body, context.researchText].join('\n');
  const evidenceText = fields.evidence || '';
  const priority = ((fields.priority || '').match(/P[0-3]/i) || ['P3'])[0].toUpperCase();
  if (!fields.priority) context.parseWarnings.push(`${block.localId}: missing priority; defaulted to P3.`);
  const category = normalizeCategory(fields.category || '');
  const evidence = collectEvidence(evidenceText, block.body, context);
  const sourceLocations = collectSourceLocations(evidence, context.pageLabel);
  const narrative = {
    problem: fields.problem || '',
    analysis: buildAnalysis(block, fields, context),
    whyItMatters: fields['why it matters'] || fields.impact || '',
    recommendedNextStep: fields['recommended next step'] || fields.recommendation || '',
    rawEvidenceQuotes: collectQuotes(evidenceText),
    limitations: collectLimitations(context.researchText, block.body),
  };

  for (const key of ['problem', 'whyItMatters', 'recommendedNextStep']) {
    if (!narrative[key]) context.parseWarnings.push(`${block.localId}: missing narrative.${key}.`);
  }

  const inMismatch = includesFinding(context.mismatchSection, block);
  const inOverlooked = includesFinding(context.overlookedSection, block);
  return {
    id: `${context.pageLabel}-${block.localId}`,
    localId: block.localId,
    pageLabel: context.pageLabel,
    pagePath: inferPagePath(evidence, context.pageLabel),
    title: block.title,
    kind: block.localId[0],
    priority,
    category,
    sourceLocations,
    evidence,
    narrative,
    intentVsImplementationMismatch: inMismatch || category === 'intent-mismatch',
    overlookedOrNewlyNoticedProblem: inOverlooked || category === 'overlooked-problem',
    evidenceGapBlocksDecision: block.localId.startsWith('G-') || category === 'evidence-gap',
    dateIdentified: new Date().toISOString(),
    status: 'open',
  };
}

function parseBulletFields(body) {
  const fields = {};
  const lines = body.split(/\r?\n/);
  let current = '';
  for (const line of lines) {
    const match = line.match(/^\s*-\s+\*{0,2}([^:*]+?)\*{0,2}\s*:\s*(.*)$/);
    if (match) {
      current = normalizeFieldName(match[1]);
      fields[current] = cleanText(match[2]);
    } else if (current && line.trim() && !line.match(/^#{1,6}\s/)) {
      fields[current] += `\n${cleanText(line)}`;
    }
  }
  return fields;
}

function normalizeFieldName(value) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function normalizeCategory(raw) {
  const s = raw.toLowerCase();
  if (s.includes('evidence')) return 'evidence-gap';
  if (s.includes('intent')) return 'intent-mismatch';
  if (s.includes('render')) return 'rendering';
  if (s.includes('editorial') || s.includes('typo') || s.includes('grammar')) return 'editorial';
  if (s.includes('overlook')) return 'overlooked-problem';
  if (s.includes('spec') || s.includes('conformance') || s.includes('substantive') || s.includes('semantic')) return 'spec-problem';
  return 'other';
}

function collectEvidence(evidenceText, body, context) {
  const evidence = [];
  addEvidence(evidence, {
    type: 'action-file',
    label: `${context.pageLabel} action file`,
    filePath: rel(context.actionPath),
    confidence: 'high',
  });
  if (fs.existsSync(context.researchPath)) {
    addEvidence(evidence, {
      type: 'research-appendix',
      label: `${context.pageLabel} research appendix`,
      filePath: rel(context.researchPath),
      confidence: 'medium',
    });
  }

  const text = `${evidenceText}\n${body}`;
  for (const match of text.matchAll(/\b(source\/[A-Za-z0-9_.\/-]+):(\d+)(?:-(\d+))?/g)) {
    addEvidence(evidence, {
      type: 'source-line',
      label: `${match[1]}:${match[2]}${match[3] ? `-${match[3]}` : ''}`,
      filePath: match[1],
      lineRange: { start: Number(match[2]), end: Number(match[3] || match[2]) },
      confidence: 'high',
    });
  }
  for (const match of text.matchAll(/\b(FHIR-\d+)\b/g)) {
    addEvidence(evidence, {
      type: 'jira',
      id: match[1],
      label: match[1],
      url: `https://jira.hl7.org/browse/${match[1]}`,
      confidence: 'high',
    });
  }
  for (const match of text.matchAll(/\b([0-9a-f]{12,40})\b/gi)) {
    addEvidence(evidence, {
      type: 'commit',
      id: match[1],
      label: match[1],
      url: `https://github.com/HL7/fhir/commit/${match[1]}`,
      commitHash: match[1],
      confidence: 'medium',
    });
  }
  for (const match of text.matchAll(/https?:\/\/[^\s)>,]+/g)) {
    const url = match[0].replace(/[.,;]+$/, '');
    addEvidence(evidence, {
      type: urlType(url),
      label: url,
      url,
      confidence: 'medium',
    });
  }
  if (/confluence/i.test(text) && !evidence.some((item) => item.type === 'confluence')) {
    addEvidence(evidence, {
      type: 'confluence',
      label: 'Confluence evidence mentioned in finding',
      quote: sentenceContaining(text, /confluence/i),
      confidence: 'medium',
    });
  }
  if (/zulip/i.test(text) && !evidence.some((item) => item.type === 'zulip')) {
    addEvidence(evidence, {
      type: 'zulip',
      label: 'Zulip evidence mentioned in finding',
      quote: sentenceContaining(text, /zulip/i),
      confidence: 'medium',
    });
  }
  if (evidenceText) {
    evidence[0].quote = evidenceText;
  }
  return evidence;
}

function addEvidence(items, item) {
  const key = JSON.stringify([item.type, item.id, item.url, item.filePath, item.lineRange?.start, item.lineRange?.end, item.commitHash, item.label]);
  if (!items.some((existing) => JSON.stringify([existing.type, existing.id, existing.url, existing.filePath, existing.lineRange?.start, existing.lineRange?.end, existing.commitHash, existing.label]) === key)) {
    items.push(item);
  }
}

function urlType(url) {
  if (/jira\.hl7\.org/.test(url)) return 'jira';
  if (/chat\.fhir\.org|zulip/.test(url)) return 'zulip';
  if (/confluence\.hl7\.org/.test(url)) return 'confluence';
  if (/github\.com\/HL7\/fhir\/pull/.test(url)) return 'github-pr';
  if (/github\.com\/HL7\/fhir\/commit/.test(url)) return 'commit';
  return 'other';
}

function collectSourceLocations(evidence, pageLabel) {
  const locations = evidence
    .filter((item) => item.filePath && item.lineRange && item.type.includes('source'))
    .map((item) => ({ filePath: item.filePath, lineRange: item.lineRange, relevantCommit: item.commitHash }));
  if (locations.length === 0) {
    locations.push({ filePath: `source/${pageLabel}.html` });
  }
  return locations;
}

function inferPagePath(evidence, pageLabel) {
  const source = evidence.find((item) => item.filePath && item.filePath.startsWith('source/'));
  return source?.filePath || `source/${pageLabel}.html`;
}

function buildAnalysis(block, fields, context) {
  const pieces = [
    `${block.localId}: ${block.title}`,
    fields.evidence ? `Evidence: ${fields.evidence}` : '',
    fields.problem ? `Problem: ${fields.problem}` : '',
    fields['why it matters'] ? `Why it matters: ${fields['why it matters']}` : '',
    fields['recommended next step'] ? `Recommended next step: ${fields['recommended next step']}` : '',
  ].filter(Boolean);
  const mismatchLine = lineForFinding(context.mismatchSection, block);
  const overlookedLine = lineForFinding(context.overlookedSection, block);
  if (mismatchLine) pieces.push(`Intent-vs-implementation context: ${mismatchLine}`);
  if (overlookedLine) pieces.push(`Overlooked/newly noticed context: ${overlookedLine}`);
  return pieces.join('\n\n');
}

function includesFinding(sectionText, block) {
  if (!sectionText) return false;
  return sectionText.includes(block.localId) || sectionText.toLowerCase().includes(block.title.toLowerCase());
}

function lineForFinding(sectionText, block) {
  if (!sectionText) return '';
  return sectionText.split(/\r?\n/).find((line) => line.includes(block.localId) || line.toLowerCase().includes(block.title.toLowerCase())) || '';
}

function collectQuotes(text) {
  const quotes = [];
  for (const match of text.matchAll(/[“"]([^”"]{8,})[”"]/g)) quotes.push(match[1]);
  for (const match of text.matchAll(/`([^`]{3,})`/g)) quotes.push(match[1]);
  return [...new Set(quotes)].slice(0, 12);
}

function collectLimitations(researchText, body) {
  const text = `${body}\n${researchText}`;
  const limitations = [];
  for (const line of text.split(/\r?\n/)) {
    if (/limitation|caveat|weak evidence|not found|failed search|confidence.*low|unclear/i.test(line)) {
      limitations.push(cleanText(line));
    }
  }
  return [...new Set(limitations)].slice(0, 20);
}

function section(markdown, title) {
  const pattern = new RegExp(`^##\\s+${escapeRegex(title)}\\s*$`, 'im');
  const match = markdown.match(pattern);
  if (!match || match.index === undefined) return '';
  const start = match.index + match[0].length;
  const rest = markdown.slice(start);
  const next = rest.match(/^##\s+/m);
  return rest.slice(0, next ? next.index : rest.length).trim();
}

function sentenceContaining(text, pattern) {
  const sentence = text.split(/(?<=[.!?])\s+/).find((part) => pattern.test(part));
  return cleanText(sentence || '');
}

function cleanText(value) {
  return String(value || '')
    .replace(/\r/g, '')
    .replace(/\*\*/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .trim();
}

function cleanInline(value) {
  return cleanText(value).replace(/^`|`$/g, '');
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function rel(file) {
  return path.relative(root, file) || file;
}

function emptyTotals() {
  return {
    pagesReviewed: 0,
    pagesWithFindings: 0,
    pagesWithNoActionableFindings: 0,
    findings: 0,
    byPriority: { P0: 0, P1: 0, P2: 0, P3: 0 },
    byKind: { H: 0, E: 0, G: 0 },
    byCategory: {
      'spec-problem': 0,
      'intent-mismatch': 0,
      'overlooked-problem': 0,
      editorial: 0,
      rendering: 0,
      'evidence-gap': 0,
      other: 0,
    },
  };
}
