## Purpose

TBD

## Requirements

### Requirement: Callout renders title, icon, and text
The `Callout` component SHALL render a `CircleQuestionMark` icon and a `title` prop in a header row, and a `text` prop in a body area below, separated by a divider line.

#### Scenario: Component receives title and text props
- **WHEN** `Callout` is rendered with `title="What is harness in agentic development?"` and `text="Lorem ipsum dolor sit amet, that lorem ipsum dolor sit amet"`
- **THEN** the header displays the question-mark icon followed by the title, and the body displays the text below a divider line

### Requirement: Callout adapts colors to light/dark theme
The `Callout` component SHALL use `light-dark()` to select background, divider, and text/icon colors: dark theme uses `--color-dark-orange-100-opacity-15` (divider), `--color-dark-orange-100-opacity-25` (background), and `--color-dark-orange-100` (text/icon); light theme uses `--color-light-yellow-100-opacity-15` (divider), `--color-light-yellow-100-opacity-25` (background), and `--color-light-yellow-100` (text/icon).

#### Scenario: Page is in dark mode
- **WHEN** the page's color scheme resolves to dark
- **THEN** the Callout background renders with `--color-dark-orange-100-opacity-25`, its divider with `--color-dark-orange-100-opacity-15`, and its text/icon with `--color-dark-orange-100`

#### Scenario: Page is in light mode
- **WHEN** the page's color scheme resolves to light
- **THEN** the Callout background renders with `--color-light-yellow-100-opacity-25`, its divider with `--color-light-yellow-100-opacity-15`, and its text/icon with `--color-light-yellow-100`

### Requirement: Callout spacing and typography match spec
The `Callout` component SHALL apply 16px padding on all sides of the header, 16px padding on all sides of the body except a 24px `padding-block-end`, an 18px (rem) header font size, a 16px (rem) body text font size, and a 24x24px icon.

#### Scenario: Component is rendered
- **WHEN** `Callout` is rendered
- **THEN** the header has 16px padding on all sides, the body has 16px padding on all sides except a 24px bottom padding, the title text is 1.125rem, the body text is 1rem, and the icon is 24px by 24px
