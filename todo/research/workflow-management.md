# workflow-management research appendix

## Scope and coverage

- Page path: `source/workflow-management.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: confirmed present in both source trees.
- Newer page read end-to-end: yes, 368 lines.
- Direct diff reviewed: yes, 269-line page diff.
- Source history reviewed: 10 commits touched this page between the two commits.
- Explicit Jira keys in the page diff/log: `FHIR-33318`, `FHIR-46330`, `FHIR-44047`.
- Additional Jira keys found from PR metadata/branch names: `FHIR-46220`, `FHIR-45287`.
- Searches performed: Jira snapshots and FTS, Zulip FTS/snapshots, Confluence refs/FTS/snapshots for the explicit keys and distinctive changed phrases.
- Caveats: PR #3363 and commit `d6445217a92a` cite `FHIR-46330`, but that Jira issue is about AppointmentResponse. The PR branch is `vassil-FHIR-46220`, and `FHIR-46220` is the matching "Drop Option I from workflow" issue. Initial unquoted Zulip FTS searches for Jira keys failed because the hyphen was parsed as syntax; the searches were repeated with quoted keys.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/workflow-management.html` | Older source page under review |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html` | Newer source page under review |
| Source | R6 status row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html:19` | Page changed from Trial Use/FMM 2 to Informative |
| Source | Old Option I still present | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html:188-244` | This is the section `FHIR-46220` says should be dropped |
| Source | Duplicate `optioni` anchor | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html:246-280` | Messaging pattern is also labelled/anchored as Option I |
| Source | Related workflow table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-communications.html:563-573` | Related page expects I=Messaging, J=Service request, K=Combining approaches |
| Source | Messaging cross-link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/exchanging-messaging.html:38` | Links to `workflow-management.html#optionj`, which is absent in current page |
| Source | Example page old Option I | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:64-78` | The removed old Option I scenario remains in examples |
| Commit | FHIR-33318 Option L | `38ec9ed49c93cb973f1c750dbe5f0880645c8169`, https://github.com/HL7/fhir/commit/38ec9ed49c93cb973f1c750dbe5f0880645c8169 | Adds/fleshes out Option L and `MessageHeader.focus` wording |
| PR | FHIR-33318 PR | https://github.com/HL7/fhir/pull/2377 | Merged source implementation for Jira `FHIR-33318` |
| Jira | FHIR-33318 | https://jira.hl7.org/browse/FHIR-33318; reopen with `bun run jira:search snapshot FHIR-33318` | Formal request/resolution for "Combining workflow approaches" |
| Zulip | FHIR-33318 precursor thread | `#workflow` / `Practical Workflow - Messages, Tasks and Communication`; reopen with `bun run zulip:search snapshot workflow "Practical Workflow - Messages, Tasks and Communication"` | Rationale for messaging-to-REST broker/on-ramp pattern |
| Confluence | FHIR-33318 minutes | Page `79511051`, https://confluence.hl7.org/spaces/FHIRI/pages/79511051/FHIR+Workflow+Minutes+CC+20211011 | Records persuasive-with-modification disposition |
| Jira | FHIR-46220 | https://jira.hl7.org/browse/FHIR-46220; reopen with `bun run jira:search snapshot FHIR-46220` | Formal applied issue: "Drop Option I from workflow" |
| Confluence | FHIR-46220 minutes | Page `248715006`, https://confluence.hl7.org/spaces/FHIRI/pages/248715006/FHIR+Workflow+Minutes+CC+20240624 | Records `FHIR-46220` "Created and approved" |
| PR | Option I removal PR | https://github.com/HL7/fhir/pull/3363 | Removes old Option I and renumbers later options; PR title/body cite wrong key but branch is `vassil-FHIR-46220` |
| Commit | Option I removal | `d6445217a92adf21ee6a65b71a7e030c4c8d488e`, https://github.com/HL7/fhir/commit/d6445217a92adf21ee6a65b71a7e030c4c8d488e | Implements removal/renumbering before it was undone by a later merge |
| PR | Workflow cleanup PR | https://github.com/HL7/fhir/pull/3553 | Merged a stale workflow-cleanup branch after Option I removal |
| Commit | Conflict merge | `a8c653b3a1f5b412194c2589c98b48c4aeff7633`, https://github.com/HL7/fhir/commit/a8c653b3a1f5b412194c2589c98b48c4aeff7633 | Reintroduced old Option I while also keeping the renumbered Option I |
| Commit | Conflict-marker cleanup | `151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d`, https://github.com/HL7/fhir/commit/151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d | Removed merge markers but left duplicate anchors/headings |
| Jira | FHIR-45287 | https://jira.hl7.org/browse/FHIR-45287; reopen with `bun run jira:search snapshot FHIR-45287` | Workflow cleanup issue referenced by PR #3553; still Triaged/unresolved |
| Confluence | Workflow examples page | Page `234784905`, https://confluence.hl7.org/spaces/FHIRI/pages/234784905/Workflow+Pattern+Examples | Target for many new usage-example links; still lists old option numbering |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Punctuation-only cleanup |
| PR | FHIR-44047 PR | https://github.com/HL7/fhir/pull/3951 | Applies e.g./i.e. punctuation edits |

## Change summary

### Metadata/template/navigation

- The page wrapper changed mechanically when the old `div class="col-12"` was removed by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`.
- The standards row changed from Trial Use/FMM 2 to Informative in `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` ("normative changes for R6"). This is metadata/status, not page-specific workflow semantics.

### Substantive/semantic guidance

- `FHIR-33318` added and then fleshed out Option L, "Combining workflow approaches", for a broker translating among workflow exchange approaches. Current R6 text at `workflow-management.html:310-339` includes the intended broker/message/Task guidance, including the note at line 318 that `Task` may sometimes be omitted if `MessageHeader.event` maps directly to `Task.code`, while still recommending Task for complex workflow management.
- The same `FHIR-33318` implementation corrected old messaging wording from a `"data"` element to `MessageHeader.focus` for Task references. The R6 page uses `focus` in both the messaging option and Option L.
- `FHIR-46220` formally approved dropping old Option I ("POST of Task to fulfiller's system, followed by POST of sub-Task on placer's system") because it no longer made sense after better subscription/notification support. PR #3363/commit `d6445217a92a` implemented that removal and renumbered later options. A later PR #3553 conflict merge reintroduced the old section and left the current page internally inconsistent.

### Example changes

- PR #3553 changed several inline usage examples into links to the new Confluence "Workflow Pattern Examples" page and the local examples tab. This aligns with FHIR Workflow minutes from 2024-04-15 and 2024-04-22, which describe creating the examples page and moving scenarios to the examples tab.
- Because the old Option I section was later intended to be removed by `FHIR-46220`, the retained `workflow-examples.html:64-78` old Option I scenario and the Confluence examples page are now part of the same cleanup problem rather than a separate independent change.

### Editorial only

- `FHIR-44047` changed punctuation from `e.g.`/`i.e.` to `e.g.,`/`i.e.,` across the page. Jira and Confluence characterize this as a broad punctuation correction; it does not alter workflow semantics.
- Commit `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` changed three instances of `unmanageable` to `unmanagable`. This is an editorial regression, but lower signal than the Option I/anchor issue.

### Mechanical/noise

- The merge commit `a8c653b3a1f5b412194c2589c98b48c4aeff7633` contains visible conflict-marker hunks in its combined diff. Commit `151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d` removed the literal markers but did not reconcile the conflicting option numbering.

## Source history

| Date | Commit | PR / issue | Change to this page | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | none found | Removed old wrapper `div` around page content | Mechanical/template |
| 2022-09-04 | `9325ba3746837c02814abe840eefc26867650761` | PR #2377 / `FHIR-33318` | Began adding Option L | Substantive/semantic |
| 2022-09-04 | `38ec9ed49c93cb973f1c750dbe5f0880645c8169` | PR #2377 / `FHIR-33318` | Completed Option L text and changed messaging Task reference from `"data"` to `MessageHeader.focus` | Substantive/semantic |
| 2023-02-24 | `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | none found | Changed `unmanageable` to misspelled `unmanagable` in three limitations lists | Editorial regression |
| 2024-04-29 authored, 2025-07-26 merged | `86c92a8842624a25700fdcee18308d8971c039d2` | PR #3553 / `FHIR-45287` | Replaced inline usage examples with Confluence/examples-tab links; branch still contained old Option I | Example restructuring |
| 2025-03-10 | `d6445217a92adf21ee6a65b71a7e030c4c8d488e` | PR #3363 / branch `vassil-FHIR-46220` / Jira `FHIR-46220` | Removed old Option I and renumbered J->I, K->J, L->K | Substantive correction |
| 2025-07-21 | `a8c653b3a1f5b412194c2589c98b48c4aeff7633` | PR #3553 | Merge conflict between stale workflow cleanup branch and Option I removal; combined diff shows both sides retained | Merge conflict / source of defect |
| 2025-07-24 | `151b4bbcd4ffd5bff684f1aa549d7b46392e7b3d` | PR #3553 | Removed literal conflict markers but kept both old Option I and renumbered messaging Option I | Mechanical cleanup with substantive leftover |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | PR #3901 | Changed page standards row to Informative | Metadata |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | PR #3951 / `FHIR-44047` | Added commas after `e.g.` and `i.e.` | Editorial punctuation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-33318` ("FHIR Workflow with traditional messaging and subscriptions") is directly relevant. It is Published, persuasive with modification, and its resolution says to add "Combining workflow approaches" for a broker translating between workflow fulfillment approaches, with the UK prescription service as an example and a note that Task may sometimes not be a message focus if the event code clearly maps to `Task.code`.
- `FHIR-46330` appears in PR #3363 and commit `d6445217a92a`, but the Jira issue is "Appointment Response - add link to description of fulfillment" and concerns removing the Workflow pattern mapping from AppointmentResponse. It is a key collision/mis-citation, not a rationale for changing `workflow-management.html`.
- `FHIR-44047` is relevant only as an editorial punctuation sweep for `e.g.,` and `i.e.,`.

### Other Jira issues that plausibly explain changed text

- `FHIR-46220` ("Drop Option I from workflow") is the correct formal issue for the Option I removal. It is Applied, persuasive, applied for R6, vote `Vassil Peytchev/Joe Quinn: 2-0-0` on 2024-06-24. Description: "Option I was introduced before we had proper support for subscription and notifications. Now that we do, it doesn't really make sense. It should go away."
- `FHIR-45287` ("Clean up TODO, TBD, ???, and empty sections") is referenced by PR #3553. It is Triaged/unresolved, related to `FHIR-core-workflow`, and describes incomplete content needing cleanup. It explains the examples/TODO cleanup direction but is not evidence that the old Option I should remain.

### Context-only Jira hits

- Search for `"Workflow Pattern I"` found `FHIR-42678` in CDS Hooks; it is unrelated.
- Search for `"sub-Task" "fulfiller" "placer"` found `FHIR-15703`, an old non-substantive issue; not used for action.
- Searches for `"remove option I"` and `"abuses the meaning" "Task"` found no matching Jira issue. The correct issue was found via the PR branch name (`vassil-FHIR-46220`), not via the commit subject.

## Zulip evidence

- `#workflow` / `Practical Workflow - Messages, Tasks and Communication` (2021-08-31 to 2021-09-01) is the rationale thread behind `FHIR-33318`. Kevin Mayfield described combining messaging, Tasks, and subscriptions; Lloyd McKenzie summarized a broker/intermediary that translates from messaging into RESTful Task/subscription workflow and said he would update the workflow page because it provides an on-ramp to RESTful workflow. Kevin then logged `FHIR-33318`.
- Quoted key search for `"FHIR-33318"` found only the Jira logging message in that thread.
- Quoted key searches for `"FHIR-46220"`, `"FHIR-46330"`, and `"FHIR-44047"` found no Zulip results.
- Search for `"Combining workflow approaches"` found a later `#workflow` thread, `FHIR (R5) Workflow Opt L Combining workflow approaches`, with two 2025 messages from Kevin Mayfield suggesting a newer diagram for Option L/H. No responses or consensus were found, so this is background only and not an action driver.
- Phrase searches for `"Workflow Pattern I"`, `"POST of Task to fulfiller" "sub-Task"`, and `"remove option I"` found no relevant Zulip discussion.

## Confluence evidence

- FHIR Workflow minutes page `79511051` (2021-10-11) records `FHIR-33318 - Persuasive w/ mod`, supporting the Jira resolution for Option L.
- FHIR Workflow minutes page `248715006` (2024-06-24) records "Workflow updates jira:FHIR-46220 - Created and approved", matching the Jira vote and applied status for dropping Option I.
- FHIR Workflow minutes pages `234784839` (2024-04-15) and `239206707` (2024-04-22) record workflow page cleanup, creation of the "Workflow Pattern Examples" Confluence page, and a decision to move example scenarios to the examples tab.
- The "Workflow Pattern Examples" page `234784905` still lists old numbering, including old Workflow Pattern I pointing to `workflow-management.html#optioni`, Workflow Pattern J pointing to `#optionj`, and Workflow Pattern L pointing to `#optionl`. This page predates `FHIR-46220` and appears stale relative to the intended removal/renumbering.
- Patient Administration minutes page `256515599` confirms `FHIR-46330` was a PA tracker disposition, reinforcing that `FHIR-46330` is not the right rationale for workflow Option I removal.
- FHIR Infrastructure WGM minutes page `234784975` records `FHIR-44047 will fix`, consistent with the broad punctuation cleanup.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2021-08-31 to 2021-09-01 | Zulip discussion | `#workflow` / `Practical Workflow - Messages, Tasks and Communication` | Broker/message/Task/subscription pattern discussed; Kevin logs `FHIR-33318` |
| 2021-10-11 | Jira/WG disposition | `FHIR-33318`; Confluence page `79511051` | Persuasive with modification for "Combining workflow approaches" |
| 2022-09-04 | Source/PR merge | Commits `9325ba3`, `38ec9ed`; PR #2377 | Option L and `MessageHeader.focus` wording applied |
| 2024-04-15 to 2024-04-22 | WG cleanup discussion | Confluence pages `234784839`, `239206707` | Examples page created; scenarios moved to examples tab |
| 2024-06-24 | Jira/WG disposition | `FHIR-46220`; Confluence page `248715006` | Drop old Option I approved |
| 2025-03-10 to 2025-03-11 | Source/PR merge | Commit `d6445217`; PR #3363 | Old Option I removed and later options renumbered; PR text mis-cites `FHIR-46330` |
| 2025-07-21 to 2025-07-26 | Source/PR merge | Merge commit `a8c653b`; PR #3553 | Stale workflow cleanup branch reintroduced old Option I during conflict resolution |
| 2025-07-24 | Source cleanup | Commit `151b4bbc` | Conflict markers removed, but duplicate `optioni` anchors/headings remained |
| 2025-10-31 | Source metadata | Commit `270e0ceb` | Page standards status changed to Informative |
| 2025-11-03 to 2025-11-06 | Source/PR merge | Commit `887bc238`; PR #3951; `FHIR-44047` | Punctuation-only cleanup |

## Evidence log

- Confirmed both page files exist with `test -f`.
- Captured direct diff with `git -C ... diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-management.html`.
- Captured source history with `git -C ... log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-management.html`.
- Inspected relevant commits with `git show --stat --patch --format=fuller <sha> -- source/workflow-management.html`.
- Used `gh api /repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view` to identify PRs #2377, #3363, #3553, #3901, and #3951.
- Ran Jira snapshots for `FHIR-33318`, `FHIR-46220`, `FHIR-46330`, `FHIR-44047`, and `FHIR-45287`.
- Ran Jira phrase searches for `"Combining workflow approaches"`, `"remove option I"`, `"Messaging Task from placer to fulfiller"`, `"Workflow Pattern I"`, `"POST of Task to fulfiller" "sub-Task"`, `"Task.partOf" "Workflow"`, `"abuses the meaning" "Task"`, and `"sub-Task" "fulfiller" "placer"`.
- Ran Zulip quoted key searches for `"FHIR-33318"`, `"FHIR-46220"`, `"FHIR-46330"`, and `"FHIR-44047"`; unquoted versions failed due FTS parsing and were not relied on.
- Snapshotted Zulip threads `workflow` / `Practical Workflow - Messages, Tasks and Communication` and `workflow` / `FHIR (R5) Workflow Opt L Combining workflow approaches`.
- Ran Confluence refs/FTS for `FHIR-33318`, `FHIR-46220`, `FHIR-46330`, and `FHIR-44047`.
- Snapshotted Confluence pages `79511051`, `248715006`, `234784839`, `239206707`, `234784905`, `256515599`, and `234784975`.
- Read the full R6 page with line-numbered chunks and cross-checked related current-source references with `rg` in `workflow-communications.html`, `exchanging-messaging.html`, and `workflow-examples.html`.
