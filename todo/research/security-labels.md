# security-labels research appendix

## Scope and coverage

- Page path: `source/security-labels.html`.
- Compared old `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to newer `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old source file exists at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/security-labels.html`.
- New source file exists at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html`.
- The R6 ballot4 page was read end-to-end: 467 lines.
- Direct diff size: 228 insertions, 136 deletions.
- Source history in the commit range found 20 commits touching this page.
- Explicit Jira keys found in source history or commit bodies: `FHIR-25287`, `FHIR-23714`, `FHIR-23703`, `FHIR-12660`, `FHIR-11071`, `FHIR-32517`, `FHIR-32471`, `FHIR-42756`, `FHIR-42757`, `FHIR-51826`, `FHIR-44047`.
- Additional page-related Jira issues reviewed because they directly mention `FHIR-core-security-labels` and/or the R6 ballot4 page: `FHIR-19499`, `FHIR-27917`, `FHIR-41262`, `FHIR-53884`, `FHIR-53885`, `FHIR-53924`, `FHIR-53925`, `FHIR-53928`.
- Jira, Zulip, Confluence, direct diff, path history, pickaxe, and post-ballot source history were searched. The main limitation is that several CLI FTS searches containing hyphenated phrases failed until replaced with snapshots, SQL, or quoted/key-specific searches; those failures are noted below.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:14` | Page title and normative metadata. |
| Source | R6 "Core Security Labels" guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:161`-`178` | Main new guidance from `FHIR-12660`; later revised by `FHIR-53884`. |
| Source | R6 NOREUSE wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:233`-`240` | Current text says an application "might only use" a NOREUSE resource. |
| Source | R6 break-the-glass section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:258`-`337` | Added/expanded in R6; later moved out of this page by `FHIR-53885`. |
| Source | R6 HCS taxonomy | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:338`-`457` | Replaces R4 HCS table; contains the 1..1 Confidentiality row later corrected by `FHIR-53928`. |
| Source | R4 break-the-glass baseline | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/security-labels.html:235`-`284` | Shows the older, shorter BTG guidance and old local code URL. |
| Source | R4 HCS baseline | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/security-labels.html:286`-`365` | Shows the older five-category HCS table and jurisdiction section. |
| Git commit | HCS guidance rewrite | `28032417e6d3166967321d4aaefc06693dd370f7`, https://github.com/HL7/fhir/commit/28032417e6d3166967321d4aaefc06693dd370f7 | Applies `FHIR-12660` and `FHIR-11071` wording to the page. |
| Git commit | Event/data example links | `cd1c06923912f70a88c90d186ff3283b40e0403b`, https://github.com/HL7/fhir/commit/cd1c06923912f70a88c90d186ff3283b40e0403b | Adds links to security-label event/data example value sets. |
| Git commit | BTG terminology URL fix | `fb3eec1f50afbdedf1fdbe9e57680da53ac96bdf`, https://github.com/HL7/fhir/commit/fb3eec1f50afbdedf1fdbe9e57680da53ac96bdf | Implements `FHIR-42756`; replaces old FHIR-local BTG URL with v3 ActReason BTG. |
| Git commit | BTG OAuth expansion | `325d79320411ce3f1676d0181ef8e6180d383ee6`, https://github.com/HL7/fhir/commit/325d79320411ce3f1676d0181ef8e6180d383ee6 | Implements `FHIR-42757`; adds OAuth and HTTP Category alternatives. |
| Git commit | BTG text refinement | `8623235ee8ff71ddab7dd5195467e614a8238458`, https://github.com/HL7/fhir/commit/8623235ee8ff71ddab7dd5195467e614a8238458 | Removes unpublished HL7 paper links and changes OAuth example to UDAP/FAST Security. |
| Git commit | Data tagging example | `7c5d2ca6cd07c71e4df63fbf9a2c2b34966ca9db`, https://github.com/HL7/fhir/commit/7c5d2ca6cd07c71e4df63fbf9a2c2b34966ca9db | Implements `FHIR-41262`; adds Bundle high-water mark in the example. |
| Git commit | Normative metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Switches page table from trial-use styling to normative-page styling but still Trial Use. |
| Git commit | FMG QA wording | `87b00c9c0de977f8559e0f99694e8664e03a06cd`, https://github.com/HL7/fhir/commit/87b00c9c0de977f8559e0f99694e8664e03a06cd | Replaces many `may`/`should`/`shall` words with `might`/`would`, including the NOREUSE line. |
| Git commit | Final Normative flag | `7466cfc63cd0b162497a42c80a67480eed86c75a`, https://github.com/HL7/fhir/commit/7466cfc63cd0b162497a42c80a67480eed86c75a | Sets the page status cell to Normative. |
| Post-ballot Git commit | Cardinality fix | `d59d16721deb82e840400f88b3a119145093983f`, https://github.com/HL7/fhir/commit/d59d16721deb82e840400f88b3a119145093983f | `FHIR-53928`; changes HCS Confidentiality cardinality from `1..1` to `0..1`. |
| Post-ballot Git commit | Move BTG out of page | `b7b0249d1f4cc7d8442639d6c728fc7c22359905`, https://github.com/HL7/fhir/commit/b7b0249d1f4cc7d8442639d6c728fc7c22359905 | `FHIR-53885`; removes BTG from `security-labels.html` and moves it to `security.html`. |
| Post-ballot Git commit | Rename/clarify core section | `2277eb5f378a974398668a1c200713a37dc119c3`, https://github.com/HL7/fhir/commit/2277eb5f378a974398668a1c200713a37dc119c3 | `FHIR-53884`; renames "Core Security Labels" to "Guidance on Security Vocabulary Use" and clarifies Bundle/resource/context usage. |
| GitHub PR | Security WG April 2026 updates | https://github.com/HL7/fhir/pull/4066 | Merged 2026-04-29; includes `FHIR-53884`, `FHIR-53885`, `FHIR-53928`, and related security updates. |
| Jira | HCS use clarification | https://jira.hl7.org/browse/FHIR-12660; reopen with `bun run jira:search snapshot FHIR-12660` | Formal source for the three-pattern guidance added under Core Security Labels. |
| Jira | Improve security-label guidance | https://jira.hl7.org/browse/FHIR-11071; reopen with `bun run jira:search snapshot FHIR-11071` | Formal source for the HCS taxonomy rewrite and supplied DS4P-derived HTML. |
| Jira | BTG URL fix | https://jira.hl7.org/browse/FHIR-42756; reopen with `bun run jira:search snapshot FHIR-42756` | Explains replacement of `http://hl7.org/fhir/security-label#break-the-glass`. |
| Jira | BTG OAuth alternative | https://jira.hl7.org/browse/FHIR-42757; reopen with `bun run jira:search snapshot FHIR-42757` | Requests OAuth purpose-of-use alternative alongside HTTP header method. |
| Jira | Example high-water mark | https://jira.hl7.org/browse/FHIR-41262; reopen with `bun run jira:search snapshot FHIR-41262` | Explains why the JSON example was changed. |
| Jira | R6 clarity issue | https://jira.hl7.org/browse/FHIR-53884; reopen with `bun run jira:search snapshot FHIR-53884` | Later ballot comment saying section 6.1.1.2 was confusing and needed renaming/clarification. |
| Jira | R6 BTG relocation issue | https://jira.hl7.org/browse/FHIR-53885; reopen with `bun run jira:search snapshot FHIR-53885` | Later ballot comment saying BTG examples were not consistent with the `meta.security` framing on this page. |
| Jira | R6 BTG maturity concern | https://jira.hl7.org/browse/FHIR-53925; reopen with `bun run jira:search snapshot FHIR-53925` | Later concern that BTG should not publish as normative security-label content; comments note `FHIR-53885` moved it. |
| Jira | R6 cardinality issue | https://jira.hl7.org/browse/FHIR-53928; reopen with `bun run jira:search snapshot FHIR-53928` | Later issue asking what `1..1` Confidentiality means; resolution changes it to `0..1`. |
| Zulip | FHIR-11071/R4B process | `bun run zulip:search snapshot fmg "R4B"` | John Moehrke says the HCS section was broken after content moved to THO and points to `FHIR-11071`. |
| Zulip | Purpose of Use request discussion | `bun run zulip:search snapshot "Security and Privacy" "Use of Security Labels"` | 2023 thread discusses purpose-of-use in tokens, Bundle metadata, and the spec's BTG HTTP header example. |
| Zulip | Early BTG uncertainty | `bun run zulip:search snapshot smart "SMART scopes v2"` | 2019 SMART thread where John Moehrke says he is "not all that happy" with the existing FHIR BTG mechanism. |
| Confluence | 2021 Security WG FHIR-11071 agenda | https://confluence.hl7.org/spaces/SEC/pages/111118455/2021-04-26+FHIR-Security+Meeting+Agenda | Mentions `FHIR-11071` and `FHIR-12660`; process evidence for Security WG handling. |
| Confluence | 2023 Security WGM minutes | https://confluence.hl7.org/spaces/SEC/pages/184923540/202309+SEC+WGM+Minutes | Records `FHIR-42757`, `FHIR-42756`, `FHIR-41262`, `FHIR-19499` in Security WGM context. |
| Confluence | 2026 Security WG minutes | https://confluence.hl7.org/spaces/SEC/pages/441519513/2026-03-30+Security+WG+Agenda+Minutes | References `FHIR-53884` and `FHIR-53885` as R6 security-labels ballot items. |

## Change summary

### Page ownership and standards status - metadata/template/navigation

- R4 showed the page under `[%wg fhir%]`, maturity level 3, Trial Use.
- R6 ballot4 shows Responsible Owner `[%wg sec%]` and Standards Status Normative at `/source/security-labels.html:15`.
- The wrapper `<div class="col-12">` was removed by template update.
- Commits: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (template), `be576f38f6687692c9b650e71018e4abc203163f` (owner), `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` and `7466cfc63cd0b162497a42c80a67480eed86c75a` (normative status handling).

### General prose and modal-word cleanup - editorial with semantic risk

- Many instances of `may`, `should`, and `shall` were changed to `might` or `would` by `87b00c9c0de977f8559e0f99694e8664e03a06cd`.
- Most are editorial or normative-keyword cleanup, but the NOREUSE line changed from "may only use it" in R4 (`old source:213`) to "might only use it" in R6 (`new source:236`). This appears to weaken or garble a handling caveat rather than just remove a modal keyword.
- The same commit changed the HCS footnote from "shall not be included" to "would not be included"; this may be intentional softening, but it should be read with the broader FMG QA context.

### Security label use patterns - semantic guidance

- `FHIR-12660` added the three use patterns now in R6 ballot4:
  - Bundle metadata/security conditions.
  - Request context.
  - Resource metadata (`meta.security`).
- Source commit: `28032417e6d3166967321d4aaefc06693dd370f7`, with later value set links added by `cd1c06923912f70a88c90d186ff3283b40e0403b`.
- Later R6 ballot feedback (`FHIR-53884`) said this was confusing and misplaced under "Core Security Labels"; PR 4066 later renamed it to "Guidance on Security Vocabulary Use" and made the Bundle/resource/context paths explicit.

### Core label examples and terminology links - example/link changes

- The JSON example changed from a single resource with `DELAU` at resource level to a Bundle high-water mark with `DELAU` and `R`, plus an entry resource with `ETHUD` and `R`.
- Jira `FHIR-41262` explains this: the old example did not have a high-water mark and used an obligation at resource level; resolution was to fix the example to have a high-water mark.
- Terminology links changed from local `v3/...` paths to `https://terminology.hl7.org/...` URLs for PurposeOfUse, Confidentiality, Obligation/Refrain, HTEST, and BTG.

### Break-the-glass - substantive semantic guidance and later relocation

- R4 had a short BTG section using a FHIR-local code URL and HTTP Category header example.
- R6 ballot4 uses `http://terminology.hl7.org/CodeSystem/v3-ActReason#BTG`, adds a fuller definition, explains authorization/audit expectations, and adds OAuth 2 and HTTP Category alternatives.
- `FHIR-42756` caused the terminology URL correction; `FHIR-42757` caused the OAuth alternative.
- Later ballot issue `FHIR-53885` concluded the BTG examples were not consistent with the `meta.security` focus of `security-labels.html` and should move to the broader Security page. PR 4066 implemented this move after the R6 ballot4 source commit.
- `FHIR-53925` separately records concern that BTG interop mechanisms should not be normative on the security-labels page; comments note `FHIR-53885` moved, not removed, the section.

### HCS taxonomy - substantive/semantic guidance

- R4 had "The HCS defines 5 categories" plus a jurisdiction-specific security labels subsection.
- R6 ballot4 replaces this with DS4P/HCS-derived classification/category/control tables and a DS4P IG pointer.
- `FHIR-11071` supplied the main HTML. Its supplied snippet included a "Security Classification" heading and link to `ValueSet-v3-SecurityClassificationObservationType`; the R6 ballot4 source has the classification paragraph/table but no heading or link before "Security Category".
- The R6 ballot4 HCS table says Confidentiality cardinality is `1..1` at `/source/security-labels.html:360`-`362`; later `FHIR-53928` found this confusing because it could imply base FHIR resources without a confidentiality tag are invalid. PR 4066 changed it to `0..1`.

### Jurisdiction-specific labels - removed/absorbed

- R4 had a "Jurisdiction Specific Security Labels" subsection and an ActUSPrivacyLaw row.
- `FHIR-23703` requested removing/updating this because it pointed to deprecated values. Commit `d97f7c47d60f0ab0abb1a0b1bb3802d791a841e8` commented it out, and the later `FHIR-11071`/`FHIR-12660` rewrite removed the commented block.

## Source history

| Commit | Date | Subject | Page-specific effect |
|---|---:|---|---|
| `d97f7c47d60f0ab0abb1a0b1bb3802d791a841e8` | 2020-04-08 | Security WG changes for J#25287, J#23714, and J#23703 | Comments out the jurisdiction-specific security labels subsection and updates the ActUSPrivacyLaw link. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes outer `div.col-12`; mechanical/template. |
| `28032417e6d3166967321d4aaefc06693dd370f7` | 2021-10-01 | update security-labels page, close FHIR-12660 and FHIR-11071 | Main HCS/Core Security Labels rewrite; adds three use patterns and HCS taxonomy tables. |
| `cd1c06923912f70a88c90d186ff3283b40e0403b` | 2022-05-10 | Security CR J#32517, J#32471 | Adds event/data example value set links to Bundle and Resource metadata paragraphs. |
| `be576f38f6687692c9b650e71018e4abc203163f` | 2022-08-10 | ownership of security pages | Changes owning work group from FHIR to Security. |
| `fb3eec1f50afbdedf1fdbe9e57680da53ac96bdf` | 2023-09-14 | FHIR-42756: fix system id for BTG | Replaces old BTG URL with v3 ActReason BTG. |
| `325d79320411ce3f1676d0181ef8e6180d383ee6` | 2023-09-22 | FHIR-42757 - break-glass using OAuth | Adds OAuth and HTTP Category subsections and updates BTG wording. |
| `8623235ee8ff71ddab7dd5195467e614a8238458` | 2023-09-22 | remove links to unpublished HL7 document on break-the-glass. Update OAuth text from Joe Lamy recommendation. | Removes unpublished paper links; changes OAuth example from IHE IUA to UDAP/FAST Security text. |
| `0700eb3f6082eb615a7821476fe8c357504d1023` | 2023-09-22 | typo | Fixes an empty paragraph introduced in BTG text. |
| `7c5d2ca6cd07c71e4df63fbf9a2c2b34966ca9db` | 2023-12-29 | Fixes for Security December 2023 | Updates JSON example to include Bundle high-water mark and entry-level labels. |
| `ef21d8ddf3048884a12bae7c42240c736a6171cc` | 2025-05-01 | removing references to build.fhir.org | Changes UDAP link from build URL to published STU1.1 URL. |
| `2f3793ffdbcdd394d03fff555711bd203e55b0b0` | 2025-08-25 | Update security-labels.html | `FHIR-51826` in body, but actual page effect is heading-level adjustment; first pass left mismatched closing tags. |
| `ce1702ae5f76dc6468c2ebecf2479e42b571aacb` | 2025-08-25 | Update security-labels.html | Fixes the mismatched H3/H4 closing tags from the prior commit. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Switches page metadata table styling/owner wording for normative pages; status still Trial Use. |
| `87b00c9c0de977f8559e0f99694e8664e03a06cd` | 2025-11-01 | QA fixes as directed from FMG | Modal-word and punctuation cleanup, including "may only use" -> "might only use" for NOREUSE and "shall not" -> "would not" in HCS footnote. |
| `1afa400c956b554a0829003cb8ffe4f40f3f4547` | 2025-11-02 | Merge branch 'master' into moehrke-security-qa | Merge/no page-specific patch shown in saved range beyond a 2-line merge effect. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Adds commas after `e.g.` and `i.e.` in several lines. |
| `c7312b111c11650190f078adb4d5d75a4fa4883a` | 2025-11-06 | typo | Changes `valueset-security-label-event-examples.html` to singular `valueset-security-label-event-example.html`. |
| `fa63f0677d7c3405008bca14743d273b9f71a778` | 2025-11-06 | . | Changes `valueset-security-label-data-examples.html` to singular `valueset-security-label-data-example.html`. |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | sort out trial-use notes | Changes page metadata status from Trial Use to Normative. |

Post-ballot source history is not part of the R4 -> R6 ballot4 diff, but it is important for actionable triage:

| Commit | Date | Subject | Why it matters |
|---|---:|---|---|
| `d59d16721deb82e840400f88b3a119145093983f` | 2026-04-25 | FHIR-53928 - What does security label cardinality mean? | Changes HCS Confidentiality cardinality from `1..1` to `0..1`. |
| `b7b0249d1f4cc7d8442639d6c728fc7c22359905` | 2026-04-25 | FHIR-53885 - move Break-the-Glass to the security page as it is not security-labeling | Removes BTG from `security-labels.html` and adds it to `security.html`. |
| `2277eb5f378a974398668a1c200713a37dc119c3` | 2026-04-25 | FHIR-53884 - Need more clarity on 6.1.1.2 Core security labels | Renames the confusing "Core Security Labels" section and clarifies `Bundle.meta.security`, request context, and `Resource.meta.security`. |
| `deab26af0c61935e2d6038b30431df61bbb3dfcd` | 2026-04-29 | Merge pull request #4066 from HL7/moehrke-security-202604 | Merges the above changes in PR 4066. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-23703`: "Jurisdiction security tag valueset that has nothing but deprecated values". Resolution says remove FHIR-specific USPrivacyLaw value set and change referenced value set. This matches the removal/commenting of the old jurisdiction-specific section.
- `FHIR-12660`: "HCS use clarification". Resolution text exactly matches the three-pattern guidance added by `28032417e6d3166967321d4aaefc06693dd370f7`.
- `FHIR-11071`: "Improve security label guidance". Resolution says to apply the updated HTML from comments. The comment supplied Security Classification, Security Category, and Security Control sections. R6 ballot4 incorporates most of the text, but the Security Classification heading/link is missing from the source.
- `FHIR-32517` and `FHIR-32471`: commit `cd1c069...` references these and adds links to example security-label value sets; the issues themselves are primarily about Provenance/AuditEvent value set bindings, not this narrative page.
- `FHIR-42756`: BTG section still referenced an old URL root. Resolution matches the single-line URL fix.
- `FHIR-42757`: requests a BTG OAuth purpose-of-use alternative. Resolution intent matches the R6 OAuth subsection, with later text updated from IHE IUA to UDAP/FAST Security.
- `FHIR-51826`: appears in a 2025 commit body but is unrelated to this page (PACI OADI profile listing issue). The page commit itself only corrected heading levels.
- `FHIR-44047`: punctuation cleanup for `e.g.,` and `i.e.,`; matches the 2025 punctuation-only page commit.
- `FHIR-25287` and `FHIR-23714`: appear in an early security commit subject but do not materially explain this page's R4 -> R6 content except as broader Security WG batch context.

### Other Jira issues that plausibly explain or reassess the changed text

- `FHIR-19499`: old BTG clarification issue. It records concern about broken BTG/security tag URLs and the experimental HTTP Category approach; resolution says changes had already been made by previous CPs.
- `FHIR-27917`: updated the OperationOutcome BTG example from ETREAT to BTG; supports the BTG-related example link in the page.
- `FHIR-41262`: specifically explains the JSON example change. It says the old Bundle lacked a high-water mark and used obligation at resource level; resolution: "fix the example to have a high-water mark." Commit `7c5d2ca...` applies this.
- `FHIR-53884`: post-ballot4 R6 issue saying section 6.1.1.2 was confusing because "Core Security Labels" did not define what core labels were and because the Bundle/context/resource pattern text was hard to follow. Resolution renames the section to "Guidance on Security Vocabulary Use" and clarifies wording.
- `FHIR-53885`: post-ballot4 R6 issue saying BTG examples were not based on `meta.security`, not clearly FHIR core, and the UDAP example could not be found in the referenced specification. Resolution moves BTG to the Security Principles/Security page and updates the link/name.
- `FHIR-53924`: post-ballot4 issue challenging the normative/aspirational "All conformant FHIR Applications SHOULD use these labels where appropriate" sentence. Comments show Security WG wanted contextualization rather than a blanket statement. PR 4066 removed/softened the ballot4 sentence through the `FHIR-53884` change.
- `FHIR-53925`: post-ballot4 issue saying BTG content was not mature enough for a normative security-labels page. Comments say `FHIR-53885` had already moved it to `security.html`.
- `FHIR-53928`: post-ballot4 issue asking whether HCS Confidentiality `1..1` means every base resource without a confidentiality tag is invalid. Resolution: change to `0..1`.

### Context-only Jira hits that should not drive action

- Older page-related issues such as `FHIR-3350`, `FHIR-5150`, `FHIR-5694`, `FHIR-5915`, `FHIR-8178`, `FHIR-8920`, `FHIR-10504`, `FHIR-10505`, `FHIR-15134`, `FHIR-17482`, `FHIR-19311`, `FHIR-25180`, `FHIR-25217`, `FHIR-25223`, `FHIR-26946`, and `FHIR-27547` appeared in a related-page SQL query. They are historical context, not direct explanations for the high-signal R4 -> R6 ballot4 changes reviewed here.
- `FHIR-32764` appeared in an FTS search for `SecurityClassificationObservationType`, but it belongs to the DS4P IG and is not direct evidence for this core page.

## Zulip evidence

- `bun run zulip:search fts "\"FHIR-11071\"" --limit 20` found one relevant message in `#fmg > R4B`. Snapshot command: `bun run zulip:search snapshot fmg "R4B"`. At local snapshot `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/zulip/snapshots.txt:25`-`26`, John Moehrke says the HCS section of `security-labels.html` was broken because content moved to THO and links were not updated, and points to `FHIR-11071`.
- `bun run zulip:search snapshot "Security and Privacy" "Use of Security Labels"` shows 2023 discussion of PurposeOfUse for API requests. At local snapshot lines `530`-`546`, John Moehrke says purpose of use would tend to be in the security token, mentions UDAP/SMART/IHE-IUA, and Grahame/Paul point to the BTG HTTP header example. This supports the real-world motivation for request-context purpose-of-use guidance but is not a formal disposition.
- `bun run zulip:search snapshot smart "SMART scopes v2"` shows 2019 discussion around break-glass/progressive authorization. At local snapshot lines `660`-`661`, John Moehrke says the existing FHIR BTG mechanism was inserted earlier and he was "not all that happy with this"; this aligns with later `FHIR-53925` concern that BTG interop was immature.
- Searches for exact later issue keys `FHIR-42757`, `FHIR-53884`, `FHIR-53885`, `FHIR-53925`, `FHIR-53928`, and phrase `"security label cardinality"` found no Zulip hits in the local snapshot.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-11071` found multiple Security WG agenda/minutes pages from 2020-2022. Snapshot `111118455` (`2021-04-26 FHIR-Security Meeting Agenda`) references both `FHIR-11071` and `FHIR-12660`, but the text is mostly agenda/process rather than detailed rationale.
- `bun run confluence:search refs jira FHIR-12660` found the 2021-09-13 Security meeting. Snapshot `79497364` records a block vote table where `FHIR-12660` is "HCS use clarification" with resolution "Persuasive with Modification" and vote `8-0-1` at local snapshot line `117`.
- `bun run confluence:search refs jira FHIR-42757` found 2023 WGM minutes. Snapshot `184923540` references `FHIR-42757`, `FHIR-42756`, `FHIR-41262`, and `FHIR-19499`; local snapshot line `165` includes the WGM text recording `FHIR-42757 - break-glass alternative using oAuth Applied` and `FHIR-41262` as triaged.
- `bun run confluence:search refs jira FHIR-53884` and `FHIR-53885` found 2026 Security WG minutes. Snapshot `441519513` references both issues at local snapshot lines `228`-`229`; this is process evidence that the later R6 ballot comments were on the Security WG agenda/minutes.
- Confluence searches for `FHIR-53925` and `FHIR-53928` had no direct refs/FTS hits in the bounded search, although Jira and PR 4066 provide strong evidence for `FHIR-53928`.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2016-09-17 | Jira created | `FHIR-11071` | Original security-label guidance ballot issue. |
| 2017-01-19 | Jira created | `FHIR-12660` | HCS use clarification issue. |
| 2018-10-24 | Jira created | `FHIR-19499` | Early BTG clarification and broken URL concern. |
| 2019-06-19 | Zulip discussion | `smart > SMART scopes v2` | John Moehrke expresses dissatisfaction with existing BTG mechanism. |
| 2020-01-13 | Jira resolved/voted | `FHIR-23703` | Jurisdiction-specific/deprecated value set cleanup. |
| 2020-04-08 | Source commit | `d97f7c47...` | Comments out jurisdiction-specific section. |
| 2021-04-26 | Jira resolved/voted | `FHIR-11071` | Resolution: apply supplied HTML. |
| 2021-07-06 | Zulip process discussion | `fmg > R4B` | HCS section described as broken after THO move; `FHIR-11071` cited. |
| 2021-09-13 | Security WG vote/process | Confluence page `79497364`; `FHIR-12660` | Block-vote table lists `FHIR-12660` as Persuasive with Modification, vote `8-0-1`. |
| 2021-10-01 | Source commit | `28032417...` | Applies `FHIR-12660` and `FHIR-11071` page rewrite. |
| 2022-05-10 | Source commit | `cd1c069...` | Adds Security Label Event/Data Example value set links. |
| 2023-09-14 | Jira resolution/source commit | `FHIR-42756`; `fb3eec1...` | BTG code URL corrected. |
| 2023-09-22 | Source commits | `325d793...`, `8623235...`, `0700eb3...` | BTG OAuth expansion, link removal, typo fix. |
| 2023-12-11 | Jira vote | `FHIR-41262` | Example high-water mark clarification accepted. |
| 2023-12-29 | Source commit | `7c5d2ca...` | JSON example updated. |
| 2025-10-31 to 2025-11-12 | R6 normative edits | `270e0ce...`, `87b00c9...`, `887bc23...`, `7466cfc...` | Metadata and QA edits make page Normative; modal-word cleanup introduces the NOREUSE "might only use" wording. |
| 2025-11-12 | R6 ballot4 source boundary | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | Page reviewed here. |
| 2026-01 to 2026-03 | Later R6 ballot comments | `FHIR-53884`, `FHIR-53885`, `FHIR-53928`, `FHIR-53925` | Later concerns about confusing section, BTG placement/maturity, and HCS cardinality. |
| 2026-03-30 | Security WG process evidence | Confluence page `441519513` | References `FHIR-53884` and `FHIR-53885`. |
| 2026-04-25 | Post-ballot source fixes | `d59d167...`, `b7b0249...`, `2277eb5...` | Applies cardinality fix, BTG relocation, and core-section clarification. |
| 2026-04-29 | PR merge | PR 4066, merge `deab26af...` | Merges later Security WG changes after R6 ballot4 source cut. |

## Evidence log

- `test -f` on old and new source paths: established the page is present in both trees.
- `wc -l`: old file 375 lines, R6 ballot4 file 467 lines.
- `git diff --find-renames 0da2a0a... 5d67a34... -- source/security-labels.html`: saved to `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/direct.diff`; established the 228 insertion/136 deletion direct diff.
- `git log --reverse --date=short ... -- source/security-labels.html`: found 20 commits in the requested range.
- `git show --stat --patch <commit> -- source/security-labels.html`: saved to `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/commit-patches.txt`; used for commit-by-commit source history.
- Full R6 ballot4 page read with `view` in line ranges `1`-`220` and `221`-`467`.
- Full R4 page read with `view` in line ranges `1`-`220` and `221`-`375`.
- `bun run jira:search snapshot` for all explicit keys listed above: saved under `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/jira/`.
- Initial Jira FTS searches for unquoted hyphenated terms (`security-labels`, `break-glass OAuth`, `Privacy-revealing Obligation`) failed with FTS5 syntax errors; the issue-key snapshots and SQL related-page query were used instead.
- `bun run jira:search sql "... related_pages LIKE '%FHIR-core-security-labels%' ..."` found later R6 issues `FHIR-53884`, `FHIR-53885`, `FHIR-53924`, `FHIR-53925`, and `FHIR-53928`.
- `gh pr view 4066 --repo HL7/fhir ...`: established PR 4066 was merged 2026-04-29 as `deab26af0c61935e2d6038b30431df61bbb3dfcd` and listed `FHIR-53884`, `FHIR-53885`, `FHIR-53928`, and related issues.
- `git log --all --grep='4066|53884|53885|53928|53925|53924' -- source/security-labels.html`: found post-ballot source commits `d59d167...`, `b7b0249...`, `2277eb5...`.
- `git show --stat --patch d59d167... b7b0249... 2277eb5...`: saved to `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/post-ballot-4066-patches.txt`; confirmed the later source changes.
- `git log -S` for distinctive phrases confirmed when the three-pattern text, NOREUSE "might only use", privacy-revealing footnote, and Security Label Event Examples phrase entered or changed.
- Zulip searches:
  - `bun run zulip:search fts "\"FHIR-11071\"" --limit 20`
  - `bun run zulip:search fts "\"FHIR-42757\"" --limit 20`
  - `bun run zulip:search fts "\"FHIR-53884\"" --limit 20`
  - `bun run zulip:search fts "\"FHIR-53885\"" --limit 20`
  - `bun run zulip:search fts "\"FHIR-53925\"" --limit 20`
  - `bun run zulip:search fts "\"FHIR-53928\"" --limit 20`
  - `bun run zulip:search fts "\"Break-the-Glass\" \"security labels\"" --limit 20`
- Zulip snapshots saved to `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/zulip/snapshots.txt`.
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-11071`
  - `bun run confluence:search refs jira FHIR-12660`
  - `bun run confluence:search refs jira FHIR-42757`
  - `bun run confluence:search refs jira FHIR-53884`
  - `bun run confluence:search refs jira FHIR-53885`
  - `bun run confluence:search refs jira FHIR-53925`
  - `bun run confluence:search refs jira FHIR-53928`
  - `bun run confluence:search fts "security labels break glass" --limit 20`
- Confluence snapshots saved to `.copilot/session-state/733131e0-3b8e-418b-bfbc-a2aff841a00f/files/security-labels/confluence/snapshots.txt`.
