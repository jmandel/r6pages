# terminologies-systems research appendix

## Scope and coverage

- Page path: `source/terminologies-systems.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Both old and new source files exist:
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminologies-systems.html`
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html`
- The R6 ballot4 source page was read end-to-end. It has 201 lines.
- Direct diff size: `1 file changed, 64 insertions(+), 329 deletions(-)`.
- Source history between the two commits has 33 commits touching this page.
- Explicit Jira keys found in commit messages/patch context: 58 unique `FHIR-*` keys. Many came from broad batch commits whose page patch was only one small adjacent edit or whose key belonged to a different terminology page.
- Jira searches performed:
  - SQL summary for all explicit keys found in source history.
  - Snapshots for page-specific or plausibly page-specific keys: `FHIR-25030`, `FHIR-27805`, `FHIR-28294`, `FHIR-28553`, `FHIR-31878`, `FHIR-31938`, `FHIR-34074`, `FHIR-35800`, `FHIR-35933`, `FHIR-37800`, `FHIR-37853`, `FHIR-37887`, `FHIR-39098`, `FHIR-39156`, `FHIR-41305`, `FHIR-46008`, `FHIR-47594`, `FHIR-50716`, plus later/actionable `FHIR-53839` and `FHIR-54107`.
  - Phrase searches for `"Defined Externally" tab`, `"Request Content in External Terminologies"`, `"This is a subset of a much larger list of known code systems"`, `"THO not listed"`, `"External Code Systems" "terminologies-systems"`, and `"Code systems are tightly bound"`.
- Zulip searches performed:
  - Quoted issue-key searches for `FHIR-37853`, `FHIR-35933`, `FHIR-54107`, `FHIR-53839`, `FHIR-50716`, `FHIR-37887`, `FHIR-41305`, and `FHIR-46008`.
  - Phrase/topic searches for THO/external-code-system terms. No direct issue-key hits were found. Useful context came from `#TSMG > Terminology moved from the base spec to THO`.
- Confluence searches performed:
  - `refs jira` and FTS for `FHIR-37853`, `FHIR-35933`, `FHIR-54107`, `FHIR-53839`, `FHIR-50716`, and `FHIR-37887`.
  - Phrase searches around THO source-of-truth and current typo/stale-tab wording.
- Caveats:
  - `FHIR-25058` appears in the first MED-RT commit message but was missing from the local Jira snapshot; `FHIR-28553` is the Jira issue found for MED-RT being missing from the Code Systems page.
  - Zulip FTS treats unquoted hyphenated Jira keys as expressions; the initial unquoted key search failed, then quoted key searches were rerun.
  - Some Confluence snapshot lines are long normalized text lines; use page IDs and snapshot commands below to reopen precise context.
  - `FHIR-54107` and `FHIR-53839` postdate the R6 ballot4 source commit; they are later review evidence, not causes of the R4 -> R6 diff.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 current page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:20-29` | Current URI-finding preamble now points to THO, THO CI, and TSMG. |
| Source | R6 important notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:31-39` | Contains non-authoritative external-content note and stale "Defined Externally tab" wording. |
| Source | R6 external table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:48-147` | Current curated external subset and THO links. |
| Source | R6 internal section defects | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:150-156` | Duplicate `external` anchor and the typo addressed by `FHIR-53839`. |
| Source | R6 leftover tab script | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:173-198` | JavaScript still initializes `#tabs`, but there is no `id="tabs"` in the page. |
| Commit | MED-RT added | `dbf5fc9782846c863dbaea251c4a2a632428150d` / `https://github.com/HL7/fhir/commit/dbf5fc9782846c863dbaea251c4a2a632428150d` | Added MED-RT row; commit message says `FHIR-25058`, but local Jira lacked that key. |
| Commit | Major THO source-of-truth rewrite | `736ccce2005fd2c8c2d20dfe8df948e8c9d586d8` / `https://github.com/HL7/fhir/commit/736ccce2005fd2c8c2d20dfe8df948e8c9d586d8` | Applied `FHIR-37853`; pruned most external rows and qualified authoritative status. |
| Commit | External links moved to THO pages | `81e5862f203fdb8a03e9c943a7cf455aba8973f4` / `https://github.com/HL7/fhir/commit/81e5862f203fdb8a03e9c943a7cf455aba8973f4` | Applied `FHIR-35933`; "Using X with FHIR" links became THO "Using X with HL7 Standards" links. |
| Commit | ISO 3166 and section restructuring | `b11348ce8cce8fc30edd440a5b97ee5a8051bc0c` / `https://github.com/HL7/fhir/commit/b11348ce8cce8fc30edd440a5b97ee5a8051bc0c` | Applied `FHIR-37887`; also removed the tab wrapper and introduced the duplicate `external` anchor. |
| Commit | THO URI search guidance | `6d869ab83ab028881cf3ecd47aa96d0de2180178` / `https://github.com/HL7/fhir/commit/6d869ab83ab028881cf3ecd47aa96d0de2180178` | Applied `FHIR-50716`; replaced older OID/documentation/owner/mailing-list search order. |
| Commit | THO CI link markup fix | `d1537ba40fe031c8970dad38d2383bb8ba476630` / `https://github.com/HL7/fhir/commit/d1537ba40fe031c8970dad38d2383bb8ba476630` | Fixed malformed anchor introduced by `FHIR-50716`, though commit subject was for `FHIR-50922`. |
| Commit | R6 normative status | `148c3eb0804a643521a053723eb0ec7d702dd571` / `https://github.com/HL7/fhir/commit/148c3eb0804a643521a053723eb0ec7d702dd571` | Changed page status from Informative to Normative after an earlier R6 status-code conversion. |
| Jira | `FHIR-37853` | `https://jira.hl7.org/browse/FHIR-37853`; reopen with `bun run jira:search snapshot FHIR-37853` | Formal rationale for making THO the source of truth and pruning external-code-system content. |
| Jira | `FHIR-35933` | `https://jira.hl7.org/browse/FHIR-35933`; reopen with `bun run jira:search snapshot FHIR-35933` | Formal rationale for migrating "Using X with FHIR" pages to THO. |
| Jira | `FHIR-50716` | `https://jira.hl7.org/browse/FHIR-50716`; reopen with `bun run jira:search snapshot FHIR-50716` | R6 ballot issue adding THO/THO CI/TSMG guidance to the URI search list. |
| Jira | `FHIR-54107` | `https://jira.hl7.org/browse/FHIR-54107`; reopen with `bun run jira:search snapshot FHIR-54107` | Later R6 ballot issue asking to remove/rewrite the External Code Systems section as duplicative of THO. |
| Jira | `FHIR-53839` | `https://jira.hl7.org/browse/FHIR-53839`; reopen with `bun run jira:search snapshot FHIR-53839` | Later technical correction for a typo still visible in the R6 ballot4 page. |
| Confluence | Vocab vote for `FHIR-37853` | Page `134947751`, `https://confluence.hl7.org/spaces/VOC/pages/134947751`; reopen with `bun run confluence:search snapshot 134947751` | Vocab meeting where `FHIR-37853` was on the voting agenda. |
| Confluence | Follow-up after `FHIR-37853` | Page `108298317`, `https://confluence.hl7.org/spaces/VOC/pages/108298317`; reopen with `bun run confluence:search snapshot 108298317` | Minutes say `FHIR-37853` was applied and remaining external terminology tickets moved/referred to HTA. |
| Confluence | TSMG scope for FHIR-35933 | Page `134947233`, `https://confluence.hl7.org/spaces/TSMG/pages/134947233`; reopen with `bun run confluence:search snapshot 134947233` | States entries with "Using X with FHIR" remain but link to THO. |
| Confluence | Vocab vote for `FHIR-50716` | Page `358264951`, `https://confluence.hl7.org/spaces/VOC/pages/358264951`; reopen with `bun run confluence:search snapshot 358264951` | Notes the URI-search guidance should be consistent with external-code-system identifier policy. |
| Confluence | WGM resolution for `FHIR-53839` | Page `413042372`, `https://confluence.hl7.org/spaces/VOC/pages/413042372`; reopen with `bun run confluence:search snapshot 413042372` | Confirms the typo ticket was resolved in Jan 2026 WGM minutes. |
| Zulip | THO migration policy context | `#TSMG > Terminology moved from the base spec to THO`, `https://chat.fhir.org/#narrow/stream/TSMG/topic/Terminology%20moved%20from%20the%20base%20spec%20to%20THO`; reopen with `bun run zulip:search snapshot TSMG "Terminology moved from the base spec to THO"` | Later discussion about which terminology content belongs in FHIR core vs THO. |

## Change summary

### THO/source-of-truth rewrite - substantive/normative guidance

- The broad R4 statement "If a URI is defined here, it SHALL be used..." was narrowed to "For URIs specified here for code systems defined as part of FHIR..." (`source/terminologies-systems.html:21-23`). This matters because the page now explicitly treats external terminology rows as convenience content rather than an authoritative source.
- The fallback search list changed from HL7 OID Registry, code-system documentation, owner consultation, and the HL7 vocabulary mailing list to THO published, THO CI, and TSMG mailing-list routes (`source/terminologies-systems.html:25-29`). This came from R6 ballot issue `FHIR-50716`.
- The identifier-system paragraph was removed because that registry moved to THO (`FHIR-37853` description items 2-3).
- Important notes now say external terminology content is not authoritative/normative and point to THO External Code Systems (`source/terminologies-systems.html:35-37`).

### External Code Systems table - semantic guidance plus pruning

- The R4 external table was drastically pruned. Many rows without a "Using X with FHIR" page were removed, matching `FHIR-37853` item 5.
- Rows kept in R6 are a small curated subset: SNOMED CT, RxNorm, LOINC, pCLOCD, UCUM, CPT, MED-RT, UNII, NDC, CVX, ISO 3166, ICD, and ISO/IEEE 11073-10101 (`source/terminologies-systems.html:59-140`).
- Most "Using X with FHIR" local links became THO "Using X with HL7 Standards" links (`FHIR-35933`, commit `81e5862f...`).
- MED-RT was added (`dbf5fc9...`/`FHIR-28553`, later corrected by `FHIR-34074`), NDF-RT was first updated as replaced by MED-RT (`FHIR-35800`) and later removed (`FHIR-39156`).
- NCI Metathesaurus was removed or emptied because it is not itself a code system (`FHIR-31938`) and then removed by the broad THO pruning.
- ISO 3166 gained additional URNs and lost the old OID value (`FHIR-37887`).
- ICD display changed from a generic `ICD-9, ICD-10` label to explicit `http://hl7.org/fhir/sid/icd-9-cm` and `http://hl7.org/fhir/sid/icd-10` links (`FHIR-41305` plus follow-up markup/link fixes).
- ISO/IEEE 11073-10101 now references the 2020 standard (`FHIR-46008`).

### Internal FHIR code systems section - metadata/editorial plus current defects

- The internal table remains generated by `<%internalsystemlist%>` (`source/terminologies-systems.html:160-167`), but the headers changed from URI/Description/OID to URI/Title/Description (`FHIR-37800`).
- The section prose currently reads "and a defined by and considered part of FHIR itself" (`source/terminologies-systems.html:153-156`). `FHIR-53839` has already resolved this as a technical correction, but it is not applied in this R6 ballot4 source tree.
- The internal section has a duplicate `<a name="external">` anchor instead of a distinct internal anchor (`source/terminologies-systems.html:48` and `source/terminologies-systems.html:150`).

### Status/template/navigation changes - metadata/template/navigation

- Page status moved from R4 Trial Use/FMM 3 to R6 Normative (`source/terminologies-systems.html:16-17`), via `270e0ceb...`, merge `a8c1e024...`, and `148c3eb...`.
- The page's tab wrapper was removed, but jQuery tab initialization remains (`source/terminologies-systems.html:173-198`) and a note still says "Defined Externally tab" (`source/terminologies-systems.html:36`).
- jQuery include paths were mechanically updated from `external/jquery/jquery.js` and `jquery-ui.min.js` to `assets/js/jquery.js` and `assets/js/jquery-ui.min.js` (`a581075...`).

### Editorial/mechanical/noise

- `datatype` spelling was changed from `data type` (`FHIR-25431`).
- The old UMLS note was removed (`FHIR-25030`/`FHIR-27805`).
- HTML template cleanup removed an extra wrapper div and footer indentation (`d7b8dad...`).
- Several batch commits include many Jira keys unrelated to this page; they were treated as context-only unless their patch touched this page in a meaningful way.

## Source history

| Commit | Date | Subject | Page-specific effect |
|---|---:|---|---|
| `dbf5fc978284` | 2020-07-08 | `FHIR-25058 - Add MED-RT page to terminologies-systems.` | Added MED-RT row using `http://hl7.org/fhir/medrt`; local Jira did not contain `FHIR-25058`, but `FHIR-28553` describes MED-RT missing from the page. |
| `5c0494aacfd` | 2020-08-18 | `Phase 1 removing UTG Content from core build` | Removed v2/v3 tabs and redirected v2/v3 links to THO pages. |
| `1021ba87da03` | 2020-08-19 | `FHIR-28294 - Add page for pCLOCD code system.` | Added pCLOCD external row. |
| `74edc6e98ac9` | 2020-10-28 | `update cpt copyright, and remove external terminologies tab` | Renamed tabs to "Defined Externally" and "Defined as part of FHIR"; removed "External (FHIR)" tab. |
| `2e0905373f66` | 2021-03-26 | `Removed UMLS note from terminologies-systems.html` | Removed UMLS Note per `FHIR-27805`/`FHIR-25030`. |
| `d7b8dadc6213` | 2021-06-27 | `update html template` | Mechanical wrapper/footer cleanup. |
| `19d78411d5a1` | 2022-02-01 | `FHIR-34146, 34074, 34005, 33063` | Changed MED-RT URI to `http://va.gov/terminology/medrt`; `FHIR-34074` is the page-specific key. |
| `ade907ca5b1b` | 2022-02-01 | `2nd batch of vocab R5 tickets` | Changed "Registering Code Systems" link to HTA/TA page (`FHIR-31878`) and fixed a Health Canada NPN OID in a row later removed. |
| `9500b398d1d` | 2022-02-09 | `vocab r5 tickets batch 2` | Added wording that ICD has multiple URIs; likely page-specific to `FHIR-22996` or related batch context. |
| `ba29899f0382` | 2022-07-19 | `FHIR-35800 and 31601 Update text on ICD, NDF-RT and MED-RT pages` | Updated NDF-RT link and noted replacement by MED-RT. |
| `2c4f6306e8c4` | 2022-08-06 | `Apply FHIR-31938` | Removed the "Using NCI Metathesaurus" link from NCI Metathesaurus row. |
| `736ccce2005f` | 2022-08-06 | `Applied FHIR-37853` | Major THO source-of-truth rewrite; removed many external rows and authoritativeness claims. |
| `81e5862f203f` | 2022-08-08 | `FHIR-35933` | Updated external row link text/targets to THO "Using X with HL7 Standards" pages. |
| `b77b742253cb` | 2022-08-09 | `Resolved several text only vocabulary changes` | Applied `FHIR-37800` by changing internal table headers to URI/Title/Description. |
| `b11348ce8cce` | 2022-08-18 | `FHIR-37887 URI and OID values for ISO 3166 should be updated` | Added ISO 3166 part URNs, removed OID, removed tab wrapper, and introduced current duplicate `external` anchor. |
| `6354f8f93836` | 2022-08-18 | `FHIR-37887 URI and OID values for ISO 3166 should be updated` | Styled ISO 3166 `n/a` OID as dark grey. |
| `8592e1207273` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Changed `data type` to `datatype` in Coding sentence. |
| `c3da43d4d906` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Changed owner macro from `[%wg fhir%]` to `[%wg vocab%]`. |
| `cfe15f936358` | 2022-12-07 | `FHIR-39156 NDF-RT should be removed from External Code systems table` | Removed NDF-RT row. |
| `148d8d5d8012` | 2023-02-13 | `FHIR-39098 Change CPT link` | Updated CPT source link. |
| `2d67fa6bc155` | 2024-07-30 | `Added DeviceAlert resource` | Changed MDC ISO link target to ISO standard 77338; later refined by `FHIR-46008`. |
| `11181dd48937` | 2025-03-13 | `FHIR-41305 Values in the URI column for ICD-9/10 are wrong` | Replaced generic ICD label with explicit ICD-9-CM and ICD-10 URIs; first patch had broken anchor markup. |
| `c236a3a13351` | 2025-03-13 | `FHIR-38675 Add an example...` | Fixed the broken ICD-10 anchor introduced by `FHIR-41305`; commit subject is unrelated to this page edit. |
| `f6288123361b` | 2025-03-14 | `FHIR-44627 Document approach to alternate codes...` | Fixed ICD link paths to `sid-icd-9.html` and `sid-icd-10.html`; commit subject is unrelated to this page edit. |
| `1eff8bccf70e` | 2025-03-14 | `FHIR-46008 withdrawn version of ISO/IEEE 11073-10101 referenced.` | Updated MDC row text to `ISO/IEEE 11073-10101:2020`. |
| `a581075555b0` | 2025-05-01 | `upgrade jquery` | Mechanical script path change. |
| `270e0ceb7b02` | 2025-10-31 | `normative changes for R6` | Changed status table class and page status from Trial Use to Informative. |
| `148c3eb0804a` | 2025-11-02 | `Applied the following changes...R6 normative ballot` | Changed page status from Informative to Normative. |
| `b53362725d6a` | 2025-11-04 | `FHIR-47594 Correction in Terminology URL` | Updated UNII FDA link. |
| `6d869ab83ab0` | 2025-11-04 | `FHIR-50716 THO not listed as a place to search for URIs` | Replaced legacy URI-discovery bullet list with THO/THO CI/TSMG guidance, but introduced malformed THO CI anchor. |
| `d1537ba40fe0` | 2025-11-04 | `FHIR-50922 CodeSystem supplements should be allowed to reference private codes` | Fixed malformed THO CI anchor; commit subject is unrelated to this page edit. |
| `a8c1e0246083` | 2025-11-05 | `Merge remote-tracking branch 'origin/master'` | Merge combined Normative status with `FHIR-50716`/UNII edits. |
| `6bbb8cc01d2e` | 2025-11-20 | `Fixed link to THO external code systems page.` | Updated THO link from `external_terminologies.html` to `external_code_systems.html`. |

## Jira evidence

### Explicit/source-history Jira keys with page-specific support

- `FHIR-37853` is the central source-of-truth issue. Its description explicitly asks to:
  - narrow the "SHALL be used" URI statement to FHIR-defined code systems,
  - remove the identifier systems paragraph,
  - add the non-authoritative external-content note,
  - reword the downloads note,
  - delete external rows without "Using X with FHIR" links.
  The resolution says to make the text changes as proposed. Commit `736ccce...` implements these changes.
- `FHIR-35933` records the Vocab WG decision to migrate "Using X with FHIR" pages to THO, add a note to the Defined Externally tab, and update link titles. Commit `81e5862...` implements this.
- `FHIR-50716` is an R6 ballot issue that asked to add THO to the URI-search list. The resolution replaces all four old bullets with THO published, THO CI, and TSMG mailing list. Commits `6d869ab...` and `d1537ba...` leave the current page matching that resolution.
- `FHIR-37887` updates ISO 3166 URI/OID handling and notes the page is non-authoritative, with readers directed to THO.
- `FHIR-31878` explains the "Registering Code Systems" link should go to the HTA/TA "Request Content in External Terminologies" page.
- `FHIR-34074` explains MED-RT's URI should be `http://va.gov/terminology/medrt` and notes the content would eventually be removed/moved as external code systems moved to THO.
- `FHIR-35800`, `FHIR-39156`, `FHIR-39098`, `FHIR-41305`, `FHIR-46008`, and `FHIR-47594` each explain row-level corrections that are visible in the current page.
- `FHIR-37800` explains the internal FHIR-defined code-system column headers should be URI/Title/Description.
- `FHIR-25030` and duplicate `FHIR-27805` support removal of the UMLS note.
- `FHIR-28294` supports adding pCLOCD.
- `FHIR-31938` supports not presenting NCI Metathesaurus as a code system.

### Later Jira evidence that should drive action

- `FHIR-54107` (`Triaged`, R6 ballot, priority Highest) asks to remove section 4.3.0.1 External Code Systems because the content repeats THO. It also asks to remove the "Don't see what you're looking for" sentence and replace the current subset wording with a concise pointer to THO. This postdates the R6 ballot4 source commit and is the strongest evidence that the current external table should be consciously triaged before R6 publication.
- `FHIR-53839` (`Resolved - change required`, technical correction, priority Highest) explicitly fixes the internal-section typo from "and a defined by..." to "and are defined by...". The current R6 ballot4 source still has the old typo.

### Context-only Jira hits not elevated to actions

- Many keys from batch commits are unrelated to this page's visible changes, including terminology service, ConceptMap, ValueSet, operation, and profile issues. They were included in the all-key SQL summary but not treated as page-causal evidence.
- `FHIR-25058` was not present in the local Jira database; `FHIR-28553` is the relevant MED-RT-missing issue found by phrase search.
- `FHIR-38675`, `FHIR-44627`, `FHIR-50922`, and the DeviceAlert commit touched this file but appear to be incidental fixups/conflict edits rather than the formal rationale for the visible page changes.

## Zulip evidence

- Quoted issue-key searches for `FHIR-37853`, `FHIR-35933`, `FHIR-54107`, `FHIR-53839`, `FHIR-50716`, `FHIR-37887`, `FHIR-41305`, and `FHIR-46008` found no direct Zulip hits in the local snapshot.
- Exact phrase searches for `"source of truth" "external terminologies"`, `"Defined Externally tab"`, `"Remove Section 4.3.0.1"`, `"Code systems are tightly bound"`, and `"THO not listed"` found no direct relevant hits.
- `#TSMG > Terminology moved from the base spec to THO` (2025-10-12 to 2025-11-02) is useful later context. Participants discussed which core terminology artifacts should remain in FHIR core vs move to THO, canonical URL breakage, and R6 timing. Lloyd McKenzie summarized that code systems used in `code` bindings or experimental/test/example content stay in core, while other mature HL7 code systems generally need THO or dispensation. This supports the broader THO/source-of-truth direction but does not directly cite this page or `FHIR-54107`.
- `#terminology > Using RxNorm with FHIR` (2024-01) confirms "Using X with FHIR" pages had migrated to THO and were discoverable from the External Code Systems tab. This is background evidence for `FHIR-35933`, not an additional action.
- `#terminology > List of all NamingSystems is difficult to find on THO` (2025-11 to 2026-01) notes that THO CI had recently reorganized external content under "External Content." This may explain why `FHIR-54107` mentions "External Content tab," but it is THO-site context, not direct FHIR-page implementation evidence.

## Confluence evidence

- Page `90344804` (2022-02-03 Vocab WG Call Agenda/Minutes) references `FHIR-35933` and records it as persuasive.
- Page `134947233` (2022-08-02 UTG/THO Subcommittee Agenda and Minutes) says the scope for moving external info from `terminologies-systems.html` was covered by `FHIR-35933`: entries with "Using X with FHIR" remain but link to THO; bulk HTA updates could occur later.
- Page `134947751` (2022-08-04 Vocab WG Call Agenda/Minutes) lists `FHIR-37853` for discussion/voting.
- Page `108298317` (2022-08-08 Tracker Issues) states `FHIR-37853` had been applied, that only links to "using code system xxxx in FHIR" pages in THO remain in core, and that several related tickets were moved/referred to HTA.
- Page `108301291` (2022-08-15 Tracker Issues) references `FHIR-37887` for ISO 3166 URI/OID updates.
- Page `358264951` (2025-07-31 Terminology Infrastructure WG Call Agenda/Minutes) records discussion of `FHIR-50716`, noting the fix should be consistent with validating/requesting identifiers for external code systems and probably should not point to HTA pages that are going away.
- Page `413042372` (Jan 2026 WGM Monday Q2) records `FHIR-53839` among resolved tickets, confirming the typo correction had workgroup disposition after ballot4.
- No Confluence references were found for `FHIR-54107` at the time of this search.

## Timeline

| Date | Clock | Evidence | Notes |
|---:|---|---|---|
| 2020-07-08 | Source commit | `dbf5fc978284...` | MED-RT row added. Commit key `FHIR-25058` missing locally; `FHIR-28553` later found as related MED-RT issue. |
| 2021-03-26 | Source commit | `2e0905373f66...` | UMLS note removed per `FHIR-27805`/`FHIR-25030`. |
| 2021-10-28 | Discussion/decision | Cited by `FHIR-35933` | Vocab WG proposal to transfer "Using X with FHIR" pages to THO. |
| 2022-02-03 | Jira resolution / WG minutes | `FHIR-35933`, Confluence `90344804` | Vocab accepted migration to THO. |
| 2022-08-02 | TSMG process evidence | Confluence `134947233` | Entries with "Using X with FHIR" remain, linked to THO. |
| 2022-08-04 | Jira resolution | `FHIR-37853` | Vocab accepted THO source-of-truth rewrite. |
| 2022-08-06 | Source commit | `736ccce2005f...` | Major page rewrite for `FHIR-37853`. |
| 2022-08-08 | Source commit / minutes | `81e5862f203f...`, Confluence `108298317` | THO links applied; related external terminology tickets moved/referred to HTA. |
| 2022-08-15 | Jira resolution | `FHIR-37887` | ISO 3166 URI/OID correction approved. |
| 2022-08-18 | Source commit | `b11348ce8cce...`, `6354f8f93836...` | ISO 3166 changes and section restructuring applied. |
| 2022-12-07 | Source commit | `cfe15f936358...` | NDF-RT row removed (`FHIR-39156`). |
| 2025-07-31 | Jira vote / Confluence | `FHIR-50716`, Confluence `358264951` | R6 URI-search list should start with THO and THO CI. |
| 2025-11-04 | Source commit | `6d869ab83ab0...`, `d1537ba40fe0...` | `FHIR-50716` text applied and malformed anchor fixed. |
| 2025-11-20 | Source commit | `6bbb8cc01d2e...` | THO link corrected to `external_code_systems.html`. |
| 2026-01-07 | Later Jira created | `FHIR-53839` | Typo in current internal section reported. |
| 2026-01-13 | Later Jira created | `FHIR-54107` | R6 ballot issue asks to remove/rewrite External Code Systems section. |
| 2026-01-26 | Later Jira resolved | `FHIR-53839`, Confluence `413042372` | Typo fix approved but not present in this ballot4 source tree. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/terminologies-systems.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html" && echo "new exists"`
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminologies-systems.html`
- Source log:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminologies-systems.html`
- Current page read:
  - `wc -l ".../source/terminologies-systems.html"`
  - `nl -ba ".../source/terminologies-systems.html" | sed -n '1,240p'`
- Current-page defect checks:
  - `rg -n 'name="external"|#tabs|Defined Externally tab|a defined by|details code systems' ".../source/terminologies-systems.html"`
  - `rg -n 'name="internal"|id="tabs"|<div id="tabs"' ".../source/terminologies-systems.html"` returned no matches.
- Jira all-key SQL summary:
  - `bun run jira:search sql "WITH keys(key) AS (VALUES ...) SELECT ... FROM keys k LEFT JOIN issues i ON i.key = k.key ORDER BY k.key"`
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-37853`
  - `bun run jira:search snapshot FHIR-35933`
  - `bun run jira:search snapshot FHIR-50716`
  - `bun run jira:search snapshot FHIR-54107`
  - `bun run jira:search snapshot FHIR-53839`
  - plus row-level/page-specific snapshots listed in Scope and coverage.
- Jira phrase searches:
  - `bun run jira:search fts '"Defined Externally" tab' --limit 10`
  - `bun run jira:search fts '"This is a subset of a much larger list of known code systems"' --limit 10`
  - `bun run jira:search fts '"Code systems are tightly bound"' --limit 10`
- Zulip searches:
  - `bun run zulip:search fts '"FHIR-37853"' --limit 10` and analogous quoted key searches found no issue-key hits.
  - `bun run zulip:search fts "external code systems THO" --limit 10`
  - `bun run zulip:search snapshot TSMG "Terminology moved from the base spec to THO"`
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-37853`
  - `bun run confluence:search refs jira FHIR-35933`
  - `bun run confluence:search refs jira FHIR-53839`
  - `bun run confluence:search fts '"THO as the single source of truth"' --limit 10`
  - `bun run confluence:search snapshot 134947233`
  - `bun run confluence:search snapshot 358264951`
  - `bun run confluence:search snapshot 413042372`
