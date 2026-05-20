# secpriv-module research appendix

## Scope and coverage

- Page path: `source/secpriv-module.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both trees.
- Direct diff reviewed: 432-line source diff for `source/secpriv-module.html`.
- New page read end-to-end: yes, 503 lines.
- Source history reviewed: 29 commits touched this page between the two commits.
- Explicit Jira keys found from commit metadata/patches: `FHIR-33014`, `FHIR-34362`, `FHIR-34404`, `FHIR-34400`, `FHIR-25939`, `FHIR-27802`, `FHIR-39624`, `FHIR-42757`, `FHIR-44617`, `FHIR-27801`, `FHIR-52902`, `FHIR-44047`, `FHIR-53129`.
- Jira/Zulip/Confluence searches performed for explicit keys and distinctive phrases. Initial unquoted Zulip key searches failed because FTS parsed Jira-key hyphens as operators; quoted-key searches were rerun and are recorded below.
- Caveat: this review used the source HTML, not a rendered publisher build. Some links point to generated pages that are not source files, so source-tree absence alone was not treated as proof of broken links.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/secpriv-module.html` | R4 baseline source page |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html` | R6 ballot4 source page under review |
| Source lines | Current normative status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:16` | Page status is now Normative |
| Source lines | Permission in module resource index | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:40-55` | Lists externally hosted Permission under "Resources" |
| Source lines | OWASP rendering typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:134` | Missing space in reader-facing text |
| Source lines | Access-token authorization MUST | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:187` | New normative access-control statement |
| Source lines | `_revinc` typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:201` | Misspells `_revinclude` in an example |
| Source lines | User/role/SCIM section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:218-233` | Text from `FHIR-33014`/`FHIR-27802` |
| Source lines | AuditEvent purge guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:254-264` | Text from `FHIR-27801` |
| Source lines | Authorizing Consent AuditEvent section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:339-350` | Text from `FHIR-53129` |
| Source lines | De-identified profile-compliance note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:414-417` | Text from `FHIR-52902` |
| Source lines | Privacy risk from exposed links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:459-472` | New semantic guidance |
| Source lines | Permission in roadmap | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:488-498` | Says future releases will develop Permission |
| Commit | Access-token enforcement | `2cad944e5ca0506393da673876518a3fe37040ab`; https://github.com/HL7/fhir/commit/2cad944e5ca0506393da673876518a3fe37040ab | Implements `FHIR-34362` on this page |
| Commit | OWASP paragraph | `563e56f35b35b9f94193094afca019ec08e2b63c`; https://github.com/HL7/fhir/commit/563e56f35b35b9f94193094afca019ec08e2b63c | Applies security/OWASP updates, including `FHIR-34400` |
| Commit | User/PractitionerRole note | `b1ab4dabb8bd626b70ea00d24b50e4eec9431b5f`; https://github.com/HL7/fhir/commit/b1ab4dabb8bd626b70ea00d24b50e4eec9431b5f | Implements `FHIR-27802` on this page |
| Commit | Signature section moved | `9f942f4729bcb5a897c7ca47794151db8ffd3317`; https://github.com/HL7/fhir/commit/9f942f4729bcb5a897c7ca47794151db8ffd3317 | Implements `FHIR-44617` on this page and `signatures.html` |
| Commit | Audit purge guidance | `dedf440792458b5aaf85c30e78e0792117c67995`; https://github.com/HL7/fhir/commit/dedf440792458b5aaf85c30e78e0792117c67995 | Implements `FHIR-27801` |
| Commit | De-identified profile-compliance note | `6c88ade678388072ce7a2475fb2234df12d335cf`; https://github.com/HL7/fhir/commit/6c88ade678388072ce7a2475fb2234df12d335cf | Implements `FHIR-52902` |
| Commit | Normative/RFC2119 sweep | `87b00c9c0de977f8559e0f99694e8664e03a06cd`; https://github.com/HL7/fhir/commit/87b00c9c0de977f8559e0f99694e8664e03a06cd | Converts many `should`/`may` terms and status |
| Commit | Page marked normative | `c9c2ca2ca9c1079a734c340702edc86d704cb897`; https://github.com/HL7/fhir/commit/c9c2ca2ca9c1079a734c340702edc86d704cb897 | Finalizes page standards status as Normative |
| Commit | Authorizing Consent section | `88a96446a80bf3e43352eb8aac8ddd5db8cf54ee`; https://github.com/HL7/fhir/commit/88a96446a80bf3e43352eb8aac8ddd5db8cf54ee | Implements `FHIR-53129`; Jira comment links PR `HL7/fhir#3952` |
| PR | FHIR-53129 PR | https://github.com/HL7/fhir/pull/3952 | Jira comment says this applied `FHIR-53129` |
| PR | FHIR-52902 PR | https://github.com/HL7/fhir/pull/3713 | Jira comment says this applied `FHIR-52902` |
| Commit | Permission removed from core | `0e2a8a7f839d5e1a43787523daccf07d958362f3`; https://github.com/HL7/fhir/commit/0e2a8a7f839d5e1a43787523daccf07d958362f3 | Removes `source/permission/**` and rewrites this page's Permission links to an IG |
| Jira | FHIR-34362 | `bun run jira:search snapshot FHIR-34362`; https://jira.hl7.org/browse/FHIR-34362 | Formal access-control wording |
| Jira | FHIR-34400 | `bun run jira:search snapshot FHIR-34400`; https://jira.hl7.org/browse/FHIR-34400 | Formal OWASP paragraph wording |
| Jira | FHIR-27802 | `bun run jira:search snapshot FHIR-27802`; https://jira.hl7.org/browse/FHIR-27802 | Formal user/PractitionerRole wording |
| Jira | FHIR-44617 | `bun run jira:search snapshot FHIR-44617`; https://jira.hl7.org/browse/FHIR-44617 | Signature material moved from module to signature page |
| Jira | FHIR-27801 | `bun run jira:search snapshot FHIR-27801`; https://jira.hl7.org/browse/FHIR-27801 | Audit log purge guidance |
| Jira | FHIR-52902 | `bun run jira:search snapshot FHIR-52902`; https://jira.hl7.org/browse/FHIR-52902 | De-identified data may violate clinical profile constraints |
| Jira | FHIR-53129 | `bun run jira:search snapshot FHIR-53129`; https://jira.hl7.org/browse/FHIR-53129 | AuditEvent/Provenance recording authorization based on Consent |
| Zulip | Practitioner/user origin thread | `bun run zulip:search snapshot implementers "use Practitioner for Security"`; https://chat.fhir.org/#narrow/stream/implementers/topic/use%20Practitioner%20for%20Security | Rationale for `FHIR-27802` |
| Zulip | OWASP/security tasks | `bun run zulip:search snapshot "Security and Privacy" "Security Jira Tasks"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/Security%20Jira%20Tasks | Rationale for `FHIR-34400` |
| Zulip | WITM/OWASP context | `bun run zulip:search snapshot "Security and Privacy" "WITM"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/WITM | Background for OWASP emphasis |
| Zulip | Permission as additional resource | `bun run zulip:search snapshot "Security and Privacy" "Permission as additional resource"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/Permission%20as%20additional%20resource | Later reassessment of Consent/Permission boundary |
| Zulip | FMG removal assessment | `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`; https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6 | Explains moving Permission out of core/additional-resource framing |
| Confluence | FHIR-34362 approval | `bun run confluence:search snapshot 81006065`; https://confluence.hl7.org/spaces/SEC/pages/81006065/2021-11-22+Security+Meeting+Agenda+Minutes | Security WG minutes record vote/comments |
| Confluence | FHIR-34400/34404 approval | `bun run confluence:search snapshot 81010536`; https://confluence.hl7.org/spaces/SEC/pages/81010536/2021-12-6+Security+Meeting+Agenda+Minutes | Security WG minutes record OWASP/vulnerability-reporting decisions |
| Confluence | FHIR-52902 trigger | `bun run confluence:search snapshot 358886935`; https://confluence.hl7.org/spaces/OO/pages/358886935/2025-09-15-19_WGM | OO WGM minutes mention deidentification/vital-signs trigger |
| Confluence | FHIR-53129 approval | `bun run confluence:search snapshot 391646682`; https://confluence.hl7.org/spaces/SEC/pages/391646682/2025-10-27+Security+WG+Agenda+Minutes | Security WG minutes approve `FHIR-53129` disposition |

## Change summary

### Page metadata and normative posture

- **Substantive/normative:** standards status changed from Informative to Normative (`secpriv-module.html:16`), after intermediate ownership/status churn.
- **Substantive/normative:** many lowercase "should"/"may" guidance statements became RFC 2119 `SHOULD`, `SHOULD NOT`, `MAY`, or `MUST`, especially in authorization, audit, privacy consent, provenance, de-identification, test-data, and exposed-link guidance.
- **Mechanical/template:** outer `<div class="col-12">` wrapper was removed by template update commit `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`.

### Authorization and access-control semantics

- **Substantive/normative:** `FHIR-34362` added "Resource Servers MUST enforce the authorization associated with the access token" and details for token verification, expiration, possible introspection/revocation checking, scope-limited results, and additional Consent/business-rule controls (`secpriv-module.html:187`; commit `2cad944e5...`).
- **Substantive/normative:** query-parameter guidance was strengthened so users with restricted rights `SHOULD NOT` receive unauthorized data, and policy `SHOULD` determine whether to error, return zero data, or remove unauthorized parameters (`secpriv-module.html:193-201`).

### User identity, SCIM, roles, and purpose of use

- **Semantic guidance:** `FHIR-33014` added explicit "no User resource in FHIR core" guidance and a SCIM link (`secpriv-module.html:225-227`; commit `bbc1a3e...`).
- **Semantic guidance:** `FHIR-27802` added that user role assignment is normally managed in the general IT system but may be influenced by FHIR resource binding, with Practitioner/PractitionerRole as examples (`secpriv-module.html:228-229`; commit `b1ab4d...`). The misspelling `PractionerRole` appears in both the Jira resolution and current source, so it is a propagated typo rather than an implementation mismatch.
- **Reference/terminology change:** PurposeOfUse moved from an old local `v3/PurposeOfUse/vs.html` link to THO (`https://terminology.hl7.org/ValueSet-v3-PurposeOfUse.html`), and role codes now point to an example value set (`valueset-security-role-type-example.html`) rather than treating the earlier role vocabulary as a standard vocabulary (`secpriv-module.html:218-223`).

### Audit, accounting of disclosures, consent, provenance, and signatures

- **Reference/link change:** AuditEvent ATNA text now links to the IHE ATNA profile (`secpriv-module.html:258`).
- **Semantic guidance:** `FHIR-27801` added audit-log purge policy guidance, tied to retention/security/privacy regulations and patient purge considerations (`secpriv-module.html:264`; commit `dedf440...`).
- **Substantive/normative:** Accounting of Disclosures and Access Report text now says patients `SHOULD` be offered a report, AuditEvents `SHOULD` include Patient/Subject where reasonable, and some records `MAY` require manipulation/deduplication (`secpriv-module.html:268-276`).
- **Semantic guidance:** privacy consent section now states policy must cover equally applicable Consent resources and notes a policy may select the most recent Consent (`secpriv-module.html:300`).
- **Substantive/normative:** use/access/disclosure recording is strengthened to `SHOULD` for AuditEvent and Disclosure recording (`secpriv-module.html:302-303`).
- **Substantive/normative:** `FHIR-53129` added a new use case about using AuditEvent to indicate authorizing Consent (`secpriv-module.html:339-350`; commits `88a964...` and `7c467...`; PR `HL7/fhir#3952`). Confluence minutes say the disposition was approved to meet a deadline and examples would be added later.
- **Section restructuring:** `FHIR-44617` removed the embedded Signature section from this module and replaced module index links with links to `signatures.html` (`secpriv-module.html:77`, `secpriv-module.html:95`; commit `9f942f...`). Jira resolution explicitly says to move module signature narrative to `signature.html` and keep only the link.

### De-identification, test data, and privacy of exposed IDs

- **Semantic guidance:** ISO/IEC 20889 definitions for Direct-Identifier, Indirect-Identifier, and Quasi-Identifier were added (`secpriv-module.html:367-375`; commit `4b5110...`).
- **Substantive/normative:** de-identification text now says modifying elements `MAY` be necessary, `isModifier` changes require care, and resulting resources `SHOULD` be security-labeled (`secpriv-module.html:377-423`).
- **Semantic guidance:** `FHIR-52902` added that de-identified data might not comply with constraints on non-de-identified data, such as VitalSigns requiring `effectiveDateTime` (`secpriv-module.html:414-417`; commit `6c88ade...`; PR `HL7/fhir#3713`).
- **Semantic guidance:** test data guidance was strengthened with `MAY` language for fabricated/synthetic/derived test data and labeling considerations (`secpriv-module.html:438-455`).
- **Semantic guidance:** a new "Risks to Privacy by Exposing Links" section warns that references to inaccessible resources still expose IDs and may enable correlation (`secpriv-module.html:459-472`; commit `19da570...` plus later normative sweep).

### Permission and additional-resource handling

- **Substantive/structural:** Permission was added to the module's resource list in commit `23fc079a...`, then commit `0e2a8a7...` removed `source/permission/**` from core and rewrote the page's Permission links to `https://build.fhir.org/ig/HL7/data-access-policies/StructureDefinition-Permission.html`.
- **Potential reader-facing issue:** the current page lists Permission under the module's "Resources" column (`secpriv-module.html:40-55`) but does not label it as an Additional Resource or work in progress. The roadmap still says future releases will "develop a Permission resource" (`secpriv-module.html:488-498`). Zulip/FM G discussion supports moving Permission out of core and treating it as an Additional Resource, while also acknowledging a perception risk that "additional" can look like "not FHIR."
- **Evidence gap:** no explicit Jira key was found in the page-touching commit metadata for the final `remove Permission` commit.

### Editorial/template/link changes

- **Editorial:** numerous e.g./comma updates are associated with `FHIR-44047`; that Jira remains `Resolved - change required`, not Published/Applied in the local snapshot.
- **Concrete defects noticed:** current source contains a missing space in `OWASP Top Ten</a>and` (`secpriv-module.html:134`) and a likely typo `_revinc` where `_revinclude` is meant (`secpriv-module.html:201`). Both are called out in the action file.

## Source history

| Commit | Date | Subject | Page-specific classification |
|---|---:|---|---|
| `4b5110aec85b16ae627e96a9bbfa7bf910c1b796` | 2020-05-22 | update for Security wg approvals April 2020 | Added de-identification terminology and ISO links; semantic guidance |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical/template wrapper removal |
| `bbc1a3ea619c6f9e147cc44aa1cd25028aeb31d2` | 2021-10-01 | Add reference to SCIM to security page | `FHIR-33014`; user/SCIM guidance |
| `2cad944e5ca0506393da673876518a3fe37040ab` | 2021-11-23 | clarify access control best practice - FHIR-34362 | Adds access-token enforcement MUST |
| `563e56f35b35b9f94193094afca019ec08e2b63c` | 2021-12-06 | FHIR-34404, FHIR-34400, FHIR-25939 | OWASP/security updates; only `FHIR-34400` directly explains the page's OWASP paragraph |
| `b4e095e9d5221a68a52e95ec700470e45e0a654b` | 2021-12-06 | typo | Edits OWASP paragraph; leaves missing space |
| `6e01cea5c6f59e1c3d2c87c9c0b80aa18a60fd73` | 2022-03-14 | security provenance | Adds policy guidance for multiple Consent resources |
| `be576f38f6687692c9b650e71018e4abc203163f` | 2022-08-10 | ownership of security pages | Page owner display change |
| `19da5709adf007d9a932f4145dc95406396a7bc0` | 2022-12-14 | set of security tickets | Adds "Risks to Privacy by Exposing Links" |
| `b1ab4dabb8bd626b70ea00d24b50e4eec9431b5f` | 2022-12-15 | FHIR-27802: User might use PractitionerRole | Adds Practitioner/PractitionerRole role-binding note |
| `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | 2023-02-24 | more qa | Editorial comma-separated wording |
| `23fc079ad9c600783827a1618e197c2745f7185f` | 2023-03-13 | add Consent R4 maps, and FHIR-39624 | Adds Permission to resource list and roadmap; `FHIR-39624` itself is DocumentReference-related and not a convincing explanation for Permission text |
| `325d79320411ce3f1676d0181ef8e6180d383ee6` | 2023-09-22 | FHIR-42757 - break-glass using OAuth | Updates PurposeOfUse link to THO; related Jira is mainly security-labels break-glass |
| `9f942f4729bcb5a897c7ca47794151db8ffd3317` | 2024-03-20 | FHIR-44617 - Update FHIR Security pages and add link to SMART HC signature | Moves signature narrative out of module |
| `dedf440792458b5aaf85c30e78e0792117c67995` | 2024-03-20 | FHIR-27801 -- explain audit log purging | Adds audit purge policy guidance |
| `6c88ade678388072ce7a2475fb2234df12d335cf` | 2025-10-08 | FHIR-52902 | Adds de-identified/profile-compliance note |
| `9fd9532e2aa26864b1fc181d1ae09d8960e228cd` | 2025-10-09 | remove extra end p | Mechanical HTML cleanup |
| `7868b938f4348f5d255225bd99de9779a7f3e54f` | 2025-10-09 | change may to might | Editorial modality tweak for non-normative "might" |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Owner label change; status remains Informative in this commit |
| `87b00c9c0de977f8559e0f99694e8664e03a06cd` | 2025-11-01 | QA fixes as directed from FMG | Broad status/RFC2119 changes; page status briefly set Normative |
| `1afa400c956b554a0829003cb8ffe4f40f3f4547` | 2025-11-02 | Merge branch 'master' into moehrke-security-qa | Merge-only page touch |
| `c9c2ca2ca9c1079a734c340702edc86d704cb897` | 2025-11-02 | security module page needs to be normative. | Final page status Normative |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Punctuation cleanup |
| `88a96446a80bf3e43352eb8aac8ddd5db8cf54ee` | 2025-11-06 | Just the changes for FHIR-53129 | Adds "Consent Used" entry/section and Provenance examples/security changes in same commit |
| `7c4677a7816f35012664a4505ac673d434d747cf` | 2025-11-06 | more detail | Extends `FHIR-53129` section with trigger/approach |
| `f54f9c6583b34814612e25297052a794a4f542e7` | 2025-11-06 | Merge branch 'master' into jct-FHIR-44047 | Merge-only page touch |
| `d8208c5adf93016caba4f9e406e34197bfe1a0d4` | 2025-11-06 | yet more examples changes | Role vocabulary link changed to examples page |
| `7231f4c27ab62fe032fd52c0e233c6955da6f295` | 2025-11-06 | -example not -examples | Corrects role vocabulary example link and label |
| `0e2a8a7f839d5e1a43787523daccf07d958362f3` | 2025-11-24 | remove Permission | Removes core Permission source and changes module links to data-access-policies IG |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-34362` (`Published`, `Persuasive with Modification`, Security WG, R5): exact resolution text matches current access-token enforcement wording closely. The current page uses the resolved phrase "authorization associated with the access token" and "scopes authorized by the access token."
- `FHIR-34400` (`Published`, `Persuasive with Modification`): explains the OWASP paragraph and direct replacement of the old mobile-specific OWASP link. The resolution text itself contains awkward punctuation; the current source preserved a reader-facing missing-space defect.
- `FHIR-34404` (`Published`, `Persuasive with Modification`): vulnerability-reporting guidance, mostly for security checklist rather than this page. Context-only for this page.
- `FHIR-25939` (`Published`, `Persuasive with Modification`): security category summary page request; not a direct driver for the current `secpriv-module.html` diff beyond being in a combined security-ticket commit.
- `FHIR-33014` (`Published`, `Persuasive with Modification`): adds SCIM/no-FHIR-User guidance for the `#user` section.
- `FHIR-27802` (`Published`, `Persuasive with Modification`): adds Practitioner/PractitionerRole note. The typo `PractionerRole` is present in the Jira resolution text and source.
- `FHIR-39624` (`Published`, `Persuasive`, OO/DocumentReference): unrelated to the visible Permission changes in this page; likely included in a broader commit subject and should not be treated as rationale for module changes.
- `FHIR-42757` (`Applied`, `Persuasive`): break-glass OAuth guidance for `security-labels`; the page diff only shows the PurposeOfUse link update, so this is weak/contextual for this page.
- `FHIR-44617` (`Applied`, `Persuasive with Modification`): resolution explicitly says to add SMART Health Cards signature text to `signatures.html` and move `secpriv-module.html` signature narrative there, keeping only the link. Current page implementation matches.
- `FHIR-27801` (`Applied`, `Persuasive with Modification`): resolution says there should be a policy regarding purging data in alignment with regulations. Current page implementation matches.
- `FHIR-52902` (`Applied`, `Persuasive`): resolution says "make change as proposed" for the de-identified data/profile constraint note. Current page implementation matches, with later `may` -> `might` edit.
- `FHIR-44047` (`Resolved - change required`, not done): broad punctuation cleanup. The page had punctuation edits, but the Jira remains not Applied/Published in the snapshot.
- `FHIR-53129` (`Applied`, `Persuasive`, Security WG, R6): asks to mention AuditEvent/Provenance for access-control decisions based on Consent; related artifacts include AuditEvent, Provenance, Consent, Permission. Current page gained a section, and the commit also touched `security.html` and Provenance examples.

### Other Jira searches

- `bun run jira:search fts '"Permission" "secpriv-module"' --limit 20` returned `FHIR-27786` (multiple Consent/Permission/Contract policy), `FHIR-31693` (CARIN BB), and `FHIR-27164` (identity binding). These were context-only; none directly explained the current Permission external-link treatment.
- `bun run jira:search fts '"Security and Privacy Module" Permission' --limit 20` returned `FHIR-27802` and a CARIN BB issue, again not a direct Permission removal rationale.
- Exact phrase searches for the access-token and OWASP wording correctly returned `FHIR-34362` and `FHIR-34400`, respectively.

### Context-only Jira hits that should not drive action

- `FHIR-39624` should not be used to explain Permission/resource-list changes.
- `FHIR-34404`, `FHIR-25939`, and `FHIR-42757` are useful security-work context but do not, by themselves, establish a page-specific issue in `secpriv-module.html`.

## Zulip evidence

- `#implementers > use Practitioner for Security` (snapshot command above) directly precedes `FHIR-27802`. Lloyd McKenzie says notions of "user", "user role", "permission", etc. are managed outside FHIR because they are not healthcare-specific. John Moehrke then says he filed `FHIR-27802`.
- `#Security and Privacy > Security Jira Tasks` records Grahame Grieve filing `FHIR-34400` and John Moehrke asking whether the goal is to give visibility to security defensive design tools like OWASP. Grahame confirms he wants security taken seriously and wants at least OWASP referenced.
- `#Security and Privacy > WITM` provides background for the OWASP emphasis: discussion of real FHIR API security vulnerabilities, OWASP top ten, and whether FHIR should rely on OWASP tooling rather than inventing its own.
- `#Security and Privacy > well-known security.txt` explains `FHIR-34404`: the group discussed vulnerability reporting and later agreed to mention the need for vulnerability reporting while stopping short of naming `security.txt` specifically.
- `#Security and Privacy > Permission use-case analysis` shows Permission use-case work was originally intended to enhance Permission within FHIR core for R6, using the `HL7/data-access-policies` IG platform.
- `#fmg > Assessment of Resources for removal from R6` records Security WG agreement on 2025-08-25 that Permission should move out of core into the `HL7/data-access-policies` sandbox/formal IG. The draft FMG message also says resources moved out can still be referred to from narrative as "work in progress."
- `#Security and Privacy > Permission as additional resource` records later concern that Consent in core and Permission as additional could confuse implementers. Lloyd McKenzie says Consent can explicitly link to Permission; John Moehrke says additional resources are still legitimate resources, while Jose Costa Teixeira emphasizes the need for clear Consent/Permission boundary guidance.

## Confluence evidence

- `2021-11-22 Security Meeting Agenda & Minutes` (page `81006065`) records Security WG discussion and vote for `FHIR-34362`.
- `2021-12-6 Security Meeting Agenda & Minutes` (page `81010536`) records Security WG voting and text updates for OWASP (`FHIR-34400`) and vulnerability reporting (`FHIR-34404`).
- `2025-09-15-19_WGM` (OO page `358886935`) records the VitalSigns/de-identification discussion that triggered `FHIR-52902`.
- `2025-10-27 Security WG Agenda/Minutes` (page `391646682`) records approval of `FHIR-53129` disposition, says it would be incorporated into the FHIR Security Module section on Access Control, and notes examples would be added later.
- Confluence searches for Permission/security-module terms returned older Security agendas repeatedly describing Permission as prototyped/in-process for use-case submission and analysis. The strongest current Permission-removal evidence came from Zulip/FM G discussion and commit `0e2a8a7...`, not Confluence.

## Timeline

| Date | Kind | Evidence | Notes |
|---:|---|---|---|
| 2020-05-22 | Source commit | `4b5110aec85b16ae627e96a9bbfa7bf910c1b796` | Adds de-identification terminology and standards links |
| 2020-06-09/10 | Zulip discussion | `#implementers > use Practitioner for Security` | Origin for user/Practitioner/role FAQ |
| 2020-06-10 | Jira created | `FHIR-27802` | User vs Practitioner FAQ |
| 2021-07-06 | Jira created | `FHIR-33014` | SCIM/no User resource guidance |
| 2021-09-13 | Jira vote | `FHIR-33014` | Security WG vote 8-0-1 |
| 2021-10-25 to 2021-12-07 | Zulip discussion | `#Security and Privacy > well-known security.txt` | Vulnerability reporting / OWASP context |
| 2021-11-22 | Jira resolved/voted | `FHIR-34362`; Confluence page `81006065` | Access-token enforcement text approved |
| 2021-11-23 | Source commit | `2cad944e5ca0506393da673876518a3fe37040ab` | Adds access-token enforcement to this page |
| 2021-12-01 | Zulip discussion/Jira | `#Security and Privacy > Security Jira Tasks`; `FHIR-34400` | OWASP emphasis discussed/filed |
| 2021-12-06 | Jira vote/source commit | `FHIR-34400`, `FHIR-34404`, `FHIR-25939`; commit `563e56...` | OWASP paragraph added; some context-only keys |
| 2022-11-21/2022-12-05 | Jira resolved/voted | `FHIR-27802` | User/PractitionerRole note approved |
| 2022-12-15 | Source commit | `b1ab4dabb8bd626b70ea00d24b50e4eec9431b5f` | Adds PractitionerRole note |
| 2023-03-13 | Source commit | `23fc079ad9c600783827a1618e197c2745f7185f` | Adds Permission to module index/roadmap; no strong Permission-specific Jira found |
| 2024-02-01 | Jira vote | `FHIR-44617`, `FHIR-27801` | Signature move and audit purge guidance approved |
| 2024-03-20 | Source commits | `9f942f...`, `dedf440...` | Signature module removal and audit purge text |
| 2025-08-25 | Zulip/FM G | `#fmg > Assessment of Resources for removal from R6` | Security WG agrees Permission should move out of core |
| 2025-09-18 | Jira vote | `FHIR-52902` | De-identification/profile note approved |
| 2025-10-08/09 | Source commits | `6c88ade...`, `9fd953...`, `7868b...` | Adds and cleans up `FHIR-52902` text |
| 2025-10-24 to 2025-10-28 | Zulip discussion | `#Security and Privacy > Permission as additional resource` | Consent/Permission boundary and additional-resource concern discussed |
| 2025-10-27 | Jira vote/Confluence | `FHIR-53129`; page `391646682` | Security WG approves disposition |
| 2025-11-01/02 | Source commits | `87b00c...`, `c9c2ca...` | FMG QA/R6 normative changes; page marked Normative |
| 2025-11-06 | Source commits | `88a964...`, `7c467...` | Adds authorizing Consent AuditEvent section |
| 2025-11-24 | Source commit | `0e2a8a7f839d5e1a43787523daccf07d958362f3` | Removes Permission core source and changes this page's Permission links to data-access-policies IG |

## Evidence log

- Confirmed both page files exist with `test -f` commands from the prompt.
- Captured direct diff: `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/secpriv-module.html`.
- Captured page history: `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/secpriv-module.html`.
- Inspected likely meaningful commits with `git show --stat --patch` filtered to `source/secpriv-module.html`; inspected selected full-commit file lists for `FHIR-53129`, `FHIR-52902`, `FHIR-44617`, `FHIR-27801`, and Permission removal.
- Read the full current page using line-numbered chunks; `wc -l` reported 503 lines.
- Searched current/old source for `OWASP Top Ten</a>and`, `_revinc`, `PractionerRole`, and related typo candidates.
- Searched current source tree for Permission/additional-resource references. `source/permission/**` is absent in the current tree; `source/resourcelist.html` has no Permission match, while `secpriv-module.html` still links to the external Permission IG.
- Snapshot explicit Jira keys with `bun run jira:search snapshot <KEY>`.
- Jira phrase searches included:
  - `bun run jira:search fts '"Permission" "secpriv-module"' --limit 20`
  - `bun run jira:search fts '"Security and Privacy Module" Permission' --limit 20`
  - `bun run jira:search fts '"Resource Servers MUST enforce the authorization associated with the access token"' --limit 20`
  - `bun run jira:search fts '"OWASP Top Ten" "OWASP mobile top 10"' --limit 20`
- Zulip key searches were first attempted unquoted and failed due FTS hyphen parsing (`no such column` errors); reran as `bun run zulip:search fts '"FHIR-XXXXX"' --limit 20`.
- Zulip snapshots captured:
  - `bun run zulip:search snapshot implementers "use Practitioner for Security"`
  - `bun run zulip:search snapshot "Security and Privacy" "Security Jira Tasks"`
  - `bun run zulip:search snapshot "Security and Privacy" "well-known security.txt"`
  - `bun run zulip:search snapshot "Security and Privacy" "WITM"`
  - `bun run zulip:search snapshot "Security and Privacy" "Permission use-case analysis"`
  - `bun run zulip:search snapshot "Security and Privacy" "Permission as additional resource"`
  - `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`
- Confluence searches used `bun run confluence:search refs jira <KEY>`, `bun run confluence:search fts <KEY> --limit 10`, and phrase searches for Permission/OWASP. Snapshots captured pages `81010536`, `81006065`, `79497364`, `358886935`, `391645164`, `391646682`, and `391651119`.
