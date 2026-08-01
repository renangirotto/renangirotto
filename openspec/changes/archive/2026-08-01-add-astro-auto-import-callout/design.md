## Context

`astro.config.mjs` currently registers `mdx()` and `sitemap()`. Content authors write `.mdx` files under `src/content/blog/` and want to use `Callout.astro` without repeating the import in every file's frontmatter.

## Goals / Non-Goals

**Goals:**
- Auto-import `Callout` from `src/components/Callout.astro` into every Markdown/MDX file.
- Keep config change minimal and consistent with existing integration list.

**Non-Goals:**
- Auto-importing any other component (only `Callout` for now).
- Changing `Callout.astro`'s API or styling.

## Decisions

- Use `astro-auto-import`'s `AutoImport` integration, mapping `Callout` to the existing `@/components/Callout.astro` alias, matching the alias already defined in `vite.resolve.alias`.
  - Alternative considered: keep manual imports per MDX file — rejected as the whole point of this change is to remove that boilerplate.
- Register `AutoImport` before `mdx()` in the integrations array, since `astro-auto-import` docs require it to run before the MDX integration to inject imports into `.mdx` remark processing.

## Risks / Trade-offs

- [Import name collists with a local variable/component in some MDX file] → Unlikely given `Callout` is not a common name; if needed, authors can shadow it with a local import.
- [New dependency adds a small maintenance surface] → Small, single-purpose package; acceptable given the boilerplate it removes.
