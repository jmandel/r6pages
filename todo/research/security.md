# security research appendix

## Scope and coverage

- Page path: `source/security.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: `source/security.html` exists in both trees. The page is modified in place, not added/deleted/renamed.
- Current R6 ballot4 source was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:1-441`.
- Direct diff: 144 changed lines, 77 insertions, 67 deletions.
- Source history count: 25 commits touched this file between the two commits; 11 explicit page/history Jira keys were found in commit subjects or patches: `FHIR-25287`, `FHIR-23714`, `FHIR-23703`, `FHIR-34362`, `FHIR-34404`, `FHIR-34400`, `FHIR-25939`, `FHIR-14081`, `FHIR-20533`, `FHIR-44047`, `FHIR-53129`.
- Additional Jira keys found by changed-phrase and PR searches: `FHIR-20365`, `FHIR-53717`, `FHIR-53719`, `FHIR-53923`, `FHIR-54173`, `FHIR-56089`, `FHIR-53381`, `FHIR-55889`.
- Jira, Zulip, and Confluence were searched for explicit keys and distinctive changed phrases. Initial Zulip FTS key searches failed because hyphenated keys were parsed as FTS operators; key searches were rerun with SQL `LIKE`.
- Important caveat: the review is of the R6 ballot4 source tree only. Several later Jira issues are already marked Applied and bundled in PR 4066 after ballot4; those later decisions are used as evidence that ballot4 text should not be treated as final.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:1-441` | Current page reviewed end-to-end. |
| Source | Summary checklist and missing anchors | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:24-39` | Contains `#input` and `#oauth` links; no matching anchors exist. |
| Source | Normative/FHIR-forward-looking wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:28-35` | Later Jira issues objected to the `FHIR MAY...` and `MAY be appropriate/legal` wording. |
| Source | UDAP SHOULD text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:219-221` | Later Jira `FHIR-53719` says this SHOULD-level recommendation is premature. |
| Source | Access-control deny SHALL | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:298-299` | Later Jira `FHIR-53381` says the SHALL is too strong and should become SHOULD. |
| Source | Malformed Cascaded Authorization links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:326` | Two Confluence attachment links appear incorrectly URL-encoded. |
| Source | BALP typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:370` | Reader-facing typo: `Accounting of Disclousures`. |
| Commit | SMART link update | `d97f7c47d60f0ab0abb1a0b1bb3802d791a841e8`, https://github.com/HL7/fhir/commit/d97f7c47d60f0ab0abb1a0b1bb3802d791a841e8 | Page patch implements the `FHIR-23714` SMART link update. |
| Commit | Access-control checklist | `2cad944e5ca0506393da673876518a3fe37040ab`, https://github.com/HL7/fhir/commit/2cad944e5ca0506393da673876518a3fe37040ab | Adds token expiration/scope and OAuth BCP checklist item for `FHIR-34362`. |
| Commit | Security category/event reporting | `563e56f35b35b9f94193094afca019ec08e2b63c`, https://github.com/HL7/fhir/commit/563e56f35b35b9f94193094afca019ec08e2b63c | Implements security category/resource page pointer and event reporting checklist text. |
| Commit | GForge link replacement | `c1269d57380bacb3d93666b626606e85aa7e4af0`, https://github.com/HL7/fhir/commit/c1269d57380bacb3d93666b626606e85aa7e4af0 | Starts replacing old GForge report links with Confluence links for `FHIR-14081`. |
| Commit | Link encoding follow-up | `6712046fe2ed7241fb52f417642ab09f1527753e`, https://github.com/HL7/fhir/commit/6712046fe2ed7241fb52f417642ab09f1527753e | Introduced the current malformed Cascaded/Privacy report URLs. |
| Commit | Narrative/security guidance update | `d1f7d33e605f6a0d70e8e666a67f0deb747f6488`, https://github.com/HL7/fhir/commit/d1f7d33e605f6a0d70e8e666a67f0deb747f6488 | Adds UDAP, consent/OAuth, IHE BALP, and IUA/HIE wording; no explicit Jira in commit subject. |
| Commit | R6 normative keyword pass | `87b00c9c0de977f8559e0f99694e8664e03a06cd`, https://github.com/HL7/fhir/commit/87b00c9c0de977f8559e0f99694e8664e03a06cd | Uppercases many `may/should/shall` terms and changes status/FMM metadata. |
| Commit | FHIR-53129 | `88a96446a80bf3e43352eb8aac8ddd5db8cf54ee`, https://github.com/HL7/fhir/commit/88a96446a80bf3e43352eb8aac8ddd5db8cf54ee | Adds AuditEvent/Consent access-control decision bullets. |
| PR | FHIR-53129 PR | https://github.com/HL7/fhir/pull/3952 | Merged 2025-11-06; body says it explains AuditEvent/Provenance for Consent-permitted/denied activity. |
| PR | Later Security WG updates | https://github.com/HL7/fhir/pull/4066 | Merged 2026-04-29; includes `FHIR-56089`, `FHIR-53923`, `FHIR-53717`, `FHIR-53719`, and other security updates after ballot4. |
| Jira | Missing anchors | `bun run jira:search snapshot FHIR-56089`; https://jira.hl7.org/browse/FHIR-56089 | Confirms `Input Validation` and `When using OAuth` links do not go anywhere; resolution removes hyperlinks. |
| Jira | Normative verb re-evaluation | `bun run jira:search snapshot FHIR-53923`; https://jira.hl7.org/browse/FHIR-53923 | Calls out mechanical `may` -> `MAY` conversion on this page; resolution changes the specific line. |
| Jira | Forward-looking FHIR resources | `bun run jira:search snapshot FHIR-53717`; https://jira.hl7.org/browse/FHIR-53717 | Says the page should remove `FHIR MAY also define...` as inappropriate on a normative page. |
| Jira | UDAP SHOULD too strong | `bun run jira:search snapshot FHIR-53719`; https://jira.hl7.org/browse/FHIR-53719 | Says UDAP/Tiered OAuth SHOULD text is premature; PR 4066 applies later change. |
| Jira | Access deny SHALL too strong | `bun run jira:search snapshot FHIR-53381`; https://jira.hl7.org/browse/FHIR-53381 | Says mandatory deny logging would overstate FHIR conformance; resolution says change SHALL to SHOULD. |
| Jira | FHIR-53129 | `bun run jira:search snapshot FHIR-53129`; https://jira.hl7.org/browse/FHIR-53129 | Source for the Access Control Decision AuditEvent/Consent bullets. |
| Zulip | Vulnerability reporting thread | `bun run zulip:search snapshot "Security and Privacy" "well-known security.txt"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/well-known%20security.txt | Explains why the page got a general security/privacy event reporting checklist item rather than a specific `security.txt` recommendation. |
| Zulip | OWASP/security page thread | `bun run zulip:search snapshot "Security and Privacy" "Security Jira Tasks"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/Security%20Jira%20Tasks | Discusses `FHIR-34400` and whether OWASP belongs on `security.html`; resolution landed on `secpriv-module.html`, not this page. |
| Confluence | 2021-11-22 Security minutes | `bun run confluence:search snapshot 81006065`; https://confluence.hl7.org/spaces/SEC/pages/81006065/2021-11-22+Security+Meeting+Agenda+Minutes | Records `FHIR-34362` motion/vote and proposed token expiration/scope text. |
| Confluence | 2021-12-06 Security minutes | `bun run confluence:search snapshot 81010536`; https://confluence.hl7.org/spaces/SEC/pages/81010536/2021-12-6+Security+Meeting+Agenda+Minutes | Records votes for `FHIR-25939`, `FHIR-34404`, and `FHIR-34400`. |
| Confluence | VHA papers page | `bun run confluence:search snapshot 66931686`; https://confluence.hl7.org/spaces/SEC/pages/66931686/Veterans+Health+Administration+Sponsored+Security+and+Privacy+Papers | Target page for the UMA/Cascaded/Privacy report links. |
| Confluence | 2025-10-27 Security minutes | `bun run confluence:search snapshot 391646682`; https://confluence.hl7.org/spaces/SEC/pages/391646682/2025-10-27+Security+WG+Agenda+Minutes | Records approval of `FHIR-53129` disposition. |
| Confluence | 2026-03-30 Security minutes | `bun run confluence:search snapshot 441519513`; https://confluence.hl7.org/spaces/SEC/pages/441519513/2026-03-30+Security+WG+Agenda+Minutes | Later block vote evidence for `FHIR-56089`, `FHIR-53923`, `FHIR-53717`, `FHIR-53719`; also shows `FHIR-53381` was pulled/contested. |

## Change summary

### Page metadata and maturity/status

- **Substantive/normative metadata:** The header changes from FHIR Infrastructure WG / Maturity Level 4 / Trial Use to Security WG owner / Normative. The final source has no FMM cell and uses `colsi`: `/source/security.html:16`.
- **Mechanical/template:** The old wrapper `<div class="col-12">` was removed by the 2021 template update.

### Summary checklist

- **Semantic guidance:** SMART link updated from old SMART docs to the HL7 SMART App Launch IG (`FHIR-23714`).
- **Semantic guidance:** Added OAuth BCP checklist item (`FHIR-34362`), vulnerability/security event reporting checklist item (`FHIR-34404`), and stronger styling/periods for data management policy.
- **Normative keyword change:** Many checklist items were uppercased from `should/may` to `SHOULD/MAY` during the R6 normative pass. Later `FHIR-53923` and `FHIR-53717` object to at least some of this wording.
- **Rendering defect:** `#input` and `#oauth` checklist links have no corresponding anchors in the R6 ballot4 file; later `FHIR-56089` confirms this.

### Security and Privacy Considerations

- **Semantic guidance:** Added a sentence pointing readers to the Resource Types page Security Category tab (`FHIR-25939`).
- **Editorial/terminology:** `common` changed to `dominant`; `Not classified` changed to `No Dominant Category`.
- **Semantic correction:** Individual Sensitive examples narrowed from `Practitioners, PractitionerRole, CareTeam, or other users` to `Practitioners and PractitionerRole` (`FHIR-20533`).
- **Later reassessment:** `FHIR-54173` says the publication label "Not Classified" gives the wrong impression, but concludes the extension-pack display should address it; this is context, not a direct ballot4 `security.html` action.

### Communications

- **Semantic guidance change:** The explicit TLS 1.2/lower-TLS/strong-cipher-suite sentences were removed, leaving a shorter pointer to BCP 195.
- **Normative keyword change:** Client authentication, CORS risk, and other descriptive statements were converted to uppercase `MAY/SHOULD`.

### Authentication and access control

- **Substantive/semantic guidance:** The Authentication section changed from "Other than testing systems..." to an exception for provider directories/test sandboxes and added UDAP Consumer-Facing/B2B/Registration/Discovery/Tiered OAuth SHOULD recommendations.
- **Later reassessment:** `FHIR-53719` says the UDAP/Tiered OAuth SHOULD language is premature and was later applied in PR 4066.
- **Semantic guidance:** Token expiration and token scope were added to the list of data sources for access-control decisions (`FHIR-34362`).
- **Substantive/normative:** New Access Control Considerations bullets require/encourage AuditEvent recording of access-control decisions and Consent evidence (`FHIR-53129`).
- **Later reassessment:** `FHIR-53381` says `Any Access Control decision to deny an activity SHALL be recorded` is too strong for all FHIR implementations and should be SHOULD.

### Approaches to Implementing Access Control

- **Semantic guidance:** Consent/OAuth/UMA text was reorganized; IHE IUA was updated to current `profiles.ihe.net` links and expanded to mention HIE whitepaper guidance.
- **Semantic guidance:** UDAP B2B Authorization Extension Object text added.
- **References/links:** Old GForge report URLs were replaced with Confluence links for `FHIR-14081`, but two final links on line 326 appear malformed after follow-up URL encoding commits.

### Audit, attachments, narrative, stylesheets

- **Semantic guidance:** IHE BALP paragraph added to Audit Logging, with current link.
- **Editorial/terminology:** First PHI expansion added as `(Personal health information)`.
- **Normative keyword change:** Attachment/narrative/stylesheet precautions changed to uppercase `SHOULD/MAY`.
- **Editorial:** BALP paragraph contains `Accounting of Disclousures`, a typo in the current R6 ballot4 source.

## Source history

| Commit | Date | Subject | Page-specific assessment |
|---|---:|---|---|
| `d97f7c47d60f0ab0abb1a0b1bb3802d791a841e8` | 2020-04-08 | Security WG changes for J#25287, J#23714, and J#23703 | Page patch updates SMART link; page-specific Jira is `FHIR-23714`. Other keys are context from the same commit. |
| `9991aeb25ebef43a8f4db3fb6a1c988356ba33bf` | 2020-04-30 | fix typo | Corrects `PractionerRole` typo. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical wrapper removal. |
| `2cad944e5ca0506393da673876518a3fe37040ab` | 2021-11-23 | clarify access control best practice - FHIR-34362 | Adds `#input`, OAuth BCP checklist item, and token expiration/scope access-control factors. |
| `563e56f35b35b9f94193094afca019ec08e2b63c` | 2021-12-06 | FHIR-34404, FHIR-34400, FHIR-25939 | Adds event reporting and security category navigation text. `FHIR-34400` OWASP resolution is mainly on `secpriv-module.html`. |
| `c1269d57380bacb3d93666b626606e85aa7e4af0` | 2022-01-06 | Close FHIR-14081 - change gforge links to confluence equiv | Replaces old report links with Confluence equivalents. |
| `bef66cb8437b636c1c08744188fd922e35632e7d` | 2022-01-06 | fixup links | Follow-up Confluence link encoding. |
| `6712046fe2ed7241fb52f417642ab09f1527753e` | 2022-01-06 | more url encoding issues | Follow-up encoding left malformed links in the final R6 ballot4 file. |
| `2c7d674ebe5bfdd04b2239cbb6d5990931b20aad` | 2022-02-28 | Feb 27 security updates | Removes detailed TLS 1.2/lower-version/cipher-suite text, leaving BCP 195 pointer. |
| `fc1c850e10045b56e0318c993b61a26f5c8ab04b` | 2022-03-10 | change IHE mentions of the wiki to profiles.ihe.net where appropriate | Updates IHE IUA and ATNA links. |
| `be576f38f6687692c9b650e71018e4abc203163f` | 2022-08-10 | ownership of security pages | Changes owning WG token from `fhir` to `sec`. |
| `784790d4b9354cad9b3f254937b8091beae9ab89` | 2022-08-27 | FHIR-20533 Security Category - Individual resource list | Aligns Individual Sensitive text with Practitioner/PractitionerRole list. |
| `19da5709adf007d9a932f4145dc95406396a7bc0` | 2022-12-14 | set of security tickets | Changes `common` to `dominant` and heading to `No Dominant Category`. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Mostly punctuation/QA; briefly introduced `etc..` errors. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | more QA | Reverts the `etc..` QA regressions. |
| `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | 2023-02-24 | more QA | Changes `behaviour` to `behavior`. |
| `d1f7d33e605f6a0d70e8e666a67f0deb747f6488` | 2023-03-20 | improve narrative on the security.html page | Major semantic expansion: SMART naming, authentication rewrite, UDAP SHOULD text, consent/OAuth reorganization, IHE BALP paragraph, IHE IUA/HIE text, UDAP B2B text. |
| `18ee4ae74a788598a0107a449bed927d13e95fe8` | 2024-09-11 | Add definition for PHI first time it is used in a page. | Adds `(Personal health information)` after PHI. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Header metadata change from `colstu` to `colsi`/owner form; later superseded by merge/QA. |
| `87b00c9c0de977f8559e0f99694e8664e03a06cd` | 2025-11-01 | QA fixes as directed from FMG | Large normative-keyword pass and FMM/status change; later `FHIR-53923`, `FHIR-53717`, and `FHIR-53719` object to specific consequences. |
| `1afa400c956b554a0829003cb8ffe4f40f3f4547` | 2025-11-02 | Merge branch 'master' into moehrke-security-qa | Merge commit touching history but no page patch shown. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Mechanical `e.g.,` punctuation fixes. |
| `88a96446a80bf3e43352eb8aac8ddd5db8cf54ee` | 2025-11-06 | Just the changes for FHIR-53129 | Adds AuditEvent/Consent access-control decision bullets. |
| `f54f9c6583b34814612e25297052a794a4f542e7` | 2025-11-06 | Merge branch 'master' into jct-FHIR-44047 | Merge commit touching history but no page patch shown. |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | sort out trial-use notes | Final header status change to Normative. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-23714` (Published, Persuasive, R5): specifically requested changing the bullet 3 SMART link from `docs.smarthealthit.org` to the HL7 SMART App Launch page. This matches commit `d97f7c47...`.
- `FHIR-25287` and `FHIR-23703`: present in the same commit subject as `J#25287` and `J#23703`, but their snapshots concern AuditEvent outcome and security-label value sets, not the `source/security.html` page patch.
- `FHIR-34362` (Published, Persuasive with Modification): intended to add token expiration/token scope as access-control factors and add an OAuth BCP checklist item. The applied page matches the core intent, but the later missing-anchor issue shows the checklist `#oauth` link was not backed by an anchor.
- `FHIR-34404` (Published, Persuasive with Modification): proposed vulnerability/security reporting guidance. Jira resolution says to add a checklist item; Zulip shows the WG deliberately avoided naming `security.txt`.
- `FHIR-34400` (Published, Persuasive with Modification): requested OWASP emphasis. Jira resolution points to `secpriv-module.html#security`; current `security.html` has no OWASP text, while current `secpriv-module.html` does. This is context-only for this page unless the page owner wants `security.html` to mirror `secpriv-module`.
- `FHIR-25939` (Published, Persuasive with Modification): says the security page should add narrative pointing to the Resource Types page Security Category tab. Applied at current lines 117-123.
- `FHIR-14081` (Published, Persuasive): broader bad-link issue; comments say the remaining GForge link was in Security pages and the `security.html` change was applied on 2022-01-06. The current page has two malformed Confluence preview URLs remaining from follow-up encoding commits.
- `FHIR-20533` (Published, Persuasive): asked that Individual Sensitive examples match the resource index. Applied at lines 154-155.
- `FHIR-44047` (Resolved - change required in local snapshot, Persuasive): generic e.g./i.e. punctuation cleanup, applied mechanically in this page by `887bc238...`.
- `FHIR-53129` (Applied, Persuasive): asks the security page to mention the AuditEvent consent authorization example and recording access-control decisions. Applied by PR 3952 and commit `88a96446...`.

### Other Jira issues that explain changed text or later reassessment

- `FHIR-20365` (Published): original R5-era issue adding consent-based OAuth/UMA and Cascaded Authorization text to `security.html`. This explains the older content whose links were later moved from GForge to Confluence.
- `FHIR-56089` (Applied): directly confirms the `Input Validation` and `When using OAuth` links do not go anywhere and resolves to remove the hyperlinks. It was applied in PR 4066 after R6 ballot4.
- `FHIR-53923` (Applied): directly criticizes a mechanical `may` -> `MAY` conversion on the R4-to-R6 security page diff. Resolution changes `Not all the capabilities that FHIR enables MAY be appropriate or legal...` to use `are`.
- `FHIR-53717` (Applied): says the forward-looking sentence `FHIR MAY also define a set of resources to administer access control management...` is inappropriate now that the page is normative and should be removed.
- `FHIR-53719` (Applied): says the UDAP Consumer-Facing/B2B/Tiered OAuth SHOULD text is premature and too strong for the base spec; requests UDAP dynamic registration be moved to MAY and Tiered OAuth mention removed.
- `FHIR-53381` (Triaged, Resolution field Persuasive): says `Any Access Control decision to deny an activity SHALL be recorded` is too strong for all FHIR implementations; resolution says to change SHALL to SHOULD. Confluence 2026-03-30 minutes show it was pulled/contested from the block vote with a prior Not Persuasive note, while later Jira comments record agreement to change to SHOULD.
- `FHIR-54173` (Applied): later issue around "Not Classified"/"No Dominant Category" display. It explains related terminology but does not require a direct `security.html` change beyond the existing heading.
- `FHIR-55889` (Applied): found by the BALP phrase search; relevant to AuditEvent/BALP usage generally, but not a direct `security.html` page finding.

### Context-only Jira hits that should not drive action

- `FHIR-42653`, `FHIR-40355`, `FHIR-51562`, `FHIR-55837`, and other IG/resource issues appeared in changed-phrase searches but concern other specifications or resources and were not used as evidence for this page.

## Zulip evidence

- `Security and Privacy > well-known security.txt` (`bun run zulip:search snapshot "Security and Privacy" "well-known security.txt"`): John Moehrke raised whether FHIR should encourage `/.well-known/security.txt`; Grahame noted `security.html` lacked OWASP; the WG later agreed to general vulnerability/event reporting language and "stopped short of naming specifics like security.txt." This supports `FHIR-34404` and the current checklist item at line 39.
- `Security and Privacy > Security Jira Tasks` (`bun run zulip:search snapshot "Security and Privacy" "Security Jira Tasks"`): discussion of `FHIR-34400`; Grahame wanted the page found by "FHIR security" to reference OWASP, John questioned the wording, and the Jira resolution ultimately targeted `secpriv-module.html`.
- `Security and Privacy > AuditEvent.outcomeDesc` (`bun run zulip:search snapshot "Security and Privacy" "AuditEvent.outcomeDesc"`): explains `FHIR-25287`, but that issue is not a meaningful `security.html` page-change cause.
- SQL key searches found no Zulip hits for `FHIR-23714`, `FHIR-23703`, `FHIR-34362`, `FHIR-25939`, `FHIR-14081`, `FHIR-20533`, `FHIR-44047`, `FHIR-53129`, `FHIR-56089`, `FHIR-53923`, `FHIR-53717`, `FHIR-53719`, or `FHIR-53381`.

## Confluence evidence

- `2020-04-13 FHIR-Security Meeting Agenda` (`snapshot 80121490`) records Jira items applied to FHIR core build: `FHIR-25287`, `FHIR-23714`, and `FHIR-23703`.
- `2021-11-22 Security Meeting Agenda & Minutes` (`snapshot 81006065`) records John walking through proposed FHIR Core Security and Privacy Module amendments and transferring changes to `FHIR-34362`; Dave/Julie moved/seconded, vote 12-0-0.
- `2021-12-6 Security Meeting Agenda & Minutes` (`snapshot 81010536`) records:
  - `FHIR-25939`: add directions from Security and Privacy Considerations to the Resource page Security Category tab, vote 9-0-0.
  - `FHIR-34404`: discuss vulnerability reporting and add the general Security/Privacy Event Reporting checklist item, vote 11-0-0.
  - `FHIR-34400`: discuss OWASP implementation issue wording.
- `Veterans Health Administration Sponsored Security and Privacy Papers` (`snapshot 66931686`) is the Confluence page hosting the reports linked from the UMA/Cascaded Authorization section. The current source line 326 points to this page but with malformed `preview=` parameters for two attachments.
- `2025-10-13 Security WG Agenda/Minutes` (`snapshot 391645164`) records agreement to create a Jira ticket to explain that access-control decisions should be recorded/memorialized by AuditEvent and/or Provenance.
- `2025-10-27 Security WG Agenda/Minutes` (`snapshot 391646682`) records approval of `FHIR-53129` disposition in order to meet deadline, vote 6-0-0.
- `2025-11-10 Security WG Agenda/Minutes` (`snapshot 391651119`) records that during the October 27 call the WG approved `FHIR-53129`, examples may be referred to by FAST IG, and Patient Care agreed with Security's ticket.
- `2026-03-30 Security WG Agenda & Minutes` (`snapshot 441519513`) provides later evidence for ballot4 follow-up issues: `FHIR-56089`, `FHIR-53923`, `FHIR-53717`, and `FHIR-53719` in Block-Vote-1; `FHIR-53381` is shown as pulled/contested with prior Not Persuasive text.

## Timeline

| Date | Event |
|---:|---|
| 2019-02-19 | `FHIR-20365` vote adds consent-based OAuth/UMA and Cascaded Authorization material. |
| 2020-01-13 | `FHIR-23714` resolved/voted; SMART link update approved. |
| 2020-04-08 | Commit `d97f7c47...` updates the SMART link in `security.html`. |
| 2021-11-22 | Security WG minutes record `FHIR-34362` motion/vote 12-0-0. |
| 2021-11-23 | Commit `2cad944e...` applies `FHIR-34362` page changes. |
| 2021-12-06 | Security WG minutes record votes for `FHIR-25939`, `FHIR-34404`, and `FHIR-34400`. |
| 2021-12-06 | Commit `563e56f...` applies security category and event reporting checklist changes. |
| 2022-01-06 | Commits `c1269d5...`, `bef66cb...`, `6712046...` replace and then re-encode old report links. |
| 2022-08-27 | Commit `784790d...` applies `FHIR-20533` Individual Sensitive text correction. |
| 2023-03-20 | Commit `d1f7d33...` performs a broad narrative/security guidance update including UDAP, IHE, BALP, consent/OAuth text. |
| 2025-10-27 | Security WG approves `FHIR-53129` disposition. |
| 2025-11-01 | Commit `87b00c9...` makes the large R6 normative-keyword pass. |
| 2025-11-06 | PR 3952 merges; commit `88a9644...` adds AuditEvent/Consent access-control decision bullets. |
| 2025-11-12 | Commit `7466cfc...` finalizes Normative status in the page header. |
| 2025-12-22 | `FHIR-53717` and `FHIR-53719` are created against R6 ballot4 wording. |
| 2026-01-09 | `FHIR-53923` is created against the mechanical normative-verb conversion. |
| 2026-03-16 | `FHIR-56089` is created for missing anchors. |
| 2026-03-30 | Security WG block-vote minutes record later decisions for `FHIR-56089`, `FHIR-53923`, `FHIR-53717`, `FHIR-53719`; `FHIR-53381` remains contested/pulled. |
| 2026-04-29 | PR 4066 merges, applying multiple later Security WG updates after the R6 ballot4 source reviewed here. |

## Evidence log

- Page boundary:
  - `test -f "$OLD_TREE/source/security.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/security.html" && echo "new exists"`
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- "source/security.html"`
  - Saved as `.copilot/session-state/07f5365d-1048-4239-979d-4701d845876b/files/security.diff`.
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- "source/security.html"`
  - Per-commit patches saved as `.copilot/session-state/07f5365d-1048-4239-979d-4701d845876b/files/security-history.patch`.
- Full current page read:
  - `wc -l "$NEW_TREE/source/security.html"` returned 441 lines.
  - `source/security.html:1-441` read via file view.
- Anchor check:
  - `rg -n 'name="(input|oauth)"|id="(input|oauth)"|#oauth|#input' "$NEW_TREE/source/security.html"` found only the two links at lines 37-38, no matching anchors.
- Jira snapshots:
  - Explicit keys: `bun run jira:search snapshot FHIR-25287`, `FHIR-23714`, `FHIR-23703`, `FHIR-34362`, `FHIR-34404`, `FHIR-34400`, `FHIR-25939`, `FHIR-14081`, `FHIR-20533`, `FHIR-44047`, `FHIR-53129`.
  - Additional keys: `FHIR-20365`, `FHIR-53717`, `FHIR-53719`, `FHIR-53923`, `FHIR-54173`, `FHIR-56089`, `FHIR-53381`, `FHIR-55889`.
- Jira phrase searches:
  - `bun run jira:search fts "\"UDAP Consumer-Facing\"" --limit 20` found `FHIR-53719`.
  - `bun run jira:search fts "\"Audit of the Access Control Decision\"" --limit 20` found `FHIR-53381`.
  - `bun run jira:search fts "\"No Dominant Category\"" --limit 20` found `FHIR-54173` and `FHIR-20002`.
  - `bun run jira:search fts "\"Best-Current-Practice for OAuth\"" --limit 20` found `FHIR-34362`.
- Zulip searches:
  - Initial `bun run zulip:search fts "FHIR-xxxxx"` searches failed due FTS hyphen parsing (`no such column` errors), so explicit key searches were rerun with SQL `content LIKE '%FHIR-xxxxx%'`.
  - Snapshot commands used: `bun run zulip:search snapshot "Security and Privacy" "well-known security.txt"`, `bun run zulip:search snapshot "Security and Privacy" "Security Jira Tasks"`, `bun run zulip:search snapshot "Security and Privacy" "AuditEvent.outcomeDesc"`.
- Confluence searches:
  - `bun run confluence:search refs jira <KEY>` and `bun run confluence:search fts <KEY> --limit 10` for explicit and later keys.
  - Snapshot commands used: `bun run confluence:search snapshot 81006065`, `81010536`, `391645164`, `391646682`, `391651119`, `66931686`, `80121490`, `234784975`, `441519513`.
- PR lookups:
  - `gh pr view 3952 --repo HL7/fhir --json number,title,url,state,mergedAt,mergeCommit,author,body`
  - `gh pr view 4066 --repo HL7/fhir --json number,title,url,state,mergedAt,mergeCommit,author,body`
