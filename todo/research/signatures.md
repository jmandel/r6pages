# signatures research appendix

## Scope and coverage

- Page reviewed: `source/signatures.html` (`signatures`).
- Older baseline: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer target: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: `source/signatures.html` exists in both trees. The page is modified, not added/deleted/renamed.
- Full newer page read end-to-end: 715 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:1-715`.
- Source history scope: 12 commits touched `source/signatures.html` between the old and new commits. Explicit Jira keys in page history: `FHIR-33040`, `FHIR-44617`, `FHIR-44637`, `FHIR-44047`, `FHIR-50934`.
- Community searches performed:
  - Jira snapshots for explicit keys: `FHIR-33040`, `FHIR-44617`, `FHIR-44637`, `FHIR-44047`, `FHIR-50934`.
  - Additional Jira snapshots/searches for related signature/canonicalization issues: `FHIR-51099`, `FHIR-51115`, `FHIR-51143`, `FHIR-52814`, `FHIR-54063`, `FHIR-18443`, `FHIR-47197`.
  - Zulip snapshots for `#Security and Privacy > Bundle.signature`, `#Security and Privacy > Signing and narrative`, `#Security and Privacy > Digital Signatures`, `#Security and Privacy > Provenance Signature`, and `#IG creation > Signing Bundles`.
  - Confluence snapshots for Security/FHIR-I minutes that mention the same Jira keys or signature decisions, especially page IDs `204281074`, `358264334`, `358886068`, `404100067`, `358254730`, and `358876459`.
- Caveats:
  - Initial Zulip FTS searches for unquoted Jira keys failed because hyphenated keys were parsed incorrectly; searches were retried with quoted phrases such as `"FHIR-50934"`.
  - Several active/later issues (`FHIR-52814`, `FHIR-54063`, `FHIR-51115`) post-date or remain open relative to applied page text, so they are evidence of current risk or uncertainty rather than proof that an R6 ballot4 change was wrong.
  - The actionable file intentionally excludes broad mechanical history and context-only search hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| source | R4 baseline page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/signatures.html:21-45` | Short Trial Use page recommending W3C/JWS signatures and Provenance detached signatures. |
| source | R6 page title/status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:21-44` | Page is now `Signatures`, Normative, owned by Security. |
| source | Canonicalization overview | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:177-257` | Defines canonicalization machinery for digital signatures. |
| source | Canonicalization variants | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:260-310` | Main normative table changed by `FHIR-50934`; contains current ambiguities/defects. |
| source | JWS rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:349-374` | Introduces JWS profile, JAdES commitments, `canon` header, and long-term-signature recommendation. |
| source | XML Digital Signature rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:377-393` | Current text uses `application/pkcs7-signature` for XML Digital Signature. |
| source | Signature.sigFormat datatype text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/signature.xml:720-721` | Related spec text says XML DigSig uses `application/signature+xml`. |
| source | Provenance signature guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:403-425` | Establishes Provenance as the signature carrier. |
| source | Bundle signing rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:427-444` | Current embedded-Provenance rules and removal rule for bundle signatures. |
| source | Bundle.signature deprecation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:451-454` | Deprecates `Bundle.signature` and recommends Provenance resources instead. |
| source | Invalid/unreworked worked example note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:457-525` | Page admits an example is based on `Bundle.signature` and needs rework. |
| source | JWS Bundle.signature example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:528-644` | Only detailed JWS example still uses deprecated `Bundle.signature`. |
| commit | `0516aa463bca3f2e3d458cd6d33f2ded0d6c8517` | `https://github.com/HL7/fhir/commit/0516aa463bca3f2e3d458cd6d33f2ded0d6c8517` | Commit message says `also FHIR-33040`; major early rewrite toward actionable guidance. |
| commit | `9f942f4729bcb5a897c7ca47794151db8ffd3317` | `https://github.com/HL7/fhir/commit/9f942f4729bcb5a897c7ca47794151db8ffd3317` | `FHIR-44617`; adds SMART Health Cards signature protocol reference. |
| commit | `a91a1bb796a0b308884344f13354dcab0092a7de` | `https://github.com/HL7/fhir/commit/a91a1bb796a0b308884344f13354dcab0092a7de` | `FHIR-44637`; makes page/signature content normative. |
| commit | `dcf53a8af6d730f886918f45af2510e990a986eb` | `https://github.com/HL7/fhir/commit/dcf53a8af6d730f886918f45af2510e990a986eb` | Large 2025 rewrite of signatures section. |
| commit | `9fe4e8ba2ec241ab35dc18046c102c38872e1d50` | `https://github.com/HL7/fhir/commit/9fe4e8ba2ec241ab35dc18046c102c38872e1d50` | Deprecates `Bundle.signature` and adjusts page. |
| commit | `66dd40468918876ef3bd89f6be54b58c5f659d98` | `https://github.com/HL7/fhir/commit/66dd40468918876ef3bd89f6be54b58c5f659d98` | `FHIR-50934`; changes canonicalization variants for recursive Narrative omission. |
| PR | Security 2024 march | `https://github.com/HL7/fhir/pull/3054` | Contains `FHIR-44617` and `FHIR-44637` page commits; merged 2024-03-27. |
| PR | 2025 08 gg signatures | `https://github.com/HL7/fhir/pull/3589` | Contains 2025 signature rewrite/deprecation commits; merged 2025-08-20. |
| PR | 2025 12 gg fhir i sweep | `https://github.com/HL7/fhir/pull/4000` | Contains `FHIR-50934`; merged 2025-12-16. |
| Jira | `FHIR-33040` | `https://jira.hl7.org/browse/FHIR-33040`; reopen snapshot: `bun run jira:search snapshot FHIR-33040` | Asked for digital-signature guidance to be more actionable; links to first large post-R4 expansion. |
| Jira | `FHIR-44617` | `https://jira.hl7.org/browse/FHIR-44617`; reopen snapshot: `bun run jira:search snapshot FHIR-44617` | Requested SMART Health Cards signature-protocol link/text. |
| Jira | `FHIR-44637` | `https://jira.hl7.org/browse/FHIR-44637`; reopen snapshot: `bun run jira:search snapshot FHIR-44637` | Made Signature and `Bundle.signature` normative with a balloter note. |
| Jira | `FHIR-50934` | `https://jira.hl7.org/browse/FHIR-50934`; reopen snapshot: `bun run jira:search snapshot FHIR-50934` | Main source for recursive narrative-exclusion change and breaking-change ballot note. |
| Jira | `FHIR-51099` | `https://jira.hl7.org/browse/FHIR-51099`; reopen snapshot: `bun run jira:search snapshot FHIR-51099` | Request for `Bundle.signature` cardinality change resolved by deprecating `Bundle.signature` and using Provenance. |
| Jira | `FHIR-52814` | `https://jira.hl7.org/browse/FHIR-52814`; reopen snapshot: `bun run jira:search snapshot FHIR-52814` | Open issue saying document canonicalization and signature/Provenance removal are unclear. |
| Jira | `FHIR-54063` | `https://jira.hl7.org/browse/FHIR-54063`; reopen snapshot: `bun run jira:search snapshot FHIR-54063` | Open issue about real-world Finnish Kanta use of `Bundle.signature` and need for dialogue. |
| Zulip | Bundle.signature | `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Bundle.2Esignature`; reopen snapshot: `bun run zulip:search snapshot "Security and Privacy" "Bundle.signature"` | Rationale and objections for deprecating `Bundle.signature` in favor of Provenance. |
| Zulip | Signing and narrative | `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Signing.20and.20narrative`; reopen snapshot: `bun run zulip:search snapshot "Security and Privacy" "Signing and narrative"` | Discussion leading to `FHIR-50934`; participants noted algorithms were poorly defined. |
| Zulip | Provenance Signature | `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Provenance.20Signature`; reopen snapshot: `bun run zulip:search snapshot "Security and Privacy" "Provenance Signature"` | Discusses multi-target signing, target/signature coverage, and embedded Provenance questions. |
| Zulip | IG creation / Signing Bundles | `https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/Signing.20Bundles`; reopen snapshot: `bun run zulip:search snapshot "IG creation" "Signing Bundles"` | Shows IG Publisher currently using `Bundle.signature` and questions about moving to Provenance. |
| Confluence | Security WGM 202401 | Page ID `204281074` | Motion to make Signature and `Bundle.signature` normative for `FHIR-44637`. |
| Confluence | FHIR-I 2025-07-28 | Page ID `358264334` | Signature updates, open issues, and proposed deprecation direction discussed. |
| Confluence | FHIR-I 2025-08-04 | Page ID `358886068` | Motion endorsed signature changes and `FHIR-51099` resolution to deprecate `Bundle.signature`. |
| Confluence | FHIR-I 2025-12-01 | Page ID `404100067` | `FHIR-50934` decision: all Narrative elements recursively affected; noted limited real-world use and non-normative R5 processes. |
| Confluence | FHIR-I 2025-06-16 | Page ID `358254730` | Early `FHIR-50934` discussion: existing canonicalization only removed `Resource.text`; Security/Privacy Zulip threads were active. |
| local log | Commit patches | `/tmp/signatures-commit-shows.txt` | Local saved output from selected `git show --stat --patch` commands. |
| local log | Community searches | `/tmp/signatures-community-searches.txt`, `/tmp/signatures-followup-snapshots.txt` | Local saved Jira/Zulip/Confluence search and snapshot output. |
| local log | PR lookup | `/tmp/signatures-pr-lookup.txt` | Local saved `gh api /repos/HL7/fhir/commits/<sha>/pulls` output for key commits. |

## Change summary

### Page identity, status, and ownership

- Classification: metadata/template/navigation plus substantive status change.
- R4: title token was `FHIR Documents`; visible heading was `Digital Signatures`; Standards Status was Trial Use; owning WG was FHIR (`old source/signatures.html:21-22`).
- R6 ballot4: title and heading are `Signatures`; Standards Status is Normative; owning WG is Security (`new source/signatures.html:21-27`).
- Source history and Confluence tie the normative-status step to `FHIR-44637` and Security WGM 202401.

### Scope expansion from brief recommendation to detailed normative profile

- Classification: substantive/normative and semantic guidance.
- R4 had three short paragraphs recommending W3C XML Signatures or JWS, Provenance for detached signatures, and optional enveloped document signatures/IHE DSG (`old source/signatures.html:25-40`).
- R6 adds long explanatory and normative content: use cases, electronic vs digital signatures, canonicalization, JWS/XML signature rules, Provenance signatures, Bundle signing, `Bundle.signature` deprecation, and worked examples (`new source/signatures.html:30-715`).
- This expansion aligns with `FHIR-33040`, which asked for more actionable signature guidance; however, later unresolved issues show several details remain in flux.

### Canonicalization methods and variants

- Classification: substantive/normative.
- R6 defines base canonicalization URIs `http://hl7.org/fhir/canonicalization/{fmt}` and variants `#data`, `#static`, `#narrative`, and `#document` (`new source/signatures.html:177-310`).
- `FHIR-50934` changed variant semantics so `#data` and related variants recursively omit all `Narrative` elements, not only `Resource.text`. The page now includes a ballot note that says R6 changed the algorithm in a breaking way for all variant algorithms (`new source/signatures.html:316-325`).
- Potentially actionable defects remain:
  - `#narrative` says "any bundle entries are removed" (`new source/signatures.html:293`), while `FHIR-50934` appears to say internal references to bundle entries are removed, and the next paragraph says path nodes including `Bundle.entry` are retained to reach narrative (`new source/signatures.html:303-307`).
  - `#document` says to omit `Bundle.metadata` (`new source/signatures.html:299`), but FHIR uses `Bundle.meta`; `FHIR-52814` also says the document canonicalization/signature-removal rules are unclear.

### JWS and XML signature rules

- Classification: substantive/normative and semantic guidance.
- R6 adds JWS requirements for `Signature.data`, `Signature.sigFormat`, `Signature.targetFormat`, JAdES `srCms`, optional `canon` protected header, signer `id`, and JAdES-B-LT (`new source/signatures.html:349-374`).
- R6 adds XML Digital Signature requirements (`new source/signatures.html:377-393`).
- Potentially actionable defect: XML Digital Signature section says `Signature.sigFormat` is `application/pkcs7-signature` (`new source/signatures.html:384`), while the Signature datatype says XML DigSig uses `application/signature+xml` (`source/datatypes/signature.xml:720-721`) and examples use `application/signature+xml`.

### Provenance and Bundle signatures

- Classification: substantive/normative and semantic guidance.
- R6 states FHIR resources are signed through `Provenance.signature` (`new source/signatures.html:403-425`).
- R6 adds rules for signing Bundles, including detached vs enveloping approaches and special rules for embedded signing Provenance (`new source/signatures.html:427-444`).
- `FHIR-51099`, FHIR-I minutes, and Zulip discussion explain the decision to deprecate `Bundle.signature` rather than change it to support multiple signatures.
- The current page deprecates `Bundle.signature` (`new source/signatures.html:451-454`), but still contains an invalid/unreworked example and a detailed JWS example that signs via `Bundle.signature` (`new source/signatures.html:457-644`).

### Examples

- Classification: example change with reader-facing risk.
- R4 did not include worked examples on this page.
- R6 includes a not-yet-valid example explicitly marked as needing rework (`new source/signatures.html:457-525`) and a detailed JWS detached-signature example still based on `Bundle.signature` (`new source/signatures.html:528-644`).
- The examples are currently a major source of actionable concern because the page's normative recommendation is now Provenance-based signing.

### Editorial and mechanical churn

- Classification: editorial/mechanical/noise unless noted above.
- Multiple commits changed general page/template includes and surrounding boilerplate.
- `FHIR-44047` is a punctuation/style cleanup ("e.g."/"i.e.") and has no page-specific actionable consequence.
- Concrete current editorial defects exist in normative sections, including `seperate`, `occurrances`, `Composition.section.text exist`, `the the`, `avilable`, `Provenance.targets`, and `if it it` (`new source/signatures.html:251,281,305,427-439,624`).

## Source history

| Commit | Date | Subject | Page-specific meaning |
|---|---:|---|---|
| `44f0553bc0814a45c53cca3f0d84889af0f9668c` | 2021-02-05 | Fix up broken links | Link maintenance/mechanical. |
| `28534f1bbb6f1e8fae19302a40571f77a3675423` | 2021-11-11 | ongoing work with provisionally moving pages around | Broad restructuring/mechanical. |
| `0516aa463bca3f2e3d458cd6d33f2ded0d6c8517` | 2022-12-16 | also FHIR-33040 | Early substantial expansion of digital-signature guidance. |
| `4ed29761397dc038c2fb254ef179f0e864a21ed8` | 2023-02-19 | FHIR-41198 | No clear actionable page-specific issue found for signatures in this review. |
| `9f942f4729bcb5a897c7ca47794151db8ffd3317` | 2024-03-20 | FHIR-44617 - Update FHIR Security pages and add link to SMART HC signature | Adds SMART Health Cards signature protocol mention; in PR #3054. |
| `a91a1bb796a0b308884344f13354dcab0092a7de` | 2024-03-21 | FHIR-44637 - Make Signature and Bundle.signature normative | Changes standards status to Normative; in PR #3054. |
| `53f8ec3f85f993e1901b12b69446256fab64ff9d` | 2025-01-30 | release notes | Mechanical/release-note context. |
| `dcf53a8af6d730f886918f45af2510e990a986eb` | 2025-06-29 | rewrite signatures section | Major rewrite: canonicalization, JWS/XML rules, Provenance/Bundle guidance; in PR #3589. |
| `ba6310c25b83d4698df1a27ad0be4cf9fec2f92f` | 2025-06-29 | adjust words around xml whitespace | Narrows wording for XML whitespace/canonicalization. |
| `593fdb24f3fde7d558e70d09e75f54c6b21e2ff1` | 2025-07-20 | add JWS example | Adds detailed JWS example; pre-deprecation. |
| `a786e43f4b8aea34293dd868712739ca77e1e556` | 2025-07-31 | more work on signatures | Large follow-up edits to signature guidance/examples; in PR #3589. |
| `9fe4e8ba2ec241ab35dc18046c102c38872e1d50` | 2025-08-12 | deprecate Bundle.signature and adjustments to digital signatures page | Deprecates `Bundle.signature`; in PR #3589. |
| `887bc2383f778b3699c37652057debce6a05d8ca` | 2025-09-05 | FHIR-44047 | Punctuation/editorial cleanup only. |
| `66dd40468918876ef3bd89f6be54b58c5f659d98` | 2025-12-15 | FHIR-50934 Signatures should allow exclusion of section.text in Compositions | Applies recursive Narrative-exclusion change; in PR #4000. |
| `cf2d138d52048d9f7fb0d3a18ba94d8f9f585e82` | 2025-12-15 | correction | Small correction after `FHIR-50934`; no separate rationale found. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-33040` (`https://jira.hl7.org/browse/FHIR-33040`; snapshot command `bun run jira:search snapshot FHIR-33040`)
  - Requested clearer/actionable digital-signature guidance. The associated source history is consistent with the page's expansion from the R4 short note to R6 detailed guidance.
  - Contextual for broad expansion; not itself an actionable current defect.

- `FHIR-44617` (`https://jira.hl7.org/browse/FHIR-44617`; snapshot command `bun run jira:search snapshot FHIR-44617`)
  - Requested update to FHIR Security pages and a link to SMART Health Cards signatures. Source commit `9f942f4729bcb5a897c7ca47794151db8ffd3317` changes `source/signatures.html`; PR #3054.
  - No mismatch found in current page relative to this issue.

- `FHIR-44637` (`https://jira.hl7.org/browse/FHIR-44637`; snapshot command `bun run jira:search snapshot FHIR-44637`)
  - Request/resolution to make Signature and `Bundle.signature` normative and provide a balloter note. Source commit `a91a1bb796a0b308884344f13354dcab0092a7de`; PR #3054.
  - Later `FHIR-51099`/PR #3589 changes the direction for `Bundle.signature` by deprecating it.

- `FHIR-44047` (`https://jira.hl7.org/browse/FHIR-44047`; snapshot command `bun run jira:search snapshot FHIR-44047`)
  - Punctuation cleanup for "e.g."/"i.e."; source commit `887bc2383f778b3699c37652057debce6a05d8ca`.
  - Context-only; no action.

- `FHIR-50934` (`https://jira.hl7.org/browse/FHIR-50934`; snapshot command `bun run jira:search snapshot FHIR-50934`)
  - Issue: signatures should allow exclusion of `section.text` in Compositions.
  - Important comments:
    - Existing algorithms only removed `DomainResource.text`, not `Composition.section.text`.
    - Early comments raised concern that changing existing normative algorithms would be problematic and might require a new algorithm.
    - Final resolution was applied as "Persuasive with Modification" and explicitly marked non-compatible. It changes all variant algorithms to recursively affect all Narrative elements.
  - Source commit `66dd40468918876ef3bd89f6be54b58c5f659d98` applies the change and ballot note.
  - Actionable follow-up is not that the issue was ignored; it was applied. The risk is that some applied wording appears broader/less precise than the resolution and includes current ambiguities.

### Other Jira issues that plausibly explain changed text or current risks

- `FHIR-51099` (`https://jira.hl7.org/browse/FHIR-51099`; snapshot command `bun run jira:search snapshot FHIR-51099`)
  - Original request: allow `Bundle.signature` cardinality `0..*`.
  - Resolution/discussion: instead deprecate `Bundle.signature` and use separate `Provenance` resources, because Provenance is more capable for multiple signatures.
  - Explains commit `9fe4e8ba2ec241ab35dc18046c102c38872e1d50` and current `Bundle.signature` deprecation.
  - Current page issue: examples have not fully followed this decision.

- `FHIR-52814` (`https://jira.hl7.org/browse/FHIR-52814`; snapshot command `bun run jira:search snapshot FHIR-52814`)
  - Open issue: document canonicalization rules, especially around `#document`, embedded Provenance, and removing signatures, are not clear enough.
  - This is directly relevant to current lines `source/signatures.html:298-310` and `:427-444`.
  - Supports an actionable evidence gap/clarification need.

- `FHIR-54063` (`https://jira.hl7.org/browse/FHIR-54063`; snapshot command `bun run jira:search snapshot FHIR-54063`)
  - Open issue: Finnish Kanta specifications use `Bundle.signature`; the deprecation may affect real-world/regulatory implementations and may need dialogue.
  - This does not prove the deprecation is wrong, but it is important context for conscious triage and migration guidance.

- `FHIR-51115` (`https://jira.hl7.org/browse/FHIR-51115`; snapshot command `bun run jira:search snapshot FHIR-51115`)
  - Triaged issue about JSON canonicalization / RFC8785. Current page references RFC8785, but the issue remains open/triaged. Treat as background unless reviewing canonicalization in depth.

- `FHIR-51143` (`https://jira.hl7.org/browse/FHIR-51143`; snapshot command `bun run jira:search snapshot FHIR-51143`)
  - CDEX-related signature-page adjustments. Provides implementation context but did not surface a distinct current mismatch in this page review.

- `FHIR-18443` (`https://jira.hl7.org/browse/FHIR-18443`; snapshot command `bun run jira:search snapshot FHIR-18443`)
  - Historical context about excluding signature elements from signature calculation. Useful background for current removal rules but not an independent action item.

- `FHIR-47197` (`https://jira.hl7.org/browse/FHIR-47197`; snapshot command `bun run jira:search snapshot FHIR-47197`)
  - Request to include signatures in common resources instead of Provenance; resolved no change. Related context for the Provenance-vs-direct-signature decision but not actionable alone.

### Context-only Jira hits not elevated

- Keyword matches around generic "signature", "canonicalization", or "Bundle" that did not discuss this page's changed text were not included in the action file.
- `FHIR-44047` is history only.

## Zulip evidence

### `#Security and Privacy > Bundle.signature`

- Snapshot: `bun run zulip:search snapshot "Security and Privacy" "Bundle.signature"`.
- URL: `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Bundle.2Esignature`.
- Key evidence:
  - Older discussion documented long-standing concerns that signatures embedded in `Bundle.signature` can create exclusion/coverage blind spots.
  - 2025-07-29: Grahame reported FHIR-I considered options and chose to deprecate `Bundle.signature` and always use Provenance.
  - 2025-07-30: Lloyd explained the rationale: avoid two places for signatures and use Provenance's better tooling for multiple signatures.
  - 2025-08-06: John objected that the Provenance approach had much less experimentation/prototyping and is more complicated.
- Significance: supports the deprecation rationale, but also explains why incomplete examples/migration guidance matter.

### `#Security and Privacy > Signing and narrative`

- Snapshot: `bun run zulip:search snapshot "Security and Privacy" "Signing and narrative"`.
- URL: `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Signing.20and.20narrative`.
- Key evidence:
  - 2025-06-18: Gino asked how narrative modifications interact with `#data`.
  - John agreed the algorithms were poorly defined and linked the discussion to `FHIR-50934`.
  - Grahame later grouped related tickets and proposed a block resolution.
- Significance: supports `FHIR-50934` and shows that narrative/canonicalization wording was actively problematic, not merely editorial.

### `#Security and Privacy > Provenance Signature`

- Snapshot: `bun run zulip:search snapshot "Security and Privacy" "Provenance Signature"`.
- URL: `https://chat.fhir.org/#narrow/stream/179247-Security-and-Privacy/topic/Provenance.20Signature`.
- Key evidence:
  - Participants discussed how multi-target JSON signatures should assemble canonicalized resources, whether arrays are used, XML vs JSON mixed content, and what `Provenance.target` means relative to signature coverage.
  - Eric proposed JSON array ordering by `Provenance.target`; Grahame asked for a standards reference; Eric said there was no external guidance ("source is me").
  - 2025-08-06/07: John raised concerns that `Provenance.target` and the signature's actual covered content were not necessarily equal, and asked how multiple embedded signatures/counter-signatures are handled.
  - Grahame responded that the revised page removes all signature-type Provenance resources when checking a signature, and counter-signing must be indicated directly in Provenance targets.
- Significance: helps explain current page conventions as newly specified FHIR rules rather than externally standardized practice. It also supports the need for clear current wording around embedded Provenance removal.

### `#IG creation > Signing Bundles`

- Snapshot: `bun run zulip:search snapshot "IG creation" "Signing Bundles"`.
- URL: `https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/Signing.20Bundles`.
- Key evidence:
  - 2025-06-13: IG Publisher signing flow used `Bundle.signature`.
  - 2025-08-12: after page changes were in progress, Hynek asked whether recommended document-bundle signing is via Bundle or Provenance. Eric said IG Builder was currently using `Bundle.signature`; proposal was to move to Provenance in R6 and deprecate `Bundle.signature`; Grahame said support for Provenance signing was planned but timing uncertain.
- Significance: concrete implementation/migration context for the current mismatch between deprecation guidance and examples/tooling.

## Confluence evidence

- Security WGM 202401, page ID `204281074`
  - Records motion to make Signature and `Bundle.signature` normative and provide a balloter note; references `FHIR-44637`.
  - Supports source commit `a91a1bb796a0b308884344f13354dcab0092a7de`.

- FHIR-I 2025-06-16, page ID `358254730`
  - Early `FHIR-50934` discussion: existing canonicalization only removed `Resource.text`, so `Composition.section.text` was included; Security/Privacy Zulip discussion was active.
  - Supports later `FHIR-50934` change and highlights why wording precision matters.

- Security WG 2025-06-16, page ID `358876459`
  - Related Security discussion around signature/narrative concerns.
  - Context for cross-WG review.

- FHIR-I 2025-07-28, page ID `358264334`
  - Grahame presented signature updates, canonicalization, worked JWS examples, open issues, and a proposed move toward Provenance over `Bundle.signature`.
  - Supports that the R6 rewrite was still being refined during ballot-prep.

- FHIR-I 2025-08-04, page ID `358886068`
  - FHIR-I endorsed signature changes for ballot and resolved `FHIR-51099` persuasive with modification: deprecate `Bundle.signature`.
  - Supports commit `9fe4e8ba2ec241ab35dc18046c102c38872e1d50`.

- FHIR-I 2025-12-01, page ID `404100067`
  - `FHIR-50934` discussion: agreed all Narrative elements are recursively affected; noted little/no real-world use and that canonicalization processes were non-normative in R5; motion 6-0-0 persuasive with modification.
  - Supports commit `66dd40468918876ef3bd89f6be54b58c5f659d98` and the ballot note.

## Timeline

| Date | Clock | Evidence | Meaning |
|---:|---|---|---|
| 2019-10-30 | publication boundary | R4 4.0.1 commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` | Baseline page is short, Trial Use, and mostly non-prescriptive. |
| 2022-12-16 | source commit | `0516aa463bca3f2e3d458cd6d33f2ded0d6c8517` | Early expansion associated with `FHIR-33040`. |
| 2024-01 | WG decision | Confluence page `204281074` | Security WGM motion for `FHIR-44637`, making Signature and `Bundle.signature` normative. |
| 2024-03-20 | source commit | `9f942f4729bcb5a897c7ca47794151db8ffd3317` | Applies `FHIR-44617` SMART Health Cards signature reference. |
| 2024-03-21 | source commit | `a91a1bb796a0b308884344f13354dcab0092a7de` | Applies `FHIR-44637` normative status. |
| 2024-03-27 | PR merge | PR #3054 | Merges Security 2024 March updates. |
| 2025-06-13 | Zulip/tooling discussion | `#IG creation > Signing Bundles` | IG Publisher signing flow uses `Bundle.signature`. |
| 2025-06-16 | WG discussion | Confluence pages `358254730`, `358876459` | `FHIR-50934`/narrative signing problem discussed. |
| 2025-06-18 | Zulip discussion | `#Security and Privacy > Signing and narrative` | Participants agree algorithms are poorly defined around narrative. |
| 2025-06-29 | source commit | `dcf53a8af6d730f886918f45af2510e990a986eb` | Major signature-page rewrite. |
| 2025-07-20 | source commit | `593fdb24f3fde7d558e70d09e75f54c6b21e2ff1` | Adds JWS example. |
| 2025-07-28 | WG discussion | Confluence page `358264334` | Signature updates/deprecation direction discussed. |
| 2025-07-29 to 2025-08-07 | Zulip discussion | `#Security and Privacy > Bundle.signature`; `#Security and Privacy > Provenance Signature` | Deprecation rationale, Provenance complexity, target/coverage questions. |
| 2025-08-04 | WG decision | Confluence page `358886068` | Endorses signature changes and `FHIR-51099` deprecate-`Bundle.signature` resolution. |
| 2025-08-12 | source commit | `9fe4e8ba2ec241ab35dc18046c102c38872e1d50` | Applies `Bundle.signature` deprecation wording. |
| 2025-08-20 | PR merge | PR #3589 | Merges 2025 signature rewrite/deprecation. |
| 2025-12-01 | WG decision | Confluence page `404100067` | `FHIR-50934` final decision for recursive Narrative omission. |
| 2025-12-15 | source commit | `66dd40468918876ef3bd89f6be54b58c5f659d98` | Applies `FHIR-50934` change and breaking-change note. |
| 2025-12-16 | PR merge | PR #4000 | Merges `FHIR-50934` sweep. |
| After applied changes | later/open Jira | `FHIR-52814`, `FHIR-54063`, `FHIR-51115` | Current open issues indicate remaining ambiguity/impact rather than closed rationale. |

## Evidence log

- Confirmed page exists in both source trees:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/signatures.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/signatures.html" && echo "new exists"`
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/signatures.html`
  - Established the R4-to-R6 page expansion and main content changes.
- Reviewed page-specific history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/signatures.html`
  - Selected patches saved in `/tmp/signatures-commit-shows.txt`.
- Looked up PRs for key commits:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls`; output saved in `/tmp/signatures-pr-lookup.txt`.
- Searched current/old page for explicit Jira keys:
  - `rg "FHIR-[0-9]+"` over both `source/signatures.html` files; no embedded page-body Jira keys found.
- Jira:
  - Used `bun run jira:search snapshot <KEY>` for explicit and related keys listed above.
  - Used exact phrase/topic searches for `Bundle.signature`, canonicalization, narrative, and signatures; only plausible same-concept hits were elevated.
- Zulip:
  - Initial unquoted searches such as `bun run zulip:search fts FHIR-50934 --limit 20` failed due hyphen parsing; retried with quoted phrases such as `bun run zulip:search fts "\"FHIR-50934\"" --limit 20`.
  - Snapshots listed above were used for direct evidence.
- Confluence:
  - Used `bun run confluence:search refs jira <KEY>`, `bun run confluence:search fts "<phrase>" --limit 20`, and `bun run confluence:search snapshot <PAGE_ID>` for minutes/agendas.
- Read full newer page:
  - `wc -l ".../source/signatures.html"` showed 715 lines.
  - Read chunks covering `1-715`.
- Cross-check searches:
  - `rg "application/pkcs7-signature|application/signature\\+xml|Signature.sigFormat|sigFormat"` established the current page/datatype mismatch for XML Digital Signature media type.
  - `rg "Bundle.signature|Provenance.targets|section.text exist|occurrances|avilable|seperate|if it it"` established current page locators for actionable wording/editorial defects.
