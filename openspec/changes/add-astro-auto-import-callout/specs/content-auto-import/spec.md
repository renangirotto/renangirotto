## ADDED Requirements

### Requirement: Callout auto-import in content files
The system SHALL make the `Callout` component available in every Markdown/MDX content file without requiring an explicit `import` statement.

#### Scenario: Using Callout without an import
- **WHEN** an `.mdx` file under the content collections uses `<Callout title="..." text="..." />` and does not import `Callout` itself
- **THEN** the site builds successfully and renders the `Callout` component using `src/components/Callout.astro`

#### Scenario: Existing manual imports still work
- **WHEN** an `.mdx` file explicitly imports `Callout` itself
- **THEN** the build succeeds and the explicit import takes precedence without producing a duplicate-identifier error
