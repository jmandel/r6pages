# validation actionable findings

## Summary

The page has 1 actionable finding: the R6 ballot4 validation page still points Schematron readers to the removed `downloads.html#refimpl` XML Tools download, leaving a stale link/instruction after the FHIR-31735 tools split.

## High-signal findings

### E-001: Schematron instructions still point to removed XML Tools download

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/validation.html:229-232`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:101-106`; old target at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/downloads.html:144-179`; `FHIR-31735`; Zulip `#committers > XML tools`
- Problem: `validation.html` says `iso_svrl_for_xslt2.xsl` is included in the `XML Tools` download at `downloads.html#refimpl`, but R6 ballot4 `downloads.html` no longer defines `#refimpl` and no longer lists XML Tools.
- Why it matters: readers trying to run Schematron validation are sent to a removed download/anchor, so the page no longer gives a usable source for the referenced transform.
- Recommended next step: update the Schematron paragraph to point to the current location for Schematron/XSLT support files, or remove the XML Tools download claim if there is no current equivalent. When fixing, also check sibling stale references to `downloads.html#refimpl`.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 covers the current-page problem found during the full-page read.
