# versioning research appendix

## Scope and coverage

- Page path: `source/versioning.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Boundary: page exists in both source trees; diff status is modified, not added/deleted/renamed.
- New page read end-to-end: yes, 240 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:1-240`.
- Commit count touching the page between the two commits: 12.
- Explicit Jira keys found in commit subjects/bodies: `FHIR-26067`, `FHIR-35168`, `FHIR-21452`, `FHIR-35780`, `FHIR-41622`, `FHIR-44047`.
- Additional related Jira issues reviewed because they directly mention this page or the changed section: `FHIR-35172`, `FHIR-35779`, `FHIR-39331`, `FHIR-40644`, `FHIR-55132`.
- Jira/Zulip/Confluence coverage: snapshots for all explicit Jira keys and selected related page issues; Zulip searches for keys and distinctive phrases; Confluence refs/FTS searches and snapshots for the relevant FHIR-I/Vocab minutes.
- Caveats: initial FTS searches containing unescaped hyphens, slashes, or dots failed in Jira/Zulip/Confluence; I reran the material searches with quoted phrases or SQL/LIKE. No resolved Jira specifically saying "update the R6 row in `versioning.html`" was found; the R6 table finding is based on the current page text, the R6 package/page context, and older Jira/Zulip history requiring this table not to carry stale "this version" wording.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/versioning.html` | R4 baseline source page |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html` | R6 ballot4 source page |
| Source lines | Current intro and version-detection list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:18-38` | Shows the added link to `versions.html#versions` and the three version-identification mechanisms |
| Source lines | CapabilityStatement guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:43-79` | Current guidance on interaction-level version agreement and related `fhirVersion` elements |
| Source lines | MIME type parameter guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:81-119` | Current endpoint/MIME version behavior and `$versions` reference |
| Source lines | Version-specific profile table and package note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:131-191` | Main changed section; contains stale `FHIR R5 (this version)` row in the R6 ballot4 source |
| Source lines | Current R6 package names | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:111-119`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/packages.html:103-106` | Confirms this source tree advertises `hl7.fhir.r6.core` and a `6.0.x` dependency example |
| Commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Template-only removal of `<div class="col-12">` wrapper |
| Commit / PR | `f752cd7c77d81b962b0efef17c9b9967eb74c2a5`, PR #1717 | https://github.com/HL7/fhir/commit/f752cd7c77d81b962b0efef17c9b9967eb74c2a5; https://github.com/HL7/fhir/pull/1717 | Added R4B/R5 table rows and adjusted R4 wording in the version-specific profile table |
| Commit / PR | `6f6a8881881a31a2ec13ae9d185200556d161b53`, PR #1961 | https://github.com/HL7/fhir/commit/6f6a8881881a31a2ec13ae9d185200556d161b53; https://github.com/HL7/fhir/pull/1961 | `FHIR-26067`/`FHIR-35168`; added the intro link to release/versioning semantics and mostly whitespace churn in this file |
| Commit | `dfb978d4cc307b814fb5a7a1680cad5c3bbcfb3e` | https://github.com/HL7/fhir/commit/dfb978d4cc307b814fb5a7a1680cad5c3bbcfb3e | `FHIR-21452`; temporary link/parenthesis correction later partly reverted |
| Commit / PR | `e93b4f3ecd8b2bfbfaf8996b19d5926cde408578`, PR #2475 | https://github.com/HL7/fhir/commit/e93b4f3ecd8b2bfbfaf8996b19d5926cde408578; https://github.com/HL7/fhir/pull/2475 | `FHIR-35780`; added note about version-specific StructureDefinition URLs and packages |
| Commit | `71efd80cc36cff134adc151eeb091df794a3f003` | https://github.com/HL7/fhir/commit/71efd80cc36cff134adc151eeb091df794a3f003 | Removed `(once published)` from R4B/R5 table versions after R5 publication |
| Commit / PR | `5475dc947013dea1bd8d227d522b334f4f115c33`, PR #3898 | https://github.com/HL7/fhir/commit/5475dc947013dea1bd8d227d522b334f4f115c33; https://github.com/HL7/fhir/pull/3898 | `FHIR-41622`; corrected package example from `hl7.fhir.r{x}.core{x}` to `hl7.fhir.r{x}.core` |
| Commit / PR | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, PR #3951 | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627; https://github.com/HL7/fhir/pull/3951 | `FHIR-44047`; comma punctuation for `e.g.,` in this page |
| Jira | `FHIR-35172` | https://jira.hl7.org/browse/FHIR-35172; `bun run jira:search snapshot FHIR-35172` | Explicitly says version-management tables were incomplete/out of date; resolution adds R4B/R5 and creates follow-up for `fhirVersion` compatibility |
| Jira | `FHIR-35779` | https://jira.hl7.org/browse/FHIR-35779; `bun run jira:search snapshot FHIR-35779` | R4B-specific request to remove stale `(this version)`/`(once published)` wording and add R4B row |
| Jira | `FHIR-35780` | https://jira.hl7.org/browse/FHIR-35780; `bun run jira:search snapshot FHIR-35780` | Rationale for keeping version-specific StructureDefinition URLs but publishing packages that resolve them |
| Jira | `FHIR-41622` | https://jira.hl7.org/browse/FHIR-41622; `bun run jira:search snapshot FHIR-41622` | Corrected the package-id text added by `FHIR-35780`; includes PR #3898 comment |
| Jira | `FHIR-40644` | https://jira.hl7.org/browse/FHIR-40644; `bun run jira:search snapshot FHIR-40644` | Open follow-up from `FHIR-35172`; asks to clarify `fhirVersion` elements and version compatibility |
| Jira | `FHIR-55132` | https://jira.hl7.org/browse/FHIR-55132; `bun run jira:search snapshot FHIR-55132` | Submitted spelling/abbreviation cleanup on this page; context only for this review |
| Zulip | R4B versioning | https://chat.fhir.org/#narrow/stream/implementers/topic/R4B%20versioning; `bun run zulip:search snapshot implementers "R4B versioning"` | Origin discussion for stale table wording and version-specific profile URL questions |
| Zulip | `hl7.fhir.r4.core4 package` | `bun run zulip:search fts '"hl7.fhir.r4.core4"' --limit 20` | Shows reporter proposed `hl7.fhir.xver.r4`; Jira resolution instead chose `hl7.fhir.r{x}.core` |
| Zulip | R6 Versioning Discussion | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/R6%20Versioning%20Discussion; `bun run zulip:search snapshot "fhir/infrastructure-wg" "R6 Versioning Discussion"` | Later R6 versioning/modules discussion; contextual support for ongoing versioning work |
| Zulip | WGM Versioning Discussion | https://chat.fhir.org/#narrow/stream/FHIR%20cross-version%20issues/topic/WGM%20Versioning%20Discussion; `bun run zulip:search snapshot "FHIR cross-version issues" "WGM Versioning Discussion"` | Later discussion says versioning/module decisions needed before R6 publication |
| Confluence | FHIR-I 2020-03-30 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/80118271/FHIR+Infrastructure+Minutes+CC+20200330; `bun run confluence:search snapshot 80118271` | FHIR-I vote for `FHIR-26067`: update version terminology/pages and CodeSystem |
| Confluence | FHIR-I 2022-04-18 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/94660790/FHIR+Infrastructure+Minutes+CC+2022-04-18; `bun run confluence:search snapshot 94660790` | Records `FHIR-35780` decision not to remove version-specific URL; use version-specific publishing package |
| Confluence | FHIR-I 2023-12-11 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/210077405/FHIR+Infrastructure+Minutes+CC+2023-12-11; `bun run confluence:search snapshot 210077405` | Records `FHIR-41622` persuasive vote |
| Confluence | FHIR-I 2026-01-12 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/413046557/FHIR+Infrastructure+Minutes+CC+2026-01-12; `bun run confluence:search snapshot 413046557` | Records `FHIR-40644` direction to add a section to Managing Multiple Versions |

## Change summary

### Page boundary

Both paths exist:

- Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/versioning.html`
- New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html`

### Meaningful content changes

- **Semantic guidance:** `f752cd7c77d81b962b0efef17c9b9967eb74c2a5` updated the version-specific profile table from the R4-only row to rows for R4, R4B, and R5. This responded to the class of issues captured in `FHIR-35172` and `FHIR-35779`, but the current R6 ballot4 page still says `FHIR R5 (this version)` and lacks an R6 row at `/source/versioning.html:184-185`.
- **Semantic guidance:** `6f6a8881881a31a2ec13ae9d185200556d161b53` added the paragraph linking to `versions.html#versions` for version semantics/publication details (`/source/versioning.html:38`). This matches `FHIR-35168`'s resolution to add a link from the intro section of the versioning page to the versions section.
- **Semantic guidance:** `e93b4f3ecd8b2bfbfaf8996b19d5926cde408578` added a note that version-specific StructureDefinition URLs are not the normal canonical URLs and are found in version-specific packages; `5475dc947013dea1bd8d227d522b334f4f115c33` corrected the package id to `hl7.fhir.r{x}.core` (`/source/versioning.html:188-191`).
- **Editorial/rendering:** `dfb978d4cc307b814fb5a7a1680cad5c3bbcfb3e` and `0d58d10e724397da66de18b51936bc3c2702e4f7` adjusted the implementation-usage link/parenthesis at the bottom; final text restored `http://fhir.org/implementations/usage` and fixed the missing closing parenthesis (`/source/versioning.html:228-233`).
- **Editorial:** typo/grammar fixes include `it's` to `its` (`/source/versioning.html:54`), `real world` to `real-world` (`/source/versioning.html:229`), and `e.g.` to `e.g.,` (`/source/versioning.html:86`, `:191`).
- **Metadata/template/navigation:** the obsolete content wrapper `<div class="col-12">` was removed; the header metadata changed from Work Group + Maturity Level + Standards Status to `Responsible Owner` + Standards Status (`/source/versioning.html:15-16`). These are mechanical/template or R6 publication metadata changes.
- **Mechanical/noise:** much of `6f6a8881881a31a2ec13ae9d185200556d161b53` is whitespace cleanup with no rendered content change.

### Changes not found

- No direct change to REST/search/operation semantics except the existing `$versions` link already present in the current page.
- No changed examples other than table rows/package note; the JSON `meta.profile` example still uses `http://hl7.org/fhir/3.0/StructureDefinition/Patient` (`/source/versioning.html:151-157`).
- No explicit R6 update to the version-specific profile table was found after the R5-era row was introduced.

## Source history

| Commit | Date | Subject | Page-specific effect | Assessment |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed `<div class="col-12">` wrapper and closing tag. | Mechanical/template |
| `f752cd7c77d81b962b0efef17c9b9967eb74c2a5` | 2022-02-24 | `Version info updates` | Replaced R4-only profile table with R1/R2/R3/R4/R4B/R5 rows; changed R4 row from `(this version)`/`4.0 (once published)` to `R4, mixed STU/Normative`/`4.0`; added R4B `4.3 (once published)` and R5 `(this version)`/`5.0 (once published)`. | Semantic guidance; now stale in R6 |
| `6f6a8881881a31a2ec13ae9d185200556d161b53` | 2022-05-13 | `FHIR-26067, FHIR-35168 FHIR version updates` | Added intro link to `versions.html#versions`; most other page changes are whitespace. | Semantic link + mechanical whitespace |
| `dfb978d4cc307b814fb5a7a1680cad5c3bbcfb3e` | 2022-08-31 | `FHIR-21452 Missing link and end parentheses - SDC #141` | Changed bottom usage link to `/implementations/registry/` and fixed missing closing parenthesis. | Editorial; link later reverted |
| `0d58d10e724397da66de18b51936bc3c2702e4f7` | 2022-08-31 | `typos` | Restored bottom link to `/implementations/usage` but kept closing parenthesis. | Editorial |
| `e93b4f3ecd8b2bfbfaf8996b19d5926cde408578` | 2022-12-07 | `FHIR-35780 Update guidance for canonical references to core spec StructureDefinitions` | Added package note, initially with `hl7.fhir.r{x}.core{x}` / `hl7.fhir.r4.core4`. | Semantic guidance, later corrected |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | `it's` -> `its`; `real world` -> `real-world`. | Editorial |
| `71efd80cc36cff134adc151eeb091df794a3f003` | 2023-03-07 | `remove '(when published')` | Removed `(once published)` from R4B/R5 table version values. | Editorial/maintenance after R5 publication |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changed metadata table to `Responsible Owner`; removed maturity column. | Metadata/template |
| `5475dc947013dea1bd8d227d522b334f4f115c33` | 2025-11-01 | `FHIR-41622` | Corrected package note from `hl7.fhir.r{x}.core{x}` to `hl7.fhir.r{x}.core`. | Semantic/editorial correction |
| `491fe750f34ccc8913ec3887c70e9f68f0a82012` | 2025-11-02 | `Merge remote-tracking branch 'origin/master'` | Merge combined the header and package-note corrections. | Merge/mechanical |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.` in two places. | Editorial |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-26067` (Published, persuasive with modification, applied R5): the FHIR-version CodeSystem lacked two-part codes. Resolution says to update `versions.html#versions`, `http.html#version-parameter`, and add major.minor codes. The page-specific effect is the added link to `versions.html#versions`, not a direct table rewrite.
- `FHIR-35168` (Published, persuasive with modification, applied R5): asked to clarify `fhirVersion` element definitions. Resolution includes "Will add a link from the intro section of the 'versioning' page to this 'versions' section"; implemented at `/source/versioning.html:38`.
- `FHIR-21452` (Published, persuasive, applied R5): a technical correction about a missing link/parenthesis on `formats.html`. It touched this page only through a broad link/parenthesis cleanup at the implementation-usage paragraph; the link target was immediately changed back in the next commit.
- `FHIR-35780` (Published, not persuasive with modification, applied R5): asked whether version-specific profile URLs should instead use ordinary canonical-version syntax such as `http://hl7.org/fhir/StructureDefinition/Patient|4.0.1`. Resolution: do not remove version-specific canonicals; publish version-specific packages containing them so software can resolve them. Implemented as the package note at `/source/versioning.html:188-191`.
- `FHIR-41622` (Applied, persuasive, applied R6): title/proposal said `hl7.fhir.r4.core4 -> hl7.fhir.xver.r4`, but the formal resolution says to change `hl7.fhir.r{x}.core{x}` / `hl7.fhir.r4.core4` to `hl7.fhir.r{x}.core` / `hl7.fhir.r4.core`. Implementation matches the formal resolution. Jira comment links PR #3898.
- `FHIR-44047` (Resolved - change required, persuasive): broad punctuation cleanup for `e.g.,`/`i.e.,`; implemented on this page by PR #3951.

### Other Jira issues that plausibly explain or affect the same page text

- `FHIR-35172` (Published, persuasive with modification, applied R5): "FHIR version management discussions are incomplete and out of date." The description explicitly says tables in `versioning.html#mp-version`, `http.html#version-parameter`, and `versions.html#extensions` were incomplete, including stale "(once published)" text. The resolution says to update R4, add R4B/R5 information, and create a new tracker for the complicated `fhirVersion` compatibility discussion. This is important because the same table is now stale again in R6.
- `FHIR-35779` (Published, persuasive, applied R5): specifically requested removing `(this version)`/`(once published)` from the R4 row and adding an R4B row. Comment on 2022-04-22 says the normative HTTP page had been fixed but the `versioning.html#mp-version` table was still wrong. This is direct evidence that stale current-version wording in this table has been a recognized reader-facing problem before.
- `FHIR-39331` (Resolved - No Change, not persuasive): requested replacing version-specific profile URLs with ordinary canonical-version syntax. Resolution reaffirmed that the URL endpoint is tied to the FHIR version/resource syntax, so each version is hosted at a distinct endpoint. This supports the current retention of version-specific profile URLs.
- `FHIR-40644` (Waiting for Input, unresolved): follow-up from `FHIR-35172` asking to clarify how `fhirVersion` elements in ImplementationGuide, StructureDefinition, and CapabilityStatement should be used and what version compatibility means. 2026 comment says a section should be added to Managing Multiple Versions and linked from related element comments.
- `FHIR-55132` (Submitted, unresolved): spelling/abbreviation cleanup on `versioning.html`, specifically "doesn't". This is concrete but low-priority and not elevated to the action file because it is already filed and not a semantic page-change issue.

### Context-only hits not driving action

- `FHIR-18671`, `FHIR-31348`, and other SQL/FTS hits mention versioning broadly or adjacent pages but did not explain the changed text or reveal a current mismatch in this page.

## Zulip evidence

- `#implementers > R4B versioning` (2022-01-10 to 2022-01-19, `bun run zulip:search snapshot implementers "R4B versioning"`): Lee Surprenant identified the page as stale, asking for removal of `(this version)`/`(once published)` language from the R4 row, addition of an R4B row, and clarification of version-specific profile URLs. Lloyd noted the page was informative but changing it could confuse/break implementations. Grahame said the ordinary canonical-version form would generally be `StructureDefinition/Patient|4.3.0`, but he had adopted an internal protocol using `http://hl7.org/fhir/4.3/StructureDefinition/Patient`; this led to `FHIR-35779` and `FHIR-35780`.
- `#implementers > hl7.fhir.r4.core4 package` (found with `bun run zulip:search fts '"hl7.fhir.r4.core4"' --limit 20`): Igor Bossenko reported the page's package id text and said "The proper package is hl7.fhir.xver.r4." Grahame replied "at the moment you have to make them." Igor then created `FHIR-41622`. Jira's later formal resolution chose `hl7.fhir.r{x}.core`, so I treat the Zulip thread as background rather than an implementation mismatch.
- `#fhir/infrastructure-wg > R6 Versioning Discussion` (2024-10-01): points to a slide deck for R6 versioning/modules discussions; useful context but not a direct source for this page's exact text.
- `#FHIR cross-version issues > WGM Versioning Discussion` (2024-09-25): Bas summarized WGM concerns about splitting FHIR into core/modules, independent module update cycles, and resolving this before R6 publication. This supports that versioning remained active and unsettled after the R5-era edits, but it does not itself define a concrete page edit.
- Quoted Zulip FTS for `FHIR-40644` found no direct issue-key mentions.

## Confluence evidence

- FHIR-I minutes 2020-03-30 (`80118271`): for `FHIR-26067`, minutes say the FHIR version CodeSystem has `4.0.0` but not `4.0`, CapabilityStatement examples use `4.0`, the version parameter page uses `publication.major` which should change to `major.minor`, and FHIR-I voted to fix versions/version-parameter pages and add major.minor to the CodeSystem (Grahame Grieve / Bryn Rhodes: 13-0-0).
- FHIR-I minutes 2022-04-18 (`94660790`): for `FHIR-35780`, minutes say it is too late to change Transformer; version-specific URLs are used by the version-specific publishing package; "Will not remove version specific url"; "Not persuasive with mod" (Grahame Grieve / Gino Canessa: 8-0-0).
- FHIR-I WGM 2022-05 minutes (`101355607`): record `FHIR-35168` as persuasive with modification (Richard Ettema/Gino Canessa: 13-0-1).
- FHIR-I minutes 2023-12-11 (`210077405`): record `FHIR-41622` as persuasive (Rick Geimer/Gino Canessa: 7-0-0).
- FHIR-I WGM 2024-05 minutes (`234784975`): record `FHIR-44047 will fix`.
- FHIR-I minutes 2023-06-05 (`171442373`): for `FHIR-40644`, "Will try to setup an in-person meeting at Dev Days to discuss; assigned to Grahame for now."
- FHIR-I minutes 2026-01-12 (`413046557`): for `FHIR-40644`, notes say artifacts can translate between versions and describe something representing a different FHIR version; "We should add a section to the Managing Multiple Versions https://build.fhir.org/versioning.html page" and refer to it from related element comments such as `StructureDefinition.fhirVersion`.

## Timeline

- **2019-05 to 2022-08:** `FHIR-21452` created/resolved for a missing link/parenthesis on another page; broad cleanup touches this page in Aug 2022 and is partly reverted same day.
- **2020-02 to 2020-03:** `FHIR-26067` created and resolved; FHIR-I minutes record agreement to update version terminology/pages and add major.minor FHIR-version codes.
- **2022-01:** Zulip `R4B versioning` thread identifies stale `versioning.html#mp-version` table and questions version-specific profile URL guidance. `FHIR-35779`, `FHIR-35780`, and `FHIR-35172` capture overlapping work.
- **2022-02-24:** commit `f752cd7c77d81b962b0efef17c9b9967eb74c2a5` applies "Version info updates" including R4B/R5 rows.
- **2022-04 to 2022-05:** FHIR-I votes/dispositions for `FHIR-35780` and `FHIR-35168`; commit `6f6a8881881a31a2ec13ae9d185200556d161b53` applies version terminology/link updates.
- **2022-12:** commit `e93b4f3ecd8b2bfbfaf8996b19d5926cde408578` adds package note for version-specific StructureDefinitions.
- **2023-01 to 2023-03:** `FHIR-39331` re-challenges version-specific URL style and is resolved no-change; `FHIR-35172` notes follow-up `FHIR-40644`; commit `71efd80cc36cff134adc151eeb091df794a3f003` removes `(once published)` from R4B/R5 table values after R5 publication.
- **2023-12:** `FHIR-41622` voted persuasive, correcting the package id text; implementation lands in 2025 PR #3898/commit `5475dc947013dea1bd8d227d522b334f4f115c33`.
- **2024-05 to 2025-11:** `FHIR-44047` punctuation cleanup is discussed/voted and applied by PR #3951.
- **2024-09 to 2024-10:** R6 versioning/module discussions continue on Zulip; context only for this page.
- **2025-10 to 2025-11:** R6 header metadata/template changes and late Jira corrections land. No R6 update to the R5 `(this version)` row appears.
- **2026-01:** `FHIR-40644` is still waiting for input; FHIR-I minutes say to add a section to the Managing Multiple Versions page and link related `fhirVersion` element comments to it.

## Evidence log

- Read `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.
- Boundary/diff/history:
  - `test -f "$OLD_TREE/source/versioning.html"` and `test -f "$NEW_TREE/source/versioning.html"` confirmed both files exist.
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/versioning.html`
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/versioning.html`
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <commit> -- source/versioning.html` for all 12 commits.
  - `git -C "$NEW_TREE" --no-pager show -m --stat --patch 491fe750f34ccc8913ec3887c70e9f68f0a82012 -- source/versioning.html` to inspect the merge commit.
- Full newer page:
  - `wc -l "$NEW_TREE/source/versioning.html"` returned 240.
  - Read `/source/versioning.html:1-120` and `:121-240`.
- Jira:
  - `bun run jira:search snapshot FHIR-26067 FHIR-35168 FHIR-21452 FHIR-35780 FHIR-41622 FHIR-44047` (run as separate snapshot commands in a loop).
  - `bun run jira:search snapshot FHIR-35172`, `FHIR-35779`, `FHIR-39331`, `FHIR-40644`, `FHIR-55132`.
  - SQL/FTS searches for `versioning.html`, `FHIR-core-versioning`, `Version Specific Profile`, `version specific packages`, and R6/R5 table terms. No resolved R6-table-specific Jira was found.
- Zulip:
  - Initial unquoted key searches such as `bun run zulip:search fts "FHIR-26067"` failed because FTS parsed the hyphen; rerun as `bun run zulip:search fts '"FHIR-26067"' --limit 20`.
  - `bun run zulip:search snapshot implementers "R4B versioning"`.
  - `bun run zulip:search fts '"hl7.fhir.r4.core4"' --limit 20`.
  - `bun run zulip:search snapshot "fhir/infrastructure-wg" "R6 Versioning Discussion"`.
  - `bun run zulip:search snapshot "FHIR cross-version issues" "WGM Versioning Discussion"`.
- Confluence:
  - `bun run confluence:search refs jira <key>` and `bun run confluence:search fts <key> --limit 20` for explicit Jira keys and `FHIR-40644`.
  - Snapshots: `78678679`, `80118271`, `94660790`, `101355607`, `210077405`, `234784975`, `171442373`, `413046557`.
- GitHub PR lookup:
  - `gh api -H 'Accept: application/vnd.github.groot-preview+json' repos/HL7/fhir/commits/<sha>/pulls` found PR #1717, #1961, #2475, #3898, and #3951 for selected commits.
