# lifecycle research appendix

## Scope and coverage

- Page path: `source/lifecycle.html`.
- Old version: R4 4.0.1, source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version: R6 ballot4 6.0.0-ballot4, source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: `source/lifecycle.html` exists in both trees. The file is modified, not added/deleted/renamed.
- The newer page was read end-to-end: 234 lines.
- Source history between the two commits has 10 commits touching `source/lifecycle.html`.
- Explicit Jira keys found in commit subjects/patch context: `FHIR-32066`, `FHIR-19932`, `FHIR-31393`, `FHIR-22723`, `FHIR-32069`, `FHIR-38682`, `FHIR-32152`, `FHIR-44047`.
- Additional relevant Jira issues found by changed-phrase/context searches: `FHIR-32165`, `FHIR-39342`, `FHIR-47135`, `FHIR-50589`.
- Jira, Zulip, Confluence, git history, and GitHub PR metadata were searched. The strongest rationale for the R6 current-list removal is Confluence FHIR-I WGM 202509 minutes, not a Jira key in the implementation commit.
- Caveats: initial Zulip FTS searches for unquoted issue keys failed because hyphenated keys were parsed badly; quoted reruns found no key hits. Exact Jira/Zulip searches for `"lack of implementation experience"` and `"API Incubator" "current lists"` found no Jira/Zulip hits; Confluence did find a directly relevant WGM page.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New lifecycle page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:18-27` | R6 page header/status table: now Informative, no FMM cell |
| Source | New page intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:29-38` | Intro still describes "Current List" as retrieving current X lists |
| Source | Appointment link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:83-86` | Link text says `Appointment.status`, href points at `#Encounter.status` |
| Source | Current lists replacement | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:195-201` | R6 page replaces the current-list definitions with a removal note |
| Source | Entered-in-error guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:207-216` | Added general guidance that erroneous-data handling is business-process-specific |
| Source | Old current-list section | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/lifecycle.html:142-232` | R4 had explanatory text, example `_list=$current-allergies`, and named functional-list table |
| Related source | `_list` still says definitions are in lifecycle | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:6078-6082` | Current search page still says functional-list literals are defined by `lifecycle.html#current` |
| Related source | Search overview link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:4085-4090` | Still points to lifecycle for "functional list definitions" |
| Related source | `_list` example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:6136-6142` | Current example still uses `$current-allergies` |
| Related source | HTTP search parameter table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/http.html:2082-2088` | Still allows "current list references" |
| Related source | Resource `_list` SearchParameter | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource/bundle-Resource-search-params.xml:96-105` | Still describes "pre-defined functional lists" |
| Related source | List notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/list/list-notes.xml:14-15`, `:33-36` | List resource text still links to removed current-list content |
| Commit | HTML template | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical wrapper/template change |
| Commit/PR | FHIR-32066 | `a53c9b88dd3e7c5714d25d1b86f8ba65df3515c0`, https://github.com/HL7/fhir/pull/1960 | Fixed current allergy example text; later section removed |
| Commit/PR | FHIR-22723 bundled with others | `8df9b37980c9dd473e0ebf48bef9cce830725162`, https://github.com/HL7/fhir/pull/2227 | Applied lifecycle structure/hyperlink cleanup and broad formatting |
| Commit/PR | Entered-in-error paragraph | `e7b4eba11e0bf24c8b4452079cc80dff04c014c0`, https://github.com/HL7/fhir/pull/2243 | Commit subject is `FHIR-32069`, but page patch matches `FHIR-32165` resolution text |
| Commit/PR | DocumentManifest removal | `ea941737076615e7e2772299c80c63e1490f2e93`, https://github.com/HL7/fhir/pull/2555 | Removed DocumentManifest example row |
| Commit/PR | MedicationUsage rename | `b2032629f28b8d31b9a67b46170dde873398fb0d`, https://github.com/HL7/fhir/pull/2590 | Renamed MedicationUsage references to MedicationStatement |
| Commit/PR | FHIR-32152 | `fb56e0750c8530f97dc1c861248216fc6e310d79`, https://github.com/HL7/fhir/pull/2698 | Added Appointment.status to lifecycle examples |
| Commit/PR | R6 normative changes | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/pull/3901 | Changed page to Informative and removed current-list definitions |
| Commit/PR | FHIR-44047 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/pull/3951 | e.g. punctuation cleanup |
| Jira | `FHIR-32066` | https://jira.hl7.org/browse/FHIR-32066; reopen with `bun run jira:search snapshot FHIR-32066` | Corrected "Current Problem List" to "Current Allergy List" in old current-list example |
| Jira | `FHIR-22723` | https://jira.hl7.org/browse/FHIR-22723; `bun run jira:search snapshot FHIR-22723` | Requested lifecycle subsections become children and references become hyperlinks |
| Jira | `FHIR-32165` | https://jira.hl7.org/browse/FHIR-32165; `bun run jira:search snapshot FHIR-32165` | Formal rationale for entered-in-error guidance paragraph |
| Jira | `FHIR-32152` | https://jira.hl7.org/browse/FHIR-32152; `bun run jira:search snapshot FHIR-32152` | Formal intent to surface lifecycle for Encounter and Appointment |
| Jira | `FHIR-39342` | https://jira.hl7.org/browse/FHIR-39342; `bun run jira:search snapshot FHIR-39342` | Earlier decision said `_list` documentation should link to lifecycle where predefined lists are defined |
| Jira | `FHIR-47135` | https://jira.hl7.org/browse/FHIR-47135; `bun run jira:search snapshot FHIR-47135` | 2024 discussion defended current lists as filtered business-rule views |
| Jira | `FHIR-50589` | https://jira.hl7.org/browse/FHIR-50589; `bun run jira:search snapshot FHIR-50589` | Current open search-page issue about escaped `$current-allergies`; context-only for lifecycle |
| Zulip | Current lists clarification | https://chat.fhir.org/#narrow/stream/implementers/topic/Current%20Resource%20Lists%20clarifications; `bun run zulip:search snapshot implementers "Current Resource Lists clarifications"` | 2024 community thread says current-list logic was unclear and not fully interoperable |
| Confluence | FHIR-I WGM 202509 | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh; `bun run confluence:search snapshot 358879917` | Direct rationale for making page Informative and removing `$current` lists |
| Confluence | FHIR-I 2024-10-07 | https://confluence.hl7.org/spaces/FHIRI/pages/274270902/FHIR+Infrastructure+Minutes+CC+2024-10-07; `bun run confluence:search snapshot 274270902` | Minutes for `FHIR-47135` Not Persuasive decision |
| Confluence | FHIR-I 2024-09-16 | https://confluence.hl7.org/spaces/FHIRI/pages/265492373/FHIR+Infrastructure+Minutes+CC+2024-09-16; `bun run confluence:search snapshot 265492373` | Minutes recording concern about filtering "current" only by status |
| Confluence | PA May 2022 WGM | https://confluence.hl7.org/spaces/PA/pages/101358522/2022+May+WGM+-+Patient+Administration; `bun run confluence:search snapshot 101358522` | Vote evidence for `FHIR-32152` |
| Confluence | FHIR-I 2021-12-06 | https://confluence.hl7.org/spaces/FHIRI/pages/81013627/FHIR+Infrastructure+Minutes+CC+20211206; `bun run confluence:search snapshot 81013627` | Vote evidence for `FHIR-32165` |
| Confluence | FHIR-I 2023 WGM | https://confluence.hl7.org/spaces/FHIRI/pages/144983126/FHIR+Infrastructure+Minutes+WGM+202301+-+Henderson; `bun run confluence:search snapshot 144983126` | Vote evidence for `FHIR-39342` |

## Change summary

### Current Resource Lists removal - substantive/normative-status impact

R4 included a long "Current Resource Lists" section with:

- explanation of why current lists cannot be inferred from resource status alone,
- a REST `_list=$current-allergies` example,
- statements about List `$find`,
- a named table for `$current-problems`, `$current-medications`, `$current-allergies`, and `$current-drug-allergies`.

In R6 ballot4, the section is replaced by a two-sentence note saying the current-list section was removed for lack of implementation experience/feedback and may be reintroduced in the API Incubator. The same commit changes the page standards status from Trial Use/FMM 3 to Informative.

This is the most substantive change because the removed text was referenced by search/list/http/safety/resourceguide pages for `_list` functional-list semantics. Confluence FHIR-I WGM 202509 minutes provide the apparent rationale: "The only bit that has conformance is the resource list"; proposal to remove the content due to lack of use; "We will change the page to informative, remove the $current lists and replace with a note. We will also remove/move the $find operation." The lifecycle page implements the removal note, but several related pages still say functional-list literals are defined at `lifecycle.html#current`.

### Entered-in-error guidance - semantic guidance

R6 adds: "Handling of erroneous data is tightly tied to business processes and thus there are no generic rules..." before the entered-in-error table. The patch appears in commit `e7b4eba...` whose subject is `FHIR-32069`, but the wording exactly matches `FHIR-32165` resolution. Treat `FHIR-32165` as the page-specific rationale and `FHIR-32069` as commit-bundle context.

### Lifecycle structure and example list cleanup - editorial/metadata with one concrete defect

Commit `8df9b379...` applied broad HTML reformatting, changed lifecycle subsections under Resource Status from `h3` to `h4`, and hyperlinked example element names. This aligns with `FHIR-22723` ("2.2.2 - 2.2.5 to be children of 2.2.1" and references as hyperlinks). Later, `FHIR-32152` added `Appointment.status` as another Clinical Workflow Process example, matching the Jira resolution that Appointment aligns with the Clinical Workflow Process Life Cycle pattern. However, the added link target is `appointment-definitions.html#Encounter.status`, which appears to be a copy/paste error; the current source has `Appointment.status` anchors elsewhere.

### Resource-name/resource-list churn - mostly mechanical or cross-resource

- `DocumentManifest.status` was removed from the examples after DocumentManifest removal (`ea941737...`, PR #2555).
- `MedicationUsage` references were renamed back to `MedicationStatement` (`b2032629...`, `FHIR-38682`, PR #2590). This touched both the entity-availability example and the removed current-medications table; only the example remains in R6 ballot4.
- `FHIR-44047` changed `e.g.` punctuation in the proposed-state text. Editorial only.

### Template/status metadata - metadata/template/navigation

The page lost the old `div.col-12` wrapper in a template update, was reformatted, and in R6 changed from `colstu` Trial Use/FMM 3 to `colsi` Informative. The normative-status change is meaningful only in combination with the current-list removal; the rest is mechanical.

## Source history

| Commit | Date | Subject | PR | Page-specific interpretation |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | #1295 | Mechanical removal of wrapper `div`; no page-specific semantics |
| `a53c9b88dd3e7c5714d25d1b86f8ba65df3515c0` | 2022-05-14 | FHIR-32066 | #1960 | Corrected old `_list=$current-allergies` description from "Current Problem List" to "Current Allergy List"; later removed by R6 commit |
| `8df9b37980c9dd473e0ebf48bef9cce830725162` | 2022-08-23 | FHIR-19932 FHIR-31393 FHIR-22723 | #2227 | Large reformat; page-specific part is `FHIR-22723` section nesting and hyperlinks |
| `e7b4eba11e0bf24c8b4452079cc80dff04c014c0` | 2022-08-26 | FHIR-32069 Remove 'abstract' types from ResourceType code system | #2243 | Adds entered-in-error business-process paragraph; patch matches `FHIR-32165` rather than commit subject |
| `ea941737076615e7e2772299c80c63e1490f2e93` | 2023-01-23 | Remove DocumentManifest | #2555 | Removes `DocumentManifest.status` example |
| `b2032629f28b8d31b9a67b46170dde873398fb0d` | 2023-01-25 | FHIR-38682 | #2590 | Renames MedicationUsage to MedicationStatement in this page |
| `903d9ba642826ef3ebe20bd30e23825037024d2c` | 2023-01-30 | Merge the latest master changes into our branch. | included in #2590 | Merge conflict resolution combining DocumentManifest removal and MedicationStatement rename |
| `fb56e0750c8530f97dc1c861248216fc6e310d79` | 2023-02-20 | FHIR-32152 Surface "Life Cycles" more broadly | #2698 | Adds `Appointment.status` lifecycle example, but with wrong href anchor |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | #3901 | Changes lifecycle page to Informative and removes current-list definitions; no Jira key in subject/body |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | #3951 | Editorial punctuation: `e.g.` -> `e.g.,` |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-32066` (Published, Persuasive, R4, lifecycle page): corrected the `_list=$current-allergies` example wording from "Current Problem List" to "Current Allergy List". Applied by PR #1960. This evidence is historical only after the R6 current-list section removal.
- `FHIR-19932` and `FHIR-31393`: included in the same reformat commit as `FHIR-22723`, but their snapshots are about unrelated formats/extension context issues. Do not use them as lifecycle rationale.
- `FHIR-22723` (Published, Persuasive with Modification): requested the lifecycle subsections be children of Resource Status and cross-references be hyperlinks. This explains the `h3` -> `h4` and link-heavy rework.
- `FHIR-32069`: commit subject for the entered-in-error paragraph, but the Jira issue is about removing abstract ResourceType codes. It should be treated as commit-bundle context, not the rationale for the lifecycle text.
- `FHIR-38682`: explains MedicationUsage -> MedicationStatement rename.
- `FHIR-32152`: requested broader lifecycle visibility. Resolution says Encounter and Appointment should reference lifecycle and that the lifecycle page's `Encounter.status` list was no longer accurate; this explains adding `Appointment.status`.
- `FHIR-44047`: broad e.g./i.e. punctuation cleanup, editorial only.

### Other Jira issues that plausibly explain changed text

- `FHIR-32165` is the strongest explanation for the entered-in-error added paragraph. Its resolution says to add the exact sentence now present in R6: handling erroneous data is tied to business processes and IGs may add guidance.
- `FHIR-39342` is important context for the current-list removal mismatch. It resolved that `_list` search documentation should link to `lifecycle.html#current` where predefined lists are defined. R6 removed those definitions but the search-page links remain.
- `FHIR-47135` is later context. In 2024 FHIR-I rejected a request to say List is not the only way to get current information, explaining that `$current` lists retrieve a filtered view that cannot be achieved by status alone. This was before the 2025 WGM removal decision.
- `FHIR-50589` is open/Triaged and relates to `search.html`, not `lifecycle.html`: the current `_list` example in search escapes `$current-allergies` and the reporter notes it disagreed with the lifecycle example in ballot3. Context-only for this page review.

### Context-only Jira hits that should not drive action

- `FHIR-11271` and `FHIR-7551` appeared in broad "Current Resource Lists" searches but are older historical context.
- `FHIR-47134` appeared in `_list/current-allergies` search results and was discussed near `FHIR-47135`, but it is not necessary to explain the lifecycle page diff.
- `FHIR-50589` should not be included as a lifecycle action by itself because it targets `search.html`; it is useful only as evidence that related `_list` text is still being actively reviewed.

## Zulip evidence

- Quoted FTS searches for `FHIR-32066`, `FHIR-32152`, `FHIR-32165`, `FHIR-39342`, `FHIR-47135`, and `FHIR-50589` returned no hits.
- Exact phrase searches for `"lack of implementation experience"` and `"API Incubator" "current lists"` returned no hits.
- `bun run zulip:search fts "\"Current Resource Lists\"" --limit 10` found `#implementers > Current Resource Lists clarifications`.
- Snapshot command: `bun run zulip:search snapshot implementers "Current Resource Lists clarifications"`.
  - URL: https://chat.fhir.org/#narrow/stream/implementers/topic/Current%20Resource%20Lists%20clarifications
  - Date range: 2024-09-09 to 2024-09-12.
  - Paul Lomayesva said Current Resource Lists/functional lists were unclear and asked what ties a functional list to a Patient, how LOINC codes should be used, and what `$find` should do with multiple matches.
  - Grahame Grieve answered that the possible LOINC codes in the spec are for document sections, "very much not an indication of 'current' resource," and later said "we have not made the logic for determination of 'current' interoperable, it's up to you. $find is to make locating the current list interoperable, that's the best we could aim for."
  - This thread does not prove the R6 change, but it supports the later conclusion that current lists lacked robust implementation/interoperability definition.
- `#implementers > Appointment Statuses workflow` was snapshotted after a phrase hit for `Appointment.status lifecycle`; it discusses appointment status business rules, not the broken link on lifecycle.html. Background only.

## Confluence evidence

- `358879917` FHIR Infrastructure Minutes WGM 202509 - Pittsburgh is the key source for the R6 current-list removal.
  - Snapshot command: `bun run confluence:search snapshot 358879917`.
  - It references `https://build.fhir.org/lifecycle.html` and `https://build.fhir.org/lifecycle.html#current`.
  - Relevant text: Gino noted the page has "shoulds and mays" and should be reframed/marked Informative; Lloyd said the only conformance bit is the resource list; Grahame proposed removing the content and adding a note to balloters that it is removed due to lack of use and can be brought back in an IG; minutes conclude: "We will change the page to informative, remove the $current lists and replace with a note. We will also remove/move the $find operation."
- `274270902` FHIR Infrastructure Minutes CC 2024-10-07 records `FHIR-47135` as Not Persuasive, with a note that discussion could continue if the reporter disagreed.
- `265492373` FHIR Infrastructure Minutes CC 2024-09-16 records the setup for `FHIR-47135`: filtering current information only by status is inadequate; ask reporter to join FHIR-I.
- `101358522` PA 2022 May WGM records `FHIR-32152` as Persuasive with Modification, 11-0-0, and says secondary mentions of other resources should be logged to other workgroups.
- `81013627` FHIR Infrastructure Minutes CC 20211206 records `FHIR-32165`, including "Recommend using IGs for documenting other use case actions" and Persuasive with Modification.
- `144983126` FHIR Infrastructure Minutes WGM 202301 records `FHIR-39342` as Persuasive, 11-0-5.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-06-20 | Jira created | `FHIR-22723` lifecycle page structure improvement |
| 2019-11-04 | Jira resolution/vote | `FHIR-22723` Persuasive with Modification, 8-0-0 |
| 2021-05-03 | Jira created | `FHIR-32066` current-allergies example correction |
| 2021-05-06 | Jira created | `FHIR-32152` lifecycle visibility for Encounter/Appointment |
| 2021-05-07 | Jira created | `FHIR-32165` entered-in-error summary |
| 2021-12-06 | Jira/Confluence vote | `FHIR-32165` Persuasive with Modification; FHIR-I minutes page `81013627` |
| 2022-05-10 | Jira vote | `FHIR-32152` Persuasive with Modification |
| 2022-05-14/15 | Source/PR | `a53c9b...` in PR #1960 applies `FHIR-32066` |
| 2022-08-23/24 | Source/PR | `8df9b379...` in PR #2227 applies lifecycle structure/link rework |
| 2022-08-26 | Source/PR | `e7b4eba...` in PR #2243 adds entered-in-error guidance paragraph |
| 2023-01-19 | Jira/Confluence vote | `FHIR-39342` Persuasive; FHIR-I WGM page `144983126` |
| 2023-01-23 | Source/PR | `ea941737...` in PR #2555 removes DocumentManifest row |
| 2023-02-02 | PR merge | PR #2590 with `FHIR-38682` MedicationStatement rename merged |
| 2023-02-20 | Source/PR | `fb56e075...` in PR #2698 adds Appointment.status example |
| 2024-09-09 to 2024-09-12 | Zulip discussion | Implementers thread says current-list logic is unclear/not fully interoperable |
| 2024-09-16/2024-10-07 | Confluence/Jira | FHIR-I discusses and rejects `FHIR-47135`; current-list behavior still treated as real page content at that time |
| 2025-09 WGM | Confluence decision | Page to become Informative; remove `$current` lists; remove/move `$find` |
| 2025-10-31 | Source commit | `270e0ceb...` removes lifecycle current-list content and changes page to Informative |
| 2025-11-02 | PR merge | PR #3901 merged |
| 2025-11-03/06 | Source/PR | `887bc238...` in PR #3951 applies `FHIR-44047` punctuation |

## Evidence log

- `test -f .../source/lifecycle.html`: old and new files both exist.
- `wc -l .../source/lifecycle.html`: new page has 234 lines and was read in full.
- `git -C <newtree> diff --find-renames 0da2a0... 5d67a34... -- source/lifecycle.html`: established direct R4->R6 changes.
- `git -C <newtree> log --reverse --date=short --format=... 0da2a0.....5d67a34... -- source/lifecycle.html`: found 10 page-touching commits.
- `git show --stat --patch <commit> -- source/lifecycle.html`: inspected each page-touching commit.
- `gh api repos/HL7/fhir/commits/<sha>/pulls`: associated page commits with PRs #1295, #1960, #2227, #2243, #2555, #2590, #2698, #3901, #3951.
- `gh pr view <pr> --repo HL7/fhir --json ...`: checked PR titles, bodies, commits, and merge dates. PR #3901 did not identify a lifecycle-specific Jira key.
- `bun run jira:search snapshot FHIR-32066 FHIR-19932 FHIR-31393 FHIR-22723 FHIR-32069 FHIR-38682 FHIR-32152 FHIR-44047`: read explicit commit-key snapshots.
- `bun run jira:search fts "\"Handling of erroneous data is tightly tied\"" --limit 10`: found `FHIR-32165`.
- `bun run jira:search fts "\"Current Resource Lists\""`, `"current-allergies"`, `"Current Allergy List"`, `"source/lifecycle.html"`: found current-list context and confirmed no source-path hit.
- `bun run jira:search snapshot FHIR-32165 FHIR-39342 FHIR-47135 FHIR-50589`: read directly relevant additional/context issues.
- `bun run zulip:search fts "\"FHIR-32152\"" --limit 10` and similar quoted key searches: no Zulip key hits. Initial unquoted key searches failed because FTS parsed hyphenated keys as operators; this was corrected by quoted reruns.
- `bun run zulip:search fts "\"Current Resource Lists\"" --limit 10`: found the 2024 implementers thread, then `bun run zulip:search snapshot implementers "Current Resource Lists clarifications"` captured it.
- `bun run confluence:search refs jira <key>` and `bun run confluence:search fts <key>` for `FHIR-32066`, `FHIR-32152`, `FHIR-32165`, `FHIR-39342`, `FHIR-47135`, `FHIR-50589`: found relevant minutes for all but `FHIR-32066` and `FHIR-50589`.
- `bun run confluence:search fts "\"API Incubator\" \"current lists\"" --limit 10`: found FHIR-I WGM 202509 page `358879917`, the strongest source for the current-list removal decision.
- `rg -n "lifecycle.html#current|functional lists|current-allergies|current-medications|current-problems|current-drug-allergies" <new source>`: found remaining dependent references after lifecycle removal.
