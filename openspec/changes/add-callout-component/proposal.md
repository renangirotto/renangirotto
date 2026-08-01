## Why

Blog content needs a way to highlight supplementary info (definitions, asides, tips) distinct from body text. No such component exists in `src/components` today.

## What Changes

- Add a new `Callout.astro` component with a header (icon + title) and a body (text), separated by a divider line.
- Themed via `light-dark()`: dark theme uses the orange-100 opacity tokens, light theme uses the yellow-100 opacity tokens (already defined in `src/styles/colors.css`).
- Uses the `CircleQuestionMark` icon from `lucide-astro`.
- Accepts `title` and `text` props.

## Capabilities

### New Capabilities
- `callout-component`: A reusable Astro component rendering a titled, icon-prefixed callout box with themed background/border/text colors.

### Modified Capabilities
(none)

## Impact

- New file: `src/components/Callout.astro`.
- No changes to existing components, tokens, or build config — reuses existing color tokens and the already-installed `lucide-astro` dependency.
