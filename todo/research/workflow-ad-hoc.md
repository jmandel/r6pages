# workflow-ad-hoc research appendix

## Scope and coverage

- Page path: `source/workflow-ad-hoc.html`.
- Old version/source: R4 `4.0.1`, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 `6.0.0-ballot4`, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary check: page exists in both trees; old file has 270 lines, new file has 238 lines.
- Newer page was read end-to-end (`1-238`).
- Source history between the two commits has 12 commits touching this file.
- Explicit issue keys in source history: `J#25300`/`FHIR-25300`, `FHIR-46330`, `FHIR-44047`, `FHIR-41441`. Related searches also surfaced `FHIR-44031`, `FHIR-46220`, `FHIR-55135`, and `FHIR-55136`.
- Jira snapshots reviewed for: `FHIR-25300`, `FHIR-46330`, `FHIR-44047`, `FHIR-41441`, `FHIR-44031`, `FHIR-55135`, `FHIR-55136`, `FHIR-46220`.
- Zulip searched by explicit issue keys and phrases; snapshots reviewed for `#workflow > spec typo`, `#implementers > Workflow examples`, and `#committers > ToDos`.
- Confluence searched by issue refs and terms; snapshots reviewed for the Workflow Pattern Examples page and relevant FHIR-I/PA minutes.
- Caveats: direct Zulip FTS on unquoted issue keys failed because FTS parsed hyphenated keys as column/minus syntax; a SQL `LIKE` query was used instead. No Jira issue or PR was found that explicitly cites commit `86c92a8842624a25700fdcee18308d8971c039d2` adding the usage-example links, though Confluence minutes strongly connect that work to cleanup of TODO/TBD/??? content.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current page intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-ad-hoc.html:30-38` | New `FHIR-41441` orchestration/pre-requisite guidance. |
| Source | Current usage-example links | same file: `66-67`, `103-104`, `140-141`, `176-177`, `203-204` | R6 now points each ad-hoc option A-E to an external Confluence examples page. |
| Source | Current visible incomplete content | same file: `145`, `182`, `193`, `197`, `201`, `209` | TODO/???/TBD content remains despite cleanup Jira/minutes. |
| Source | Current typos/spelling issues | same file: `79`, `81`, `91`, `112`, `115`, `188`, `220` | Concrete reader-facing defects still present. |
| Commit | Typo fix | `aa9bb0058ede4c6c49401d5e4e91a5da03dd4a42`, https://github.com/HL7/fhir/commit/aa9bb0058ede4c6c49401d5e4e91a5da03dd4a42 | Implements `FHIR-25300` (`placer` -> `filler`). |
| PR | Typo fix PR | https://github.com/HL7/fhir/pull/763 | PR body cites `J#25300`; merged 2019-12-16. |
| Commit | Usage-example links | `86c92a8842624a25700fdcee18308d8971c039d2`, https://github.com/HL7/fhir/commit/86c92a8842624a25700fdcee18308d8971c039d2 | Replaces blank/??? example placeholders for A-C and adds D/E usage-example links. |
| Commit | Option I removal | `d6445217a92adf21ee6a65b71a7e030c4c8d488e`, https://github.com/HL7/fhir/commit/d6445217a92adf21ee6a65b71a7e030c4c8d488e | Removes hidden/commented Option I block. |
| PR | Option I removal PR | https://github.com/HL7/fhir/pull/3363 | PR cites `FHIR-46330`, but the matching Jira for Option I is `FHIR-46220`. |
| Commit | R6 standards status | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page table from Trial Use/FMM 2 to Informative. |
| Commit/PR | e.g./i.e. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627; PR https://github.com/HL7/fhir/pull/3951 | Implements part of `FHIR-44047` on this page. |
| Commit/PR | Orchestration guidance | `b14c140d352f46e90376faae78882500b42504cc`, https://github.com/HL7/fhir/commit/b14c140d352f46e90376faae78882500b42504cc; PR https://github.com/HL7/fhir/pull/3953 | Implements `FHIR-41441`; merged by `b7f0b0c842cd80ce19fc074dd049e7af992ad960`. |
| Jira | Typo in option A | https://jira.hl7.org/browse/FHIR-25300 | Formal issue for `placer` -> `filler`. Reopen with `bun run jira:search snapshot FHIR-25300`. |
| Jira | Cleanup TODO/TBD/??? | https://jira.hl7.org/browse/FHIR-44031 | Persuasive, resolved-change-required request to remove remaining incomplete content. Reopen with `bun run jira:search snapshot FHIR-44031`. |
| Jira | Drop Option I | https://jira.hl7.org/browse/FHIR-46220 | Matching formal issue for removing Option I. Reopen with `bun run jira:search snapshot FHIR-46220`. |
| Jira | AppointmentResponse mapping | https://jira.hl7.org/browse/FHIR-46330 | Explicitly cited by PR/commit `d6445217`, but substantively about AppointmentResponse, not this page. |
| Jira | e.g./i.e. punctuation | https://jira.hl7.org/browse/FHIR-44047 | Formal R6 punctuation cleanup issue. |
| Jira | Orchestration/pre-req guidance | https://jira.hl7.org/browse/FHIR-41441 | Formal issue and resolution for new introductory paragraph. |
| Jira | Later spelling issue | https://jira.hl7.org/browse/FHIR-55135 | Submitted 2026 issue for spelling/abbreviation on this page. |
| Jira | Later incomplete-content issue | https://jira.hl7.org/browse/FHIR-55136 | Submitted 2026 issue for remaining `TODO` on this page. |
| Zulip | Spec typo thread | https://chat.fhir.org/#narrow/stream/workflow/topic/spec%20typo | Origin discussion for `FHIR-25300`. Snapshot with `bun run zulip:search snapshot workflow "spec typo"`. |
| Zulip | Workflow examples thread | https://chat.fhir.org/#narrow/stream/implementers/topic/Workflow%20examples | 2017 discussion noting blank/??? usage examples and allowing a wiki link. |
| Zulip | ToDos thread | https://chat.fhir.org/#narrow/stream/committers/topic/ToDos | 2023 discussion that visible TODOs, including workflow-ad-hoc, made the spec look unfinished. |
| Confluence | Workflow Pattern Examples | Page ID `234784905`, https://confluence.hl7.org/spaces/FHIRI/pages/234784905/Workflow+Pattern+Examples | Current external examples page linked by R6 source; snapshot text still has TODO for every pattern. |
| Confluence | Workflow minutes 2024-04-15 | Page ID `234784839`, https://confluence.hl7.org/spaces/FHIRI/pages/234784839/FHIR+Workflow+Minutes+CC+20240415 | Minutes say the group worked on TODO/TBD/??? cleanup and created the examples page. |
| Confluence | Workflow minutes 2024-04-22 | Page ID `239206707`, https://confluence.hl7.org/spaces/FHIRI/pages/239206707/FHIR+Workflow+Minutes+CC+20240422 | Follow-up showing changes to examples section and examples page. |
| Confluence | Workflow minutes 2024-01-22 | Page ID `218825570`, https://confluence.hl7.org/spaces/FHIRI/pages/218825570/FHIR+Workflow+Minutes+CC+20240122 | Records `FHIR-44031` as persuasive. |
| Confluence | Workflow minutes 2024-01-08 | Page ID `212761627`, https://confluence.hl7.org/spaces/FHIRI/pages/212761627/FHIR+Workflow+Minutes+CC+20240108 | Records `FHIR-41441` as persuasive with modification. |
| Confluence | Workflow minutes 2024-06-24 | Page ID `248715006`, https://confluence.hl7.org/spaces/FHIRI/pages/248715006/FHIR+Workflow+Minutes+CC+20240624 | Records `FHIR-46220` created/approved. |

## Change summary

- **Semantic guidance:** `FHIR-41441` adds an introductory paragraph clarifying that this page covers request initiation and request management, not all pre-requisite orchestration needed to build a request. It calls out patient identification, service performer determination, related conditions/goals, higher-order requests, and the fact that different workflow architectures can shift who must satisfy those pre-requisites.
- **Example/reference change:** Options A-E now point to the Confluence `Workflow Pattern Examples` page instead of blank/??? usage-example sections. This is useful structurally, but the linked Confluence snapshot still contains `TODO` for every pattern, so the current source overstates the availability of examples.
- **Source cleanup:** The hidden/commented Option I block was removed. The matching Jira appears to be `FHIR-46220`, even though the implementing PR/commit cite `FHIR-46330`.
- **Metadata/template/navigation:** Template updates removed the surrounding `div`; standards status changed from Trial Use/FMM 2 (`colstu`) to Informative (`colsi`); the common-tags link was changed to terminology.hl7.org.
- **Editorial only:** `e.g.`/`i.e.` punctuation cleanup under `FHIR-44047`; `&` escaping in Confluence URL fragments; one typo fix from `placer's system` to `filler's system`.
- **Mechanical/noise or negative editorial churn:** Commit `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` changed `unmanageable` to misspelled `unmanagable`; later punctuation cleanup retained that misspelling. Multiple older TODOs, `???`, `TBD`, and typos remain in the current page.
- **No direct normative requirement changes found:** The page has no new `SHALL`/`SHOULD` style conformance requirement in the diff; the main substantive reader impact is guidance and examples/cleanup quality.

## Source history

| Commit | Date | Subject | Classification | Page-specific effect |
|---|---:|---|---|---|
| `aa9bb0058ede4c6c49401d5e4e91a5da03dd4a42` | 2019-12-15 | `Fix typo in workflow-ad-hoc.html J#25300` | Editorial correction | Option A limitation now says the placer posts to the **filler's** system. |
| `5c0494aacfd0b8bd52bc72c587aa89d0a64246f8` | 2020-08-18 | `Phase 1 removing UTG Content from core build` | Link/terminology infrastructure | `common-tags-actionable` link moved to `https://terminology.hl7.org/...`. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Mechanical/template | Removed outer `<div class="col-12">` wrapper. |
| `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | 2023-02-24 | `more QA` | Editorial regression | Changed `unmanageable` to misspelled `unmanagable`. |
| `86c92a8842624a25700fdcee18308d8971c039d2` | 2024-04-29 | `Updates to workflow pages` | Example/reference cleanup | Removed top TODO, replaced/added usage-example links to Confluence page for options A-E. |
| `70e67c6d2dc76bdd232f94e9e062ce4f6b34df16` | 2025-01-07 | `Updates from calls` | Markup fix | Escaped `&` in D/E Confluence URL fragments. |
| `d6445217a92adf21ee6a65b71a7e030c4c8d488e` | 2025-03-10 | `FHIR-46330 remove option I` | Source cleanup/provenance caveat | Removed hidden/commented Option I block. PR cites `FHIR-46330`, but `FHIR-46220` is the matching Option I Jira. |
| `a8c653b3a1f5b412194c2589c98b48c4aeff7633` | 2025-07-21 | `Merge branch 'master' ... into WorkflowUpdates` | Merge/conflict resolution | Retained Confluence examples link while removing hidden Option I block. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Metadata/status | Changes status table from Trial Use/FMM 2 to Informative/no FMM. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Editorial punctuation | Adds commas after `e.g.`/`i.e.` in several locations; leaves other typos intact. |
| `b14c140d352f46e90376faae78882500b42504cc` | 2025-11-06 | `FHIR-41441 ... orchestration ...` | Semantic guidance | Adds pre-requisite/orchestration paragraph at page start. |
| `b7f0b0c842cd80ce19fc074dd049e7af992ad960` | 2025-11-07 | `Merge pull request #3953 ...` | Merge | Merges PR #3953 containing `b14c140d...` and other trackers. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25300` (`J#25300` in commit/PR): typo in Option A. Snapshot confirms the description exactly matches the changed text and PR #763/commit `aa9bb0058...` applied it.
- `FHIR-46330`: explicit in commit `d6445217...` and PR #3363, but Jira describes AppointmentResponse workflow pattern mapping, not the ad-hoc workflow Option I block. Treat as a mis-attributed implementation reference for this page.
- `FHIR-44047`: broad R6 punctuation issue for `e.g.,`/`i.e.,`. Commit `887bc238...` matches the issue scope and only makes punctuation changes on this page.
- `FHIR-41441`: orchestration/pre-requisite issue. Snapshot resolution text closely matches the new paragraph in lines `32-38`; PR #3953 body includes `FHIR-41441`.

### Other Jira issues that plausibly explain changed/current text

- `FHIR-44031` (`Workflow Page, clean up`): created/resolved 2024-01-22; status `Resolved - change required`; resolution says "Will clean up the todos one way or the other." This directly relates to the current page's remaining TODO/TBD/??? and the 2024 Confluence minutes/work on examples.
- `FHIR-46220` (`Drop Option I from workflow`): created/approved 2024-06-24, status `Applied`, resolution `Persuasive`, applied for R6. This is the issue that actually matches the Option I removal, despite PR #3363 citing `FHIR-46330`.
- `FHIR-55135` (`Spelling/abbreviation issues on page: workflow-ad-hoc`): submitted 2026-01-20; notes at least one abbreviation/contraction issue (`doesn't`). Current page also has several obvious spelling/wording defects not enumerated in the snapshot.
- `FHIR-55136` (`Incomplete content indicated on: workflow-ad-hoc`): submitted 2026-01-20; says the page contains missing/incomplete-content indicators, specifically `TODO`.

### Context-only Jira hits that should not drive action

- `FHIR-46330` should not be used as page rationale even though it appears in the page history. Its formal scope is AppointmentResponse mapping and PA minutes, not ad-hoc workflow Option I.
- Jira phrase searches for `Workflow Pattern Examples` and `ad hoc workflow usage examples` did not find a direct issue beyond `FHIR-44031`/later `FHIR-55136`.
- Searches for individual typo strings such as `DiagosticReport`, `unmanagable`, `fullfiller`, and `conformation of receipt` did not surface page-specific Jira issues beyond the general later QA issues.

## Zulip evidence

- `#workflow > spec typo` (2019-12-12 to 2019-12-16): Tim Zallin reported the `placer's system`/`filler's system` typo; Lloyd asked for a change request; Vassil noted `J#25300`; Lloyd explained technical corrections. This corroborates `FHIR-25300` and PR #763.
- `#implementers > Workflow examples` (2017-03-08): Josh Mandel noted `workflow-ad-hoc.html` left usage examples blank or filled with `???` and asked whether to close the gap or link to an external wiki page before STU3. Lloyd said examples had been solicited and agreed that a link to an empty wiki page could be added. This is historical background for the later Confluence examples-link approach, not proof that examples are complete.
- `#committers > ToDos` (2023-03-18): Jose Costa Teixeira listed visible `todo` occurrences including `workflow-ad-hoc`; participants agreed these make the spec look unfinished, but Rik Smithies cautioned that many TODOs require actual WG work rather than last-minute deletion. This supports treating remaining TODO/??? as real unfinished content.
- SQL search for `FHIR-25300`, `FHIR-46330`, `FHIR-46220`, `FHIR-44047`, `FHIR-41441`, `FHIR-44031`, `FHIR-55135`, and `FHIR-55136` found Zulip mentions only for `FHIR-25300` in the local public Zulip mirror.

## Confluence evidence

- Page ID `234784905`, `Workflow Pattern Examples`, is the page now linked from the R6 source. Snapshot version 2 text says it is intended to provide real-world examples, but every listed workflow pattern A-L still has `TODO`. For this page specifically, options A-E link to that page.
- Page ID `234784839`, `FHIR Workflow Minutes CC 20240415`, says the group worked on changes to workflow pages to address `"TODO", "TBD", "???" and incomplete sections` and created the `Workflow Pattern Examples` Confluence page as the place to manage real-world examples.
- Page ID `239206707`, `FHIR Workflow Minutes CC 20240422`, says Lloyd showed changes to the examples section and Workflow Pattern Examples and discussed moving scenarios to the examples tab.
- Page ID `218825570`, `FHIR Workflow Minutes CC 20240122`, records `FHIR-44031 - Persuasive`, which aligns with the Jira cleanup request.
- Page ID `212761627`, `FHIR Workflow Minutes CC 20240108`, records `FHIR-41441 P w/mod`, matching the later paragraph added by commit `b14c140d...`.
- Page ID `248715006`, `FHIR Workflow Minutes CC 20240624`, records `FHIR-46220 - Created and approved`, matching the Option I removal rationale.
- Page ID `234784975`, `FHIR Infrastructure Minutes WGM 202405 - Dallas`, records `FHIR-44047 will fix`, supporting the punctuation cleanup.
- PA pages `256185559`/`256515599` mention `FHIR-46330` in Patient Administration tracker handling, reinforcing that `FHIR-46330` itself belongs to AppointmentResponse/PA rather than this page.

## Timeline

- **2017-01 to 2017-03:** Initial/ad-hoc workflow page content contains TODO/???; Zulip `Workflow examples` thread asks about blank/??? examples and Lloyd permits adding a wiki page link.
- **2019-12-12 to 2019-12-16:** Typo reported on Zulip, filed as `FHIR-25300`, fixed in PR #763 and commit `aa9bb0058...`.
- **2020-08-18:** UTG/THO link migration updates `common-tags-actionable` link.
- **2021-06-27:** Mechanical HTML template update.
- **2023-02-24:** `more QA` commit introduces/retains `unmanagable` typo.
- **2023-03-18:** Zulip `ToDos` discussion lists `workflow-ad-hoc` as visible unfinished content.
- **2024-01-08:** FHIR Workflow minutes record `FHIR-41441` as persuasive with modification.
- **2024-01-22:** `FHIR-44031` cleanup issue resolved persuasive/change-required; minutes record it as persuasive.
- **2024-04-15 and 2024-04-22:** FHIR Workflow minutes discuss cleanup of TODO/TBD/??? and creation/use of Workflow Pattern Examples page.
- **2024-04-29:** Commit `86c92a884...` adds usage-example links to the Confluence page and removes one top-level TODO.
- **2024-06-24:** FHIR Workflow minutes create/approve `FHIR-46220` to drop Option I.
- **2025-03-10/11:** PR #3363/commit `d6445217...` removes hidden Option I block but cites `FHIR-46330`; Jira `FHIR-46220` comment says branch merged to master.
- **2025-10-31:** Page status changes to Informative for R6.
- **2025-11-03 to 2025-11-06:** `FHIR-44047` punctuation cleanup PR #3951; `FHIR-41441` paragraph added in PR #3953.
- **2026-01-20:** Later Jira QA issues `FHIR-55135` and `FHIR-55136` are submitted for spelling/abbreviation and incomplete content on this page.

## Evidence log

- Page boundary/line counts:
  - `test -f .../4.0.1-0da2a0a84dc1/source/workflow-ad-hoc.html`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/workflow-ad-hoc.html`
  - `wc -l <old> <new>` returned 270 and 238 lines.
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-ad-hoc.html`
- Source history:
  - `git ... log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-ad-hoc.html`
  - `git ... show --stat --patch <commit> -- source/workflow-ad-hoc.html`
  - `git ... blame -L ... -- source/workflow-ad-hoc.html`
- Current page full read:
  - `view` ranges `1-120` and `121-238` on the newer source file.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-25300`
  - `bun run jira:search snapshot FHIR-46330`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-41441`
  - `bun run jira:search snapshot FHIR-44031`
  - `bun run jira:search snapshot FHIR-55135`
  - `bun run jira:search snapshot FHIR-55136`
  - `bun run jira:search snapshot FHIR-46220`
- Jira searches:
  - `bun run jira:search fts "\"workflow-ad-hoc\"" --limit 10`
  - `bun run jira:search fts "\"Workflow Pattern Examples\"" --limit 10`
  - `bun run jira:search fts "\"Option I\" \"workflow\"" --limit 10`
  - typo phrase searches for `DiagosticReport`, `unmanagable`, `fullfiller`, and `conformation of receipt`.
- Zulip searches/snapshots:
  - Initial unquoted key FTS searches failed for hyphenated Jira keys; fallback SQL used `content LIKE '%FHIR-XXXXX%'`.
  - `bun run zulip:search snapshot workflow "spec typo"`
  - `bun run zulip:search snapshot implementers "Workflow examples"`
  - `bun run zulip:search snapshot committers "ToDos"`
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira FHIR-41441`, `FHIR-44031`, `FHIR-46220`, `FHIR-46330`, `FHIR-44047`, `FHIR-25300`, `FHIR-55135`, `FHIR-55136`.
  - `bun run confluence:search fts "\"Workflow Pattern Examples\"" --limit 10`
  - `bun run confluence:search snapshot 234784905`
  - `bun run confluence:search snapshot 234784839`
  - `bun run confluence:search snapshot 239206707`
  - `bun run confluence:search snapshot 218825570`
  - `bun run confluence:search snapshot 212761627`
  - `bun run confluence:search snapshot 248715006`
  - `bun run confluence:search snapshot 234784975`
