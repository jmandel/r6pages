# defining-extensions research appendix

## Scope and coverage

- Page: `source/defining-extensions.html` (`defining-extensions`)
- Compared old `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to new `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Both old and new files exist in the provided source trees.
- Read the full newer page end-to-end: 298 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html`.
- Direct diff size: 210 lines. Page-specific commits in range: 13.
- Explicit Jira keys found in page-touching commit subjects: `FHIR-25431`, `FHIR-37903`, `FHIR-43364`, `FHIR-50268`, `FHIR-46620`, `FHIR-44047`.
- Jira snapshots were taken for all explicit keys and for related/context-only `FHIR-43207`. Jira FTS searches were also run for distinctive changed phrases and the cardinality concern.
- Zulip searches were run for explicit Jira keys and changed phrases. Initial unquoted key searches failed because FTS parsed hyphenated keys as operators; quoted key searches were rerun successfully. Only `FHIR-46620` had a direct key hit, and the linked `#conformance > StructureDefinition Context of Resource` thread was snapshotted.
- Confluence `refs jira` and FTS searches were run for all explicit keys and key changed phrases. Relevant FHIR-I minutes/agenda pages were snapshotted.
- Caveat: this review inspected source HTML and local community snapshots, not a rendered publication build. GitHub PR lookup by commit SHA was best-effort and not used as primary evidence.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/defining-extensions.html` | Baseline page. |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html` | Current page under review. |
| Source lines | Extension context section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:67-126` | Main R6 semantic guidance changes. |
| Source lines | Cardinality section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:128-186` | Contains an actionable pre-existing minimum-cardinality wording gap. |
| Source lines | ElementDefinition guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:188-236` | `FHIR-37903` IsModifier and must-support guidance. |
| Source lines | Publishing/registry section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:241-293` | Link retargeting and publishing rules. |
| Local diff | Direct R4-to-R6 diff | `.copilot/session-state/0e4668fb-4c39-4154-bb9b-97800f06b65c/files/defining-extensions.diff` | Full rename-aware page diff captured from git. |
| Local log | Page commit list | `.copilot/session-state/0e4668fb-4c39-4154-bb9b-97800f06b65c/files/defining-extensions-commits.tsv` | 13 page-touching commits in chronological order. |
| Commit | `FHIR-43364` applied | `2865d924342d7f3870bcbaefb89ecdd67b671a2a`, https://github.com/HL7/fhir/commit/2865d924342d7f3870bcbaefb89ecdd67b671a2a | Adds initial context notes about `Element`, resource roots, and FHIRPath fallback. |
| Commit | `FHIR-46620` applied | `a7c5cdf36fbcffa521c8011b4242a3688117a22a`, https://github.com/HL7/fhir/commit/a7c5cdf36fbcffa521c8011b4242a3688117a22a | Adds `Resource` context caveat and specialization logic. |
| Commit | `FHIR-37903` applied | `d461d9831352eb489c8c77466208c8c7399c21e1`, https://github.com/HL7/fhir/commit/d461d9831352eb489c8c77466208c8c7399c21e1 | Adds IsModifier clarification and discourages must-support in extension definitions. |
| Commit | `FHIR-50268` applied | `89ed7895925241b1f4f106436dc7b181bf6c08f9`, https://github.com/HL7/fhir/commit/89ed7895925241b1f4f106436dc7b181bf6c08f9 | Replaces broken extension-context example. |
| Commit | `FHIR-25431` applied | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Changes `data type` to `datatype` on this page. |
| Commit | `FHIR-44047` applied in part | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Fixes two `e.g.` punctuation instances on this page, but not all current instances. |
| Jira | `FHIR-43364` | https://jira.hl7.org/browse/FHIR-43364; reopen with `bun run jira:search snapshot FHIR-43364` | Formal disposition for `Element` context and resource-root documentation. |
| Jira | `FHIR-46620` | https://jira.hl7.org/browse/FHIR-46620; reopen with `bun run jira:search snapshot FHIR-46620` | Formal disposition for `Resource` vs `DomainResource` context. |
| Jira | `FHIR-37903` | https://jira.hl7.org/browse/FHIR-37903; reopen with `bun run jira:search snapshot FHIR-37903` | Formal request for modifier-extension and must-support clarifications. |
| Jira | `FHIR-50268` | https://jira.hl7.org/browse/FHIR-50268; reopen with `bun run jira:search snapshot FHIR-50268` | Formal request to replace broken `device-din` example. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Broad e.g./i.e. punctuation correction; page still has one changed-section miss. |
| Jira | `FHIR-43207` | https://jira.hl7.org/browse/FHIR-43207; reopen with `bun run jira:search snapshot FHIR-43207` | Context-only evidence that `structuredefinition-conformance-derivedFrom` is an uncommon but real extension-on-extension example. |
| Zulip | Resource context thread | `#conformance > StructureDefinition Context of Resource`, https://chat.fhir.org/#narrow/stream/conformance/topic/StructureDefinition%20Context%20of%20Resource; reopen with `bun run zulip:search snapshot conformance "StructureDefinition Context of Resource"` | Discussion behind `FHIR-46620`. |
| Confluence | `FHIR-43364` minutes | Page `227220068`, https://confluence.hl7.org/spaces/FHIRI/pages/227220068/FHIR+Infrastructure+Minutes+CC+2024-04-08; reopen with `bun run confluence:search snapshot 227220068` | Records FHIR-I approval and rationale for `Element` context notes. |
| Confluence | `FHIR-46620` WGM minutes | Page `265096084`, https://confluence.hl7.org/spaces/FHIRI/pages/265096084/FHIR+Infrastructure+Minutes+WGM+202409+-+Atlanta; reopen with `bun run confluence:search snapshot 265096084` | Records persuasive vote to improve Resource/DomainResource documentation. |
| Confluence | `FHIR-50268` WGM minutes | Page `325460605`, https://confluence.hl7.org/spaces/FHIRI/pages/325460605/FHIR+Infrastructure+Minutes+WGM+202505+-+Madrid; reopen with `bun run confluence:search snapshot 325460605` | Records approval to replace the bad example. |
| Confluence | `FHIR-37903` minutes | Page `108307268`, https://confluence.hl7.org/spaces/FHIRI/pages/108307268/FHIR+Infrastructure+Minutes+CC+2022-08-29; reopen with `bun run confluence:search snapshot 108307268` | Records persuasive vote for modifier-extension clarification. |

## Change summary

### Extension context guidance - substantive/semantic guidance

R6 changes the `Context` heading to `Extension Context`, reorders the context-type table, and adds a notes block explaining how `StructureDefinition.context.type = element` works for resource/datatype roots, specialization, `Element`, `DomainResource`, `Resource`, and FHIRPath fallback for "all elements except the root" (`source/defining-extensions.html:67-126`). This is the main substantive guidance change on the page. It is tied to `FHIR-43364` and `FHIR-46620`; Jira, Zulip, and Confluence all support the applied intent.

The existing normative sentence "Extensions SHALL only be used on a target that appears in their context list" remains unchanged, but the new notes change how readers interpret valid context expressions.

### Modifier extension and must-support guidance - semantic guidance

The ElementDefinition guidance now expands `IsModifier` to say it indicates whether the extension is a `modifierExtension` and adds a paragraph discouraging must-support on the extension definition itself, directing must-support status to profiles where the extension is used (`source/defining-extensions.html:196-236`). This directly matches `FHIR-37903`.

### Links, examples, and registry references - metadata/navigation and examples

Several example extension links were retargeted through `[%extensions-location%]`, reflecting movement of extension material into the extensions IG. The broken `device-din` example for context type `extension` was replaced by `http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom` (`source/defining-extensions.html:84-89`), matching `FHIR-50268`. The extension registry link changed from `extensibility-registry.html` to `[%extensions-location%]extension-registry.html` (`source/defining-extensions.html:241`).

### Normative/template metadata - metadata/template

Template churn removed the outer `<div class="col-12">`, changed the work-group cell to "Responsible Owner", removed the maturity level cell and `[%normative page infrastructure%]`, and retained standards status as Normative (`source/defining-extensions.html:16-20`). These are broad R6/template/normative publishing changes, not page-specific semantic decisions.

### Editorial only

Editorial changes include `data type` -> `datatype` (`FHIR-25431`), `e.g.` punctuation (`FHIR-44047`), `HL7 v2` -> `HL7 V2`, and small punctuation changes. These do not appear to alter conformance semantics.

### Overlooked current-page concerns

The current page still has a pre-existing internal wording gap in the minimum cardinality section: it covers minimum cardinality `0` and `> 1`, while the same paragraph discusses `> 0`, leaving `1` unclear (`source/defining-extensions.html:136-149`; same wording in R4 at old lines 108-121). This is captured as an actionable finding.

The changed context section also has minor copy-edit leftovers (`e.g. if`, `a expression`) and one nearby pre-existing agreement issue in the same table row (`extension that appear`). This is captured as a low-priority editorial finding.

## Source history

| Date | Commit | Subject | Classification | Page-specific effect |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | mechanical/template | Removed wrapper `<div class="col-12">`. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | editorial | Changed `data type`/`resource/data type` to `datatype`/`resource/datatype`. |
| 2023-02-08 | `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | fix extension links | links/examples | Retargeted example links through `[%extensions-location%]`. |
| 2023-02-16 | `d461d9831352eb489c8c77466208c8c7399c21e1` | `FHIR-37903 Clarification on modifier extensions` | semantic guidance | Added `IsModifier` clarification and must-support guidance. |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | QA related changes | editorial | Changed `HL7 v2` to `HL7 V2`. |
| 2023-03-14 | `4118eb9ddb6eabe52c56c903b3932f27c2c42e38` | remove content now moved to extensions IG, and fix broken links | links/navigation | Corrected ADXP link case and moved registry link to extensions IG. |
| 2025-03-03 | `2865d924342d7f3870bcbaefb89ecdd67b671a2a` | `FHIR-43364 Extensions with context Element apply everywhere but a resource is not an Element` | substantive/semantic guidance | Added notes for `element` context, `Element`, `DomainResource`, and FHIRPath fallback. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | metadata/template | Changed work group label to responsible owner and removed maturity cell. |
| 2025-10-31 | `605a6ffefb83e002264b0504348dea50144bb951` | more normative. changes | metadata/template | Removed `[%normative page infrastructure%]`. |
| 2025-10-31 | `89ed7895925241b1f4f106436dc7b181bf6c08f9` | `FHIR-50268` | example/link correction | Changed context-type `extension` example from `device-din` to `structuredefinition-conformance-derivedFrom`. |
| 2025-11-03 | `a7c5cdf36fbcffa521c8011b4242a3688117a22a` | `FHIR-46620 Clarify or Correct StructureDefinition context of Resource` | substantive/semantic guidance | Renamed section, reordered table, and added specialization/`Resource` context caveats. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | editorial | Fixed two `e.g.` punctuation instances on this page. |
| 2025-11-04 | `32ee662cd81e588351a75de377307f9c4a5c1564` | Merge branch `master` into `i.e.-e.g-` | merge/mechanical | Merge commit bringing branch changes together; no independent page rationale found in message. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` (Published, Persuasive, Technical Correction, R5): requested consistent spelling of "datatype" vs "data type". Commit `8592e1207273b786db340efb927bb6d1dc9756c9` applies this mechanically on the page. Confluence page `66940491` records "Using data type; Will auto approve."
- `FHIR-37903` (Published, Persuasive, non-substantive Clarification, R5): asked for modifier-extension guidance and specifically requested that the defining-extensions page list `IsModifier (indicates whether the extension is a modifierExtension)` and discourage must-support on the root element. Commit `d461d9831352eb489c8c77466208c8c7399c21e1` matches that request. Confluence page `108307268` records Persuasive, 8-0-4.
- `FHIR-43364` (Applied, Persuasive with Modification, non-substantive Clarification, R6): asked how `Context: Element` can mean "anywhere" when `Resource` is no longer an `Element`. The resolution chose documentation rather than changing tooling, including notes for resource roots and "all elements except root" via FHIRPath. Commit `2865d924342d7f3870bcbaefb89ecdd67b671a2a` applies those notes. Confluence page `227220068` records the same text and a 9-0-0 motion.
- `FHIR-50268` (Applied, Persuasive, non-substantive Correction, R6): reported that the `device-din` example URL did not resolve and suggested `structuredefinition-conformance-derivedFrom`. Commit `89ed7895925241b1f4f106436dc7b181bf6c08f9` does exactly that. Confluence page `325460605` records approval as Persuasive, 19-0-0.
- `FHIR-46620` (Applied, Persuasive, non-substantive Clarification, R6): asked whether `Resource` as extension context should be documented or warned about, because not every `Resource` descendant can carry root extensions. The resolution says to improve documentation and indicate that `Resource` means any resource where extensions are allowed. Commit `a7c5cdf36fbcffa521c8011b4242a3688117a22a` adds the current caveat at new lines 112-114. Zulip and Confluence support this.
- `FHIR-44047` (Resolved - change required, Persuasive, Technical Correction, R6 ballot): requested proper punctuation for `e.g.,` and `i.e.,` throughout the spec. Commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` fixes two instances on this page, but the current page still contains `e.g. if` in newly added context text at line 107.

### Other Jira issues that plausibly explain related text

- `FHIR-43207` (Published, Persuasive, FHIR-extensions): context-only. A comment says extension.value-as-context is uncommon and names `structuredefinition-conformance-derivedFrom` as the one Extensions IG example. This supports `FHIR-50268`'s replacement example but does not reveal a page mismatch.

### Context-only or weak Jira hits

- Phrase search for `"must-support status" "extension"` returned `FHIR-28264`, an unrelated US Vitals issue; not used.
- Cardinality searches for `"Extension minimum cardinality"`, `"minimum cardinality is > 1" extension`, and `"Even with a minimum cardinality > 0"` found no direct defining-extensions issue. `FHIR-33148` and `FHIR-14452` were keyword collisions and not used.

## Zulip evidence

- Quoted key searches:
  - `"FHIR-25431"`, `"FHIR-37903"`, `"FHIR-43364"`, `"FHIR-50268"`, and `"FHIR-44047"`: no direct results in the local public Zulip snapshot.
  - `"FHIR-46620"`: one direct result in `#conformance > StructureDefinition Context of Resource`.
- Snapshot: `bun run zulip:search snapshot conformance "StructureDefinition Context of Resource"`.
  - Date range: 2024-08-12 to 2024-08-21.
  - Gino Canessa raised that `StructureDefinition.context.type = element` with expression `Resource` can be read too broadly because `Bundle` is a `Resource` but cannot carry root extensions.
  - Grahame Grieve responded that `Resource` means any resource and that targets that cannot use extensions cannot use them there.
  - Lloyd McKenzie floated a validator warning encouraging `DomainResource`.
  - Chris Moesel suggested extension context has an implicit "if allowed" qualifier.
  - Gino asked if `Bundle` as a specific context should be OK, warning, or error; Grahame answered "error yes."
  - This thread supports the current page's `Resource` caveat at lines 112-114 and does not show a substantive intent mismatch.
- Changed-phrase searches:
  - `"StructureDefinition Context of Resource"` found the same thread.
  - `"all elements except the root"`, `"modifierExtension" "must-support"`, and `"structuredefinition-conformance-derivedFrom"` did not add stronger page-specific evidence.

## Confluence evidence

- `FHIR-25431`: page `66940491` (`FHIR Infrastructure Minutes CC 20200113`) records the tracker discussion and "Using data type; Will auto approve."
- `FHIR-37903`: page `108307268` (`FHIR Infrastructure Minutes CC 2022-08-29`) records Persuasive, Grahame Grieve / Rick Geimer, 8-0-4. Page `108316158` (`FHIR Infrastructure Minutes WGM 202209 - Baltimore`) also references assigning the item to Grahame.
- `FHIR-43364`: page `227220068` (`FHIR Infrastructure Minutes CC 2024-04-08`) records the proposed disposition text later mirrored in Jira and source: document that `element` context can reference resource/datatype roots, use `DomainResource` or a specific resource for resource roots, and use FHIRPath for "all elements except the root." Motion accepted Persuasive with Modification, Bas van den Heuvel / Josh Mandel, 9-0-0.
- `FHIR-46620`: page `265096084` (`FHIR Infrastructure Minutes WGM 202409 - Atlanta`) records "We improve the documentation in Context section for using Resource and DomainResource" and Persuasive, Grahame Grieve / Gino Canessa, 12-0-7. Page `265096093` was agenda context only.
- `FHIR-50268`: page `325460605` (`FHIR Infrastructure Minutes WGM 202505 - Madrid`) records that the example is not proper and approves as Persuasive, Gino Canessa / Corey Spears, 19-0-0.
- `FHIR-44047`: page `234784975` (`FHIR Infrastructure Minutes WGM 202405 - Dallas`) records "will fix" in a tracker block. Jira status remains "Resolved - change required", consistent with broad cleanup not necessarily fully applied.
- Search `"modifier extensions" "MustSupport"` found page `345089269` (`FHIR Infrastructure Minutes CC 2025-06-09`), but it concerned modifier elements and publisher rendering, not the R5 `FHIR-37903` page change; not used as causal evidence.

## Timeline

- 2020-01-09: `FHIR-25431` created. 2020-01-13: FHIR-I minutes page `66940491` records approval/auto-approval. 2021-10-27: Jira resolved. 2022-08-31: commit `8592e1207273b786db340efb927bb6d1dc9756c9` changes this page.
- 2022-08-12: `FHIR-37903` created. 2022-08-29: FHIR-I vote recorded in Jira and Confluence (`108307268`). 2023-02-16: commit `d461d9831352eb489c8c77466208c8c7399c21e1` applies page text.
- 2023-02-08 and 2023-03-14: link-retargeting commits move example links and registry references toward the extensions IG.
- 2023-12-11: `FHIR-43364` created. 2024-04-08: FHIR-I vote recorded in Jira and Confluence (`227220068`). 2025-03-03: commit `2865d924342d7f3870bcbaefb89ecdd67b671a2a` applies initial context notes.
- 2024-01-22: `FHIR-44047` created for broad e.g./i.e. cleanup. 2024-05-23: Jira resolved as change required. 2025-11-03: commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` fixes two instances on this page, but at least one changed-section instance remains.
- 2024-08-12 to 2024-08-21: Zulip `#conformance > StructureDefinition Context of Resource` discussion. 2024-08-13: `FHIR-46620` created. 2024-09-25: FHIR-I WGM vote recorded in Jira and Confluence (`265096084`). 2025-11-03: commit `a7c5cdf36fbcffa521c8011b4242a3688117a22a` applies page changes.
- 2025-04-16: `FHIR-50268` created. 2025-05-12: Jira vote recorded. 2025-05 WGM Confluence page `325460605` records approval. 2025-10-31: commit `89ed7895925241b1f4f106436dc7b181bf6c08f9` applies example replacement.
- 2025-10-31 to 2025-11-04: R6 normative/template commits adjust page metadata and merge the punctuation branch.

## Evidence log

- Confirmed page boundary:
  - `test -f .../4.0.1-0da2a0a84dc1/source/defining-extensions.html`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html`
- Captured direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/defining-extensions.html`
- Captured source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/defining-extensions.html`
  - `git show --stat --patch <commit> -- source/defining-extensions.html` for each page-touching commit.
- Read full current page:
  - `wc -l .../source/defining-extensions.html` returned `298`.
  - Read lines 1-120, 121-240, and 241-298.
- Jira:
  - Snapshotted `FHIR-25431`, `FHIR-37903`, `FHIR-43364`, `FHIR-50268`, `FHIR-46620`, `FHIR-44047`, and `FHIR-43207`.
  - FTS searched `"all elements except the root"`, `"The definition of an extension has no defined context"`, `"Resource is also a valid context"`, `"structuredefinition-conformance-derivedFrom"`, `"Extensions SHALL only be used on a target"`, `"must-support status" "extension"`.
  - Cardinality searches found no direct tracker for the `> 1`/`> 0` inconsistency.
- Zulip:
  - Initial unquoted FTS key searches failed with SQLite `no such column` errors because hyphens were parsed; repeated as quoted phrases.
  - Snapshotted `#conformance > StructureDefinition Context of Resource`.
- Confluence:
  - Ran `refs jira` and FTS for all explicit keys.
  - Snapshotted pages `66940491`, `108307268`, `108316158`, `227220068`, `325460605`, `265096084`, `265096093`, and `234784975`.
- Current-page checks:
  - `rg` found remaining copy-edit issues at current lines 87, 107, 116, 143, and 293.
  - `git blame -L 136,149` showed the cardinality wording is old (2017-era) and not introduced by the R4-to-R6 page diff.
