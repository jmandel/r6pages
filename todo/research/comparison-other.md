# comparison-other research appendix

## Scope and coverage
- Page path: `source/comparison-other.html` (`comparison-other`). Confirmed present in both source trees; status is modified, not added/deleted/renamed.
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Read-through: the full newer source page was read end-to-end (`source/comparison-other.html` lines 1-50). The full older page was also viewed for comparison (lines 1-49).
- Source history: 5 commits touched this page between the two commits. One explicit Jira key was found in page history: `FHIR-42982`.
- Jira searches: explicit snapshot for `FHIR-42982`; FTS for `FHIRcast CCOW`, `Context Management FHIRcast`, `comparison other FHIRcast`, `CCOW retired replaced FHIRcast`, `comparison other obsolete`, and `CDSHooks FHIRcast CCOW`; context snapshot for `FHIR-37300`.
- Zulip searches: explicit `FHIR-42982` searches via SQL `LIKE` and quoted FTS; FTS for `FHIRcast CCOW`, exact phrase `"FHIRcast synchronizes healthcare applications"`, and `CCOW retired replaced FHIRcast`; snapshots for `#FHIRcast > Jan Connectathon track` and `#FHIRcast > Sept Connectathon`.
- Confluence searches: `refs jira FHIR-42982`; FTS for `FHIRcast CCOW`, `Context Management FHIRcast`, `CCOW retired replaced FHIRcast`, and `comparison other obsolete`; snapshots for pages `234784642`, `118981412`, `101359765`, and `248710900`.
- Caveats: no Zulip thread mentioning `FHIR-42982` was found. Commit metadata did not expose a PR number; a `gh pr list` search for the implementation commit timed out. Confluence minutes mention a broader page review and CDS Hooks, but the Jira resolution and applied source change are specifically about FHIRcast/CCOW.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Older page | `4.0.1-0da2a0a84dc1/source/comparison-other.html` lines 17, 27-29 | R4 metadata table and old CCOW-focused text. |
| Source | Newer page | `6.0.0-ballot4-5d67a34a13a5/source/comparison-other.html` lines 16-33 | Current R6 ballot4 metadata and FHIRcast/CCOW replacement wording. |
| Git diff | Direct comparison | `git -C .../6.0.0-ballot4-5d67a34a13a5 diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/comparison-other.html` | Shows 8 insertions/6 deletions: template/metadata churn plus FHIRcast text replacing CCOW text. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removes wrapping `div`; mechanical page template change. |
| Commit | QA changes | `dad7cf37c75822c352509e1c2e8d050408d0be18`, `9f780149387dc652bec02aa7744e52774acddbc9` | Intermediate QA edits to CCOW paragraph; mostly superseded by final FHIRcast rewrite. |
| Commit | R6 metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes page header metadata: responsible owner wording, removes maturity level cell. |
| Commit | FHIRcast rewrite | `ca8c8174b53890fb5289037045f16380e12a2bc3` | Implements `FHIR-42982`; replaces CCOW section with FHIRcast section. |
| PR | Not established | Commit metadata contains no PR reference; one `gh pr list` search for the commit timed out. | No PR evidence was used for causality. |
| Jira | FHIR-42982 | https://jira.hl7.org/browse/FHIR-42982 | Direct tracker: “FHIRcast as alternative to CCOW”; Applied, Persuasive with Modification, non-substantive clarification. |
| Jira | FHIR-37300 | https://jira.hl7.org/browse/FHIR-37300 | Context-only FHIRcast issue; resolution says FHIRcast should avoid broader session management while replacing CCOW context functions. |
| Confluence | FHIR-I minutes 2024-04-15 | `bun run confluence:search snapshot 234784642` | Direct WG vote for `FHIR-42982`: 7-0-0; notes obsolete page concern and CCOW retirement/replacement. |
| Confluence | InM FHIRcast minutes 2021-07-15 | `bun run confluence:search snapshot 118981412` | Records CCOW withdrawal discussion: no further maintenance; future options should be considered. |
| Confluence | InM WGM 2022-09-20 | `bun run confluence:search snapshot 101359765` | Mission/charter discussion says under former responsibilities, CCOW has been replaced by FHIRcast. |
| Confluence | TSC charter decision 2024-06-03 | `bun run confluence:search snapshot 248710900` | TSC decision asks InM to ensure accuracy that CCOW has been deprecated and replaced by FHIRcast. |
| Zulip | FHIRcast phrase source | `bun run zulip:search snapshot FHIRcast "Jan Connectathon track"`; `... "Sept Connectathon"` | Exact sentence “FHIRcast synchronizes healthcare applications…” appears in 2018/2019 FHIRcast connectathon reports. |
| Web | CCOW product brief | https://www.hl7.org/implement/standards/product_brief.cfm?product_id=1 | Current state Retired; description says CCOW is being replaced by HL7 FHIRCast. |
| Web | FHIRcast product brief | https://www.hl7.org/implement/standards/product_brief.cfm?product_id=513 | Confirms FHIRcast is active STU and describes real-time synchronization of disparate healthcare applications. |

## Change summary

### Page metadata/template/navigation — metadata/template/navigation, mechanical/noise
- Removed old `<div class="col-12">` wrapper and closing `</div>` as part of a template update. No page-specific content effect was identified.
- Header table changed from “FHIR Work Group / Maturity Level: N/A / Standards Status: Informative” to “Responsible Owner: FHIR Work Group / Standards Status: Informative.” This is page metadata/template churn; the standards status remains Informative.

### CCOW section replaced by FHIRcast section — semantic guidance, non-substantive clarification
- R4 heading `Context Management Specifications (CCOW)` and the paragraph describing CCOW as the context synchronization standard were replaced with `Context Management (FHIRCast)` and a short FHIRcast overview.
- New text says FHIRcast synchronizes healthcare applications in real time to show the same clinical content to a common user, gives a radiologist/PACS/dictation example, and states that CCOW was an earlier context synchronization specification that has been retired and replaced by FHIRcast.
- This matches `FHIR-42982`'s intent to mention the native FHIR standard for patient/context synchronization and CCOW's deprecation/replacement status.
- The old text about using FHIR resources as an alternative CCOW implementation technology and using CCOW HL7 V2 mappings to identify equivalent FHIR data elements was removed. That removal is consistent with replacing the obsolete CCOW-centered framing.
- No new SHALL/SHOULD requirements, REST/search/operation semantics, or terminology binding changes were introduced. The radiologist sentence is an illustrative example only.

### Intermediate QA edits — mechanical/noise
- Two 2023 QA commits briefly changed punctuation and `HL7 v2`/`HL7 V2` casing in the old CCOW paragraph. These are editorial/mechanical and are superseded by the final FHIRcast rewrite.

### Unchanged content — no change
- EHR-FM, Arden Syntax, and Virtual Medical Record paragraphs are unchanged from R4 to R6 ballot4.
- The current page contains a minor case inconsistency (`FHIRCast` in the heading vs `FHIRcast` in body/Jira/product brief), but this review did not find evidence that it creates a substantive reader-facing problem.

## Source history

| Commit | Date | Subject | Page impact | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes opening/closing `div class="col-12"`. | Mechanical/template. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Changes `etc.)` to `etc..)` and `HL7 v2` to `HL7 V2`. | Editorial/QA, partly erroneous and superseded. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | more QA | Restores `etc.)`; leaves `HL7 V2` until the paragraph is later replaced. | Editorial/QA. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changes metadata table to “Responsible Owner” and removes `Maturity Level: N/A`; status remains Informative. | Metadata/template, not page substance. |
| `ca8c8174b53890fb5289037045f16380e12a2bc3` | 2025-11-03 | FHIR-42982 FHIRcast as alternative to CCOW | Replaces old CCOW paragraph with FHIRcast/current-CCOW-retired text. | Substantive page guidance, Jira-backed non-substantive clarification. |

## Jira evidence

### Explicit Jira keys from commits/patches/source comments
- `FHIR-42982` is the only explicit Jira key found in page history.
  - Status: Applied; Resolution: Persuasive with Modification; Change Impact: Non-substantive; Change Category: Clarification; Applied for Version: R6.
  - Created 2023-10-20; Resolved/Voted 2024-04-15; Updated 2025-11-02.
  - Description: now that FHIRcast STU has been published, update the section to mention a native FHIR standard for patient synchronization so CCOW is no longer the only option.
  - Resolution: update CCOW description to mention retirement/replacement per the CCOW product brief and add a FHIRcast section.
  - Related URL points to `comparison-other.html#7.18.5.2`, matching this page/section.

### Other plausible Jira issues
- `FHIR-37300` surfaced in `FHIRcast CCOW` search but is context-only. It discusses FHIRcast scope around login/session events and says FHIRcast should avoid general session management while replacing CCOW. It does not request or explain the `comparison-other.html` change.
- Broader `Context Management FHIRcast` search returned FHIRcast-specific ballot/issues (`FHIR-37324`, `FHIR-37224`, `FHIR-25656`, etc.) but not the FHIR core comparison page change.

### Context-only or failed Jira searches
- `comparison other FHIRcast`: no results.
- `comparison other obsolete`: no results.
- `CDSHooks FHIRcast CCOW`: no results.
- `CCOW retired replaced FHIRcast`: only `FHIR-42982`.

## Zulip evidence

- No Zulip message mentioning `FHIR-42982` was found using SQL `LIKE '%FHIR-42982%'` or quoted FTS.
- FTS `"FHIRcast synchronizes healthcare applications"` found the exact sentence in two `#FHIRcast` connectathon reports:
  - `#FHIRcast > Sept Connectathon` on 2018-09-30.
  - `#FHIRcast > Jan Connectathon track` on 2019-01-13.
  These threads are background evidence for the wording used in the new page text and for early FHIRcast implementation activity, not formal disposition evidence for the R6 page change.
- FTS `FHIRcast CCOW` found background discussions such as CCOW-to-FHIRcast adapters, “FHIRcast the lightweight CCOW,” and implementers considering FHIRcast as a CCOW replacement. None was found to challenge the `FHIR-42982` implementation or identify a later reversal.
- FTS `CCOW retired replaced FHIRcast` found no Zulip results.

## Confluence evidence

- `FHIR Infrastructure Minutes CC 2024-04-15` (`snapshot 234784642`) directly records the `FHIR-42982` discussion and vote. It says the whole comparison page needs review and some information is obsolete; for this ticket, the group would mention alternatives to CCOW including FHIRcast (and the minutes also mention CDS Hooks), and cites HL7 statements that CCOW is retired and replaced by FHIRcast. Motion: Persuasive with Modification, Josh Mandel / Yunwei Wang, 7-0-0.
- `2021-07-15 InM FHIRCast WG Agenda/Minutes` (`snapshot 118981412`) records CCOW withdrawal discussion: “CCOW is still a standard: There will be no further maintenance. In the future other options should be considered.”
- `2022-09-20 InM Sept WGM Q1` (`snapshot 101359765`) says InM is responsible for content synchronization standards, FHIRcast is one, and former responsibilities should indicate CCOW has been replaced by FHIRcast.
- `Updated 2024 InM Mission and Charter` (`snapshot 248710900`) records a TSC decision to make sure it is accurate that CCOW has been deprecated and replaced by FHIRcast.
- FTS `comparison other obsolete` found no Confluence pages beyond the direct `FHIR-42982` minutes context above.

## Timeline

| Date | Kind | Event |
|---:|---|---|
| 2018-09-30 | Zulip/background | `#FHIRcast > Sept Connectathon` uses the sentence “FHIRcast synchronizes healthcare applications in real time…” while reporting early FHIRcast work. |
| 2019-01-13 | Zulip/background | `#FHIRcast > Jan Connectathon track` repeats the same sentence and describes planned HL7 balloting. |
| 2021-07-15 | Confluence/InM | CCOW withdrawal discussion says no further maintenance and future options should be considered. |
| 2022-09-20 | Confluence/InM | InM mission/charter discussion says CCOW has been replaced by FHIRcast. |
| 2023-10-20 | Jira created | `FHIR-42982` created: update comparison page because FHIRcast STU is available and CCOW is no longer the only option. |
| 2024-04-15 | Jira vote / Confluence minutes | FHIR-I approves `FHIR-42982` Persuasive with Modification, 7-0-0. |
| 2024-04-15 | Jira resolved | `FHIR-42982` resolved with instruction to mention CCOW deprecation/replacement and add FHIRcast section. |
| 2024-06-03 | Confluence/TSC | TSC mission/charter decision says to ensure accuracy that CCOW has been deprecated and replaced by FHIRcast. |
| 2025-10-31 | Source commit | `270e0ceb...` applies metadata/table changes for R6. |
| 2025-11-03 | Source commit | `ca8c817...` implements `FHIR-42982` in `source/comparison-other.html`. |
| Not established | PR merge | No PR number/merge date was found in commit metadata; one `gh pr list` search for the implementation commit timed out. |
| R6 ballot4 tree | Publication/source boundary | New wording is present in `6.0.0-ballot4-5d67a34a13a5`; absent from R4 4.0.1 tree. |
| Not found | Later reassessment | No later Jira/Zulip/Confluence evidence was found that reverses or objects to the applied FHIRcast/CCOW wording. |

## Evidence log

- `test -f .../4.0.1.../source/comparison-other.html` and `test -f .../6.0.0-ballot4.../source/comparison-other.html`: confirmed page exists in both trees.
- Direct rename-aware `git diff --find-renames 0da2a0a... 5d67a34... -- source/comparison-other.html`: established 8 insertions/6 deletions and no rename.
- `git log --reverse --date=short --format=... 0da2a0a..5d67a34 -- source/comparison-other.html`: found 5 page-touching commits.
- `git show --stat --patch` on all 5 commits: separated mechanical template/QA/metadata churn from `FHIR-42982` FHIRcast rewrite.
- `git log -S` for `FHIRcast synchronizes healthcare applications`, `replaced by FHIRcast`, `Context Management (FHIRCast)`, and `CCOW is a standard`: confirmed exact FHIRcast wording enters this page in `ca8c817...`; old CCOW phrase dates back before R4 and is removed by the same commit.
- `bun run jira:search snapshot FHIR-42982`: supplied formal rationale, vote, impact, related URL/page/section, and applied status.
- Jira FTS searches listed above: found `FHIR-42982` as the only direct page issue; `FHIR-37300` and other FHIRcast issues are context-only.
- Zulip searches listed above: no `FHIR-42982` mention; exact phrase snapshots established background wording provenance but not formal page-change rationale.
- Confluence `refs jira FHIR-42982` and `snapshot 234784642`: supplied direct meeting/vote evidence and caveat about broader page review/CDS Hooks.
- Confluence snapshots `118981412`, `101359765`, `248710900`: corroborated CCOW no-maintenance/retirement/replacement context.
- Web fetches of HL7 product briefs `product_id=1` and `product_id=513`: corroborated CCOW current state Retired and FHIRcast active STU description.
- Full newer source read (`view` lines 1-50): verified final page text and unchanged neighboring sections.
