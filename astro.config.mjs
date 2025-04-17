// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://q-kawasaki-astro-practice.netlify.app/",
  integrations: [preact()]
});