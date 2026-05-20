# storage research appendix

## Scope and coverage

- Page reviewed: `source/storage.html` (`storage`).
- Version boundary: R4 `4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` -> R6 ballot4 `6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Local trees:
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/storage.html`
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html`
- Page boundary confirmed: the file exists in both trees.
- Full newer page read end-to-end: yes. `wc -l` reported 190 lines, and the source was read through the closing `</html>`.
- Commit count touching `source/storage.html` in the range: 14.
- Explicit Jira keys found in commit subjects/patch context: `FHIR-19913`, `FHIR-25800`, `FHIR-25929`, `FHIR-20595`, `FHIR-25431`, `FHIR-38923`, `FHIR-41344`, `FHIR-44047`.
- Additional Jira issues found from changed phrases: `FHIR-38866` (resolved-link extension request) and `FHIR-53178` (R6 RDF/Turtle serialization changes).
- Jira, Zulip, and Confluence searches were bounded to explicit keys and distinctive changed phrases. Zulip key searches initially hit the expected FTS hyphen parsing problem; they were rerun as quoted phrases and found no relevant exact-key threads.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current storage page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:1-190` | Full current page reviewed. |
| Source | Old storage page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/storage.html:1-199` | R4 comparison baseline. |
| Source | Current stale title | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:4`, `:15` | `[%settitle Managing Resource Identity%]` does not match the storage page heading. |
| Source | Current duplicate anchors | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:33`, `:139` | Both "Applicability..." and "Technology Choices" use `<a name="choice"></a>`. |
| Source | MedicationRequest example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:45-57` | Example shape and code value changed. |
| Source | Version transform link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:132-134` | `r3maps.html` became `r4maps.html`. |
| Source | RDF resolved-link sentence | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:172-184` | Main current wording concern. |
| Source | RDF URI/canonical rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:492-515` | Shows `fhir:l` for URI/canonical primitive values. |
| Source | RDF Reference rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:518-554` | Shows `fhir:l` for references. |
| Source | RDF Coding concept rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:705-725` | Coding concepts are covered separately from `fhir:Canonical`. |
| Commit | Example shape update | `1dcdc4c567b23fc3748c6474ab1688bf53d662e1` / `https://github.com/HL7/fhir/commit/1dcdc4c567b23fc3748c6474ab1688bf53d662e1` | Changed `medicationCodeableConcept` to `medication/concept`. |
| Commit | Triple-store typo | `fc6439d4fe3279329831103ae3632bd5792a4115` / `https://github.com/HL7/fhir/commit/fc6439d4fe3279329831103ae3632bd5792a4115` | Applied `FHIR-20595`. |
| Commit | Datatype style | `8592e1207273b786db340efb927bb6d1dc9756c9` / `https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9` | Applied `FHIR-25431` wording. |
| Commit | Version link | `c3da43d4d906bc8ef71d67923be5e5db976665be` / `https://github.com/HL7/fhir/commit/c3da43d4d906bc8ef71d67923be5e5db976665be` | Changed `r3maps.html` to `r4maps.html`. |
| Commit | Ballot note macro | `23a31a590b7b03840e4f5946c17b6ec6e0e54665` / `https://github.com/HL7/fhir/commit/23a31a590b7b03840e4f5946c17b6ec6e0e54665` | Converted the resolved-link extension note to the ballot-note macro. |
| Commit | Ballot note removal | `9510c3ae69f5eb4e2d14fbccba5bb5cfd2312fc0` / `https://github.com/HL7/fhir/commit/9510c3ae69f5eb4e2d14fbccba5bb5cfd2312fc0` | Removed the storage "standardize an extension?" ballot note. |
| Commit | RDF/link wording | `8244937cafb494f6c637de64b22982826c5533db` / `https://github.com/HL7/fhir/commit/8244937cafb494f6c637de64b22982826c5533db` | Changed storage's RDF sentence and added `rdf.html#canonical`. |
| Commit | Header/status template | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changed header to "Responsible Owner" and removed FMM cell. |
| Commit | RxNorm code value | `7b35da6dd1598a8b9b6f09377e6ddacda3e358eb` / `https://github.com/HL7/fhir/commit/7b35da6dd1598a8b9b6f09377e6ddacda3e358eb` | Applied `FHIR-41344`; PR `HL7/fhir#3898`. |
| Commit | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applied `FHIR-44047`-style punctuation cleanup. |
| PR | RDF/Turtle changes for R6 | `https://github.com/HL7/fhir/pull/3852` | Contains `8244937`; linked from `FHIR-53178`. |
| PR | JCT - FHIR-I tickets | `https://github.com/HL7/fhir/pull/3898` | Contains `7b35da6d`; linked from `FHIR-41344`. |
| Jira | `FHIR-20595` | `https://jira.hl7.org/browse/FHIR-20595`; `bun run jira:search snapshot FHIR-20595` | Page-specific storage typo. |
| Jira | `FHIR-25431` | `https://jira.hl7.org/browse/FHIR-25431`; `bun run jira:search snapshot FHIR-25431` | Broad "datatype" style issue. |
| Jira | `FHIR-38866` | `https://jira.hl7.org/browse/FHIR-38866`; `bun run jira:search snapshot FHIR-38866` | Response to the storage ballot note; resolved Not Persuasive / No Change. |
| Jira | `FHIR-41344` | `https://jira.hl7.org/browse/FHIR-41344`; `bun run jira:search snapshot FHIR-41344` | Page-specific missing RxNorm code value. |
| Jira | `FHIR-44047` | `https://jira.hl7.org/browse/FHIR-44047`; `bun run jira:search snapshot FHIR-44047` | Broad punctuation issue. |
| Jira | `FHIR-53178` | `https://jira.hl7.org/browse/FHIR-53178`; `bun run jira:search snapshot FHIR-53178` | Formal R6 RDF/Turtle change record. |
| Confluence | FHIR-I 2023-07-10 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/175611566/FHIR+Infrastructure+Minutes+CC+2023-07-10`; local snapshot `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-confluence/175611566.md` | Records `FHIR-38866` Not Persuasive, 7-0-0. |
| Confluence | ITS 2025-10-22 minutes | `https://confluence.hl7.org/spaces/ITS/pages/391650437/2025-10-22+ITS+minutes`; local snapshot `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-confluence/391650437.md` | Records `FHIR-53178` motion, 8-0-1. |
| Confluence | FHIR-I Dallas 2024 WGM | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; local snapshot `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-confluence/234784975.md` | Records `FHIR-44047 will fix`. |
| Confluence | FHIR-I 2020-01-13 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`; local snapshot `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-confluence/66940491.md` | Records `FHIR-25431` auto-approve context. |

## Change summary

### MedicationRequest example update - example change / semantic maintenance

- R4 used `MedicationRequest.medicationCodeableConcept`; R6 ballot4 shows `MedicationRequest.medication.concept`.
- Commit `1dcdc4c567b23fc3748c6474ab1688bf53d662e1` made the shape change while applying broad Pharmacy tickets (`FHIR-19913`, `FHIR-25800`, `FHIR-25929`).
- Commit `7b35da6dd1598a8b9b6f09377e6ddacda3e358eb` applied `FHIR-41344` by filling the blank RxNorm code with `123431232`, matching the storage-efficiency example below.
- This is a meaningful example update, not a new storage requirement.

### Multiple-version guidance link - link/metadata correction

- The "FHIR maintained version transforms" link changed from `r3maps.html` to `r4maps.html` in commit `c3da43d4d906bc8ef71d67923be5e5db976665be`.
- This appears to be a release-baseline link update, not a change to conversion guidance.

### Technology choices wording - editorial and typo cleanup

- `FHIR-20595` fixed "native triple story" to "native triple store" in commit `fc6439d4fe3279329831103ae3632bd5792a4115`.
- Later edits capitalized Turtle and added commas after `e.g.` under `FHIR-44047`-style cleanup.
- These are editorial or reader-facing typo fixes.

### RDF resolved-link paragraph - semantic guidance / possible current wording problem

- Old text: "The RDF format does this explicitly for references and codings (`fhir:reference` and `fhir:concept`)."
- New text: "The RDF (Turtle) format does this explicitly for references and codings (`fhir:Reference` and `fhir:Canonical`)."
- Commit `8244937cafb494f6c637de64b22982826c5533db` made this storage-page change and added an `rdf.html#canonical` anchor. It is included in PR `HL7/fhir#3852`, tied to `FHIR-53178`.
- `FHIR-53178` supports the R6 RDF intent: rename/use `fhir:l`, add optional `fhir:l` to `fhir:Reference`, and add optional `fhir:l` wherever values are URI-like, including `canonical`.
- The current storage sentence still says "codings" but links to `fhir:Canonical`; coding concept IRIs are covered under `rdf.html#identifying-concepts`. This is carried into the actionable file as a likely wording mismatch.

### Ballot note about a standardized extension - removed note / later no-change resolution

- R4 contained a ballot note asking whether there was enough interest to standardize an extension for resolved links.
- Commit `23a31a590b7b03840e4f5946c17b6ec6e0e54665` converted it to a ballot-note macro; commit `9510c3ae69f5eb4e2d14fbccba5bb5cfd2312fc0` removed it.
- `FHIR-38866` later answered that prompt by requesting a standardized resolved-link extension. FHIR-I resolved it Not Persuasive / No Change, asking for a more detailed request that accounts for different persistence approaches.
- Current text still allows a native FHIR extension but does not standardize one, matching the Jira outcome.

### Header/template/status churn - metadata/template/navigation

- The outer `<div class="col-12">` was removed by the 2021 HTML template update.
- Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status table to "Responsible Owner" and removed the FMM cell as part of broad R6 normative/status template changes.
- These are mechanical/template changes with no storage guidance effect.

### Overlooked current-page defects - rendering/editorial

- `storage.html` still declares `[%settitle Managing Resource Identity%]`, duplicating `managing.html` and not matching the page heading "Using FHIR in persistent stores".
- `storage.html` has duplicate `<a name="choice"></a>` anchors for both "Applicability of storing resources natively" and "Technology Choices"; the duplicate existed in R4 and remains in R6 ballot4.

## Source history

| Commit | Date | Subject | Storage-page effect | Classification |
|---|---:|---|---|---|
| `1dcdc4c567b23fc3748c6474ab1688bf53d662e1` | 2020-02-15 | `FHIR-19913, FHIR-25800, FHIR-25929` | Updated the MedicationRequest example from `medicationCodeableConcept` to `medication/concept`. | Example / semantic maintenance |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed outer `<div class="col-12">` wrapper. | Mechanical/template |
| `fc6439d4fe3279329831103ae3632bd5792a4115` | 2022-03-17 | `Apply FHIR-20595` | Fixed "triple story" -> "triple store". | Editorial typo |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Changed "canonical data types" -> "canonical datatypes". | Editorial/style |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Changed `r3maps.html` -> `r4maps.html`. | Link/release metadata |
| `23a31a590b7b03840e4f5946c17b6ec6e0e54665` | 2022-09-06 | `update all ballot and stu notes` | Converted storage's "standardize an extension?" note into `[%ballot-note cfc%]`. | Mechanical/ballot template |
| `4baa8f22bae6d8f787c024219b5842a6cc658bb5` | 2023-02-14 | `fix character references for fragment parsing` | Replaced `&quot;` attributes in examples with literal quotes. | Mechanical/example formatting |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | Capitalized "Turtle". | Editorial |
| `9510c3ae69f5eb4e2d14fbccba5bb5cfd2312fc0` | 2023-02-21 | `FHIR-38923 Feedback on Operations for Large Resources + remove notes for balloters` | Removed the storage ballot note; Jira subject itself is for a different page. | Ballot cleanup |
| `8244937cafb494f6c637de64b22982826c5533db` | 2025-10-22 | `Fix extensibility example in RDF; Fix links; Editorial improvements & typos` | Changed RDF sentence to `RDF (Turtle)`, `fhir:Reference`, `fhir:Canonical`; added related RDF anchors. | Semantic guidance / link update |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Header table now says "Responsible Owner" and omits FMM. | Template/status |
| `7b35da6dd1598a8b9b6f09377e6ddacda3e358eb` | 2025-11-01 | `FHIR-41344` | Filled the missing RxNorm code value `123431232`. | Example correction |
| `491fe750f34ccc8913ec3887c70e9f68f0a82012` | 2025-11-02 | `Merge remote-tracking branch 'origin/master'` | Merge bookkeeping; no page-specific rationale found. | Mechanical/merge |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.` instances. | Editorial punctuation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-19913` (`Published`, Pharm, applied for R5): Dosage.method value set and examples. It appears in the commit that changed the storage MedicationRequest example, but the issue itself is not storage-page-specific.
- `FHIR-25800` (`Published`, Pharm, applied for R5): `medicationUsage.medication[x]` should use CodeableReference. This plausibly explains the example shift away from `medicationCodeableConcept`.
- `FHIR-25929` (`Published`, Pharm, applied for R5): broader "Fix all choice attributes from choice of codeableConcept and Reference to CodeableReference" on Pharmacy resources. Also plausibly explains the example shape change.
- `FHIR-20595` (`Published`, FHIR-I, applied for R5): page-specific typo on `storage.html#choice`; fixed "native triple story" -> "native triple store".
- `FHIR-25431` (`Published`, FHIR-I, applied for R5): broad style request to choose "datatype" or "data type"; storage changed one "data types" occurrence to "datatypes".
- `FHIR-38923` (`Published`, FHIR-I, applied for R5): Operations for Large Resources. The storage page effect in the same commit was removal of a ballot note, not the issue's main content.
- `FHIR-41344` (`Applied`, FHIR-I, applied for R6): page-specific "Missing RxNorm code value"; comment links `https://github.com/HL7/fhir/pull/3898`.
- `FHIR-44047` (`Resolved - change required`, FHIR-I, R6 ballot): broad punctuation issue for `e.g.,` and `i.e.,`; storage punctuation changed in commit `887bc2383f`.

### Other Jira issues that plausibly explain changed/current text

- `FHIR-38866` (`Resolved - No Change`, FHIR-I): created from the storage page's removed "standardize an extension?" note. It requested a standardized resolved-link extension. Resolution: close the request, welcome a more detailed request addressing the nature of the extension and different persistence approaches. This supports the current page not standardizing an extension.
- `FHIR-53178` (`Resolved - change required`, ITS): R6 RDF/Turtle serialization changes. The description explicitly covers renaming `fhir:link` to `fhir:l`, adding optional `fhir:l` to `fhir:Reference`, and adding optional `fhir:l` wherever a value is known to be a URI, including `canonical`. It is linked to PR `HL7/fhir#3852`, which contains the storage RDF wording commit `8244937`.

### Context-only Jira hits that should not drive action

- Broad search `RxNorm code value MedicationRequest` returned unrelated IG/Core issues; the page-specific issue was already `FHIR-41344`.
- No Jira results were found for exact `"FHIR maintained version transforms"`, `"Using FHIR in persistent stores"`, or `"native triple store" RDF Turtle` beyond the explicit typo issue already identified.
- `FHIR-38923` helps explain why ballot notes disappeared in a broad commit, but it does not justify a storage-page semantic change.

## Zulip evidence

- Exact quoted searches for `FHIR-19913`, `FHIR-25800`, `FHIR-25929`, `FHIR-20595`, `FHIR-25431`, `FHIR-38923`, `FHIR-41344`, `FHIR-44047`, `FHIR-38866`, and `FHIR-53178` found no relevant Zulip hits in the local public-stream database.
- Distinctive phrase searches for `"Using FHIR in persistent stores"`, `"resolved link" "canonical"`, `"standardize an extension" "resolved link"`, `"native triple store"`, `"RxNorm code value"`, and `"Missing RxNorm code value"` found no relevant threads.
- Broad `"medicationCodeableConcept" "medication"` and `"fhir:Canonical" "fhir:Reference"` searches produced unrelated implementation/IG discussions, not evidence for this storage page.
- No Zulip snapshots were taken because no thread was sufficiently connected to the page changes.

## Confluence evidence

- `FHIR-38866`: FHIR-I minutes show the issue moving from request for clarification to final Not Persuasive:
  - `144977241` (2022-11-28): assigned to Paul Knapp for clarification.
  - `161061640` (2023-03-27): assigned to Paul to provide more information for the proposed extension.
  - `175611566` (2023-07-10): Not Persuasive motion, Grahame Grieve/Josh Mandel, 7-0-0.
- `FHIR-53178`: ITS minutes `391650437` (2025-10-22) record "David Booth re RDF" and `FHIR-53178` motion, David Booth/Eric Prudhomme, 8-0-1.
- `FHIR-44047`: FHIR-I WGM Dallas minutes `234784975` record `FHIR-44047 will fix` in a block of R6 ballot items.
- `FHIR-25431`: FHIR-I minutes `66940491` record `FHIR-25431 Lloyd: Using "data type" Will auto approve`.
- `FHIR-38923`: FHIR-I minutes `156543147` record Persuasive with Mod, 13-0-0. This supports the issue's disposition but does not connect to storage content except the broad ballot-note cleanup commit.

## Timeline

- 2019-01-07: `FHIR-19913` created; 2020-02-04 resolved; 2020-02-15 storage example changed in commit `1dcdc4c5`.
- 2019-03-24: `FHIR-20595` created/resolved for storage typo; 2022-03-17 storage typo fixed in commit `fc6439d4`.
- 2020-01-09: `FHIR-25431` created; 2020-01-13 FHIR-I minutes say it will auto-approve; 2021-10-27 resolved; 2022-08-31 storage wording changed in commit `8592e120`.
- 2020-02-05/06: `FHIR-25800` and `FHIR-25929` created/resolved for Pharmacy CodeableReference changes; 2020-02-15 storage example shape changed in commit `1dcdc4c5`.
- 2021-06-27: HTML template wrapper removed from storage in commit `d7b8dadc`.
- 2022-09-05: `r3maps.html` -> `r4maps.html` link update in commit `c3da43d4`.
- 2022-09-06: storage ballot note converted to macro in commit `23a31a59`.
- 2022-10-11: `FHIR-38866` created requesting a standardized resolved-link extension, referring back to the storage ballot-note question.
- 2023-02-21: storage ballot note removed in commit `9510c3ae`.
- 2023-07-10: FHIR-I resolved `FHIR-38866` Not Persuasive / No Change, 7-0-0.
- 2023-05-26: `FHIR-41344` created for missing RxNorm code value; 2024-09-16 resolved; 2025-11-01 source commit `7b35da6d`; 2025-11-01 PR `HL7/fhir#3898` merged; 2025-11-02 Jira comment links the PR.
- 2024-01-22: `FHIR-44047` created for e.g./i.e. punctuation; 2024-05-23 resolved as change required; 2024 Dallas WGM says "will fix"; 2025-11-03 storage punctuation changed in commit `887bc238`.
- 2025-10-19: `FHIR-53178` created for RDF/Turtle changes; 2025-10-22 ITS approved 8-0-1; 2025-10-22 storage RDF sentence changed in commit `8244937`; 2025-10-29 PR `HL7/fhir#3852` merged; 2025-10-30 Jira comment lists PRs including `HL7/fhir#3852`.
- 2025-10-31: R6 header/status table template changed in commit `270e0ceb`.

## Evidence log

- Confirmed page boundary with `test -f` for the old and new `source/storage.html` paths.
- Ran direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/storage.html`
- Ran source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/storage.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <commit> -- source/storage.html`
- Jira snapshots were saved under `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-jira/` for all explicit keys plus `FHIR-38866` and `FHIR-53178`.
- Jira phrase searches included `"FHIR maintained version transforms"`, `"resolved link" canonical datatypes`, `"standardize an extension" "resolved link"`, `"medicationCodeableConcept" "MedicationRequest" storage`, `"fhir:Canonical" "fhir:Reference"`, `"fhir:l" "resolved link"`, and `"RDF" "resolved link" "storage"`.
- Zulip searches included quoted explicit keys plus distinctive phrases listed in the Zulip section; no relevant thread was found.
- Confluence refs/FTS searches were run for explicit keys plus `FHIR-38866` and `FHIR-53178`; snapshots were saved under `.copilot/session-state/8af82c7f-f1c1-4004-95b9-7e0c6ae585fc/files/storage-confluence/`.
- Full current page was read with `wc -l` and `view`.
- Cross-checks:
  - `rg` confirmed stale settitle and duplicate anchors in both old and new storage pages.
  - `rg`/`view` checked current `rdf.html` anchors and sections for `#canonical`, `#reference`, and `#identifying-concepts`.
  - `gh pr view 3852 --repo HL7/fhir` confirmed PR `HL7/fhir#3852` contains commit `8244937`.
  - `gh pr view 3898 --repo HL7/fhir` confirmed PR `HL7/fhir#3898` contains commit `7b35da6d`.
