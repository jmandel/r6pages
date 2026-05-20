# extensibility-examples research appendix

## Scope and coverage

- Page path: `source/extensibility-examples.html`
- Compared old `R4 4.0.1` commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to new `R6 ballot4 6.0.0-ballot4` commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Page boundary confirmed: the file exists in both trees.
- New page read end-to-end: yes, `1158` lines.
- Source history count in range: 13 commits touched this page.
- Explicit Jira keys found from commit subjects: `FHIR-25431`, `FHIR-34212`, `FHIR-19608`, `FHIR-37903`, `FHIR-40387`.
- Jira/Zulip/Confluence searches were run for all explicit keys and distinctive changed phrases. GitHub PR search for the explicit Jira keys returned no matching PRs.
- Caveat: many newly added JSON blocks are illustrative snippets with comments and omitted content, so I did not treat every JSON syntax issue as actionable. I elevated issues where the current snippet contradicts the Jira intent or has a concrete fragment/rendering label mismatch.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility-examples.html` | Page reviewed end-to-end. |
| Source | Extension URL rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:67` | Related spec rule says extension `url` SHALL reference the canonical URL of the defining `StructureDefinition`. |
| Source | Participation canonical URL definition | `extensibility-examples.html:77`, `:103`, `:121`, `:143` | Defines/fixes the participation-agreement canonical URL as `http://example.org/fhir/StructureDefinition/participation-agreement`. |
| Source | Participation instance now canonical | `extensibility-examples.html:181`, `:192` | The instance URL was fixed by `FHIR-34212`. |
| Source | Participation profile still stale | `extensibility-examples.html:260`, `:318` | The Patient profile XML and JSON still refer to `http://example.org/phr/documents/fhir/StructureDefinition/participation-agreement`, not the canonical definition URL. |
| Source | Participation cardinality table vs definition | `extensibility-examples.html:62`, `:90-113` | Table says `1..*`, but the formal extension root has no `min`/`max`; value has `min=1`. |
| Source | Name qualifier cardinality table vs definition | `extensibility-examples.html:360`, `:423-440` | Table says `0..*`, but the formal extension root has no `min`/`max`; value has `min=0`. |
| Source | Modifier example fragment mismatch | `extensibility-examples.html:1110-1119`, `:1121` | XML/JSON blocks are labelled `fragment="Patient"` but contain a `Communication` resource. |
| Commit | `FHIR-34212` remove value cardinality | `https://github.com/HL7/fhir/commit/c47042398891f647a92fd4feac6a06e260375892` | Removed `<max value="*"/>` from two simple extension value elements, but did not add root cardinality. |
| Commit | `FHIR-34212` instance URL fix | `https://github.com/HL7/fhir/commit/6f541c9ceb4d14e1794ea8945fe609fc6e495a09` | Fixed the Patient instance extension URL, but not the profile reference. |
| Commit | Add JSON examples/tabs | `https://github.com/HL7/fhir/commit/e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` | Adds JSON examples; the new JSON profile copied the stale participation profile URL. |
| Commit | Add modifier example | `https://github.com/HL7/fhir/commit/d461d9831352eb489c8c77466208c8c7399c21e1` | Adds the artifact-status modifier example and the wrong `fragment="Patient"` labels. |
| Jira | `FHIR-34212` | `https://jira.hl7.org/browse/FHIR-34212`; reopen with `bun run jira:search snapshot FHIR-34212` | Formal issue for misleading extensibility examples; resolution explicitly says to align definition/instance/profile URLs and move cardinality to the root element. |
| Jira | `FHIR-37903` | `https://jira.hl7.org/browse/FHIR-37903`; reopen with `bun run jira:search snapshot FHIR-37903` | Rationale for adding a modifier extension worked example. |
| Jira | `FHIR-19608` | `https://jira.hl7.org/browse/FHIR-19608`; reopen with `bun run jira:search snapshot FHIR-19608` | Rationale for XML/JSON example tabs; page commit applied the same pattern here despite issue title saying datatype examples. |
| Zulip | `#conformance > Extensibility examples` | `https://chat.fhir.org/#narrow/stream/conformance/topic/Extensibility%20examples`; reopen with `bun run zulip:search snapshot conformance "Extensibility examples"` | Stefan Karl reports exactly the `FHIR-34212` problems; Lloyd McKenzie confirms both are errors and asks for a tracker. |
| Confluence | FHIR-I CC 2022-08-29 | `https://confluence.hl7.org/spaces/FHIRI/pages/108307268/FHIR+Infrastructure+Minutes+CC+2022-08-29`; reopen with `bun run confluence:search snapshot 108307268` | Records `FHIR-37903` persuasive vote `8-0-4`. |
| Confluence | FHIR-I WGM 202209 Baltimore | `https://confluence.hl7.org/spaces/FHIRI/pages/108316158/FHIR+Infrastructure+Minutes+WGM+202209+-+Baltimore`; reopen with `bun run confluence:search snapshot 108316158` | Later WGM notes say `FHIR-37903` assigned to Grahame. |
| Confluence | FHIR-I CC 2020-01-13 | `https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`; reopen with `bun run confluence:search snapshot 66940491` | Records `FHIR-25431` discussion: use "data type", auto approve. |
| Confluence | FHIR-I Methodology/Data Types 2023-02-15 | `https://confluence.hl7.org/spaces/FHIRI/pages/156537471/FHIR-I+Methodology+Data+Types+minutes+2023-02-15`; reopen with `bun run confluence:search snapshot 156537471` | Records `FHIR-40387` persuasive vote. |

## Change summary

- **Substantive / semantic example corrections:** `FHIR-34212` addressed misleading simple-extension examples by removing `max="*"` from `Extension.valueUri` and `Extension.value`, and by changing the Patient instance extension URL to match the canonical URL. The implementation appears incomplete because the Patient profile's `type.profile` still uses the stale PHR URL, and the Jira resolution's "move cardinality to the root element" instruction was not fully reflected in the formal definitions.
- **Semantic guidance / example addition:** `FHIR-37903` added a new "Modifier Extension: Artifact Status" section with XML/JSON definition snippets and a `Communication` instance using `modifierExtension`.
- **Example format changes:** `FHIR-19608` added JSON counterparts and example-tab markers/scripts for the page examples. `FHIR-40387` then added a missing `[%example-end%]` marker after the modifier-definition JSON block. `c27bdb7a` made QA fixes to some JSON snippets, including changing `given`/`_given` to arrays.
- **References and terminology:** `FHIR-25431` changed "Healthcare Data Types" / "data type" wording to "Healthcare Datatypes" / "datatype". `b3e3733` changed the clinical-trial note's workflow-researchstudy link to the generated extension location macro and `StructureDefinition-workflow-researchStudy.html`.
- **Metadata/template/navigation:** `d7b8dad` removed old wrapper markup; `270e0ceb` changed the page metadata table to "Responsible Owner" and removed the FMM cell; `a581075` updated jQuery asset paths.
- **Mechanical/noise:** BOM introduction, quote escaping changes, whitespace, tab marker scaffolding, and source version update (`5.0.0` to `6.0.0`) are not page-specific decisions except where they created or exposed concrete example defects.

## Source history

| Commit | Date | Subject | Page-specific assessment |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical template cleanup: removed `<div class="col-12">` wrapper and closing div. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Editorial terminology consistency, changing "Data Types"/"data type" to "Datatypes"/"datatype". |
| `c47042398891f647a92fd4feac6a06e260375892` | 2022-09-01 | `FHIR-34212 Extensibility examples are misleading` | Removed two `<max value="*"/>` lines from simple extension value elements. Did not add corresponding root cardinality. |
| `6f541c9ceb4d14e1794ea8945fe609fc6e495a09` | 2022-09-01 | `FHIR-34212 Extensibility examples are misleading` | Changed Patient instance extension URL to `http://example.org/fhir/StructureDefinition/participation-agreement`. Did not update the Patient profile `type.profile`. |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | fix extension links | Changed the clinical-trial note's workflow-researchstudy link to `[%extensions-location%]StructureDefinition-workflow-researchStudy.html`. |
| `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` | 2023-02-09 | `FHIR-19608 Add JSON to datatype examples page` | Added JSON examples, example tab markers, and tab scripts. Also copied the stale participation profile URL into the new JSON profile example. |
| `4baa8f22bae6d8f787c024219b5842a6cc658bb5` | 2023-02-14 | fix character references for fragment parsing | Mechanical quote/entity changes in examples for fragment parsing. |
| `d461d9831352eb489c8c77466208c8c7399c21e1` | 2023-02-16 | `FHIR-37903 Clarification on modifier extensions` | Added the modifier extension worked example. The added instance blocks are labelled `fragment="Patient"` even though they contain `Communication`. |
| `14d0d18cf8420b9b33cb9e0d5647b0a48caa53fe` | 2023-02-16 | `FHIR-40387 Improve guidance for markdown datatype` | Page-local effect was only adding a missing `[%example-end%]`; issue itself is markdown/datatype context, not extensibility. |
| `4a6f587f14510cd09b0bae45f48efc11544b8b93` | 2023-04-27 | fix up stated version in source | Updated modifier example `fhirVersion` from `5.0.0` to `6.0.0`. |
| `c27bdb7a6c4a63b716f83815a9096b413cf658a8` | 2023-11-23 | QA fixes | Fixed some JSON snippet punctuation and `HumanName.given`/`_given` array shape. |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | upgrade jquery | Mechanical script path update to `assets/js/...`. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Metadata table label changed to "Responsible Owner" and FMM cell removed. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-34212` ("Extensibility examples are misleading") is the most important page-specific issue. Jira description says the Patient Consent example used different registry-location URLs instead of the canonical URL in the extension definition, and put `1..*`/`0..*` cardinality on `Extension.value`. Resolution: "Correct the extension URL in the instance and the referencing profile to be the same as that in the definition. Move the cardinality for the extension to the root element, not the value." Current page still has stale profile URLs at `extensibility-examples.html:260` and `:318`, and does not show root cardinality in the formal definitions at `:90-113` or `:423-440`.
- `FHIR-37903` ("Clarification on modifier extensions") requested redundant modifier-extension guidance and a worked example. It was persuasive, non-substantive, applied for R5, and explicitly asked to "Add a worked example of defining a modifier extension alongside the other examples." The added current example contains a concrete fragment-label mismatch (`fragment="Patient"` on `Communication` instance blocks).
- `FHIR-19608` ("Add JSON to datatype examples page") requested XML/JSON example tabs for datatype examples and was used as the commit anchor for adding JSON examples to this page as well. No Jira evidence found that specifically mentions `extensibility-examples.html` for this JSON addition.
- `FHIR-25431` ("Inconsistent use of "datatype" vs. "data type"") supports the terminology-only "datatype" edits.
- `FHIR-40387` ("Improve guidance for markdown datatype") is not substantively about this page; the page-local commit only closed the added modifier example's `[%example-end%]` marker.

### Other Jira searches

Searches for `"Extensibility examples are misleading"` found only `FHIR-34212`. Searches for `"Add JSON" "extensibility-examples"`, `"Modifier Extension" "Artifact Status"`, `"artifact-status" "modifier extension"`, `"defined the applicable specification"`, and `"CodableConcept" "clinical trial"` found no additional Jira issues that should drive action.

## Zulip evidence

- `#conformance > Extensibility examples` (`https://chat.fhir.org/#narrow/stream/conformance/topic/Extensibility%20examples`) directly led to `FHIR-34212`. Stefan Karl reported the same two issues: inconsistent canonical/profile URLs and cardinality on `Extension.value`; Lloyd McKenzie replied that both were errors and asked for a tracker. Snapshot command: `bun run zulip:search snapshot conformance "Extensibility examples"`.
- Zulip FTS for unquoted Jira keys failed because FTS parsed hyphens as operators; follow-up SQL `LIKE` searches found only one `FHIR-34212` message in the above thread, no messages for `FHIR-19608`, `FHIR-37903`, or `FHIR-25431`, and two `FHIR-40387` messages in `#genomics > FHIR-39574 GenomicStudy.description should be markdown?`.
- The `FHIR-40387` genomics thread explains markdown guidance and is context-only for this page because the page change under the `FHIR-40387` commit was just an example marker fix.

## Confluence evidence

- `FHIR-37903` appears in FHIR-I minutes:
  - `108307268` ("FHIR Infrastructure Minutes CC 2022-08-29") records `FHIR-37903 Persuasive Grahame Grieve / Rick Geimer: 8-0-4`.
  - `108316158` ("FHIR Infrastructure Minutes WGM 202209 - Baltimore") later says `FHIR-37903 Assign to Grahame`.
- `FHIR-25431` appears in `66940491` ("FHIR Infrastructure Minutes CC 20200113") with "Lloyd: Using "data type" Will auto approve".
- `FHIR-40387` appears in `156537471` ("FHIR-I Methodology/Data Types minutes 2023-02-15") with `FHIR-40387 Persuasive: Rob Hausam / Ron Shapiro : 3-0-0`.
- No Confluence refs/FTS hits were found for `FHIR-34212` or `FHIR-19608`, and phrase searches for `"Extensibility examples are misleading"` and `"modifier extensions" "artifact-status"` found no additional high-signal pages.

## Timeline

- 2018-11-02: `FHIR-19608` created for adding JSON to datatype examples.
- 2019-02-19: `FHIR-19608` voted/resolved persuasive (`2-0-0`), applied for R5.
- 2020-01-09: `FHIR-25431` created.
- 2020-01-13: Confluence FHIR-I minutes discuss `FHIR-25431` and "Using data type".
- 2021-10-27: `FHIR-25431` resolved persuasive.
- 2021-11-01: Zulip `#conformance > Extensibility examples` identifies canonical/profile URL and cardinality errors; `FHIR-34212` created the same day.
- 2022-01-22: `FHIR-34212` resolved persuasive: align instance/profile URLs with the definition and move cardinality to root.
- 2022-08-12: `FHIR-37903` created for modifier extension clarification.
- 2022-08-29: FHIR-I minutes record `FHIR-37903` persuasive vote `8-0-4`.
- 2022-08-31: `8592e120...` applies `FHIR-25431` terminology edits to this page.
- 2022-09-01: `c470423...` and `6f541c...` apply only part of `FHIR-34212` to this page.
- 2023-02-09: `e9e4e5...` adds JSON examples and tabs; it also copies the stale participation profile URL into the new JSON example.
- 2023-02-14: `4baa8f...` fixes character references for fragment parsing.
- 2023-02-15: FHIR-I Methodology/Data Types minutes record `FHIR-40387` persuasive vote.
- 2023-02-16: `d461d98...` adds the modifier extension example for `FHIR-37903`; `14d0d18...` adds a missing `[%example-end%]`.
- 2023-04-27: `4a6f587...` updates modifier example `fhirVersion` from `5.0.0` to `6.0.0`.
- 2023-11-23: `c27bdb7...` applies QA fixes to JSON snippets.
- 2025-05-01: `a581075...` updates jQuery asset paths.
- 2025-10-31: `270e0ce...` changes the metadata table for R6 normative changes.

## Evidence log

- Confirmed page boundary:
  - `test -f "$OLD_TREE/source/extensibility-examples.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/extensibility-examples.html" && echo "new exists"`
- Reviewed direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/extensibility-examples.html`
- Reviewed source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/extensibility-examples.html`
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <commit> -- source/extensibility-examples.html`
- Read the current page end-to-end in chunks after diff/history/community review:
  - `wc -l "$NEW_TREE/source/extensibility-examples.html"` returned `1158`.
  - Read line ranges `1-220`, `221-440`, `441-660`, `661-880`, and `881-end`.
- Jira:
  - Snapshots: `bun run jira:search snapshot FHIR-25431`, `FHIR-34212`, `FHIR-19608`, `FHIR-37903`, `FHIR-40387`.
  - Phrase searches included `"Extensibility examples are misleading"`, `"Add JSON" "extensibility-examples"`, `"Modifier Extension" "Artifact Status"`, `"artifact-status" "modifier extension"`, `"defined the applicable specification"`, and `"CodableConcept" "clinical trial"`.
- Zulip:
  - Initial FTS for bare Jira keys failed because hyphens were parsed as FTS operators; followed up with SQL `content LIKE '%FHIR-XXXXX%'`.
  - Snapshot: `bun run zulip:search snapshot conformance "Extensibility examples"`.
  - Context snapshot: `bun run zulip:search snapshot genomics "FHIR-39574 GenomicStudy.description should be markdown?"`.
- Confluence:
  - Refs/FTS searches for all explicit Jira keys.
  - Snapshots: `bun run confluence:search snapshot 108307268`, `108316158`, `66940491`, `156537471`.
- GitHub PR search:
  - `gh pr list --repo HL7/fhir --state all --search FHIR-XXXXX --json number,title,state,mergedAt,url --limit 20` for the explicit keys returned no matching PRs.
