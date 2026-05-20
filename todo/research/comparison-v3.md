# comparison-v3 research appendix

## Scope and coverage

- Page path: `source/comparison-v3.html` (`comparison-v3`).
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Page boundary: present in both trees. Old source has 188 lines; new source has 186 lines.
- Page read end-to-end: yes, both old and new source pages were read. The new page is informative and remains focused on FHIR vs HL7 v3 messaging / ISO 21090 comparison guidance.
- Commits touching this page between the boundary commits: 5.
- Explicit Jira keys found in commit metadata/patches: `FHIR-25431`.
- Jira/Zulip/Confluence searches performed: explicit `FHIR-25431`, page path/label (`comparison-v3`), exact page title, `datatype data type`, and `HL7 v3 ISO 21090` / `ISO 21090 datatypes`.
- Important caveat: Jira `FHIR-25431` asks for consistency but does not record the final chosen spelling in its snapshot. The only Confluence minute found says `Using "data type"`, while the implementation commit changes this page and many others to `datatype(s)`. This is an editorial intent/evidence tension, not a semantic FHIR behavior change.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 current page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v3.html:1-186` | Full current page reviewed end-to-end. |
| Source | R4 old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-v3.html:1-188` | Baseline page reviewed end-to-end. |
| Source | R6 metadata header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v3.html:17-18` | Current header says Responsible Owner and Informative; old FMM N/A cell is gone. |
| Source | R6 terminology examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v3.html:21-27`, `:42-47`, `:115-132` | Current page uses `datatype(s)` where R4 used `data type(s)`. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed the page-level `<div class="col-12">` wrapper; mechanical template churn. |
| Commit | FHIR-25431 terminology update | `8592e1207273b786db340efb927bb6d1dc9756c9` / `https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9` | Changed this page from `data type(s)` to `datatype(s)`; only explicit Jira-linked content commit. |
| Commit | QA capitalization/noise | `dad7cf37c75822c352509e1c2e8d050408d0be18` / `https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18` | Changed `HL7 v2` to `HL7 V2` and temporarily introduced `etc..`; broad QA/editorial. |
| Commit | QA cleanup | `9f780149387dc652bec02aa7744e52774acddbc9` / `https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9` | Reverted the temporary `etc..` punctuation churn while preserving `HL7 V2`. |
| Commit | R6 metadata/header change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Replaced WG/FMM/status header with Responsible Owner/status header for this informative page. |
| PR | Commit-containing PR search result | `https://github.com/HL7/fhir/pull/2312` | GitHub PR search for commit `8592e120...` matched this merged PR (`Gg 202209 edits`, merged 2022-09-01); PR body had no page-specific rationale. |
| PR | Rebase PR search result | `https://github.com/HL7/fhir/pull/2345` | GitHub PR search also matched this merged rebase PR (merged 2022-09-03); no useful page-specific rationale found. |
| Jira | `FHIR-25431` | `https://jira.hl7.org/browse/FHIR-25431`; reopen with `bun run jira:search snapshot FHIR-25431` | Formal issue for inconsistent `datatype` vs `data type`; status Published, resolution Persuasive, applied for R5. |
| Confluence | FHIR-I minutes mentioning `FHIR-25431` | Page `66940491`, `FHIR Infrastructure Minutes CC 20200113`, `https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`; reopen with `bun run confluence:search snapshot 66940491` | Minute text says `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`, creating a direction conflict with the implementation commit. |
| Zulip | No `FHIR-25431` hits | `bun run zulip:search fts '"FHIR-25431"' --limit 20` | No Zulip rationale found for the terminology direction. |

## Change summary

### Metadata/template/navigation

- Mechanical/template: removed the surrounding `<div class="col-12">` wrapper introduced in the R4 page (`d7b8dadc6213...`). No page-specific content or requirement changed.
- Metadata/header: changed the standards metadata table from WG + `Maturity Level: N/A` + `Standards Status: Informative` to `Responsible Owner: ... Work Group` + `Standards Status: Informative` (`270e0ceb7b02...`). For this page, this is template/status presentation, not a change in content semantics.

### Editorial terminology

- `data type(s)` -> `datatype(s)` in eleven visible places on the page, including the opening ISO 21090/RIM discussion and later RIM/null-flavor mapping guidance. Implemented by `8592e1207273...` with commit subject `FHIR-25431 Inconsistent use of "datatype" vs. "data type"`.
- `HL7 v2` -> `HL7 V2` in two places (`dad7cf37c758...`), with unrelated punctuation churn immediately cleaned by `9f780149387d...`.

### Substantive/normative content

- No new, removed, or changed normative requirements were found in the page diff.
- No changed examples, REST/search/operation semantics, conformance behavior, or value-set/terminology binding semantics were found.
- Current normative-ish words (`allowed`, `mandatory`, `should`, `must`) appear in existing guidance and were not materially changed by the R4 -> R6 ballot4 page diff.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed `<div class="col-12">` at the top and `</div>` near the footer. | mechanical/template |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Changed `data type(s)` to `datatype(s)` throughout this page. The full commit touched 59 files with 300 insertions/300 deletions. | editorial terminology; Jira-linked |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | Changed `HL7 v2` to `HL7 V2`; also temporarily changed several `etc.` instances to `etc..`. | editorial/QA noise |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | Reverted `etc..` back to `etc.`; left `HL7 V2` capitalization. | editorial cleanup |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changed the metadata table from WG/FMM/status to Responsible Owner/status. | metadata/template |

## Jira evidence

### Explicit Jira keys from source history

- `FHIR-25431` (`https://jira.hl7.org/browse/FHIR-25431`), found in commit `8592e1207273b786db340efb927bb6d1dc9756c9`.
  - Snapshot command: `bun run jira:search snapshot FHIR-25431`
  - Summary: `Inconsistent use of "datatype" vs. "data type"`
  - Status: Published; Resolution: Persuasive; Type: Technical Correction; Priority: High.
  - Specification: FHIR-core; Raised in Version: R4; Work Group: fhir-i; Applied for Version: R5.
  - Related URL: `http://hl7.org/fhir/R4/datatypes.html#id`; Related Pages: `FHIR-core-datatypes`.
  - Description: "The page (and maybe others) is inconsistent with the spelling of Data Type throughout the page text (and also the page title). - Pick either "data type" or "datatype" and be consistent."
  - The snapshot has one comment, only about re-opening/re-closing due to a Jira status bug. It does not record which spelling was formally selected.

### Other Jira hits checked

- `bun run jira:search fts "datatype data type" --limit 10` found `FHIR-25431` first; the remaining top hits were unrelated datatypes/resource issues.
- `bun run jira:search fts '"comparison-v3"' --limit 20` found `FHIR-12435` and two unrelated IG issues. `FHIR-12435` (`Replace "wire format" with "serialization format"`) is historically related to wording visible on the page, but the relevant wording was already present in R4 and did not explain an R4 -> R6 ballot4 change.
- `bun run jira:search fts '"Relationship between FHIR and v3 Messaging"' --limit 20` found no results.
- `bun run jira:search fts "HL7 v3 ISO 21090" --limit 10` found context-only hits, not issues explaining this page diff.
- Initial unquoted `comparison-v3` FTS searches failed because the hyphen was parsed as an operator (`no such column: v3`); quoted retries succeeded.

## Zulip evidence

- `bun run zulip:search fts '"FHIR-25431"' --limit 20` found no results.
- `bun run zulip:search fts "inconsistent datatype \"data type\"" --limit 20` found no results.
- `bun run zulip:search fts '"comparison-v3"' --limit 20` found six context-only messages:
  - invalid generated diff links in R5/US Core contexts,
  - an IG publisher link/404 note for `http://hl7.org/comparison-v3.html`,
  - a general v3-to-FHIR mapping discussion.
  None explained the page text changes under review.
- `bun run zulip:search fts '"Relationship between FHIR and v3 Messaging"' --limit 20` found no results.
- `bun run zulip:search fts "ISO 21090 datatypes" --limit 20` found older Netherlands/ZIB discussion context only; no direct page-change rationale.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-25431` and `bun run confluence:search fts "FHIR-25431" --limit 20` both found one page:
  - Page ID `66940491`, `FHIR Infrastructure Minutes CC 20200113`, FHIRI minutes, updated `2020-01-13T22:00:30.430Z`.
  - URL: `https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`
  - Snapshot command: `bun run confluence:search snapshot 66940491`
  - Relevant text in the tracker-items section: `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`.
- This Confluence evidence is the only found source that states a direction for the terminology issue. It conflicts with the implementation commit's direction (`data type(s)` -> `datatype(s)`). Because Jira itself only says to pick one and be consistent, the conflict is an editorial intent/evidence gap rather than proof that the page is wrong.
- `bun run confluence:search fts "datatype data type" --limit 20` returned many unrelated later datatype-mapping minutes; none explained this page change.
- `bun run confluence:search fts '"comparison-v3"' --limit 20` found one unrelated Public Health/US Core diff-link reference.
- `bun run confluence:search fts '"Relationship between FHIR and v3 Messaging"' --limit 20` found no results.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` metadata | R4-raised technical correction about inconsistent `datatype` vs `data type`. |
| 2020-01-13 | FHIR-I minutes | Confluence page `66940491` | Minute says `Using "data type" Will auto approve`; no fuller rationale found. |
| 2021-06-27 | Source commit | `d7b8dadc6213...` | Template wrapper removal on this page. |
| 2021-10-27 | Jira resolved/status change | `FHIR-25431` metadata/comment | Jira shows resolved and later Published; sole comment says status was re-opened/re-closed due to a Jira bug. |
| 2022-08-31 | Source commit | `8592e1207273...` | Applied `FHIR-25431`, but changed this page to `datatype(s)`, opposite the literal Confluence minute wording. |
| 2022-09-01 | PR merge | `https://github.com/HL7/fhir/pull/2312` | GitHub search for commit matched merged PR `Gg 202209 edits`; no useful PR body rationale. |
| 2022-09-03 | Rebase PR merge | `https://github.com/HL7/fhir/pull/2345` | GitHub search for commit also matched rebase PR; no useful PR body rationale. |
| 2023-02-21 | Source commits | `dad7cf37c758...`, `9f780149387d...` | QA capitalization and punctuation cleanup. |
| 2025-10-31 | Source commit | `270e0ceb7b02...` | R6 metadata/header template change. |

## Evidence log

- `test -f .../4.0.1-0da2a0a84dc1/source/comparison-v3.html` -> old page exists.
- `test -f .../6.0.0-ballot4-5d67a34a13a5/source/comparison-v3.html` -> new page exists.
- `wc -l` on both source files -> old 188 lines, new 186 lines.
- `git -C <new-tree> diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/comparison-v3.html` -> direct diff showed only wrapper/header metadata, `data type` -> `datatype`, and `HL7 v2` -> `HL7 V2` edits.
- `git -C <new-tree> log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0...5d67a34 -- source/comparison-v3.html` -> found five page-touching commits.
- `git -C <new-tree> show --stat --patch <commit> -- source/comparison-v3.html` for all five commits -> classified mechanical/template vs editorial terminology vs metadata changes.
- `rg -n 'SHALL|SHOULD|MUST|MAY|\bmust\b|\bshould\b|\bshall\b|required|mandatory|allowed|prohibited' <new comparison-v3.html>` -> found existing guidance words; no changed normative requirement in the diff.
- `bun run jira:search snapshot FHIR-25431` -> Jira status/disposition/details for the terminology issue.
- `bun run jira:search fts "datatype data type" --limit 10` -> confirmed `FHIR-25431` as the relevant Jira hit; others context-only.
- `bun run jira:search fts '"comparison-v3"' --limit 20` and exact title search -> no relevant page-change Jira issue found.
- `bun run zulip:search fts '"FHIR-25431"' --limit 20`, `bun run zulip:search fts "inconsistent datatype \"data type\"" --limit 20`, exact page title search -> no relevant Zulip rationale found.
- `bun run zulip:search fts '"comparison-v3"' --limit 20` -> context-only generated-link discussions, not page-change rationale.
- `bun run confluence:search refs jira FHIR-25431`; `bun run confluence:search snapshot 66940491` -> found FHIR-I minute with `Using "data type" Will auto approve`.
- `bun run confluence:search fts "datatype data type" --limit 20`, `bun run confluence:search fts '"comparison-v3"' --limit 20`, exact title search -> no other relevant Confluence evidence found.
- `gh pr list -R HL7/fhir --state all --search "8592e1207273b786db340efb927bb6d1dc9756c9" --limit 20`; `gh pr view` for matching PRs -> commit appeared in PRs `#2312` and `#2345`, neither with useful page-specific rationale in the PR body.
- Failed searches that affected confidence: unquoted FTS searches for `FHIR-25431` and `comparison-v3` in Jira/Zulip/Confluence errored because the hyphen was parsed as an operator; quoted retries were used for conclusions.
