# graphql research appendix

## Scope and coverage

- Page path: `source/graphql.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: confirmed present in both trees.
- Newer page read end-to-end: yes, all 835 source lines.
- Source history count: 10 commits touching `source/graphql.html` between the two commits.
- Explicit Jira keys found in source commit messages/patches: `FHIR-19659`, `FHIR-24913`, `FHIR-25408`, `FHIR-44047`.
- Jira/Zulip/Confluence searches were performed for explicit keys plus distinctive phrases around GraphQL, mandatory/modifier elements, normative status, draft/removal status, and changed examples.
- Caveat: no PR numbers were found in the page-specific commit messages. Confluence provides the clearest evidence for the 2025 R6 normative/removal decision; no Jira issue was found that directly records the `source/graphql.html` normative-status change or the apparent "remove Using GraphQL" decision.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/graphql.html:17` | R4 page was Trial Use/FMM 0 |
| source | R4 stale draft/status text | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/graphql.html:24-35` | Draft and "not a formal standard" language existed in R4 |
| source | R6 status table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:17` | Current page is marked Standards Status: Normative |
| source | R6 stale draft/status text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:24-35` | Current normative page still says "This page is a draft" and GraphQL has no standards path |
| source | Mandatory/modifier GraphQL guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:88-94` | Added by `FHIR-19659` |
| source | Leftover `(r3)` prose | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:143-152` | `FHIR-25408` intended release-neutral examples, but visible R3 text remains |
| source | Practitioner example fields | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:315-333` | Current examples select invalid-looking `Practitioner.practitionerRole.speciality` |
| source | Practitioner specialty note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/practitioner/structuredefinition-Practitioner.xml:377-384` | Says `PractitionerRole.specialty` is not defined on Practitioner |
| source | PractitionerRole specialty element | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/practitionerrole/structuredefinition-PractitionerRole.xml:306-310` | Correct field is `specialty`, not `speciality` |
| commit | Add mandatory/modifier guidance | `7d847aa27b5977a707e4ce6ddd33141b0c05d61e` / `https://github.com/HL7/fhir/commit/7d847aa27b5977a707e4ce6ddd33141b0c05d61e` | Implements `FHIR-19659` |
| commit | Replace hardcoded test-server examples | `8c3c5be2487c884c03c5a7fa079df00fbb7b142b` / `https://github.com/HL7/fhir/commit/8c3c5be2487c884c03c5a7fa079df00fbb7b142b` | Implements `FHIR-25408`, but leaves prose `(r3)` |
| commit | Mark page normative | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes GraphQL page metadata to Normative |
| commit | E.g./i.e. punctuation cleanup | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Implements `FHIR-44047` punctuation changes |
| Jira | `FHIR-19659` | `https://jira.hl7.org/browse/FHIR-19659`; reopen with `bun run jira:search snapshot FHIR-19659` | Formal rationale for mandatory/modifier GraphQL guidance |
| Jira | `FHIR-25408` | `https://jira.hl7.org/browse/FHIR-25408`; reopen with `bun run jira:search snapshot FHIR-25408` | Formal intent to remove R3/test-server version-specific references |
| Jira | `FHIR-44047` | `https://jira.hl7.org/browse/FHIR-44047`; reopen with `bun run jira:search snapshot FHIR-44047` | Broad punctuation correction applied to this page |
| Zulip | Mandatory elements thread | `https://chat.fhir.org/#narrow/stream/implementers/topic/_elements%20should%20include%20mandatory%20elements`; `bun run zulip:search snapshot implementers "_elements should include mandatory elements"` | Gives safety rationale that matches `FHIR-19659` wording |
| Zulip | Flattening concern thread | `https://chat.fhir.org/#narrow/stream/graphql/topic/flatten%20breaks%20spec%3F`; `bun run zulip:search snapshot graphql "flatten breaks spec?"` | Background discussion of flattening/directive safety and compatibility concerns |
| Confluence | 2025 FHIR-I R6 WGM minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh`; `bun run confluence:search snapshot 358879917` | Records "We will remove Using GraphQL with FHIR" and separate normative handling for `$graphql` operation |
| Confluence | 2022 FHIR-I WGM minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/81028096/FHIR+Infrastructure+Minutes+WGM+202201`; `bun run confluence:search snapshot 81028096` | Earlier target was "Using GraphQL follows GraphDefinition Target to ML 2" |
| Confluence | 2024 FHIR-I WGM minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; `bun run confluence:search snapshot 234784975` | Records vote/disposition context for `FHIR-44047` |

## Change summary

### Page status and maturity metadata - substantive metadata/status

- R4 page was Trial Use/FMM 0.
- Intermediate source history changed FMM 0 to FMM 3 in `c3da43d4d906bc8ef71d67923be5e5db976665be`.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the page table to `colsn` and Standards Status: Normative, removing the FMM cell.
- The page body still says "This page is a draft" and says GraphQL is not a formal standard with no standards path described.
- Confluence 2025 WGM minutes appear to distinguish this narrative page from the `$graphql` operation page: "We will remove Using GraphQL with FHIR" while "Operation $graphql on Resource" is "Normative." This looks like the highest-risk mismatch found.

### Mandatory/modifier element guidance - substantive/normative semantic guidance

- `FHIR-19659` asked for GraphQL guidance analogous to `_elements`, because clients selecting subsets may miss mandatory and modifier elements.
- Commit `7d847aa27b5977a707e4ce6ddd33141b0c05d61e` added a client `SHOULD` to retrieve mandatory and modifier elements and check their values.
- Commit `55017c7f96a4fe7e8a3f3d08718be0ba56799699` fixed the initially broken `safety.html#conformance` link and "check list" wording.
- Zulip's `_elements should include mandatory elements` thread supports the safety rationale: Grahame highlighted safety issues such as ignoring mandatory status like `entered-in-error`, and Josh explicitly raised whether GraphQL had the same "clients can accidentally opt out of fetching safety-critical modifier elements" problem.

### Example URL/version changes - example/editorial, with one partial implementation problem

- `FHIR-24913` is primarily about the versions page, but commit `67c4ba690d1c4aca555bf00d9f8ca9bdbbbb095e` changed several hardcoded `r4` example URLs to `r5`.
- `FHIR-25408` directly targeted GraphQL field-selection examples and asked to update/remove R3 references.
- Commit `8c3c5be2487c884c03c5a7fa079df00fbb7b142b` replaced hardcoded `http://test.fhir.org/r3`, `/r4`, and `/r5` examples with `<%test-server%>`, matching the Jira resolution.
- However, current prose still says "Patient resource (r3)" at line 144. That is a remaining intent-vs-implementation mismatch.

### Resource-reference example typo correction - example/editorial, with remaining example defect

- Commit `9991aeb25ebef43a8f4db3fb6a1c988356ba33bf` changed `Practioner` to `Practitioner` in two GraphQL examples.
- The resulting examples still query `Practitioner { practitionerRole { speciality } }`. In the R6 source, `Practitioner` explicitly says `PractitionerRole.specialty` is not defined on the practitioner, and `PractitionerRole` uses `specialty` rather than `speciality`.
- This looks like a concrete reader-facing example defect rather than just history.

### Template/boilerplate/editorial cleanup - mechanical/editorial only

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the page wrapper `div` as part of an HTML template update.
- `dad7cf37c75822c352509e1c2e8d050408d0be18` fixed "dscribed" and "an field".
- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applied `e.g.,`/`i.e.,` punctuation cleanup for `FHIR-44047`.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `9991aeb25ebef43a8f4db3fb6a1c988356ba33bf` | 2020-04-30 | `fix typo` | Replaced `Practioner` with `Practitioner` in resource-reference examples | Editorial/example change; incomplete because `practitionerRole{speciality}` remains problematic |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed outer `div class="col-12"` wrapper | Mechanical/template |
| `7d847aa27b5977a707e4ce6ddd33141b0c05d61e` | 2022-08-28 | `FHIR-19659 GraphQL and mandatory, is-modifier elements` | Added client `SHOULD` retrieve/check mandatory and modifier elements | Substantive guidance |
| `67c4ba690d1c4aca555bf00d9f8ca9bdbbbb095e` | 2022-08-28 | `FHIR-24913 Outdated statements on Version page` | Updated several example URLs from R4 to R5 | Contextual/example churn; Jira itself is not GraphQL-specific |
| `8c3c5be2487c884c03c5a7fa079df00fbb7b142b` | 2022-08-28 | `FHIR-25408 Graphql field selection remove R3` | Replaced hardcoded `test.fhir.org/r3`, `/r4`, `/r5` with `<%test-server%>` | Example/version cleanup; partial because prose `(r3)` remains |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Changed Maturity Level 0 to 3 | Metadata/status |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | Fixed "dscribed" and "an field" | Editorial |
| `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | 2023-02-24 | `more qa` | Fixed malformed safety-checklist link and wording | Editorial/QA on prior substantive change |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Marked page Standards Status: Normative | Substantive metadata/status; conflicts with Confluence evidence |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.`/`i.e.` in multiple spots | Editorial |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-19659` (`GraphQL and mandatory, is-modifier elements`) is directly relevant. It is Published/Persuasive, applied for R5, and requested that GraphQL warn clients about mandatory and modifier elements. Resolution: "Add a statement to the same effect to the GraphQL section." This matches current lines 88-94.
- `FHIR-25408` (`Graphql field selection remove R3`) is directly relevant. Description says the Field Selection section has several references to "r3" in text and examples and suggests updating to R4 or removing explicit release references. Resolution says to add a `test-server` variable and update `test.fhir.org` references. The URL part was applied, but current line 144 still says `(r3)`.
- `FHIR-44047` is a broad R6 punctuation technical correction for `e.g.,` and `i.e.,`. It was applied to this page by `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`. Jira status remains `Resolved - change required` in the local snapshot, but that is workflow context only and not itself a page finding.
- `FHIR-24913` was included in a page-touching commit, but the issue is really about the Version page's standards-status descriptions. It should be treated as contextual for GraphQL; it does not explain a GraphQL-specific semantic change.

### Other Jira searches

- `bun run jira:search fts "GraphQL normative" --limit 20` did not find a page-specific normative/removal issue. Hits were context-only (`FHIR-8806`, `FHIR-31451`, `FHIR-23809`).
- `bun run jira:search fts "GraphQL draft" --limit 20` found only context outside this core page decision.
- `bun run jira:search fts "\"Using GraphQL with FHIR\"" --limit 20` and `bun run jira:search fts "\"We will remove Using GraphQL\"" --limit 20` found no Jira issue.
- `bun run jira:search fts "GraphQL mandatory modifier" --limit 20` found `FHIR-19659`.
- Exact phrase search for `"Clients SHOULD always be retrieving mandatory"` found no Jira hits beyond the direct `FHIR-19659` issue.

## Zulip evidence

- Explicit key searches for `"FHIR-19659"`, `"FHIR-24913"`, `"FHIR-25408"`, and `"FHIR-44047"` found no Zulip results after retrying with quoted keys. Unquoted key searches failed because FTS parsed the hyphenated issue keys as expressions.
- `bun run zulip:search snapshot implementers "_elements should include mandatory elements"` captured the strongest rationale for the mandatory/modifier safety guidance. Relevant messages:
  - Grahame Grieve: mandatory elements often have safety aspects; ignoring `Observation.status` could lead a client to present `entered-in-error` observations.
  - Josh Mandel: asked whether GraphQL has the same "clients can accidentally opt out of fetching safety-critical modifier elements" problem.
  - Grahame Grieve: GraphQL output is not a FHIR resource, but "the same safety issues are still present."
- `bun run zulip:search snapshot graphql "flatten breaks spec?"` is background-only. Anthony Master raised concerns that `@flatten` may violate GraphQL's response-shape expectations and create ambiguous output. Lloyd McKenzie responded that flattening can make data unsafe, similar to filtering out modifier/context elements, but it is meant for UI/read-only use and should not be used where updates are intended. This supports caution around current flattening guidance but did not reveal a clear applied-change mismatch for this R4-to-R6 page review.

## Confluence evidence

- `bun run confluence:search snapshot 358879917` (`FHIR Infrastructure Minutes WGM 202509 - Pittsburgh`) is the most important external evidence:
  - It lists `Using GraphQL with FHIR https://build.fhir.org/graphql.html`.
  - The captured text says: "Grahame: We should remove this page. We have moved well beyond what I had written here. We will remove Using GraphQL with FHIR ... Grahame: There was a burst of use, but has since fallen off. There is conformance language".
  - In the same R6 normative-status discussion, it separately lists `Operation $graphql on Resource https://build.fhir.org/resource-operation-graphql.html` as "Normative."
  - This suggests the narrative page was supposed to be removed, while the `$graphql` operation page may be the normative artifact. The current implementation instead leaves `source/graphql.html` present and marks it Normative.
- `bun run confluence:search snapshot 81028096` (`FHIR Infrastructure Minutes WGM 202201`) provides earlier context: "Using GraphQL follows GraphDefinition Target to ML 2." This is not a final R6 decision but shows the page was previously considered low maturity rather than normative.
- `bun run confluence:search refs jira FHIR-44047` found `FHIR Infrastructure Minutes WGM 202405 - Dallas` (`234784975`), which includes a vote line with `jira:FHIR-44047 will fix`. This supports the broad punctuation cleanup but is not a substantive GraphQL decision.
- Confluence searches for `FHIR-19659`, `FHIR-24913`, and `FHIR-25408` found no high-signal minutes or refs in the local mirror.

## Timeline

| Date | Clock | Evidence | Notes |
|---:|---|---|---|
| 2018-11-16 | Jira created | `FHIR-19659` | GraphQL should warn about mandatory/modifier elements |
| 2018-12-10 | Jira vote/resolution | `FHIR-19659`, vote 6-0-0 | Persuasive; add GraphQL statement |
| 2019-10-08/14 | Jira created/resolved | `FHIR-24913` | Versions-page issue; later commit also touched GraphQL examples |
| 2019-12-26 | Jira created | `FHIR-25408` | Field Selection had R3/test-server references |
| 2020-04-30 | Source commit | `9991aeb25ebef43a8f4db3fb6a1c988356ba33bf` | Fixed `Practioner` typo, but current example still has invalid-looking fields |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | HTML template churn |
| 2021-07-20 to 2021-08-06 | Zulip discussion | `#graphql > flatten breaks spec?` | Background concerns about `@flatten` safety/spec fit |
| 2022-01-22/02-28 | Jira resolution/vote | `FHIR-25408`, vote 13-0-2 | Use release-specific test-server variable; remove/update R3 examples |
| 2022-08-28 | Source commit | `7d847aa27b5977a707e4ce6ddd33141b0c05d61e` | Applies `FHIR-19659` safety guidance |
| 2022-08-28 | Source commit | `8c3c5be2487c884c03c5a7fa079df00fbb7b142b` | Applies most of `FHIR-25408` URL change |
| 2022-09-05 | Source commit | `c3da43d4d906bc8ef71d67923be5e5db976665be` | Raises page FMM from 0 to 3 |
| 2022-10-05/06 | Zulip discussion | `#implementers > _elements should include mandatory elements` | Supports safety rationale later mirrored on GraphQL page |
| 2023-02-21/24 | Source commits | `dad7cf37...`, `55017c7...` | QA fixes, including broken safety-checklist link |
| 2024-01-22 to 2024-05-23 | Jira/disposition | `FHIR-44047` | Broad R6 punctuation cleanup |
| 2024-05 WGM | Confluence minutes | `234784975` | `FHIR-44047 will fix` vote line |
| 2025-09 WGM | Confluence minutes | `358879917` | Says to remove `Using GraphQL with FHIR`; separately marks `$graphql` operation normative |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Marks `source/graphql.html` Normative |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies punctuation cleanup for `FHIR-44047` |

## Evidence log

- Confirmed page existence with `test -f` against both source trees: both old and new pages exist.
- Ran rename-aware direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/graphql.html`
  - Established the page has one added `SHOULD` guidance paragraph, example URL/version changes, status metadata change, and editorial/template cleanup.
- Ran source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/graphql.html`
  - Found 10 touching commits.
- Inspected each touching commit with `git show --stat --patch <commit> -- source/graphql.html`.
- Read the full R6 ballot4 page in four chunks covering lines 1-835.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-19659`
  - `bun run jira:search snapshot FHIR-24913`
  - `bun run jira:search snapshot FHIR-25408`
  - `bun run jira:search snapshot FHIR-44047`
- Jira FTS searches included `GraphQL normative`, `GraphQL draft`, `GraphQL mandatory modifier`, exact changed phrase `"Clients SHOULD always be retrieving mandatory"`, `"Using GraphQL with FHIR"`, `"We will remove Using GraphQL"`, `resource-operation-graphql normative`, and `"Operation $graphql" normative`.
- Zulip searches:
  - Initial unquoted issue-key searches failed because FTS parsed hyphenated keys; reran quoted issue-key searches and found no results.
  - `bun run zulip:search snapshot implementers "_elements should include mandatory elements"`
  - `bun run zulip:search snapshot graphql "flatten breaks spec?"`
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-19659`, `FHIR-24913`, `FHIR-25408`, `FHIR-44047`
  - `bun run confluence:search fts "GraphQL normative" --limit 20`
  - `bun run confluence:search fts "GraphQL draft" --limit 20`
  - `bun run confluence:search fts "GraphQL mandatory modifier" --limit 20`
  - Snapshots: `358879917`, `81028096`, `234784975`, `40743474`
- Cross-checked current example validity by searching R6 source for `Practitioner.practitionerRole`, `PractitionerRole.specialty`, and `Observation.subject`, then reading the relevant structure-definition line ranges.
