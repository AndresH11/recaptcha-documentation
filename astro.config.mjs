// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  integrations: [react(), icon()],
  i18n: {
    defaultLocale: 'es',
    locales: [
      'es',
      'en',
      'fr',
      'it',
      'pt',
      'pt-BR',
      'ja',
      'ko'
    ],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  site: 'https://andresh11.github.io',
  base: 'recaptcha-documentation',
  trailingSlash: 'always'
});