## Context

The repo already has an established pattern for theming components: `light-dark()` CSS function paired with tokens in `src/styles/colors.css` (see `GridBox.astro`). The color tokens needed for this component already exist: `--color-dark-orange-100`, `--color-dark-orange-100-opacity-15/25`, `--color-light-yellow-100`, `--color-light-yellow-100-opacity-15/25`. `lucide-astro` is already a dependency (used in `GridBox.astro`, `ButtonTheme.astro`).

## Goals / Non-Goals

**Goals:**
- Single-file Astro component `Callout.astro` matching the provided screenshots (icon + title header, divider, body text).
- Correct light/dark theming via `light-dark()`, no JS theme switching logic needed (handled globally already).

**Non-Goals:**
- No variants (info/warning/error types) — screenshots show a single style. Add later if requested.
- No slot-based children — props are `title` and `text` only, per the spec.

## Decisions

- **Props via `Astro.props` typed with an interface** (`title: string`, `text: string`), consistent with plain-prop usage elsewhere in the codebase (e.g. `FormattedDate.astro`).
- **Icon**: import `CircleQuestionMark` from `lucide-astro` directly, sized 24x24 via CSS on the wrapping span (same pattern as `.grid-box-link-icon` in `GridBox.astro`).
- **Divider**: a `border-block-end` on the header element using the opacity-15 token, rather than a separate `<hr>`, to keep markup minimal.
- **Layout**: header row (icon + title, flex, gap) and body text block below, single rounded container using the opacity-25 token as background.

## Risks / Trade-offs

- [Hardcoded to a single color theme (orange/yellow)] → Acceptable per explicit prop spec (title/text only); a `variant` prop can be added later without breaking the API.
