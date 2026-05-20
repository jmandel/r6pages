# overview-arch actionable findings

## Summary

The page has 3 actionable findings: one broken/still-unresolved Linkage external reference, one tracked spelling regression, and one pre-existing source title metadata mismatch.

## High-signal findings

### H-001 Linkage points to an unavailable incubator page

- Priority: P2
- Category: spec-problem
- Evidence: `source/overview-arch.html:429`; commit `fad1b9cf84ef652e88947e1a13b026c62f95334e`; `FHIR-53725`; Zulip `#implementers > Linking to Additional Resources`; Confluence page `413248899`; `curl` returned 404 for `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html`.
- Problem: The page now tells readers the Linkage resource can help with reference ambiguity, but links to a PC incubator URL that is not live.
- Why it matters: Readers cannot reach the referenced guidance, and Linkage is no longer a core R6 resource.
- Recommended next step: Track this page with the additional-resources/PC-incubator work; either publish/version-pin a live Linkage target or revise/remove the sentence until the incubator content is available.

### E-001 `managable` typo remains on this page

- Priority: P3
- Category: editorial
- Evidence: `source/overview-arch.html:230`; commit `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777`; `FHIR-55117`; related persuasive typo issue `FHIR-50596`.
- Problem: Current text says “smaller, more managable sub-domains.”
- Why it matters: Visible spelling error in an overview page.
- Recommended next step: Apply `FHIR-55117` by changing `managable` to `manageable`.

### E-002 Source page title metadata says Developers, not Architects

- Priority: P3
- Category: editorial
- Evidence: `source/overview-arch.html:3` says `[%settitle FHIR Overview - Developers%]`; `source/overview-arch.html:16` says `FHIR Overview - Architects`; title mismatch dates to existing blame `16b77d47f2a`. The fetched R6 ballot4 rendered page title is `Overview-arch - FHIR v6.0.0-ballot4`, so this was not proven to be the live browser title.
- Problem: The source title directive is stale/mismatched for the architects overview.
- Why it matters: If the source title macro is used by any publication, navigation, or search pipeline, the page can be mislabeled; even if currently unused, the source metadata is misleading.
- Recommended next step: Verify whether `[%settitle ...%]` is still consumed for this page and either set it to `FHIR Overview - Architects` or remove/ignore it consistently.

## Intent-vs-implementation mismatches

No mismatch found for `FHIR-48660`: the committed 80% language matches the Jira requested replacement and FHIR-I vote evidence. The Linkage finding above is a later implementation/lifecycle problem rather than a proven mismatch with the original `fad1b9cf` intent.

## Overlooked or newly noticed problems

The broken Linkage incubator URL and the title metadata mismatch were not clearly covered by the page-specific tracked changes. The `managable` typo is already tracked by submitted `FHIR-55117` but remains unapplied in the reviewed R6 ballot4 page.
