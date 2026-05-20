# versions research appendix

## Scope and coverage

- Page path: `source/versions.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary check: `source/versions.html` exists in both trees; status is modified, not added/deleted/renamed.
- New page read end-to-end: 823 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:1-823`.
- Direct diff: raw `--numstat` reported `823 771 source/versions.html`; whitespace-filtered diff reported `268 insertions(+), 216 deletions(-)`.
- Source history: 76 commits touched this page in range. Explicit Jira keys found in commit metadata: `FHIR-19958`, `FHIR-20653`, `FHIR-20850`, `FHIR-21225`, `FHIR-21452`, `FHIR-21644`, `FHIR-22268`, `FHIR-22657`, `FHIR-22671`, `FHIR-22692`, `FHIR-24828`, `FHIR-24857`, `FHIR-24913`, `FHIR-25212`, `FHIR-25408`, `FHIR-25431`, `FHIR-25744`, `FHIR-26067`, `FHIR-27053`, `FHIR-27754`, `FHIR-28479`, `FHIR-31348`, `FHIR-31400`, `FHIR-31721`, `FHIR-32299`, `FHIR-33957`, `FHIR-34307`, `FHIR-35168`, `FHIR-36702`, `FHIR-36755`, `FHIR-38876`, `FHIR-38991`, `FHIR-38998`, `FHIR-40494`, `FHIR-40575`, `FHIR-40644`, `FHIR-40757`, `FHIR-42923`, `FHIR-42924`, `FHIR-44047`, `FHIR-44052`, `FHIR-44616`, `FHIR-47042`, `FHIR-47043`, `FHIR-47046`, `FHIR-47049`, `FHIR-47627`, `FHIR-47629`, `FHIR-47643`, `FHIR-48379`, `FHIR-51051`, `FHIR-53045`, `FHIR-53318`.
- Jira snapshots/searches: all explicit history keys were snapshotted; additional exact-phrase searches found `FHIR-47208` and `FHIR-54575`; `FHIR-47208` led to `FHIR-47216`.
- Zulip searches: exact quoted keys `FHIR-47208`, `FHIR-47216`, `FHIR-42924`, `FHIR-54575` found no direct hits; exact phrase searches for the stale R5/R6 text found no direct hits. A broader cross-version/R6 search found context-only implementation threads, not page-specific rationale.
- Confluence searches: found FHIR-I minutes for `FHIR-42924` and `FHIR-47216`; no Confluence refs found for `FHIR-47208` or `FHIR-54575`.
- Caveat: no source commit in the page history explicitly mentions `FHIR-47208` or `FHIR-47216`; the likely related implementation is `FHIR-42924`/PR 3967, but the current page still appears not to satisfy the R6-table part of those Jira dispositions.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:1-823` | Full current context read end-to-end |
| Source | Version numbering section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:169-259` | Major/minor/patch-label policy changed from R4 wording |
| Source | Inter-version compatibility rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:278-545` | Contains most normative/semantic policy changes |
| Source | Cross-version extension defining-version table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:650-673` | Table still lists R5 as "(this version)" and lacks an R6/6.0 row |
| Source | Cross-version package table typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:761-767` | R6 Extensions / R5 Package row links to `xver-r5.r6` but displays `xver-r6.r6` |
| Source | Future-release plans | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:776-817` | Contains stale R6/R5 planning language |
| Commit | `4eaeb36c85028133b5b2744d2923ed6cc4f8b372` | https://github.com/HL7/fhir/commit/4eaeb36c85028133b5b2744d2923ed6cc4f8b372 | Implements `FHIR-42923` defining-version wording |
| Commit | `e89e89caca55b2ecdb1ba6820a95b94f9115d36a` | https://github.com/HL7/fhir/commit/e89e89caca55b2ecdb1ba6820a95b94f9115d36a | Implements `FHIR-42924` package-table changes and introduces the visible `xver-r6.r6` text mismatch |
| Commit | `f45505e5b3aa0d87effb991938750e627b782d2d` | https://github.com/HL7/fhir/commit/f45505e5b3aa0d87effb991938750e627b782d2d | Removes most detailed cross-version extension guidance/examples from this page |
| PR | HL7/fhir#3967 | https://github.com/HL7/fhir/pull/3967 | Merged 2025-11-09; includes `FHIR-42923`, `FHIR-42924`, `FHIR-44616`, `FHIR-53318`, and later cross-version cleanup |
| Jira | `FHIR-42924` | https://jira.hl7.org/browse/FHIR-42924; reopen with `bun run jira:search snapshot FHIR-42924` | Formal disposition says to fix cross-version table errors, add R6, and make sure it says R6 |
| Jira | `FHIR-47208` | https://jira.hl7.org/browse/FHIR-47208; reopen with `bun run jira:search snapshot FHIR-47208` | Highest-priority TC: R6 missing from the defining-version table now still visible |
| Jira | `FHIR-47216` | https://jira.hl7.org/browse/FHIR-47216; reopen with `bun run jira:search snapshot FHIR-47216` | Highest-priority TC: update all tables to have R6 as well as R5 |
| Jira | `FHIR-54575` | https://jira.hl7.org/browse/FHIR-54575; reopen with `bun run jira:search snapshot FHIR-54575` | Submitted R6 ballot negative: future-release plans section is out of date |
| Confluence | FHIR-I minutes 2024-04-01 | https://confluence.hl7.org/spaces/FHIRI/pages/230555687/FHIR+Infrastructure+Minutes+CC+2024-04-01; reopen with `bun run confluence:search snapshot 230555687` | Records FHIR-I approval of `FHIR-42923` and `FHIR-42924` as persuasive |
| Confluence | FHIR-I minutes 2024-09-16 | https://confluence.hl7.org/spaces/FHIRI/pages/265492373/FHIR+Infrastructure+Minutes+CC+2024-09-16; reopen with `bun run confluence:search snapshot 265492373` | Records `FHIR-47216` technical correction marked persuasive |

## Change summary

### Standards status and maturity model

- Classification: semantic guidance plus editorial/template updates.
- The page header was updated from the older mixed FMM/status display to `Responsible Owner` plus `Standards Status: Normative` (`source/versions.html:14`).
- The standards status table was revised, including a corrected Normative description and a new note that statuses in ballots/CI builds reflect intended status after final publication (`source/versions.html:56-122`).
- The old "Mixed Normative content" section was removed by `7466cfc63cd0b162497a42c80a67480eed86c75a`; this is a substantive restructuring of how mixed normative/trial-use content is explained.
- The maturity section was rewritten from older "Draft (0) / FMM 1..." wording to an explicit FMM 0-FMM 6 model, with FMM 6 marked synonymous with Normative (`source/versions.html:124-165`).

### Version numbering policy

- Classification: semantic guidance.
- R4's `publication.major.minor.revision` framing changed to `major.minor.patch-label` (`source/versions.html:192-249`).
- R6 was added to the major-release list (`source/versions.html:200-207`).
- Version labels are explained as sortable only within the same label base, with no sortable relationship across labels (`source/versions.html:234-248`).
- Jira evidence: `FHIR-26067`, `FHIR-35168`, and `FHIR-38998` are the most relevant historical issues for version-code terminology and label/SemVer clarification.

### Inter-version compatibility rules

- Classification: substantive/normative and semantic guidance.
- Change classes were refocused around conformant resource instances rather than "applications" (`source/versions.html:281-290`).
- The page now separates Draft/Trial Use freedom to change from Normative compatibility rules and adds an explicit exception process for rare Normative-breaking changes (`source/versions.html:301-318`).
- The forward/backward rules now state the rules themselves are not normative and point to FMG's breaking-change policy (`source/versions.html:343-348`).
- Cardinality guidance now warns that 1-to-* changes can break JSON paths and FHIRPath expressions, and says such normative changes will be minimized (`source/versions.html:376-386`).
- Datatype guidance now allows special simple type substitutions where domain spaces are the same, currently `string` to `markdown` and `code` to `uri` (`source/versions.html:447-458`).
- Value-constraint guidance now allows warning/best-practice invariants and certain new error invariants tied to new content or existing narrative rules (`source/versions.html:461-465`).
- Reference guidance now allows adding resources/profiles to target lists and clarifies non-normative target resource names may change (`source/versions.html:527-535`).
- Conformance-language guidance was added: SHALL statements cannot be broken, new SHALL statements must be version-conditional, and SHOULD/MAY changes are permitted (`source/versions.html:537-541`).

### Cross-version extensions

- Classification: substantive guidance, section restructuring, and concrete table defects.
- Older detailed cross-version extension rules, primitive-type mappings, and examples were heavily reduced by `f45505e5b3aa0d87effb991938750e627b782d2d`, with details redirected to individual cross-version definition packages (`source/versions.html:641-696`).
- The URL pattern is now `http://hl7.org/fhir/[defining_version]/StructureDefinition/extension-[Path]` (`source/versions.html:641-650`), following `FHIR-42923`.
- The defining-version list currently includes DSTU2, R3, R4, R4B, and R5 only, and labels R5 as `(this version)` (`source/versions.html:652-673`). For an R6 ballot page, this conflicts with `FHIR-47208` and `FHIR-47216`, which asked for R6 to be added/updated.
- The formal package matrix was converted to `hl7.fhir.uv.xver-*` guides and adds R4B/R5/R6 rows and columns (`source/versions.html:703-769`), following `FHIR-42924`.
- The R6 Extensions / R5 Package cell has a display/link mismatch: href `https://hl7.org/fhir/uv/xver-r5.r6/` but displayed text `hl7.fhir.uv.xver-r6.r6` (`source/versions.html:761-767`).

### Future-release plans

- Classification: semantic/future-planning guidance with stale text.
- R4 text about the next major publication being R5 was replaced by R6-era text, but the current R6 ballot4 page still says "HL7's general intent for the Release 6..." and still ends with "More information on plans for Release 5..." (`source/versions.html:776-817`).
- Jira `FHIR-54575` is a submitted R6 ballot negative specifically saying the Plans for Future Releases section is out of date and cites the Release 5 sentence.

### Mechanical/editorial churn

- There is broad formatting, punctuation, link, and template churn across the file.
- `cfbe4bd6c9435ec8643117cf43176e83a8a9b378` appears as a very large patch because of file-wide churn, but the page-relevant semantic change is the FHIRPath/cardinality warning tied to `FHIR-48379`.
- Several small current-page typos are visible (`"this this"` at line 313, `f-compat-cardianality` at line 378, `This leads to URLs like following` at line 687, `in an ongoing basis` at line 172). They were not elevated to the action file because stronger R5/R6 defects already have direct Jira/source evidence.

## Source history

| Date | Commit | Subject | Classification | Notes |
|---|---|---|---|---|
| 2019-12-31 | `ff9475f5fd8b1c9bf6a7a6f0ddd3e1e9601e0861` | `4.2.0 release` | release/version churn | Early post-R4 update |
| 2022-05-13 | `6f6a8881881a31a2ec13ae9d185200556d161b53` | `FHIR-26067, FHIR-35168 FHIR version updates` | semantic guidance | Major/minor/patch terminology and version code cleanup |
| 2022-08-22 | `526d8c02b309fb11b45bbfc4b60f7da0b491b935` | `FHIR-28479 Clarification on backport extensions for backbone elements` | semantic guidance | Cross-version/backport extension clarification |
| 2022-08-22 | `a6c96740e3c077f3b8c13ce548cfe58c25c80686` | `FHIR-31348 Clarify allowable Extension URLs for converting between versions` | semantic guidance | Cross-version extension URL rules |
| 2022-08-22 | `7e0b2667a232a9a92f16842ef6bfe306637fa432` | `FHIR-36702 Need more guidance on use of inter-version extensions` | semantic guidance | More inter-version extension prose |
| 2022-08-28 | `67c4ba690d1c4aca555bf00d9f8ca9bdbbbb095e` | `FHIR-24913 Outdated statements on Version page` | editorial/semantic | Standards-status wording cleanup |
| 2022-09-02 | `f0b227068f110edc2debe58489dffa7f55488083` | `FHIR-36755 Forward / Backward Compatibility Rules - Clarify Warning Constraints are Allowed` | substantive/normative | Value-constraint rule relaxation |
| 2022-09-02 | `254ea0c87356baddf7f1da9c0a8fdbc91ca6a27f` | `FHIR-31721 Clarify details in "Extensions for converting between versions"` | substantive guidance | Added detailed xver guidance that was later moved out |
| 2022-09-05 | `d390dda8ccfe932b513ec16c26adcd5dc66e518c` | `FHIR-25744 - Clarify rules for normative shared SearchParameters` | semantic guidance | Mixed-status/search parameter note, later removed with mixed-note cleanup |
| 2023-02-15 | `29b2f1596afb0a22642e6ac1727659395f94b985` | `FHIR-38998 Version labels should note they are not SemVer compliant` | semantic guidance | Label/SemVer clarification |
| 2023-03-18 | `653d9c4f9ed7886d566c50c27b0fe127d6955ec3` | `FHIR-38876 - Added additional dragon on breaking changes` | semantic guidance | Added warning about breakage risk despite compatibility rules |
| 2023-03-19 | `96bbb3012090ba09fd4c9f4cb2659881c77cdb9c` | `FHIR-40494 Clarified conformance expectations` | substantive/normative | Added conformance-language rule |
| 2023-03-19 | `97e712ffb3a22610e245bfa399a81575a8618797` | `FHIR-40644 - More explanation of interversion table` | semantic guidance | Version identification / compatibility explanation |
| 2023-03-20 | `e6b8a1b075914d0e8d2a269ab855dafa0b2ec41a` | `FHIR-40575 - Updated FMM language` | semantic guidance | Draft/FMM clarity |
| 2023-06-19 | `df051c3446b8fee5ffbc9f4e5a6389ada2016aec` | `Clarify breaking normative changes` | substantive/normative | Rarity/governance language for normative-breaking changes |
| 2024-09-03 | `fa5218bf4deb7a9a78c5c10bc68f5813e23e96f6` | `Technical corrections in versions.html` | editorial | Retained stale Release 5 future-plans sentence |
| 2024-09-27 | `0a5592638b4ebfaa8352e8ec5f9b2ae0044e7a71` | `Changes from FHIR-47629.` | semantic guidance | Cardinality/JSON parsing concerns |
| 2024-09-27 | `0497ffa7855726059d80793c2b254ff8989b232b` | `FHIR-47643` | semantic guidance | References row updated for additional targets / non-normative targets |
| 2024-10-09 | `65727f6d0bfec6eaf0cf7f6268aa74ebc4daba3d` | `FHIR-47049` | editorial/semantic | R5 FMM process note cleanup |
| 2024-10-09 | `d31b267a97563dd2b13b03625a3563094b8e3903` | `FHIR-47046` | editorial/semantic | Version Management Policy readability |
| 2024-10-09 | `33880408cefd2ab1064a1f4fcd8394bb01ca7765` | `FHIR-47043` | editorial/semantic | Mixed normative example update |
| 2025-10-22 | `cfbe4bd6c9435ec8643117cf43176e83a8a9b378` | `FHIR-48379 Add warning that FHIRPath expressions might break if the maximum cardinality changes` | substantive/semantic plus mechanical | Large patch; key change is FHIRPath/cardinality warning |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | release/status update | Adds R6 major-release bullet and R6 full-normative framing |
| 2025-11-01 | `bc8a4c464edabb975649e3d4f99cc563860275f6` | `FHIR-51051 Change the inter-version normative rules to allow non-breaking simple type changes` | substantive/normative | Allows same-domain simple datatype changes |
| 2025-11-03 | `646515ee81a4171c6b228a8f9682241cd6d1450b` | `FHIR-53045 Inconsistent definition of standards status values` | semantic guidance | Ballot/CI intended-status note |
| 2025-11-03 | `c46739931e52251ab6756583b8d7b49abd34c1aa` | `FHIR-47042 Improve readability of Version Management Policy` | editorial/semantic | FMM readability edits |
| 2025-11-03 | `6d88889ec3eb977bf53d55346ddb9fa5267d61d9` | `FHIR-44052 Representation of Draft (FMM 0) is unclear and confusing` | semantic guidance | Changes "Draft (0)" to "FMM 0" |
| 2025-11-03 | `aec3a16f6006be381543368ecafb845554b913be` | `FHIR-40757 Using R5 extensions in R4 that make required fields obsolete.` | semantic guidance | Adds data-absent-reason note for mandatory elements |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | editorial | Punctuation cleanup |
| 2025-11-03 | `4eaeb36c85028133b5b2744d2923ed6cc4f8b372` | `FHIR-42923 - Clarify version meaning in cross-version extension URLs` | semantic guidance | Introduces `[defining_version]` phrase |
| 2025-11-03 | `e89e89caca55b2ecdb1ba6820a95b94f9115d36a` | `FHIR-42924 - Fix cross-version extension table errors and add R6` | semantic guidance plus defect | Adds R6 package row/column but leaves `xver-r5.r6` display typo |
| 2025-11-03 | `383aee6ad063ba1d929965c7526322763b25ad00` | `FHIR-44616 - Document data-absent-reason for inter-version mandatory elements` | semantic guidance | Added detailed xver/DAR rule later mostly removed from this page |
| 2025-11-03 | `5033010328ab2b45de17711dc63c3c5f5f512530` | `FHIR-53318 - Clarification around cross-version extension cardinalities.` | semantic guidance | Detailed xver cardinality rule later moved out |
| 2025-11-04 | `2f9d5a3ad195110195605fee188a9d2d7506c3e7` | `FHIR-47627 FHIR release update schedule` | semantic guidance | Removes fixed 18-24 month release-cycle claim |
| 2025-11-07 | `f45505e5b3aa0d87effb991938750e627b782d2d` | `R6 - pulling cross-version content that moves to guides` | restructure | Removes most xver examples/details from this page |
| 2025-11-12 | `7466cfc63cd0b162497a42c80a67480eed86c75a` | `sort out trial-use notes` | restructure | Removes mixed normative/trial-use notes |

## Jira evidence

### Explicit Jira keys from commits/patches

- All explicit Jira keys found in page history were snapshotted with:
  `git -C "$NEW_TREE" log --reverse --format='%s%n%b' ... -- source/versions.html | rg -o 'FHIR-[0-9]+' | sort -u`
  followed by `bun run jira:search snapshot <KEY>`.
- High-signal explicit Jira issues:
  - `FHIR-26067`: version code terminology; resolution says update `versions.html#versions` to major/minor/patch and eliminate revision.
  - `FHIR-24828`: add FMG breaking-change policy to the inter-version change page.
  - `FHIR-25744`: clarify normative shared SearchParameter rules; later mixed-status note was removed from the current page.
  - `FHIR-31721`: detailed implied/cross-version extension guidance and package-link concerns.
  - `FHIR-32299`: references row did not cover expansion of allowed reference targets.
  - `FHIR-36755`: warning/best-practice invariant allowances.
  - `FHIR-38876`: additional "dragon" warning for breaking changes.
  - `FHIR-38998`: version labels are not strictly SemVer.
  - `FHIR-40494`: conformance language rule for SHALL/SHOULD/MAY.
  - `FHIR-40757`: R5 extensions in R4 where mandatory fields become obsolete; resolution text matches the current `data-absent-reason` note at lines 617-620.
  - `FHIR-42923`: clarify that `[defining_version]` means the version where the element is defined.
  - `FHIR-42924`: cross-version extension table errors; resolution says to fix the R5 row, add R6 row/column, and make sure it actually says R6.
  - `FHIR-44052`: FMM 0/Draft representation.
  - `FHIR-47042`, `FHIR-47043`, `FHIR-47046`, `FHIR-47049`: R6 readability and stale R5/mixed-status content cleanups.
  - `FHIR-47627`: release schedule text; resolution removes fixed 18-24 month cadence language.
  - `FHIR-47629`: cardinality changes can break JSON/FHIRPath processing.
  - `FHIR-47643`: references to draft resources / target expansion.
  - `FHIR-48379`: FHIRPath expressions might break when maximum cardinality changes.
  - `FHIR-51051`: non-breaking simple datatype changes.
  - `FHIR-53045`: inconsistent standards status values.
  - `FHIR-53318`: cross-version extension cardinalities.

### Other Jira issues that plausibly explain or contradict current text

- `FHIR-47208` ("R6 missing in Version Management Policiy") was found by exact phrase search for `"FHIR R5" "this version"`. It is a Highest-priority Technical Correction, status `Resolved - change required`, resolution `Persuasive`, and says R6 is missing from the table where `[version]` is taken from the list. The current R6 ballot4 page still lacks that R6 row at lines 652-673.
- `FHIR-47216` ("R5 comment in version management policy page") is linked from `FHIR-47208`. It is also Highest-priority TC, `Resolved - change required`, and its resolution says: "We will update all tables on that page to have R6 as well as R5." The current formal package matrix has R6, but the defining-version table does not.
- `FHIR-54575` ("Update Plans for Future Releases") was found by exact phrase search for `"More information on plans for Release 5"`. It is `Submitted`, unresolved, R6 ballot `BALLOT-89586`, and cites the current page's stale Release 5 future-plans sentence.

### Context-only Jira hits that should not drive action

- Many explicit keys from the page history were unrelated to current-page defects or were already applied cleanly (`FHIR-19958`, `FHIR-20653`, `FHIR-21225`, `FHIR-21452`, `FHIR-21644`, `FHIR-22268`, `FHIR-22657`, `FHIR-22671`, `FHIR-22692`, `FHIR-24857`, `FHIR-25212`, `FHIR-27053`, `FHIR-27754`, etc.). They were retained as audit context only.
- Jira searches for `xver-r6.r6` found no issue. The defect is visible in source and in the `FHIR-42924` implementation commit rather than being separately tracked.
- Jira searches for `f-compat-cardianality` found no issue. The misspelled anchor is a minor source defect and was not elevated above stronger findings.

## Zulip evidence

- Exact quoted key searches were run for `FHIR-47208`, `FHIR-47216`, `FHIR-42924`, and `FHIR-54575`; no direct Zulip hits were found.
- Exact phrase searches for `"R6 missing" "Version Management"`, `"More information on plans for Release 5"`, and `"xver-r6.r6"` found no direct Zulip hits.
- A broader search for `"cross-version extension" "R6" "version"` found implementation-context threads such as:
  - `#IG creation > Cross-Version Extension to R6 404 error` (May 2025), where participants discussed R6 cross-version extension support/package availability.
  - `#fhir/infrastructure-wg > Cross version extensions for R6 ballots` (Jan 2025), about which releases are in scope for cross-version extensions.
- These Zulip hits were not used as primary evidence for action because they do not discuss `source/versions.html`, `FHIR-42924`, `FHIR-47208`, `FHIR-47216`, or the exact stale/incorrect page text.
- Note: the first unquoted Zulip searches for keys like `FHIR-47208` failed because FTS parsed the hyphenated key as an operator; the quoted searches above were the material ones.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-42924` found FHIR Infrastructure minutes page `230555687`, "FHIR Infrastructure Minutes CC 2024-04-01". Snapshot shows `jira:FHIR-42923 Persuasive Gino Canessa / Richard Ettema: 8-0-0` and `jira:FHIR-42924 Persuasive Gino Canessa / Richard Ettema: 7-0-1`.
- `bun run confluence:search refs jira FHIR-47216` found FHIR Infrastructure minutes page `265492373`, "FHIR Infrastructure Minutes CC 2024-09-16". Snapshot shows `jira:FHIR-47216 TC - Marked As Persuasive`.
- No Confluence refs found for `FHIR-47208` or `FHIR-54575`.
- Confluence phrase searches for `"R6 missing" "Version Management"`, `"More information on plans for Release 5"`, and `"cross-version extension table" R6` found no additional high-signal pages.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2024-04-01 | WG minutes/vote | Confluence page `230555687` | FHIR-I marked `FHIR-42923` persuasive (8-0-0) and `FHIR-42924` persuasive (7-0-1) |
| 2024-09-09 | Jira created | `FHIR-47208`, `FHIR-47216` | Highest-priority TCs about missing R6 / stale R5 comment in version management tables |
| 2024-09-16 | Jira resolved / WG minutes | `FHIR-47208`, `FHIR-47216`, Confluence page `265492373` | `FHIR-47216` TC marked persuasive; both Jira issues remain `Resolved - change required`, not `Applied`/`Published` |
| 2025-11-03 | Source commits | `4eaeb36c85028133b5b2744d2923ed6cc4f8b372`, `e89e89caca55b2ecdb1ba6820a95b94f9115d36a` | Implements `FHIR-42923`/`FHIR-42924`; leaves defining-version table without R6 and introduces package text mismatch |
| 2025-11-07 | Source commit | `f45505e5b3aa0d87effb991938750e627b782d2d` | Moves most xver details/examples to guides; current page retains high-level xver tables |
| 2025-11-09 | PR merge | HL7/fhir#3967 | `R6 Tickets` PR merged with the relevant xver commits |
| 2025-11-12 | Source commit | `7466cfc63cd0b162497a42c80a67480eed86c75a` | Removes mixed normative/trial-use notes |
| 2026-01-16 | Jira created | `FHIR-54575` | R6 ballot negative says Plans for Future Releases is out of date |
| 2026-05-20 | Review | Current source lines | R6 ballot4 page still contains the R5/R6 table and plans issues above |

## Evidence log

- Boundary:
  - `test -f "$OLD_TREE/source/versions.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/versions.html" && echo "new exists"`
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/versions.html`
  - `git -C "$NEW_TREE" --no-pager diff --find-renames --ignore-space-change --ignore-blank-lines --unified=3 ... -- source/versions.html`
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/versions.html`
  - Selected `git show --stat --patch` runs for Jira-linked commits, especially `4eaeb36c...`, `e89e89c...`, `f45505e...`, and `7466cfc...`.
- Current page read:
  - `wc -l "$NEW_PAGE"` returned `823`.
  - `sed -n '1,220p'`, `sed -n '221,440p'`, `sed -n '441,660p'`, and `sed -n '661,860p'` read the full file.
- Jira:
  - Snapshotted all explicit history keys with `bun run jira:search snapshot <KEY>`.
  - Extra searches:
    - `bun run jira:search fts '"FHIR R5" "this version"' --limit 20` -> `FHIR-47208`.
    - `bun run jira:search snapshot FHIR-47208` -> points to `FHIR-47216`.
    - `bun run jira:search snapshot FHIR-47216`.
    - `bun run jira:search fts '"More information on plans for Release 5"' --limit 20` -> `FHIR-54575`.
    - `bun run jira:search snapshot FHIR-54575`.
    - `bun run jira:search fts '"xver-r6.r6"' --limit 20` -> no hits.
- Zulip:
  - Quoted exact key searches for `FHIR-47208`, `FHIR-47216`, `FHIR-42924`, `FHIR-54575` -> no direct hits.
  - Exact phrase searches for the stale/current text -> no direct hits.
  - Broader `"cross-version extension" "R6" "version"` -> context-only threads, not used for action.
- Confluence:
  - `bun run confluence:search refs jira FHIR-42924` -> page `230555687`; snapshot taken.
  - `bun run confluence:search refs jira FHIR-47216` -> page `265492373`; snapshot taken.
  - `refs jira` for `FHIR-47208` and `FHIR-54575` -> no refs.
  - Phrase searches for R6 missing / Release 5 / cross-version extension table -> no additional high-signal pages.
