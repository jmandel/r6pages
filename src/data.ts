import { bundle as raw } from "../data-bundle";
import type { ActionableFinding, PageReview } from "../types";

export const bundle = raw;
export const pages = raw.pageReviews;

export interface FlatFinding extends ActionableFinding {
  pageReview: PageReview;
}

export const flat: FlatFinding[] = (() => {
  const out: FlatFinding[] = [];
  for (const pageReview of raw.pageReviews) {
    for (const finding of pageReview.findings ?? []) {
      out.push({ ...finding, pageReview });
    }
  }
  return out.sort((a, b) =>
    priorityRank(a.priority).localeCompare(priorityRank(b.priority)) ||
    a.pageLabel.localeCompare(b.pageLabel) ||
    a.id.localeCompare(b.id)
  );
})();

export function findingById(id: string): FlatFinding | undefined {
  return flat.find((finding) => finding.id === id);
}

export function pageByLabel(label: string): PageReview | undefined {
  return pages.find((page) => page.pageLabel === label);
}

function priorityRank(priority?: string): string {
  return { P0: "0", P1: "1", P2: "2", P3: "3" }[priority ?? ""] ?? "9";
}
