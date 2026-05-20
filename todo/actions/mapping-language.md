# mapping-language actionable findings

## Summary

The page has 3 actionable findings. The main risk is that current prose is not fully aligned with the formal grammar and later workgroup discussion for Mapping Language syntax and log semantics.

## High-signal findings

### H-001: Legacy `map` declaration is still in the grammar but no longer documented in the page prose

- Priority: P1
- Category: spec-problem
- Evidence: `source/mapping-language.html:122-160`; `images/mapping.g4:10-12` and `images/mapping.g4:40-46`; `FHIR-27915`; Zulip #fhir/infrastructure-wg > `Mapping Language Question (FHIR-25220)` lines 37-43 and 75-91; commit `c372919350db4764cebd887053bd3bd567234faa`
- Problem: R6 prose documents `/// name{.property}* = {value}` metadata as the first part of a mapping file, but the formal grammar still accepts an optional `map url = identifier` declaration. `FHIR-27915` was classified as compatible/substantive, and the Zulip discussion explicitly raised concern about breaking existing maps.
- Why it matters: Implementers using the prose may reject or omit support for legacy `map` declarations even though the grammar still allows them; authors may also think existing maps are invalid.
- Recommended next step: Add a compatibility note documenting whether `map "url" = "name"` remains accepted and how it maps to `url`/`name`, or remove it from the grammar if the intended R6 change is actually non-compatible.

### H-002: Log guidance conflicts with the applied `where`/`check`/`log` clarification

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/mapping-language.html:387-390` and `source/mapping-language.html:435-452`; `FHIR-46548`; Zulip #FHIR Mapping Language > `where clause` lines 75-115; commit `faa06571e350ec1e47619b0d9ad77fb1a8a21583`
- Problem: The page now says `where`, `check`, and `log` run in order after aliases are mapped, but it still says log statements are often used to note source elements that are not yet mapped. In the Zulip follow-up, Grahame called that comment a problem if log runs last and said he would remove it; Brian agreed.
- Why it matters: Mapping authors may expect `log` to report rejected/unmapped candidates, while the clarified execution model says it reports content that passed earlier stages.
- Recommended next step: Remove or rewrite the "not yet mapped" sentence so `log` is described as reporting selected/processed content; if unmapped/rejected logging is supported, document the explicit pattern for doing it.

### E-001: Visible markup and typo defects remain in the current page

- Priority: P2
- Category: rendering
- Evidence: stray quote characters after FHIRPath factory links at `source/mapping-language.html:627`, `:633`, `:639`, `:645`, and `:651`; invalid `<codes>types</codes>` at `source/mapping-language.html:908`; typos at `source/mapping-language.html:407` and `:665`
- Problem: The rendered page likely shows literal `"` characters after several factory-function links, fails to code-style `types` because of an invalid tag, and includes obvious typos ("the the rule", "the this specification").
- Why it matters: These are concrete reader-facing defects on a Normative page and are low-risk to correct.
- Recommended next step: Remove the extra quotes, change `<codes>` to `<code>`, and fix the small typos in the same editorial pass.

## Intent-vs-implementation mismatches

- H-001: `FHIR-27915` compatibility intent and the grammar's optional `mapDeclaration` are not reflected in page prose.
- H-002: The `FHIR-46548` Zulip follow-up says the stale "not yet mapped" log comment should be removed, but it remains.

## Overlooked or newly noticed problems

- E-001: Current-page rendering and typo defects visible during the full R6 page read.
