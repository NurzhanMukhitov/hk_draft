/** Prefix for internal links — respects Astro `base` on GitHub Pages. */
const root = import.meta.env.BASE_URL.replace(/\/$/, '');

export function sitePath(path: string): string {
  if (path.startsWith('#')) return `${root || ''}${path}`;
  if (path === '/') return root || '/';
  if (path.startsWith('/')) return `${root}${path}`;
  return `${root}/${path}`;
}

export function localeRoot(locale: 'en' | 'zh-CN'): string {
  return locale === 'en' ? sitePath('/') : sitePath('/zh-cn');
}

/** Public folder asset (`/images/...`, `/fonts/...`). */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return sitePath(p);
}
