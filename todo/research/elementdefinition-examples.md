# elementdefinition-examples research appendix

## Scope and coverage

- Page path: `source/elementdefinition-examples.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Boundary: page exists in both source trees.
- End-to-end page read: yes. The R6 ballot4 source is 362 lines by `wc -l` and was read in full via line ranges `1-220` and `221-440`.
- Source history: 8 commits touched this page between the two commits.
- Explicit/near-explicit Jira keys found in source history: `FHIR-36700` (commit subject used bare `36700`), `FHIR-25431`, `FHIR-19608`.
- Related Jira keys followed because they explain the same `pattern[x]` semantics: `FHIR-33316`, `FHIR-28126`, `FHIR-18296`; `FHIR-6337` is old page-history context only.
- Jira/Zulip/Confluence searches were performed for the explicit keys, the distinctive phrase `constraint by example`, page path/label terms, and distinctive current-page/example phrases.
- Caveats:
  - A first Zulip FTS pass using unquoted issue keys such as `FHIR-36700` failed because the hyphen was parsed by FTS; the searches were rerun with quoted keys.
  - Searches for the malformed JSON snippets and distinctive Spanish display text found no Jira/Zulip/Confluence discussion, so the JSON defect appears to be newly noticed rather than tracked.
  - `FHIR-19608` is formally about the datatype examples page, but commit `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` applied the JSON-tab work to this ElementDefinition examples page too.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/elementdefinition-examples.html:19-20` | Old page only pointed readers to StructureDefinition examples. |
| Source | R6 page intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:19-27` | New `Pattern Examples` section and page purpose. |
| Source | Primitive pattern examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:29-118` | Demonstrates primitive pattern vs fixed behavior. |
| Source | Complex pattern JSON defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:167-187` | Current JSON snippet is syntactically malformed. |
| Source | Repeating pattern examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:195-335` | Shows `pattern[x]` semantics for repeating elements and nested arrays. |
| Source | Repeating invalid JSON defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:281-295` | Current invalid example omits a closing `]` before `text`. |
| Source | Pattern definition cross-link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/elementdefinition.xml:1914` | ElementDefinition.pattern[x] definition links to this page and matches `FHIR-36700` wording. |
| Commit | Pattern examples added | `44ed2366be24968481e1dc367d04cff3be43df0d`, https://github.com/HL7/fhir/commit/44ed2366be24968481e1dc367d04cff3be43df0d | Main substantive page-specific addition; commit subject: `36700 - pattern examples and clarification`. |
| PR | Pattern examples PR | https://github.com/HL7/fhir/pull/2202 | Associated PR for commit `44ed2366...`; merged 2022-08-20. |
| Commit | JSON examples added | `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6`, https://github.com/HL7/fhir/commit/e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6 | Added XML/JSON example tabs and the malformed JSON snippets that still exist. |
| PR | JSON examples PR | https://github.com/HL7/fhir/pull/2617 | Associated PR for commit `e9e4e5f...`; merged 2023-02-09. |
| Jira | `FHIR-36700` | https://jira.hl7.org/browse/FHIR-36700; reopen with `bun run jira:search snapshot FHIR-36700` | Formal rationale for clarifying `pattern[x]` wording and adding examples. |
| Jira | `FHIR-19608` | https://jira.hl7.org/browse/FHIR-19608; reopen with `bun run jira:search snapshot FHIR-19608` | Formal rationale for adding JSON tabs/examples; not page-specific but implemented here. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Explains `data type` -> `datatype` editorial changes. |
| Jira | `FHIR-33316` | https://jira.hl7.org/browse/FHIR-33316; reopen with `bun run jira:search snapshot FHIR-33316` | Earlier array wording issue later linked to `FHIR-36700`. |
| Zulip | Pattern[x] on 0..* elements | https://chat.fhir.org/#narrow/stream/179177-conformance/topic/pattern.5Bx.5D.20on.200.2E.2E*.20elements | Long rationale/disagreement thread that led to `FHIR-36700`. Snapshot: `bun run zulip:search snapshot conformance "pattern[x] on 0..* elements"`. |
| Zulip message | `FHIR-36700` resolution mention | https://chat.fhir.org/#narrow/stream/179177-conformance/topic/pattern.5Bx.5D.20on.200.2E.2E*.20elements/near/277789746 | Gino Canessa summarizes that `pattern[x]` applies to all top-level repeats; use slicing for one/subset. |
| Zulip message | Nested-array intent | https://chat.fhir.org/#narrow/stream/179177-conformance/topic/pattern.5Bx.5D.20on.200.2E.2E*.20elements/near/277794763 | Clarifies every outer repeat must have something that meets the pattern, while a nested array needs only one matching nested repetition. |
| Zulip | PatternString validation | https://chat.fhir.org/#narrow/stream/179166-implementers/topic/patternString.20Validation/near/327568623 | Later implementer question quoting the clarified `constraint by example` wording. |
| Confluence | FHIR-I minutes 2022-04-04 | https://confluence.hl7.org/spaces/FHIRI/pages/94642520/FHIR+Infrastructure+Minutes+CC+2022-04-04; reopen with `bun run confluence:search snapshot 94642520` | Meeting minutes record creating `FHIR-36700` and vote 12-0-0. |
| Confluence | Conformance chat tracking | https://confluence.hl7.org/spaces/CONF/pages/101358613/FHIR+Conformance+Chat+Tracking; reopen with `bun run confluence:search snapshot 101358613` | Tracks the same Zulip discussion and says it led to `FHIR-36700`. |
| Confluence | FHIR-I minutes 2020-01-13 | https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113; reopen with `bun run confluence:search snapshot 66940491` | Context for `FHIR-25431` datatype spelling cleanup. |

## Change summary

### Semantic guidance / substantive examples

- R4 page content was only a pointer to the StructureDefinition example list.
- R6 ballot4 adds a substantial `Pattern Examples` section for `ElementDefinition.pattern[x]`, including primitive, complex, and repeating-value examples.
- The new page text is Informative, but it explains conformance semantics using normative language such as `SHALL` at `/source/elementdefinition-examples.html:223-225`.
- The semantics match `FHIR-36700` and the current `ElementDefinition.pattern[x]` definition:
  - pattern applies to each occurrence of a repeating element;
  - if the desired pattern should apply to only one/subset of repetitions, use slicing;
  - nested arrays inside a pattern require at least one matching element from the instance array.

### Example changes

- Commit `44ed2366be24968481e1dc367d04cff3be43df0d` added the XML examples and explanatory structure for `FHIR-36700`.
- Commit `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` added JSON tabs/examples under the broader `FHIR-19608` work.
- Current page defect: at least two JSON snippets are malformed:
  - lines `167-187` contain `"url" : "lang"" : {` and `"url" : "content"" : {`;
  - lines `281-295` miss the closing `]` for the `coding` array before `"text"`.
- Minor current-page issue: lines `50-75` repeat the same primitive valid example and caption twice, which makes the later reference to the "second example" harder to follow.

### Editorial only

- `FHIR-25431` changed `data type`/`data types` to `datatype`/`datatypes`.
- Commit `870ff1ab5ecc95ad012a0c85513497f0ce2222bd` removed an `extension-regex.html` reference and fixed the typo `partiall` -> `partially`.

### Metadata/template/navigation

- Page wrapper/header changed from `<%edheader examples%>` to `<%dtxheader examples ElementDefinition%>`.
- R6 normative template work changed the ownership/status table to `Responsible Owner` and removed the separate maturity-level column.
- Mechanical page/template churn includes removing the `col-12` wrapper, adding a UTF-8 BOM in 2023, adding example-tab JavaScript, and later updating jQuery paths to `assets/js/...`.

### Not changed

- No REST, search, operation, terminology binding, or resource conformance behavior changed directly on this page beyond the `pattern[x]` guidance/examples.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed the outer `<div class="col-12">` wrapper. | mechanical/template |
| `c1d765ab73d0bf137c30793009baf937473668ac` | 2022-08-13 | `various fixes including IHE + DICOM value sets + version` | Changed `<%edheader examples%>` to `<%dtxheader examples ElementDefinition%>`. | metadata/template |
| `44ed2366be24968481e1dc367d04cff3be43df0d` | 2022-08-17 | `36700 - pattern examples and clarification` | Replaced the R4-era pointer-only content with the Pattern Examples section and XML examples. Associated PR: https://github.com/HL7/fhir/pull/2202. | substantive semantic guidance / examples |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Changed three occurrences to `datatype`/`datatypes`. Associated PR: https://github.com/HL7/fhir/pull/2312. | editorial |
| `870ff1ab5ecc95ad012a0c85513497f0ce2222bd` | 2022-09-04 | `Removed regex reference` | Removed `extension-regex.html`, retained the FHIRPath `.matches()` reference, and fixed `partiall`. Associated PR: https://github.com/HL7/fhir/pull/2347. | editorial |
| `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` | 2023-02-09 | `FHIR-19608 Add JSON to datatype examples page` | Added `[%example-start%]`, `[%example-json%]`, `[%example-end%]`, JSON snippets, footer scripts, and a BOM. Associated PR: https://github.com/HL7/fhir/pull/2617. | example/rendering; introduced current JSON defects |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | `upgrade jquery` | Updated script paths from `external/jquery/jquery.js` / `jquery-ui.min.js` to `assets/js/...`. Associated PR: https://github.com/HL7/fhir/pull/3589. | mechanical |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changed header table to say `Responsible Owner` and removed the maturity-level cell. Associated PR: https://github.com/HL7/fhir/pull/3901. | metadata/template |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-36700` - "Pattern wording isn't sufficiently clear"
  - Snapshot command: `bun run jira:search snapshot FHIR-36700`
  - Status: Published; resolution: Persuasive with Modification; work group: fhir-i; vote: Grahame Grieve/Eric Haas 12-0-0 on 2022-04-04; applied for R5.
  - Description asked to clarify `pattern[x]` language from "the value in the instance" to "each occurrence of the element in the instance" and to clarify array wording.
  - Resolution explicitly said to add text: "If a pattern[x] is declared on a repeating element, the pattern applies to all repetitions. If the desire is for a pattern to apply to only one element or a subset of elements, slicing must be used. See [xxx] for examples..."
  - Resolution also said to add a notes/examples section covering repeating/non-repeating and simple/complex elements. This maps directly to commit `44ed2366...` and the current page.
- `FHIR-25431` - "Inconsistent use of `datatype` vs. `data type`"
  - Snapshot command: `bun run jira:search snapshot FHIR-25431`
  - Status: Published; technical correction; related URL/page is datatypes, not this page specifically.
  - Explains the spelling-only commit `8592e120...`.
- `FHIR-19608` - "Add JSON to datatype examples page"
  - Snapshot command: `bun run jira:search snapshot FHIR-19608`
  - Status: Published; resolution says "Will do this and set up tabs so you can see either JSON or XML."
  - The Jira issue is about datatype examples, but commit `e9e4e5f...` touched this page and added JSON tabs/snippets here. The malformed JSON snippets appear to be implementation defects in that commit.

### Other Jira issues that plausibly explain the same changed text

- `FHIR-33316` - "Clarify behavior of pattern[x] on arrays"
  - Snapshot command: `bun run jira:search snapshot FHIR-33316`
  - Earlier issue removing the word `array` from "provided in the pattern[x] array"; later comment by Gino Canessa links to `FHIR-36700`.
  - This is direct background for why `FHIR-36700` had to clarify top-level repeating-element semantics.
- `FHIR-28126` - "Clarify the meaning of a fixed/pattern value when min=0"
  - Snapshot command: `bun run jira:search snapshot FHIR-28126`
  - Clarified that when `min=0`, fixed/pattern values only apply if the element is present. It explains older `fixed/pattern` context but is not the direct source of this page's examples.
- `FHIR-18296` - "Clarify the behavior of patternCodeableConcept"
  - Snapshot command: `bun run jira:search snapshot FHIR-18296`
  - Earlier `patternCodeableConcept` issue that introduced/clarified recursive matching for arrays within a pattern. It is conceptual background for the nested `CodeableConcept.coding` examples.

### Context-only Jira hits that should not drive action

- `FHIR-6337` - "elementdefinition-examples.html should link to structuredefinition-examples.html"
  - Snapshot command: `bun run jira:search snapshot FHIR-6337`
  - Explains the historical pointer-only R4 page but does not explain the R6 pattern-example additions.
- `FHIR-3621` appeared in a Jira FTS search for `"constraint by example"` but is old StructureDefinition/fixed-value context and was not needed to explain this page change.

### Jira searches with no useful hit

- Exact/current-page phrases such as `"any code element present SHALL have at least one coding"`, `"required elements are present, but on different repeats"`, `"Un valor de visualización"`, and `"elementdefinition-examples"` did not reveal an issue that tracks the current malformed JSON examples.

## Zulip evidence

- Main rationale thread: `#conformance > pattern[x] on 0..* elements`
  - Snapshot command: `bun run zulip:search snapshot conformance "pattern[x] on 0..* elements"`
  - Thread URL: https://chat.fhir.org/#narrow/stream/179177-conformance/topic/pattern.5Bx.5D.20on.200.2E.2E*.20elements
  - Date range in snapshot: 2021-12-08 to 2022-04-04.
  - Key content:
    - 2021-12-08: Chris Moesel notes confusion from the phrase "each element in the pattern[x] array" because `pattern[x]` itself is not repeating.
    - 2022-04-01 to 2022-04-04: participants discuss whether a pattern on a top-level repeating element should mean "all repeats" or "at least one repeat"; examples include `CodeableConcept`, binding behavior, and slicing complexity.
    - Message `277789746` (Gino Canessa, 2022-04-04 20:35): says `FHIR-36700` resolves this; generally `pattern[x]` applies to everything, and slicing should be used for one element/subset.
    - Message `277794763` (Gino Canessa, 2022-04-04 21:15): clarifies the nested-array intent: every outer element must have something that meets the pattern; if the pattern is in a sub-array, only one sub-array element needs to match.
    - Message `277796374` (Grahame Grieve, 2022-04-04 21:29): says the next release will make a hint on profiles about this.
  - This thread supports that the applied page examples match the intended top-level vs nested-array distinction.
- Later implementer confirmation thread: `#implementers > patternString Validation`
  - Snapshot command: `bun run zulip:search snapshot implementers "patternString Validation"`
  - Message `327568623` quotes the clarified `ElementDefinition.pattern[x]` definition from build.fhir.org and says the definition was "quite clear." This is not an implementation rationale, but it suggests the post-change text was discoverable.
- Related older context: `#conformance > fixed/pattern on min = 0`
  - Snapshot command: `bun run zulip:search snapshot conformance "fixed/pattern on min = 0"`
  - Explains `FHIR-28126` and fixed/pattern-min semantics, but does not directly drive this page's R6 examples.
- Zulip searches for `"Un valor de visualización"`, `"required elements are present, but on different repeats"`, and `"patternCoding" "valueCode"` found no discussion of the malformed JSON snippets.

## Confluence evidence

- `FHIR Infrastructure Minutes CC 2022-04-04`
  - Snapshot command: `bun run confluence:search snapshot 94642520`
  - URL: https://confluence.hl7.org/spaces/FHIRI/pages/94642520/FHIR+Infrastructure+Minutes+CC+2022-04-04
  - References `FHIR-33316`, the `#conformance` Zulip topic, and `FHIR-36700`.
  - Minutes say to create `FHIR-36700` to spin off the clarification and record the `FHIR-36700` vote: Persuasive, Grahame Grieve / Eric Haas 12-0-0.
- `FHIR Conformance Chat Tracking`
  - Snapshot command: `bun run confluence:search snapshot 101358613`
  - URL: https://confluence.hl7.org/spaces/CONF/pages/101358613/FHIR+Conformance+Chat+Tracking
  - Tracks "Pattern[x] on 0..* Elements" and states the chat discussion led to `FHIR-36700`.
  - It is useful as process/context evidence, not a formal disposition.
- `FHIR Infrastructure Minutes CC 20200113`
  - Snapshot command: `bun run confluence:search snapshot 66940491`
  - URL: https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113
  - Mentions `FHIR-25431` and "Using `data type`; Will auto approve." Context for the spelling cleanup only.
- Confluence searches for `FHIR-19608`, `"constraint by example"`, `"pattern examples" ElementDefinition`, and the malformed JSON phrases did not find additional relevant minutes or action.

## Timeline

- 2015-05 to 2018-03: `FHIR-6337` asks that `elementdefinition-examples.html` link to `structuredefinition-examples.html`; this explains the sparse R4 page.
- 2018-09 to 2019-01: `FHIR-18296` discusses and resolves `patternCodeableConcept` recursive array matching.
- 2019-02: `FHIR-19608` resolves to add JSON/XML tabs for datatype examples; this is not implemented on this page until 2023.
- 2020-07 to 2020-11: Zulip `fixed/pattern on min = 0` and `FHIR-28126` clarify that fixed/pattern constraints apply only when optional elements are present.
- 2021-09 to 2021-11: `FHIR-33316` removes/clarifies misleading array wording in `ElementDefinition.pattern[x]`; later discussion shows it did not settle all top-level repeating-element confusion.
- 2021-12 to 2022-04: Zulip `pattern[x] on 0..* elements` debates all-vs-at-least-one semantics for repeating elements.
- 2022-04-04: FHIR-I minutes create and approve `FHIR-36700` as Persuasive with Modification, 12-0-0.
- 2022-08-17: commit `44ed2366...` adds the Pattern Examples section to `source/elementdefinition-examples.html`.
- 2022-08-20: PR https://github.com/HL7/fhir/pull/2202 merges the pattern-example commit.
- 2022-08-31: commit `8592e120...` applies `FHIR-25431` datatype spelling cleanup.
- 2022-09-04: commit `870ff1ab...` removes the regex-page reference and fixes a typo.
- 2023-02-09: commit `e9e4e5f...` / PR https://github.com/HL7/fhir/pull/2617 adds JSON tabs/examples and introduces the current malformed JSON snippets.
- 2025-05-01: commit `a581075...` updates jQuery paths.
- 2025-10-31: commit `270e0ceb...` changes the header/status metadata for R6 normative template work.
- Publication boundary for this page comparison: R4 4.0.1 lacked the pattern examples; R6 ballot4 includes them.

## Evidence log

- Page boundary:
  - `test -f "$OLD_TREE/source/elementdefinition-examples.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/elementdefinition-examples.html" && echo "new exists"`
- Direct diff/history:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- "source/elementdefinition-examples.html"`
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- "source/elementdefinition-examples.html"`
  - `git -C "$NEW_TREE" --no-pager show --no-color --stat --patch <commit> -- "source/elementdefinition-examples.html"`
- Current-page read:
  - `wc -l "$NEW_TREE/source/elementdefinition-examples.html"` returned `362`.
  - `view` read `1-220` and `221-440`, covering the full file.
- Source cross-check:
  - `rg -n "pattern-examples|elementdefinition-examples|each occurrence of the element|If a pattern\\[x\\] is declared on a repeating element" "$NEW_TREE/source" --glob "*.html"`
  - `rg -n "lang\"\"|content\"\"|required elements are present, but on different repeats|This pattern fixes the value of the string" "$NEW_TREE/source/elementdefinition-examples.html"`
- Jira:
  - `bun run jira:search snapshot FHIR-36700`
  - `bun run jira:search snapshot FHIR-25431`
  - `bun run jira:search snapshot FHIR-19608`
  - `bun run jira:search snapshot FHIR-33316`
  - `bun run jira:search snapshot FHIR-28126`
  - `bun run jira:search snapshot FHIR-18296`
  - `bun run jira:search fts "\"constraint by example\"" --limit 10`
  - `bun run jira:search fts "\"any code element present SHALL have at least one coding\"" --limit 10`
  - `bun run jira:search fts "\"elementdefinition-examples\"" --limit 10`
  - Defect phrase searches for the malformed JSON/current examples found no useful Jira hits.
- Zulip:
  - Initial unquoted `bun run zulip:search fts FHIR-36700` failed because FTS parsed the hyphen; rerun as `bun run zulip:search fts "\"FHIR-36700\"" --limit 20`.
  - `bun run zulip:search snapshot conformance "pattern[x] on 0..* elements"`
  - `bun run zulip:search snapshot implementers "patternString Validation"`
  - `bun run zulip:search snapshot conformance "fixed/pattern on min = 0"`
  - SQL query retrieved message IDs `277789746`, `277794763`, `277796374`, and `327568623` for precise locators.
- Confluence:
  - `bun run confluence:search refs jira FHIR-36700`
  - `bun run confluence:search snapshot 94642520`
  - `bun run confluence:search snapshot 101358613`
  - `bun run confluence:search snapshot 66940491`
  - Searches for `FHIR-19608` and malformed JSON/current example phrases found no useful Confluence evidence.
- GitHub PR lookup:
  - `gh api -H "Accept: application/vnd.github+json" "/repos/HL7/fhir/commits/<sha>/pulls"` found associated PRs for key commits.
