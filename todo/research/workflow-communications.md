# workflow-communications research appendix

## Scope and coverage
- **Page:** `source/workflow-communications.html` (`workflow-communications`).
- **Compared versions:** R4 `4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` -> R6 ballot4 `6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- **Boundary:** `test -f` confirmed the page exists in both supplied source trees; `git diff --find-renames --name-status` reports `M` (modified, not added/deleted/renamed).
- **Read-through:** the newer page was read end-to-end (`wc -l`: old 597 lines, new 586 lines; viewed new lines 1-586). Changed old ranges were also inspected.
- **Source history:** 8 commits touched this page between the two commits. Explicit issue keys found in page commit/PR evidence: `FHIR-25928` (commit text `FHIR#25928`), `FHIR-33318`, `FHIR-46330`, and PR #3553's `FHIR-45287` reference. No Jira keys were present in the page source comments.
- **Search coverage:** Jira snapshots/searches for explicit and plausible keys; Zulip FTS and thread snapshots for keys/changed phrases/topics; Confluence `refs jira`, FTS, and snapshots for minutes/pages; GitHub PR lookup for page-touching commits; source pickaxe for exact added/removed phrases.
- **Caveats:** Unquoted Zulip searches for hyphenated Jira keys failed with FTS parse errors; quoted key searches were rerun. One parallel Zulip snapshot hit `SQLITE_BUSY_RECOVERY` and was retried successfully. Jira `FHIR-46330` itself is about AppointmentResponse/Workflow mapping, while PR #3363 and the commit use that key for “remove option I”; causality for the workflow-option removal is therefore based on the implementation PR/commit, not the Jira description alone.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page header/status | `source/workflow-communications.html` lines 19-24 | R6 ballot4 changes metadata from Trial Use/FMM to Informative/no FMM. |
| Source | New subscription guidance | `source/workflow-communications.html` lines 71-93 | Shows the updated Subscriptions link and new polling/subscription considerations paragraph. |
| Source | New pattern list | `source/workflow-communications.html` lines 503-574 | Current page lists Option I/J/K after `FHIR-46330` renumbering. |
| Source | Old pattern list | R4 `source/workflow-communications.html` lines 505-590 | Shows removed commented aliases, old Option I/J/K labels, and stale TODO. |
| Source | Current target anchors | `source/workflow-management.html` lines 188-311 | Cross-check shows duplicate `optioni`, no `optionj`, and shifted `optionk`/`optionl` targets. |
| Commit | Subscription link | `e4bf792d2ca24701564c5890adb25a931390bfae` | `FHIR#25928`; changed link from Subscription resource to Subscriptions framework page. |
| Commit/PR | Add Option L | `9325ba3746837c02814abe840eefc26867650761`; PR HL7/fhir#2377 | Implements `FHIR-33318` “Combining workflow approaches”. |
| Commit/PR | Workflow cleanup | `86c92a8842624a25700fdcee18308d8971c039d2`; PR HL7/fhir#3553 | Adds “Communication Pattern Considerations”; PR body points at `FHIR-45287`. |
| Commit/PR | Remove Option I | `d6445217a92adf21ee6a65b71a7e030c4c8d488e`; PR HL7/fhir#3363 | Intended to remove old sub-Task Option I and renumber later options. |
| Commit | Merge conflict aftermath | `a8c653b3a1f5b412194c2589c98b48c4aeff7633`; `151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d` | Merge/cleanup left workflow-management inconsistent with workflow-communications. |
| Jira | `FHIR-25928` | https://jira.hl7.org/browse/FHIR-25928 | Formal Subscription/Exchanging Resources context for link update. |
| Jira | `FHIR-33318` | https://jira.hl7.org/browse/FHIR-33318 | Formal rationale for adding combining workflow approaches. |
| Jira | `FHIR-46330` | https://jira.hl7.org/browse/FHIR-46330 | Explicit key in Option-I-removal commit/PR, but Jira text is AppointmentResponse-focused. |
| Jira | `FHIR-41441` | https://jira.hl7.org/browse/FHIR-41441 | Related workflow-pattern orchestration guidance; comment explicitly names `workflow-communications.html#commpatternslist`. |
| Jira | `FHIR-45287` | https://jira.hl7.org/browse/FHIR-45287 | PR #3553 reference for TODO/TBD cleanup; still Triaged/unresolved in snapshot. |
| Zulip | `FHIR-33318` origin | `bun run zulip:search snapshot workflow "Practical Workflow - Messages, Tasks and Communication"` | Lloyd suggested documenting a messaging-to-REST/Task broker approach; Kevin filed `FHIR-33318`. |
| Zulip | `FHIR-25928` context | `bun run zulip:search snapshot fhir/infrastructure-wg "adding Subscription to \"Exchanging Resources\""` | Shows rationale/uncertainty around subscription vs messaging guidance. |
| Zulip | Later Option L mention | `bun run zulip:search snapshot workflow "FHIR (R5) Workflow Opt L Combining workflow approaches"` | Background-only 2025 discussion referencing R5 Option L. |
| Confluence | `FHIR-33318` vote | `bun run confluence:search snapshot 79511051` | 2021-10-11 workflow minutes record Persuasive with Mod. |
| Confluence | `FHIR-25928` vote | `bun run confluence:search snapshot 82903557` | 2020-04-20 FHIR-I minutes record “add as sibling to messaging and documents”. |
| Confluence | Workflow cleanup | `bun run confluence:search snapshot 234784839` / `239206707` | 2024 workflow page review/cleanup process evidence. |
| Confluence | Examples page | `bun run confluence:search snapshot 234784905` | External example page still reflects old Pattern I-L labels/anchors. |
| Local check | Anchor validation | Python check of `workflow-communications.html` links vs `workflow-management.html` anchors | Established the actionable I/J/K mismatch without relying on keyword matches. |

## Change summary

### Metadata/template/navigation
- **Mechanical/template:** `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the wrapping `<div class="col-12">` around the page body; no workflow semantics changed.
- **Metadata/template:** `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the standards table from `colstu` to `colsi`, added “Responsible Owner:”, removed FMM level 2, and changed Standards Status from Trial Use to Informative. This is publication/status metadata, not workflow behavior.

### Subscription/polling guidance
- **References/semantic guidance:** `e4bf792d2ca24701564c5890adb25a931390bfae` changed the prerequisite reading link from the `Subscription` resource page to the broader `subscriptions.html` page. `FHIR-25928`/Confluence minutes support adding Subscription as a sibling high-level exchange topic, but the page-local change is a link/reference update.
- **Semantic guidance:** `86c92a8842624a25700fdcee18308d8971c039d2` added “Communication Pattern Considerations,” explaining that polling and subscriptions are general-purpose RESTful mechanisms for awareness of created/updated records and pointing to `exchanging.html#subscription`. This adds implementation guidance but no SHALL/SHOULD-level conformance rule.

### Pattern list and workflow-option semantics
- **Editorial cleanup:** `ea882e794a1fbf178491291e5ec7d75dd53dc8fa` removed the stale “TODO: Insert Jose's decision tree here?” paragraph.
- **Editorial/navigation cleanup:** `9325ba3746837c02814abe840eefc26867650761` removed obsolete commented-out aliases in the list, fixed `fullfiller` -> `fulfiller`, and added Option L “Combining workflow approaches” in response to `FHIR-33318`.
- **Substantive semantic guidance/navigation:** `d6445217a92adf21ee6a65b71a7e030c4c8d488e`/PR #3363 removed the old mutual sub-Task Option I from the list and renumbered messaging/service/combining to I/J/K. PR #3363 describes this as removing an option that “abuses the meaning of the Task resource.”
- **Current implementation mismatch:** the current `workflow-communications.html` retains the renumbered I/J/K list, but current `workflow-management.html` retained/reintroduced the old Option I section, duplicate `optioni` anchors, no `optionj`, and old `optionk`/`optionl` headings. This is the sole actionable finding.

### Examples and requirements
- **Example content:** The two Task state examples in `workflow-communications.html` are materially unchanged in the R4 -> R6 page diff.
- **REST/search/operation semantics:** No direct change to REST interaction semantics, search parameters, operations, or terminology bindings was found in this page diff.
- **Normative requirements:** No new normative requirement was added to this informative page. The only `SHALL` in this file remains the boilerplate source-order comment at the top.

## Source history

| Date | Commit | Subject / PR | Page effect | Assessment |
|---|---|---|---|---|
| 2020-08-14 | `e4bf792d2ca24701564c5890adb25a931390bfae` | `FHIR#25928: Changed references to subscriptions framework page instead of resource.`; PR #967 merged 2020-08-18 | Changes prerequisite link to `subscriptions.html`. | Reference/semantic guidance; supported by `FHIR-25928`, but no page-specific dispute found. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removes page wrapper div. | Mechanical/template. |
| 2022-09-04 | `ea882e794a1fbf178491291e5ec7d75dd53dc8fa` | `Remove out of date TODO`; PR #2377 | Removes Jose decision-tree TODO. | Editorial cleanup. |
| 2022-09-04 | `9325ba3746837c02814abe840eefc26867650761` | `FHIR-33318 Option L`; PR #2377 merged 2022-09-04 | Adds Option L combining workflow approaches; removes old commented aliases. | Semantic guidance/navigation; directly backed by `FHIR-33318`. |
| 2024-04-29 | `86c92a8842624a25700fdcee18308d8971c039d2` | `Updates to workflow pages`; PR #3553 merged 2025-07-26 | Adds Communication Pattern Considerations. | Semantic guidance; PR says cleanup of question marks and references `FHIR-45287`, but no formal applied Jira resolution found for this exact paragraph. |
| 2025-03-10 | `d6445217a92adf21ee6a65b71a7e030c4c8d488e` | `FHIR-46330 remove option I`; PR #3363 merged 2025-03-11 | Removes old Option I and renumbers I/J/K in this page and workflow-management. | Substantive workflow guidance/navigation. Jira key scope is imperfect; PR body supplies the rationale. |
| 2025-07-21 | `a8c653b3a1f5b412194c2589c98b48c4aeff7633` | Merge branch into `WorkflowUpdates`; PR #3553 | Brings together communication-considerations addition and Option-I removal list changes; conflicts noted in ad-hoc/management pages. | Merge/mechanical on this page, but important to current mismatch. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6`; PR #3901 merged 2025-11-02 | Changes status table to Informative/no FMM. | Metadata/template. |
| 2025-07-24 | `151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d` | `Removed merge tags` (did not touch this page) | Removed conflict markers in `workflow-management.html` while retaining old Option I/old anchors. | Cross-page implementation event for actionable finding; not counted among page-touching commits. |

Pickaxe checks confirmed first/last page events for exact phrases: “Communication Pattern Considerations” and its paragraph first appear in `86c92a8842`; “Option K: Combining workflow approaches” appears in this page in `d6445217`; “TODO: Insert Jose” disappears in `ea882e7`.

## Jira evidence

### Explicit Jira keys
- **`FHIR-25928` — Adding Subscription to “Exchanging Resources” section.** Snapshot status Published/Persuasive, Applied for R5. Resolution: “Will add it as a sibling to Messaging and Documents.” Confluence 2020-04-20 minutes record “Will add as sibling to messaging and documents on that page” with a 9-0-0 vote. This supports the broad subscription-framework link change but does not discuss `workflow-communications.html` specifically.
- **`FHIR-33318` — FHIR Workflow with traditional messaging and subscriptions.** Snapshot status Published/Persuasive with Modification, Applied for R5. Resolution adds a “Combining workflow approaches” section for a broker translating between workflow fulfillment approaches, using UK prescription service as an example and noting Task as preferred mechanism. This directly explains Option L/combining workflow changes.
- **`FHIR-46330` — Appointment Response - add link to description of fulfillment.** Snapshot status Applied/Not Persuasive with Modification; Jira resolution removes AppointmentResponse workflow pattern mapping. The Jira text does not itself say “remove Option I,” but commit `d6445217` and PR #3363 explicitly use `FHIR-46330` for removing the old Option I because it “abuses the meaning of the Task resource.” Treat as explicit implementation evidence with imperfect formal-Jira alignment.
- **`FHIR-45287` — Clean up TODO, TBD, ???, and empty sections.** Snapshot status Triaged/unresolved; PR #3553 body references it while adding workflow cleanup content. It explains the cleanup theme, not a resolved disposition for specific `workflow-communications` wording.

### Plausible Jira issues explaining related text
- **`FHIR-41441` — Consider including the orchestration work in the workflow patterns.** Status Applied/Persuasive with Modification. It describes missing pre-work/reference orchestration complexity in workflow options. A 2025 comment says the clarification is “better placed at the beginning of `workflow-communications.html#commpatternslist`,” but commit `b14c140d35` applied the text to `workflow-ad-hoc.html` instead. This is relevant background but not elevated to an action because the current actionable break is the I/J/K link mismatch.
- **`FHIR-45872` — Need something on the various Request resources that explain the use of Task.** Status Applied/Persuasive with Modification. It supplies broader Request-vs-Task rationale and was discussed in 2024-06-17 workflow minutes; no direct changed text was found in this page.

### Context-only Jira hits
- Searches for `workflow-communications`, exact section titles, `Messaging Task from placer to fulfiller`, `Service request referencing Task`, and polling/subscription phrases produced mostly unrelated or broader workflow hits (`FHIR-13134`, `FHIR-39229`, IG-specific issues). They were not used as causal evidence.

## Zulip evidence

- **`FHIR-33318` / “Practical Workflow - Messages, Tasks and Communication” (#workflow, 2021-08-31 to 2021-09-01).** Kevin Mayfield described introducing FHIR Workflow with a “point of sharing” and combinations of HL7 v2/FHIR Messaging. Lloyd McKenzie characterized the requirement as an intermediary translating messaging into a RESTful Task approach with subscription notifications, said it was documentable as an on-ramp to RESTful workflow, and asked Kevin to file a change request. Kevin then logged `FHIR-33318`. This is strong rationale for the combining-workflow section.
- **`FHIR-25928` / “adding Subscription to "Exchanging Resources"” (#fhir/infrastructure-wg, 2020-02-05 to 2020-04-24).** The thread debates how Subscription, FHIRCast, messaging, routing, and REST/polling relate. Participants noted the Jira was thin on details and that a Subscription framework page was needed. This supports the broad subscription link movement but not a page-specific requirement.
- **“FHIR (R5) Workflow Opt L Combining workflow approaches” (#workflow, 2025-05-17).** Kevin Mayfield referenced R5 `workflow-management.html#optionl` and proposed a refreshed Option L diagram. This is later background only; it did not identify a contradiction in the R6 text.
- **No direct Zulip evidence found** for quoted `FHIR-46330`, `FHIR-41441`, or `FHIR-45872`, nor for exact “Communication Pattern Considerations” or the old sub-Task Option I phrase.

## Confluence evidence

- **FHIR Workflow Minutes 2021-10-11 (`79511051`).** Records `FHIR-33318 - Persuasive w/ mod`, matching the Jira resolution for combining workflow approaches.
- **FHIR Infrastructure Minutes 2020-04-20 (`82903557`).** Records `FHIR-25928` as persuasive, “Will add as sibling to messaging and documents on that page,” supporting the subscription-framework context.
- **FHIR Workflow Minutes 2024-01-08 (`212761627`).** Records `FHIR-41441 P w/mod`; useful for orchestration-guidance background.
- **FHIR Workflow Minutes 2024-04-15 and 2024-04-22 (`234784839`, `239206707`).** Record workflow page review/cleanup work to address TODO/TBD/??? and to create a Workflow Pattern Examples page. These explain the general cleanup effort behind PR #3553.
- **FHIR Workflow Minutes 2024-06-17 (`248877069`).** Records `FHIR-45872 - Persuasive w/ mod` and continued work on examples for workflow patterns.
- **PA Conference Call Minutes 2024-07-31 (`256515599`).** Records `FHIR-46330 Not persuasive with Mod / 4-0-0`; confirms the Jira vote but remains AppointmentResponse-focused.
- **Workflow Pattern Examples page (`234784905`).** Project/reference page still lists old Pattern I-L labels and old target fragments (`#optioni`, `#optionj`, `#optionl`). This corroborates that external collateral may need review if the R6 renumbering is retained, but it is not a formal disposition page.

## Timeline

| Clock | Date | Event |
|---|---:|---|
| Discussion | 2020-02-05 to 2020-04-24 | Zulip subscription/messaging discussion for `FHIR-25928`; participants discuss Subscription framework vs resource page and messaging overlap. |
| Jira vote/resolution | 2020-04-20 | `FHIR-25928` persuasive 9-0-0 in FHIR-I minutes. |
| Source commit | 2020-08-14 | `e4bf792d` changes workflow page subscription link. |
| PR merge | 2020-08-18 | PR #967 “Subscription updates” merged. |
| Discussion | 2021-08-31 to 2021-09-01 | Zulip workflow thread leads to `FHIR-33318`. |
| Jira vote/resolution | 2021-10-11 | `FHIR-33318` persuasive with modification 6-0-1 in workflow minutes. |
| Source commit / PR merge | 2022-09-04 | `9325ba37` adds combining workflow approach; PR #2377 merged. |
| Publication boundary | 2023-03 | `FHIR-33318` is Applied for R5; R4 page lacked Option L, R6 ballot4 has the renumbered combining entry. |
| Jira vote | 2024-01-08 | `FHIR-41441` persuasive with modification; later comment suggests workflow-communications placement. |
| Source commit | 2024-04-29 | `86c92a88` adds Communication Pattern Considerations. |
| Jira vote | 2024-07-30 | `FHIR-46330` not persuasive with modification in PA; separate PR later uses the key to remove old Option I. |
| Source commit / PR merge | 2025-03-10 / 2025-03-11 | `d6445217` / PR #3363 removes old Option I and renumbers workflow-management and workflow-communications. |
| Merge/reassessment | 2025-07-21 to 2025-07-24 | PR #3553 merge and `Removed merge tags` cleanup leave current workflow-management inconsistent with the communications list. |
| PR merge | 2025-07-26 | PR #3553 “Workflow updates” merged. |
| Source commit / PR merge | 2025-10-31 / 2025-11-02 | `270e0ceb` R6 metadata/status changes; PR #3901 merged. |
| Later source | 2025-11-06 | `b14c140d35` applies `FHIR-41441` orchestration guidance to ad-hoc page, not this page. |
| Publication source boundary | 2025-12-18 | `5d67a34a13` bumps version for R6 ballot4 publication. |

## Evidence log

- `test -f <old_tree>/source/workflow-communications.html` and `test -f <new_tree>/source/workflow-communications.html`: both present.
- `wc -l`: old 597 lines, new 586 lines; full newer page was viewed in chunks 1-120, 121-260, 261-420, 421-586.
- `git diff --find-renames --stat/name-status`: one modified file, 14 insertions and 25 deletions; no rename.
- `git diff --find-renames --unified=20`: established the exact R4 -> R6 page changes: metadata, subscriptions link, added considerations paragraph, list cleanup/renumbering, TODO removal.
- `git log --reverse --date=short --format='%H%x09%ad%x09%s' old..new -- source/workflow-communications.html`: established 8 page-touching commits.
- `git show --stat --patch` for page-touching commits: separated mechanical/template changes from semantic guidance and list/navigation changes.
- `git log -S` for exact phrases: located first addition/removal of “Communication Pattern Considerations,” “Option K: Combining workflow approaches,” “Option I: POST of Task to fulfiller,” and the removed Jose TODO.
- `gh api /repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view`: identified PRs #967, #2377, #3363, #3553, and #3901 with merge dates and PR descriptions.
- `bun run jira:search snapshot FHIR-25928/FHIR-33318/FHIR-46330/FHIR-41441/FHIR-45872/FHIR-45287`: read full Jira context for explicit/plausible issues.
- `bun run jira:search fts` for exact changed phrases and page/topic terms: found `FHIR-33318` and `FHIR-41441`; no Jira issue directly for “Communication Pattern Considerations,” “remove option I,” or exact I/J/K labels beyond the explicit commit/PR evidence.
- `bun run zulip:search fts '"FHIR-xxxxx"' --limit 20` plus changed-phrase searches: found meaningful threads for `FHIR-25928` and `FHIR-33318`; no direct hits for `FHIR-46330`, `FHIR-41441`, or `FHIR-45872`.
- `bun run zulip:search snapshot ...`: read the `FHIR-33318` origin thread, `FHIR-25928` subscription thread, and 2025 Option L background thread.
- `bun run confluence:search refs jira/fts` and snapshots: read formal minutes for `FHIR-25928`, `FHIR-33318`, `FHIR-41441`, `FHIR-45872`, and `FHIR-46330`, plus workflow cleanup minutes and Workflow Pattern Examples page.
- Python link/anchor check against the newer source: `workflow-communications.html` links `#optioni/#optionj/#optionk` to labels I/J/K, while `workflow-management.html` has duplicate `optioni`, no `optionj`, and `optionk` mapped to Service Request rather than Combining. This directly established the actionable finding.
