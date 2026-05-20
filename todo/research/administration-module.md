# administration-module research appendix

## Scope and coverage

- Page path: `source/administration-module.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Local old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Local new tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Page boundary: present in both trees.
- Newer page read end-to-end: yes, 377 lines.
- Direct source history: 25 commits touched this page between the two commits.
- Explicit Jira keys found in commit subjects: `FHIR-15792`, `FHIR-22687`, `FHIR-25932`, `FHIR-14157`, `FHIR-24827`, `FHIR-47508`, `FHIR-44030`, `FHIR-27164`, `FHIR-42732`, `FHIR-50678`, `FHIR-44047`.
- Searches performed: explicit Jira snapshots; targeted Jira/Zulip/Confluence searches for changed phrases; Zulip snapshots for the main household, user-identity, and scheduling threads; Confluence snapshots for the main PA/Security evidence pages.
- Caveats: this is a bounded review, not an exhaustive review of every resource added to the module index. Several changes are broad module/index updates or diagram-support text rather than resource definitions. The R6 ballot4 source predates later 2026 Security work on `FHIR-50838`, so that issue is later context rather than implementation evidence for this page version.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:1` | Full current page under review |
| Source | Index/resource additions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:32-83` | Shows added/moved module index entries |
| Source | Households/personal relationships | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:114-150` | Main `FHIR-44030` applied text |
| Source | Clinical/financial note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:153-174` | `FHIR-47508` rename and `FHIR-42732` Patient-link note |
| Source | Research note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:232-250` | Current unclear implementation note; actionable finding |
| Source | User identities | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:277-319` | `FHIR-27164` applied guidance |
| Commit | Patient register wording | `d19ec33e54a1c93b4382a5f43f849bdebfb57bcd`, https://github.com/HL7/fhir/commit/d19ec33e54a1c93b4382a5f43f849bdebfb57bcd | Applies `FHIR-15792` wording |
| Commit | Research section | `c048e735e0c4c9d01b4e4e7548393dbbd45de4e2`, https://github.com/HL7/fhir/commit/c048e735e0c4c9d01b4e4e7548393dbbd45de4e2 | Adds the research section and unclear note without an explicit Jira key |
| Commit | User identity guidance | `f0c1061b32c8c90986ca85b352d16038b02c3c85`, https://github.com/HL7/fhir/commit/f0c1061b32c8c90986ca85b352d16038b02c3c85 | Applies `FHIR-27164` to this page and selected resource definitions |
| Commit | Account/Patient note | `324cfc2222fde0496ea6ecd1eff799c4173ab768`, https://github.com/HL7/fhir/commit/324cfc2222fde0496ea6ecd1eff799c4173ab768 | Applies `FHIR-42732` |
| Commit | Device module pointer | `791308c7518e9e0353191903aaa8f197de971e22`, https://github.com/HL7/fhir/commit/791308c7518e9e0353191903aaa8f197de971e22 | Applies `FHIR-50678` |
| Commit | Incubator link changes | `71567db3ee039ac6977be5f96a7e013896569a36`, https://github.com/HL7/fhir/commit/71567db3ee039ac6977be5f96a7e013896569a36 | Moves `PersonalRelationship`/`EncounterHistory` references to admin-incubator links |
| Jira | `FHIR-44030` | https://jira.hl7.org/browse/FHIR-44030; reopen with `bun run jira:search snapshot FHIR-44030` | Formal disposition for household/family guidance |
| Jira | `FHIR-27164` | https://jira.hl7.org/browse/FHIR-27164; reopen with `bun run jira:search snapshot FHIR-27164` | Formal disposition for user identity guidance |
| Jira | `FHIR-42732` | https://jira.hl7.org/browse/FHIR-42732; reopen with `bun run jira:search snapshot FHIR-42732` | Formal disposition for Account/Patient note |
| Jira | `FHIR-50838` | https://jira.hl7.org/browse/FHIR-50838; reopen with `bun run jira:search snapshot FHIR-50838` | Later Security follow-up to `FHIR-27164`; not in R6 ballot4 source |
| Zulip | Scheduling service type | `#implementers > Scheduling Service Type Representation`; `bun run zulip:search snapshot implementers "Scheduling Service Type Representation"` | Rationale/disagreement for `FHIR-22687` |
| Zulip | Household/family | `#patient administration WG > Household`; `bun run zulip:search snapshot "patient administration WG" Household` | Background and use cases behind `FHIR-44030` |
| Zulip | User linkage | `#patient administration WG > linkage to User`; `bun run zulip:search snapshot "patient administration WG" "linkage to User"` | Early rationale for `FHIR-27164` |
| Confluence | Personal Relationships and Households | Page 220692924, https://confluence.hl7.org/spaces/PA/pages/220692924/Personal+Relationships+and+Households; `bun run confluence:search snapshot 220692924` | Project page containing the text later applied to this module page |
| Confluence | 2025 Jan PA WGM | Page 307302327, https://confluence.hl7.org/spaces/PA/pages/307302327/2025+January+WGM+Virtual+-+Meeting+Minutes; `bun run confluence:search snapshot 307302327` | Vote evidence for `FHIR-44030` and `FHIR-27164` |
| Confluence | 2025 Sep PA WGM | Page 358896399, https://confluence.hl7.org/spaces/PA/pages/358896399/2025+September+WGM+Pittsburgh+-+Meeting+Minutes; `bun run confluence:search snapshot 358896399` | Vote evidence for `FHIR-42732` |

## Change summary

### Module index and resource coverage

- **Metadata/template/navigation:** `Work Group` changed to `Responsible Owner: Work Group`; the outer `<div class="col-12">` wrapper disappeared; `e.g.` punctuation was standardized. Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` accounts for the responsible-owner wording; `FHIR-44047`/merge commits account for `e.g.,` cleanup.
- **Semantic guidance/resource coverage:** the index gained `PersonalRelationship`, `Account` moved into the first column, `OrganizationAffiliation`, `SpecimenDefinition`, `EncounterHistory`, `ObservationDefinition`, `BiologicallyDerivedProduct`, `NutritionProduct`, and `InventoryItem` were added or linked. Some later commits moved `PersonalRelationship`, `EncounterHistory`, and `InventoryItem` to incubator URLs rather than core local pages.
- **Mechanical/noise:** commit `5504d434b29697cb190ca56d7b953838fea3695d` appears as a whole-file replacement in a raw diff because of line-ending churn; with `--ignore-space-at-eol` it is only the section title change from `Clinical Categorization Resources` to `Clinical / Financial Categorization Resources`.

### Patient registers and households

- **Semantic guidance:** `FHIR-15792` replaced the terse patient-register sentence with the current "people and animals" wording.
- **Semantic guidance/substantive informative content:** `FHIR-44030` added `Representing Households and Personal Relationships`, including guidance that household Groups can contain `Patient` and `RelatedPerson` members, that `Group.member.involvement` describes the member's role relative to the Group, and that `PersonalRelationship` records member-to-member relationships. It also moved aggregate-population guidance under patient registers and added `PersonalRelationship` to privacy considerations.
- **Context:** the Confluence project page 220692924 contains nearly the same text and says the work was split into household/family representation and relationship-network representation.

### Clinical/financial categorization and scheduling

- **Semantic guidance:** `FHIR-47508` renamed the section to `Clinical / Financial Categorization Resources` to reflect InsurancePlan/InsuranceProduct diagram work.
- **Semantic guidance:** `FHIR-42732` added an implementation note that an Encounter and Account for the same human may reference separate Patient instances and that those Patient instances should be linked with `Patient.link` type `seealso`.
- **Semantic guidance:** `FHIR-22687` added text under Scheduling and Appointments saying scheduling resources may use either `HealthcareService` or a coding to identify the scheduled activity/service. Jira and Zulip show this was part of broader `CodeableReference(HealthcareService)` scheduling work and discussion about whether `HealthcareService` should represent detailed schedulable services.

### Devices, research, and user identity

- **Semantic guidance:** `FHIR-50678` added a pointer from the Devices and Substances section to the dedicated device module.
- **Semantic guidance with editorial risk:** commit `c048e735e0c4c9d01b4e4e7548393dbbd45de4e2` added a Research Studies and Subjects section and an implementation note about extensions, search parameters, mixed research/non-research encounters, and deriving research context from observations/diagnostic reports/immunizations. I found no explicit Jira/community rationale for the wording, and the current note is difficult to parse.
- **Substantive informative guidance:** `FHIR-27164` added a `Representing User Identities` section under Security and Privacy. It says systems may use `.identifier` on Patient, RelatedPerson, Practitioner, or Person, may duplicate a Person identifier to related resources, may handle user identities outside FHIR, and should not use `.telecom` properties to represent user identities. The section includes an Identifier example with v2-0203 code `USER` and a note that SMART App Launch `fhirUser` may refer to Patient, RelatedPerson, Practitioner, PractitionerRole, or Person.

## Source history

| Commit | Date | Subject | Page-specific effect |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical/template update |
| `d19ec33e54a1c93b4382a5f43f849bdebfb57bcd` | 2021-05-27 author / 2022-01-20 commit | `#FHIR-15792 Clarify description of "patient trackers" in the administration module` | Rewrites Patient Registers description |
| `287cd1d15b97afbd3991e033ff3779bc3a6bd696` | 2022-08-08 | `#FHIR-22687 Update resource description to cater for healthcareservce catalogs` | Adds scheduling paragraph about HealthcareService or coding |
| `24bf2439176ba8fbfab9c9342b71eaef0315790b` | 2022-08-08 | `#FHIR-25932 Admin Module diagram updates` | Adds OrganizationAffiliation and InsurancePlan rows to provider directory table |
| `c048e735e0c4c9d01b4e4e7548393dbbd45de4e2` | 2022-08-09 | QA Update administration module to include the ResearchStudy space | Adds Research Studies and Subjects section and implementation note |
| `53538c40d6fd5ba9a8dc8c07e050478d73aa9037` | 2023-02-10 | `FHIR-14157 Include the first draft of the EncounterHistory resource` | Adds EncounterHistory to index |
| `4e64cbf779bc524debb8cd4da4c5573157fd3836` | 2023-02-17 | fix typo | Fixes "patients'" to "patient's" |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Removes intro `<br/>`; punctuation cleanup in research note |
| `9a6bccc9832fd33f872b51b53e5dcdc99cc3962f` | 2023-03-09 | add OO resources | Adds Account/SpecimenDefinition/ObservationDefinition/BiologicallyDerivedProduct/NutritionProduct/InventoryItem index entries |
| `bbb03169940b53718fb872efe999005723a6282c` | 2023-03-09 | update modules | Fixes `nutritionroduct.html` typo |
| `2028e3df2dec71628827a8be0ccdda7f9d170b1b` | 2023-12-08 | `FHIR-24827 Split InsuranceProduct/InsurancePlan resource` | Adds InsuranceProduct to provider directory table |
| `295a237eded6290fd52dd3d3ab870a3c58c9ef1b` | 2024-08-08 | QA: Add an aggregate populations section... | Adds OrganizationAffiliation index entry and Aggregate Populations section |
| `b48ac869a2af32b22b3bd3d7ba0181011d8bc1ae` | 2024-09-23 | Initial draft of the PersonalRelationship resource | Adds PersonalRelationship index/table entries |
| `5504d434b29697cb190ca56d7b953838fea3695d` | 2024-12-02 | `FHIR-47508 InsuranceProduct, should be part of the admin-module page diagram` | Renames Clinical Categorization section to Clinical / Financial Categorization; raw patch mostly EOL churn |
| `298029c8bdae2366980ba1fe4c1331b1eaaa8c16` | 2025-03-31 | `FHIR-44030 Info about Family on Administration Module Page` | Adds household/personal-relationship section and privacy mention |
| `f0c1061b32c8c90986ca85b352d16038b02c3c85` | 2025-03-31 | `FHIR-27164 Recommendation for user identity binding` | Adds user-identity section |
| `324cfc2222fde0496ea6ecd1eff799c4173ab768` | 2025-10-25 | `FHIR-42732 Account and Patient usage` | Adds Patient-link implementation note under clinical/financial categorization |
| `791308c7518e9e0353191903aaa8f197de971e22` | 2025-10-28 | `FHIR-50678 Administration Module & Devices` | Adds device-module pointer |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changes label to `Responsible Owner: Work Group` |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | `e.g.` punctuation cleanup |
| `3b38b80cf23f9cbb306fab8fcedb293315478c32` | 2025-11-05 | Remove OO resources and point to new incubator | Changes InventoryItem link to OO incubator, initially with wrong IG path |
| `01706a920f4e88452c409c2cc0b7c74f09ac51c6` | 2025-11-05 | fix oo links | Fixes InventoryItem incubator URL |
| `87f87a8a0389df053a5217de019d2596933da10f` | 2025-11-06 | Merge branch `master` into `i.e.-e.g-` | Merge support for punctuation branch |
| `71567db3ee039ac6977be5f96a7e013896569a36` | 2025-11-07 | ballot notes part #1... | Moves PersonalRelationship and EncounterHistory links to admin-incubator URLs; removes `[%res-item PersonalRelationship%]` table item |
| `26e92f62992049deb04d97c36677f38eb4d140af` | 2025-11-07 | Merge remote-tracking branch `origin/master` | Merge combines punctuation and incubator-link changes |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-15792` (Published, Persuasive, non-substantive, applied for R5) exactly matches the Patient Registers rewrite. Snapshot command: `bun run jira:search snapshot FHIR-15792`.
- `FHIR-22687` (Published, Persuasive with Modification, non-compatible, applied for R5) describes changing Appointment/Slot/Encounter/Schedule `serviceType` to `CodeableReference(HealthcareService)` and explicitly asks to add the scheduling paragraph now present at lines 213-215. Snapshot command: `bun run jira:search snapshot FHIR-22687`.
- `FHIR-25932` (Published, Persuasive, correction, applied for R5) concerns scheduling diagram correctness. The page patch only added OrganizationAffiliation and InsurancePlan to a table; diagram/image changes are outside this page source.
- `FHIR-14157` (Published, Persuasive with Modification, non-compatible, applied for R5) created EncounterHistory; the page effect was adding EncounterHistory to the index, later moved to admin-incubator link.
- `FHIR-24827` (Applied, Persuasive, non-compatible) split InsurancePlan into InsuranceProduct/InsurancePlan and called for administrative-module diagram/description updates. The page gained InsuranceProduct in the Service Provider Directory table.
- `FHIR-47508` (Applied, Persuasive with Modification, non-substantive) says InsuranceProduct should be represented on the administration-module diagram; resolution also says to rename `Clinical Categorization` to `Clinical / Financial Categorization`. The page implements the title change.
- `FHIR-44030` (Applied, Persuasive, non-substantive, applied for R6) supplies the exact household/personal-relationship text now on the page and cites the PA project page.
- `FHIR-27164` (Applied, Persuasive with Modification, non-substantive, applied for R6) supplies the user-identity section now on the page and links later follow-up `FHIR-50838`.
- `FHIR-42732` (Applied, Persuasive with Modification, non-substantive, applied for R6) supplies the implementation note about Account/Encounter potentially referencing separate Patient instances linked with `Patient.link` type `seealso`. Jira comment records application with commit `324cfc2222fde0496ea6ecd1eff799c4173ab768`.
- `FHIR-50678` (Applied, Persuasive, non-substantive) asks for a link from the Devices and Substances section to the device module; the page implements this.
- `FHIR-44047` (Resolved - change required, Persuasive) is broad `e.g.,`/`i.e.,` punctuation cleanup. It should not drive page-specific action.

### Other Jira issues plausibly related to changed text

- `FHIR-50838` is a later Security follow-up to `FHIR-27164`; it asks the Security module to include guidance on user-identifier duplication and to refer back to the PA/Admin guidance. It is later than the R6 ballot4 source and does not show an administration-module implementation mismatch in this reviewed version.
- `FHIR-40405` is referenced in `FHIR-27164` comments and concerns adding v2-0203 identifier type `USER`. It is context for the example code but does not directly change this page.
- `FHIR-50073` relates to `FHIR-22687` and later clarifies HealthcareService examples/scope. It is context for the scheduling/service-catalog discussion, not an administration-module mismatch.
- `FHIR-54493`/`FHIR-54491` appeared in a search for `EncounterHistory admin-incubator`; they concern Encounter/EncounterHistory relationship issues after the incubator move, not this page's current link text.

### Context-only Jira hits that should not drive action

- `FHIR-53637`, `FHIR-53609`, `FHIR-53282`, and other OO-incubator hits appeared for `InventoryItem`/`oo-incubator` searches. They relate to the incubator IG/resources, not a demonstrated administration-module defect.
- `FHIR-46075` appeared in a user-identity search but is a broader/no-change issue; it did not reveal a mismatch in this page.

## Zulip evidence

- `#implementers > HealthcareService and Slot` (`bun run zulip:search snapshot implementers "HealthcareService and Slot"`): Martin Grundberg proposed referencing HealthcareService from Slot service type in April 2019; Brian Postlethwaite agreed a HealthcareService reference would often be expected and asked for a tracker. This is origin/rationale for `FHIR-22687`.
- `#implementers > Scheduling Service Type Representation` (`bun run zulip:search snapshot implementers "Scheduling Service Type Representation"`): September-November 2021 thread captures disagreement about whether HealthcareService should represent specific schedulable services. Cooper Thompson argued implementers intuitively use HealthcareService for CT-scan-like schedulable services; Lloyd McKenzie raised concerns that many HealthcareService attributes do not fit fine-grained services. Brian linked this directly to `FHIR-22687`.
- `#patient administration WG > Household` (`bun run zulip:search snapshot "patient administration WG" Household`): May 2023-May 2024 discussion of representing households/families, including African/global goods use cases, household members/head/status, and Group as the likely representation.
- `#patient administration WG > Africa` (`bun run zulip:search snapshot "patient administration WG" Africa`): June 2023 discussion of whether families can act collectively and whether Group or Organization is appropriate; this is background for later Group/family guidance.
- `#patient administration WG > Family and Household Groups` (`bun run zulip:search snapshot "patient administration WG" "Family and Household Groups"`): May 2024-January 2025 discussion confirming Group as the family/household representation and PersonalRelationship as the relationship-network work. It also includes a later question about person-location relationships that did not change the applied page text.
- `#patient administration WG > PersonalRelationship resource` (`bun run zulip:search snapshot "patient administration WG" "PersonalRelationship resource"`): September 2024 thread about the first draft of PersonalRelationship, source/target naming, possible Person participation, and relationship scope.
- `#patient administration WG > linkage to User` (`bun run zulip:search snapshot "patient administration WG" "linkage to User"`): November 2022-January 2023 discussion behind `FHIR-27164`; John Moehrke proposed consistent linkage from FHIR actor resources to user identities via Identifier, and PA/Security split work between PA resource guidance and Security profile/code work.
- `#implementers > Search by Name - Person v. Patient` (`bun run zulip:search snapshot implementers "Search by Name - Person v. Patient"`): May 2020 thread referenced by `FHIR-27164`, including Lloyd McKenzie's note that professional actors are Practitioners and debate about Person as a SMART/user identity anchor.
- `#implementers > Practitioner log in names` (`bun run zulip:search snapshot implementers "Practitioner log in names"`): September 2024 follow-up where Bas van den Heuvel asked about Practitioner login names; John Moehrke pointed to `FHIR-27164`.

Failed/low-signal Zulip searches: unquoted `FHIR-xxxxx` FTS searches initially failed because FTS parsed the hyphenated keys as expressions; quoted key searches were rerun. Exact phrase searches for `Representing Households and Personal Relationships`, `DO NOT use .telecom properties to represent user identities`, and `Patient.link`/`seealso` found no additional high-signal threads beyond Jira-linked material.

## Confluence evidence

- Page 220692924, `Personal Relationships and Households` (`bun run confluence:search snapshot 220692924`): summarizes the project work, references `FHIR-44030`, and contains the exact proposed admin-page text for `Representing Households and Personal Relationships`. It also records that Group changes came from FHIR-I/Grahame and that PA would align admin content.
- Page 307302327, `2025 January WGM (Virtual) - Meeting Minutes` (`bun run confluence:search snapshot 307302327`): records `FHIR-44030` being reactivated with enough Group/PersonalRelationship information to add guidance, and records a motion to approve the administration-module/resource proposal. It also records `FHIR-27164` approval and creation of Security follow-up `FHIR-50838`.
- Page 239247306, `2024 May WGM Dallas - Meeting Minutes` (`bun run confluence:search snapshot 239247306`): records proposed verbiage for using Group for aggregate population/household content and investigation of `FHIR-27164`.
- Page 274269548, `2024 September WGM Atlanta - Meeting Minutes` (`bun run confluence:search snapshot 274269548`): records `FHIR-47508` motion and the planned update to the diagram and `Clinical Categorization Resources` section.
- Page 358896399, `2025 September WGM Pittsburgh - Meeting Minutes` (`bun run confluence:search snapshot 358896399`): records `FHIR-42732` proposed solution updated to include `Patient.link` and approved 8-0-0.
- Page 345083550, `2025 May WGM Madrid - Meeting Minutes` (`bun run confluence:search snapshot 345083550`): references `FHIR-50678`; Jira carries the clearest resolution text for this page.
- Page 79500327, `2021 Sept WGM - Patient Administration` (`bun run confluence:search snapshot 79500327`): records discussion of `FHIR-22687` and the administration-module follow-up for HealthcareService/scheduling text.
- Page 239244773, `202405 SEC WGM Minutes` (`bun run confluence:search snapshot 239244773`): context for Security review of `FHIR-27164`; Jira comments are clearer for the final text.
- Page 441519513, `2026-03-30 Security WG Agenda & Minutes` (`bun run confluence:search snapshot 441519513`): later vote/process evidence for `FHIR-50838`.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2018-03-17 | Jira created | `FHIR-15792` | Patient-register wording concern |
| 2019-01-16 | Jira vote/resolution | `FHIR-15792` | Persuasive, 6-0-0 |
| 2019-04 to 2021-11 | Zulip discussion | `HealthcareService and Slot`; `Scheduling Service Type Representation` | Community rationale and disagreement for HealthcareService/scheduling changes |
| 2020-02-07 | Jira created | `FHIR-25932` | Scheduling diagram correction |
| 2020-05-19 to 2023-01 | Zulip discussion | `Search by Name - Person v. Patient`; `linkage to User` | User identity and Person/Practitioner/RelatedPerson context |
| 2021-09-23 | Jira vote/resolution | `FHIR-22687` | Scheduling serviceType/HealthcareService resolution |
| 2022-08-08 | Source commit | `287cd1d15b97afbd3991e033ff3779bc3a6bd696` | Adds scheduling paragraph |
| 2022-08-09 | Source commit | `c048e735e0c4c9d01b4e4e7548393dbbd45de4e2` | Adds Research section; no explicit Jira key |
| 2023-05-08 | Jira vote/resolution | `FHIR-24827` | InsurancePlan/InsuranceProduct split |
| 2023-12-08 | Source commit | `2028e3df2dec71628827a8be0ccdda7f9d170b1b` | Adds InsuranceProduct table row |
| 2024-01 to 2025-01 | WG/project work | Confluence 220692924, 307302327; Zulip household topics | Household/PersonalRelationship guidance developed |
| 2024-09-26 | Jira vote/resolution | `FHIR-47508` | Clinical/financial title and diagrams |
| 2024-12-02 | Source commit | `5504d434b29697cb190ca56d7b953838fea3695d` | Applies title change; EOL churn |
| 2025-01-28 | Jira vote | `FHIR-27164` | User identity guidance approved 8-0-0 |
| 2025-01-30 | Jira vote/resolution | `FHIR-44030` | Household/PersonalRelationship guidance approved 8-0-0 |
| 2025-03-31 | Source commits | `298029c8bdae2366980ba1fe4c1331b1eaaa8c16`, `f0c1061b32c8c90986ca85b352d16038b02c3c85` | Applies household and user-identity text |
| 2025-05-12 | Jira vote/resolution | `FHIR-50678` | Device-module pointer approved |
| 2025-10-25 | Source commit | `324cfc2222fde0496ea6ecd1eff799c4173ab768` | Applies Account/Patient note |
| 2025-10-28 | Source commit | `791308c7518e9e0353191903aaa8f197de971e22` | Applies device-module pointer |
| 2025-11-07 | Source commits | `71567db3ee039ac6977be5f96a7e013896569a36`, `26e92f62992049deb04d97c36677f38eb4d140af` | Moves draft resources to incubator URLs and merges punctuation cleanup |
| 2026-03-30 | Later Security vote | `FHIR-50838`, Confluence 441519513 | Later follow-up to security page; not part of R6 ballot4 source |

## Evidence log

- Confirmed both page files exist with:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/administration-module.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/administration-module.html" && echo "new exists"`
- Ran direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/administration-module.html`
  - Also ran `--ignore-space-at-eol` to separate EOL churn from content changes.
- Ran page history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/administration-module.html`
- Inspected page commit patches with `git show --stat --patch` for all 25 page-touching commits. For `5504d434...`, `--ignore-space-at-eol` showed the meaningful change was only the Clinical/Financial section-title change.
- Read the full current page with line-numbered file reads over lines 1-220 and 221-378.
- Snapshot all explicit Jira keys with `bun run jira:search snapshot <KEY>`.
- Ran Jira phrase searches for household/personal-relationship text, user-identity text, `Patient.link`/`seealso`, device-module text, incubator links, and the research-note phrases. The research-note searches found no Jira hits for `"mix of research and non research content"` or `"creating 2 encounters" research`.
- Ran Zulip quoted key searches and snapshots for the main scheduling, household, PersonalRelationship, and user-linkage topics. Initial unquoted key searches failed due FTS parsing of hyphenated keys; quoted searches were rerun.
- Ran Confluence `refs jira` and FTS searches for all explicit Jira keys and key phrases, then snapshotted the main pages listed above.
- Checked external incubator URLs for PersonalRelationship, EncounterHistory, and InventoryItem with `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n'`; all returned HTTP 200 at review time.
