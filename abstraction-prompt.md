# Actionable Findings Abstraction Prompt

Use this prompt after page-review agents have produced split outputs under `todo/research/` and `todo/actions/`. The goal is to convert the human-readable actionable findings into a structured, loss-minimizing dataset while preserving the original page-review semantics, priorities, labels, evidence, and caveats.

## Inputs

- Action files glob: `{{ACTION_FILES_GLOB}}` (default: `todo/actions/*.md`)
- Research files directory: `{{RESEARCH_DIR}}` (default: `todo/research`)
- Output JSON path: `{{OUTPUT_JSON_PATH}}` (example: `todo/actionable-findings.json`)
- Output TypeScript schema path: `{{OUTPUT_SCHEMA_PATH}}` (example: `todo/actionable-findings.schema.ts`)
- Optional rollup Markdown path: `{{OUTPUT_ROLLUP_PATH}}` (example: `todo/actionable-findings-rollup.md`)
- Date identified: `{{DATE_IDENTIFIED_ISO}}`

## Role and goal

Read the action files and, when needed, their matching research appendices. Produce a structured representation of every actionable finding without losing:

- original finding ID and page label
- H/E/G finding kind
- P0/P1/P2/P3 priority
- original category label
- problem, impact, recommendation, and limitations
- source locations, commits, PRs, Jira keys, Zulip topics/messages, Confluence pages, and local evidence commands
- whether a finding is an intent mismatch, overlooked problem, evidence gap, editorial/rendering defect, or spec/conformance problem

Do not invent findings. If an action file says there are no actionable findings, record that page as reviewed with `findingCount: 0`.

## TypeScript schema to use

Write `{{OUTPUT_SCHEMA_PATH}}` with this schema, extending only if the source files contain a field that cannot be represented without loss.

```typescript
export type PageReviewStatus =
  | 'has-findings'
  | 'no-actionable-findings'
  | 'missing-action-file'
  | 'incomplete-or-unparseable';

export type FindingKind =
  | 'H'  // substantive/history/spec problem
  | 'E'  // concrete editorial/rendering defect
  | 'G'; // evidence gap blocking a real decision

export type FindingPriority =
  | 'P0' // serious contradiction or likely spec correctness issue requiring immediate review
  | 'P1' // substantive semantic/conformance mismatch or unresolved workgroup intent
  | 'P2' // concrete issue worth triage, including significant editorial/rendering defects
  | 'P3'; // low-priority cleanup; use sparingly

export type FindingCategory =
  | 'spec-problem'
  | 'intent-mismatch'
  | 'overlooked-problem'
  | 'editorial'
  | 'rendering'
  | 'evidence-gap'
  | 'other';

export type ExclusionReason =
  | 'historical-context-only'
  | 'broad-template-commit-without-page-specific-consequence'
  | 'jira-workflow-status-only'
  | 'search-more-later-without-concrete-missing-evidence'
  | 'p3-trivia-without-reader-facing-defect'
  | 'not-applicable';

export type EvidenceType =
  | 'source-line'
  | 'old-source-line'
  | 'new-source-line'
  | 'diff'
  | 'commit'
  | 'github-pr'
  | 'jira'
  | 'zulip'
  | 'confluence'
  | 'spec-page'
  | 'local-command'
  | 'research-appendix'
  | 'action-file'
  | 'other';

export interface EvidenceReference {
  type: EvidenceType;
  label: string;
  url?: string;
  id?: string;
  filePath?: string;
  lineRange?: {
    start: number;
    end: number;
  };
  commitHash?: string;
  command?: string;
  quote?: string;
  confidence?: 'high' | 'medium' | 'low';
  notes?: string;
}

export interface SourceLocation {
  filePath: string;
  lineRange?: {
    start: number;
    end: number;
  };
  oldFilePath?: string;
  newFilePath?: string;
  oldCommit?: string;
  newCommit?: string;
  introducingCommit?: string;
  relevantCommit?: string;
}

export interface FindingNarrative {
  problem: string;
  analysis: string;           // fuller explanation preserving nuance from the action/research files
  whyItMatters: string;
  recommendedNextStep: string;
  rawEvidenceQuotes: string[];
  limitations: string[];
}

export interface ActionableFinding {
  id: string;                 // stable global ID, e.g. "xml-H-001"
  localId: string;            // original heading ID, e.g. "H-001"
  pageLabel: string;          // e.g. "xml"
  pagePath?: string;          // e.g. "source/xml.html"
  title: string;
  kind: FindingKind;
  priority: FindingPriority;
  category: FindingCategory;
  sourceLocations: SourceLocation[];
  evidence: EvidenceReference[];
  narrative: FindingNarrative;
  intentVsImplementationMismatch: boolean;
  overlookedOrNewlyNoticedProblem: boolean;
  evidenceGapBlocksDecision: boolean;
  dateIdentified: string;     // ISO-8601
  status: 'open' | 'triaged' | 'resolved' | 'superseded' | 'not-actionable';
}

export interface PageFindingReview {
  pageLabel: string;
  actionFilePath: string;
  researchFilePath?: string;
  status: PageReviewStatus;
  summary: string;
  findingCount: number;
  findings: ActionableFinding[];
  noFindingReason?: string;
  parseWarnings: string[];
}

export interface ActionableFindingsDataset {
  schemaVersion: '1.0';
  generatedAt: string;        // ISO-8601
  sourceActionFilesGlob: string;
  sourceResearchDir: string;
  pageReviews: PageFindingReview[];
  totals: {
    pagesReviewed: number;
    pagesWithFindings: number;
    pagesWithNoActionableFindings: number;
    findings: number;
    byPriority: Record<FindingPriority, number>;
    byKind: Record<FindingKind, number>;
    byCategory: Record<FindingCategory, number>;
  };
}
```

## Extraction instructions

1. Read every action file matching `{{ACTION_FILES_GLOB}}`.
2. For each action file, infer `pageLabel` from the filename and locate the matching research appendix at `{{RESEARCH_DIR}}/<pageLabel>.md` if it exists.
3. Preserve the action-file summary. If it says no actionable findings were found, create a `PageFindingReview` with `status: 'no-actionable-findings'`, `findingCount: 0`, and no findings.
4. For each finding heading like `### H-001: Short title`, extract:
   - `localId`: `H-001`
   - `kind`: `H`, `E`, or `G`
   - `title`: heading text after the colon
   - `id`: `<pageLabel>-<localId>`, lowercased only for the page label
5. Preserve exact priority values `P0`, `P1`, `P2`, or `P3`. Do not downgrade or upgrade priorities during abstraction.
6. Preserve original category values. Map only exact prompt categories to `FindingCategory`; use `other` only if the file contains a new category label, and record the original label in `evidence.notes` or `parseWarnings`.
7. Do not infer broad actionability-trigger or change-classification tag lists from keyword matches. These were intentionally excluded from the schema because heuristic extraction produced noisy, non-discriminating labels.
8. Pull precise evidence from both the action file and research appendix:
   - source paths and line ranges
   - old/new commits
   - introducing or relevant commits
   - Jira keys and URLs
   - Zulip stream/topic/message IDs or URLs
   - Confluence page IDs/titles/URLs
   - local snapshot commands
   - exact quoted source or discussion text
9. Set boolean flags from section placement and content:
   - `intentVsImplementationMismatch = true` for findings listed under or clearly about intent-vs-implementation mismatches.
   - `overlookedOrNewlyNoticedProblem = true` for findings listed under or clearly about overlooked/newly noticed problems.
   - `evidenceGapBlocksDecision = true` for `G-*` findings or category `evidence-gap`.
10. Keep limitations and uncertainty. If evidence is weak, incomplete, or based on failed searches, record that in `narrative.limitations` and/or `parseWarnings`.
11. Do not include excluded material as findings. If an action file mentions old context-only Jira hits, broad template commits, Jira workflow cleanup, or search-more-later items that were explicitly excluded, leave them out or record them only in `parseWarnings` if needed to explain a parse decision.
12. Validate that every `ActionableFinding` has at least:
    - `id`
    - `localId`
    - `pageLabel`
    - `title`
    - `kind`
    - `priority`
    - `category`
    - `narrative.problem`
    - `narrative.analysis`
    - `narrative.whyItMatters`
    - `narrative.recommendedNextStep`
    - at least one `evidence` reference

## Output requirements

Write `{{OUTPUT_JSON_PATH}}` as pretty-printed JSON matching `ActionableFindingsDataset`.

If `{{OUTPUT_ROLLUP_PATH}}` is provided, also write a concise Markdown rollup with:

- totals by priority, kind, and category
- P0/P1 findings first
- one table row per finding: ID, page, priority, category, title, recommended next step, strongest evidence link
- a separate short list of parse warnings or incomplete pages

At the end of your response, report only the files written, the total finding count, and any parse limitations.
