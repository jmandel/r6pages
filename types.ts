export type PageReviewStatus =
  | "has-findings"
  | "no-actionable-findings"
  | "incomplete-or-unparseable"
  | string;

export type FindingPriority = "P0" | "P1" | "P2" | "P3" | string;
export type FindingKind = "H" | "E" | "G" | string;

export interface LineRange {
  start: number;
  end: number;
}

export interface SourceLocation {
  filePath: string;
  lineRange?: LineRange;
  commitHash?: string;
  gitBranch?: string;
}

export interface EvidenceReference {
  type: string;
  id?: string;
  label?: string;
  url?: string;
  filePath?: string;
  lineRange?: LineRange;
  commitHash?: string;
  confidence?: string;
  quote?: string;
}

export interface FindingNarrative {
  problem?: string;
  analysis?: string;
  whyItMatters?: string;
  recommendedNextStep?: string;
  rawEvidenceQuotes?: string[];
  limitations?: string[];
}

export interface ActionableFinding {
  id: string;
  localId?: string;
  pageLabel: string;
  pagePath?: string;
  title: string;
  kind?: FindingKind;
  priority?: FindingPriority;
  category?: string;
  sourceLocations?: SourceLocation[];
  evidence?: EvidenceReference[];
  narrative?: FindingNarrative;
  intentVsImplementationMismatch?: boolean;
  overlookedOrNewlyNoticedProblem?: boolean;
  evidenceGapBlocksDecision?: boolean;
  dateIdentified?: string;
  status?: string;
}

export interface PageReview {
  _sourcePath?: string;
  _mtimeMs?: number;
  pageLabel: string;
  actionFilePath?: string;
  researchFilePath?: string;
  status: PageReviewStatus;
  summary?: string;
  findingCount: number;
  findings: ActionableFinding[];
  noFindingReason?: string;
  parseWarnings?: string[];
}

export interface BundleTotals {
  pagesReviewed: number;
  pagesWithFindings: number;
  pagesWithNoActionableFindings: number;
  incompleteOrUnparseable: number;
  findings: number;
  byPriority: Record<string, number>;
  byKind: Record<string, number>;
  byCategory: Record<string, number>;
  byStatus: Record<string, number>;
}

export interface BundleData {
  generatedAt: string;
  sourceDir: string;
  parseFailures: { file: string; error: string }[];
  pageReviews: PageReview[];
  totals: BundleTotals;
}
