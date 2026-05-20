# validation research appendix

## Scope and coverage

- Page reviewed: `source/validation.html`.
- Old version: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, source tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version: R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, source tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: `source/validation.html` exists in both trees. The direct diff is `13 insertions(+), 65 deletions(-)`.
- The newer page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:1-297`.
- Source history found 4 commits touching this page between the old and new commits. Explicit Jira keys found in page-touching commits: `FHIR-31735`, `FHIR-44047`.
- Searches performed: Jira snapshots for `FHIR-31735` and `FHIR-44047`; Jira/Zulip/Confluence searches for those keys and distinctive phrases (`common validators`, `FHIR Tools Registry`, `split tools out from spec`, `Using FHIR validators`, `Using the FHIR Validator`); Confluence snapshots for relevant FHIR-I/FMG minutes and the FHIR Tools Registry page; Zulip snapshots for the FHIR Tools Registry migration and XML tools thread.
- Caveats: first Zulip FTS searches for unquoted Jira keys failed because `FHIR-31735`/`FHIR-44047` were parsed as FTS operators; corrected quoted searches were run. No direct Zulip hit was found for `FHIR-44047`. Confluence FTS for an exact "Validation Tools" page did not find a dedicated FHIR page; the applied link goes to the broader FHIR Tools Registry.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current validation page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:16-17` | R6 ballot4 page metadata now says "Responsible Owner" and omits the old maturity cell. |
| Source | Current validator table and notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:120-156` | Shows the `#validators` anchor and changed "common validators" wording. |
| Source | Current validator caveats | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:171-174` | Generalizes the old Java-validator caveats to validators/common validator code. |
| Source | Current FHIR validators section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:253-258` | Replaces the old Java jar instructions with a link to the Confluence FHIR Tools Registry. |
| Source | Current Schematron/XML Tools text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:229-232` | Still points to `downloads.html#refimpl` for an "XML Tools" download; this is the actionable issue. |
| Source | Current downloads page target | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:101-106` | The current downloads page has an "Implementation Tools" section and Confluence link, but no `refimpl` anchor or XML Tools entry. |
| Source | Old downloads page target | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/downloads.html:144-179` | Confirms the old `#refimpl` anchor and XML Tools download that the validation page still references. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed the page wrapper `<div class="col-12">`; mechanical/template only. |
| Commit | FHIR-31735 implementation | `472abf78c495c2ae44924d499be7434ed50788d0` / `https://github.com/HL7/fhir/commit/472abf78c495c2ae44924d499be7434ed50788d0` | Main content change: split tool-specific validator text out of the spec and link to Confluence. |
| PR | FHIR-31735 PR | `https://github.com/HL7/fhir/pull/2396` | Jira comment says this applied FHIR-31735; GitHub metadata shows merged 2022-09-06. |
| Commit | R6 normative metadata change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changed the page metadata row to "Responsible Owner" and removed maturity. |
| Commit | FHIR-44047 punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applied `e.g.` -> `e.g.,` punctuation changes on this page. |
| Jira | FHIR-31735 | `https://jira.hl7.org/browse/FHIR-31735`; reopen with `bun run jira:search snapshot FHIR-31735` | Formal rationale for moving validation tool listings/docs out of the spec; resolution was Persuasive with Modification. |
| Jira | FHIR-44047 | `https://jira.hl7.org/browse/FHIR-44047`; reopen with `bun run jira:search snapshot FHIR-44047` | Formal source for the punctuation-only changes. |
| Zulip | FHIR Tools Registry migration | `#committers > FHIR tools registry in Confluence?` / `https://chat.fhir.org/#narrow/stream/committers/topic/FHIR%20tools%20registry%20in%20Confluence%3F`; reopen with `bun run zulip:search snapshot committers "FHIR tools registry in Confluence?"` | Shows the registry was migrated to Confluence in January 2020. |
| Zulip | XML tools removal context | `#committers > XML tools` / `https://chat.fhir.org/#narrow/stream/committers/topic/XML%20tools`; reopen with `bun run zulip:search snapshot committers "XML tools"` | Ward raised the dead XML Tools URL while applying FHIR-31735; Grahame replied "remove it." |
| Confluence | FHIR-I WGM 202201 minutes | Page `81028096`, `https://confluence.hl7.org/spaces/FHIRI/pages/81028096/FHIR+Infrastructure+Minutes+WGM+202201`; reopen with `bun run confluence:search snapshot 81028096` | Records FHIR-31735 vote: other tools should be listed and likely on Confluence so the list can be updated independently from the spec. |
| Confluence | FHIR Tools Registry | Page `66941491`, `https://confluence.hl7.org/spaces/FHIR/pages/66941491/FHIR+Tools+Registry`; reopen with `bun run confluence:search snapshot 66941491` | The target page for the new validation-page link; it includes incoming links from `downloads.html` and `validation.html` and points validation/testing readers onward. |
| Confluence | FHIR-I WGM 202405 minutes | Page `234784975`, `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` in a tracker block. |

## Change summary

### Template/navigation and metadata changes

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the outer `<div class="col-12">` wrapper and closing tag. This is mechanical/template churn.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the header table from `<wg> Work Group / Maturity Level: N/A / Standards Status: Informative` to `Responsible Owner: <wg> Work Group / Standards Status: Informative`. This is metadata/template/navigation, not validation semantics.

### Validator/tooling rewrite from FHIR-31735

- `472abf78c495c2ae44924d499be7434ed50788d0` changed the table anchor from `#jar` to `#validators`, retitled "Using the FHIR Validator" to "Using FHIR validators", and removed the detailed Java jar download/command examples.
- The removed text described the FHIR Validator as a Java jar provided as part of the specification and included Windows batch-file examples, Maven snapshot download URL, `java -jar` commands, and a default terminology server.
- The replacement text is a single Confluence link: "See the HL7 Confluence for an overview of commonly used tools to help with implementing FHIR, including FHIR validators" (`validation.html:253-258`).
- Nearby wording was generalized from "the validation jar" / "java validator" / "java validation code" to "common validators" / "validators" / "validation code in the common validators" (`validation.html:155-156`, `171-173`).
- Category: semantic guidance and reader-facing tooling documentation. Jira marks the change impact non-substantive, and the spec requirements for validation behavior did not materially change.

### Editorial punctuation from FHIR-44047

- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed three examples from `e.g.` to `e.g.,` (`validation.html:162`, `187`, `196`).
- Category: editorial only. No validation semantics changed.

### Overlooked current-page issue found during full-page read

- The current page still says the Schematron transform `iso_svrl_for_xslt2.xsl` is included in the `XML Tools` download linked as `downloads.html#refimpl` (`validation.html:229-232`).
- In R4, that target existed as `downloads.html` "Reference Implementations" with `<a name="refimpl">` and an XML Tools zip entry (`old downloads.html:144-179`).
- In R6 ballot4, `source/downloads.html` no longer contains `name="refimpl"`, `id="refimpl"`, `XML Tools`, or `XMLTools`; the corresponding section is now "Implementation Tools" with a generic FHIR Tools Registry link (`new downloads.html:101-106`).
- This appears to be a stale link/instruction left behind by the broader FHIR-31735 tools split.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed the outer Bootstrap-style page wrapper. | mechanical/template |
| `472abf78c495c2ae44924d499be7434ed50788d0` | 2022-09-05 | `Applying FHIR-31735: split tools out from spec` | Retargeted `#jar` to `#validators`, generalized validator wording, removed Java-validator-specific instructions/examples, and linked to the FHIR Tools Registry. | semantic guidance / tooling documentation |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changed page metadata row to "Responsible Owner" and removed maturity display. | metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.` in three locations. | editorial |

Useful local patch files created during review:

- `.copilot/session-state/cfcc34d9-02f6-4b45-982d-5f5113e96e04/files/validation.diff`
- `.copilot/session-state/cfcc34d9-02f6-4b45-982d-5f5113e96e04/files/validation.log`
- `.copilot/session-state/cfcc34d9-02f6-4b45-982d-5f5113e96e04/files/validation-show-472abf78c495c2ae44924d499be7434ed50788d0.patch`

## Jira evidence

### Explicit Jira keys from commits/patches

#### FHIR-31735 - Add .NET Validator on the page on Validating resources

- Link: `https://jira.hl7.org/browse/FHIR-31735`; snapshot command: `bun run jira:search snapshot FHIR-31735`.
- Status in snapshot: Published; resolution Persuasive with Modification; work group `fhir-i`; raised in R4; applied for R5; change impact Non-substantive.
- Description: the R4 validation page described the Java validator as the only full FHIR validator and omitted the Firely .NET SDK validator.
- Resolution relevant to this page: update the tool-specific documentation on `validation.html#jar` to link to a Confluence page; the page can note which tools are official or used in official HL7 processes.
- Comments:
  - 2022-01-21 Josh Mandel recorded FHIR-I discussion with the same resolution.
  - 2022-05-10 Ward Weistra suggested candidates including FHIR Tools Registry, Public FHIR Validation Services, and Using the FHIR Validator.
  - 2022-09-05 Ward Weistra said it was applied in `https://github.com/HL7/fhir/pull/2396`.
- Source implementation: commit `472abf78c495c2ae44924d499be7434ed50788d0`; PR `https://github.com/HL7/fhir/pull/2396`, merged 2022-09-06.

#### FHIR-44047 - Incorrect punctuation of exempli gratia and id est

- Link: `https://jira.hl7.org/browse/FHIR-44047`; snapshot command: `bun run jira:search snapshot FHIR-44047`.
- Status in local snapshot: Resolved - change required; status category indeterminate; resolution Persuasive; raised in R6; ballot `BALLOT-56530`; related pages `FHIR-core-many`.
- Description: throughout the specification, `e.g.` and `i.e.` should be followed by commas.
- Resolution: make a note to review this as content is reviewed for R6.
- Source implementation on this page: commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed three `e.g.` occurrences to `e.g.,`.
- Caveat: Jira snapshot status was not "Applied" or "Published" even though a later source commit applied this page's punctuation changes. This is workflow metadata and not a page content problem.

### Other Jira searches

- `bun run jira:search fts "\"FHIR Tools Registry\"" --limit 10` returned `FHIR-31735` and older `FHIR-7286`.
- `bun run jira:search fts "\"split tools out from spec\"" --limit 10` returned only `FHIR-31735`.
- `bun run jira:search fts "\"common validators\"" --limit 10` and `"Using FHIR validators"` found no Jira issues.
- `bun run jira:search fts "\"Using the FHIR Validator\"" --limit 10` returned `FHIR-31735` plus unrelated/context hits (`FHIR-39526`, `FHIR-36938`, implementation-guide validator issues). These were not used as evidence for the action file.

## Zulip evidence

### `#committers > FHIR tools registry in Confluence?`

- Thread URL: `https://chat.fhir.org/#narrow/stream/committers/topic/FHIR%20tools%20registry%20in%20Confluence%3F`.
- Snapshot command: `bun run zulip:search snapshot committers "FHIR tools registry in Confluence?"`.
- Date range: 2020-01-09 to 2020-01-16.
- Relevant content: David Pyke asked if the FHIR Tools Registry wiki page had been ported to Confluence; Lloyd McKenzie said it should be; Joshua Procious reported it was migrated to `https://confluence.hl7.org/display/FHIR/FHIR+Tools+Registry`.
- Use in this review: background support that the Confluence registry target existed before FHIR-31735.

### `#committers > XML tools`

- Thread URL: `https://chat.fhir.org/#narrow/stream/committers/topic/XML%20tools`.
- Snapshot command: `bun run zulip:search snapshot committers "XML tools"`.
- Date range: 2022-05-10.
- Relevant content: Ward Weistra noted that `downloads.html` had a dead XML tools URL and said, "As part of FHIR#31735 I've moved all other reference implementations to a linked confluence page. Should this one stay there or be removed completely?" Grahame Grieve replied, "remove it."
- Use in this review: strong evidence that the XML Tools download was intentionally removed during the same tools-split work, making the surviving `validation.html:229-232` reference stale.

### Searches with no direct rationale found

- Corrected quoted search `bun run zulip:search fts "\"FHIR-31735\"" --limit 20` found the `#committers > XML tools` message.
- Corrected quoted search `bun run zulip:search fts "\"FHIR-44047\"" --limit 20` found no results.
- Exact phrase searches for `"common validators"` and `"split tools out from spec"` found no relevant Zulip results. `"FHIR Tools Registry"` found the migration thread above. `"Using FHIR validators"` found one unrelated implementer message about using validators.

## Confluence evidence

### FHIR-I WGM 202201 minutes - page 81028096

- Link: `https://confluence.hl7.org/spaces/FHIRI/pages/81028096/FHIR+Infrastructure+Minutes+WGM+202201`.
- Snapshot command: `bun run confluence:search snapshot 81028096`.
- Relevant text in tracker block: `jira:FHIR-31735 Agreed that other tools should be listed. Will likely add a confluence page so it can be updated independently from the spec. Persuasive with Mod Motion: Ward Weistra/Lloyd McKenzie: 14-0-0`.
- Use in this review: confirms the work group intent to avoid hard-coding a tool list in the spec.

### FHIR Tools Registry - page 66941491

- Link: `https://confluence.hl7.org/spaces/FHIR/pages/66941491/FHIR+Tools+Registry`.
- Snapshot command: `bun run confluence:search snapshot 66941491`.
- Relevant text: page includes "Incoming links from the FHIR specification" for Downloads and Validation and says the page summarizes tools commonly used in the FHIR development community. For validation/testing, it directs readers to Profile Tooling and Testing Platforms.
- Use in this review: confirms the target page behind the new `validation.html:257` link is real and meant to receive spec links.

### FHIR-I WGM 202405 - Dallas minutes - page 234784975

- Link: `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`.
- Snapshot command: `bun run confluence:search snapshot 234784975`.
- Relevant tracker snippet: `jira:FHIR-44048 will fix jira:FHIR-43942 will apply jira:FHIR-44047 will fix jira:FHIR-43488 Josh Mandel / Corey Spears: 11-0-0`.
- Use in this review: meeting/process evidence for the punctuation cleanup.

### FMG context pages for FHIR Tools Registry

- Page `79517296` (`https://confluence.hl7.org/spaces/FMG/pages/79517296/2021-11-03+FMG+Agenda+Minutes`) says `FHIR Tools Registry: for now it's okay` while discussing FHIR Space Review and spec links to Confluence.
- Page `81017960` (`https://confluence.hl7.org/spaces/FMG/pages/81017960/2021-12-15+FMG+Agenda+Minutes`) says `Decision to add this link: FHIR Tools Registry` to an HL7 tools/resources page.
- Use in this review: background only; not direct evidence of the validation page implementation.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-01-09 to 2020-01-16 | Zulip/background | `#committers > FHIR tools registry in Confluence?` records migration of the FHIR Tools Registry from wiki to Confluence. |
| 2021-04-09 | Jira created | `FHIR-31735` opened: R4 validation page listed Java validator but not the .NET validator. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` applied template wrapper cleanup to `validation.html`. |
| 2021-11-03 / 2021-12-15 | Confluence/background | FMG minutes discuss FHIR Tools Registry and Confluence/spec-link handling. |
| 2022-01-21 | Jira vote / WG minutes | FHIR-I resolved `FHIR-31735` Persuasive with Modification, 14-0-0; minutes say other tools should be listed and likely on Confluence so updates are independent from the spec. |
| 2022-05-10 | Jira/Zulip implementation discussion | Ward listed candidate Confluence pages in Jira; on Zulip, Ward raised the dead XML Tools URL while applying FHIR-31735 and Grahame said to remove it. |
| 2022-09-05 | Source commit | `472abf78c495c2ae44924d499be7434ed50788d0` changed `validation.html` for FHIR-31735. |
| 2022-09-06 | PR merge | `HL7/fhir#2396` merged (`Applying FHIR-31735: split tools out from spec`). |
| 2024-01-22 | Jira created | `FHIR-44047` opened for `e.g.` / `i.e.` punctuation throughout R6 ballot1. |
| 2024-05-23 | Jira resolved / Confluence process | `FHIR-44047` resolved Persuasive; FHIR-I WGM Dallas minutes record `FHIR-44047 will fix`. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` applied R6 normative metadata changes to the page. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applied `FHIR-44047` punctuation changes to the page. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/validation.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/validation.html" && echo "new exists"`
  - Result: both exist; old file 348 lines, new file 297 lines.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/validation.html`
  - Result: `13 insertions(+), 65 deletions(-)`, mostly FHIR-31735 validator/tools rewrite plus metadata and punctuation.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/validation.html`
  - Result: four commits listed in the Source history section.
- Commit inspection:
  - `git -C <new-tree> --no-pager show --stat --patch <commit> -- source/validation.html`
  - Result: separated template, FHIR-31735, metadata, and FHIR-44047 changes.
- Jira:
  - `bun run jira:search snapshot FHIR-31735`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search fts "\"FHIR Tools Registry\"" --limit 10`
  - `bun run jira:search fts "\"split tools out from spec\"" --limit 10`
  - `bun run jira:search fts "\"common validators\"" --limit 10`
  - Result: only `FHIR-31735` and `FHIR-44047` were relevant to this page diff.
- Zulip:
  - Initial unquoted key FTS failed for `FHIR-31735` and `FHIR-44047`; corrected commands used quoted FTS strings.
  - `bun run zulip:search fts "\"FHIR-31735\"" --limit 20` -> found `#committers > XML tools`.
  - `bun run zulip:search fts "\"FHIR-44047\"" --limit 20` -> no results.
  - `bun run zulip:search snapshot committers "FHIR tools registry in Confluence?"`
  - `bun run zulip:search snapshot committers "XML tools"`
- Confluence:
  - `bun run confluence:search refs jira FHIR-31735`
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search snapshot 81028096`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search fts "\"FHIR Tools Registry\"" --kind any --limit 20`
  - `bun run confluence:search snapshot 66941491`
  - Result: FHIR-I minutes support the Jira dispositions; FHIR Tools Registry target exists.
- Full newer page:
  - Read `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:1-297`.
  - Follow-up searches for the stale XML Tools link:
    - `rg -n "downloads\\.html#refimpl" <new validation.html>` -> `validation.html:231`.
    - `rg -n "name=\"refimpl\"|id=\"refimpl\"|#refimpl|XML Tools|fhir-.*XMLTools" <new downloads.html>` -> no matches.
    - Old R4 downloads page has `name="refimpl"` and `XML Tools` at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/downloads.html:144-179`.
