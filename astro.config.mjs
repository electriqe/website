import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://bitwrap.neobrains.me',
  integrations: [tailwind(), prefetch(), compress(), sitemap()]
});