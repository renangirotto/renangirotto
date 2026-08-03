## ADDED Requirements

### Requirement: AccordionGroup wraps multiple Accordion children
The `AccordionGroup` component SHALL render a wrapper container around its default slot, intended to hold multiple `Accordion` components as direct children.

#### Scenario: Component receives multiple Accordion children
- **WHEN** `AccordionGroup` is rendered with two or more `Accordion` components as slotted children
- **THEN** the wrapper renders around all of them, and each `Accordion` renders its own title, icon, and content as normal

### Requirement: AccordionGroup owns the border, not its inner Accordions
When an `Accordion` is rendered as a direct child of `AccordionGroup`, the border, hover, and open-state border behavior SHALL apply to the `AccordionGroup` wrapper instead of to the individual `Accordion` elements, which SHALL render borderless.

#### Scenario: Accordion is rendered inside AccordionGroup
- **WHEN** an `Accordion` is rendered as a direct child of `AccordionGroup`
- **THEN** the individual `Accordion` renders without its own border in any state (idle, hover, open), and the `AccordionGroup` wrapper shows the transparent/hover/open border behavior instead

#### Scenario: Accordion is rendered standalone (not inside AccordionGroup)
- **WHEN** an `Accordion` is rendered outside of an `AccordionGroup`
- **THEN** it renders its own border, hover, and open-state border behavior as defined in the `accordion-component` spec

### Requirement: AccordionGroup uses the same theme colors as Accordion
The `AccordionGroup` wrapper border SHALL use the same `light-dark()` color mapping as the `Accordion` component's border: dark theme uses `--color-dark-comment-200`; light theme uses `--color-light-comment-100`.

#### Scenario: Page is in dark mode
- **WHEN** the page's color scheme resolves to dark
- **THEN** the `AccordionGroup` wrapper's visible border renders with `--color-dark-comment-200`

#### Scenario: Page is in light mode
- **WHEN** the page's color scheme resolves to light
- **THEN** the `AccordionGroup` wrapper's visible border renders with `--color-light-comment-100`

### Requirement: AccordionGroup exports its Props type
The `AccordionGroup` component SHALL export its props interface (`export interface Props`) so consuming code can import and reference the component's prop types.

#### Scenario: Another module imports AccordionGroup's props type
- **WHEN** a consumer imports `Props` from `AccordionGroup.astro`
- **THEN** the imported type reflects the component's props
