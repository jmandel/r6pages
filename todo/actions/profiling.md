# profiling actionable findings

## Summary

The page has 2 actionable findings. The main risk is that the R6 `FHIR-50391` Must Support/obligations clarification appears only partially applied to `profiling.html`, leaving duplicated older guidance and no link from the profiling page to the new repeating/sliced-element obligations guidance.

## High-signal findings

### H-001: FHIR-50391 profiling text was applied as a duplicate instead of the resolved cross-reference

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html:1123-1134`; commit `3f3077a286d669ed69f2cb51540b8f3aef58a433`; `FHIR-50391`; Zulip `#IG creation > Slices not inheriting preferred bindings from root`; Confluence page `358880988`
- Problem: `profiling.html` now says the child-element Must Support rule twice. The first copy was added by `FHIR-50391`; the second is the older `FHIR-28607` text and still says "if it support the parent". `FHIR-50391` instead called for profiling to point implementers to the Implementation Obligations page for repeating elements and slices.
- Why it matters: Readers of `profiling.html#obligations` miss the R6 clarification about ambiguous Must Support/obligation applicability on repeating and sliced elements, while seeing duplicated guidance that looks accidental.
- Recommended next step: Replace the duplicate paragraphs with one corrected child/parent statement plus the `FHIR-50391` cross-reference to `obligations.html` and the repeating/sliced-element guidance already present there.

### E-001: Obligations hyperlink target is malformed

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html:1107`; commit `1e1665b9352f33a691326fdf3079bc19865a8681`; `FHIR-46201` Zulip thread quotes the rendered text as `">Obligations`
- Problem: The link is `<a href="obligations.html>">Obligations</a>`, so the href target includes a stray `>`.
- Why it matters: The main Must Support alternatives list contains a broken or misleading link to the Implementation Obligations page.
- Recommended next step: Change the link target to `obligations.html` and verify the rendered page navigates correctly.

## Intent-vs-implementation mismatches

H-001 is the only material mismatch found.

## Overlooked or newly noticed problems

E-001 is a concrete current-page rendering defect. Minor typos also remain (`Instution`, `publically`, `discrinator`, and "but it normally be necessary"), but they are lower priority than the findings above.
