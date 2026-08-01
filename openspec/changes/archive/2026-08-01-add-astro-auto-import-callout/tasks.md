## 1. Dependency

- [x] 1.1 Add `astro-auto-import` to `package.json` dependencies and install it

## 2. Configuration

- [x] 2.1 Import `AutoImport` from `astro-auto-import` in `astro.config.mjs`
- [x] 2.2 Register `AutoImport({ imports: [{ "@/components/Callout.astro": ["default", ["default", "Callout"]] }] })` (or equivalent named mapping) before `mdx()` in the integrations array

## 3. Verification

- [ ] 3.1 Add/use `<Callout title="..." text="..." />` in an `.mdx` file without importing it and confirm `npm run build` succeeds
- [ ] 3.2 Confirm the callout renders correctly in the built page
