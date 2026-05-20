# managing actionable findings

## Summary

The page has 1 actionable finding: the current R6 managing page links `Linkage` to a PC incubator URL that returns 404, leaving readers without a working target for a resource that was moved out of core.

## High-signal findings

### E-001: Linkage incubator link is broken

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:179`; commit `fad1b9cf84ef652e88947e1a13b026c62f95334e`; live check on 2026-05-20 returned `HTTP/2 404` for `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html`; `FHIR-53725`; `FHIR-54090`; Zulip `#implementers > Linking to Additional Resources`.
- Problem: the page says the `Linkage` resource can be used for other shared resources, but the target URL for `Linkage` does not resolve. Related Jira evidence shows the same Linkage-incubator broken-link problem was noticed on the Patient page, while the managing page still has the same broken target.
- Why it matters: R6 readers cannot reach the referenced resource, and because Linkage moved out of core, a broken external incubator link makes it unclear whether the guidance is still usable, under development, or obsolete.
- Recommended next step: replace the URL with the live PC incubator Linkage URL once the PC incubator is published, or temporarily remove/caveat the Linkage example until that target exists; include `source/managing.html` in the broader Linkage broken-link cleanup tracked around `FHIR-53725`.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

See E-001.
