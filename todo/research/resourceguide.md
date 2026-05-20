# resourceguide research appendix

## Scope and coverage

- Page path: `source/resourceguide.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: the page exists in both trees and is modified.
- Full newer source read end-to-end: yes, 704 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:1-704`.
- Source history count: 22 commits touching this page between the requested commits.
- Explicit Jira keys found in commit metadata/patch context: `FHIR-38682`, `FHIR-43371`, `FHIR-44047`, and `J#46596` interpreted as `FHIR-46596`.
- Jira/Zulip/Confluence searched by explicit keys and distinctive changed phrases. Important caveat: the first unquoted Zulip FTS searches for `FHIR-xxxxx` errored because FTS parsed the hyphen; rerun quoted searches found no Zulip hits for the explicit keys.
- Rendering caveat: lines `92-700` of the newer source are inside an HTML comment block. Most resource-classification table changes in the diff are source-only/commented and are not currently reader-facing. The rendered/visible portion is primarily lines `13-89` plus template includes.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, visible intro/table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:13-89` | Current rendered content affected by `FHIR-43371` and visible table/link updates. |
| Source | Commented resource-classification block | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:92-700` | Most R4 -> R6 resource list changes are inside this non-rendered block. |
| Source | Page intent text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:26` | Implements part of `FHIR-43371`. |
| Source | Chief Complaint row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:53` | Adds Observation as candidate resource. |
| Source | Family History row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:59` | Still only lists FamilyMemberHistory despite `FHIR-43371` saying to add Observation for Family History too. |
| Source | MedicationStatement visible row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:57` | Visible update from MedicationUsage to MedicationStatement. |
| Source | Proposed Supply visible link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:68` | Visible link now points to the OO incubator SupplyRequest profile. |
| Source | Stale ClinicalAssessment commented text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:148` | Commented source says `ClinicalAssessment (aka ClinicalAssessment)`. |
| Source | Malformed DeviceAlert commented markup | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:368` | Commented source has `<code>DeviceAlert<code>` instead of a closing code tag. |
| Commit | `FHIR-43371` implementation | `991a414216283bead11ce07c6173007106dca6ae`, https://github.com/HL7/fhir/commit/991a414216283bead11ce07c6173007106dca6ae | Changes page description, Chief Complaint mapping, and removes RIM Mappings; omits Family History. |
| Commit | MedicationStatement rename | `b2032629f28b8d31b9a67b46170dde873398fb0d`, https://github.com/HL7/fhir/commit/b2032629f28b8d31b9a67b46170dde873398fb0d | Implements `FHIR-38682` name change on this page. |
| Commit | ClinicalAssessment rename | `670d3a407a962cdde0ef1136fbcdea045b124f19`, https://github.com/HL7/fhir/commit/670d3a407a962cdde0ef1136fbcdea045b124f19 | Applies `FHIR-46596` wording/link rename in commented block. |
| Commit | ClinicalAssessment link fix | `25b23a94c11b75120d2cf6dbea496525c6372a57`, https://github.com/HL7/fhir/commit/25b23a94c11b75120d2cf6dbea496525c6372a57 | Lowercases the ClinicalAssessment local link before later incubator move. |
| Commit | ClinicalAssessment moved to incubator | `fad1b9cf84ef652e88947e1a13b026c62f95334e`, https://github.com/HL7/fhir/commit/fad1b9cf84ef652e88947e1a13b026c62f95334e | Changes commented table link to PC incubator after ClinicalAssessment was removed from core. |
| Commit | DeviceAlert addition | `2d67fa6bc155cb2b7480455eca4cf6727d1670d5`, https://github.com/HL7/fhir/commit/2d67fa6bc155cb2b7480455eca4cf6727d1670d5 | Adds DeviceAlert to commented source and introduces malformed code tag. |
| Commit | OO incubator links | `3b38b80cf23f9cbb306fab8fcedb293315478c32`, `01706a920f4e88452c409c2cc0b7c74f09ac51c6` | Moves SupplyRequest/SupplyDelivery/DeviceUsage references to OO incubator; second commit fixes URL path. |
| Commit | Punctuation pass | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies `FHIR-44047` e.g. punctuation changes, all in commented block for this page. |
| PR | ClinicalAssessment rename PR | https://github.com/HL7/fhir/pull/3441 | Jira comment on `FHIR-46596` links this PR; merged 2025-03-30. |
| PR | MedicationStatement rename PR | https://github.com/HL7/fhir/pull/2590 | GitHub PR search found this merged PR for `FHIR-38682`. |
| Jira | `FHIR-43371` snapshot | `bun run jira:search snapshot FHIR-43371`; https://jira.hl7.org/browse/FHIR-43371 | Formal resolution for the page intent and the missed Family History Observation mapping. |
| Jira | `FHIR-38682` snapshot | `bun run jira:search snapshot FHIR-38682`; https://jira.hl7.org/browse/FHIR-38682 | Formal rationale for MedicationUsage -> MedicationStatement. |
| Jira | `FHIR-44047` snapshot | `bun run jira:search snapshot FHIR-44047`; https://jira.hl7.org/browse/FHIR-44047 | General punctuation correction issue. |
| Jira | `FHIR-46596` snapshot | `bun run jira:search snapshot FHIR-46596`; https://jira.hl7.org/browse/FHIR-46596 | Formal ClinicalImpression -> ClinicalAssessment rename. |
| Confluence | FHIR-I minutes for `FHIR-43371` | `bun run confluence:search snapshot 239211981`; https://confluence.hl7.org/spaces/FHIRI/pages/239211981/FHIR+Infrastructure+Minutes+CC+2024-05-06 | WG minutes: page not intended to list all resources; clarify subset, update Observation mappings, remove RIM Mapping. |
| Confluence | Pharmacy minutes for `FHIR-38682` | `bun run confluence:search snapshot 144966025`; https://confluence.hl7.org/spaces/PHAR/pages/144966025/2022-10-31+Agenda+Meeting+Notes | Pharmacy vote to revert MedicationUsage name to MedicationStatement. |
| Confluence | FHIR-I WGM `FHIR-44047` | `bun run confluence:search snapshot 234784975`; https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Records `FHIR-44047 will fix`. |
| Confluence | PC R6 review context | `bun run confluence:search snapshot 256516900`; https://confluence.hl7.org/spaces/PC/pages/256516900/2024-08-08+Patient+Care+FHIR+Conference+Call | Mentions ClinicalImpression/ClinicalAssessment R6 review and planned Jira work. |
| Zulip | ClinicalAssessment later reassessment | `bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"`; https://chat.fhir.org/#narrow/stream/Patient%20Care%20WG/topic/Status%20of%20ClinicalAssessment%20resource%20(ClinicalImpression) | Later note says PC voted to remove ClinicalAssessment from R6 and mature it on Additional Resources track. |
| Zulip | ClinicalAssessment implementation discussion | `bun run zulip:search snapshot implementers "Status of ClinicalAssessment resource (ClinicalImpression)"`; https://chat.fhir.org/#narrow/stream/implementers/topic/Status%20of%20ClinicalAssessment%20resource%20(ClinicalImpression) | Discussion of ClinicalAssessment vs Observation/Condition; useful context for later removal, not direct resourceguide evidence. |

## Change summary

### Rendered/visible page changes

- Metadata/template/navigation: removed the old `<div class="col-12">` wrapper and closing `</div>` (`d7b8dad...`), changed the status table to "Responsible Owner" and removed the Maturity Level cell (`270e0ceb...`).
- Semantic guidance: `FHIR-43371` narrowed the page description from a general guide to all resources to "a subset of common clinical terms" (`resourceguide.html:26`). It also updated Chief Complaint to point to both Condition and Observation (`resourceguide.html:53`) and removed "RIM Mappings (todo)" from the visible framework list.
- Intent mismatch: `FHIR-43371` resolution also said to add Observation as a candidate resource for Family History, but current line `59` still lists only FamilyMemberHistory.
- Resource rename/link guidance: Home Meds now points to MedicationStatement instead of MedicationUsage (`resourceguide.html:57`), matching `FHIR-38682`.
- Resource moved out of core: Proposed Supply now links to the OO incubator SupplyRequest profile (`resourceguide.html:68`).

### Source-only/commented block changes

The block beginning at `resourceguide.html:92` and ending at `resourceguide.html:700` is commented out. Changes inside it are still useful source history, but not currently rendered:

- Subscription infrastructure: `Topic` -> `SubscriptionTopic`, plus `SubscriptionStatus`.
- Device/order resources: `DeviceUseStatement` -> `DeviceUsage`, and later OO-incubator links for DeviceUsage, SupplyDelivery, and SupplyRequest.
- Pharmacy: MedicationUsage -> MedicationStatement, FormularyItem added then moved to PHX incubator, MedicationKnowledge removed.
- Patient Care: ClinicalImpression -> ClinicalAssessment, then ClinicalAssessment link moved to PC incubator.
- Immunization: ImmunizationEvaluation and ImmunizationRecommendation links moved to immunization incubator.
- Device: DeviceAlert added.
- Testing resources: TestScript and TestReport table rows removed while explanatory paragraphs remain in the commented block.
- Editorial/mechanical: e.g. punctuation changes from `FHIR-44047`.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `7ef9e86a1cc9` | 2019-12-02 | Changed Topic to SubscriptionTopic | In commented block, `Topic` -> `SubscriptionTopic`. | Source-only semantic rename |
| `a8762c404cab` | 2020-04-20 | Catching up on modeling changes. | In commented block, adds `SubscriptionStatus`. | Source-only resource addition |
| `3e9f19263f1c` | 2021-03-31 | fixing dumb errors | In commented block, `DeviceUseStatement` -> `DeviceUsage`. | Source-only semantic rename |
| `d7b8dadc6213` | 2021-06-27 | update html template | Removes wrapper `<div class="col-12">`/closing `</div>`. | Template/mechanical |
| `2cdfc79c26c7` | 2022-05-09 | Initial commit for the FormularyItem resource. | In commented block, adds `FormularyItem`. | Source-only resource addition |
| `b2032629f28b` | 2023-01-25 | FHIR-38682 | Replaces MedicationUsage with MedicationStatement in visible Home Meds row and commented medication section. | Semantic/resource rename |
| `2d67fa6bc155` | 2024-07-30 | Added DeviceAlert resource | In commented block, adds DeviceAlert prose/table row; prose has malformed `<code>DeviceAlert<code>`. | Source-only resource addition plus editorial defect |
| `670d3a407a96` | 2025-01-14 | J#46596 Rename ClinicalImpression to ClinicalAssessment | In commented block, renames ClinicalImpression text and local table row. | Source-only semantic rename |
| `991a41421628` | 2025-03-04 | FHIR-43371 Guide to resources is out of date | Visible page: narrows description, adds Observation to Chief Complaint, removes RIM Mapping todo. Does not add Observation to Family History. | Semantic guidance with missed Jira item |
| `8008494e80a2` | 2025-03-24 | Merge branch 'master' into michelle-miller-46596-ClinicalImpression-renamed | Merge carries both `FHIR-43371` and ClinicalAssessment rename changes. | Merge integration |
| `25b23a94c11b` | 2025-03-31 | fix up references | In commented block, lowercases ClinicalAssessment local link. | Link fix/source-only |
| `f9a44787c450` | 2025-10-01 | remove testing resources, and various minor fixes | In commented block, removes TestScript/TestReport table rows. | Source-only resource removal |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Visible metadata table becomes "Responsible Owner" and drops maturity cell. | Metadata/template |
| `887bc2383fb7` | 2025-11-03 | FHIR-44047 | In commented block, changes several `e.g.` instances to `e.g.,`. | Editorial/source-only |
| `3b38b80cf23f` | 2025-11-05 | Remove OO resources and point to new incubator | Visible Proposed Supply link and commented DeviceUsage/Supply links point to OO incubator `oo-incubator-ig`. | Link/resource move |
| `01706a920f4e` | 2025-11-05 | fix oo links | Corrects OO incubator URLs from `oo-incubator-ig` to `oo-incubator`. | Link fix |
| `87f87a8a0389` | 2025-11-06 | Merge branch 'master' into i.e.-e.g- | Merge carries OO-incubator and punctuation changes. | Merge integration |
| `e073fb45ec6f` | 2025-11-07 | removing ImmunizationRecommendation and ImmunizationEvaluation | In commented block, points immunization resources to immunization-incubator. | Source-only link/resource move |
| `26e92f629920` | 2025-11-07 | Merge remote-tracking branch 'origin/master' | Merge carries punctuation and immunization changes. | Merge integration |
| `9987f9c0c3ce` | 2025-11-12 | Remove FormularyItem, and update status codes | In commented block, points FormularyItem to PHX incubator. | Source-only link/resource move |
| `fad1b9cf84ef` | 2025-11-12 | remove additional resources | In commented block, points ClinicalAssessment to PC incubator. | Source-only link/resource move |
| `5a4307d78b02` | 2025-11-13 | remove MedicationKnowledge | In commented block, removes MedicationKnowledge table row. | Source-only resource removal |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-38682` (Published, Persuasive with Modification, non-compatible, applied for R5): requested changing MedicationUsage back to MedicationStatement. Resolution says changing the name back while keeping remaining changes would help existing implementations. Commit `b2032629...` applies this page's visible Home Meds row and commented medication references. Confluence Pharmacy minutes `144966025` record a 2022-10-31 vote 11-0-0 to revert the resource name.
- `FHIR-43371` (Applied, Persuasive with Modification, non-substantive, applied for R6): reported the Guide to Resources was out of date and unclear. Resolution:
  1. change the page description to the current "subset of common clinical terms" sentence;
  2. add Observation as a candidate resource for Chief Complaint and Family History;
  3. remove "RIM Mappings (todo)".
  Commit `991a414...` applied items 1, 3, and Chief Complaint only. The current Family History row remains unchanged.
- `FHIR-44047` (Resolved - change required, Persuasive): broad e.g./i.e. punctuation correction. Commit `887bc238...` changes `e.g.` to `e.g.,` several times, all inside this page's commented block. Jira status remains "Resolved - change required" in the local snapshot, but for this page there is no visible reader-facing consequence.
- `FHIR-46596` (Applied, Persuasive, non-compatible, applied for R6): rename ClinicalImpression to ClinicalAssessment and replace text to reflect the new name. Commit `670d3a4...` applies the rename inside the commented block. Jira comment links PR https://github.com/HL7/fhir/pull/3441. Later source commit `fad1b9c...` points ClinicalAssessment to the PC incubator after later discussion/removal from core.

### Other Jira issues searched

- `DeviceAlert` FTS found DeviceAlert-specific tickets such as `FHIR-54468`, `FHIR-52311`, `FHIR-49276`, and others, but none of the top hits directly explained the `resourceguide.html` DeviceAlert insertion. The resourceguide DeviceAlert addition came from unkeyed commit `2d67fa6...`.
- `resourceguide` / "resource guide" FTS mostly found older historical issues and `FHIR-43371`; no later R6 issue contradicted the `FHIR-43371` resolution.
- `"Chief Complaint" Observation Condition` FTS found context-only issues, including Condition/Observation boundary tickets, but nothing directly explaining a deliberate omission of Family History from `FHIR-43371`.

### Context-only Jira hits not driving action

- Older resource guide issues (`FHIR-7471`, `FHIR-7477`, `FHIR-12894`, etc.) appeared in broad resourceguide searches but were historical context only.
- Condition/Observation boundary issues (`FHIR-26904` and similar) appeared in broad searches but did not mention this page change or `FHIR-43371`'s Family History instruction.

## Zulip evidence

- Quoted searches for `"FHIR-38682"`, `"FHIR-43371"`, `"FHIR-44047"`, and `"FHIR-46596"` found no Zulip results in the local DB. Initial unquoted issue-key searches failed because FTS parsed the hyphenated keys as expressions; these failures were corrected with quoted searches.
- Exact phrase searches for `"Guide to resources is out of date"` and `"Chief Complaint" "Family History" Observation` found no Zulip results.
- `ClinicalImpression` / `ClinicalAssessment` searches found relevant later context:
  - `#Patient Care WG > Status of ClinicalAssessment resource (ClinicalImpression)` (snapshot command above): on 2025-10-24 Michelle Miller says Patient Care voted during the September WGM to remove ClinicalAssessment from R6 and mature it on the "Additional Resources" track.
  - `#implementers > Status of ClinicalAssessment resource (ClinicalImpression)` (snapshot command above): May 2025 discussion about whether ClinicalAssessment overlaps with Observation/Condition; Lloyd McKenzie states ClinicalAssessment is not a way to represent a diagnosis/condition and is about documenting how the clinician got there. This supports later reconsideration but is not directly about `resourceguide.html`.
- `DeviceAlert` plus `resourceguide` found no Zulip hits.

## Confluence evidence

- `FHIR-43371`: FHIR-I minutes page `239211981` records that `resourceguide.html` "is not intended to list all resources"; the group would clarify the page description to list a "subset" of clinical resources, "update some mappings for Observation", and remove "RIM Mapping"; vote Persuasive with Modification 9-0-0. This aligns with Jira but is less specific than Jira's "Chief Complaint and Family History" text.
- `FHIR-38682`: Pharmacy minutes `144966025` record discussion of MedicationUsage name/status/adherence and a motion/vote 11-0-0 to accept the proposed resolution; "MedicationUsage resource name will revert to the MedicationStatement name."
- `FHIR-44047`: FHIR-I WGM page `234784975` records "`FHIR-44047 will fix`" in a tracker block.
- `FHIR-46596`: direct Confluence refs/FTS for the key found no results, but broader ClinicalImpression/ClinicalAssessment search found Patient Care page `256516900` noting R6 review work and expected Jira changes, including renaming ClinicalImpression to ClinicalAssessment.
- `DeviceAlert`: many HCD/Device pages mention DeviceAlert work, but the searched hits did not directly tie to `resourceguide.html`; not elevated to action.

## Timeline

| Date | Clock | Evidence | Notes |
|---|---|---|---|
| 2022-10-31 | Jira vote/resolution | `FHIR-38682`; Confluence `144966025` | Pharmacy votes to revert MedicationUsage to MedicationStatement, 11-0-0. |
| 2023-01-25 | Source commit | `b2032629f28b8d31b9a67b46170dde873398fb0d` | Resourceguide MedicationUsage references changed to MedicationStatement. |
| 2023-02-02 | PR merge | https://github.com/HL7/fhir/pull/2590 | Related MedicationStatement rename PR merged. |
| 2024-05-06 | WG minutes/vote | Confluence `239211981`; `FHIR-43371` vote date | FHIR-I says resourceguide is not meant to list all resources; update subset wording/Observation mappings/RIM Mapping. |
| 2024-05-23 | Jira resolution | `FHIR-44047` | Broad e.g./i.e. punctuation issue resolved as change required. |
| 2024-07-30 | Source commit | `2d67fa6bc155cb2b7480455eca4cf6727d1670d5` | DeviceAlert added to commented block. |
| 2024-08-08 | Jira vote/resolution | `FHIR-46596`; Confluence `256516900` | Patient Care approves ClinicalImpression -> ClinicalAssessment. |
| 2025-01-14 | Source commit | `670d3a407a962cdde0ef1136fbcdea045b124f19` | ClinicalAssessment rename applied inside commented block. |
| 2025-03-04 | Source commit | `991a414216283bead11ce07c6173007106dca6ae` | `FHIR-43371` applied incompletely: Family History Observation omitted. |
| 2025-03-30 | PR merge | https://github.com/HL7/fhir/pull/3441 | ClinicalAssessment rename PR merged. |
| 2025-10-24 | Later Zulip reassessment | `#Patient Care WG > Status of ClinicalAssessment resource (ClinicalImpression)` | Michelle Miller says PC voted at Sept WGM to remove ClinicalAssessment from R6 and mature it on Additional Resources track. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` punctuation changes applied in commented block. |
| 2025-11-05 to 2025-11-13 | Source commits | `3b38b80...`, `01706a9...`, `e073fb4...`, `9987f9c...`, `fad1b9c...`, `5a4307d...` | Several resources moved from core references to incubator links or removed from commented block. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/resourceguide.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html" && echo "new exists"`
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/resourceguide.html`
- Listed source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/resourceguide.html`
- Inspected meaningful commits with `git show --stat --patch` and merge commits with `git show -m --stat --patch`.
- Extracted issue-like keys from history with grep over `git log`; found `FHIR-38682`, `FHIR-43371`, `FHIR-44047`, `J#46596`.
- Pickaxe checks:
  - `git log -S 'DeviceAlert<code>' ... -- source/resourceguide.html`
  - `git log -S 'ClinicalAssessment</code> (aka ClinicalAssessment)' ... -- source/resourceguide.html`
- Read full newer source with line-numbered file reads over ranges `1-220`, `221-440`, and `441-704`; `wc -l` returned `704`.
- Jira:
  - `bun run jira:search snapshot FHIR-38682`
  - `bun run jira:search snapshot FHIR-43371`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-46596`
  - `bun run jira:search fts '"DeviceAlert"' --limit 10`
  - `bun run jira:search fts '"resourceguide" OR "resource guide" OR "Guide to resources"' --limit 10`
  - `bun run jira:search fts '"Chief Complaint" Observation Condition' --limit 10`
- Zulip:
  - Initial unquoted `FHIR-xxxxx` searches errored due FTS hyphen parsing; reran as `bun run zulip:search fts '"FHIR-43371"' --limit 20` etc., no results.
  - `bun run zulip:search fts '"Guide to resources is out of date"' --limit 20`
  - `bun run zulip:search fts '"Chief Complaint" "Family History" Observation' --limit 20`
  - `bun run zulip:search fts '"ClinicalImpression" "ClinicalAssessment"' --limit 20`
  - `bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"`
  - `bun run zulip:search snapshot implementers "Status of ClinicalAssessment resource (ClinicalImpression)"`
- Confluence:
  - `bun run confluence:search refs jira FHIR-38682`
  - `bun run confluence:search refs jira FHIR-43371`
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search refs jira FHIR-46596`
  - `bun run confluence:search fts "FHIR-43371" --limit 20`
  - `bun run confluence:search fts '"Chief Complaint" "Family History" Observation' --limit 20`
  - `bun run confluence:search fts '"ClinicalImpression" "ClinicalAssessment"' --limit 20`
  - `bun run confluence:search fts '"DeviceAlert"' --limit 20`
  - Snapshots: `239211981`, `144966025`, `234784975`, `256516900`.
- GitHub PR checks:
  - `gh pr view 3441 --repo HL7/fhir --json number,title,url,state,mergedAt,mergeCommit,headRefName,author`
  - `gh pr list --repo HL7/fhir --state all --search 'FHIR-43371' --json number,title,url,state,mergedAt,mergeCommit --limit 10` returned no PRs.
  - `gh pr list --repo HL7/fhir --state all --search 'FHIR-38682' --json number,title,url,state,mergedAt,mergeCommit --limit 10` found PR `2590`.
