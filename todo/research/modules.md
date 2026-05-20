# modules research appendix

## Scope and coverage

- Page path: `source/modules.html`
- Old version/tree: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/tree: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: `source/modules.html` exists in both trees; detected status is modified, not added/deleted/renamed.
- Page read end-to-end: yes, the newer `source/modules.html` is 105 lines and was read in full. I also checked `source/modules-fragment.html` for context because the page includes `[%file modules-fragment%]`.
- Source history: 11 commits touched `source/modules.html` between the old and new commits.
- Explicit Jira keys found in commit subjects/patches/snapshots: `FHIR-19523`, `FHIR-22702`, `FHIR-23809`, `FHIR-31702`, `FHIR-31701`, `FHIR-22752`, `FHIR-19572`, `FHIR-33977`.
- Jira searched/snapshotted: all eight explicit keys; phrase searches for the distinctive added/changed text.
- Zulip searched: explicit keys via SQL `LIKE` after unquoted FTS searches failed on hyphenated keys; distinctive changed phrases; one relevant thread snapshot for `FHIR-31702`.
- Confluence searched: refs and FTS for all explicit keys; snapshots for the two relevant FHIR-I minutes pages found for `FHIR-31702` and `FHIR-33977`.
- Caveats: no PR was found for most page-specific changes beyond Jira comments and source commits. The Confluence hit for `FHIR-22752` looked context-only/mismatched from the snippet and was not used as evidence for the modules grammar fix.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/modules.html:1` | Baseline page |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:1` | Target page, read end-to-end |
| Source | Current changed bullets | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:35-44` | Conformance bullet, Linked Data removal, grammar/current wording |
| Source | Current module descriptions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:61-76` | Security/Privacy description and level-label wording |
| Source | Foundation anchors | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/foundation-module.html:19-79` | `modules.html` links to `foundation-module.html#uses`, but this source has no `uses` anchor |
| Source | Other `#uses` anchors | `terminology-module.html:129`, `secpriv-module.html:159`, `conformance-module.html:146`, `workflow-module.html:105` | Confirms the neighboring module links do have `uses` anchors |
| Commit | Linked Data removal | `142ad7624ca77d81a9463a6ddbd278f521a109da` / `https://github.com/HL7/fhir/commit/142ad7624ca77d81a9463a6ddbd278f521a109da` | Removes stale "Linked Data" from modules page; commit subject also mentions unrelated search Jira keys |
| PR | Apply search related JIRA fixes | `https://github.com/HL7/fhir/pull/1282` | Jira `FHIR-23809`, `FHIR-19523`, and `FHIR-22702` comments point here; merged 2021-06-08 |
| Commit | HTML template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removes page wrapper `<div class="col-12">` |
| Commit | Security/Privacy description | `6cc2dfb03c09fa1bbd07ae21857553f7df22090c` / `https://github.com/HL7/fhir/commit/6cc2dfb03c09fa1bbd07ae21857553f7df22090c` | Applies `FHIR-31702` text |
| Commit | Typo: "used" | `ae60195a1ce9c512c4f93d1443a903e2acd41c7a` / `https://github.com/HL7/fhir/commit/ae60195a1ce9c512c4f93d1443a903e2acd41c7a` | Applies `FHIR-31701`, later superseded by "for use" wording |
| Commit | Typo: "for use" | `ba6c0f397d4671610cf62a336e1eae3f17b3a10a` / `https://github.com/HL7/fhir/commit/ba6c0f397d4671610cf62a336e1eae3f17b3a10a` | Applies `FHIR-22752` final grammar |
| Commit | Conformance bullet | `c32901f547075a3a54f97ef1c7d2e6ad248dc73d` / `https://github.com/HL7/fhir/commit/c32901f547075a3a54f97ef1c7d2e6ad248dc73d` | Applies `FHIR-19572` |
| Commit | Module level wording | `dfb07285cbc2261914990d8de6a9ac750a96d594` / `https://github.com/HL7/fhir/commit/dfb07285cbc2261914990d8de6a9ac750a96d594` | Applies `FHIR-33977` |
| Commit | R6 status/table metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Removes FMM cell and adds "Responsible Owner" wording |
| Jira | Stale Linked Data / registry link note | `https://jira.hl7.org/browse/FHIR-23809`; reopen with `bun run jira:search snapshot FHIR-23809` | Explains removal of "Linked Data" from this page |
| Jira | Security/Privacy short description | `https://jira.hl7.org/browse/FHIR-31702`; reopen with `bun run jira:search snapshot FHIR-31702` | Formal issue for replacing "Information" with a description |
| Jira | First sentence typo | `https://jira.hl7.org/browse/FHIR-31701`; reopen with `bun run jira:search snapshot FHIR-31701` | Earlier grammar correction from "use" to "used" |
| Jira | First sentence grammar | `https://jira.hl7.org/browse/FHIR-22752`; reopen with `bun run jira:search snapshot FHIR-22752` | Final wording changed to "for use" |
| Jira | Add Conformance bullet | `https://jira.hl7.org/browse/FHIR-19572`; reopen with `bun run jira:search snapshot FHIR-19572` | Formal issue for the new Conformance question |
| Jira | Module ordering wording | `https://jira.hl7.org/browse/FHIR-33977`; reopen with `bun run jira:search snapshot FHIR-33977` | Formal issue for replacing "rung/row" wording with level labels |
| Zulip | Security/Privacy wording request | `https://chat.fhir.org/#narrow/stream/Security.20and.20Privacy/topic/Representing.20IAL.20in.20FHIR/near/268612167`; local snapshot `.copilot/session-state/4d55eb56-481e-4757-bc43-f30ec1587c01/files/modules-evidence/zulip/security-representing-ial.md:489-496` | Josh Mandel asks for and adopts the exact one-sentence `FHIR-31702` wording |
| Confluence | FHIR-I WGM 202105 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/113673765/FHIR+Infrastructure+Minutes+WGM+202105`; reopen with `bun run confluence:search snapshot 113673765` | Records `FHIR-31702` persuasive motion, 21-0-0 |
| Confluence | FHIR-I WGM 202205 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/101355607/FHIR+Infrastructure+Minutes+WGM+202205`; reopen with `bun run confluence:search snapshot 101355607` | Records `FHIR-33977` persuasive-with-mod motion, 27-0-1 |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the enclosing `<div class="col-12">`/`</div>` wrapper. This is template/layout churn, not page-specific content.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes the page metadata table from "`<WG> Work Group`, Maturity Level: N/A, Standards Status: Informative" to "Responsible Owner: `<WG>` Work Group, Standards Status: Informative". This looks like R6-wide status/header metadata churn, not a substantive requirement change.

### Editorial text fixes

- The first paragraph changes from "capabilities use across" to "capabilities used across" in `ae60195a...` (`FHIR-31701`), then to the final "capabilities for use across" in `ba6c0f...` (`FHIR-22752`). Current text is at `source/modules.html:23-24`.
- The "When is information exchanged?" bullet lowercases "See" to "see" in `c32901f...`; editorial consistency only.
- `FHIR-23809` removes "Linked Data" from the list of remaining module areas. This was a stale STU3-era module reference, not a semantic/conformance change.

### Semantic guidance, non-substantive

- `FHIR-19572` adds a new implementer-startup bullet: "How the information conforms to the FHIR specification and implementation guides? (see Conformance Module)" at `source/modules.html:40`. The Jira resolution asked for this concept and exact wording. The applied concept matches the intent, but the current sentence remains grammatically awkward; this is captured in the action file as a low-priority editorial issue.
- `FHIR-31702` changes the module checklist entry from "`Security / Privacy`: Information" to the full sentence now at `source/modules.html:65`. Jira, Zulip, and Confluence evidence all support the applied text.
- `FHIR-33977` changes the group description from rung/row language to level labels (`Infrastructure (Level 1 and Level 2)`, `Content (Level 3 and Level 4)`, `Reasoning (Level 5)`) at `source/modules.html:70-76`, matching the module diagram labels in `source/modules-fragment.html:3`, `:15`, `:77`, `:89`, and `:187`.

### Mechanical/noise

- Merge commits `bb3428390ab6e94154659749bcf0ba4d0b4bafcf`, `9faf81ab1f7e1ea4935a2c9e7654e11efa7e35a3`, and `06da65fd57e0fddd22f56b7571f08b52ad322970` touched the file but did not add page-specific rationale beyond carrying nearby changes.

### No direct substantive/normative changes found

The direct `source/modules.html` diff does not add or remove normative requirements, examples, REST/search semantics, operations, resource definitions, bindings, or conformance behavior. The meaningful changes are navigation/orientation and non-substantive editorial guidance for new implementers.

## Source history

| Commit | Date | Subject | Page effect | Evidence/Jira |
|---|---:|---|---|---|
| `142ad7624ca77d81a9463a6ddbd278f521a109da` | 2021-05-30 | `Fix FHIR-19523,22702,23809` | Removes "Linked Data" from the modules list. Subject includes two search-page issues unrelated to this page. | `FHIR-23809`; PR `https://github.com/HL7/fhir/pull/1282` |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes `<div class="col-12">` wrapper and closing div. | Mechanical/template |
| `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | 2021-06-27 | `merge` | Merge touched modules page; no standalone page-specific patch shown by regular `git show`. | Mechanical/merge |
| `6cc2dfb03c09fa1bbd07ae21857553f7df22090c` | 2022-01-19 | `Add description for sec/priv module to fix FHIR-31702` | Replaces "Information" with the current Security/Privacy one-sentence description. | `FHIR-31702`; Zulip message `268612167` |
| `ae60195a1ce9c512c4f93d1443a903e2acd41c7a` | 2022-01-19 | `Typo to fix FHIR-31701` | Changes "capabilities use" to "capabilities used"; later superseded. | `FHIR-31701` |
| `9faf81ab1f7e1ea4935a2c9e7654e11efa7e35a3` | 2022-01-21 | `Merge branch 'fix-FHIR-31702-R5' into merge-jmandel-bugfixes` | Carries the `FHIR-31702` change. | Merge |
| `ba6c0f397d4671610cf62a336e1eae3f17b3a10a` | 2022-03-17 | `Apply FHIR-22752` | Changes first sentence to "capabilities for use across...". | `FHIR-22752` |
| `c32901f547075a3a54f97ef1c7d2e6ad248dc73d` | 2022-03-17 | `Apply FHIR-19572` | Adds Conformance Module startup bullet and normalizes "(see...)". | `FHIR-19572` |
| `06da65fd57e0fddd22f56b7571f08b52ad322970` | 2022-03-18 | `Merge branch 'master' into AZ-FHIR-19572-modules` | Merge around `FHIR-19572`; no standalone page-specific rationale. | Merge |
| `dfb07285cbc2261914990d8de6a9ac750a96d594` | 2022-08-27 | `FHIR-33977 Confusing description of module ordering in diagram` | Replaces rung/row wording with level labels. | `FHIR-33977`; Confluence page `101355607` |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Updates metadata table: "Responsible Owner" and no FMM cell. | R6-wide metadata/header change |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-23809` (`https://jira.hl7.org/browse/FHIR-23809`): multi-page typo issue. The modules-specific comment says the "remaining sections" list should not contain "Linked Data", which was an STU3 module, and also notes the implementation guide registry link redirected to a 502 at that time. The source commit only removes "Linked Data"; a current `curl -I -L http://www.fhir.org/guides/registry` now reaches `200 OK` after redirects, so I did not treat the old registry-link complaint as an active finding.
- `FHIR-31702` (`https://jira.hl7.org/browse/FHIR-31702`): R4B ballot issue requesting a short description for the "`Security / Privacy`" bullet. Status Published, resolution Persuasive, applied for R5, vote 21-0-0. Resolution says "Will provide a short description"; comment provides the exact sentence now used on the page.
- `FHIR-31701` (`https://jira.hl7.org/browse/FHIR-31701`): R4B ballot typo issue for "capabilities use[d] across"; applied for R5. The intermediate `used` wording was later changed to "for use" by `FHIR-22752`.
- `FHIR-22752` (`https://jira.hl7.org/browse/FHIR-22752`): STU3 technical correction for the first sentence. Description proposes "capabilities *for* use across..."; current page matches this final wording. A Jira comment cites commit `b30699596f4ad973437492684c4c7cf9365dbcff`, but that exact commit was not present/showable in the inspected checkout; the page change in the requested range is `ba6c0f397d4671610cf62a336e1eae3f17b3a10a`.
- `FHIR-19572` (`https://jira.hl7.org/browse/FHIR-19572`): change request saying the startup list should include Conformance. Resolution asks for the text "How the information conforms to the FHIR specification and implementation guides?" The commit applies that exact concept and wording.
- `FHIR-33977` (`https://jira.hl7.org/browse/FHIR-33977`): change request saying the old "bottom/middle/top rung" text turned the module diagram on its head. Resolution says to use the level labels, exactly as current page does.
- `FHIR-19523` (`https://jira.hl7.org/browse/FHIR-19523`) and `FHIR-22702` (`https://jira.hl7.org/browse/FHIR-22702`): explicit in commit/PR context, but their Jira snapshots are about REST search behavior and search parameter order. They do not explain any modules-page text beyond being bundled in PR `#1282`.

### Other Jira phrase searches

- `"How the information conforms"` returned only `FHIR-19572`.
- `"Security and Privacy Module describes how to protect"` returned `FHIR-31702` plus unrelated Da Vinci alerts/security hits; only `FHIR-31702` is relevant to `source/modules.html`.
- `"Confusing description of module ordering"` returned only `FHIR-33977`.
- `"capabilities for use across the healthcare"` returned only `FHIR-22752`.

### Context-only Jira hits not used for action

- `FHIR-19523` and `FHIR-22702` are historical PR/commit context only for this page review.

## Zulip evidence

- Corrected explicit-key searches via `bun run zulip:search sql ... content LIKE '%FHIR-XXXXX%'` found only one relevant key mention: `FHIR-31702` in `#Security and Privacy > Representing IAL in FHIR`.
- Thread snapshot: `.copilot/session-state/4d55eb56-481e-4757-bc43-f30ec1587c01/files/modules-evidence/zulip/security-representing-ial.md`.
- Relevant messages:
  - `268612108` at 2022-01-19 22:20: Josh Mandel asks whether Security and Privacy can provide a one-sentence description for `FHIR-31702` at `https://hl7.org/fhir/modules.html#modules`.
  - `268612167` at 2022-01-19 22:21: Josh proposes the exact text now on the page: "The Security and Privacy Module describes how to protect a FHIR server, how to document what permissions a user has granted, and how to keep records about what events have been performed."
  - The next message says "I'll use that :-)", supporting the source change's intent.
- Distinctive phrase searches found no Zulip hits for the Conformance bullet, module-ordering phrase, or first-sentence grammar. No Zulip evidence contradicted the applied changes.

## Confluence evidence

- `FHIR-31702`: `bun run confluence:search refs jira FHIR-31702` and FTS found page `113673765`, FHIR Infrastructure Minutes WGM 202105. Snapshot records the tracker item as "Persuasive Motion: Michael Donnelly/Alexander Henket: 21-0-0", consistent with Jira.
- `FHIR-33977`: refs/FTS found page `101355607`, FHIR Infrastructure Minutes WGM 202205. Snapshot records "Tracker Items jira:FHIR-33977 Persuasive with Mod Motion: Rick Geimer/Michael Donnelly: 27-0-1", consistent with Jira.
- `FHIR-22752`: Confluence refs/FTS returned page `79497574`, but the search snippet discussed an extensible binding issue rather than the modules first-sentence grammar. I treated it as context-only and did not rely on it.
- No Confluence results were found for `FHIR-19523`, `FHIR-22702`, `FHIR-23809`, `FHIR-31701`, or `FHIR-19572` in the high-signal kinds searched.
- Phrase searches for `"How the information conforms"`, `"Security and Privacy Module describes how to protect"`, and `"Confusing description of module ordering"` found no additional Confluence evidence.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2018-10-30 | Jira created | `FHIR-19572` asks for Conformance in the startup list. |
| 2019-03-25 | Jira vote/resolution | `FHIR-19572` resolved Persuasive, vote 9-0-0, applied for R5. |
| 2019-06-24 | Jira created | `FHIR-22752` reports first-sentence grammar problem. |
| 2019-07-29 | Jira resolution | `FHIR-22752` auto-approved/resolved Persuasive. |
| 2019-09-02 | Jira created | `FHIR-23809` includes the modules-page stale "Linked Data" note. |
| 2019-10-21 | Jira resolution | `FHIR-23809` resolved Persuasive. |
| 2021-04-06 | Jira created | `FHIR-31701` and `FHIR-31702` R4B ballot issues created. |
| 2021-05-03 | Jira resolution | `FHIR-31701` resolved. |
| 2021-05-24 | Jira/Confluence vote | `FHIR-31702` resolved Persuasive; FHIR-I minutes record 21-0-0 motion. |
| 2021-05-30 | Source commit | `142ad762...` removes "Linked Data" from `source/modules.html`. |
| 2021-06-08 | PR merge | `HL7/fhir#1282` merged; Jira comments for bundled issues point to this PR. |
| 2021-06-27 | Source/template | `d7b8dad...` removes wrapper div; `bb3428...` merge touches file. |
| 2021-09-21 | Jira created | `FHIR-33977` reports confusing module ordering text. |
| 2022-01-19 | Zulip/source | Zulip supplies `FHIR-31702` sentence; `6cc2df...` applies it. |
| 2022-01-19 | Source commit | `ae60195...` applies `FHIR-31701` typo wording. |
| 2022-03-17 | Source commit | `ba6c0f...` applies `FHIR-22752`; `c32901...` applies `FHIR-19572`. |
| 2022-05-10 | Jira/Confluence vote | `FHIR-33977` resolved/voted Persuasive with Modification; minutes record 27-0-1. |
| 2022-08-27 | Source commit | `dfb0728...` applies level-label wording for `FHIR-33977`. |
| 2025-10-31 | Source commit | `270e0c...` applies R6 metadata/header status changes to the page. |
| 2026-05-20 | Current review | Registry link checked: `http://www.fhir.org/guides/registry` redirects to HTTPS and returns `200 OK`; not treated as an active defect. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/modules.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/modules.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/modules.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/modules.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <commit> -- source/modules.html` for all 11 page-touching commits.
- Jira:
  - `bun run jira:search snapshot FHIR-19523`, `FHIR-22702`, `FHIR-23809`, `FHIR-31702`, `FHIR-31701`, `FHIR-22752`, `FHIR-19572`, `FHIR-33977`
  - `bun run jira:search fts '"How the information conforms"' --limit 10`
  - `bun run jira:search fts '"Security and Privacy Module describes how to protect"' --limit 10`
  - `bun run jira:search fts '"Confusing description of module ordering"' --limit 10`
  - `bun run jira:search fts '"capabilities for use across the healthcare"' --limit 10`
- Zulip:
  - Initial unquoted `bun run zulip:search fts FHIR-XXXXX` attempts failed with SQLite `no such column` errors because hyphenated keys were parsed badly; corrected with SQL `content LIKE '%FHIR-XXXXX%'`.
  - `bun run zulip:search sql "SELECT id, stream_name, topic, sender_name, datetime(timestamp, 'unixepoch') AS sent_at, substr(content, 1, 240) AS excerpt FROM messages WHERE content LIKE '%FHIR-31702%' ORDER BY timestamp DESC LIMIT 10"`
  - `bun run zulip:search snapshot "Security and Privacy" "Representing IAL in FHIR"`
  - Phrase searches for the same distinctive text used in Jira.
- Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX --limit 5` and `bun run confluence:search fts FHIR-XXXXX --limit 5` for all explicit keys.
  - `bun run confluence:search snapshot 113673765`
  - `bun run confluence:search snapshot 101355607`
  - Phrase searches for the same distinctive text used in Jira.
- Full newer page/context:
  - `wc -l ".../source/modules.html"` returned 105.
  - Read `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:1-105`.
  - Read `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules-fragment.html:1-207` for the included module diagram.
- Link/anchor checks:
  - `curl -I -L --max-time 20 http://www.fhir.org/guides/registry` returned final `200 OK`.
  - `rg -n '<a name="uses"|id="uses"' foundation-module.html` found no match, while terminology, security/privacy, conformance, and workflow module files do expose `uses` anchors.
