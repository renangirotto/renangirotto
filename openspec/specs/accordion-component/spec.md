## Purpose

TBD

## Requirements

### Requirement: Accordion renders as native details/summary with title, icon, and slotted content
The `Accordion` component SHALL render a `<details>` element containing a `<summary>` with a `title` prop and a `ChevronDown` icon, and a content area below the summary that renders the component's default slot children.

#### Scenario: Component receives a title and children
- **WHEN** `Accordion` is rendered with `title="What is harness in agentic development?"` and slotted content `<p>Lorem ipsum dolor sit amet</p>`
- **THEN** the summary displays the title text and a chevron-down icon, and the content area renders the slotted `<p>` below the summary

### Requirement: Accordion chevron icon reflects open/close state
The `Accordion` component SHALL rotate the `ChevronDown` icon when the `<details>` element is in its `open` state, so the icon visually indicates expanded vs collapsed.

#### Scenario: User opens the accordion
- **WHEN** the user clicks the summary and the `<details>` element becomes `open`
- **THEN** the chevron icon rotates to indicate the expanded state

#### Scenario: User closes the accordion
- **WHEN** the user clicks the summary again and the `<details>` element is no longer `open`
- **THEN** the chevron icon returns to its default (non-rotated) orientation

### Requirement: Accordion border and hover/open states
The `Accordion` component SHALL render with a transparent base border, and SHALL show a visible border on hover and while the `<details>` element is `open`. While `open`, a divider line SHALL render between the summary and the content area, using the same border color as the visible border.

#### Scenario: Accordion is idle (closed, not hovered)
- **WHEN** `Accordion` is rendered closed and not hovered
- **THEN** its border is transparent and no divider line renders

#### Scenario: User hovers the accordion
- **WHEN** the user hovers over the `Accordion`
- **THEN** a visible border renders around it

#### Scenario: Accordion is open
- **WHEN** the `<details>` element is `open`
- **THEN** a visible border renders around it regardless of hover state, and a divider line renders between the summary and the content area

### Requirement: Accordion adapts border, background, and text color to light/dark theme
The `Accordion` component SHALL use `light-dark()` to select its visible border color, background color, and text color: dark theme uses `--color-dark-comment-200` (border), `--color-dark-selection-200` (background), and `--color-dark-foreground-100` (text); light theme uses `--color-light-comment-100` (border), `--color-light-background-200` (background), and `--color-light-foreground-100` (text).

#### Scenario: Page is in dark mode
- **WHEN** the page's color scheme resolves to dark
- **THEN** the Accordion's visible border renders with `--color-dark-comment-200`, its background with `--color-dark-selection-200`, and its text with `--color-dark-foreground-100`

#### Scenario: Page is in light mode
- **WHEN** the page's color scheme resolves to light
- **THEN** the Accordion's visible border renders with `--color-light-comment-100`, its background with `--color-light-background-200`, and its text with `--color-light-foreground-100`

### Requirement: Accordion summary and default content spacing
The `Accordion` component SHALL apply 16px `padding-block` and 16px `padding-inline` to the summary. Slotted `p` tags SHALL receive base spacing of 24px `padding-block` and 16px `padding-inline` unless overridden by the slotted content itself.

#### Scenario: Component is rendered with a summary and a paragraph child
- **WHEN** `Accordion` is rendered with `title="Example"` and a slotted `<p>` child
- **THEN** the summary has 16px block and 16px inline padding, and the `<p>` has 24px block and 16px inline padding

### Requirement: Accordion exports its Props type
The `Accordion` component SHALL export its props interface (`export interface Props`) so consuming code can import and reference the component's prop types.

#### Scenario: Another module imports Accordion's props type
- **WHEN** a consumer imports `Props` from `Accordion.astro`
- **THEN** the imported type reflects the component's `title` prop
