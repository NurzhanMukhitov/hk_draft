// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://axisparts.hk',
  trailingSlash: 'never',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      // zh-CN locale served at /zh-cn/ URL (lowercase path).
      // Folder is src/pages/zh-cn/, locale code stays proper BCP 47 'zh-CN'.
      { codes: ['zh-CN'], path: 'zh-cn' },
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
