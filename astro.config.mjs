import { defineConfig } from "astro/config";

import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import AutoImport from "astro-auto-import";
import mermaid from "astro-mermaid";

export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        "./src/components/Accordion.astro",
        "./src/components/ArticleTitle.astro",
        "./src/components/Callout.astro",
      ],
    }),
    mermaid({
      theme: "dracula",
      autoTheme: true,
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
