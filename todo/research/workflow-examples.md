# workflow-examples research appendix

## Scope and coverage

- Page path: `source/workflow-examples.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: confirmed present in both trees:
  - `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/workflow-examples.html`
  - `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html`
- Newer page read end-to-end: yes, 82 lines, source lines 1-83.
- Commit count touching this page between the two source commits: 4.
- Explicit Jira keys in page diffs/commit messages: none. Jira key found from related PR metadata: `FHIR-45287`.
- Jira/Zulip/Confluence searches performed: exact changed phrases, `FHIR-45287`, and workflow/example topic terms. No relevant Zulip thread was found.
- Caveat: `FHIR-45287` is still `Triaged`/unresolved in the local Jira snapshot even though PR #3553 containing the page changes was merged. There are no Jira comments on the issue, so formal disposition details are limited.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 placeholder | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/workflow-examples.html:18-36` | R4 page only had the tab scaffold and "Future home for examples" |
| Source | New R6 scenarios | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:33-78` | Added Option F/G/I narrative scenarios and Option H heading |
| Source | Empty Option H section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:61-63` | Current page displays an Option H heading with no scenario text |
| Source | Option G wording defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:50-57` | Contains "Once the medication is picked up is fulfilled" |
| Source | Option I wording defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:68-77` | Contains "the cardiologist document the findings" |
| Related source | Management page links to examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html:94-96`, `:152-154`, `:242-244` | Cross-page text says the examples tab includes "example instances" |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes wrapper div; mechanical/template only for this page |
| Commit | Initial workflow examples | `86c92a8842624a25700fdcee18308d8971c039d2`; https://github.com/HL7/fhir/commit/86c92a8842624a25700fdcee18308d8971c039d2 | Replaces placeholder with Option F/G/I narrative scenarios |
| Commit | Updates from calls | `70e67c6d2dc76bdd232f94e9e062ce4f6b34df16`; https://github.com/HL7/fhir/commit/70e67c6d2dc76bdd232f94e9e062ce4f6b34df16 | Revises Option F/G text and adds blank Option H heading |
| Commit | R6 status metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page status table from Trial Use/FMM to Informative |
| PR | Workflow updates | https://github.com/HL7/fhir/pull/3553 | Contains commits `86c92a8` and `70e67c6`; body references `FHIR-45287` |
| PR | 2025 11 gg normative | https://github.com/HL7/fhir/pull/3901 | Contains status-table commit `270e0ce`; broad normative/status change |
| PR | HTML template | https://github.com/HL7/fhir/pull/1295 | Contains template commit `d7b8dad` |
| Jira | `FHIR-45287` | https://jira.hl7.org/browse/FHIR-45287; reopen with `bun run jira:search snapshot FHIR-45287` | "Clean up TODO, TBD, ???, and empty sections"; plausible tracker for PR #3553 |
| Jira | `FHIR-15702` | https://jira.hl7.org/browse/FHIR-15702; reopen with `bun run jira:search snapshot FHIR-15702` | Context-only old title typo issue for Option G wording; not a driver for this R4 -> R6 page change |
| Confluence | Workflow Pattern Examples | https://confluence.hl7.org/spaces/FHIRI/pages/234784905/Workflow+Pattern+Examples; `bun run confluence:search snapshot 234784905` | Project page for real-world workflow pattern examples; snapshot still shows TODOs for all patterns |
| Confluence minutes | FHIR Workflow Minutes CC 20240415 | https://confluence.hl7.org/spaces/FHIRI/pages/234784839/FHIR+Workflow+Minutes+CC+20240415; `bun run confluence:search snapshot 234784839` | FHIR-I worked on workflow pages to address TODO/TBD/??? and incomplete sections |
| Confluence minutes | FHIR Workflow Minutes CC 20240422 | https://confluence.hl7.org/spaces/FHIRI/pages/239206707/FHIR+Workflow+Minutes+CC+20240422; `bun run confluence:search snapshot 239206707` | Decision to move scenarios to examples tab; worked on `optionF-ex1` |
| Confluence minutes | OO FHIR COW/FOE 2024-10-25 | https://confluence.hl7.org/spaces/OO/pages/281219307/2024-10-25+OO+FHIR+COW+FOE; `bun run confluence:search snapshot 281219307` | Later OO discussion references the FHIR-I workflow pattern examples as generic background |

## Change summary

- **Example change:** R4 had only `<p><i>Future home for examples</i></p>`; R6 adds narrative scenarios for:
  - Option F, "Creation of Task on placer's system" / lab order to known performer (`workflow-examples.html:33-44`)
  - Option G, "POST of Task to fulfiller's system" / outpatient prescription (`workflow-examples.html:46-58`)
  - Option I, "POST of Task to fulfiller's system, followed by POST of sub-Task on placer's system" / outpatient referral (`workflow-examples.html:64-78`)
- **Editorial/reader-facing defect:** Option H was added as a heading only (`workflow-examples.html:61-63`), leaving an empty section on the current page. This is notable because the tracked cleanup issue and minutes explicitly mention empty sections.
- **Editorial/reader-facing defect:** The new Option G and Option I text contains concrete grammar defects at `workflow-examples.html:55` and `:76`.
- **Related cross-page editorial mismatch:** The management page links to the examples tab "including example instances" for F/G/I, but the target page contains narrative text only, with no visible resource-instance links or example files found by `rg/glob`.
- **Metadata/template/navigation:** `d7b8dad` removes the old wrapper `<div class="col-12">`; `270e0ce` changes the page status table from Trial Use with FMM 2 to Informative and removes the FMM cell. These look like broad template/status changes, not page-specific workflow semantics.
- **Substantive/normative:** No new SHALL/SHOULD/MAY requirement or conformance rule was added on this page. The page is now marked Informative.
- **REST/search/operation semantics:** The examples describe Task POST/update/subscription/polling flows narratively, but no formal REST operation or search semantics changed on this page.

## Source history

| Commit | Date | PR | Summary | Page-specific effect | Classification |
|---|---:|---|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | #1295 | `update html template` | Removes the wrapper div around the page content. | mechanical/template |
| `86c92a8842624a25700fdcee18308d8971c039d2` | 2024-04-29 | #3553 | `Updates to workflow pages` | Replaces "Future home for examples" with first-pass Option F/G/I scenarios. | example content |
| `70e67c6d2dc76bdd232f94e9e062ce4f6b34df16` | 2025-01-07 | #3553 | `Updates from calls` | Rewrites Option F, expands Option G, adds blank Option H heading, leaves Option I mostly intact. | example content/editorial |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | #3901 | `normative changes for R6` | Changes status table to Responsible Owner + Informative; removes FMM/Trial Use display. | metadata/status |

Notes:

- PR #3553 body says "Cleaned up some of the question marks in the workflow pages" and references `FHIR-45287`.
- PR #3553 was merged on 2025-07-26, after the author dates on commits `86c92a8` and `70e67c6`.
- PR #3901 is a broad status/normative PR; its body does not identify a page-specific Jira key.

## Jira evidence

### Explicit or PR-linked Jira keys

- `FHIR-45287` (`Clean up TODO, TBD, ???, and empty sections`): found in PR #3553 metadata, not in the page commits themselves.
  - Snapshot command: `bun run jira:search snapshot FHIR-45287`
  - Status in local snapshot: `Triaged`, unresolved, no comments.
  - Related page: `FHIR-core-workflow`.
  - Description: "There's a bunch of incomplete content in these pages that needs to be cleaned up."
  - Relevance: plausibly explains the workflow-page cleanup PR and the replacement of the placeholder examples tab, but the open status and lack of comments limit formal-disposition evidence.

### Other Jira issues that plausibly explain changed text

- None found for exact added scenario phrases:
  - `"poison ivy rash"`: no Jira results.
  - `"local/regional lab"`: no Jira results.
  - `"Option F Scenario"`: no Jira results.
  - `"Workflow Pattern Examples"`: no Jira results.

### Context-only Jira hits

- `FHIR-15702` (`to rather than on`), Published STU3 technical correction:
  - Snapshot command: `bun run jira:search snapshot FHIR-15702`
  - Related URL: `http://build.fhir.org/workflow-management.html#optiong`
  - It corrected "POST of Task on fulfiller's system" to "POST of Task to fulfiller's system" years before this R4 -> R6 page change. It is not evidence for the new scenarios.

## Zulip evidence

- No relevant Zulip thread was found for:
  - `"FHIR-45287"`
  - `"poison ivy rash"`
  - `"local/regional lab"`
  - `"Option F Scenario"`
  - `"Workflow Pattern Examples"`
  - `"POST of Task to fulfiller"`
  - `"optionF-ex1"`
- A broader `"examples tab" "workflow"` search produced unrelated discussions about IG examples and PlanDefinition examples; not used as evidence.
- Caveat: an initial unquoted `FHIR-45287` Zulip FTS query failed because FTS parsed the hyphenated key as an expression. The corrected quoted search returned no results.

## Confluence evidence

- `234784839` (`FHIR Workflow Minutes CC 20240415`):
  - Snapshot command: `bun run confluence:search snapshot 234784839`
  - Text records "Workflow pages review"; participants worked on changes to address `"TODO", "TBD", "???" and incomplete sections`.
  - It also says they created the `Workflow Pattern Examples` Confluence page and would create a list of examples for the examples tab.
- `239206707` (`FHIR Workflow Minutes CC 20240422`):
  - Snapshot command: `bun run confluence:search snapshot 239206707`
  - Text records that Lloyd showed changes to the examples section and `Workflow Pattern Examples`; the group decided to move "scenarios" to the examples tab; they worked on `optionF-ex1`; Lloyd would publish work in progress on a branch.
- `234784905` (`Workflow Pattern Examples`):
  - Snapshot command: `bun run confluence:search snapshot 234784905`
  - Project page describes known examples of workflow management/ad-hoc workflow patterns and asks for updates where few/no examples are provided.
  - Local snapshot version 2 (2024-04-16) still shows `TODO` for patterns A-L; it does not contain the exact R6 source scenario text searched here.
- `281219307` (`2024-10-25 OO FHIR COW/FOE`):
  - Snapshot command: `bun run confluence:search snapshot 281219307`
  - Later OO minutes mention FHIR-I's `Workflow Pattern Examples` as generic background and discuss the need to adapt generic workflow patterns to specialties/countries. Useful context only; no direct evidence that the target page text should change.

## Timeline

| Date | Event type | Evidence |
|---:|---|---|
| 2018-03-19 | Jira vote | `FHIR-15702` vote date for old Option G title wording; context-only |
| 2021-06-26 | PR merge | PR #1295 merges template update containing `d7b8dad` |
| 2021-06-27 | Source commit author date | `d7b8dad` removes content wrapper div |
| 2024-04-15 | FHIR-I minutes | `234784839` records workflow page cleanup for TODO/TBD/???/incomplete sections |
| 2024-04-16 | Jira created | `FHIR-45287` opened for cleaning up TODO/TBD/???/empty sections |
| 2024-04-22 | FHIR-I minutes | `239206707` records decision to move scenarios to examples tab and work on `optionF-ex1` |
| 2024-04-29 | Source commit author date | `86c92a8` adds first-pass scenarios to target page |
| 2025-01-07 | Source commit author date | `70e67c6` revises scenarios and adds blank Option H heading |
| 2025-07-26 | PR merge | PR #3553 merges workflow updates linked to `FHIR-45287` |
| 2025-10-25 | Later context | OO minutes `281219307` reference FHIR-I workflow examples while discussing Clinical Order Workflow |
| 2025-10-31 | Source commit author date | `270e0ce` changes page status metadata to Informative |
| 2025-11-02 | PR merge | PR #3901 merges broad R6 normative/status changes |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/workflow-examples.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-examples.html`
  - Established placeholder-to-scenarios change plus status/template churn.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-examples.html`
  - `git show --stat --patch` for the four commits listed above.
- PR lookup:
  - `gh api -H "Accept: application/vnd.github.groot-preview+json" /repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view 3553 --repo HL7/fhir --json number,title,state,author,createdAt,mergedAt,body,url,commits`
- Jira searches:
  - `bun run jira:search snapshot FHIR-45287`
  - `bun run jira:search snapshot FHIR-15702`
  - `bun run jira:search fts "\"poison ivy rash\"" --limit 8` -> no results
  - `bun run jira:search fts "\"local/regional lab\"" --limit 8` -> no results
  - `bun run jira:search fts "\"Option F Scenario\"" --limit 8` -> no results
  - `bun run jira:search fts "\"Workflow Pattern Examples\"" --limit 8` -> no results
  - `bun run jira:search fts "\"POST of Task to fulfiller\"" --limit 8` -> only `FHIR-15702`, context-only
- Zulip searches:
  - `bun run zulip:search fts "\"FHIR-45287\"" --limit 20` -> no results
  - Exact changed phrase searches listed above -> no relevant results
- Confluence searches:
  - `bun run confluence:search fts "\"Workflow Pattern Examples\"" --limit 8` -> minutes `234784839`, `239206707`, and OO context `281219307`
  - `bun run confluence:search snapshot 234784905`
  - `bun run confluence:search snapshot 234784839`
  - `bun run confluence:search snapshot 239206707`
  - `bun run confluence:search snapshot 281219307`
  - `bun run confluence:search refs jira FHIR-45287` -> no references
  - `bun run confluence:search fts "FHIR-45287" --limit 20` -> no results
- Newer page full read:
  - `wc -l` showed 82 lines for R6 page.
  - `workflow-examples.html:1-83` read end-to-end.
