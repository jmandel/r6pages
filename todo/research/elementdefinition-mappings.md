# elementdefinition-mappings research appendix

## Scope and coverage

- Page path: `source/elementdefinition-mappings.html`.
- Old version/tree: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/tree: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees and is modified, not added/deleted/renamed.
- New page read end-to-end: yes. `wc -l` reports 69 physical lines; the file viewer showed the whole source page through `</html>`.
- Path-specific commit count between the two source commits: 7.
- Explicit Jira keys found in page-touching commits: `FHIR-20502`, `FHIR-44047`. Context-only related Jira found by search: `FHIR-16996`.
- Jira/Zulip/Confluence searches performed: snapshots for `FHIR-20502`, `FHIR-44047`, and `FHIR-16996`; Jira FTS for LOINC and page terms; Zulip phrase/key searches; Confluence refs/FTS and snapshots for the relevant minutes pages.
- Caveats: this review is of the HTML source page. The `<%dtmappings ElementDefinition%>` macro expansion was not generated/read here. The `FHIR-20502` implementation also changed `source/mappingSpaces.xml`, which was inspected only to understand the page commit's intent.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/elementdefinition-mappings.html:13-66` | R4 page wrapper/header and pre-change prose |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-mappings.html:14-66` | R6 ballot4 page header, overview, and mapping intro |
| Source | LOINC overview text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-mappings.html:53-56` | Main non-template content clarification added after R4 |
| Source | Current typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-mappings.html:60-62` | Concrete reader-facing editorial defect noted in actions |
| Source | LOINC mapping space | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mappingSpaces.xml:55-58` | Same `FHIR-20502` commit changed the published column name to `LOINC Field Name` |
| Diff artifact | Direct page diff | `.copilot/session-state/e01ddffb-2fab-49bf-8b60-7d12df1eaea7/files/elementdefinition-mappings.diff` | Local saved copy of the R4 -> R6 ballot4 source diff |
| Commit | Template div removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Broad HTML template update; removed `col-12` wrapper on this page |
| Commit | Header macro update | `c1d765ab73d0bf137c30793009baf937473668ac` / `https://github.com/HL7/fhir/commit/c1d765ab73d0bf137c30793009baf937473668ac` | Changed `<%edheader mappings%>` to `<%dtxheader mappings ElementDefinition%>` |
| Commit | `FHIR-20502` implementation | `1c4ff67fd8b1a5860f9fb1d6984eaab094137340` / `https://github.com/HL7/fhir/commit/1c4ff67fd8b1a5860f9fb1d6984eaab094137340` | Added LOINC relevance guidance on this page and changed `mappingSpaces.xml` column name |
| PR | Commit-containing PR | `https://github.com/HL7/fhir/pull/2243` | GitHub API associates commit `1c4ff67...` with PR 2243, merged 2022-08-26 |
| Jira | `FHIR-20502` | `https://jira.hl7.org/browse/FHIR-20502`; reopen with `bun run jira:search snapshot FHIR-20502` | Formal rationale for changing "LOINC Code" to "LOINC Field Name" and adding documentation |
| Commit | QA typo fix | `dad7cf37c75822c352509e1c2e8d050408d0be18` / `https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18` | Fixed `it's` -> `its`; briefly introduced `etc..` |
| Commit | QA follow-up | `9f780149387dc652bec02aa7744e52774acddbc9` / `https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9` | Fixed the temporary `etc..` typo |
| Commit | R6 normative metadata/template | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Broad R6 metadata update; removed page maturity cell and added "Responsible Owner" label |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Added commas after `i.e.` in two overview rows |
| PR | `FHIR-44047` PR | `https://github.com/HL7/fhir/pull/3951` | Merged 2025-11-06; PR body only says `FHIR-44047` |
| Jira | `FHIR-44047` | `https://jira.hl7.org/browse/FHIR-44047`; reopen with `bun run jira:search snapshot FHIR-44047` | Formal punctuation cleanup issue for `e.g.,`/`i.e.,` across FHIR core |
| Confluence | FHIR-I WGM 202405 Dallas | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; reopen with `bun run confluence:search snapshot 234784975` | Meeting minutes record `FHIR-44047 will fix` |
| Jira | `FHIR-16996` context | `https://jira.hl7.org/browse/FHIR-16996`; reopen with `bun run jira:search snapshot FHIR-16996` | Older LOINC/ElementDefinition clarification issue; context only for this R4 -> R6 page change |
| Confluence | FHIR-I CC 20180709 | `https://confluence.hl7.org/spaces/FHIRI/pages/40743528/FHIR+Infrastructure+Minutes+CC+20180709`; reopen with `bun run confluence:search snapshot 40743528` | Minutes list GForge/FHIR-16996 as persuasive with modification |

## Change summary

- **Semantic guidance / non-substantive clarification:** the LOINC row in the "On this page" table changed from a generic "LOINC master table which defines observations" note to guidance that the mapping is relevant when an element describes an observable piece of data, particularly in Observation profiles and related to `ObservationDefinition` (`source/elementdefinition-mappings.html:53-56`). This is tied to `FHIR-20502`, whose resolution requested renaming "LOINC Code" to "LOINC Field Name" and adding documentation explaining why ElementDefinition definitions link to LOINC table fields. The same commit changed `source/mappingSpaces.xml` columnName from `LOINC Code` to `LOINC Field Name`.
- **Metadata/template/navigation:** the page wrapper `<div class="col-12">` was removed; the page header macro changed to `dtxheader`; the R6 normative metadata update replaced the workgroup cell with "Responsible Owner" wording and removed the maturity level cell. These are broad template or publication metadata changes, not page-specific conformance changes.
- **Editorial only:** `element, it's definition, and it's` became `element, its definition, and its`; two `i.e.` occurrences became `i.e.,` under `FHIR-44047`.
- **Mechanical/noise:** one QA commit temporarily introduced `etc..`; the next QA commit removed it, leaving no net final change except the `its` correction.
- **No detected changes:** no REST/search/operation semantics, examples, constraints, normative requirements, terminology bindings, or page anchors changed in this source page.

## Source history

| Date | Commit | Subject / issue | Page effect | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removed `<div class="col-12">` wrapper and closing `</div>` | Template/mechanical |
| 2022-08-13 | `c1d765ab73d0bf137c30793009baf937473668ac` | `various fixes including IHE + DICOM value sets + version` | Swapped `<%edheader mappings%>` for `<%dtxheader mappings ElementDefinition%>` | Template/navigation |
| 2022-08-27 | `1c4ff67fd8b1a5860f9fb1d6984eaab094137340` | `FHIR-20502 ElementDefinition LOINC Code field name documentation` | Added more specific LOINC relevance prose on this page; changed `mappingSpaces.xml` columnName to `LOINC Field Name` | Semantic guidance, non-substantive clarification |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | `QA related changes` | Fixed `it's` -> `its`, but introduced `etc..` | Editorial/QA |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | `more QA` | Restored `etc.` | Editorial/QA |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Reworked header metadata row: "Responsible Owner", no maturity cell | Broad R6 metadata/template |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | Added commas in two `i.e.,` phrases | Editorial punctuation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-20502` (`https://jira.hl7.org/browse/FHIR-20502`) is Published, Persuasive, Non-substantive, Clarification, applied for R5. It asks to change ElementDefinition headings from "LOINC Code" to "LOINC Field Name" because the values are LOINC table field names, not LOINC codes, and to add documentation explaining why definitions link to LOINC fields. The page commit `1c4ff67...` implements the documentation part on this page and the heading/column-name part in `source/mappingSpaces.xml`.
- `FHIR-44047` (`https://jira.hl7.org/browse/FHIR-44047`) is a technical correction for `e.g.,` and `i.e.,` punctuation throughout FHIR core. It is still shown in the local Jira snapshot as `Resolved - change required`, but the source has a later implementation commit and merged PR. On this page, the change is limited to two `i.e.,` punctuation edits.

### Other Jira issues that plausibly explain related text

- `FHIR-16996` (`https://jira.hl7.org/browse/FHIR-16996`) is an older Published, Persuasive with Modification issue: "Clarify LOINC mappings for ElementDefinition." Its resolution says the mapping needed to be clearer and needed a section or reference about the relationship between LOINC, element definitions, and observation definitions. This explains background for the existence of LOINC/ElementDefinition mapping guidance, but it predates the R4 -> R6 change and is not the direct source of the new R6 wording.

### Context-only Jira hits not elevated to action

- `bun run jira:search fts "elementdefinition mappings"` returned `FHIR-40954`, `FHIR-51439`, `FHIR-34434`, and other mapping-related issues, but their summaries concern mapping inheritance/removal, duplicate mappings, or other resources/IGs rather than the LOINC overview row changed on this page.
- `bun run jira:search fts "\"observable piece of data\""` returned no results, so there was no Jira issue found for that exact wording beyond the `FHIR-20502` commit.

## Zulip evidence

- Direct Zulip FTS searches for unescaped `FHIR-20502` and `FHIR-44047` failed because FTS parsed the hyphenated keys as expressions (`SQLiteError: no such column`). I reran structured SQL `LIKE '%FHIR-20502%'` and `LIKE '%FHIR-44047%'`; both returned no messages.
- `bun run zulip:search fts "\"observable piece of data\""` returned no results.
- `bun run zulip:search fts "\"LOINC Field Name\""` returned no results.
- `bun run zulip:search fts "ElementDefinition LOINC"` returned broad/background hits, including unrelated profiling and publisher discussions and one old FHIR Bot tracker item for `FHIR-16996`; none provided rationale or objections for the R4 -> R6 page change. No Zulip thread was snapshot because no promising human discussion specific to the changed text was found.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-20502` and `bun run confluence:search fts "FHIR-20502" --limit 20` returned no pages.
- `bun run confluence:search refs jira FHIR-44047` and FTS found FHIR Infrastructure WGM 202405 Dallas minutes, page `234784975`. The normalized minutes text records: `FHIR-44047 will fix`, in a tracker block with vote lines around adjacent issues. This supports the Jira disposition for the punctuation cleanup but does not add page-specific rationale.
- `bun run confluence:search fts "ElementDefinition LOINC" --limit 20` found several broad pages. The relevant context-only hit is FHIR Infrastructure Minutes CC 20180709, page `40743528`, which lists old GForge item `16996` ("Clarify LOINC mappings for ElementDefinition") as Persuasive with Modification. This supports the older background but not a new R4 -> R6 issue.

## Timeline

- 2018-05-12: `FHIR-16996` created to clarify LOINC mappings for ElementDefinition.
- 2018-07-09: `FHIR-16996` vote date; Confluence FHIR-I CC 20180709 lists it as Persuasive with Modification.
- 2018-08-02: Jira comment on `FHIR-16996` says `svn revision 14327`.
- 2019-03-05: `FHIR-20502` created.
- 2019-03-18: `FHIR-20502` resolved/voted Persuasive, with requested "LOINC Field Name" and documentation; applied for R5.
- 2021-06-27: `d7b8dad...` template commit removes the page wrapper div.
- 2022-08-13: `c1d765...` header macro update.
- 2022-08-26: PR `HL7/fhir#2243` merged; GitHub associates it with commit `1c4ff67...`.
- 2022-08-27: `1c4ff67...` author date; page LOINC prose and `mappingSpaces.xml` column name changed for `FHIR-20502`.
- 2023-02-21: two QA/editorial commits produce the final `its` correction.
- 2024-01-22: `FHIR-44047` created for punctuation cleanup.
- 2024-05-23: `FHIR-44047` resolved as Persuasive; Confluence WGM 202405 minutes record `FHIR-44047 will fix`.
- 2025-10-31: `270e0ceb...` broad R6 normative metadata/template update touches this page header.
- 2025-11-03: `887bc238...` applies `FHIR-44047` punctuation changes to this page.
- 2025-11-06: PR `HL7/fhir#3951` (`FHIR-44047`) merged.

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/elementdefinition-mappings.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-mappings.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/elementdefinition-mappings.html`
- Path history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/elementdefinition-mappings.html`
  - `git show --stat --patch <commit> -- source/elementdefinition-mappings.html` for all seven path commits.
  - Full `git show --stat` for `1c4ff67...` confirmed the same commit also changed `source/mappingSpaces.xml`.
- Full page read:
  - `wc -l ".../source/elementdefinition-mappings.html"` reported 69.
  - The complete new source page was read with file view, covering lines 1 through the closing HTML.
- Jira:
  - `bun run jira:search snapshot FHIR-20502`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-16996`
  - `bun run jira:search fts "ElementDefinition LOINC Code field name documentation" --limit 20`
  - `bun run jira:search fts "\"observable piece of data\"" --limit 20`
  - `bun run jira:search fts "elementdefinition mappings" --limit 20`
  - `bun run jira:search fts "\"LOINC Field Name\"" --limit 20`
- Zulip:
  - Initial `bun run zulip:search fts "FHIR-20502" --limit 20` and `FHIR-44047` attempts failed due FTS hyphen parsing.
  - Follow-up SQL key searches: `bun run zulip:search sql "SELECT ... FROM messages WHERE content LIKE '%FHIR-20502%' ..."` and the same for `FHIR-44047`; both returned no results.
  - Phrase searches for `"observable piece of data"` and `"LOINC Field Name"` returned no results.
- Confluence:
  - `bun run confluence:search refs jira FHIR-20502`; no references.
  - `bun run confluence:search refs jira FHIR-44047`; found page `234784975`.
  - `bun run confluence:search snapshot 234784975`; confirmed `FHIR-44047 will fix`.
  - `bun run confluence:search fts "ElementDefinition LOINC" --limit 20`; found context-only pages including `40743528`.
  - `bun run confluence:search snapshot 40743528`; confirmed `16996` context.
- GitHub:
  - `gh api repos/HL7/fhir/commits/1c4ff67fd8b1a5860f9fb1d6984eaab094137340/pulls -H "Accept: application/vnd.github+json"` found PR `2243`.
  - `gh api repos/HL7/fhir/commits/887bc2383fb7b429cfafd64a46bdfc0c40c5b627/pulls -H "Accept: application/vnd.github+json"` found PR `3951`.
  - `gh pr view 2243 --repo HL7/fhir --json number,title,url,state,mergedAt,body` and the same for `3951` provided PR metadata.
