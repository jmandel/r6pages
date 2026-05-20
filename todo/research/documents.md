# documents research appendix

## Scope and coverage

- Page path: `source/documents.html`.
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees (`old exists`, `new exists`). Old page has 330 lines; new page has 341 lines.
- The R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/documents.html:1-341`.
- Source history: 26 path-history entries between the two commits, including two merge entries with no visible page hunk in the captured patch. Explicit Jira keys from commit subjects/patch-related history: `FHIR-20210`, `FHIR-15723`, `FHIR-36636`, `FHIR-31664`, `FHIR-33942`, `FHIR-17060`, `FHIR-8025`, `FHIR-35830`, `FHIR-38933`, `FHIR-38927`, `FHIR-38929`, `FHIR-38932`, `FHIR-38934`, `FHIR-38930`, `FHIR-39121`, `FHIR-43295`, `FHIR-46789`, `FHIR-40757`, `FHIR-44047`, `FHIR-45507`.
- Jira snapshots were captured for all explicit keys above. Zulip searches covered the explicit high-value Jira keys plus distinctive phrases (`Document signature`, `Bundle.signature documents`, `Graph-connected Bundles`, `fully-interconnected graph`, `immutable document bundle`, `specific frozen versions`, `document date Bundle.timestamp`). Confluence searches covered explicit high-value Jira keys and page terms.
- Caveats: I did not download or inspect the Word attachments on `FHIR-39121`; I relied on the Jira snapshot metadata/comments and the actual source patch. Zulip FTS found no direct hits for several issue-key-only searches, likely because Jira bot/noisy streams are not in the default Zulip DB; this is noted in the evidence log. Confluence snapshots normalize minutes into long lines, so exact line numbers inside minutes are less precise than source/Jira locators.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/documents.html` | Old comparison page exists. |
| Source | R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/documents.html:1-341` | Current page read end-to-end. |
| Source lines | Introduction and lifecycle | `.../source/documents.html:24-58` | Defines FHIR document instance, frozen versions, update policy, scope, and DocumentReference distinction. |
| Source lines | Inclusion/graph rules | `.../source/documents.html:87-114` | Contains SHALL/SHOULD rules for included resources and the graph-connected link. |
| Source lines | Dates and signatures | `.../source/documents.html:124-135` | Shows `Bundle.timestamp` correction and the current generic document-signature text. |
| Source lines | Presentation/attested content | `.../source/documents.html:143-172` | Defines attested content and subject narrative guidance. |
| Source lines | Endpoint behavior | `.../source/documents.html:284-325` | REST endpoint guidance; mostly unchanged except links/editorial. |
| Related source | Graph-connected Bundles | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bundle/bundle-notes.xml:336-347` | Related text says all entries in document/message Bundles must form one interconnected graph. |
| Related source | Digital signature guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:430-455` | Says embedded Bundle signatures SHALL be in Provenance resources and `Bundle.signature` is deprecated. |
| Related source | Bundle.signature deprecation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bundle/structuredefinition-Bundle.xml:657-666` | Confirms `Bundle.signature` is deprecated in R6 ballot4. |
| Commit | HTML template | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes outer `div`; mechanical/template. |
| Commit | `Bundle.timestamp` | `852d3b88396a84de8383222ad0fc71207fa81a44`, https://github.com/HL7/fhir/commit/852d3b88396a84de8383222ad0fc71207fa81a44 | Applies `FHIR-20210`. |
| Commit | Documents guide fixes | `991b2cdaf0b31b7fc50153b930cd1c014e554f92`, https://github.com/HL7/fhir/commit/991b2cdaf0b31b7fc50153b930cd1c014e554f92 | Applies `FHIR-15723` resource inclusion and attested-content changes. |
| Commit | Document mutability wording | `0a729198e07df0fc13d938dd88810142dbabdc6b`, https://github.com/HL7/fhir/commit/0a729198e07df0fc13d938dd88810142dbabdc6b | Applies `FHIR-36636`. |
| Commit | Bulk Data scope note | `39b42e9d93db1d28eb543e933761184fc90d2214`, https://github.com/HL7/fhir/commit/39b42e9d93db1d28eb543e933761184fc90d2214 | Adds "not unbounded data sets" note for `FHIR-31664`. |
| Commit | Document link/collateral rules | `a8236bb81f35cbeee2cda2cf95d82063f4d44aba`, https://github.com/HL7/fhir/commit/a8236bb81f35cbeee2cda2cf95d82063f4d44aba | Reworks allowed document Bundle contents. |
| Commit | R5 ballot document comments | `d7563bf03921e97c6a4569038ec83ac7f9451688`, `336f6adee7e632a0486a3514e1797d1bf4b6f574`, `c4fe4544a7649495fc716534537710a95bc7428b`, `8fb0ca1ee552beebcb26f6cdc433f62ea56f4a20`, `9ebe57e0ac4eeb8d376bf3e38af7d6a17851234f`, `df19c1dbb52209924eba91baa573e9140c5125ad` | Apply `FHIR-38933`, `FHIR-38927`, `FHIR-38929`, `FHIR-38932`, `FHIR-38934`, `FHIR-38930`. |
| Commit | Philips editorial pass | `57c8d051a32fa9fa729af9cb9184f50e79953725`, https://github.com/HL7/fhir/commit/57c8d051a32fa9fa729af9cb9184f50e79953725 | Applies many editorial/document presentation changes tied to `FHIR-39121`. |
| Commit | Graph reference mechanism | `736523cda3b02579e307112bf1db369f79ec00cd`, https://github.com/HL7/fhir/commit/736523cda3b02579e307112bf1db369f79ec00cd | Applies `FHIR-43295` to documents/messaging. |
| Commit | R6 normative status | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page status table from Trial Use/FMM3 to Normative. |
| Commit | Document signature | `f06748cde92aa18ad0830b9f43fbc39639d38026`, https://github.com/HL7/fhir/commit/f06748cde92aa18ad0830b9f43fbc39639d38026 | Applies `FHIR-46789` by removing attester/KeyInfo SHOULDs, but does not use the exact Jira replacement text. |
| Commit | Signature terminology | `aec3a16f6006be381543368ecafb845554b913be`, https://github.com/HL7/fhir/commit/aec3a16f6006be381543368ecafb845554b913be | Changes "Provenance statements and a signature" to "Provenance statements including signatures"; commit title is unrelated to documents. |
| Commit | Graph-connected link | `e3fe9fdef25099c995e905af26b84a15734f81c4`, https://github.com/HL7/fhir/commit/e3fe9fdef25099c995e905af26b84a15734f81c4 | Applies `FHIR-45507` by linking documents to `bundle.html#graphs`; leaves punctuation defect. |
| Commit | Bundle.signature deprecation | `9fe4e8ba2ec241ab35dc18046c102c38872e1d50`, https://github.com/HL7/fhir/commit/9fe4e8ba2ec241ab35dc18046c102c38872e1d50 | Related signature-page decision: deprecates `Bundle.signature`, promotes Provenance signatures. |
| Jira | `FHIR-20210` | https://jira.hl7.org/browse/FHIR-20210; reopen with `bun run jira:search snapshot FHIR-20210` | Formal basis for `Bundle.meta.lastUpdated` -> `Bundle.timestamp`. |
| Jira | `FHIR-15723` | https://jira.hl7.org/browse/FHIR-15723; `bun run jira:search snapshot FHIR-15723` | Formal basis for secondary-resource SHOULD and attested-content clarification. |
| Jira | `FHIR-36636` | https://jira.hl7.org/browse/FHIR-36636; `bun run jira:search snapshot FHIR-36636` | Formal basis for replacing hard immutability language with policy/update guidance. |
| Jira | `FHIR-31664` | https://jira.hl7.org/browse/FHIR-31664; `bun run jira:search snapshot FHIR-31664` | Formal basis for saying documents are not unbounded/full-EHR data sets. |
| Jira | `FHIR-38927` | https://jira.hl7.org/browse/FHIR-38927; `bun run jira:search snapshot FHIR-38927` | Removes "frozen" from generic document definition while retaining frozen versions for instances. |
| Jira | `FHIR-38929` | https://jira.hl7.org/browse/FHIR-38929; `bun run jira:search snapshot FHIR-38929` | Adds Bundle-of-type-document introduction. |
| Jira | `FHIR-38932` | https://jira.hl7.org/browse/FHIR-38932; `bun run jira:search snapshot FHIR-38932` | Replaces vague "framework" conformance with `CapabilityStatement.document`. |
| Jira | `FHIR-38934` | https://jira.hl7.org/browse/FHIR-38934; `bun run jira:search snapshot FHIR-38934` | Renames "Document Content" to "Document Structure". |
| Jira | `FHIR-38930` | https://jira.hl7.org/browse/FHIR-38930; `bun run jira:search snapshot FHIR-38930` | Removes "document immutability" terminology sentence. |
| Jira | `FHIR-39121` | https://jira.hl7.org/browse/FHIR-39121; `bun run jira:search snapshot FHIR-39121` | Editorial review with attachments; status remains "Resolved - change required" in snapshot. |
| Jira | `FHIR-43295` | https://jira.hl7.org/browse/FHIR-43295; `bun run jira:search snapshot FHIR-43295` | Adds requirement that graph-linking references in document/message Bundles use `Reference.reference`, canonical, or URI. |
| Jira | `FHIR-45507` | https://jira.hl7.org/browse/FHIR-45507; `bun run jira:search snapshot FHIR-45507` | Later graph-connected Bundle clarification; documents implementation appears partial. |
| Jira | `FHIR-46789` | https://jira.hl7.org/browse/FHIR-46789; `bun run jira:search snapshot FHIR-46789` | Document signature issue; implementation diverges from Jira's literal replacement text. |
| Zulip | Immutable document bundle | `bun run zulip:search snapshot implementers "immutable document bundle"`; https://chat.fhir.org/#narrow/stream/implementers/topic/immutable%20document%20bundle | Rationale for `FHIR-36636`. |
| Zulip | Provenance Signature | `bun run zulip:search snapshot "Security and Privacy" "Provenance Signature"`; https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/Provenance%20Signature | Later signature overhaul discussion; favors Provenance-based signatures. |
| Zulip | Signing Bundles | `bun run zulip:search snapshot "IG creation" "Signing Bundles"`; https://chat.fhir.org/#narrow/stream/IG%20creation/topic/Signing%20Bundles | Explicit discussion of moving to Provenance and deprecating `Bundle.signature` in R6. |
| Zulip | `Bundle.timestamp` | `bun run zulip:search snapshot implementers "Is lastUpdated required when submitting a FHIR document?"`; https://chat.fhir.org/#narrow/stream/implementers/topic/Is%20lastUpdated%20required%20when%20submitting%20a%20FHIR%20document%3F | Original discussion for `FHIR-20210`. |
| Confluence | FHIR-I WGM 202501 | https://confluence.hl7.org/spaces/FHIRI/pages/281219681/FHIR+Infrastructure+Minutes+WGM+202501+-+Virtual; `bun run confluence:search snapshot 281219681` | Records `FHIR-46789` vote: "Will remove the SHOULD sentence", persuasive with modification, 16-0-2. |
| Confluence | FHIR-I 2024-05-06 | https://confluence.hl7.org/spaces/FHIRI/pages/239211981/FHIR+Infrastructure+Minutes+CC+2024-05-06; `bun run confluence:search snapshot 239211981` | Records `FHIR-43295` disposition and intent to update document page. |
| Confluence | FHIR-I 2024-06-03 | https://confluence.hl7.org/spaces/FHIRI/pages/248710301/FHIR+Infrastructure+Minutes+CC+2024-06-03; `bun run confluence:search snapshot 248710301` | Records `FHIR-45507` vote. |
| Confluence | Security 2025-06-30 | https://confluence.hl7.org/spaces/SEC/pages/358255047/2025-06-30+Security+WG+Agenda+Minutes; `bun run confluence:search snapshot 358255047` | Security WG agrees FHIR-I leads signature-related tickets with Security consultation. |

## Change summary

### Page metadata/template/navigation

- Classification: metadata/template/navigation, with a standards-status consequence.
- The wrapper `<div class="col-12">` was removed by the 2021 HTML template update.
- The status table changed from Trial Use/FMM 3 (`colstu`) to Normative (`colsn`) in `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` as part of R6 normative changes. This is not a prose rule change but changes the page's standards status presentation.

### Definition, scope, lifecycle, and DocumentReference distinction

- Classification: semantic guidance and some substantive conformance guidance.
- The R4 definition "A document is an immutable set of resources..." was replaced through `FHIR-36636`, `FHIR-38927`, `FHIR-38929`, and `FHIR-38930`. Current text defines a FHIR document instance as a `Bundle` of type `document` starting with `Composition`, containing specific frozen versions of other resources, and says implementations SHOULD have policies around updates vs distinct documents (`documents.html:24-36`).
- `FHIR-31664` added the note that FHIR documents are not for unbounded data sets such as all data stored in an EHR, pointing to Bulk Data (`documents.html:51-53`).
- `FHIR-35830`/`FHIR-38933` clarified clinical vs non-clinical document purposes, removed FHIR Implementation Guides as an example, and clarified that `DocumentReference` can point to FHIR documents as well as PDFs/CDAs (`documents.html:45-58`).
- `FHIR-38932` replaced vague conformance-to-framework language with `CapabilityStatement.document` conformance language (`documents.html:41-42`).

### Document structure, inclusion graph, and reference semantics

- Classification: substantive/normative and semantic guidance.
- `FHIR-15723` changed "supporting evidence" to "supporting details", strengthened secondary referenced-resource guidance from MAY/implementation choice to SHOULD, and added a contained-resources caveat (`documents.html:68-101`).
- `a8236bb81f35cbeee2cda2cf95d82063f4d44aba` reworked the "document bundle SHALL include only" list into composition set, supporting information, and supporting collateral (`documents.html:103-114`).
- `FHIR-43295` added that graph-linking references SHALL use `Reference.reference`, canonical, or URI. The Jira comment clarifies the intent is about references used to link resources in the Bundle; outside-Bundle references can use other mechanisms and business-identifier references may exist in addition (`FHIR-43295` comments).
- `FHIR-45507` added a pointer to "Graph-connected Bundles", but the documents page did not get the exact Jira-proposed sentence "All document Bundles SHALL be a [fully-interconnected graph](link to above)." Current text links from the supporting-information list item (`documents.html:109-113`), while the Bundle notes page states a broader expectation that all entries in message/document Bundles form a single graph (`bundle-notes.xml:339-343`).

### Identifiers and dates

- Classification: semantic correction.
- `FHIR-20210` changed the document date from `Bundle.meta.lastUpdated` to `Bundle.timestamp` (`documents.html:124-131`). Jira and Zulip both explain the reason: `meta.lastUpdated` is server-controlled and can be discarded/changed on create, while `Bundle.timestamp` captures document assembly time.
- The `FHIR-36636`/immutability work also clarified that additional documents derived from the same `Composition` SHALL have a different `Bundle.identifier` (`documents.html:138-140`).

### Digital signatures

- Classification: substantive/semantic guidance with an intent-vs-implementation concern.
- R4 said Document Bundles may be signed using the digital signatures page and added SHOULD requirements that the signature be provided by a listed attester and include XML-DSig `KeyInfo`/`KeyName` matching the attester resource `fullUri`.
- `FHIR-46789` identified that text as problematic/incomplete and resolved to remove the KeyInfo sentence and replace the first sentence with text explicitly using `Bundle.signature`.
- Commit `f06748cde92aa18ad0830b9f43fbc39639d38026` removed the KeyInfo/attester SHOULDs but implemented a more generic sentence: "If there is a need to have a digital signature on a Document Bundle, this may be accomplished using the rules laid out in the digital signatures page" (`documents.html:133-135`).
- Related R6 signature work later deprecates `Bundle.signature` and directs applications to Provenance-based signatures (`structuredefinition-Bundle.xml:657-666`, `signatures.html:430-455`). This likely explains why the literal `FHIR-46789` replacement text was not used, but it leaves the Jira implementation trail and documents page less explicit than either the Jira resolution or the current signature page.

### Document presentation and attested content

- Classification: semantic guidance.
- The presentation section was revised to state that alternate presentation order might not represent original attested content, that text of resources outside `Composition` and the subject resource is not attested content, and that the subject narrative should clearly identify the subject (`documents.html:143-172`). This traces mainly to `FHIR-15723` and `FHIR-39121`.

### Stylesheets, profiles, obligations, and endpoints

- Classification: mostly editorial/clarification, with existing normative language preserved.
- Stylesheet wording was corrected from "feed" to "Bundle" and plural agreement was fixed (`documents.html:180-207`).
- Profile and endpoint text received link/editorial cleanups (`documents.html:220-325`).
- Endpoint semantics remain materially the same: `/Bundle`, `/Composition`, `/Binary`, and transaction endpoint options are described, with added links and `i.e.`/`e.g.` punctuation.

## Source history

| Commit | Date | Subject | Page-specific effect/classification |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical/template: removes outer `div`. |
| `852d3b88396a84de8383222ad0fc71207fa81a44` | 2021-12-07 | Apply FHIR-20210 | Semantic correction: `Bundle.meta.lastUpdated` -> `Bundle.timestamp`. |
| `991b2cdaf0b31b7fc50153b930cd1c014e554f92` | 2022-08-25 | FHIR-15723 Problems with Documents guide | Substantive: supporting details, secondary references SHOULD, contained-resources caveat, attested-content clarification. |
| `0a729198e07df0fc13d938dd88810142dbabdc6b` | 2022-09-03 | Text updates for FHIR-36636 | Substantive/semantic: removes absolute immutability wording and adds update-policy guidance. |
| `39b42e9d93db1d28eb543e933761184fc90d2214` | 2022-09-03 | Updates to bundle search parameter expressions and text in documents.html for FHIR-31664 | Semantic scope note: documents are not unbounded/full-EHR data sets. |
| `7869daa79c3137caad5f3478787593344172ddfb` | 2022-09-03 | Fixed missing end tag. | Mechanical fix for the new Bulk Data paragraph. |
| `30c5d5f934984dbf392d563c3e48693061af5f1f` | 2022-09-04 | Updates for FHIR-33942, 17060, 8025, and 35830 | Documents hunk corresponds to `FHIR-35830` introduction/DocumentReference clarifications; other keys are mostly Bundle context. |
| `1c497f9eb0cf35409935688fdef380293a377c23` | 2022-10-07 | fixed some hyperlinks and a small text correction | Editorial/link cleanup: IHE XDS link and endpoint links. |
| `a8236bb81f35cbeee2cda2cf95d82063f4d44aba` | 2022-12-09 | Clarify rules around document links | Substantive: restructures "document bundle SHALL include only" list; stylesheet wording. |
| `d382fc3af52ab7607c6c8fead1f47cdf09be3562` | 2022-12-13 | fixing up broken links etc (links to build.fhir.org) | Link cleanup: Bulk Data link from https to http. |
| `d7563bf03921e97c6a4569038ec83ac7f9451688` | 2023-02-14 | FHIR-38933 Wording improvements | Editorial/semantic: non-clinical examples and readability. |
| `336f6adee7e632a0486a3514e1797d1bf4b6f574` | 2023-02-15 | FHIR-38927 Defining document as a "frozen" set of resources | Semantic: removes "frozen" from generic document definition but keeps frozen versions in instance text. |
| `c4fe4544a7649495fc716534537710a95bc7428b` | 2023-02-15 | FHIR-38929 Document Bundle missing introduction | Semantic: introduces FHIR document instance as `Bundle` type `document` starting with `Composition`. |
| `8fb0ca1ee552beebcb26f6cdc433f62ea56f4a20` | 2023-02-15 | FHIR-38932 Unclear definition of framework | Semantic: uses `CapabilityStatement.document` for conformance assertion. |
| `9ebe57e0ac4eeb8d376bf3e38af7d6a17851234f` | 2023-02-15 | FHIR-38934 Change section name 3.4.1 Document Content to 3.4.1 Document Structure | Section title change. |
| `df19c1dbb52209924eba91baa573e9140c5125ad` | 2023-02-15 | FHIR Specification FeedbackFHIR-38930 "Document immutability" is not the correct term | Editorial/semantic: removes "document immutability" terminology sentence. |
| `57c8d051a32fa9fa729af9cb9184f50e79953725` | 2023-06-27 | FHIR-39121 | Broad editorial pass: phrasing, dates grammar, presentation, profile paragraph. Some text remains grammatically rough. |
| `679444e282de7cb7d18d2837b2b46db62221cbc0` | 2023-09-19 | Update documents.html | Editorial grammar fix: "a all" -> "all". |
| `736523cda3b02579e307112bf1db369f79ec00cd` | 2025-03-04 | FHIR-43295 Clarify that document and message "must link" requirements are met through RESTful references | Substantive: graph references SHALL use `Reference.reference`, canonical, or URI. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Metadata/status: Normative table. |
| `f06748cde92aa18ad0830b9f43fbc39639d38026` | 2025-11-03 | FHIR-46789 Document signature | Substantive: removes attester/KeyInfo SHOULDs; generic link to digital signatures page. |
| `aec3a16f6006be381543368ecafb845554b913be` | 2025-11-03 | FHIR-40757 Using R5 extensions in R4 that make required fields obsolete. | Documents hunk changes "Provenance statements and a signature" to "Provenance statements including signatures"; commit title is not document-specific. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Editorial punctuation (`e.g.,`, `i.e.,`) across the page. |
| `32ee662cd81e588351a75de377307f9c4a5c1564` | 2025-11-04 | Merge branch 'master' into i.e.-e.g- | Merge entry; no page hunk in captured patch. |
| `e3fe9fdef25099c995e905af26b84a15734f81c4` | 2025-11-04 | FHIR-45507 Need more clarification around how 'url' references are handled | Substantive/partial: adds Graph-connected Bundles link; punctuation and exact Jira wording issue remains. |
| `87f87a8a0389df053a5217de019d2596933da10f` | 2025-11-06 | Merge branch 'master' into i.e.-e.g- | Merge entry; no page hunk in captured patch. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-20210` (Published, Persuasive, applied R5): says the document date should use `Bundle.timestamp` because `Bundle.meta.lastUpdated` is server-controlled and discarded/overwritten on create. Implemented exactly enough in `documents.html:128`.
- `FHIR-15723` (Published, Persuasive with Modification, compatible substantive): formal basis for the supporting-resource SHOULD language and attested-content clarification. The current source reflects the intended wording with later edits.
- `FHIR-36636` (Published, Not Persuasive with Modification, non-compatible): requested normative immutability; resolution rejected hard enforceability and added policy/update guidance. Current text reflects the softer policy approach.
- `FHIR-31664` (Published, Persuasive with Modification, compatible substantive): issue was mostly Bundle search parameters, but resolution explicitly requested a documents page note that FHIR Documents are not for unbounded/full-EHR data sets and should link to Bulk Data.
- `FHIR-35830` (Published, Persuasive with Modification): clarifies document introduction, removes FHIR IGs as an example, and uses `DocumentReference`. Current text contains those changes plus later examples.
- `FHIR-38933`, `FHIR-38927`, `FHIR-38929`, `FHIR-38932`, `FHIR-38934`, `FHIR-38930`: R5 ballot comments that explain the February 2023 text changes. All are Published and applied for R5.
- `FHIR-39121` (snapshot status "Resolved - change required", not done): broad editorial comments for Documents with Word attachments. Jira comment points to PR `https://github.com/HL7/fhir/pull/2951`; source commit `57c8d051...` applied a broad edit. I did not inspect the attachments, so I did not use this as standalone action evidence.
- `FHIR-43295` (Applied, Persuasive with Modification, compatible substantive, applied R6): clarifies document/message "must link" requirements are met through RESTful references. Critical comment: Elliot asked if the intent only required RESTful references for resources in the Bundle; Lloyd agreed and said outside-Bundle references could use other mechanisms and business-identifier references inside the Bundle could exist in addition.
- `FHIR-45507` (Applied, Persuasive with Modification, applied R6): asks for a new Bundle.notes section and for messaging/documents pages to point to it with "All document Bundles SHALL be a [fully-interconnected graph](link to above)." The documents page got only a "See Graph-connected Bundles" sentence inside the supporting-information list item.
- `FHIR-46789` (Applied, Persuasive with Modification, applied R6): says document-signature text was problematic/incomplete, especially the attester/KeyInfo/fullUri advice and ambiguity about whether `Bundle.signature` was recommended. Resolution says to remove the KeyInfo sentence and replace the first sentence with "If there is a need to have a digital signature on a Document Bundle, this may be accomplished using the `Bundle.signature` element following the rules laid out in the digital signatures page." The actual current documents page omits `Bundle.signature`.
- `FHIR-40757` is not a documents issue; the documents hunk in that commit is probably a collateral signature terminology change.
- `FHIR-44047` is broad punctuation cleanup and should not drive action except for concrete remaining punctuation defects.

### Other Jira issues found by community/source context

- Later signature-related issues (`FHIR-50934`, `FHIR-51099`, `FHIR-51112`, `FHIR-51133`, `FHIR-52810` etc.) appear in Security/FHIR-I minutes and Zulip as part of the R6 signature overhaul. I did not snapshot each because they mostly concern `signatures.html`, but they support the caveat that the `FHIR-46789` literal `Bundle.signature` replacement was likely superseded by later signature-page work.

### Context-only Jira hits not used for actions

- `FHIR-33942`, `FHIR-17060`, and `FHIR-8025` appear in a combined commit subject, but their Jira snapshots are Bundle/search/old-composition context rather than direct evidence for current documents page issues.
- `FHIR-39121` provides broad editorial background, but without inspecting attachments it should not be used to claim specific intent beyond the visible source patch and Jira comments.

## Zulip evidence

- `#implementers > immutable document bundle` (`bun run zulip:search snapshot implementers "immutable document bundle"`): discussion from 2022-03-24 to 2022-05-05. John Moehrke treated a document Bundle as a snapshot and created `FHIR-36636`; Elliot Silver pointed out the old language was non-normative and not absolutely black-and-white; Lloyd McKenzie said if a server stores/returns something other than the original document, it is a different document; Rick Geimer summarized the eventual approach that `Bundle.meta` and `Bundle.id` are server-controlled, `Bundle.identifier` is version-specific, and `Composition.identifier` is version-agnostic. This supports the current softer update-policy wording.
- `#implementers > Is lastUpdated required when submitting a FHIR document?` (`bun run zulip:search snapshot implementers "Is lastUpdated required when submitting a FHIR document?"`): Morten Ernebjerg identified the `Bundle.meta.lastUpdated` conflict; Grahame Grieve said the section was wrong now that `Bundle.timestamp` exists; Lloyd asked for a change request. This directly supports `FHIR-20210`.
- `#Security and Privacy > Provenance Signature` (`bun run zulip:search snapshot "Security and Privacy" "Provenance Signature"`): later 2025 discussion shows active design work around Provenance-based signatures for document Bundles. Grahame proposed embedded signatures as Provenance entries targeting `Bundle/[id]`, and Eric Haas tested document Bundle examples using Provenance signatures. This supports reading current R6 signature guidance as Provenance-based rather than `Bundle.signature`-based.
- `#IG creation > Signing Bundles` (`bun run zulip:search snapshot "IG creation" "Signing Bundles"`): on 2025-08-12, Hynek Kruik asked whether the recommended approach for digital signatures of document Bundles is to sign a Bundle or use Provenance; Eric Haas said the proposal was to move to Provenance in FHIR R6 and deprecate `Bundle.signature`; Grahame suggested documenting exactly that. This directly supports the `Bundle.signature` deprecation context.
- `#fhir/infrastructure-wg > Signature comments` (`bun run zulip:search snapshot fhir/infrastructure-wg "Signature comments"`): September 2025 thread says FHIR-I had taken the lead on signature updates in R6 and lists many follow-on signature tickets. It is background evidence that signature work was still moving after `FHIR-46789`.
- Zulip FTS searches for bare issue keys `FHIR-46789`, `FHIR-45507`, `FHIR-43295`, `FHIR-36636`, and `FHIR-20210` returned no visible hits in the default DB. Useful hits came from exact topic/phrase searches, not issue-key FTS.

## Confluence evidence

- FHIR-I WGM 202501 Virtual (`bun run confluence:search snapshot 281219681`): records `FHIR-46789` as "Will remove the SHOULD sentence", Persuasive with Modification, moved by John Moehrke / Eric Haas, 16-0-2. This supports that the workgroup's primary recorded decision in minutes was removal of the problematic SHOULD text, not necessarily the exact `Bundle.signature` replacement sentence.
- FHIR-I CC 2024-11-25 (`bun run confluence:search snapshot 288067657`): records discussion of `FHIR-46789`; Lloyd suggests removing the part of the sentence from "and the signature SHOULD contain a KeyInfo element"; Bas says not to lose content and the quoted language needs rewording; group waits for John to explain concerns. This explains the later persuasive-with-modification vote.
- Security WG 2025-06-30 (`bun run confluence:search snapshot 358255047`): lists many signature tickets including `FHIR-46789`; motion agrees FHIR-I takes lead on signature-related tickets with Security WG consultation, 9-0-0.
- Security WG 2025-07-14 (`bun run confluence:search snapshot 358258654`): says there was no update from FHIR-I on outstanding signature tickets. This is background; it does not directly contradict source.
- FHIR-I CC 2024-05-06 (`bun run confluence:search snapshot 239211981`): records `FHIR-43295` discussion: document page to clarify references SHALL use `Reference.reference`, canonical, or URI. This matches the March 2025 source change.
- FHIR-I CC 2024-06-03 (`bun run confluence:search snapshot 248710301`): records `FHIR-45507` as Persuasive, 8-0-0. The Jira snapshot has more detailed proposed wording than the minutes.
- FHIR-I WGM 202205 (`bun run confluence:search snapshot 101355607`): records `FHIR-36636` Not Persuasive with Modification, including the plan for broader feedback on Zulip.
- FHIR-I CC 2023-06-26 (`bun run confluence:search snapshot 175606781`): records `FHIR-39121` Persuasive with Modification and assignment to fix.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2019-01-23/24 | Zulip discussion | `#implementers > Is lastUpdated required when submitting a FHIR document?` | `Bundle.meta.lastUpdated` conflict identified; `Bundle.timestamp` proposed. |
| 2019-04-01 | Jira resolution | `FHIR-20210` | `Bundle.timestamp` correction approved. |
| 2021-12-07 | Source commit | `852d3b88396a84de8383222ad0fc71207fa81a44` | `Bundle.timestamp` text applied to documents page. |
| 2022-03-24 to 2022-05-05 | Zulip discussion | `#implementers > immutable document bundle` | Immutability/lifecycle debate; `FHIR-36636` created. |
| 2022-05-09/13 | Jira/workgroup | `FHIR-36636`; Confluence `101355607` | Not Persuasive with Modification; softer update-policy guidance chosen. |
| 2022-08-25 to 2022-09-04 | Source commits | `991b2c...`, `0a729...`, `39b42...`, `30c5...` | Major R5 document text updates applied. |
| 2023-01-09 to 2023-02-06 | Jira votes | `FHIR-38927`, `FHIR-38929`, `FHIR-38932`, `FHIR-38934`, `FHIR-38933` | R5 ballot clarifications approved. |
| 2023-02-14/15 | Source commits | `d7563...`, `336f6...`, `c4fe...`, `8fb0...`, `9ebe...`, `df19...` | R5 ballot clarifications applied. |
| 2023-06-26/27 | Confluence/source | `FHIR-39121`, commit `57c8d...` | Broad editorial pass approved and applied. |
| 2024-05-06 | Jira/minutes | `FHIR-43295`; Confluence `239211981` | RESTful reference clarification approved. |
| 2024-05-13/2024-06-03 | Jira/minutes | `FHIR-45507`; Confluence `248710301` | Graph-connected Bundle section and page pointers approved. |
| 2025-03-04 | Source commit | `736523cda3b02579e307112bf1db369f79ec00cd` | `FHIR-43295` applied to documents page. |
| 2025-06 to 2025-08 | Zulip/Confluence discussion | `#Security and Privacy > Provenance Signature`; `#IG creation > Signing Bundles`; Security minutes | Signature work shifts toward Provenance and `Bundle.signature` deprecation. |
| 2025-08-12 | Source commit | `9fe4e8ba2ec241ab35dc18046c102c38872e1d50` | `Bundle.signature` deprecated; signature page directs to Provenance signatures. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Documents page marked Normative in R6. |
| 2025-11-03 | Source commit | `f06748cde92aa18ad0830b9f43fbc39639d38026` | `FHIR-46789` applied to documents page, but with generic signature-page link rather than Jira's `Bundle.signature` wording. |
| 2025-11-04 | Source commit | `e3fe9fdef25099c995e905af26b84a15734f81c4` | `FHIR-45507` link to Graph-connected Bundles added to documents page. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/documents.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/documents.html" && echo "new exists"`
  - `wc -l` reported 330 old lines and 341 new lines.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/documents.html`
  - Saved locally during review as `/tmp/copilot-tool-output-1779293733079-qcn3td.txt`.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/documents.html`
  - Full patch capture: `git log --reverse --date=short --format='===COMMIT %H %ad %s===' -p --unified=5 ... -- source/documents.html > /tmp/documents-history.patch`.
- Jira:
  - Snapshotted all explicit keys into `/tmp/documents-jira-snapshots.md`.
  - Important reopen commands: `bun run jira:search snapshot FHIR-46789`, `bun run jira:search snapshot FHIR-45507`, `bun run jira:search snapshot FHIR-43295`, `bun run jira:search snapshot FHIR-36636`, `bun run jira:search snapshot FHIR-20210`, `bun run jira:search snapshot FHIR-15723`, `bun run jira:search snapshot FHIR-39121`.
- Zulip:
  - Search file: `/tmp/documents-zulip-searches.txt`.
  - Snapshots: `/tmp/documents-zulip-snapshots.md`.
  - Key commands:
    - `bun run zulip:search snapshot implementers "immutable document bundle"`
    - `bun run zulip:search snapshot "Security and Privacy" "Provenance Signature"`
    - `bun run zulip:search snapshot "IG creation" "Signing Bundles"`
    - `bun run zulip:search snapshot implementers "Is lastUpdated required when submitting a FHIR document?"`
  - Failed/low-yield searches: bare issue-key FTS for `FHIR-46789`, `FHIR-45507`, `FHIR-43295`, `FHIR-36636`, and `FHIR-20210` had no visible hits; phrase/topic searches were useful.
- Confluence:
  - Search file: `/tmp/documents-confluence-searches.txt`.
  - Snapshots: `/tmp/documents-confluence-snapshots.md`.
  - Key commands:
    - `bun run confluence:search refs jira FHIR-46789`
    - `bun run confluence:search snapshot 281219681`
    - `bun run confluence:search snapshot 288067657`
    - `bun run confluence:search snapshot 358255047`
    - `bun run confluence:search snapshot 239211981`
    - `bun run confluence:search snapshot 248710301`
  - Failed/low-yield searches: Confluence found no references/results for `FHIR-20210` and `FHIR-15723`; `Graph-connected Bundles` FTS was empty. This lowers confidence for meeting-process context on those specific changes, but Jira/source/Zulip were sufficient.
