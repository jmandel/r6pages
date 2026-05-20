# search_filter research appendix

## Scope and coverage
- **Page path:** `source/search_filter.html`
- **Old version:** R4 4.0.1 (commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`)
- **New version:** R6 ballot4 6.0.0-ballot4 (commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`)
- **Page read end-to-end:** Yes (299 lines, complete newer source reviewed)
- **Commit count:** 8 commits touched the file between old and new commits
- **Explicit Jira keys found in commits:** FHIR-38031, FHIR-37811, FHIR-44047, FHIR-45306
- **Jira searches performed:** snapshots of all four keys; FTS searches for "_filter normative", "_filter parameter normative", "search_filter normative status"
- **Zulip searches:** "_filter normative", "search_filter parameters", "_has _filter reverse" — no threads directly discuss the normative promotion or the specific grammar fixes; Zulip FTS hyphens in FHIR-XXXXX cause SQL column errors for exact key searches (workaround: use quoted phrases)
- **Confluence searches:** refs jira for FHIR-38031, FHIR-37811, FHIR-44047, FHIR-45306; FTS for "search_filter normative", "_filter normative R6"
- **Important caveats:**
  - The normative promotion (commit `270e0ceb`) has no associated Jira key in its commit message. No dedicated Jira issue was found; the change is attributed to a broad "normative changes for R6" sweep by Grahame Grieve.
  - The fix commit `cf2bd24c` ("fix _filter for _has and composite search parameters") has no Jira key and no associated PR number in commit metadata; cannot be traced to a Jira issue with confidence.
  - Zulip FTS fails on bare issue keys containing hyphens-with-digits (e.g. `FHIR-38031`); searches were restructured as quoted phrases without success for those exact keys.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|------|-------|-------------|----------------|
| Source (old) | R4 search_filter.html | `.cache/.../4.0.1-0da2a0a84dc1/source/search_filter.html` | Baseline for diff |
| Source (new) | R6b4 search_filter.html | `.cache/.../6.0.0-ballot4-5d67a34a13a5/source/search_filter.html` | Current content |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (2021-06-27) | Mechanical HTML template |
| Commit | FHIR-38031 applied | `60a800ba8c11d3ab5d43d7a0a42dcf6b15ead908` (2022-08-29) | Removes Additional Parameters section |
| Commit | FHIR-37811 applied | `29624ec5f80763efe18849b995c45334eccf6f59` (2022-08-29) | Clarifies parameter access in intro |
| Commit | _has + composite fix | `cf2bd24c028dbbb0fbef1a09e6c96930a5b9394c` (2023-02-16) | Grammar, examples, typo fix, no Jira key |
| Commit | QA pass | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (2023-02-24) | Minor QA edits |
| Commit | Normative promotion | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (2025-10-31) | Trial Use → Normative, colstu → colsi |
| Commit | FHIR-44047 applied | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` (2025-11-03) | i.e. → i.e., punctuation fix |
| Commit | FHIR-45306 applied | `1d29a98d3d2f8e140eb23843984a6f2177fbe645` (2025-10-31) | subject → patient in two examples |
| Jira | FHIR-38031 | https://jira.hl7.org/browse/FHIR-38031 | Remove superseded Additional Parameters section |
| Jira | FHIR-37811 | https://jira.hl7.org/browse/FHIR-37811 | Clarify _filter uses server-available search params |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047 | Punctuation: e.g., / i.e., throughout spec |
| Jira | FHIR-45306 | https://jira.hl7.org/browse/FHIR-45306 | subject → patient in chained examples |
| Confluence | FHIR-38031 voted | https://confluence.hl7.org/spaces/FHIRI/pages/108307268 | CC 2022-08-29 vote 12-0-0 |
| Confluence | FHIR-37811 voted | https://confluence.hl7.org/spaces/FHIRI/pages/108307268 | CC 2022-08-29 vote 12-0-0 |
| Confluence | FHIR-45306 voted | https://confluence.hl7.org/spaces/FHIRI/pages/239246098 | CC 2024-05-13 vote 9-0-0 |
| Confluence | FHIR-44047 voted | https://confluence.hl7.org/spaces/FHIRI/pages/234784975 | WGM 202405 Dallas, will fix |
| Zulip | _has in _filter (Aug 2025) | #hapi > `_has reverse chain searches in _filter` (2025-08-08) | Community confirming _has in _filter is documented but not implemented in HAPI |
| Snapshot cmd | FHIR-38031 | `bun run jira:search snapshot FHIR-38031` | Full issue + resolution |
| Snapshot cmd | FHIR-45306 | `bun run jira:search snapshot FHIR-45306` | Full issue + comments |

## Change summary

### 1. Standards status: Trial Use (FMM 2) → Normative (substantive/normative)
The page header changed from `class="colstu"` (Trial Use, FMM 2) to `class="colsi"` (Normative, no FMM). The Maturity Level cell was removed. The responsible owner label was added. This is the most consequential change: `_filter` is now formally Normative in R6. No specific Jira issue key was found for this decision.

### 2. Intro paragraph reworded — access to server-available search parameters (semantic guidance, FHIR-37811)
Old: "It uses the same set of standard parameters defined for the resources" (implied only core FHIR params).
New: "Filter requests have access to the same set of search parameters that are available to the search operation in that resource context on the server (e.g., standard parameters, parameters for each resource, etc.)."
Motivation: clarify that server-registered custom SearchParameters are also accessible. Voted 12-0-0 (2022-08-29).

### 3. Removal of "Additional Parameters" section (substantive, FHIR-38031)
A ~66-line table defining resource-specific search parameters (`related` for Observation, `characteristic` for Group, `relatesTo` for DocumentReference, event/item/item-event for ServiceRequest) was removed as superseded content. Voted 12-0-0 (2022-08-29).
Residual issue: two examples referencing `Observation: related[...]` remain in the page with the note "(note: this uses one of the search parameters defined for this mechanism, see below)" — but the section they pointed to no longer exists.

### 4. `_has` reverse chaining support added to grammar and examples (substantive, no Jira key)
Commit `cf2bd24c` (2023-02-16, Grahame Grieve, no Jira key):
- Added two new examples: `_has:Observation:patient:code` reverse chain example; composite search parameter example (`code-value-quantity`).
- Grammar refactored: `paramExp` now uses `paramValue` (= `hasSpecifier` / `paramPath`); `hasSpecifier` production rule added; `paramPath` updated to use `paramValue` in tail position.
- `dateChar` rule extended with `:` and `Z` to cover timezone in dateTime.
- Inline note added: "Reverse chaining is also allowed, using _has:Resource:index1:index2 as the parameter".
- Composite parameter note added: "only the codes `eq` and `ne` are appropriate in this case".
- Three typos fixed: "Rhe" → "The" (three bullets).

### 5. Example correction: `subject` → `patient` for Observation examples (example change, FHIR-45306)
Two examples changed from `Observation: subject.name co "pet"` and `Observation: subject.id eq 3425 and ...` to use `patient.name` and `patient.id`. Rationale: where the description explicitly refers to a patient, the search parameter should be `patient` (a specific Observation search parameter) rather than the polymorphic `subject`. Voted 9-0-0 (2024-05-13). Note: two `related` examples using `subject` context were intentionally left as-is per the resolution.

### 6. Punctuation fix: `i.e.` → `i.e.,` (editorial, FHIR-44047)
One instance in the date format note updated from "i.e. XSD" to "i.e., XSD". Broad across-spec punctuation correction voted at WGM 202405 Dallas.

### 7. Template/boilerplate changes (mechanical/noise)
- `<div class="col-12">` wrapper removed (template restructuring).
- `</div>` removed correspondingly.
- Minor whitespace changes.

### 8. `time zone` → `timezone` (editorial)
One instance in the eq row of the type matrix and one in the syntax notes changed from "time zone" (two words) to "timezone" (one word). Committed by `cf2bd24c`.

## Source history

| Date | Commit | Message | Classification |
|------|--------|---------|----------------|
| 2021-06-27 | `d7b8dadc` | update html template | Mechanical/template |
| 2022-08-29 | `60a800ba` | FHIR-38031 - Remove superseded content | Substantive (section removal) |
| 2022-08-29 | `29624ec5` | FHIR-37811 - Clarify _filter access to search parameters | Semantic guidance |
| 2023-02-16 | `cf2bd24c` | fix _filter for _has and composite search parameters | Substantive (grammar + examples), no Jira key |
| 2023-02-24 | `270e0ceb` | more qa | Editorial/QA |
| 2025-10-31 | `270e0ceb` | normative changes for R6 | Substantive normative (status promotion) |
| 2025-11-03 | `887bc2383` | FHIR-44047 | Editorial (punctuation) |
| 2025-10-31 | `1d29a98d` | FHIR-45306 - example clarifications | Example correction |

Note: Two commits share the same short hash prefix `270e0ceb` but are different commits at different dates (2023-02-24 "more qa" and 2025-10-31 "normative changes for R6").

## Jira evidence

### Explicit Jira keys found in commits/patches
- **FHIR-37811** (raised R4, resolved 2022-08-29, Persuasive with Modification, applied R5): Clarify _filter doc about parameter usage. Applied to R6 source with same wording.
- **FHIR-38031** (raised R5, resolved 2022-08-29, Persuasive, applied R5): Remove superseded "Additional Parameters" section. Applied to R6 source.
- **FHIR-44047** (raised R6 ballot1, resolved 2024-05-23, Persuasive, status "Resolved - change required"): Punctuation fix for e.g., / i.e., across spec. Status is not "Applied" or "Published"; commit `887bc2383` (2025-11-03) applied it to this page.
- **FHIR-45306** (raised R6, resolved 2024-05-13, Persuasive with Modification, Applied): `subject` → `patient` in chained examples. PR #3967 mentioned in comments.

### Jira issues plausibly explaining same changed text (no explicit commit link)
- No additional Jira issues found through FTS searches that plausibly explain remaining changes not covered by above keys.

### Context-only Jira hits (should not drive action)
- FHIR-17892 "\_filter operators lack sufficient detail for implementation" (STU3, Resolved - No Change): older issue about operator completeness, not applied.

## Zulip evidence

### #hapi > `_has reverse chain searches in _filter` (2025-08-08)
Michael Garde noted that `_has` in `_filter` is documented at `https://build.fhir.org/search_filter.html` but rejected by HAPI FHIR. This confirms the grammar change in `cf2bd24c` is known to the community and there is an implementation gap in HAPI. Not directly actionable for the spec but confirms the feature is documented and tested against.

### #implementers > Reverse Chaining with multiple `_has` (2024-03-04 to 2024-03-05)
Lloyd McKenzie and Emily Mitacc discuss using `_filter` with multiple `_has` for correlated queries. Lloyd notes `_filter` isn't widely implemented and he isn't super familiar with it. Suggests the community has low familiarity with the feature.

### Background-only threads
Several threads from 2016–2022 discuss `_filter` generally without touching the specific changed text.

## Confluence evidence

### FHIR Infrastructure CC 2022-08-29 (page 108307268)
Contains vote records for FHIR-38031 (Persuasive, 12-0-0, Grahame Grieve/Gino Canessa) and FHIR-37811 (Persuasive with Mod, 12-0-0, Gino Canessa/Yunwei Wang) as part of a block vote on the search page group.

### FHIR Infrastructure CC 2024-05-13 (page 239246098)
Contains vote record for FHIR-45306 (Persuasive with Modification, 9-0-0, Gino Canessa/Corey Spears).

### FHIR Infrastructure WGM 202405 Dallas (page 234784975)
Contains vote record for FHIR-44047 ("will fix").

### No Confluence evidence found for normative promotion of search_filter
Searches for "search_filter normative" and "_filter normative R6" in Confluence returned only unrelated OO WG pages. The normative promotion decision was not traced to WGM minutes in the available data.

## Timeline

| Date | Event |
|------|-------|
| 2022-07-26 | FHIR-37811 created (Nicolas Riss, R4 raised) |
| 2022-08-29 | FHIR-37811 and FHIR-38031 voted 12-0-0 at FHIR-I CC |
| 2022-08-29 | Both applied to source (commits `60a800ba`, `29624ec5`) |
| 2023-02-16 | Grahame Grieve applies `_has` grammar + composite param fix (no Jira key, `cf2bd24c`) |
| 2024-01-22 | FHIR-44047 created (Jeff Brown, R6 ballot1) |
| 2024-04-18 | FHIR-45306 created (Charles Ye, R6) |
| 2024-05-13 | FHIR-45306 voted 9-0-0, resolved Persuasive with Modification |
| 2024-05-23 | FHIR-44047 resolved Persuasive |
| 2025-10-31 | Normative promotion applied (`270e0ceb`, "normative changes for R6") |
| 2025-10-31 | FHIR-45306 applied (`1d29a98d`) |
| 2025-11-03 | FHIR-44047 applied (`887bc2383`) |
| 2025-11-03 | Latest commit in range — this is the R6 ballot4 state |

## Evidence log

| Command/Search | What it established |
|----------------|---------------------|
| `git log --reverse ... -- source/search_filter.html` | 8 commits; extracted FHIR-38031, FHIR-37811, FHIR-44047, FHIR-45306 |
| `git show 60a800ba` | FHIR-38031 removes Additional Parameters section (66 lines) |
| `git show 29624ec5` | FHIR-37811 rewrites intro paragraph |
| `git show cf2bd24c` | _has grammar + composite note + dateChar + typo fix; no Jira key |
| `git show 270e0ceb` (2025-10-31) | Normative promotion: colstu → colsi, FMM removed |
| `git show 887bc2383` | FHIR-44047 punctuation fix |
| `git show 1d29a98d` | FHIR-45306 subject → patient in two examples |
| `bun run jira:search snapshot FHIR-38031` | Persuasive, Applied R5, vote 12-0-0 2022-08-29 |
| `bun run jira:search snapshot FHIR-37811` | Persuasive with Mod, Applied R5, vote 12-0-0 2022-08-29 |
| `bun run jira:search snapshot FHIR-44047` | Persuasive, "Resolved - change required", ballot1 R6 |
| `bun run jira:search snapshot FHIR-45306` | Persuasive with Mod, Applied R6, vote 9-0-0, PR #3967 |
| `bun run jira:search fts "_filter normative"` | No results matching the status promotion decision |
| `bun run zulip:search fts '"_has" "_filter" "reverse"'` | Found 2025-08-08 HAPI thread; no threads about spec content changes |
| `bun run confluence:search refs jira FHIR-45306` | Found CC 2024-05-13 vote minutes |
| `bun run confluence:search refs jira FHIR-38031` | Found CC 2022-08-29 vote minutes |
| `bun run confluence:search fts "_filter normative R6"` | No FHIR-I minutes about _filter normative decision found |
| Full page read (R6 ballot4) | Identified dangling "see below", operator table gaps, grammar case inconsistencies |
