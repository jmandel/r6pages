# snomedct-usage research appendix

## Scope and coverage

- Page path: `source/snomedct-usage.html`; label: `snomedct-usage`.
- Older version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: both required `test -f` checks returned `old exists` and `new exists`; the page is modified and present in both version trees.
- Full newer source page was read end-to-end after diff/history/community investigation: 57 `wc -l` lines / 58 displayed lines, `source/snomedct-usage.html:1-58`.
- Direct page-touching commits between the two source commits: 2.
- Explicit Jira keys found in direct page commit subjects/bodies/patches/source comments: none. PR lookup found PR #1295 and PR #3901, neither with a page-specific Jira key in the direct commit evidence.
- Jira searches performed for page path/label, exact changed phrases, SNOMED licensing/current-page phrases, US/International distribution terms, THO SNOMED links, and related Specimen SNOMED terms. Promising/context issues snapshotted: `FHIR-48715`, `FHIR-12765`, `FHIR-27926`, `FHIR-41442`, `FHIR-48113`, `FHIR-48114`, and historical `FHIR-12245`.
- Zulip searches performed for page path/label, exact changed phrases, page URL, SNOMED licensing, THO link terms, `FHIR-48715`, and specimen vocabulary terms. Snapshots/extracts read for page-specific and licensing threads.
- Confluence searches performed for page path/label, changed phrases, `FHIR-48715` refs/FTS, SNOMED/US/international terms, and THO SNOMED terms. Snapshots/extracts read for relevant OO minutes and project page.
- Caveats: this is source HTML, not rendered/generated output; `%sct-vs-list%` and `%sct-concept-list%` are publisher-generated placeholders, so source diff does not show generated value-set/concept list changes. Several broad Confluence/Zulip snapshots are very large; bounded excerpts around exact keys/phrases were used. Unquoted FTS searches for hyphenated strings such as `snomedct-usage` and `FHIR-48715` can fail because FTS parses hyphens as operators; quoted reruns were used for conclusions.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `.../4.0.1-0da2a0a84dc1/source/snomedct-usage.html:1-60` | Older boundary; prose and placeholders match R6 except template/status row. |
| Source | R6 page | `.../6.0.0-ballot4-5d67a34a13a5/source/snomedct-usage.html:1-58` | Newer page read end-to-end. |
| Source | R6 owner/status row | `source/snomedct-usage.html:18` | Only non-wrapper R6 source diff: “Responsible Owner” label and no FMM cell. |
| Source | R6 licensing/US-specific statement | `source/snomedct-usage.html:21-31` | Current unchanged guidance that drives the main actionable concern. |
| Source | R6 value-set sentence | `source/snomedct-usage.html:38` | Visible typo: `value sets,the`. |
| Commit/PR | HTML template change | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; PR https://github.com/HL7/fhir/pull/1295 | Removes old `<div class="col-12">` wrapper; mechanical/template. |
| Commit/PR | R6 normative/status-row sweep | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; PR https://github.com/HL7/fhir/pull/3901 | Changes this page’s metadata row; broad sweep, not SNOMED-specific. |
| Historical commit | US-specific wording introduced | `f632a5f6862e53cac15952040d46197658a517be` | Added current “US specific codes” / IHTSDO text in 2016; outside R4→R6 boundary. |
| Historical Jira | FHIR-12245 | https://jira.hl7.org/browse/FHIR-12245 | Commit `f632a5...` cites task #12245, but the issue is ElementDefinition.type.code, not this page’s SNOMED rationale. |
| Historical commit | Value-set sentence changed | `e763f3562d184162254f08f9234dbd2d650941a3` | Introduced current `value sets,the` spacing defect before R4. |
| Jira | Specimen SNOMED international value set | https://jira.hl7.org/browse/FHIR-48715 | R6-applied-for issue seeking a SNOMED CT International specimen-condition value set using non-US-specific codes; not directly applied to this page. |
| Jira | SNOMED links/guidance | https://jira.hl7.org/browse/FHIR-12765 | Older core issue about broken SNOMED links, SNOMED International rename, and edition guidance on `snomedct.html`. |
| Jira | US Edition clarification | https://jira.hl7.org/browse/FHIR-27926 | R4 core issue pointing to SNOMED edition/version guidance; resolved no-change. |
| Jira | THO-owned edition guidance | https://jira.hl7.org/browse/FHIR-41442 | R6 core question redirected to THO/UTG-managed “Using SNOMED CT with HL7 Standards” guidance. |
| Jira | Termchangeset US-centric context | https://jira.hl7.org/browse/FHIR-48113, https://jira.hl7.org/browse/FHIR-48114 | Context-only: separate IG issues about reducing US-centric SNOMED text and international distribution pathways. |
| Zulip | Page-origin discussion | `bun run zulip:search snapshot terminology "SNOMED CT in FHIR specifications"` / https://chat.fhir.org/#narrow/stream/terminology/topic/SNOMED%20CT%20in%20FHIR%20specifications | Direct 2016 discussion of the page, IHTSDO request, US-specific core value sets, and temporary permission. |
| Zulip | IG licensing guidance | `bun run zulip:search snapshot terminology "SNOMED usage in IG"` / https://chat.fhir.org/#narrow/stream/terminology/topic/SNOMED%20usage%20in%20IG | Explains HL7 International vs affiliate/national distribution licensing expectations. |
| Zulip | THO link suggestion | `bun run zulip:search snapshot terminology "tx.fhir.org"` | 2024 request that `build.fhir.org/snomedct-usage.html` link prominently to `https://terminology.hl7.org/SNOMEDCT.html`; no evidence of implementation in this page. |
| Zulip | Generated-list build errors | `bun run zulip:search snapshot committers "Error retrieving SNOMED CT definition"` and `"✔ Error with referencing an existing value set"` | Shows publisher generation of `sct-concept-list`/links can affect this page, but not a source diff in this file. |
| Zulip | Specimen vocabulary | `bun run zulip:search snapshot "Orders and Observation WG" "Vocabulary for Specimen condition and reject reason"` | Related background for `FHIR-48715`; not page-specific. |
| Confluence | FHIR-48715 final OO minutes | https://confluence.hl7.org/spaces/OO/pages/358890328/2025-08-25+OO+-+Specimen | Minutes vote for example binding to SNOMED CT International value set using non-US-specific codes. |
| Confluence | FHIR-48715 earlier OO minutes | https://confluence.hl7.org/spaces/OO/pages/288067549/2024-11-18+OO+-+Specimen | Records discussion of why R4 used extensible binding and why SCT may be better. |
| Confluence | Specimen vocabulary project page | https://confluence.hl7.org/spaces/OO/pages/256518918/Specimen+Condition+and+Specimen+Reject+Reason+Vocabulary | Lists specimen-condition SCT concepts and SNOMED CRS activity; source tree lacks `specimen-condition-sct` in R6 ballot4. |
| Local command | Direct diff | `git -C NEW --no-pager diff --find-renames 0da2a0a... 5d67a34... -- source/snomedct-usage.html` | Establishes only 2 insertions/4 deletions. |
| Local command | Page history | `git -C NEW --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a.....5d67a34... -- source/snomedct-usage.html` | Establishes the two direct page commits. |

## Change summary

- **Metadata/template/navigation — mechanical/noise.** The R4→R6 source diff removes the old bootstrap wrapper `<div class="col-12">` and its closing tag, changes the owner cell label to `Responsible Owner:`, and removes the `Maturity Level: N/A` cell. Standards status remains `Informative`. No page-specific conformance rule changes are introduced.
- **No SNOMED content prose change.** The title, explanatory paragraphs, anchors, section headings, and `%sct-vs-list%` / `%sct-concept-list%` placeholders are unchanged from R4 source to R6 ballot4 source.
- **No new/removed normative requirements.** The page is informative, and the diff does not add/remove SHALL/SHOULD/MAY language or change binding semantics in this source file.
- **No changed examples, REST/search/operation semantics, or terminology definitions.** The direct file has no examples and no operation/search semantics. Generated value-set/concept list contents may differ at build time, but they are not present in this source-file diff.
- **Current-page issues noticed while reading the unchanged prose.** R6 ballot4 still says HL7/IHTSDO are working to remove US-specific codes from the base specification and still uses the old `IHTSDO` name; the sentence has a grammar defect (`towards remove`). The value-set paragraph has `value sets,the`. The page also lacks a prominent link to current THO SNOMED guidance despite a 2024 Zulip request.

## Source history

| Date | Commit | Subject | Page delta | Classification | Associated PR/Jira |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removes `<div class="col-12">` wrapper and closing `</div>` | Mechanical/template | PR #1295; no explicit page Jira key |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Adds `Responsible Owner:` label; removes `Maturity Level: N/A`; keeps Informative status | Metadata/template/navigation | PR #3901; no explicit page Jira key |

Outside the R4→R6 comparison boundary but relevant to current-page text:

| Date | Commit | Subject | Relevance |
|---|---|---|---|
| 2016-10-18 | `f632a5f6862e53cac15952040d46197658a517be` | task #12245 - update ElementDefinition.type.code to be a uri | Introduced the current “International distribution” / “US specific codes” paragraph. The referenced `FHIR-12245` issue is about `ElementDefinition.type.code`, so it does not explain the SNOMED wording except as the broad commit that carried it. |
| 2018-12-14 | `e763f3562d184162254f08f9234dbd2d650941a3` | Applied QA to 'allcontent' except part of 23 and all of 24 | Rewrote the value-set sentence and introduced the current missing space `value sets,the`; unchanged through R4 and R6 ballot4. |

## Jira evidence

### Explicit Jira keys from commits/patches/source comments

- None in the two direct page commits, page patches, or R4/R6 source comments.
- PR #1295 (`Gg 20210627 html template`) and PR #3901 (`2025 11 gg normative`) are associated with the direct commits via GitHub, but the directly inspected commit/page evidence did not identify a page-specific Jira issue.

### Other plausible Jira issues

- `FHIR-48715` — “Relax binding for specimen.condition from extensible to example”; FHIR-core/Specimen, raised in R5, applied for R6, status `Resolved - change required`. The resolution includes an example binding to a SNOMED-CT International value set for specimen condition “using the non-US specific codes” from the OO Confluence page. A later comment reports build failure resolving SNOMED code `881221000124104`; `rg` found no `specimen-condition-sct` or `881221000124104` in the R6 ballot4 source tree. This is related to the page’s US-vs-International SNOMED theme, but it does not change `source/snomedct-usage.html`.
- `FHIR-12765` — “Update links and guidance for using SNOMED CT in FHIR”; older core issue for `build.fhir.org/snomedct`, broken SNOMED links, SNOMED International rename, and edition/version guidance. Published/resolved; context for link freshness, not a direct R4→R6 page change.
- `FHIR-27926` — “Clarify how to create a value from a US Edition + SNOMED extension”; R4 core issue resolved no-change after pointing to SNOMED edition/version guidance. Context for why current guidance should point readers to authoritative SNOMED edition material.
- `FHIR-41442` — R6 core question about where to put SNOMED edition information; comments direct the issue to THO/UTG because the “Using SNOMED CT with HL7 Standards” page is HTA/TSMG-managed. Context for adding a THO link from this page.
- `FHIR-48113` / `FHIR-48114` — termchangeset IG issues about removing US-centric SNOMED distribution details and referring to international distribution pathways. Context only; different specification.

### Context-only Jira hits not elevated

- Quoted `"snomedct-usage"`, `"snomedct usage"`, and `"build.fhir.org/snomedct-usage"` searches found no page-specific Jira issue.
- `"Responsible Owner" "Maturity Level"` found no Jira issue explaining the status-row template change.
- `"value sets,the"` produced unrelated value-set issues; no page-specific cleanup issue was found.
- `FHIR-12245` matches the historical 2016 commit’s `task #12245`, but the issue concerns ElementDefinition logical-model type codes, not SNOMED page policy.

## Zulip evidence

- `#terminology > SNOMED CT in FHIR specifications` (2016-10-07 to 2016-10-17) directly discusses this page. Grahame said IHTSDO asked him to ensure the FHIR build uses only SNOMED International, discovered core value sets using SCT-US content (`consistency-type`, `entformula-type`, `supplement-type`, `texture-code`), linked `snomedct-usage.html`, and later said IHTSDO allowed those codes “for now” as a procedural issue but he did not ask for permanent approval. This strongly supports the origin and potential staleness of the unchanged US-specific-code paragraph.
- `#terminology > SNOMED usage in IG` (2020-08-20) explains licensing context: HL7 International may publish codes from the International distribution under its SNOMED agreement, affiliates can publish national distribution content under national agreements, and otherwise Global Patient Set may be needed. This supports the page’s licensing-management purpose but does not explain the R4→R6 mechanical diff.
- `#terminology > tx.fhir.org` (2024-02-29) includes a request that `https://build.fhir.org/snomedct-usage.html` link prominently to `https://terminology.hl7.org/SNOMEDCT.html`; Grahame replied that a PR could be made and that changing existing pages is a technical correction. The R6 source page still has no `terminology.hl7.org/SNOMEDCT.html` link.
- `#committers > Error retrieving SNOMED CT definition` (2024-07 to 2024-08) and `#committers > ✔ Error with referencing an existing value set` (2025-07) show this page’s generated `sct-concept-list` and value-set links can fail during core builds. These are generated-output/build-tool context only; no direct source-file change was found.
- `#Orders and Observation WG > Vocabulary for Specimen condition and reject reason` (2025-04) provides background for `FHIR-48715` and the SNOMED specimen-condition value-set work; it does not mention `snomedct-usage.html`.
- Searches for quoted `"FHIR-48715"` in Zulip found no direct issue-key hits.

## Confluence evidence

- `2025-08-25 OO - Specimen` (page `358890328`) references `FHIR-48715` and records the persuasive-with-modification resolution: change `Specimen.condition` binding to example and add an example binding to a SNOMED-CT International value set using non-US-specific codes from the specimen vocabulary page; vote JD Nolen / Rob Hausam 2-0-2. This supports related SNOMED International cleanup work, not a page diff.
- `2024-11-18 OO - Specimen` (page `288067549`) discusses `FHIR-48715`, asks why the element was extensible in R4, and says SCT would be a better fit for all concepts. Context for the same related issue.
- `Specimen Condition and Specimen Reject Reason Vocabulary` (page `256518918`) lists SCT specimen-condition concepts, notes draft SNOMED Content Request System activity, and includes descendants of `881221000124104 |Specimen condition finding|`. It is the table linked by `FHIR-48715`; no corresponding R6 ballot4 source artifact was found.
- Confluence FTS for quoted `"snomedct-usage"` and `"snomedct usage"` found no page-specific minutes.
- Confluence FTS for `"Responsible Owner" "Maturity Level"` found an unrelated 2026 OO minute explaining responsible owner semantics on another page; it did not explain this page’s 2025 metadata-row sweep.
- Confluence searches for `terminology.hl7.org/SNOMEDCT` show Vocab/TSMG minutes using the THO “Using SNOMED CT with HL7 Standards” page; Jira `FHIR-41442` provides the clearest formal note that THO/UTG owns that guidance.

## Timeline

- **2016-10-07 to 2016-10-17 (Zulip discussion):** Terminology thread debates SNOMED inactive concepts, IHTSDO request to use International-only content in core, SCT-US value sets in the core build, and temporary allowance to leave them in.
- **2016-10-18 (source commit):** `f632a5...` introduces the current “International distribution” / “US specific codes” paragraph while applying broad task #12245 changes.
- **2018-12-14 (source commit):** `e763f...` changes the value-set sentence and introduces `value sets,the`.
- **R4 4.0.1 boundary (old source commit `0da2a0a...`):** Page already contains the current licensing/US-specific-code paragraph and typo.
- **2020-08-20 (Zulip discussion):** SNOMED usage in IG thread documents HL7 International vs affiliate licensing expectations.
- **2021-06-26/27 (PR/source):** PR #1295 / `d7b8...` applies mechanical HTML wrapper removal.
- **2024-02-29 (Zulip discussion):** Request to link `snomedct-usage.html` to THO `SNOMEDCT.html`; no direct Jira/source follow-through found.
- **2024-10-25 to 2025-09-15 (Jira/Confluence):** `FHIR-48715` created/resolved/discussed for specimen-condition SNOMED CT International value-set binding; R6-applied-for but unresolved application questions remain in comments.
- **2025-08-25 (Confluence/Jira vote):** OO minutes vote on `FHIR-48715` resolution using non-US-specific codes, 2-0-2.
- **2025-10-31 to 2025-11-02 (source/PR):** `270e0c...` changes this page’s owner/status row as part of PR #3901 (`2025 11 gg normative`).
- **R6 ballot4 boundary (new source commit `5d67a34...`):** Page source remains unchanged in substantive SNOMED prose; only metadata/template changes appear versus R4.

## Evidence log

- `test -f OLD/source/snomedct-usage.html` and `test -f NEW/source/snomedct-usage.html`: established page exists in both trees.
- `wc -l OLD/source/snomedct-usage.html NEW/source/snomedct-usage.html`: old page 59 lines, new page 57 lines.
- `git diff --find-renames 0da2a0a... 5d67a34... -- source/snomedct-usage.html`: established 6 changed lines total (2 insertions, 4 deletions), all template/status-row changes.
- `git log --reverse --date=short ... -- source/snomedct-usage.html`: found 2 direct page-touching commits.
- `git show --stat --patch d7b8... -- source/snomedct-usage.html` and `git show --stat --patch 270e... -- source/snomedct-usage.html`: classified direct diffs as mechanical/metadata.
- `gh api /repos/HL7/fhir/commits/<sha>/pulls`: associated `d7b8...` with PR #1295 and `270e...` with PR #3901.
- Pickaxe commands `git log -S "Responsible Owner"`, `-S "Maturity Level"`, `-S '<div class="col-12">'`, `-S "US specific codes"`, and `-S "value sets,the"` on the page: confirmed direct change commits and historical origins of unchanged prose/typo.
- Full R6 page read with `view` and `wc -l`: confirmed current line locators and end-to-end review.
- `rg "specimen-condition-sct|881221000124104|SpecimenConditionSCT" NEW/source`: no matching R6 ballot4 source artifact for the `FHIR-48715` proposed value set.
- Jira FTS searches for quoted page path/label, exact page phrases, SNOMED/US/International phrases, THO link terms, and specimen terms; snapshots for `FHIR-48715`, `FHIR-12765`, `FHIR-27926`, `FHIR-41442`, `FHIR-48113`, `FHIR-48114`, `FHIR-12245`: established related/context evidence and absence of page-specific Jira.
- Zulip FTS searches for quoted page path/label, exact phrases, THO link terms, `FHIR-48715`, and specimen vocabulary terms; snapshots/extracts for `SNOMED CT in FHIR specifications`, `SNOMED usage in IG`, `tx.fhir.org`, `Error retrieving SNOMED CT definition`, `✔ Error with referencing an existing value set`, and `Vocabulary for Specimen condition and reject reason`: established page-origin/context and no direct R4→R6 rationale.
- Confluence searches `refs jira FHIR-48715`, FTS for quoted page path/label and changed phrases, THO SNOMED terms, and snapshots/extracts for pages `358890328`, `288067549`, and `256518918`: established related OO evidence and no page-specific minutes.
- Failed/confidence-affecting searches: unquoted `snomedct-usage` and `FHIR-48715` FTS searches failed due hyphen parsing; quoted reruns were used. Quoted page-specific Jira/Confluence searches returned no results, lowering confidence that a formal tracker exists for the current page prose.
