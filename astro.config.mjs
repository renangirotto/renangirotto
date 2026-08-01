import { defineConfig } from "astro/config";

import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";

import AutoImport from "astro-auto-import";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    AutoImport({
      imports: ["./src/components/Callout.astro"],
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    processor: unified(),
    shikiConfig: {
      theme: "dracula",
    },
  },
  site: "https://renangirotto.dev",
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
