import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import { SITE } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE.siteUrl,
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "dracula"
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    },
    ssr: {
      external: ["svgo"]
    }
  },

  integrations: [mdx(), sitemap(), tailwind(), prefetch(), react()]
});
