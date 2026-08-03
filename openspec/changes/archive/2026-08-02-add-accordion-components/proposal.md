## Why

The site has no collapsible content pattern yet. Long-form content (e.g. FAQ-style sections) needs a native, accessible expand/collapse UI, and grouping several of these together needs a shared border so each item doesn't look visually isolated.

## What Changes

- Add an `Accordion` component using native `<details>`/`<summary>` with a `ChevronDown` icon (lucide) that rotates on open/close.
- `Accordion` accepts a `title` prop and a default slot for its content.
- Base styles: transparent border by default, visible border on hover and on `[open]`, theme-aware border/background/color via `light-dark()`, 16px block/inline padding on the summary, and 24px block / 16px inline padding on child `p` tags.
- Add an `AccordionGroup` component that wraps multiple `Accordion` children. When wrapping multiple accordions, the border moves from each individual `Accordion` to the group wrapper, and inner accordions render borderless.

## Capabilities

### New Capabilities
- `accordion-component`: Single collapsible `details`/`summary` component with icon, title, slotted content, and theme-aware borders/colors.
- `accordion-group-component`: Wrapper component that groups multiple accordions under one shared border, suppressing individual accordion borders.

### Modified Capabilities
(none)

## Impact

- New files: `src/components/Accordion.astro`, `src/components/AccordionGroup.astro`.
- Depends on existing color tokens in `src/styles/colors.css` and the `lucide-astro` package already used by `Callout.astro`.
