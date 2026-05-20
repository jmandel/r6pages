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
