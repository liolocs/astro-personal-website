// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// Set SITE_URL in your production build environment once your Cloudflare
// domain is set up (run `npm run setup` first to authenticate with wrangler).
const site = process.env.SITE_URL || "http://localhost:4321"

// https://astro.build/config
export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx(), sitemap()],
  adapter: cloudflare(),
})