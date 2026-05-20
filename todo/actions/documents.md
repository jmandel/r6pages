# documents actionable findings

## Summary

The page has 3 actionable findings. The main risk is that two R6 semantic updates appear only partially reconciled with their formal Jira/history trail: document signatures now rely on a generic link despite later Provenance-vs-`Bundle.signature` changes, and the graph-connected Bundle requirement is less explicit on this page than the approved Jira wording and related Bundle notes.

## High-signal findings

### H-001: Document signature text is underspecified after `Bundle.signature` deprecation

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/documents.html:133-135`; commit `f06748cde92aa18ad0830b9f43fbc39639d38026`; `FHIR-46789` (`bun run jira:search snapshot FHIR-46789`); `source/signatures.html:430-455`; `source/bundle/structuredefinition-Bundle.xml:657-666`; Zulip `#IG creation > Signing Bundles`
- Problem: `FHIR-46789` resolved to replace the document signature sentence with wording that explicitly used `Bundle.signature`, but the applied page only says signatures may use the rules on the digital signatures page. Later R6 work deprecates `Bundle.signature` and says to use Provenance-based signatures, so the Jira resolution, current documents page, and current signature page are not obviously reconciled.
- Why it matters: implementers trying to sign FHIR documents may not know from this page whether the intended mechanism is deprecated `Bundle.signature`, Provenance signatures, or another signature packaging approach.
- Recommended next step: update the documents page or Jira disposition trail to explicitly reconcile `FHIR-46789` with the R6 Provenance-signature decision, e.g., by saying document Bundle signatures use the Provenance-based rules on the digital signatures page and not `Bundle.signature`.

### H-002: Graph-connected Bundle requirement is only partially applied on the documents page

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/documents.html:103-114`; `source/bundle/bundle-notes.xml:336-347`; commit `e3fe9fdef25099c995e905af26b84a15734f81c4`; `FHIR-45507` (`bun run jira:search snapshot FHIR-45507`); `FHIR-43295` (`bun run jira:search snapshot FHIR-43295`)
- Problem: `FHIR-45507` says the documents page should point to the new Bundle notes with wording equivalent to "All document Bundles SHALL be a fully-interconnected graph." The current page only adds "See Graph-connected Bundles" inside the supporting-information list item, while the related Bundle notes state the broader all-entries graph expectation.
- Why it matters: readers may miss that graph-connectedness is a document-Bundle-level requirement, and it is unclear whether supporting collateral such as Binary stylesheet entries are part of the graph requirement or an exception.
- Recommended next step: make the documents page state the document-Bundle-level graph requirement explicitly, or clarify any intended exception for supporting collateral.

### E-001: Missing punctuation before "See Graph-connected Bundles"

- Priority: P3
- Category: editorial
- Evidence: `source/documents.html:110-113`; commit `e3fe9fdef25099c995e905af26b84a15734f81c4`
- Problem: The sentence currently reads as "`... or a URI See Graph-connected Bundles ...`" because there is no period or semicolon after the `URI` link.
- Why it matters: this is a reader-facing rendering/editing defect in a normative SHALL list item.
- Recommended next step: add punctuation when revising the graph-connected wording.

## Intent-vs-implementation mismatches

See `H-001` and `H-002`.

## Overlooked or newly noticed problems

See `E-001`.
