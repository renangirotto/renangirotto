## Context

The codebase has one existing content-disclosure pattern (`Callout.astro`) using `light-dark()` theming and inline `<style>` blocks scoped per component (see [callout-component/spec.md](/openspec/specs/callout-component/spec.md)). No accordion/collapsible pattern exists yet. `lucide-astro` is already a dependency, used by `Callout` for its icon.

Reference screenshots (provided by user, dark and light theme, closed vs. open) show: a closed accordion with title + chevron and no visible border; an open accordion with a visible border, a divider line between the summary and the content, and the slotted `Lorem ipsum...` text below the divider. Border/background colors switch between the dark and light frames per the theme tokens below.

## Goals / Non-Goals

**Goals:**
- Native, dependency-free expand/collapse using `<details>`/`<summary>`.
- `Accordion` works standalone (own border) and inside `AccordionGroup` (border moves to the wrapper).
- Match the existing theming approach (`light-dark()`, CSS custom properties from `colors.css`).

**Non-Goals:**
- Animation of the expand/collapse transition (native `<details>` toggle behavior only).
- Controlled/exclusive-open behavior (e.g. closing siblings when one opens) — each `<details>` manages its own state independently, matching native semantics.

## Decisions

- **Border ownership toggle via `:has()`**: `AccordionGroup` wraps children in a container; CSS uses `:has(> .accordion + .accordion)` (or a simpler child-count selector) to detect "more than one accordion" and apply the border to the wrapper while suppressing it on children. Alternative considered: a JS-computed prop counting children — rejected, adds complexity for a pure CSS-solvable case, and Astro slots make counting slotted children from the parent's script awkward without `Astro.slots`.
  - Simpler, robust approach: `AccordionGroup` always owns the border (it's the documented use case — "a wrapper that has multiple accordions inside it"), and `Accordion` exposes a data attribute/class so it can suppress its own border when it detects it's rendered inside a group. Implementation: `AccordionGroup` sets a CSS class on itself; nested `.accordion` elements have their border reset via a descendant selector from `.accordion-group .accordion`. This avoids any JS/`:has()` cleverness — plain CSS cascade (descendant selector overrides base border rule).
- **Icon rotation**: `ChevronDown` rotates 180deg via `details[open] svg` selector — CSS only, no JS.
- **Styling location**: Both components use scoped Astro `<style>` blocks (not global CSS), consistent with `Callout.astro`.

## Risks / Trade-offs

- [Nested/non-direct-child accordions inside a group could bypass the descendant-selector border suppression if wrapped in extra markup] → Mitigation: document that `AccordionGroup`'s slot expects `Accordion` as direct children.
- [No exclusive-open behavior may surprise users expecting single-open accordions] → Mitigation: explicitly out of scope per Non-Goals; can be added later as an opt-in prop if requested.
