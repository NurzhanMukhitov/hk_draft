// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const base = process.env.BASE_PATH || '/';
const site =
  base === '/'
    ? 'https://axisparts.hk'
    : `https://nurzhanmukhitov.github.io${base.replace(/\/$/, '')}`;

// https://astro.build/config
export default defineConfig({
  site,
  base,
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
