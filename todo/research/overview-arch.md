# overview-arch research appendix

## Scope and coverage

- Page path: `source/overview-arch.html`.
- Older version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both source trees and is modified, not added/deleted/renamed. Older file has 460 lines; newer file has 454 lines.
- The newer source page was read end-to-end: lines 1-454.
- Direct page-history count in the requested commit range: 13 commits touched `source/overview-arch.html`.
- Explicit Jira keys found in commit metadata/patches: `FHIR-25431`, `FHIR-44047`, `FHIR-48660`. Later/page-adjacent Jira found by search: `FHIR-53725`, `FHIR-50596`, `FHIR-55117`, `FHIR-48375`.
- Jira searches performed: snapshots for `FHIR-25431`, `FHIR-44047`, `FHIR-48660`, `FHIR-53725`, `FHIR-50596`, `FHIR-55117`, `FHIR-48375`; phrase searches for `"80% rule"`, `"80/20" "overview-arch"`, `"most implementers" "80%"`, `"Linkage resource" "pc-incubator"`, `"remove additional resources"`, `"Resource Reference Visualization"`, `"clinFHIR"`, `"Safety CheckList"`, `managable`, `overview-arch`/title variants, and Linkage/PC incubator variants.
- Zulip searches performed: explicit Jira keys, `"80% rule"`, `"80/20" overview-arch`, `"Linkage resource" pc-incubator`, `"Linking to Additional Resources"`, `managable`, `"Safety CheckList"`; snapshot for `#implementers > Linking to Additional Resources`.
- Confluence searches performed: `refs jira` and FTS for the six Jira keys above; FTS for `"80% rule"`, `"80/20"`, `"Linking to Additional Resources"`, `managable`, and `"overview-arch"`; SQL excerpts/snapshots for pages `281219681`, `413248899`, `453902815`, `66940491`, and `234784975`.
- Caveats: no direct Zulip hits were found for `FHIR-25431`, `FHIR-44047`, `FHIR-48660`, `FHIR-50596`, or `FHIR-55117`. Some unescaped hyphen FTS attempts (`pc-incubator`, `overview-arch`) failed in Jira/Zulip FTS and were rerun with safer quoted/simplified terms. The Linkage-related Jira/Zulip/Confluence evidence post-dates the R6 ballot4 source commit, so it is later reassessment evidence, not original implementation intent. The source `settitle` mismatch was not visible in the fetched R6 ballot4 rendered `<title>`, so it is source metadata cleanup rather than a proven live browser-title defect.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source file | Newer source | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-arch.html` | Reviewed R6 ballot4 source page. |
| Source lines | Page title/header | `source/overview-arch.html:3`, `:16-17` | `settitle` still says Developers while page heading says Architects; owner/status row changed. Rendered R6 ballot4 `<title>` currently showed `Overview-arch - FHIR v6.0.0-ballot4`, not Developers. |
| Source lines | 80% rule wording | `source/overview-arch.html:98-100` | Main substantive wording change from `FHIR-48660`. |
| Source lines | Current spelling issue | `source/overview-arch.html:230` | `managable` remains in current page. |
| Source lines | Safety checklist link text | `source/overview-arch.html:409` | `CheckList` capitalization remains. |
| Source lines | Linkage external link | `source/overview-arch.html:429-430` | R4 local `linkage.html` link was changed to a PC incubator URL; current live URL returned HTTP 404 during review. |
| Rendered page | R6 ballot4 overview-arch | `https://hl7.org/fhir/6.0.0-ballot4/overview-arch.html` | Confirms published rendering includes changed 80% wording and external Linkage link. |
| Commit | Element link | `cbdf7d1e55dc4bfa1dc30fc526edee0491e05782` | Changed `element.html` to `types.html#Element`. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed obsolete wrapper `<div class="col-12">`. |
| Commit/Jira | Datatype terminology | `8592e1207273b786db340efb927bb6d1dc9756c9`; `FHIR-25431` | Broad terminology cleanup: `Data Types`/`data types` to `Datatypes`/`datatypes`. |
| Commit/Jira | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; `FHIR-44047` | Broad punctuation cleanup; Jira still not Applied/Published in local snapshot. |
| Commit/Jira/PR | 80% language | `123d7cb388ada2b0c42186eed9cf91b649bc3384`; `FHIR-48660`; PR `#3953` (`https://github.com/HL7/fhir/pull/3953`) | Formal request, implementation commit, and merge context for the principal wording change. |
| Commit/PR | Additional resources / Linkage | `fad1b9cf84ef652e88947e1a13b026c62f95334e`; PR `#3974` (`https://github.com/HL7/fhir/pull/3974`) | Replaced local Linkage link with external PC incubator URL. |
| Jira | `FHIR-53725` | `https://jira.hl7.org/browse/FHIR-53725` | Later ballot issue says Linkage is no longer part of FHIR Core R6 and points to broken PC incubator link behavior. |
| Jira | `FHIR-55117` | `https://jira.hl7.org/browse/FHIR-55117` | Submitted issue specifically for `overview-arch` spelling/abbreviation: `managable`. |
| Jira | `FHIR-50596` | `https://jira.hl7.org/browse/FHIR-50596` | Similar `managable` typo elsewhere was found persuasive, reinforcing that spelling should be fixed. |
| Jira | `FHIR-48375` | `https://jira.hl7.org/browse/FHIR-48375` | Same-page section-title clarification request; triaged/unresolved, so context only. |
| Zulip | Linkage discussion | `#implementers > Linking to Additional Resources`, `https://chat.fhir.org/#narrow/stream/implementers/topic/Linking%20to%20Additional%20Resources` | Later discussion: linking to WIP additional resources can be okay, but comparison text should move to incubator where possible. |
| Confluence | 80% vote | Page `281219681`, FHIR Infrastructure Minutes WGM 202501 - Virtual | Records `FHIR-48660` as Persuasive, Gino Canessa / Jean Duteau: 13-0-0. |
| Confluence | Linkage/PC incubator | Page `413248899`, PA 2026 January WGM minutes | Records `FHIR-53725`: “Need to wait for PC incubator to be live.” |
| Confluence | Spelling vote | Page `453902815`, FHIR-I Minutes CC 2026-04-13 | Records `FHIR-50596` as Persuasive. |
| Local command | Direct diff | `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-arch.html` | Reproduces full R4 -> R6 ballot4 page diff. |
| Local command | History | `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-arch.html` | Reproduces the 13 page-touching commits. |

## Change summary

### 80% rule wording — substantive/normative-adjacent semantic guidance

R4 described resource design as “with the 80/20 rule in mind” and “focus on the 20% of requirements that satisfy 80% of the interoperability needs.” R6 ballot4 now says resources are designed based on an “80% rule” where elements expected to be used by most implementers (`~80%+` of systems) are included in resource data models (`source/overview-arch.html:98-100`). This exactly matches `FHIR-48660`’s requested replacement text and was implemented by `123d7cb388ada2b0c42186eed9cf91b649bc3384`.

This is informative page guidance, not a conformance SHALL, but it changes the architectural explanation from requirement coverage to implementer/system prevalence.

### Linkage reference — semantic guidance / link target change

The “Resource References” issue text still says Linkage can help with ambiguity/referential-integrity problems, but the link changed from core `linkage.html` to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html` in `fad1b9cf84ef652e88947e1a13b026c62f95334e`. This aligns with the broad “additional resources” move, but the live target returned HTTP 404 during review, and later `FHIR-53725`/Zulip/Confluence evidence says the PC incubator needed to be live before resolving related broken-link concerns.

### Terminology/links — metadata/navigation/editorial

- `Element` link changed from `element.html` to `types.html#Element` (`cbdf7d1e55dc4bfa1dc30fc526edee0491e05782`).
- `Data Types` / `data types` changed to `Datatypes` / `datatypes` as part of `FHIR-25431` (`8592e1207273b786db340efb927bb6d1dc9756c9`). Jira says this was a persuasive R4 technical correction applied for R5.
- `e.g.` punctuation was changed to `e.g.,` under `FHIR-44047` (`887bc2383fb7b429cfafd64a46bdfc0c40c5b627`).

### Template/navigation metadata — mechanical/noise

`d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the old wrapper `<div class="col-12">` and closing `</div>`. `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status table from Work Group + Maturity + Standards Status to “Responsible Owner” + Standards Status. These are page template/status-row churn, not page-specific architectural decisions.

### Removed external clinFHIR reference — editorial/navigation

`b5a5d5740c86ed186bfd22dd00e132df7cdd734f` removed a paragraph pointing to a clinFHIR Resource Reference Visualization tool. No Jira/Zulip/Confluence rationale was found beyond the commit subject “remove bad reference to clinfhir.”

### QA/spelling churn — editorial; some regressions remain

- `dad7cf37c75822c352509e1c2e8d050408d0be18` briefly introduced `etc..`, then `9f780149387dc652bec02aa7744e52774acddbc9` reverted to `etc.`.
- `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` changed `manageable` to misspelled `managable`; this remains at line 230 and is now directly tracked by submitted `FHIR-55117`.
- `55017c7f96a4fe7e8a3f3d08718be0ba56799699` changed “Safety Check List” to “Safety CheckList”; the target `safety.html` also uses “CheckList,” so this may be broader style debt rather than a page-specific typo.

## Source history

| Date | Commit | Subject | Page-specific effect | Classification |
|---|---|---|---|---|
| 2019-12-10 | `cbdf7d1e55dc4bfa1dc30fc526edee0491e05782` | rebuild abstract type framework | `Element` link now `types.html#Element` | navigation/editorial |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removed wrapper `<div class="col-12">` and closing `</div>` | mechanical/template |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Changed `Data Types` and `data types` to `Datatypes`/`datatypes` | editorial terminology, Jira-backed |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | QA related changes | `real world` -> `real-world`; briefly introduced `etc..` | editorial QA |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | more QA | Reverted `etc..` to `etc.` | editorial QA |
| 2023-02-24 | `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | more qa | `Safety Check List` -> `Safety CheckList` | editorial QA; possible style defect |
| 2023-02-24 | `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | more QA | `manageable` -> `managable` | editorial regression |
| 2025-04-01 | `b5a5d5740c86ed186bfd22dd00e132df7cdd734f` | remove bad reference to clinfhir | Removed clinFHIR Resource Reference Visualization paragraph | editorial/navigation cleanup |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Changed page status table to “Responsible Owner”; removed maturity cell | template/metadata |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | `e.g.` -> `e.g.,` in Resource References example | editorial punctuation, Jira-backed |
| 2025-11-06 | `123d7cb388ada2b0c42186eed9cf91b649bc3384` | https://jira.hl7.org/browse/FHIR-48660 - Fixed 80/20 documentation | Replaced 80/20 wording with current 80% rule text | semantic guidance, Jira-backed |
| 2025-11-07 | `b7f0b0c842cd80ce19fc074dd049e7af992ad960` | Merge pull request #3953 from HL7/LloydTrackers | Merged `FHIR-48660` branch plus `FHIR-44047` path changes | merge/PR context |
| 2025-11-12 | `fad1b9cf84ef652e88947e1a13b026c62f95334e` | remove additional resources | `linkage.html` -> PC incubator Linkage URL | semantic/link target; later evidence suggests unresolved risk |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` — “Inconsistent use of "datatype" vs. "data type".” Snapshot: Published, Persuasive, Technical Correction, raised in R4, applied for R5. It explains the `Datatypes` terminology cleanup. Confluence page `66940491` records `FHIR-25431` with Lloyd: using “data type,” auto-approve.
- `FHIR-44047` — “Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout.” Snapshot: Resolved - change required, Persuasive, R6 ballot issue, related pages “many.” Commit `887bc2383...` applies an `e.g.,` correction in this page. Confluence page `234784975` records “will fix.” Caveat: the local Jira snapshot status is not Applied/Published even though this page has a source commit.
- `FHIR-48660` — “Correct 80% language in architect's intro.” Snapshot: Applied, Persuasive, vote Gino Canessa / Jean Duteau 13-0-0 on 2025-01-29, related URL `https://build.fhir.org/overview-arch.html`. Description’s replacement text matches current lines 98-99. Jira comment says “Git master 123d7cb388.” Confluence page `281219681` records the same persuasive vote.

### Other Jira issues that plausibly explain or affect changed/current text

- `FHIR-53725` — “Remove reference and wording regarding the Linkage Resource, which is no longer part of FHIR Core R6.” It is about Patient, not `overview-arch`, and was created after the R6 ballot4 source commit. Still, it is directly relevant because it quotes the same PC incubator Linkage URL pattern as broken and says Linkage is one of the resources being moved to an incubator; Confluence page `413248899` says “Need to wait for PC incubator to be live.” This supports treating the current `overview-arch` external Linkage URL as at-risk.
- `FHIR-55117` — “Spelling/abbreviation issues on page: overview-arch.” Submitted, unresolved. Description specifically lists `managable`; current line 230 still contains that spelling.
- `FHIR-50596` — “Using "managable" instead of the original "manageable".” It targets `extensibility`, not this page, but FHIR-I later marked the same spelling issue persuasive; Confluence page `453902815` records `FHIR-50596` as persuasive.

### Context-only Jira hits that should not drive action

- Broad `"80% rule"` searches returned many resource-specific issues unrelated to this page. They provide background that “80% rule” is common FHIR design vocabulary, but only `FHIR-48660` explains this page's wording change.
- `clinFHIR` search returned unrelated old/core/IG issues; none explained this page's 2025 removal beyond the commit subject.
- `Safety CheckList` searches returned safety-checklist issues, but none clearly target `overview-arch` line 409.
- `FHIR-48375` is a triaged same-page request to clarify two section titles (`Creating Resources - Architectural Considerations` and `Organizing FHIR Resources`) but has no vote, resolution, or source commit in this range; it was not elevated into the action file because it is an open editorial request rather than a discovered implementation mismatch.

## Zulip evidence

- No direct Zulip hits were found for `FHIR-25431`, `FHIR-44047`, `FHIR-48660`, `FHIR-50596`, or `FHIR-55117`.
- `FHIR-53725` found `#implementers > Linking to Additional Resources` (2026-01-28). Brian Postlethwaite asked whether linking to additional resources from the core spec would still be fine and referenced `FHIR-53725`. John Moehrke noted the Security page links to Permission. Grahame Grieve replied: “you can link to it as work in progress in documentation, but you should move comparison text to where it's being incubated as much as possible.” This supports two points: (1) core-to-incubator links are not categorically forbidden, but (2) unresolved live/incubator availability and placement matter.
- `"80% rule"` found general discussions in implementers/committers/social/etc. None were tied to `overview-arch` or `FHIR-48660`, so they were treated as background only.
- `managable` hits were general chat typos/usages, not evidence about this page.

## Confluence evidence

- Page `66940491` (FHIR Infrastructure Minutes CC 20200113) mentions `FHIR-25431`: “Lloyd: Using "data type" Will auto approve.” This is formal workgroup process support for the terminology cleanup.
- Page `234784975` (FHIR Infrastructure Minutes WGM 202405 - Dallas) mentions `FHIR-44047`: “will fix” among prior ballot issues.
- Page `281219681` (FHIR Infrastructure Minutes WGM 202501 - Virtual) records `FHIR-48660` as Persuasive with vote Gino Canessa / Jean Duteau: 13-0-0.
- Page `413248899` (PA 2026 January WGM minutes) records `FHIR-53725`: “Need to wait for PC incubator to be live,” which is important later process evidence for the Linkage external-link risk.
- Page `453902815` (FHIR Infrastructure Minutes CC 2026-04-13) records `FHIR-50596` as Persuasive, supporting that `managable` should be corrected where found.
- Broader Confluence `"80% rule"` and `"80/20"` hits show the concept is frequently discussed across workgroups, but they are not page-specific evidence.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` opened for datatype/data type consistency. |
| 2020-01-13 | Confluence/WG | FHIR-I minutes page `66940491` discussed/auto-approved `FHIR-25431`. |
| 2021-10-27 | Jira resolved | `FHIR-25431` resolved Persuasive. |
| 2022-08-31 | Source commit | `8592e120...` applied datatype terminology cleanup to `overview-arch`. |
| 2024-01-22 | Jira created | `FHIR-44047` opened for e.g./i.e. punctuation across R6 ballot. |
| 2024-05-23 | Confluence/Jira | FHIR-I WGM page `234784975` records `FHIR-44047` “will fix”; Jira resolved Persuasive but remained “Resolved - change required” in local snapshot. |
| 2024-09-24 | Jira created | `FHIR-48375` opened to clarify two section titles in the Architect's Overview; still triaged/unresolved in the local snapshot. |
| 2024-10-16 | Jira created | `FHIR-48660` opened to correct 80% language in architect's intro. |
| 2025-01-29 | Jira vote | `FHIR-48660` found Persuasive, Gino Canessa / Jean Duteau: 13-0-0. |
| 2025-04-01 | Source commit | `b5a5d574...` removed clinFHIR visualization reference. |
| 2025-11-03 | Source commit | `887bc238...` applied `FHIR-44047` punctuation change to this page. |
| 2025-11-06 | Source commit | `123d7cb...` applied `FHIR-48660`; Jira comment later points to this commit. |
| 2025-11-07 | PR merge | PR `#3953` merged, covering `FHIR-48660` and other Lloyd trackers. |
| 2025-11-12 | Source commit | `fad1b9cf...` changed Linkage from local core `linkage.html` to PC incubator URL. |
| 2025-11-13 | PR merge | PR `#3974` merged and contains `fad1b9cf...`; PR body did not list a Jira key for this page change. |
| 2025-12-18 | Publication boundary | Newer source commit `5d67a34...` bumps version for publication; file includes all changes above. |
| 2025-12-29 | Later Jira | `FHIR-53725` opened saying Linkage is no longer part of FHIR Core R6 and the PC incubator link/text needs attention. |
| 2026-01-20 | Later Jira | `FHIR-55117` submitted for `overview-arch` spelling/abbreviation, specifically `managable`. |
| 2026-01-28 | Later discussion/WG | Zulip `#implementers > Linking to Additional Resources` and PA minutes page `413248899` discuss waiting for PC incubator/linking approach. |
| 2026-04-13 | Later WG | FHIR-I minutes page `453902815` marks similar `managable` issue `FHIR-50596` persuasive. |

## Evidence log

- Confirmed page boundary with `test -f` for both trees: both printed `old exists` and `new exists`; `wc -l` showed 460 old lines and 454 new lines.
- Ran required rename-aware diff. It showed no rename, just line edits: status row/template changes, 80% wording, Element/Datatypes links/terms, typo/QA edits, clinFHIR paragraph removal, `e.g.,` punctuation, external Linkage link, and footer wrapper removal.
- Ran required chronological `git log` for the page. It returned 13 commits in range.
- Inspected each page-touching commit with `git show --stat --patch -- source/overview-arch.html`; inspected broader stats for meaningful commits and merge `#3953` with `git show -m`.
- Used pickaxe/history: `git log -S '80/20 rule'`, `-S '80% rule'`, `-S 'managable'`, `-S 'Implementers Safety CheckList'`, `-G 'pc-incubator|linkage.html'`, and related patterns to confirm the exact commits where key text appeared/disappeared.
- Read newer source page end-to-end using line-numbered file views for lines 1-220 and 221-454; source locators above are from that read.
- Ran `git blame` for suspect lines: line 98-99 blamed to `123d7cb...`; line 230 to `60e98c...`; line 409 to `55017c...`; line 429 to `fad1b9c...`; line 3 title mismatch dates back to `16b77d...`.
- Queried GitHub PR metadata with `gh pr view 3953` and `gh pr view 3974`; PR `#3953` explicitly lists `FHIR-48660`, while PR `#3974` contains `fad1b9cf...` but the PR body left the Jira tracker blank.
- Ran Jira snapshots and searches listed in Scope. Promising snapshots were `FHIR-25431`, `FHIR-44047`, `FHIR-48660`, `FHIR-53725`, `FHIR-50596`, `FHIR-55117`, and same-page context issue `FHIR-48375`.
- Ran Zulip searches listed in Scope and snapshot for `#implementers > Linking to Additional Resources`. Direct page/Jira Zulip evidence was sparse except for later Linkage discussion.
- Ran Confluence `refs jira`, FTS, snapshots/SQL excerpts for relevant pages. Minutes corroborate `FHIR-48660` vote, `FHIR-53725` PC incubator dependency, and `FHIR-50596` spelling disposition.
- Checked the external Linkage target with `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n' https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html`; it returned `404` during review.
- Fetched the rendered R6 ballot4 page and confirmed it renders the external Linkage URL, changed 80% wording, and `managable` typo. Its HTML `<title>` was `Overview-arch - FHIR v6.0.0-ballot4`, so the source `settitle` mismatch was not confirmed as a live browser-title defect.
