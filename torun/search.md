# Page Change Review Prompt

Use this populated prompt to review this FHIR specification HTML source page directly.

## Inputs

- Page path: `source/search.html`
- Page label: `search`
- Older version: `R4 4.0.1`
- Older source commit: `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- Older source tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Newer version: `R6 ballot4 6.0.0-ballot4`
- Newer source commit: `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Newer source tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Known Jira issue keys: `none`
- Page topic hints: `search`
- Detailed research output path: `todo/research/search.md` (batch convention: `todo/research/search.md`)
- Actionable findings output path: `todo/actions/search.md` (batch convention: `todo/actions/search.md`)

- Detected diff status: Modified and present in both version trees

## Role and goal

You are reviewing how one main FHIR specification page changed between `R4 4.0.1` and `R6 ballot4 6.0.0-ballot4`.

Read `SKILL.md` first for the FHIR Community Research methodology. Also read the relevant source README files as needed: `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.

Your job is to produce two different artifacts:

1. A detailed research appendix in `todo/research/search.md`.
2. A concise, high-signal actionable findings file in `todo/actions/search.md`.

Do not modify source files. Only create or update the two requested output files and their directories.

## Batch execution guardrails

- Work directly in this session; do not delegate to subagents.
- Within the first few minutes, create both requested output files with the required headings and a provisional status, then keep updating them as evidence improves.
- Prefer a bounded, high-signal investigation over exhaustive searching. Search Jira/Zulip/Confluence for explicit Jira keys and the most distinctive changed phrases; do not chase context-only keyword hits.
- If time is running short, stop searching and write concise, evidence-backed outputs rather than leaving files missing.
- Before exiting, verify both requested files exist and are non-empty.

## Required investigation

### 1. Establish the page boundary

Confirm whether `source/search.html` exists in both trees:

```bash
test -f "fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/search.html" && echo "old exists"
test -f "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html" && echo "new exists"
```

If the page was added, deleted, or renamed, state that clearly and adjust the analysis. For populated batch prompts, the expected scope is pages that are modified and present in both trees.

### 2. Review the direct diff

Use a rename-aware diff from `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames \
  "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/search.html"
```

Separate meaningful content changes from mechanical churn:

- new, removed, or changed normative requirements
- changed examples
- changed REST/search/operation semantics
- changed references, links, terminology, anchors, or metadata
- section moves or restructuring
- purely editorial/template/version boilerplate

### 3. Trace source history

Find commits that touched this page between the two commits:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/search.html"
```

Inspect likely meaningful commits with:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <COMMIT> -- "source/search.html"
```

Extract explicit Jira keys, PR numbers, ballot references, issue titles, and rationale phrases from commit metadata and patches. Use pickaxe/history when exact text appears or disappears.

### 4. Search Jira

Start with every explicit Jira key found in commits, patches, source comments, `none`, or related PR text:

```bash
bun run jira:search snapshot FHIR-XXXXX
```

Then search for other likely Jira issues only when they could plausibly explain a meaningful page change. Use exact changed phrases, page path/label, page topic hints, changed section terms, and normative terms. Snapshot promising issues before relying on them.

Do not elevate old/context-only Jira hits into the action file unless they reveal a real mismatch, unresolved decision, or overlooked page problem.

### 5. Search Zulip

Search by explicit Jira keys first, then exact changed phrases and topic terms:

```bash
bun run zulip:search fts "FHIR-XXXXX" --limit 20
bun run zulip:search fts "\"exact changed phrase\"" --limit 20
bun run zulip:search snapshot "stream name" "topic name"
```

Look for rationale, objections, alternatives considered, workgroup participants, later reversals, and evidence that the applied page text does or does not match the discussion.

### 6. Search Confluence

Search Confluence for explicit Jira keys and meaningful page terms:

```bash
bun run confluence:search refs jira FHIR-XXXXX
bun run confluence:search fts "FHIR-XXXXX" --limit 20
bun run confluence:search snapshot PAGE_ID
```

Prioritize workgroup minutes, agendas, publication requests, and pages that mention the same Jira issues or changed concepts. Treat Confluence as meeting/process evidence, distinct from Jira disposition and source history.

### 7. Read the full newer page

After the diff/history/community investigation, read the full `R6 ballot4 6.0.0-ballot4` version of the page:

```bash
wc -l "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html"
sed -n '1,220p' "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html"
sed -n '221,440p' "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html"
```

Continue in chunks until you have read the whole file. Use this read to find current context, normative statements, examples, internal inconsistencies, stale links, and places where applied text may not match Jira/Zulip/Confluence intent.

### 8. Cross-check and avoid overclaiming

Before finalizing, verify:

- cited commits actually change `source/search.html`
- cited Jira issues describe the same concept, not just a keyword collision
- cited Zulip or Confluence content discusses the same issue, phrase, or page concept
- dates for discussion, Jira resolution, source commit, PR merge, and publication are kept separate
- failed searches that materially affect confidence are noted in the research appendix

If evidence is weak, say so directly. Do not infer causality from keyword matches alone.

## Output 1: detailed research appendix

Write `todo/research/search.md`. This file may be detailed and is allowed to preserve evidence that is not directly actionable. Keep it organized for later audit, but do not try to make every contextual hit sound important.

Make this appendix a fast handoff for a future reviewer. Include direct links or precise locators for evidence:

- local source file paths and line ranges, such as `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:123`
- Git commit SHAs and, when known, GitHub commit links like `https://github.com/HL7/fhir/commit/<sha>`
- PR links like `https://github.com/HL7/fhir/pull/<number>` when discovered
- Jira keys and links like `https://jira.hl7.org/browse/FHIR-XXXXX`
- Zulip stream/topic names and message IDs/URLs when available
- Confluence page IDs/titles and URLs when available
- exact commands needed to reopen a snapshot, such as `bun run jira:search snapshot FHIR-XXXXX`

Use this shape:

```markdown
# search research appendix

## Scope and coverage

- Page path, old/new versions and commits
- Whether the page was read end-to-end
- Commit count and explicit Jira keys found
- Jira/Zulip/Confluence searches performed
- Important caveats or failed searches

## Quick links and locators

Collect links/locators that let a reviewer resume quickly:

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|

Use rows for source lines, commits, PRs, Jira issues, Zulip topics/messages, Confluence pages, and useful local snapshot commands. Prefer exact links/IDs over prose.

## Change summary

Group the R4 -> R6 ballot4 changes by meaningful topic. Mark each as:

- substantive/normative
- semantic guidance
- example change
- metadata/template/navigation
- editorial only
- mechanical/noise

For pages whose diff is only boilerplate/editorial, say that plainly and keep this section short.

## Source history

Chronological table of relevant commits. Include broad mechanical commits, but label them as mechanical so they are not mistaken for page-specific decisions.

## Jira evidence

Separate:

- explicit Jira keys from commits/patches
- other Jira issues that plausibly explain the same changed text
- context-only Jira hits that should not drive action

## Zulip evidence

Threads that provide rationale, disagreement, later reassessment, or proof that a page issue was noticed. Background-only threads may be listed briefly or omitted.

## Confluence evidence

Minutes/agendas/publication requests/process pages that support or contradict the applied change.

## Timeline

Keep separate clocks: discussion, Jira created/resolved/voted, source commit, PR merge, publication boundary, later reassessment.

## Evidence log

List the key commands/searches and what they established. Include failed searches only when they affect confidence or prevent a conclusion.
```

## Output 2: actionable findings

Write `todo/actions/search.md`. This file must be high signal and much shorter than the research appendix.

The action file is not a place for general history, context-only Jira hits, exhaustive search logs, or weak speculation. Include only findings that a human should plausibly act on or consciously triage.

Actionable means at least one of:

- the current page appears internally inconsistent or contradicted by related spec text
- applied text seems broader/narrower/different than the Jira/Zulip/Confluence intent
- a formal Jira/workgroup decision appears not to have been applied
- a page change has no clear rationale and affects semantics, requirements, examples, or conformance behavior
- a reader-facing editorial/rendering defect is concrete enough to fix
- a later discussion suggests the current text may be obsolete or should be revisited

Do not include:

- old Jira issues that are merely historical context
- broad template commits with no page-specific consequence
- Jira workflow/status cleanup unless it affects interpreting the page
- "search more later" items unless there is a concrete reason to believe important evidence is missing
- P3 trivia if the page has no other real issue, unless it is an obvious reader-facing typo/markup defect

If there are no actionable findings, write a short file saying so. Do not manufacture H/E/G items.

Use this shape:

```markdown
# search actionable findings

## Summary

One short paragraph. Say either:

- no actionable findings were found, with a one-sentence reason; or
- the page has N actionable findings, with the main risk.

## High-signal findings

Use one subsection per finding. IDs:

- `H-###` for substantive/history/spec problems
- `E-###` for concrete editorial/rendering defects
- `G-###` for evidence gaps that block a real decision

### H-001: Short title

- Priority: P0 | P1 | P2 | P3
- Category: spec-problem | intent-mismatch | overlooked-problem | editorial | rendering | evidence-gap
- Evidence: precise source lines, commit SHA, Jira key, Zulip stream/topic, or Confluence page ID
- Problem: the actionable concern
- Why it matters: reader/spec/implementation risk
- Recommended next step: concrete action

## Intent-vs-implementation mismatches

Only include mismatches that matter. If none, write `None found.`

## Overlooked or newly noticed problems

Only include problems visible in the current page that were not clearly covered by the tracked changes. If none, write `None found.`
```

Priority guide:

- `P0`: serious contradiction or likely spec correctness issue requiring immediate review
- `P1`: substantive semantic/conformance mismatch or unresolved workgroup intent
- `P2`: concrete issue worth triage, including significant editorial/rendering defects
- `P3`: low-priority cleanup; use sparingly

At the end of the agent response, report only the two paths written, count of actionable findings, and any important limitation. Do not paste the full file contents into the response.
