## 1. Accordion component

- [x] 1.1 Create `src/components/Accordion.astro` with an exported `Props` interface (`title` prop) and a default slot, using `<details>`/`<summary>` and a `ChevronDown` icon from `lucide-astro`
- [x] 1.2 Add base styles: transparent border, visible border on `:hover` and on `[open]`, theme-aware border/background/color via `light-dark()` per spec
- [x] 1.3 Add summary padding (16px block/inline), rotate the chevron icon on `[open]`, and add a divider line between summary and content that shows only while `[open]`
- [x] 1.4 Add base child styles for slotted `p` tags (24px `padding-block`, 16px `padding-inline`)

## 2. AccordionGroup component

- [x] 2.1 Create `src/components/AccordionGroup.astro` with an exported `Props` interface and a default slot wrapping multiple `Accordion` children
- [x] 2.2 Add wrapper border styles matching `Accordion`'s border/hover/open behavior and theme colors
- [x] 2.3 Suppress individual `Accordion` borders when nested directly inside `AccordionGroup` (descendant selector overriding the base border rule), leaving standalone `Accordion` usage unaffected

## 3. Verification

- [x] 3.1 Manually render both components in a test/demo page (or existing Astro page) to confirm open/close behavior, chevron rotation, hover/open borders, and light/dark theming
- [x] 3.2 Confirm border moves from individual accordions to the group wrapper only when accordions are nested inside `AccordionGroup`
