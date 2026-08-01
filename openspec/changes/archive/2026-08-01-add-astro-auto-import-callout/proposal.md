## Why

Blog posts currently need `import Callout from "@/components/Callout.astro"` in the frontmatter of every MDX file that wants a callout. `astro-auto-import` lets the integration inject that import automatically for any `.md`/`.mdx` file, removing repetitive boilerplate as more content files start using the component.

## What Changes

- Add the `astro-auto-import` dependency.
- Register the `AutoImport` integration in `astro.config.mjs`, configured to auto-import `Callout` from `src/components/Callout.astro` into MDX/Markdown content.
- No changes to the `Callout.astro` component itself.

## Capabilities

### New Capabilities
- `content-auto-import`: Automatic component imports available inside Markdown/MDX content via the `astro-auto-import` integration.

### Modified Capabilities
(none)

## Impact

- `package.json` / lockfile: new dependency `astro-auto-import`.
- `astro.config.mjs`: new integration registration.
- Content authors: can use `<Callout title="..." text="..." />` in `.mdx` files without an explicit import.
