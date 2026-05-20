import type { FlatFinding } from "./data";

export interface CopyContext {
  url: string;
  totalShown: number;
  totalAll: number;
  filters: Array<{ label: string; values: string[] }>;
  query?: string;
}

export function buildLlmMarkdown(findings: FlatFinding[], ctx: CopyContext): string {
  const out: string[] = [];
  out.push("# FHIR R4 -> R6 HTML page actionable findings");
  out.push("");
  out.push(`Source: ${ctx.url}`);
  out.push("");
  out.push(
    "This excerpt was exported from a viewer over pooled per-page review abstractions for top-level FHIR HTML pages changed between R4 4.0.1 and R6 6.0.0-ballot4. " +
    "The content mirrors the finding detail pages: page metadata, priority/kind/category labels, narrative explanation, source locations, external evidence, and classification tags."
  );
  out.push("");
  out.push(`**Showing:** ${ctx.totalShown.toLocaleString()} of ${ctx.totalAll.toLocaleString()} findings`);
  out.push("");
  if (ctx.filters.length > 0 || ctx.query) {
    out.push("**Active filters:**");
    if (ctx.query) out.push(`- Search: \`${ctx.query}\``);
    for (const filter of ctx.filters) out.push(`- ${filter.label}: ${filter.values.join(", ")}`);
    out.push("");
  }
  out.push("---");
  out.push("");
  for (const finding of findings) {
    out.push(findingMarkdown(finding));
    out.push("---");
    out.push("");
  }
  return out.join("\n");
}

function findingMarkdown(finding: FlatFinding): string {
  const page = finding.pageReview;
  const out: string[] = [];
  out.push(`## ${finding.title}`);
  out.push("");
  out.push(`- **Finding ID:** \`${finding.id}\``);
  out.push(`- **Page:** \`${finding.pageLabel}.html\``);
  out.push(`- **Page review status:** ${page.status}`);
  out.push(`- **Priority:** ${finding.priority ?? "—"}`);
  out.push(`- **Kind:** ${finding.kind ?? "—"}`);
  out.push(`- **Category:** ${finding.category ?? "—"}`);
  if (finding.pagePath) out.push(`- **Page source path:** \`${finding.pagePath}\``);
  if (page.actionFilePath) out.push(`- **Action file:** \`${page.actionFilePath}\``);
  if (page.researchFilePath) out.push(`- **Research appendix:** \`${page.researchFilePath}\``);
  out.push(`- **Intent-vs-implementation mismatch:** ${yesNo(finding.intentVsImplementationMismatch)}`);
  out.push(`- **Overlooked/newly noticed problem:** ${yesNo(finding.overlookedOrNewlyNoticedProblem)}`);
  out.push(`- **Evidence gap blocks decision:** ${yesNo(finding.evidenceGapBlocksDecision)}`);
  out.push("");

  if (page.summary?.trim()) {
    out.push("### Page summary");
    out.push("");
    out.push(page.summary.trim());
    out.push("");
  }

  const narrative = finding.narrative ?? {};
  if (narrative.problem?.trim() || narrative.whyItMatters?.trim() || narrative.recommendedNextStep?.trim()) {
    out.push("### Issue narrative");
    out.push("");
    if (narrative.problem?.trim()) out.push(`**Problem:** ${narrative.problem.trim()}`);
    if (narrative.whyItMatters?.trim()) out.push(`**Why it matters:** ${narrative.whyItMatters.trim()}`);
    if (narrative.recommendedNextStep?.trim()) out.push(`**Recommended next step:** ${narrative.recommendedNextStep.trim()}`);
    out.push("");
  }
  if (narrative.analysis?.trim()) {
    out.push("### Full analysis");
    out.push("");
    out.push(narrative.analysis.trim());
    out.push("");
  }

  if (finding.sourceLocations?.length) {
    out.push("### Source locations");
    out.push("");
    out.push("| File | Lines | Commit / branch |");
    out.push("|---|---|---|");
    for (const location of finding.sourceLocations) {
      const lines = location.lineRange ? `${location.lineRange.start}-${location.lineRange.end}` : "—";
      out.push(`| \`${cell(location.filePath)}\` | ${cell(lines)} | ${cell(location.commitHash ?? location.gitBranch ?? "—")} |`);
    }
    out.push("");
  }

  if (finding.evidence?.length) {
    out.push("### Evidence and references");
    out.push("");
    for (const evidence of finding.evidence) {
      const label = evidence.label ?? evidence.id ?? evidence.url ?? evidence.filePath ?? "Evidence";
      const target = evidence.url ? `[${label}](${evidence.url})` : label;
      out.push(`- **${evidence.type || "evidence"}:** ${target}${evidence.confidence ? ` _(confidence: ${evidence.confidence})_` : ""}`);
      if (evidence.filePath) {
        const lines = evidence.lineRange ? `:${evidence.lineRange.start}-${evidence.lineRange.end}` : "";
        out.push(`  - File: \`${evidence.filePath}${lines}\``);
      }
      if (evidence.quote?.trim()) out.push(`  - Quote: ${evidence.quote.trim()}`);
    }
    out.push("");
  }

  if (narrative.rawEvidenceQuotes?.length) {
    out.push("### Raw evidence quotes");
    out.push("");
    for (const quote of narrative.rawEvidenceQuotes) out.push(`- \`${quote}\``);
    out.push("");
  }

  if (finding.status) {
    out.push("### Classification tags");
    out.push("");
    out.push(`- **Finding status:** ${finding.status}`);
    out.push("");
  }

  if (narrative.limitations?.length) {
    out.push("### Limitations");
    out.push("");
    for (const limitation of narrative.limitations) out.push(`- ${limitation.replace(/^-+\s*/, "")}`);
    out.push("");
  }

  return out.join("\n").trimEnd();
}

function cell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n+/g, " ").trim() || "—";
}

function yesNo(value?: boolean): string {
  return value ? "yes" : "no";
}
