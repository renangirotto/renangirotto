/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// fontsource packages have no "exports"/"types" field, just main: index.css,
// which TS's bundler resolution won't chase through the *.css ambient module
declare module "@fontsource/nanum-pen-script";
declare module "@fontsource-variable/raleway";
