# exchange-module research appendix

## Scope and coverage
- Page path: `source/exchange-module.html`; label: `exchange-module`.
- Compared R4 4.0.1 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` (tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`) to R6 ballot4 `6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` (tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`).
- Boundary confirmed: `source/exchange-module.html` exists in both trees; direct rename-aware diff reports `M source/exchange-module.html` with 25 insertions and 23 deletions.
- Newer page was read end-to-end from local source lines 1-173 after diff/history/community searches.
- Source-history count for `old..new -- source/exchange-module.html`: 10 commits. Explicit issue keys found in commit subjects/bodies/patch context, normalized to Jira syntax: `FHIR-18993`, `FHIR-18994`, `FHIR-25928`, `FHIR-29315`, `FHIR-32594`, `FHIR-37829`, `FHIR-38005`, `FHIR-38923`, `FHIR-44047`.
- Jira searched by explicit keys, page/path labels, exact changed phrases, and subscription/exchange terms. Zulip searched by explicit keys first (quoted after initial hyphen parsing failures), exact changed phrases, and subscription/exchange topics. Confluence searched by Jira refs and FTS terms, with snapshots/excerpts for FHIR-I minutes.
- Caveats: source files are not the rendered publication; some resource links such as `subscription.html` are generated artifacts and are not present as raw `source/*.html` files. No known Jira keys were supplied by the user. Some broad commits bundled unrelated issues, so causality is only asserted when Jira/Confluence/Zulip/source agree.

## Quick links and locators
| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source lines | New page index and exchange guidance | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/exchange-module.html:28-45` | Shows the added Subscriptions index entry and added link to `exchanging.html`. |
| Source lines | New Storage and Subscriptions sections | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/exchange-module.html:103-120` | Contains the storage hyperlink and current subscription wording. |
| Source lines | New roadmap | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/exchange-module.html:143-168` | Contains R4->R6 roadmap wording changes. |
| Source lines | R4 baseline Storage/roadmap/ballot note | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/exchange-module.html:97-164` | Baseline for storage link, roadmap text, and removed ProtocolBuffers ballot note. |
| Source lines | Current subscriptions page wording | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/subscriptions.html:18-20` | FHIR-47279 updated this page away from “proactive event notifications”. |
| Commit | Add Subscriptions section | `dbeb5e6a7aa3cba0705a1c337c0eaf6174d32eb2` / https://github.com/HL7/fhir/commit/dbeb5e6a7aa3cba0705a1c337c0eaf6174d32eb2 | Adds Subscriptions Framework to exchange-module; commit subject is `FHIR#29315` and body includes `FHIR#25928`. |
| Commit | Storage link | `5a78e17672d73d37f6bfd5d2ccc0f6f8b4f5c992` / https://github.com/HL7/fhir/commit/5a78e17672d73d37f6bfd5d2ccc0f6f8b4f5c992 | Implements FHIR-37829 by linking “here” to `storage.html`. |
| Commit | HRex/exchanging page link | `6c16d55195153a98dde3546c7086afdb0b87a13e` / https://github.com/HL7/fhir/commit/6c16d55195153a98dde3546c7086afdb0b87a13e | Implements FHIR-38005-related link to `exchanging.html`. |
| Commit | Roadmap update | `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` / https://github.com/HL7/fhir/commit/0b361f316d50a2c68fb7bdf55f7e8b59f937832c | Updates REST normative-status wording and fixes “has only be”. |
| Commit | FHIR-47279 source fix elsewhere | `7b84f997d6583c78a484900ae9fac156c9f3a0f1` / https://github.com/HL7/fhir/commit/7b84f997d6583c78a484900ae9fac156c9f3a0f1 | Replaces the same “proactive event notifications” wording in `source/subscriptions.html`, but not in `exchange-module.html`. |
| PR | R6 Tickets | https://github.com/HL7/fhir/pull/3967 | Merged 2025-11-09; file list includes `source/subscriptions.html`, not `source/exchange-module.html`. |
| Jira | FHIR-25928 | https://jira.hl7.org/browse/FHIR-25928 | Formal request to add Subscription to “Exchanging Resources”; resolution: add as sibling to Messaging and Documents. |
| Jira | FHIR-37829 | https://jira.hl7.org/browse/FHIR-37829 | Formal request to link the persistent/database storage “here” text to `storage.html`. |
| Jira | FHIR-38005 | https://jira.hl7.org/browse/FHIR-38005 | Formal request to move HRex exchange guidance into core and link to it from the Exchange module. |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047 | R6 technical correction for `e.g.,`/`i.e.,` punctuation; page changed at Services/SOA line. |
| Jira | FHIR-47279 | https://jira.hl7.org/browse/FHIR-47279 | Later R6 subscription issue says subscriptions are not “proactive” and resolves to replacement wording. |
| Zulip topic | Adding Subscription to Exchanging Resources | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/adding%20Subscription%20to%20%22Exchanging%20Resources%22 | Shows rationale and disagreement about whether Subscriptions belongs beside REST/Messaging/Documents. |
| Zulip topic | R5 Feedback | `bun run zulip:search snapshot subscriptions "R5 Feedback"` | Gino Canessa announced a merged R5 subscription pass bundling FHIR#29315 and related issues. |
| Zulip topic | Large Message Bundle | `bun run zulip:search snapshot subscriptions "Large Message Bundle"` | Context for FHIR-29315; not the Exchange module change itself. |
| Zulip topic | R6 Subscription Block Vote | `bun run zulip:search snapshot "fhir/infrastructure-wg" "R6 Subscription Block Vote"` | Lists FHIR-47279 as Persuasive with Modification before the formal vote. |
| Confluence page | FHIR-I minutes 2020-02-24 | https://confluence.hl7.org/spaces/FHIRI/pages/76160393/FHIR+Infrastructure+Minutes+CC+20200224 | Initial Subscriptions/Messaging discussion; motion to add Subscriptions was tabled after concerns. |
| Confluence page | FHIR-I minutes 2020-04-20 | https://confluence.hl7.org/spaces/FHIRI/pages/82903557/FHIR+Infrastructure+Minutes+CC+20200420 | FHIR-25928 approved: “Will add as sibling to messaging and documents on that page” 9-0-0. |
| Confluence page | FHIR-I minutes 2022-08-29 | https://confluence.hl7.org/spaces/FHIRI/pages/108307268/FHIR+Infrastructure+Minutes+CC+2022-08-29 | Votes for FHIR-38005 and FHIR-37829. |
| Confluence page | FHIR-I minutes 2025-03-31 | https://confluence.hl7.org/spaces/FHIRI/pages/325460673/FHIR+Infrastructure+Minutes+CC+2025-03-31 | Block vote includes FHIR-47279 “subscriptions are not proactive” 17-0-0. |
| Local command | Direct diff | `git -C <new-tree> diff --find-renames 0da2a0a8..5d67a34a -- source/exchange-module.html` | Establishes exact R4->R6 page delta. |
| Local command | Source history | `git -C <new-tree> log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a8..5d67a34a -- source/exchange-module.html` | Establishes commit list and count. |

## Change summary
- **Subscriptions added to the Exchange module — semantic guidance; not normative text.** R6 adds a Subscriptions Framework entry in the index and a new section describing event notifications and discovery via `Subscription`, `SubscriptionTopic`, and `CapabilityStatement`. This is the largest content change. It traces to FHIR-25928’s “add as sibling to Messaging and Documents” decision, implemented in the multi-ticket subscription commit `dbeb5e6a...`. No SHALL/SHOULD conformance requirement was added on this page.
- **New link to “Approaches to Exchanging FHIR Data” — semantic guidance/navigation.** R6 adds a paragraph linking to `exchanging.html` and describing guidance for choosing an architectural approach. This traces to FHIR-38005 and the HRex-to-core migration discussion.
- **Persistent storage link fix — references/links.** R4 plain text “described here” became a hyperlink to `storage.html`, exactly matching FHIR-37829’s resolution.
- **Roadmap updates — semantic guidance/editorial.** RESTful API roadmap now says “mostly published as Normative” with a link to `history.html#normative`; Messaging grammar was fixed; the Database/Persistent Storage roadmap no longer says “though RDF itself is not getting much use.” I found no Jira hit for the “mostly published as Normative” or RDF phrase changes; they appear to be editorial/source-maintenance changes.
- **Template/metadata/navigation churn — mechanical or version boilerplate.** Removal of outer `<div class="col-12">`, conversion/removal of ballot-note macros, and “Responsible Owner: Work Group” header wording are broad template or publication-process changes.
- **Editorial punctuation — editorial only.** FHIR-44047 changes “e.g. a SOA” to “e.g., a SOA”. The line still lacks a space before the parenthetical in source (`</a>(e.g., a SOA)`).
- **Removed ProtocolBuffers balloter note — version/ballot boilerplate.** The R4 STU note inviting ballot comments about ProtocolBuffers was converted to a ballot-note macro in 2022 and removed in 2023 by a broad “remove notes for balloters” commit associated with FHIR-38923, whose issue itself was about Operations for Large Resources, not this Exchange-module note.
- **No direct REST/search/operation semantics changed on this page.** Existing REST, Messaging, Documents, Services, Security, and SMART paragraphs are substantively unchanged except for links/editorial wording noted above.

## Source history
| Date | Commit | Subject | Page effect | Classification |
|---|---|---|---|---|
| 2020-11-10 | `dbeb5e6a7aa3cba0705a1c337c0eaf6174d32eb2` | `FHIR#29315` (body also `FHIR#32594`, `FHIR#25928`, `FHIR#18994`, `FHIR#18993`) | Adds Subscriptions Framework index entry and section. | Semantic guidance/substantive page structure; issue-bundled commit. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removes outer `div.col-12`. | Mechanical/template. |
| 2022-08-29 | `5a78e17672d73d37f6bfd5d2ccc0f6f8b4f5c992` | `FHIR-37829` | Links storage “here” text to `storage.html`. | Link/reference fix. |
| 2022-09-05 | `6c16d55195153a98dde3546c7086afdb0b87a13e` | `FHIR-38005 - Added HRex exchanging pages` | Adds paragraph linking to `exchanging.html`. | Semantic guidance/navigation. |
| 2022-09-06 | `23a31a590b7b03840e4f5946c17b6ec6e0e54665` | `update all ballot and stu notes` | Converts ProtocolBuffers STU note into `[%ballot-note dstu%]`. | Mechanical/ballot-template. |
| 2023-02-21 | `9510c3ae69f5eb4e2d14fbccba5bb5cfd2312fc0` | `FHIR-38923 Feedback on Operations for Large Resources + remove notes for balloters` | Removes ProtocolBuffers balloter note from this page. | Version/ballot boilerplate; FHIR-38923 is not about this page. |
| 2023-03-09 | `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` | `update roadmaps` | Updates REST normative-status roadmap wording and fixes “has only been”. | Semantic guidance/editorial. |
| 2025-10-22 | `8244937cafb494f6c637de64b22982826c5533db` | `Fix extensibility example in RDF; Fix links; Editorial improvements & typos` | Removes “though RDF itself is not getting much use” from storage roadmap. | Editorial/broad cleanup. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Changes header label to “Responsible Owner: Work Group”. | Metadata/template. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | Changes `e.g. a SOA` to `e.g., a SOA`. | Editorial punctuation. |

## Jira evidence
### Explicit Jira keys from commits/patches
- **FHIR-25928 — strong evidence for the Subscriptions addition.** Snapshot says “Adding Subscription to ‘Exchanging Resources’ section,” resolution “Will add it as a sibling to Messaging and Documents,” change impact Non-substantive, vote Rick Geimer/John Moehrke 9-0-0 on 2020-04-20, applied for R5. The page-changing commit `dbeb5e6a...` includes `FHIR#25928` in its body, and pickaxe `-S 'Subscriptions Framework'` identifies that commit.
- **FHIR-29315 — explicit commit subject, but mostly context for the bundled subscription commit.** Snapshot is about `Subscription.maxCount` and notification bundle limits; it links the same commit `dbeb5e6a...`. It explains why the commit was a multi-ticket subscription pass, but not why `exchange-module.html` gained a Subscriptions section.
- **FHIR-18993 / FHIR-18994 / FHIR-32594 — explicit in `dbeb5e6a...` body but context-only for this page.** SQL summaries show subscription security or CQI expansion-parameters topics, not the Exchange-module text.
- **FHIR-37829 — strong evidence for the storage link.** Snapshot requests linking the persistent/database storage text to `storage.html`; resolution says “Will correct ‘here’ to be a hyperlink to storage.html.” Commit `5a78e176...` does exactly that.
- **FHIR-38005 — strong evidence for the `exchanging.html` link.** Snapshot asks to move Da Vinci HRex exchange guidance into core and says “Update the Exchange module to include a link to this page too.” Commit `6c16d551...` adds the paragraph.
- **FHIR-38923 — weak/context-only for this page.** Snapshot is about Operations for Large Resources and PATCH overlap. The commit subject also says “remove notes for balloters,” and the page effect is only removing the ProtocolBuffers balloter note.
- **FHIR-44047 — evidence for punctuation cleanup.** Snapshot requests correcting `e.g.,`/`i.e.,` punctuation throughout R6. Commit `887bc238...` changes the Services/SOA `e.g.` punctuation on this page.

### Other plausible issues
- **FHIR-47279 — important current-page mismatch, not part of page history.** Jira says “Subscriptions - subscriptions are not proactive,” quotes the wording “Subscriptions are used to establish proactive event notifications…”, and resolves to “Subscriptions are used to establish a request for event or change notifications…”. Commit `7b84f997...` applies that replacement in `source/subscriptions.html`; `source/exchange-module.html:115` still says “proactive event notifications.”
- **FHIR-28817 / FHIR-46473 — HRex/core migration context.** Searches for `exchange-module` and “Approaches to Exchanging FHIR Data” found HRex harmonization/migration issues. They support the broader HRex-to-core story but did not directly change this page in the old..new source history.

### Context-only or keyword-collision hits
- `FHIR-50278` matched “Subscriptions Framework” + exchange terms but is a FHIR-cow issue about messaging rationale, not this page.
- `FHIR-30834`, `FHIR-37248`, and `FHIR-35297` matched the “Approaches to Exchanging FHIR Data” phrase in IG contexts, not core `source/exchange-module.html`.
- `FHIR-55949` matched “Responsible Owner”/“Work Group” terms but concerns Devices workgroup naming, not this page.

## Zulip evidence
- **`#fhir/infrastructure-wg > adding Subscription to "Exchanging Resources"`** is the key informal rationale thread. On 2020-02-05 Eric Haas proposed adding Subscriptions/FHIRCast and comparing/contrasting with messaging. The 2020-02-24 FHIR-I minutes record concerns from Grahame (“not like apples to apples”), Bas (Subscriptions require REST to set up), and others before tabling the first motion. Later in the Zulip thread, Gino Canessa said FHIR-25928 had approval for adding “something” to the section but the Jira was “decidedly thin on details”; John Moehrke noted a governance concern about approved CRs lacking precise changes.
- **`#subscriptions > R5 Feedback`** explains why `dbeb5e6a...` bundles multiple subscription issues. On 2020-11-10 Gino Canessa posted a pass through open R5 subscription Jira issues on a branch; on 2020-11-18 he posted the updated table “since this has been merged.” This supports treating FHIR-29315 as commit-context, not the specific reason for the Exchange-module addition.
- **`#subscriptions > Large Message Bundle`** is context for FHIR-29315. It discusses max/pagination behavior for notification bundles and does not address the Exchange-module index/section.
- **`#fhir/infrastructure-wg > R6 Subscription Block Vote`** lists FHIR-47279 as “Persuasive with Modification: Subscriptions - subscriptions are not proactive” in the 2025-03-24 block vote request. This aligns with Jira and Confluence evidence for the current-page stale wording.
- Background-only searches: quoted Zulip key searches found no hits for FHIR-37829, FHIR-38923, or FHIR-44047. Exact phrase search for “proactive event notifications” found users quoting or discussing the old wording, but the decisive rationale is FHIR-47279 plus the FHIR-I block vote.

## Confluence evidence
- **FHIR-I minutes 2020-02-24 (`76160393`)** record the initial Subscriptions/Messaging discussion. The motion to add Subscriptions to `exchange-module.html` was tabled after concerns about whether Subscriptions belonged beside REST, Messaging, and Documents.
- **FHIR-I minutes 2020-04-20 (`82903557`)** record FHIR-25928 as “Will add as sibling to messaging and documents on that page,” Persuasive, Rick Geimer/John Moehrke 9-0-0.
- **FHIR-I minutes 2022-08-29 (`108307268`)** record FHIR-38005 as Persuasive with Modification (14-0-1) and FHIR-37829 as “Should point to the storage page,” Persuasive (13-0-0).
- **FHIR-I minutes 2023-02-20 (`156543147`)** record FHIR-38923 as Persuasive with Modification (13-0-0), supporting the issue disposition but not specifically the Exchange-module ballot-note removal.
- **FHIR-I WGM minutes 2024-05 Dallas (`234784975`)** include `FHIR-44047 will fix` among prior for-comment ballot issues, consistent with the punctuation cleanup.
- **FHIR-I minutes 2025-03-31 (`325460673`)** record the Subscriptions block vote including FHIR-47279 “subscriptions are not proactive,” with motion Gino Canessa/Bas van den Heuvel 17-0-0.

## Timeline
| Date | Type | Event |
|---|---|---|
| 2019-10-30 | Source boundary | Old R4 source commit `0da2a0a84dc1...` (`Corrected typo.`). |
| 2020-02-05 | Zulip discussion | Eric Haas opens discussion about adding Subscriptions/FHIRCast to the exchange documentation area. |
| 2020-02-24 | WG minutes | FHIR-I discusses adding Subscriptions to `exchange-module.html`; motion tabled after scope/placement concerns. |
| 2020-04-20 | WG vote / Jira | FHIR-25928 approved to add Subscriptions as sibling to Messaging/Documents, 9-0-0. |
| 2020-10-19 | Zulip/Jira | Large Message Bundle thread leads to FHIR-29315 about subscription max counts. |
| 2020-11-09 | Jira/WG vote | FHIR-29315 resolved Persuasive with Modification. |
| 2020-11-10 | Source commit | `dbeb5e6a...` adds Subscriptions Framework to `exchange-module.html` as part of a multi-ticket subscription pass. |
| 2020-11-18 | Zulip reassessment | Gino Canessa posts that the R5 subscription issue table has been merged. |
| 2022-08-29 | Jira/WG vote/source | FHIR-37829 approved and committed as storage link; FHIR-38005 approved for HRex guidance migration/linking. |
| 2022-09-05 | Source commit | `6c16d551...` adds `exchanging.html` link to the Exchange module. |
| 2022-09-06 | Source commit | Ballot/STU note template conversion. |
| 2023-02-20 | Jira/WG vote | FHIR-38923 approved; issue itself concerns Operations for Large Resources. |
| 2023-02-21 | Source commit | `9510c3ae...` removes balloter notes, including ProtocolBuffers note on this page. |
| 2023-03-09 | Source commit | Roadmap wording updated. |
| 2024-05-23 | Jira/WG process | FHIR-44047 resolved to review/fix `e.g.,`/`i.e.,` punctuation in R6. |
| 2025-03-31 | WG vote | FHIR-47279 included in Subscriptions block vote, 17-0-0. |
| 2025-10-31 | Source commit | `7b84f997...` updates `source/subscriptions.html` to remove “proactive event notifications”; `exchange-module.html` not touched. Same day `270e0ceb...` changes Exchange-module header metadata. |
| 2025-11-03 | Source commit | `887bc238...` applies FHIR-44047 punctuation to Exchange module Services/SOA text. |
| 2025-11-09 | PR merge | HL7/fhir PR #3967 merged; relevant files include `source/subscriptions.html`, not `source/exchange-module.html`. |
| 2025-12-18 | Source boundary/publication | New R6 ballot4 source commit `5d67a34a13a5...` (`bump version for publication`). |

## Evidence log
- `test -f <old>/source/exchange-module.html` and `test -f <new>/source/exchange-module.html`; `wc -l` returned 171 lines old and 173 lines new.
- `git diff --find-renames --stat/name-status old new -- source/exchange-module.html` confirmed `M` status and no rename.
- `git diff --find-renames --unified=80 old new -- source/exchange-module.html` separated content changes from template/editorial churn.
- `git log --reverse --date=short --format='%H%x09%ad%x09%s' old..new -- source/exchange-module.html` found 10 page-changing commits.
- `git show --stat --patch <commit> -- source/exchange-module.html` inspected all 10 commits and identified which changes were mechanical versus meaningful.
- Pickaxe commands confirmed first/only page-change commits for exact phrases: `Subscriptions Framework` and `proactive event notifications` -> `dbeb5e6a...`; `Approaches to Exchanging FHIR Data` -> `6c16d551...`; storage hyperlink -> `5a78e176...`; `mostly published as Normative` -> `0b361f3...`.
- Jira snapshots run for FHIR-25928, FHIR-29315, FHIR-37829, FHIR-38005, FHIR-38923, FHIR-44047, and FHIR-47279. SQL summarized the remaining explicit keys and context-only hits.
- Jira failed/no-hit searches that matter: exact `"mostly published as Normative"`, `"No breaking changes are expected" "RESTful API"`, and `"RDF itself is not getting much use"` found no Jira issue; those roadmap changes remain source-maintenance/editorial without a found tracker.
- Initial Zulip FTS searches for unquoted hyphenated keys such as `FHIR-25928` failed with FTS parsing errors (`no such column`); reran successfully as quoted phrases, e.g. `bun run zulip:search fts "\"FHIR-25928\""`.
- Zulip snapshots/SQL excerpts were used for `fhir/infrastructure-wg > adding Subscription to "Exchanging Resources"`, `subscriptions > R5 Feedback`, `subscriptions > Large Message Bundle`, and `fhir/infrastructure-wg > R6 Subscription Block Vote`.
- Confluence `refs jira` searches found FHIR-I minute pages for FHIR-25928, FHIR-29315, FHIR-37829, FHIR-38005, FHIR-38923, FHIR-44047, and FHIR-47279; snapshots/excerpts were read for the pages cited above.
- `gh pr view 3967 --repo HL7/fhir` verified PR #3967 was merged 2025-11-09 and relevant files include `source/subscriptions.html` but not `source/exchange-module.html`.
- Local link-target checks confirmed `exchanging.html`, `storage.html`, `history.html#normative`, and other narrative pages exist in source. Generated resource pages (`subscription.html`, `subscriptiontopic.html`, `capabilitystatement.html`) are not raw source files, so their absence in the source tree was not treated as a broken rendered link.
