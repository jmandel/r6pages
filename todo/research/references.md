# references research appendix

## Scope and coverage

- Page path: `source/references.html`.
- Old version/tree: R4 `4.0.1`, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/tree: R6 ballot4 `6.0.0-ballot4`, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees. R4 source has 674 lines; R6 ballot4 source has 926 lines.
- Direct diff: `1 file changed, 392 insertions(+), 140 deletions(-)`.
- Newer page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:1-926`.
- Source history: 61 commits touched `source/references.html` between the two boundary commits.
- Explicit Jira keys found in commit subjects/patches include: FHIR-31582, FHIR-29319, FHIR-19931, FHIR-19526, FHIR-26667, FHIR-29634, FHIR-33008, FHIR-30694, FHIR-30371, FHIR-20398, FHIR-26386, FHIR-30696, FHIR-26666, FHIR-28411, FHIR-34405, FHIR-34345, FHIR-25408, FHIR-33022, FHIR-25431, FHIR-27920, FHIR-34099, FHIR-39715, FHIR-39132, FHIR-39176, FHIR-38957, FHIR-40468, FHIR-47467, FHIR-50120, FHIR-50574, FHIR-40955, FHIR-52895, FHIR-48422, FHIR-44047, and FHIR-49655.
- Searches performed: Jira snapshots for the main explicit keys; Jira phrase searches for distinctive changed text; corrected Zulip key searches and snapshots for canonical-version and alternate-reference threads; Confluence refs/FTS searches and snapshots for the main FHIR-I minutes pages.
- Caveats: initial unquoted Zulip FTS searches for Jira keys such as `FHIR-52895` failed because the hyphen was parsed by SQLite FTS; the searches were rerun as quoted terms. Some broad Jira/Confluence hits such as package-source extension follow-ups are context only unless tied to a concrete page defect.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:1-926` | Full current page source reviewed end-to-end. |
| Source | Reference constraints | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:81-90` | Adds resource-only rule for `Reference.type`. |
| Source | Literal-reference regex | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:145-156` | Regex now allows optional contained-resource fragment. |
| Source | Logical-reference aggregation note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:260-264` | Current prose is malformed; related to FHIR-26386. |
| Source | Additional References | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:304-330` | New R6 guidance from FHIR-48422; contains a stray quote and later search-behavior follow-up. |
| Source | Canonical version matching | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:385-472` | Major new semantic/normative guidance; subject of FHIR-52895 and later FHIR-55991. |
| Source | Package-source link and manifest text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:399-416` | Contains package-first `SHALL`, manifest `SHALL`, typo, and broken package-source URL. |
| Source | Canonical resources dangling paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:474-486` | Paragraph "In addition, some types of Additional Resources" is incomplete. |
| Source | Contained-resource XPath | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:721-727` | Intended FHIR-39715 XPath fix appears malformed in the current page. |
| Source | Contained-resource rule bullets | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:734-754` | Incorporates FHIR-33008 and FHIR-34345 changes. |
| Source | CodeableReference section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:840-895` | New datatype narrative and constraints. |
| Commit | FHIR-33008 | `398042d0fa7b857a589e36db24cdf94960349db2`, https://github.com/HL7/fhir/commit/398042d0fa7b857a589e36db24cdf94960349db2 | Contained-resource self-contradiction clarification. |
| Commit | FHIR-30694 | `51a37750099b1d16678edff20f41387c56e87d2b`, https://github.com/HL7/fhir/commit/51a37750099b1d16678edff20f41387c56e87d2b | Canonical pipe/version-parameter wording. |
| Commit | FHIR-26386 | `50302bfe36d1307fc1a80cc37d51b3da221219a6`, https://github.com/HL7/fhir/commit/50302bfe36d1307fc1a80cc37d51b3da221219a6 | Logical-reference aggregation note. |
| Commit | FHIR-26666 | `387e1b4439bd8ef4c43c586897f6df02b0a5fd81`, https://github.com/HL7/fhir/commit/387e1b4439bd8ef4c43c586897f6df02b0a5fd81 | Canonical fragments for contained resources. |
| Commit | FHIR-28411 | `62a3b0888fa12f8761badaacbfa387daa2901324`, https://github.com/HL7/fhir/commit/62a3b0888fa12f8761badaacbfa387daa2901324 | `Reference.type` in FHIR resources must be a resource type. |
| Commit | FHIR-34405 | `9af4169b9d53037cd7d966019b5ed326d6dc1ac2`, https://github.com/HL7/fhir/commit/9af4169b9d53037cd7d966019b5ed326d6dc1ac2 | Regex gains optional `#fragment`. |
| Commit | FHIR-34345 | `8db7158a9c0541db6f76f31b0a952c415e2c67f2`, https://github.com/HL7/fhir/commit/8db7158a9c0541db6f76f31b0a952c415e2c67f2 | Contained-resource history guidance. |
| Commit | FHIR-39715 | `38aa93e3461d8c449438335c18a74054987993e1`, https://github.com/HL7/fhir/commit/38aa93e3461d8c449438335c18a74054987993e1 | Intended to correct contained-resource XPath. |
| Commit | FHIR-40468 | `4be70810dbeba46498ae4688e2d80b5be980a300`, https://github.com/HL7/fhir/commit/4be70810dbeba46498ae4688e2d80b5be980a300 | Contained-resource element-position clarification. |
| Commit | FHIR-52895 | `c4a29f6f188531c6aca66ce8f2eefa761325d3ed`, https://github.com/HL7/fhir/commit/c4a29f6f188531c6aca66ce8f2eefa761325d3ed | Adds canonical version-matching section. |
| Commit | FHIR-48422 | `4c62878beb7f314514c3f68dd936bbdc510dc25a`, https://github.com/HL7/fhir/commit/4c62878beb7f314514c3f68dd936bbdc510dc25a | Adds Additional References guidance. |
| Commit | FHIR-49655 | `8a07c78b09c82d260b118443f4c2e9f954fe5a70`, https://github.com/HL7/fhir/commit/8a07c78b09c82d260b118443f4c2e9f954fe5a70 | Clarifies canonical URL resource `url` element wording. |
| Jira | FHIR-52895 | https://jira.hl7.org/browse/FHIR-52895; reopen with `bun run jira:search snapshot FHIR-52895` | Formal source for canonical version matching; comments raise concerns about matching semantics. |
| Jira | FHIR-55991 | https://jira.hl7.org/browse/FHIR-55991; `bun run jira:search snapshot FHIR-55991` | Later submitted issue says package-first and manifest-first `SHALL` requirements conflict. |
| Jira | FHIR-48422 | https://jira.hl7.org/browse/FHIR-48422; `bun run jira:search snapshot FHIR-48422` | Formal source for Additional References text. |
| Jira | FHIR-53909 | https://jira.hl7.org/browse/FHIR-53909; `bun run jira:search snapshot FHIR-53909` | Later resolved issue on alternate-reference search behavior; related pages include references and search. |
| Jira | FHIR-39715 | https://jira.hl7.org/browse/FHIR-39715; `bun run jira:search snapshot FHIR-39715` | Resolution gives corrected XPath with `f:*` and `/*`; current page differs. |
| Zulip | Wildcards in Version references | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Wildcards%20in%20Version%20references; `bun run zulip:search snapshot fhir/infrastructure-wg "Wildcards in Version references"` | Discussion that led to FHIR-52895; exposes matching-semantics debate. |
| Zulip | Version-specific references | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Version-specific%20references; `bun run zulip:search snapshot fhir/infrastructure-wg "Version-specific references"` | Later FHIR-55991 discussion: "two contradictory conformance requirements". |
| Zulip | FHIR-28411 thread | `bun run zulip:search fts "\"FHIR-28411\"" --limit 20` then snapshot `fhir/infrastructure-wg "FHIR-28411"` if needed | Shows invariant considered expensive; prose/validator route chosen. |
| Confluence | FHIR-52895 minutes | Page `358879917`, https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh; `bun run confluence:search snapshot 358879917` | Records FHIR-I motion and links to Wildcards thread for canonical version matching. |
| Confluence | FHIR-48422 minutes | Page `325460605`, https://confluence.hl7.org/spaces/FHIRI/pages/325460605/FHIR+Infrastructure+Minutes+WGM+202505+-+Madrid; `bun run confluence:search snapshot 325460605` | Records Additional Resources discussion and alternate-reference guidance. |
| Confluence | FHIR-53909 minutes | Page `404100072`, https://confluence.hl7.org/spaces/FHIRI/pages/404100072/FHIR+Infrastructure+Minutes+WGM+202601+-+Virtual; `bun run confluence:search snapshot 404100072` | Records alternate-reference/search-parameter debate and resolution direction. |

## Change summary

### Page framing and generated datatype sections

- Metadata/template/navigation: R6 page drops the old maturity-cell layout, uses "Responsible Owner", removes an extra wrapping `<div>`, updates script paths, and adds generated tabs/links for `Reference` and `CodeableReference`.
- Structural change: `Reference` gets a generated datatype section and constraints block; `CodeableReference` is added as a full section.

### Reference datatype and literal/logical references

- Substantive/normative: `Reference.type`, when present in resources, now SHALL be a valid non-abstract FHIR resource type, with logical-model carve-out (`references.html:87-90`). This tracks FHIR-28411.
- Semantic guidance: target-type guidance now says including `type` is duplicative for literal references to FHIR resources but useful for `Reference.identifier` cases (`references.html:117-119`), matching FHIR-50574/related R6 clarifications.
- Example/technical guidance: the literal-reference regex now permits an optional `#fragment`, matching FHIR-34405 (`references.html:150-156`).
- Semantic guidance with defect: logical-reference guidance now says aggregation restrictions are not useful for identifier-only references, but the current sentence is grammatically malformed (`references.html:260-264`), from FHIR-26386.
- Substantive/new guidance: a new "Additional References" section recommends the `alternate-reference` extension for references to resources that are not allowed targets in the FHIR version/profile being used (`references.html:304-330`), from FHIR-48422. It has a trailing literal quote at line 329 and a later unresolved/search follow-up in FHIR-53909.

### Canonical URLs and version matching

- Semantic guidance: canonical pipe syntax is clarified as equivalent to searching with the `version` parameter and explicitly not `meta.versionId`, from FHIR-30694 (`references.html:354-369`).
- Semantic guidance: canonical references to contained resources are called out near the canonical URL introduction, from FHIR-26666 (`references.html:350-351`).
- Substantive/normative: a new "Version Matching for Canonical Resources" section covers package/dependency resolution, manifest-provided versions, versionAlgorithm/inferred matching formats, semver/date/url/fallback matching, and choosing the right canonical resource (`references.html:385-530`). This is the largest R6 semantic change to the page.
- Current issue: FHIR-55991 (created after ballot4) argues the package-first `SHALL` at lines 399-403 conflicts with the manifest `SHALL` at lines 409-416. The page itself also says manifests must be consulted before package dependencies, which makes the package-first wording too broad.
- Concrete defects: the package-source URL is malformed (`http://hl7.org.fhir/...`) at line 405; "context of us" appears at line 412; "In addition, some types of Additional Resources" is an incomplete paragraph at lines 481-483.

### Contained resources

- Substantive/normative clarification: FHIR-33008 adds the missing "or if the contained resource references the container resource" condition to the bullet that limits contained resource inclusion (`references.html:748-753` and repeated prose at `references.html:768-772`).
- Semantic guidance: FHIR-34345 adds history guidance for contained-resource references (`[type]/[id]/_history/[version]#[containedId]` valid; `[type]/[id]#[containedId]/_history/[version]` invalid) and requires local relative references when contained resources reference the container or sibling contained resources (`references.html:749-753`).
- Semantic guidance: FHIR-40468 changes contained-resource placement prose to "child element at the root of the resource" (`references.html:736-737`).
- Intent mismatch/defect: FHIR-39715 intended to correct the XPath expression to `ancestor::f:*[not(parent::f:*)]/f:contained/*[f:id/@value=substring-after(current()/f:reference/@value, '#')]`; the current page renders `ancestor::f:[not(parent::f:*)]/f:contained/[...]` at line 726, missing both wildcard steps.

### CodeableReference

- Substantive/new datatype: R5/R6 introduces a `CodeableReference` narrative section describing instance-vs-class references and constraints (`references.html:840-895`).
- Normative/constraint clarification: FHIR-39132, FHIR-39176, FHIR-38957, and FHIR-40955 refine the constraint text so `targetProfile` and binding constraints are declared on `CodeableReference`, not directly on `.reference`/`.concept`.

### Mechanical/noise

- Large whitespace/quote-style churn, generated page boilerplate, extension link relocation, jQuery path updates, and broad editorial cleanups are present. These should not be interpreted as page-specific workgroup decisions without a linked Jira/commit.

## Source history

| Date | Commit | Subject | Classification | Notes |
|---|---|---|---|---|
| 2019-11-30 | `d3167581285d9dbf94d2888499604fff66724f4b` | Add CodeableReference | substantive | Adds early CodeableReference page content. |
| 2019-12-30 | `7daa0d220d80bdaf2229f7aa05f4d4e6c0f5a698` | Rework R5 code to support interfaces & CodeableReference... | substantive/mechanical | Expands generated datatype support and CodeableReference wiring. |
| 2021-06-04 | `ed209f540a38a0dcde5395af4b65329f835f3842`, `35e9e15cb22cb8d418f5477a9869896b75ebe632`, `c8d7378a9c00c8e8249b23a93c75d668ad86e626`, `415a2c703e29fcec2dc6cec9564357893309324c`, `ffd8f8488e9bab23f82c97fd634f64a7ef9a4cf7`, `8ea13d38c808d1b3c92be59aaa8d9889f0d1122a` | FHIR-31582, FHIR-29319, FHIR-19931, FHIR-19526, FHIR-26667, FHIR-29634 | mixed | Small R5 wording/link updates; not all are central to current findings. |
| 2021-06-27 to 2022-02-17 | `d7b8dadc...`, `fb663fb7...`, `d621ab0...` | template/merge/MnM batch | mechanical/mixed | Broad page-generation or batch edits. |
| 2022-08-10 | `398042d0fa7b857a589e36db24cdf94960349db2` | FHIR-33008 - Guidance on contained is self-contradictory | substantive/normative clarification | Adds missing contained-resource "or references the container" condition. |
| 2022-08-19 | `51a37750099b1d16678edff20f41387c56e87d2b` | FHIR-30694 Confusing text around canonical syntaxes | semantic guidance | Clarifies canonical `|version` vs search `version` parameter. |
| 2022-08-21 to 2022-08-25 | `4628fa...`, `1c4a35...`, `50302b...`, `3e26de...` | FHIR-30371, FHIR-20398, FHIR-26386, HIR/FHIR-30696 | mixed/substantive | Adds canonical/resource guidance and logical-reference aggregation note; FHIR-26386 current prose is malformed. |
| 2022-08-26 | `387e1b4439bd8ef4c43c586897f6df02b0a5fd81` | FHIR-26666 Clarify that canonicals might refer to #id and not url | semantic guidance | Adds canonical fragment note. |
| 2022-08-26 | `62a3b0888fa12f8761badaacbfa387daa2901324` | FHIR-28411 Clarify that Reference.type must be FHIR for references in FHIR instances | substantive/normative clarification | Adds FHIR-resource target rule for `Reference.type`. |
| 2022-08-27 | `9af4169b9d53037cd7d966019b5ed326d6dc1ac2` | FHIR-34405 Expand regex... | technical example | Allows optional fragment in reference regex. |
| 2022-08-27 | `8db7158a9c0541db6f76f31b0a952c415e2c67f2` | FHIR-34345 Do contained resources have history? | semantic guidance | Adds contained-resource history/local-reference rules. |
| 2022-08-28 to 2023-03-14 | several small commits | FHIR-25408, FHIR-33022, FHIR-25431, FHIR-27920, ballot notes, extension links, QA, FHIR-34099, FHIR-39132, FHIR-39176, FHIR-38957 | mixed | Includes canonical version-scheme notes and CodeableReference constraint cleanups. |
| 2023-02-11 | `38aa93e3461d8c449438335c18a74054987993e1` | FHIR-39715 XPath expression for resolving contained resources is off | intended technical correction | Current line is still malformed compared with Jira resolution. |
| 2023-03-20 | `4be70810dbeba46498ae4688e2d80b5be980a300` | FHIR-40468 - Guidance on 'contained' | semantic guidance | Clarifies contained resource is a root child element. |
| 2023-11-23 to 2025-08-12 | QA/link/script/normative-prep commits | QA fixes, broken links, fragment update, FHIR-47467, html conformance, jquery, typo, signatures | mechanical/mixed | Mostly generated/template/editorial; broad changes should not be elevated alone. |
| 2025-10-31 to 2025-11-01 | `270e0c...`, `605a6f...`, `2cb3c1...`, `28ebdb...`, `00fb2e...` | R6 normative changes, FHIR-50120, FHIR-50574, FHIR-40955 | substantive/editorial | Adds target-type/canonical-identifier guidance and removes stale CodeableReference sentence. |
| 2025-11-03 | `c4a29f6f188531c6aca66ce8f2eefa761325d3ed` | FHIR-52895 Clarify Canonical Version Matching | substantive/normative | Adds canonical version matching rules. |
| 2025-11-03 | `4c62878beb7f314514c3f68dd936bbdc510dc25a` | FHIR-48422 Basic resource should be implicitly allowed... | semantic guidance | Adds Additional References section. |
| 2025-11-03 to 2025-11-06 | `d749fb...`, `5ca67...`, `5f600...`, `887bc...`, `8a07c...`, `f54f9...` | review clarifications, edits, FHIR-44047, FHIR-49655 | mixed | Adds manifest/package-source text, punctuation cleanup, canonical URI clarification. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-33008` (Published, Persuasive, Applied for R5): resolved the contained-resource contradiction by adding "or if the contained resource references the container resource"; current page reflects this at `references.html:748-753`.
- `FHIR-30694` (Published, Persuasive): reworded canonical pipe syntax so `|version` is equivalent to GET with `version` parameter and not `meta.versionId`; current page reflects this at `references.html:354-369`.
- `FHIR-26386` (Published, Not Persuasive with Modification): said aggregationMode is moot if `Reference.reference` is absent and logical references are not expected to be computably resolvable. Current line `references.html:262` tries to reflect this but is grammatically broken.
- `FHIR-30696` (Published, Not Persuasive with Modification): clarified canonical resource list criteria and links to `CanonicalResource`; reflected at `references.html:478`.
- `FHIR-26666` (Published, Persuasive): added close-proximity note that canonical references can point to contained resources by fragment; reflected at `references.html:350-351`.
- `FHIR-28411` (Published, Persuasive, compatible/substantive): intended a rule that references from FHIR resources target FHIR resources. Current prose at `references.html:87-90` reflects this; Zulip shows an invariant was considered but avoided for performance/validator reasons.
- `FHIR-34405` (Published, Persuasive): append optional fragment to the reference regex; reflected at `references.html:152`.
- `FHIR-34345` (Published, Persuasive): clarified contained-resource history/reference rules; reflected at `references.html:749-753`.
- `FHIR-39715` (Published, Persuasive): intended to fix the contained-resource XPath to include `ancestor::f:*` and `/f:contained/*[...]`. Current page line 726 is missing the wildcards, so this is an action item.
- `FHIR-39132`, `FHIR-39176`, `FHIR-38957`, `FHIR-40955`: CodeableReference constraint wording and removal of stale SHOULD/SHALL transition statement; current lines `references.html:872-875` reflect the final direction.
- `FHIR-40468` (Published): corrected contained-resource position prose for JSON; current `references.html:736-737` reflects this.
- `FHIR-27920` and `FHIR-20398`: background for canonical version schemes and server policy when canonical URL/version does not resolve uniquely; partially incorporated into the expanded canonical matching material.
- `FHIR-50120` and `FHIR-50574`: R6 reference-type and canonical identifier guidance; current lines `references.html:117-119` and `references.html:554-566` reflect these.
- `FHIR-52895` (Applied, Persuasive): formal source for canonical version matching. Jira comments from Michael Lawley questioned date formats, SNOMED-specific wording, and exact-match semantics; current page still uses broad matching guidance.
- `FHIR-48422` (Applied, Not Persuasive with Modification): formal source for Additional References section; current text closely follows the Jira resolution but left the closing quote from the resolution text in source.
- `FHIR-49655` (Applied): clarifies the canonical-search bullet refers to resources with a `url` element of type `uri`; current `references.html:380` reflects this.

### Later or related Jira issues that plausibly affect current R6 ballot4 text

- `FHIR-55991` (Submitted, unresolved, created 2026-03-02): explicitly challenges `references.html#matching`, saying the package/dependency `SHALL first` and manifest `SHALL use` requirements conflict. This is a real current-page action item, not just history.
- `FHIR-53909` (Resolved - change required, Persuasive, created 2026-01-09): asks how reference search parameters interact with `alternate-reference` from `references.html#additional`. Resolution says search reference parameters SHOULD index/search `additionalReference` unless constrained out. This is a later follow-up to the new Additional References section.
- `FHIR-56447` and `FHIR-53267` concern the package-source extension in FHIR extensions. They are context-only for this page except that `references.html:405` links to a malformed package-source URL.

### Context-only Jira hits not driving action

- Broad punctuation issue `FHIR-44047` explains some `e.g.,`/`i.e.,` edits but should not drive substantive findings.
- Older tooling/package issues such as `FHIR-30371` explain nearby package wording but do not identify current references-page defects.
- Broad FTS hits for `"context of us"` were mostly unrelated US Core/context collisions and did not explain the typo at `references.html:412`.

## Zulip evidence

- `#fhir/infrastructure-wg > Wildcards in Version references` (snapshot command: `bun run zulip:search snapshot fhir/infrastructure-wg "Wildcards in Version references"`; URL: https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Wildcards%20in%20Version%20references) is the key rationale thread for FHIR-52895. It shows debate about whether partial versions are exact, semver/wildcard, date, URL/SNOMED, or fallback string matches. Grahame summarized the eventual disposition on 2025-09-16; Gino identified FHIR-52895 and FHIR-51466 on 2025-09-17.
- `#fhir/infrastructure-wg > Version-specific references` (snapshot command: `bun run zulip:search snapshot fhir/infrastructure-wg "Version-specific references"`; URL: https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Version-specific%20references) later links FHIR-55991. Bryn Rhodes says he filed it as a technical correction because the canonical matching text appears to have two contradictory conformance requirements.
- Quoted FTS for `"FHIR-28411"` found a focused `#fhir/infrastructure-wg > FHIR-28411` thread where Grahame proposed a possible invariant, then rejected it as too expensive for large resources and said he would put it in the validator instead. This supports why the page uses prose rather than an invariant.
- Quoted FTS for `"FHIR-30694"` found `#fhir/infrastructure-wg > Canonical Syntax rewording`, where Grahame questioned the proposed wording; useful context, but current page broadly matches the accepted Jira resolution.
- Quoted FTS for `"FHIR-33008"` found `#implementers > Id required for a contained "Provenance"`, where the unclear contained-resource rule was raised; Jira/Confluence are stronger formal evidence.
- `#fhir/infrastructure-wg > Alternate Reference Discussion` snapshot only contained a pointer to a WGM transcript attachment. The more useful alternate-reference/search evidence is in Jira FHIR-53909 and Confluence page `404100072`.

## Confluence evidence

- Page `358879917`, "FHIR Infrastructure Minutes WGM 202509 - Pittsburgh" (snapshot: `bun run confluence:search snapshot 358879917`) references FHIR-52895 and the `Wildcards in Version references` Zulip thread. The extracted text records a motion for the canonical version matching ticket and links to implementation code for version matching.
- Page `325460605`, "FHIR Infrastructure Minutes WGM 202505 - Madrid" (snapshot: `bun run confluence:search snapshot 325460605`) records R6 Versioning / Additional Resources discussion, including FHIR-48422. The minutes say the request to allow Basic for all references was handled via the `alternate-reference` extension and additional guidance, with a disruptive transition concern when an additional resource becomes core.
- Page `404100072`, "FHIR Infrastructure Minutes WGM 202601 - Virtual" (snapshot: `bun run confluence:search snapshot 404100072`) records the FHIR-53909 debate. Extracted text says current alternate-reference pattern is "really gross", discusses how servers should treat alternate-reference for search, and resolves to add a search note rather than silently ignore such references.
- Page `324962142`, "FHIR Infrastructure Minutes CC 2025-03-10" records the FHIR-49655 vote.
- Page `97467502`, "FHIR Infrastructure Minutes CC 20201130" records FHIR-28411 discussion: reasonable but tricky to express as a constraint.
- Page `81028096`, "FHIR Infrastructure Minutes WGM 202201" records the FHIR-33008 persuasive motion.
- Page `234784975`, "FHIR Infrastructure Minutes WGM 202405 - Dallas" records broad FHIR-44047 punctuation cleanup; context only.

## Timeline

- 2019-11 to 2019-12: CodeableReference added and generated datatype machinery reworked.
- 2020-03 to 2020-11: FHIR-26666, FHIR-26386, and FHIR-28411 are created/resolved, establishing canonical-fragment, logical-reference aggregation, and FHIR-resource `Reference.type` intent.
- 2021-01 to 2022-03: FHIR-30694, FHIR-30696, FHIR-33008, FHIR-34345, and FHIR-34405 are resolved/voted; source application follows mainly in August 2022.
- 2022-08: major R5 reference/canonical/contained-resource source updates land on this page.
- 2022-10 to 2023-03: R5 ballot issues refine CodeableReference, contained-resource XPath, and contained-resource placement. FHIR-39715's intended XPath correction lands in source but appears malformed in the current page.
- 2025-03 to 2025-05: R6 Jira issues FHIR-49655, FHIR-50120, FHIR-50574, and FHIR-48422 are resolved/voted.
- 2025-09: Zulip `Wildcards in Version references` discussion and FHIR-52895 vote establish canonical version matching rules.
- 2025-11-03 to 2025-11-06: R6 ballot4 source commits apply FHIR-52895, FHIR-48422, FHIR-49655, punctuation, and review edits.
- 2026-01: FHIR-53909 is resolved - change required, after the R6 ballot4 source boundary, for alternate-reference search behavior.
- 2026-03: FHIR-55991 is submitted, after the R6 ballot4 source boundary, identifying a package-vs-manifest canonical matching conflict in current text.

## Evidence log

- Read `SKILL.md` and relevant README command references: `jira/README.md`, `zulip/README.md`, `confluence/README.md`, `spec/README.md`.
- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/references.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/references.html" && echo "new exists"`
- Ran direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/references.html`
- Ran source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/references.html`
- Inspected selected patches and current blame for line ranges `255,264`, `304,330`, `398,416`, `474,486`, and `721,727`.
- Jira snapshots run for explicit/important keys including FHIR-33008, FHIR-30694, FHIR-26386, FHIR-30696, FHIR-26666, FHIR-28411, FHIR-34405, FHIR-34345, FHIR-39715, FHIR-39132, FHIR-39176, FHIR-38957, FHIR-40468, FHIR-27920, FHIR-52895, FHIR-48422, FHIR-44047, FHIR-49655, FHIR-50120, FHIR-50574, FHIR-40955, FHIR-53909, FHIR-55991, FHIR-56447, and FHIR-53267.
- Jira phrase searches included `"Canonical Version Matching"`, `"versionAlgorithm" "canonical"`, `"Communication partners will need to manage this transition"`, `"alternate-reference" "Reference.reference"`, `"package-source extension"`, `"context of us"`, `"aggregation" "Reference.identifier"`, and `"Canonical Uris" "Reference DataType"`.
- Zulip key searches were first attempted unquoted and failed for hyphenated Jira keys; corrected searches used quoted keys such as `bun run zulip:search fts "\"FHIR-52895\"" --limit 20`.
- Zulip snapshots run for:
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Wildcards in Version references"`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Version-specific references"`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Alternate Reference Discussion"`
- Confluence refs/FTS searches run for FHIR-52895, FHIR-48422, FHIR-44047, FHIR-49655, FHIR-33008, FHIR-30694, FHIR-28411, and FHIR-34345.
- Confluence snapshots run for page IDs `358879917`, `325460605`, `404100072`, `324962142`, `234784975`, `81028096`, and `97467502`.
