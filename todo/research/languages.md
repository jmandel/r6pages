# languages research appendix

## Scope and coverage

- Page: `source/languages.html`.
- Old version/tree: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/tree: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: `source/languages.html` exists in both trees; direct diff status is modified, not added/deleted/renamed.
- The newer page was read end-to-end (`284` lines); the older page was also read end-to-end (`279` lines).
- Source history found 15 commits touching this page between the two commits. Explicit Jira keys in commit subjects: `FHIR-22695`, `FHIR-22693`, `FHIR-25431`, `FHIR-41627`, `FHIR-44047`.
- Jira searches/snapshots covered the explicit keys plus `FHIR-37991`, `FHIR-19960`, `FHIR-51614`, and distinctive changed phrases such as `preferredForLanguage`, `hl7TermMaintInfra`, `choice of locale`, `no longer an appropriate basis for making updates`, and `multi-language glossary`.
- Zulip searches covered explicit Jira keys, changed phrases, and terminology topics. Unquoted `FHIR-xxxxx` Zulip FTS searches failed because FTS parsed the hyphen; quoted key searches were rerun.
- Confluence refs/FTS searches covered the explicit Jira keys plus terminology guidance terms. Confluence provided formal minutes for `FHIR-41627`, status/triage context for `FHIR-37991`, and later agenda tracking for `FHIR-51614`.
- Caveat: no PR numbers were discovered in the inspected commit metadata or community snapshots. The `preferredForLanguage` source change is in an `Auto stash before merge` commit without a Jira key, but a contemporaneous Zulip thread explicitly says the source was switched from `designation-usage#display` to `hl7TermMaintInfra#preferredForLanguage`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source file | Older R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/languages.html` | Baseline page, 279 lines |
| Source file | Newer R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html` | Current reviewed page, 284 lines |
| Source lines | Multi-language resource/glossary text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html:63-81` | New glossary and generated multi-language resource list |
| Source lines | Narrative language/locale guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html:83-111` | Contains `Accept-Language` locale `MAY` statement from `FHIR-22693` |
| Source lines | CodeSystem/ValueSet designation example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html:139-172` | Example now uses `hl7TermMaintInfra#preferredForLanguage`; current guidance gap is here |
| Source lines | HTTP language response/update guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html:204-239` | New translated-resource update guidance from `FHIR-41627` |
| Commit | `f12cbe36661085046c474860129f42357b7e4a16` | https://github.com/HL7/fhir/commit/f12cbe36661085046c474860129f42357b7e4a16 | Applies `FHIR-22695`; removes obsolete narrative-warning paragraph |
| Commit | `db9b233cd7a1a0059f4e30f581456e27d34b5a36` | https://github.com/HL7/fhir/commit/db9b233cd7a1a0059f4e30f581456e27d34b5a36 | Applies `FHIR-22693`; adds locale syntax guidance |
| Commit | `cd60623d614d8257ec769594687ce0587b385870` | https://github.com/HL7/fhir/commit/cd60623d614d8257ec769594687ce0587b385870 | Switches designation example to `preferredForLanguage` |
| Commit | `906b6f4238b4d7bede6badc3398e438df3a483d3` | https://github.com/HL7/fhir/commit/906b6f4238b4d7bede6badc3398e438df3a483d3 | Applies `FHIR-41627`; adds translated-resource update guidance |
| Jira | `FHIR-22695` | https://jira.hl7.org/browse/FHIR-22695 / `bun run jira:search snapshot FHIR-22695` | Rationale for removing obsolete narrative limitation |
| Jira | `FHIR-22693` | https://jira.hl7.org/browse/FHIR-22693 / `bun run jira:search snapshot FHIR-22693` | Rationale for `Accept-Language` locale syntax guidance |
| Jira | `FHIR-41627` | https://jira.hl7.org/browse/FHIR-41627 / `bun run jira:search snapshot FHIR-41627` | Formal rationale for not calling translated resources `SUBSETTED` and adding update guidance |
| Jira | `FHIR-37991` | https://jira.hl7.org/browse/FHIR-37991 / `bun run jira:search snapshot FHIR-37991` | Identifies old `designation-usage#display` example and asks for forward/backward guidance |
| Jira | `FHIR-51614` | https://jira.hl7.org/browse/FHIR-51614 / `bun run jira:search snapshot FHIR-51614` | Later unresolved issue asking for clearer translation-designation guidance |
| Zulip | `#terminology > CodeSystem designation-use` | `bun run zulip:search snapshot terminology "CodeSystem designation-use"` / https://chat.fhir.org/#narrow/stream/terminology/topic/CodeSystem%20designation-use | Explicitly says source was switched to `hl7TermMaintInfra#preferredForLanguage`; also shows legacy-code-system uncertainty |
| Zulip | `#terminology > Better guidance for translating codesystems` | `bun run zulip:search snapshot terminology "Better guidance for translating codesystems"` / https://chat.fhir.org/#narrow/stream/terminology/topic/Better%20guidance%20for%20translating%20codesystems | Rationale for `FHIR-51614`; CodeSystem vs ValueSet designation guidance gap |
| Zulip | `#IG creation > ✔ Translating 3rd party codesystems` | `bun run zulip:search snapshot "IG creation" "✔ Translating 3rd party codesystems"` / https://chat.fhir.org/#narrow/stream/IG%20creation/topic/%E2%9C%94%20Translating%203rd%20party%20codesystems | Original discussion behind `FHIR-51614` |
| Confluence | FHIR-I minutes 2023-12-11 | https://confluence.hl7.org/spaces/FHIRI/pages/210077405/FHIR+Infrastructure+Minutes+CC+2023-12-11 / `bun run confluence:search snapshot 210077405` | Records `FHIR-41627` persuasive-with-modification vote, 6-0-0 |
| Confluence | VOC tracker 2023-07-24 | https://confluence.hl7.org/spaces/VOC/pages/175616456/Tracker+Issues+2023-07-24+Agenda+and+Minutes / `bun run confluence:search snapshot 175616456` | Records `FHIR-37991` was sent to FHIR-I |
| Confluence | VOC agenda 2025-12-15 | https://confluence.hl7.org/spaces/VOC/pages/413241449/2025-12-15+Agenda+and+Minutes / `bun run confluence:search snapshot 413241449` | Later agenda tracking for `FHIR-51614` |

## Change summary

- **Metadata/template/navigation (mechanical/noise):** removed obsolete wrapping `<div class="col-12">`; changed header table from WG/FMM/status to `Responsible Owner` + standards status; removed maturity cell; fixed named anchors from `name="#..."` to `name="..."`; updated extension links to use `[%extensions-location%]`; removed stray `<li>` before the Names section.
- **Narrative translation support (semantic guidance, non-substantive correction):** removed the R4 paragraph saying there was no way to provide multiple translations for resource narrative. `FHIR-22695` says this was obsolete because the Narrative page now describes multi-language narrative handling. Current `source/narrative.html:169-187` confirms multi-language narrative support.
- **Specification translation references (metadata/link/editorial):** Japanese translation URL changed from `sites.google.com/site/fhirjp` to `https://std.jpfhir.jp/`; `e.g.` punctuation fixed via `FHIR-44047`; a multi-language glossary link and generated list of terminology resources with multiple language displays were added.
- **Language tag/locale behavior (semantic guidance with normative keyword):** `FHIR-22693` added: `the choice of locale from the "Accept-language" headers MAY change syntax of resource narrative (e.g., date formats, number formats)` at current lines 109-111.
- **Translation extension and translatable extension links (metadata/link):** extension references changed from local `extension-*.html` pages to `[%extensions-location%]StructureDefinition-*.html`.
- **CodeSystem/ValueSet designation example (example/semantic guidance):** the Chinese designation example changed from `http://terminology.hl7.org/CodeSystem/designation-usage#display` to `http://terminology.hl7.org/CodeSystem/hl7TermMaintInfra#preferredForLanguage`. This change is in `cd60623d...`; no Jira key is in the commit, but `FHIR-37991` and the Zulip `CodeSystem designation-use` thread explain the old CodeSystem was missing from later THO and the new code was preferred.
- **ElementDefinition terminology/editorial:** `data types` changed to `datatypes` (`FHIR-25431`); a missing closing parenthesis in the markdown link phrase was fixed; these are editorial/rendering cleanups.
- **Translated HTTP response update guidance (semantic guidance):** `FHIR-41627` added guidance that a resource whose primary text language was changed for a request may not be a safe update base, suggesting either withholding eTags/enforcing version-specific updates or tagging the resource with `TRSLT`. This matches the Jira resolution and the FHIR-I vote record.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes wrapper div around page content | mechanical/template |
| `f12cbe36661085046c474860129f42357b7e4a16` | 2022-03-17 | `Apply FHIR-22695` | Removes obsolete statement that resource narrative cannot have multiple translations | semantic guidance, non-substantive correction |
| `0684c64b51ea94d2188161d93428ca9c40b567a4` | 2022-07-26 | `Fix typos in multi-language narrative guidance` | `ia/chosend` -> `is/chosen` | editorial |
| `db9b233cd7a1a0059f4e30f581456e27d34b5a36` | 2022-08-21 | `FHIR-22693 Clarify locale behavior for the language tag` | Adds locale/`Accept-Language` syntax guidance | substantive/semantic guidance |
| `0d58d10e724397da66de18b51936bc3c2702e4f7` | 2022-08-31 | `typos` | Fixes internal anchors from `#spec`-style names to `spec`-style names | rendering/navigation |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | `data types` -> `datatypes` | editorial |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Adds multi-language glossary link and generated multi-language resources list | semantic guidance/metadata |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | `fix extension links` | Updates three extension links to `[%extensions-location%]StructureDefinition-...` | link/template |
| `4affa73dc4ce9ddf63f6654e9a6e558e02c76ad7` | 2024-05-21 | `Move Japanese translation` | Updates Japanese translation URL | link/editorial |
| `8fc3f6ff0bb87f5b9261766c7b7beb3ebadcd43b` | 2025-02-12 | `Fix missing closing bracket in languages.html` | Fixes missing `)` in markdown properties sentence | editorial/rendering |
| `cd60623d614d8257ec769594687ce0587b385870` | 2025-08-23 | `Auto stash before merge of "master" and "origin/master"` | Switches designation example from `designation-usage#display` to `hl7TermMaintInfra#preferredForLanguage` | example/semantic guidance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Header table changes to `Responsible Owner`; removes maturity cell | metadata/template |
| `906b6f4238b4d7bede6badc3398e438df3a483d3` | 2025-11-03 | `FHIR-41627 Declaration of SUBSETTED resources for language` | Adds translated-resource update/eTag/TRSLT guidance and removes stray list item | semantic guidance |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | `e.g.` -> `e.g.,` | editorial |
| `32ee662cd81e588351a75de377307f9c4a5c1564` | 2025-11-04 | `Merge branch 'master' into i.e.-e.g-` | Merge carries both `FHIR-41627` paragraph and `FHIR-44047` punctuation into the final file | merge/mechanical |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-22695` (`Published`, persuasive, non-substantive correction, applied for R5) asks to remove/update the language-page statement: "At this time, there is no way to provide multiple translations for the resource narrative itself..." because Narrative now describes the scenario. The source removal in `f12cbe3666...` matches the resolution. Jira comment says fixed in `fd43c185...`; the path history in this materialized tree shows equivalent page change as `f12cbe3666...`.
- `FHIR-22693` (`Published`, persuasive, compatible substantive enhancement, applied for R5) asks the language page to clarify that the locale part of language headers can affect dates, numbers, and display syntax. The resolution text exactly matches the added sentence in current lines 109-111.
- `FHIR-25431` (`Published`, technical correction, applied for R5) asks for consistent `datatype` vs `data type`; page change is editorial only.
- `FHIR-41627` (`Applied`, persuasive with modification, applied for R6) asks whether language-filtered resources should be marked `SUBSETTED`. Resolution says translated resources are not necessarily subsetted but may not be source-of-truth for updates, and proposes the eTag/version-specific update/TRSLT guidance. Current lines 230-239 match this resolution with only minor pronoun wording.
- `FHIR-44047` (`Resolved - change required`, persuasive, R6 ballot) asks for `e.g.,` and `i.e.,` punctuation cleanup throughout the specification; page change is editorial only.

### Other Jira issues that plausibly explain changed text

- `FHIR-37991` (`Triaged`, unresolved, related URL `build.fhir.org/languages.html##term`) specifically identified the old `languages.html` example using `designation-usage#display`, noted that `designation-usage` was absent from later THO, and said it appeared superseded by `hl7TermMaintInfra#preferredForLanguage`. It also asked for a statement about `display` and backward compatibility if the spec switched to the new code. The source now has the switch, but the page does not include backward-compatibility guidance.
- `FHIR-19960` (`Published`, vocab) is background for the `preferredForLanguage` code. A 2020 comment says `consumer` and `preferredForLanguage` were in `hl7TermMaintInfra` and intended for the FHIR designation-use value set. This supports why `preferredForLanguage` is a real term, but it is not page-specific.
- `FHIR-51614` (`Triaged`, unresolved, R6 ballot, vocab) raises a later guidance gap: the CodeSystem and ValueSet designation narratives are too similar even though translations of third-party code systems should generally use CodeSystem supplements, not ValueSet designations. A comment specifically says guidance should point readers to `hl7TermMaintInfra#preferredForLanguage`. This is current and actionable for the `languages.html` CodeSystem/ValueSet translation section.

### Context-only or non-driving hits

- `FHIR-36651` appeared in `preferredForLanguage`/`hl7TermMaintInfra` FTS results but concerns terminology search filters, not this page's language guidance.
- `multi-language glossary` and `multi-language-resources` Jira FTS searches returned no results.

## Zulip evidence

- Quoted explicit key searches:
  - `"FHIR-22695"`: no results.
  - `"FHIR-22693"`: no results.
  - `"FHIR-41627"`: no results.
  - `"FHIR-37991"`: one result in `#terminology > CodeSystem designation-use`.
  - `"FHIR-51614"`: one result in `#terminology > Better guidance for translating codesystems`.
- `#terminology > CodeSystem designation-use` (snapshot command above) is the clearest rationale for the designation example change. On 2025-08-18/19, participants discussed the missing/old `designation-usage` CodeSystem; Michael Lawley pointed to `FHIR-37991` and `hl7TermMaintInfra#preferredForLanguage`; Grahame Grieve then wrote: "ok, i just switched all my source to use http://terminology.hl7.org/CodeSystem/hl7TermMaintInfra#preferredForLanguage in preference to http://terminology.hl7.org/CodeSystem/designation-usage#display." This matches commit `cd60623d...`.
- `#terminology > Better guidance for translating codesystems` records Vadim Peretokin's 2025-07-31 concern that CodeSystem and ValueSet designation guidance is too similar, while the correct modeling for translating third-party code systems should usually be CodeSystem supplements, not ValueSet designations. Grahame encouraged filing a ticket; Vadim linked `FHIR-51614` on 2025-08-01.
- `#IG creation > ✔ Translating 3rd party codesystems` is the earlier practical discussion behind `FHIR-51614`. Grahame said "supplements" and clarified that ValueSets can assign a different display in the context of expansion, but not otherwise.
- Exact phrase searches for `no longer an appropriate basis for making updates`, `choice of locale` + `Accept-language`, and `multi-language glossary` found no Zulip results.

## Confluence evidence

- `FHIR-41627`: `bun run confluence:search refs jira FHIR-41627` found FHIR-I minutes page `210077405`, `FHIR Infrastructure Minutes CC 2023-12-11`. Snapshot records `jira:FHIR-41627 Persuasive with Mod Motion: Marten Smits/Rick Geimer: 6-0-0`.
- `FHIR-37991`: `bun run confluence:search refs jira FHIR-37991` found multiple VOC tracker agenda/minutes pages. The most recent 2023-07-24 page `175616456` says `FHIR-37991 ... Reference to old CodeSystem? ... Sent to FHIR-I`.
- `FHIR-51614`: `bun run confluence:search refs jira FHIR-51614` found later VOC agenda/minutes pages from late 2025 through 2026. Snapshot `413241449`/search snippets show it tracked as `TEXTONLY Better guidance for translating codes - differences between guidance for value set and code system`; later pages indicate ongoing/off-cycle work, not a completed applied resolution in the current page.
- `FHIR-44047`: `bun run confluence:search refs jira FHIR-44047` found FHIR-I WGM May 2024 minutes page `234784975`, with a block of tickets marked "will fix"; this supports the punctuation-only change.
- No Confluence refs/FTS results were found for `FHIR-22695` or `FHIR-22693` in the local snapshot, despite `FHIR-22695` Jira comments linking to older FHIR-I bulk-data minutes.

## Timeline

- 2019-05-28: `FHIR-22695` bulk vote recorded in Jira comment; later status cleanup noted.
- 2019-07-29: `FHIR-22695` resolved persuasive; applied for R5.
- 2019-08-19: `FHIR-22693` resolved persuasive; vote 7-0-0; applied for R5.
- 2021-06-27: template wrapper div removed from page (`d7b8dad...`).
- 2022-03-17: obsolete narrative limitation removed from source (`f12cbe3666...`, `FHIR-22695`).
- 2022-08-21: locale/`Accept-Language` guidance added (`db9b233c...`, `FHIR-22693`).
- 2022-08-31: anchors fixed and `datatype` wording cleaned up (`0d58d10e...`, `8592e120...`).
- 2022-09-05: glossary and generated multi-language resources list added (`c3da43d...`).
- 2023-02-08: extension links fixed (`b3e3733...`).
- 2023-07-24: VOC minutes say `FHIR-37991` was sent to FHIR-I.
- 2023-12-11: FHIR-I voted `FHIR-41627` persuasive with modification, 6-0-0.
- 2024-05-21: Japanese translation link moved (`4affa73d...`).
- 2025-02-12: missing bracket/parenthesis fixed (`8fc3f6f...`).
- 2025-08-01: `FHIR-51614` filed after Zulip translation-guidance discussion.
- 2025-08-19/23: Zulip says source switched to `hl7TermMaintInfra#preferredForLanguage`; commit `cd60623d...` changes this page.
- 2025-10-31 to 2025-11-04: R6 header/status template changes, `FHIR-41627` applied, `FHIR-44047` punctuation merged.
- 2025-12 through 2026-05: VOC Confluence agendas continue tracking `FHIR-51614`; no applied page change was found by the R6 ballot4 source boundary.

## Evidence log

- Boundary/diff/history:
  - `test -f "$OLD/source/languages.html"` and `test -f "$NEW/source/languages.html"` returned `old exists` and `new exists`.
  - `wc -l` returned `279` old lines and `284` new lines.
  - `git -C "$NEW" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/languages.html` established the direct page diff.
  - `git -C "$NEW" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/languages.html` found 15 page-touching commits.
  - `git show --stat --patch` was run for each page-touching commit; `git log -S preferredForLanguage -- source/languages.html` isolated `cd60623d...`.
- Page/current-context reads:
  - New `source/languages.html` read in full: lines `1-220` and `221-284`.
  - Old `source/languages.html` read in full: lines `1-279`.
  - `source/narrative.html:169-187` was checked to confirm current narrative multi-language support.
  - `source/updates.html:160-190` and `source/http.html:660-685,760-785` were spot-checked for related SUBSETTED/eTag update guidance; no direct contradiction with the new language-page text was found.
- Jira:
  - Snapshots: `FHIR-22695`, `FHIR-22693`, `FHIR-25431`, `FHIR-41627`, `FHIR-44047`, `FHIR-37991`, `FHIR-19960`, `FHIR-51614`, `FHIR-36651`.
  - FTS searches included `"preferredForLanguage"`, `"hl7TermMaintInfra"`, `"choice of locale" "Accept-language"`, `"no longer an appropriate basis for making updates"`, `"multi-language glossary"`, `"multi-language-resources"`, `"languages.html" "preferredForLanguage"`, and related translation/designation queries.
- Zulip:
  - Initial unquoted `FHIR-xxxxx` searches failed with `SQLiteError: no such column` because FTS parsed the hyphen; quoted searches were rerun and are the evidence source.
  - Snapshots: `terminology "CodeSystem designation-use"`, `terminology "Better guidance for translating codesystems"`, and `"IG creation" "✔ Translating 3rd party codesystems"`.
  - No results for exact update-guidance phrase, `choice of locale` + `Accept-language`, or `multi-language glossary`.
- Confluence:
  - `refs jira` run for `FHIR-22695`, `FHIR-22693`, `FHIR-41627`, `FHIR-37991`, `FHIR-51614`, `FHIR-44047`.
  - FTS run for the same keys plus `"preferredForLanguage"`, `"Declaration of SUBSETTED resources for language"`, and `"Correct language about multi-language narrative support"`.
  - Snapshots: `210077405`, `175616456`, `413241449`, `453915321`, `234784975`.
