import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://fonsbonitatis.org',

  build: {
    assets: 'assets'
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [tailwind({ applyBaseStyles: false })]
});