# profiling-examples research appendix

## Scope and coverage

- Page path: `source/profiling-examples.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: confirmed present in both trees.
- New page read end-to-end: yes, 1286 lines.
- Commits touching this page between the two endpoints: 9.
- Explicit Jira keys found in commit metadata/patches: `FHIR-34007`, `FHIR-20569`, `FHIR-38682`, `FHIR-22531`, `FHIR-44047`.
- Additional Jira issue found by changed-phrase search: `FHIR-25738`, which covers the same broad "profiling examples use old syntax" problem.
- Jira searches performed: snapshots for all explicit keys plus `FHIR-25738`; phrase searches for `slicename profiling examples`, `Patient telecom Email system`, `DiagnosticReport result Triglyceride`, `HDLCholesterol 2089`, and related page/reslicing terms.
- Zulip searches performed: exact-key SQL search for explicit keys; FTS for `profiling examples sliceName`, `HDLCholesterol 2089`, duplicate-id and lowercase `slicename` terms; snapshots for the relevant slicing-example threads.
- Confluence searches performed: `refs jira` for `FHIR-20569`, `FHIR-25738`, `FHIR-34007`; FTS for profiling/sliceName and reslicing terms; snapshot of the one FHIR-I minutes page referencing `FHIR-25738`.
- Caveats:
  - Jira/Zulip/Confluence FTS queries containing hyphens or dotted paths failed unless sanitized or handled with SQL/refs search; failed commands are noted in the evidence log.
  - I did not inspect the `FHIR-20569` attachment (`SliceTestIG.zip`); the Jira resolution, source patch, current source, and Zulip validation discussion were enough to identify the current page problems.
  - I did not find a page-specific commit message carrying `FHIR-25738`; `FHIR-20569` commit `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6` appears to be the broad page modernization event, while `FHIR-25738` records the same correction intent.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/profiling-examples.html` | Older comparison source |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html` | Current reviewed source |
| Source lines | Duplicate `Patient.telecom:WorkPhone`/`Email` ids | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:118-158` | Current example violates unique ElementDefinition id expectations |
| Source lines | Malformed fixed-order email id | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:286-304` | Missing quote in displayed XML example |
| Source lines | Lowercase `slicename` in Blood Pressure | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:419-423` | XML element name is case-sensitive; intended element is `sliceName` |
| Source lines | Lowercase `slicename` in Extensions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:488-503` | Same case-sensitive example error |
| Source lines | Triglyceride slice id/path swapped | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:590-592` | Slice id is unsliced while path includes the slice name |
| Source lines | Reslice name/id mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:1172-1182`, `:1218-1237` | Parent slice is `medrequest`, but derived ids use `med-request` |
| Source lines | HDL profile constrains LDL code | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:714-737` | HDL profile fixes LOINC `2089-1` with display `LDL Cholesterol` |
| Source lines | HDL instance uses HDL code | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html:801-821` | Same example instance uses `2085-9` / `HDL Cholesterol`, contradicting the profile snippet |
| Related spec | Unique element id constraints | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/structuredefinition/structuredefinition-StructureDefinition.xml:129-158` | `sdf-16` and `sdf-17` require distinct ids in snapshot and differential |
| Commit | `FHIR-20569 Re-slicing examples not valid` | `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6`, https://github.com/HL7/fhir/commit/76a58b57d0ef8e83c56bd0c4c470277c80c51ec6 | Main page-wide conversion to `id` and `sliceName`; introduced most current conversion defects |
| Commit | `qa from new validator` | `ea9e526cc83eeeff8d3446a95de766022e8d215c`, https://github.com/HL7/fhir/commit/ea9e526cc83eeeff8d3446a95de766022e8d215c | Changed HDL profile code from `2085-9` to `2089-1` without resolving profile/instance mismatch |
| Commit | `FHIR-34007 element.name -> element.sliceName` | `b0b61f5f9358158dcad069e36ff577672252d3f4`, https://github.com/HL7/fhir/commit/b0b61f5f9358158dcad069e36ff577672252d3f4 | First narrow correction from `name` to `sliceName` |
| Commit/PR | `more changes for FHIR-22531` | `3128420e7110d810fc544997b2ebead60052917d`, https://github.com/HL7/fhir/pull/3649/commits/3128420e7110d810fc544997b2ebead60052917d | Updated lipid profile link to `diagnosticreport-example-lipid-panel.html` |
| Jira | `FHIR-20569` | https://jira.hl7.org/browse/FHIR-20569; reopen with `bun run jira:search snapshot FHIR-20569` | Resolution says examples should include `element.id` and checked `resolve()` syntax so they work with tooling |
| Jira | `FHIR-25738` | https://jira.hl7.org/browse/FHIR-25738; reopen with `bun run jira:search snapshot FHIR-25738` | Formal technical correction that profiling examples lacked `ElementDefinition.id` and used `name` instead of `sliceName` |
| Jira | `FHIR-34007` | https://jira.hl7.org/browse/FHIR-34007; reopen with `bun run jira:search snapshot FHIR-34007` | Specific correction for `element.name` -> `element.sliceName` |
| Jira | `FHIR-22531` | https://jira.hl7.org/browse/FHIR-22531; reopen with `bun run jira:search snapshot FHIR-22531` | Rationale for lipid example link change |
| Jira | `FHIR-38682` | https://jira.hl7.org/browse/FHIR-38682; reopen with `bun run jira:search snapshot FHIR-38682` | Rationale for `MedicationUsage` -> `MedicationStatement` name change |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Rationale for `e.g.,` punctuation edits |
| Zulip | `#fhirpath > Slice ID Uniqueness` | https://chat.fhir.org/#narrow/stream/fhirpath/topic/Slice%20ID%20Uniqueness; reopen with `bun run zulip:search snapshot fhirpath "Slice ID Uniqueness"` | 2023 thread explicitly identifies the current duplicate `Patient.telecom:WorkPhone` ids as a mistake |
| Zulip | `#IG creation > good examples of profile slicing` | https://chat.fhir.org/#narrow/stream/IG%20creation/topic/good%20examples%20of%20profile%20slicing; reopen with `bun run zulip:search snapshot "IG creation" "good examples of profile slicing"` | Origin discussion for `FHIR-25738`; Grahame asked for a task to fix examples |
| Zulip | `#implementers > typo in slicing example?` | https://chat.fhir.org/#narrow/stream/implementers/topic/typo%20in%20slicing%20example%3F; reopen with `bun run zulip:search snapshot implementers "typo in slicing example?"` | Origin discussion for `FHIR-34007` |
| Zulip | `#IG creation > Validator fails on published slicing example` | https://chat.fhir.org/#narrow/stream/IG%20creation/topic/Validator%20fails%20on%20published%20slicing%20example; reopen with `bun run zulip:search snapshot "IG creation" "Validator fails on published slicing example"` | Contains a validator-test version of the Patient telecom example with distinct ids (`...workPhone.system`, etc.) |
| Confluence | FHIR-I minutes 2020-04-20 | Page `82903557`, https://confluence.hl7.org/spaces/FHIRI/pages/82903557/FHIR+Infrastructure+Minutes+CC+20200420; reopen with `bun run confluence:search snapshot 82903557` | Records `FHIR-25738` as a technical correction needing no vote |

## Change summary

### Page wrapper and metadata

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed an outer `<div class="col-12">` and matching closing `</div>`. Classification: metadata/template/navigation or mechanical template churn.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the header table from work group plus maturity/status to `Responsible Owner` plus standards status, dropping the explicit FMM cell. Classification: metadata/template/navigation for R6.

### Slicing example syntax modernization

- The largest substantive/semantic guidance change is `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6` (`FHIR-20569 Re-slicing examples not valid`), which rewrote many snippets to add `element id="..."`, change many `name` elements to `sliceName`, remove old `<definition>` wrappers, and update XML quoting.
- The intended rationale is supported by:
  - `FHIR-20569`: "Will update examples to include element.id (with slice/reslice names) and check resolve() syntax to make sure it is correct and works with the tooling."
  - `FHIR-25738`: "samples ... are incorrect. They don't make use of ElementDefinition.id and incorrectly use ElementDefinition.name instead of ElementDefinition.sliceName."
  - `FHIR-34007`: a narrower correction for one `name` -> `sliceName` instance.
- Classification: semantic guidance and example change. This is reader-facing and conformance-relevant because the page teaches profile slicing syntax, even though the page itself is Informative.
- Important current-state issue: several converted snippets remain invalid or internally inconsistent. See actionable finding `H-001`.

### Lipid profile example references and content

- `33b409a4b6d544598262f2f074ebb4b6dc466157` changed a link from `lipid-report.html` to `lipidprofile.html`.
- `3128420e7110d810fc544997b2ebead60052917d` changed the link from `lipidprofile.html` to `diagnosticreport-example-lipid-panel.html`; `FHIR-22531` supports this as part of cleaning up multiple "Example Lipid Profile" names and linking to the lipid panel example.
- `ea9e526cc83eeeff8d3446a95de766022e8d215c` changed the HDL profile's fixed code from `2085-9` to `2089-1` under "qa from new validator." That change affects example semantics and now contradicts the HDL profile name/target and the HDL instance. See actionable finding `H-002`.
- Classification: link update, example change, and semantic example problem.

### Medication resource rename

- `b2032629f28b8d31b9a67b46170dde873398fb0d` changed the Re-slicing narrative list item from `MedicationUsage` to `MedicationStatement`.
- `FHIR-38682` explains the R5 decision to change the resource name back to MedicationStatement while keeping other changes.
- Classification: terminology/reference update with source Jira rationale.

### Editorial and mechanical cleanup

- Many XML examples changed `&quot;` to literal quotes inside escaped/preformatted examples. Classification: mechanical/editorial unless it created a malformed example (one did at current line 292).
- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` made two `e.g.` -> `e.g.,` punctuation edits, matching `FHIR-44047`. Classification: editorial only.

## Source history

| Commit | Date | Subject | Classification | Notes |
|---|---:|---|---|---|
| `33b409a4b6d544598262f2f074ebb4b6dc466157` | 2021-01-14 | rework source for new build core | metadata/link churn | Changed lipid example link `lipid-report.html` -> `lipidprofile.html`. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | mechanical/template | Removed wrapping `<div class="col-12">` and closing `</div>`. |
| `b0b61f5f9358158dcad069e36ff577672252d3f4` | 2022-05-10 | FHIR-34007 element.name -> element.sliceName | example correction | One `HomePhone` `name` -> `sliceName` change. Jira comment records `git b0b61f5`. |
| `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6` | 2022-08-29 | FHIR-20569 Re-slicing examples not valid | substantive example modernization | Large rewrite adding ids and `sliceName`; introduced/left several invalid current snippets. |
| `b2032629f28b8d31b9a67b46170dde873398fb0d` | 2023-01-25 | FHIR-38682 | terminology/reference | `MedicationUsage` -> `MedicationStatement`. |
| `ea9e526cc83eeeff8d3446a95de766022e8d215c` | 2024-01-05 | qa from new validator | example semantics | Changed HDL profile code to `2089-1`; current page contradicts itself. |
| `3128420e7110d810fc544997b2ebead60052917d` | 2025-09-06 | more changes for FHIR-22531 | link/reference | Changed lipid link to `diagnosticreport-example-lipid-panel.html`; Jira comment links PR `HL7/fhir#3649`. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | metadata/template | Header table changed to "Responsible Owner" and removed maturity cell. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | editorial | Two `e.g.,` punctuation corrections. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-34007` (`Published`, Technical Correction, Persuasive): the page used `element.name` where `element.sliceName` was required. The issue's related URL is `https://www.hl7.org/fhir/profiling-examples.html`; the only comment says `git b0b61f5`.
- `FHIR-20569` (`Published`, Change Request, Persuasive): the re-slicing/profile examples did not use latest syntax. Resolution: update examples to include `element.id` with slice/reslice names and check `resolve()` syntax so it works with tooling. This directly applies to the large `76a58b57d0e...` page change.
- `FHIR-38682` (`Published`, Persuasive with Modification): decision to change MedicationUsage back to MedicationStatement; explains the single page list-item rename.
- `FHIR-22531` (`Applied`, Not Persuasive with Modification): concerns lipid profile/example naming. Resolution says to link to the lipid panel example instead of lipid profile; comment links `3128420e...` in PR `#3649`.
- `FHIR-44047` (`Resolved - change required`, Persuasive): global correction for `e.g.,` and `i.e.,` punctuation. The page received two punctuation edits, but the Jira remains indeterminate because it is a broad many-page cleanup.

### Other Jira issues that plausibly explain the same changed text

- `FHIR-25738` (`Published`, Technical Correction, Persuasive): "Many examples on profiling are wrong." It specifically says the samples at `http://build.fhir.org/profiling-examples.html` lack `ElementDefinition.id` and incorrectly use `ElementDefinition.name` instead of `ElementDefinition.sliceName`. Confluence FHIR-I minutes on 2020-04-20 recorded it as a technical correction, no vote needed.
- No separate Jira issue was found for the current duplicate ids, lowercase `slicename`, malformed `Patient.telecom:Email.system` id, or HDL/LDL code mismatch.

### Context-only Jira hits

- Sanitized Jira search for `Patient telecom Email system` returned unrelated US Core, identity matching, and ContactPoint issues; none explained this page's current duplicate/malformed ids.
- Sanitized Jira search for `DiagnosticReport result Triglyceride` returned `FHIR-22531`, which explains the lipid example link cleanup but not the `DiagnosticReport.result:Triglyceride` id/path inversion.
- Jira search for `HDLCholesterol 2089` returned no results.

## Zulip evidence

- `#IG creation > good examples of profile slicing` (2020-01-30): Sean McIlvenna said `profiling-examples.html` examples were "clearly wrong" because they did not use `ElementDefinition.id` and used `ElementDefinition.name` instead of `ElementDefinition.sliceName`; Grahame asked him to create a task. This aligns with `FHIR-25738`.
- `#fhir/infrastructure-wg > Slicing Patient Telecom` (2020-06-03): Marco Visser asked whether the Patient Telecom example was wrong because slices should contain `sliceName` and the email slice lacked a fixed discriminator element. This reinforces that the telecom examples had known syntax/validation problems before the R5/R6 source rewrite.
- `#implementers > typo in slicing example?` (2021-09-23): Michael van der Zel identified the old `name` element in the HomePhone example; Lloyd confirmed `sliceName` was correct and asked for a technical correction; Michael linked `FHIR-34007`.
- `#IG creation > Validator fails on published slicing example` (2022-10-20 to 2022-10-25): Karl Naden tested the Patient Telecom example against validators and later supplied a corrected JSON profile showing distinct ids such as `Patient.telecom:workPhone.system`, `Patient.telecom:workPhone.value`, and `Patient.telecom:email.system`. Grahame fixed a validator issue around `max=0`. This thread provides a concrete expected syntax contrast to the current page's duplicate `Patient.telecom:WorkPhone`/`Email` ids.
- `#fhirpath > Slice ID Uniqueness` (2023-08-30): Walt Askew explicitly noticed the current page's duplicate `Patient.telecom:WorkPhone` ids. Chris Moesel replied, "Yikes. That's a mistake," and said the ids should be `Patient.telecom:WorkPhone`, `Patient.telecom:WorkPhone.system`, and `Patient.telecom:WorkPhone.value`; he also pointed to `sdf-16`/`sdf-17` requiring distinct ids. This is strong evidence that at least part of the `FHIR-20569` implementation remains defective.

## Confluence evidence

- FHIR Infrastructure Minutes CC 20200420, page `82903557`, records `jira:FHIR-25738 Technical correction, no need to vote`. This supports treating the old-syntax example updates as formal FHIR-I maintenance work, not merely informal cleanup.
- `refs jira FHIR-20569` and `refs jira FHIR-34007` found no Confluence pages.
- FTS for `profiling examples sliceName` found no high-signal Confluence pages beyond the `FHIR-25738` refs result.
- Sanitized FTS for `Re slicing examples valid` produced broad background slicing/minutes hits, but no page-specific decision relevant enough to rely on.

## Timeline

| Date | Clock | Evidence | What happened |
|---:|---|---|---|
| 2019-03-20 | Jira created | `FHIR-20569` | Rick Geimer reported the re-slicing examples were not valid/latest syntax and attached a working test IG. |
| 2019-03-25 | Jira vote/resolution | `FHIR-20569` | FHIR-I resolved to update examples with element ids and checked `resolve()` syntax. |
| 2020-01-30 | Zulip discussion | `#IG creation > good examples of profile slicing` | Community report that page examples lacked `ElementDefinition.id` and used `name` instead of `sliceName`; task requested. |
| 2020-01-30 | Jira created | `FHIR-25738` | "Many examples on profiling are wrong." |
| 2020-04-20 | Confluence minutes | Page `82903557` | FHIR-I recorded `FHIR-25738` as technical correction, no vote needed. |
| 2020-06-03 | Zulip discussion | `#fhir/infrastructure-wg > Slicing Patient Telecom` | Additional concern that Patient Telecom slices should use `sliceName` and have fixed discriminator elements. |
| 2021-09-23 | Zulip/Jira | `#implementers > typo in slicing example?`, `FHIR-34007` | Specific old `name` usage reported and confirmed. |
| 2022-05-10 | Source commit | `b0b61f5f9358158dcad069e36ff577672252d3f4` | Narrow HomePhone `name` -> `sliceName` correction. |
| 2022-08-29 | Source commit | `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6` | Large example rewrite for `FHIR-20569`. |
| 2022-10-20 to 2022-10-25 | Zulip validator discussion | `#IG creation > Validator fails on published slicing example` | Corrected telecom profile syntax shown; validator behavior fixed for `max=0`. |
| 2023-01-25 | Source commit | `b2032629f28b8d31b9a67b46170dde873398fb0d` | MedicationUsage renamed to MedicationStatement on this page. |
| 2023-08-30 | Zulip later reassessment | `#fhirpath > Slice ID Uniqueness` | Current duplicate `Patient.telecom:WorkPhone` ids noticed and confirmed as a mistake. |
| 2024-01-05 | Source commit | `ea9e526cc83eeeff8d3446a95de766022e8d215c` | HDL profile fixed code changed to `2089-1`, creating/maintaining HDL-vs-LDL inconsistency. |
| 2025-09-06 | Source commit/PR | `3128420e7110d810fc544997b2ebead60052917d`, PR `#3649` | Lipid link updated per `FHIR-22531`. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 header metadata updated. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Two punctuation edits for `FHIR-44047`. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/profiling-examples.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/profiling-examples.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/profiling-examples.html`
  - Established broad example modernization, link/name updates, metadata/template edits, and editorial punctuation changes.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/profiling-examples.html`
  - `git show --stat --patch <commit> -- source/profiling-examples.html` for the 9 page commits.
  - `git log --all --grep='FHIR-25738' -- source/profiling-examples.html` found no page commit whose message explicitly carried `FHIR-25738`.
  - `git blame -L` on current problematic line ranges tied most syntax defects to `76a58b57d0e...` and the HDL code line to `ea9e526c...`.
- Current page read:
  - `wc -l` reported 1286 lines.
  - Read lines `1-260`, `261-520`, `521-780`, `781-1040`, and `1041-1286`.
- Current-page targeted searches:
  - `rg -n 'slicename|Patient\.telecom:WorkPhone"|Patient\.telecom:Email"|Patient\.telecom:Email\.system|DiagnosticReport\.result:Triglyceride|HDLCholesterol|2089-1|Composition\.section\.section|med-request' .../source/profiling-examples.html`
  - `grep -n "sdf-16\|sdf-17\|All element definitions must have unique ids" -R .../source/structuredefinition`
- Jira:
  - `bun run jira:search snapshot FHIR-34007`
  - `bun run jira:search snapshot FHIR-20569`
  - `bun run jira:search snapshot FHIR-38682`
  - `bun run jira:search snapshot FHIR-22531`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search fts "slicename profiling examples" --limit 10` found `FHIR-25738`; then `bun run jira:search snapshot FHIR-25738`.
  - Sanitized Jira phrase searches for `Patient telecom Email system`, `DiagnosticReport result Triglyceride`, `HDLCholesterol 2089`, and `profiling examples reslicing valid`.
  - Failed Jira FTS forms with punctuation/hyphens/dots: `profiling-examples`, `Patient.telecom Email system`, `DiagnosticReport.result Triglyceride`, `HDLCholesterol 2089-1`, `profiling-examples reslicing valid`.
- Zulip:
  - Exact-key SQL: `bun run zulip:search sql "SELECT ... FROM messages WHERE content LIKE '%FHIR-20569%' OR ..."`
  - `bun run zulip:search fts "profiling examples sliceName" --limit 20`
  - `bun run zulip:search snapshot fhirpath "Slice ID Uniqueness"`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Slicing Patient Telecom"`
  - `bun run zulip:search snapshot "IG creation" "good examples of profile slicing"`
  - `bun run zulip:search snapshot implementers "typo in slicing example?"`
  - `bun run zulip:search snapshot "IG creation" "Validator fails on published slicing example"`
  - Failed Zulip FTS forms with hyphen/dot syntax: unquoted `FHIR-20569`, `FHIR-25738`, `FHIR-34007`, `Re-slicing examples not valid`, and `duplicate ids Patient.telecom WorkPhone`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-20569`
  - `bun run confluence:search refs jira FHIR-25738`
  - `bun run confluence:search refs jira FHIR-34007`
  - `bun run confluence:search snapshot 82903557`
  - `bun run confluence:search fts "profiling examples sliceName" --limit 20`
  - `bun run confluence:search fts "Re slicing examples valid" --limit 20`
  - Failed Confluence FTS form with hyphen: `Re-slicing examples not valid`.
