# mapping-tutorial research appendix

## Scope and coverage

- Page path: `source/mapping-tutorial.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees and is modified, not added/deleted/renamed.
- Full newer page read end-to-end: yes, 600 lines.
- Direct source-history commits touching this page in the range: 8. Explicit Jira keys in commit subjects/patch context: `FHIR-28465`, `FHIR-27915`, `FHIR-17708`, `FHIR-44047`. Later related evidence also found `FHIR-50272`.
- Jira searches: snapshots for `FHIR-28465`, `FHIR-27915`, `FHIR-17708`, `FHIR-44047`, `FHIR-50272`; targeted FTS for changed phrases and suspected Step 14 issues.
- Zulip searches: quoted Jira-key FTS, changed phrase searches, and snapshots for the FHIR Mapping Language metadata thread, the later Step 14/`resolve()` thread, and the StructureMap examples thread.
- Confluence searches: refs/FTS for explicit Jira keys and snapshots for the relevant FHIR-I minutes/connectathon pages.
- Caveats: direct rendered HTML was not built; this review is source-level. Initial unquoted Jira/Zulip FTS searches for hyphenated issue keys failed because FTS5 parsed the hyphen as an operator; quoted searches and direct snapshots were then used.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 page, metadata/example start | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:16` | Current page title and owner/status row. |
| Source | Metadata shorthand example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:52` | `map` statement was replaced with `/// url` / `/// name`. |
| Source | Type conversion example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:185` | `convertsToInteger()` update; line 186 still uses undefined `at1`. |
| Source | Step 14 current example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:559` | Completed TODO now teaches multiple input structures, but later discussion calls it misleading/underspecified. |
| Source | Further examples text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:592` | R6 page still says "this version (R5)". |
| Source | R4/R5 maps page note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/r4maps.html:14` | Linked page is explicitly R4/R5 and says it has not been updated for R6. |
| Source | Mapping-language metadata syntax | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:126` | Confirms current `/// name{.property}* = {value}` metadata syntax used by the tutorial. |
| Source | Mapping-language evaluate transform | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:617` | Relevant to later Step 14 workaround discussion. |
| Commit | `de492c1c3920677e9b7da8a17090407709934b7c` | `https://github.com/HL7/fhir/commit/de492c1c3920677e9b7da8a17090407709934b7c` | Applies `FHIR-28465` `isInteger` -> `convertsToInteger()`. |
| Commit | `c372919350db4764cebd887053bd3bd567234faa` | `https://github.com/HL7/fhir/commit/c372919350db4764cebd887053bd3bd567234faa` | Applies `FHIR-27915` metadata syntax and `FHIR-17708` tutorial completion. |
| Commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies page-level `e.g.,` punctuation changes for `FHIR-44047`. |
| Jira | `FHIR-28465` | `https://jira.hl7.org/browse/FHIR-28465`; reopen: `bun run jira:search snapshot FHIR-28465` | Formal issue for replacing nonexistent FHIRPath `isInteger`. |
| Jira | `FHIR-27915` | `https://jira.hl7.org/browse/FHIR-27915`; reopen: `bun run jira:search snapshot FHIR-27915` | Formal issue for replacing the `map` statement with metadata shorthand. |
| Jira | `FHIR-17708` | `https://jira.hl7.org/browse/FHIR-17708`; reopen: `bun run jira:search snapshot FHIR-17708` | Formal issue to complete the tutorial's abrupt `[todo]` ending. |
| Jira | `FHIR-44047` | `https://jira.hl7.org/browse/FHIR-44047`; reopen: `bun run jira:search snapshot FHIR-44047` | Broad R6 punctuation cleanup behind the `e.g.,` edits. |
| Jira | `FHIR-50272` | `https://jira.hl7.org/browse/FHIR-50272`; reopen: `bun run jira:search snapshot FHIR-50272` | Later retracted issue says Step 14 "looks wrong" and links the Zulip discussion. |
| Zulip | FHIR Mapping Languages | `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR%20Mapping%20Languages`; reopen: `bun run zulip:search snapshot fhir/infrastructure-wg "FHIR Mapping Languages"` | Clarifies intent and concerns for `FHIR-27915`. |
| Zulip | `resolve()` references within a Bundle | `https://chat.fhir.org/#narrow/stream/FHIR%20Mapping%20Language/topic/resolve()%20references%20within%20a%20Bundle`; reopen: `bun run zulip:search snapshot "FHIR Mapping Language" "resolve() references within a Bundle"` | Later discussion explicitly identifies Step 14 as misleading/underspecified. |
| Zulip | spec examples of StructureMap | `https://chat.fhir.org/#narrow/stream/mapping-framework/topic/spec%20examples%20of%20StructureMap`; reopen: `bun run zulip:search snapshot mapping-framework "spec examples of StructureMap"` | Lists mapping-language issues including `FHIR-28465` and points to tested tutorial maps. |
| Confluence | FHIR-I minutes 2021-01-04 | `https://confluence.hl7.org/spaces/FHIRI/pages/97474199/FHIR+Infrastructure+Minutes+CC+20210104`; reopen: `bun run confluence:search snapshot 97474199` | Records `FHIR-28465` moved to technical correction. |
| Confluence | 2020-09 FHIR Mapping Language Track | `https://confluence.hl7.org/spaces/FHIR/pages/86976609/2020-09+FHIR+Mapping+Language+Track`; reopen: `bun run confluence:search snapshot 86976609` | Track goal included completing the tutorial and adjusting it to newer language features. |
| Confluence | FHIR-I minutes 2022-11-21 | `https://confluence.hl7.org/spaces/FHIRI/pages/144976254/FHIR+Infrastructure+Minutes+CC+2022-11-21`; reopen: `bun run confluence:search snapshot 144976254` | Records reopening `FHIR-27915` and points to the Zulip thread. |
| Confluence | FHIR-I minutes 2022-12-05 | `https://confluence.hl7.org/spaces/FHIRI/pages/144979391/FHIR+Infrastructure+Minutes+CC+2022-12-05`; reopen: `bun run confluence:search snapshot 144979391` | Records `FHIR-27915` persuasive-with-mod vote, 14-0-0. |
| Confluence | FHIR-I WGM 2024-05 Dallas | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; reopen: `bun run confluence:search snapshot 234784975` | Records `FHIR-44047` "will fix". |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the outer `<div class="col-12">` wrapper and matching close tag. This is mechanical template churn.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the page header row from Work Group + Maturity Level + Standards Status to "Responsible Owner" + Standards Status, removing the FMM cell. This appears to be broad R6 status-template work, not a page-specific mapping-language decision.

### Semantic guidance / example change

- `c372919350db4764cebd887053bd3bd567234faa` replaced the old top-of-map declaration:
  - old: `map "http://hl7.org/fhir/StructureMap/tutorial" = tutorial`
  - new: `/// url = "http://hl7.org/fhir/StructureMap/tutorial"` and `/// name = "Tutorial"`
- This is tied to `FHIR-27915`. Jira's final resolution says metadata can be declared as `/// elementname = fhirpathvalue`; the current mapping-language page likewise documents `/// name{.property}* = {value}` and requires `url` and `name`. No intent-vs-implementation mismatch was found here.

### Example change with an overlooked defect

- `de492c1c3920677e9b7da8a17090407709934b7c` / `FHIR-28465` replaced nonexistent `isInteger` with FHIRPath `convertsToInteger()`.
- The resulting line 186 is still invalid-looking: `src.a21 as a where at1.convertsToInteger().not() -> tgt.a21 = 0;`. The source alias is `a`, not `at1`. This typo existed before as `not at1.isInteger`, but the `FHIR-28465` change preserved it while updating the function.

### Tutorial-completion change with later reassessment

- `c372919350db4764cebd887053bd3bd567234faa` / `FHIR-17708` replaced the Step 14 `[todo]` with:
  - `src.ptr as t then {`
  - `t.f2 -> tgt.f2`
  - `}`
- It also removed the Step 15 `[todo]` grouping section and added a "Further examples" paragraph linking to `r4maps.html`.
- Later evidence (`FHIR-50272` and the 2025 Zulip thread) indicates Step 14 remains misleading or underspecified. The current source structure says `ptr : Resource(TLeft2)`, not `Reference(TLeft2)`, while the prose says the application host should "find the structure identified by src.ptr". Grahame Grieve stated Step 14 is misleading because it says `ptr` but gives it an inline `Resource` type, and later said the name should change and a reference example should be added.

### Editorial only

- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `FHIR-44047` added commas after `e.g.` in three sentences.
- `dad7cf37c75822c352509e1c2e8d050408d0be18` and `9f780149387dc652bec02aa7744e52774acddbc9` made QA typo edits, including correcting `it's literal type` to `its literal type`.

### Current stale-version text

- The R6 ballot4 tutorial still says the linked maps "map between version R4B and this version (R5)" and links to "Transforms between R4 and R5".
- The target `r4maps.html` page in the same tree explicitly says it has not been updated for R6 and should be addressed before the next ballot. This is reader-facing stale text on the tutorial page, not a direct R4->R6 source-history issue with its own Jira key.

## Source history

| Commit | Date | Subject | Classification | Notes |
|---|---:|---|---|---|
| `de492c1c3920677e9b7da8a17090407709934b7c` | 2021-04-05 | `FHIR-28465 - Replace isInteger with convertsToInteger() in Mapping Language Tutorial` | example change | Replaced two `isInteger` references; preserved `at1` typo. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | mechanical/template | Removed `<div class="col-12">` wrapper. |
| `8a8c824d473e4c3f40e34b2b9f463a227f368960` | 2021-12-18 | `Merge remote-tracking branch 'alexzautke/AZ-28465-convertsToInteger' into gg-202112-multi-merge` | merge | Brings `FHIR-28465` branch into the integration stream. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | editorial/QA | Corrected `it's` -> `its`; temporarily introduced `etc..`. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | editorial/QA | Corrected `etc..` back to `etc.`. |
| `c372919350db4764cebd887053bd3bd567234faa` | 2023-02-24 | `FHIR-27915 Replace "map" statement with shorthand syntax + FHIR-17708 Complete the FHIR Mapping Language Tutorial page` | substantive example/tutorial | Replaced map metadata syntax; filled Step 14 TODO; removed Step 15 TODO; added further examples link. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | metadata/template | Updated owner/status row; not page-specific semantics. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | editorial | Added commas after `e.g.`. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-28465` (`Published`, Technical Correction, raised in R4, applied for R5): says the tutorial references nonexistent FHIRPath function `isInteger` and should use `convertsToInteger()`. The source change did that but did not correct the adjacent `at1` variable typo.
- `FHIR-27915` (`Published`, Change Request, Persuasive with Modification, applied for R5): final resolution is to define StructureMap metadata using `/// elementname = fhirpathvalue`, with examples such as `/// title = 'My awesome map'`. The tutorial's `/// url` / `/// name` example is consistent with the current mapping-language page.
- `FHIR-17708` (`Published`, Change Request, applied for R5): says the tutorial ended abruptly with two `[todo]`s and needed the TODOs fixed and more complex tutorial steps added. The 2023 commit removed the TODO markers, but later evidence shows Step 14 remains confusing.
- `FHIR-44047` (`Resolved - change required`, Technical Correction, raised in R6 ballot): requests correcting `e.g.`/`i.e.` punctuation throughout the FHIR spec. The current page includes three `e.g.,` punctuation changes from the `FHIR-44047` commit. Jira status remains "Resolved - change required"; this is workflow context only and not elevated as an action finding.

### Other Jira issues that plausibly explain current-page concerns

- `FHIR-50272` (`Resolved - No Change`, resolution `Retracted`, created 2025-04-16): "FML: enable resolve() on source context.element". The description says there are Bundle mapping use cases requiring reference resolution and that the Step 14 tutorial example "looks wrong." It proposed changing `ptr` to `Reference(TLeft2)` and adding `resolve()`-related syntax. The submitter retracted the issue after a target-variable workaround was identified, but the linked Zulip discussion still concludes that the tutorial name/prose/reference coverage should be improved.

### Context-only Jira hits that should not drive action

- Broad searches for `version R4B and this version R5` returned unrelated cross-version issues such as `FHIR-44615`; no hit was specific to this tutorial's stale R5 wording.
- Searches for `r4maps R5 R6 mapping tutorial` found no directly relevant Jira issue.

## Zulip evidence

- `#fhir/infrastructure-wg > FHIR Mapping Languages` (snapshot command above) contains the reopened `FHIR-27915` discussion. Brian Postlethwaite asked whether the `map` line was being removed and how much FSH syntax was intended. The thread led to clearer Jira disposition and the 2022-12-05 vote. This supports the metadata syntax change and did not reveal a mismatch in the tutorial.
- `#FHIR Mapping Language > resolve() references within a Bundle` (2025-03-19 to 2025-04-17) is the most important later evidence:
  - Michael Rebsamen noted Step 14 "suggests following a reference would be implicit" and linked the tutorial.
  - Oliver Egger observed there were tested maps for steps 1-13 but not step 14, and questioned how FML would decide to resolve `src.ptr` implicitly.
  - Grahame Grieve said Step 14 is misleading because it says `ptr` but gives it type `Resource`, which is inline rather than a reference.
  - After `FHIR-50272` was retracted due to a workaround, the thread still concluded the name `ptr` is misleading and a reference example should be added/split from the direct-resource case.
- `#mapping-framework > spec examples of StructureMap` (2021-09) lists a batch of mapping-language issues, including `FHIR-28465` and `FHIR-27915`, and points to the external `ahdis/fhir-mapping-tutorial` maps. It is useful context for tutorial testing, but it is not a formal disposition.
- Quoted key searches found no Zulip hits for `FHIR-44047`; no Zulip evidence was needed for the punctuation-only edits.

## Confluence evidence

- FHIR-I minutes 2021-01-04 (`97474199`) record `FHIR-28465` as "Move to technical correction."
- 2020-09 FHIR Mapping Language Track (`86976609`) says the track purpose included completing the tutorial and adjusting it to newer language features, with a scenario to find open questions and draft TODO sections. It also records `FHIR-28465` as a report-out Jira ticket and notes the external GitHub tutorial maps had been extended through step 10 at that time.
- FHIR-I minutes 2022-11-21 (`144976254`) record reopening `FHIR-27915` and link to the Zulip thread.
- FHIR-I minutes 2022-12-05 (`144979391`) record `FHIR-27915` as Persuasive with Mod, motion Alexander Zautke/Rick Geimer, 14-0-0.
- FHIR-I WGM 2024-05 Dallas (`234784975`) records `FHIR-44047` "will fix." This supports the punctuation cleanup but not any page-specific semantic change.
- No Confluence refs/FTS hits were found for `FHIR-17708` or `FHIR-50272`.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2018-08-22 | Jira created | `FHIR-17708` filed: tutorial ends with two TODOs. |
| 2018-11-07 | Jira resolved | `FHIR-17708` resolved Persuasive; "Do this - though it might not be done for R4." |
| 2020-09-10 | Jira created | `FHIR-28465` filed to replace nonexistent `isInteger`. |
| 2020-09 | Confluence/connectathon | FHIR Mapping Language Track aims to complete tutorial and adjust to newer features. |
| 2021-01-04 | Confluence/FHIR-I | `FHIR-28465` moved to technical correction. |
| 2021-04-05 | Source commit | `de492c1c...` applies `convertsToInteger()` in tutorial. |
| 2022-10 to 2022-11 | Zulip discussion | `FHIR-27915` metadata syntax and compatibility concerns discussed. |
| 2022-11-21 | Confluence/FHIR-I | `FHIR-27915` reopened, linked to Zulip. |
| 2022-12-05 | Confluence/Jira vote | `FHIR-27915` Persuasive with Mod, 14-0-0. |
| 2023-02-24 | Source commit | `c372919...` applies `FHIR-27915` and `FHIR-17708` to this page. |
| 2024-01-22 | Jira created | `FHIR-44047` filed for `e.g.`/`i.e.` punctuation throughout FHIR R6 ballot. |
| 2024-05-23/24 | Jira/Confluence | `FHIR-44047` resolved Persuasive / WGM minutes say "will fix." |
| 2025-03-19 to 2025-04-17 | Zulip discussion | Step 14 discussed in the context of `resolve()`; page is called misleading/underspecified. |
| 2025-04-16 to 2025-04-17 | Jira | `FHIR-50272` created then retracted; description still documents that Step 14 "looks wrong." |
| 2025-10-31 | Source commit | R6 owner/status metadata row update. |
| 2025-11-03 | Source commit | `FHIR-44047` punctuation changes applied to this page. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/mapping-tutorial.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/mapping-tutorial.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/mapping-tutorial.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <commit> -- source/mapping-tutorial.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager blame -L 49,54 -L 181,187 -L 579,593 -- source/mapping-tutorial.html`
- Full page read:
  - `wc -l ".../source/mapping-tutorial.html"` returned 600 lines for the R6 ballot4 source.
  - Read chunks: 1-160, 161-320, 321-480, 481-600.
- Jira:
  - `bun run jira:search snapshot FHIR-28465`
  - `bun run jira:search snapshot FHIR-27915`
  - `bun run jira:search snapshot FHIR-17708`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-50272`
  - Targeted FTS: `convertsToInteger Mapping Language Tutorial`, `Complete the FHIR Mapping Language Tutorial page`, `Replace map statement with shorthand syntax`, `step14 mapping tutorial`, `r4maps R5 R6 mapping tutorial`.
- Zulip:
  - Quoted key FTS: `bun run zulip:search fts "\"FHIR-27915\"" --limit 20` and analogous searches for other explicit keys.
  - Snapshots:
    - `bun run zulip:search snapshot fhir/infrastructure-wg "FHIR Mapping Languages"`
    - `bun run zulip:search snapshot "FHIR Mapping Language" "resolve() references within a Bundle"`
    - `bun run zulip:search snapshot mapping-framework "spec examples of StructureMap"`
- Confluence:
  - `bun run confluence:search refs jira FHIR-28465`, `FHIR-27915`, `FHIR-17708`, `FHIR-44047`, `FHIR-50272`
  - `bun run confluence:search snapshot 97474199`
  - `bun run confluence:search snapshot 86976609`
  - `bun run confluence:search snapshot 144976254`
  - `bun run confluence:search snapshot 144979391`
  - `bun run confluence:search snapshot 234784975`
