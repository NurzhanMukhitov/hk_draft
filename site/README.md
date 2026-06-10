# AxisParts — Hong Kong Industrial Sourcing Desk

Bilingual B2B multibrand industrial supply website. Lead-gen via RFQ form.

## Stack

- **Astro 5** — static-first, fast cold loads in mainland China
- **React islands** — for the interactive RFQ form and (later) Catalogue filters
- **CSS** — design tokens + components imported as-is from the AxisParts Design System handoff (`src/styles/colors_and_type.css`, `components.css`, `kit.css`, `fonts.css`)
- **Fonts** — IBM Plex Serif / Sans / Mono + IBM Plex Sans SC (简体中文), self-hosted in `public/fonts/`
- **i18n** — EN (default, `/`) + 简体中文 (`/zh-cn/`)

## Dev

```bash
npm install
npm run dev
```

- EN: <http://localhost:4321/>
- ZH: <http://localhost:4321/zh-cn> (not yet built — coming in next session)

## Build

```bash
npm run build && npm run preview
```

## Design System Source

The design tokens, components, and assets in this project were exported from the AxisParts Design System project on Claude Design. The handoff bundle lives at:

```
/Users/nmk_one/Downloads/github/hk/handoff/axisparts-design-system/
```

See `axisparts-design-system/project/README.md` for the full brand bible.

## Non-negotiable brand rules

- **Palette budget**: 70% white · 25% navy `#003D7A` · 4% gold `#FFC107` (rules + eyebrows ONLY) · 1% red `#DC2626` (one CTA per view)
- **Type**: IBM Plex Serif (display) · Sans (body) · Mono (codes). One weight per role. No italic / color emphasis on individual words.
- **Section headers**: whisper-quiet top-right eyebrow + 24px gold rule. Never a big centered banner.
- **Edges**: radius 0 (max 4px). No drop shadows.
- **Anti-patterns**: see brand bible. If your output contains any, redo from scratch.

## Project structure

```
src/
├── pages/
│   ├── index.astro          # EN home (built)
│   └── zh-cn/index.astro    # ZH home (TODO)
├── layouts/
│   └── BaseLayout.astro     # <head>, Header, slot, Footer
├── components/
│   ├── Logo.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── SectionHeader.astro
│   └── sections/
│       ├── Hero.astro
│       ├── Categories.astro
│       ├── BrandWall.astro
│       ├── IndustriesServed.astro
│       ├── HowItWorks.astro
│       ├── GlobalSupply.astro
│       └── QuickRFQ.tsx     # React island (form state)
├── i18n/dict.ts             # bilingual strings
├── data/catalogue.ts        # 12 brands, 8 categories, 8 industries, products
└── styles/
    ├── global.css           # imports the 4 design-system CSS files
    ├── fonts.css
    ├── colors_and_type.css
    ├── components.css
    └── kit.css
```

## Roadmap

- [x] Project scaffold + design tokens loaded
- [x] Logo, Header, Footer
- [x] Home page in EN (Hero · Categories · Brand wall · Industries · How it works · Global supply · Quick RFQ)
- [ ] ZH locale (`/zh-cn/`)
- [ ] Catalogue page
- [ ] Product detail page
- [ ] Full Quote page
- [ ] RFQ form backend (Resend / Web3Forms)
- [ ] Deploy to Vercel (HK region)
- [ ] Mainland China access test (17ce.com, chinafirewalltest.com)
