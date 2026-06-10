# Claude Design — Brief для AxisParts (HK Industrial Supply)

> **Как пользоваться:** на claude.ai/design создаёшь new prototype в Hi-Fi.
> «Design system» НЕ заполняешь (по выводам UI Collective video — не работает).
> Просто кидаешь промпт из **Part 1** в первое сообщение, перетаскиваешь
> изображения, отвечаешь на вопросы Claude Design из **Part 2**.

---

## PART 1 — Промпт для первого сообщения

Скопируй блок ниже целиком и вставь в Claude Design:

```
Build a B2B website for AxisParts — Hong Kong-based multibrand industrial supplier
of original spare parts from Siemens, ABB, Schneider Electric, Mitsubishi Electric,
Omron, Fanuc, Allen-Bradley (Rockwell), Yaskawa, Delta Electronics, Honeywell,
Bosch Rexroth, Panasonic, and 1000+ more global brands.

╔════════════════════════════════════════════════════════════════════╗
║  ⚠ CRITICAL — READ THIS FIRST, IT OVERRIDES ANY DEFAULT TEMPLATE ⚠  ║
╚════════════════════════════════════════════════════════════════════╝

I am CARDINALLY REJECTING the generic B2B industrial supply template.
If your first attempt looks like ANY of the patterns below — REDO from scratch.

═══ ANTI-PATTERNS YOU MUST NOT PRODUCE ═══

✗ Dark / black backgrounds (terramine.ng pattern)
✗ Split hero: big sans headline LEFT + big machinery photo RIGHT
✗ Stock photos of factories / mining trucks / workers as hero image
✗ Carousel hero with rotating slides
✗ "Request Quote" CTA glued to top-right corner of header
✗ Sans-serif giant hero headlines (we use SERIF — see typography below)
✗ Generic Bootstrap-style card grids with gear/cog icons
✗ "Trusted by 3000+ companies" badge wall in a 4-row grid
✗ Conversion-page funnel layout (Hero → Features → Testimonials → CTA)
✗ ANY layout resembling these reference competitors:
   – terramine.ng (Mine Parts) — THE pattern to invert
   – mooreplc.com · cdlambor.com · antletstech.com · swdwq.com · gongboshi-robot.com
   These are ALL the WRONG answer. If your output looks like them, you failed.

If you find yourself reaching for any of the above — STOP and reconsider.

═══ POSITIVE VISION — "Editorial Trade Document" ═══

This site looks like a HONG KONG TRADE DOCUMENT or CORPORATE ANNUAL REPORT,
not a B2B SaaS landing page.

Inspirational feel:
- The Economist online (editorial gravitas, serif identity)
- Financial Times corporate pages
- Li & Fung corporate (HK trade house)
- HSBC institutional pages
- An IPO prospectus cover or central-bank publication

═══ CARDINAL VISUAL PRINCIPLES ═══

1. LIGHT, not dark — primary background is WHITE (#FFFFFF). No dark hero.
2. TYPE-DRIVEN, not photo-driven — the hero is TYPOGRAPHY as the design feature,
   not a stock image. Photos appear LATER in the page, never as the hero centerpiece.
3. ASYMMETRIC editorial layout — multi-column like a newspaper front page,
   NOT balanced 12-column SaaS grid. Different sections use different column counts.
4. MASSIVE SERIF as design element — IBM Plex Serif headlines at 80-140px,
   set tight, used as visual anchors. Body in IBM Plex Sans for contrast.
5. NUMBERS AS TYPOGRAPHY — "1000 brands · 50 countries · since 2026" rendered
   as a typographic element (large serif), NOT as stat-cards with icons.
6. ULTRA-RESTRAINED palette — 80% white, 18% navy #003D7A, 2% gold #FFC107
   (used only as a 1px rule between sections, never as fills). Single red #DC2626
   on the one primary CTA only. NO other colors. Ever.
7. GENEROUS WHITE SPACE — HK premium banking feel. Sections breathe.
   But the CONTENT inside sections is dense (real information, not marketing).
8. SINGLE THIN GOLD HAIRLINE (#FFC107, 1px) as section divider — the only
   decorative element. No drop shadows, no rounded corners over 4px,
   no gradients, no glassmorphism.

═══ TYPOGRAPHY ═══

- Body & UI: IBM Plex Sans (300, 400, 500, 600)
- Editorial display: IBM Plex Serif (600, 700) — for hero, section headers, numbers
- Open letter-spacing on the wordmark and section eyebrows (Tiffany / NYT breathing room)
- Hero H1: SERIF, 80-140px desktop, weight 700, letter-spacing -0.02em
- Section labels (eyebrows): IBM Plex Sans, 11px, uppercase, letter-spacing 0.18em, GOLD #FFC107

═══ PALETTE (final, no other colors allowed) ═══

- Background: #FFFFFF (white)
- Primary navy: #003D7A (used for section banners, body text accents, footer bg)
- Gold accent: #FFC107 (eyebrows + 1px section rules ONLY — never as fill)
- Red CTA: #DC2626 (only on the single primary call-to-action button)
- Body text: #1A1A1A
- Muted text: #6B7280

═══ LOGO — V3b "Luxury Caps" (LOCKED — render this exact SVG) ═══

"AXIS | PARTS" — pure typographic wordmark, ALL CAPS, no graphic mark, no icon.
- "AXIS" in IBM Plex Serif weight 600, letter-spacing 4 (very open tracking)
- A gold vertical rule (#FFC107, 1.8 × 24px) between the two words
- "PARTS" in IBM Plex Sans weight 300, letter-spacing 6 (luxury-house open tracking)
- The logo file is attached as v3_caps.svg — render this EXACT SVG inline.
  DO NOT redraw or restyle it. DO NOT change to mixed-case. DO NOT close the tracking.
- Aesthetic thesis: luxury-house caps (Louis Vuitton / HSBC corporate level)
  + serif gravitas + sans modern + gold-thread restraint.

═══ HERO — Corrected spec (locked, Asian Trade Authority) ═══

⚠ Earlier iterations of this brief drifted into editorial publication territory
(The Economist / FT). That was overcorrection. RESET to corporate trade authority.

HERO SPEC (single canonical hero, no A/B options):

- 80vh height, full-width
- BACKGROUND: a wide atmospheric photograph — Hong Kong container port at golden
  hour OR a wide establishing shot of heavy industrial equipment.
  NOT a single mining truck (terramine pattern). Wider, more cinematic, less
  literal.
- Strong navy #003D7A overlay at 70% opacity on the photo — this gives the
  navy color mass back that was missing in the publication-style draft.
- TOP STRIP (full-width, ~28px tall): gold #FFC107 band with white text:
  "HONG KONG · INDUSTRIAL SUPPLY · EST. 2026"
- HEADER overlaid on hero: logo (v3_caps.svg) in white left + nav in white center
  + language switcher right. NO Get-Quote button in header.
- HEADLINE (white IBM Plex Serif 700, 80-110px desktop) overlaid bottom-left of
  hero: "Global Multi-Brand Industrial Supply" (or similar single statement).
- BODY (1-2 lines max, white IBM Plex Sans 18px) below headline: factual
  description of the business.
- CTA: single red #DC2626 actual button (with padding, white text) — "Request a
  Quote →". NOT text-in-brackets. NOT inline link.
- Below hero (separate band, ~120px tall, navy #003D7A bg): stats row in white
  serif — "1,000 BRANDS  ·  50 COUNTRIES  ·  24/7 SOURCING" — bold numbers +
  small-caps subtitles.

WHAT TO KEEP from earlier draft:
- Modern IBM Plex Serif as headline typography
- Gold accent restraint
- Navy as primary color
- Restraint on visual decoration

WHAT TO DROP from earlier draft (these were overcorrection into publication):
- Drop caps, Vol/Issue metadata, page numbers, ISSN codes
- "Filed in HK · Reg AXP-2026-001" press-footer metadata
- "Vol. 01 No. 1 · 25 May 2026" masthead-style codes
- Dotted column rules, drop-quotes, "press section breaks"
- Pure white pages with no color mass — we need navy presence

REFERENCE FEEL (corporate trade authority, NOT editorial publication):
- Hutchison Whampoa corporate homepage
- Bosch Rexroth product hero pages
- Schneider Electric China corporate sections
- Li & Fung company pages
- DBS Bank corporate Asia

NOT references anymore:
- The Economist / Financial Times / IPO prospectus → these were the overcorrection
- terramine.ng / mooreplc.com → still rejected (dark + split + machinery photo)

Render ONE consolidated hero only. No A vs B comparison this time.

═══ SECTIONS (after hero is locked) ═══

1. HERO (one of A or B above)
2. QUICK RFQ — full-width section, navy banner background (#003D7A), serif label
   "Request a Quotation" in white left, white card form on right (NOT in the hero).
   Fields: Part Number · Brand · Model · Quantity · Country · Email · file upload
3. BRANDS WALL — the MOST IMPORTANT trust block.
   White bg. Editorial layout: 12 brand wordmarks shown as TEXT (not logos initially),
   set in their own visual style alphabetically across 3-4 rows, separated by thin
   gold rules. Eyebrow: "BRANDS WE SUPPLY". Below: "and 1000+ more — request a brand."
   (Later we'll replace text wordmarks with actual brand SVG logos in monochrome.)
4. PRODUCT CATEGORIES — 8 items shown as an asymmetric editorial mosaic, not
   8 equal cards. Mix of sizes: 1 large feature item + 7 smaller, each with image
   from the attached files.
5. INDUSTRIES SERVED — 8 items in a horizontal scrolling strip, each industry
   as a tall portrait-orientation card with image + label. Scroll, NOT grid.
6. HOW IT WORKS — 4 numbered steps, but laid out as a HORIZONTAL TIMELINE
   with a thin gold rule connecting them. Each step is a column with a number
   in serif 60px + label + 1-line description.
7. GLOBAL SUPPLY NETWORK — minimalist world map (single navy line drawing,
   no shading, no satellite image) with 5 region pin-markers + freight strip below.
8. FINAL CTA — full-width white section. Massive serif "Looking for industrial parts?"
   centered. Single red CTA. NOTHING else in this section. Pure breath.

═══ HEADER ═══

White, sticky, height ~64px. Thin navy bottom border (1px).
- Logo left (Axis | Parts wordmark)
- Nav middle: Brands · Categories · Industries · How It Works · Contact
  (separated by gold middle-dots ·)
- Right: language switcher (English | 简体中文)
- NO "Get Quote" button in header. Make the page itself drive the user to RFQ.
  (THIS IS A CARDINAL DIFFERENCE — competitors all have a sticky CTA in header.)

═══ FOOTER ═══

Navy (#003D7A) background, white text. Editorial structure:
- TOP rule: gold hairline
- 4 columns: Brand (with reversed logo) · Brands list · Categories list · Contact
- BOTTOM rule: full-width thin gold hairline
- Tiny "© 2026 AxisParts. HK Business Registration in good standing." on one line.

═══ LANGUAGE ═══

Build EN version first. Bilingual support EN + 简体中文 (Simplified Chinese)
will mirror structure. Reserve translatable string slots.

═══ TONE OF VOICE ═══

Authoritative, factual, editorial. NO marketing fluff. NO superlatives
("the best", "world-class", "industry-leading"). Numerical claims only.
Read like a Hong Kong trade publication, not like a SaaS website.

═══ IMAGE ASSETS — EXPLICIT FILE MAPPING ═══

I have attached three folders. Use them as follows. These are PLACEHOLDER images
for initial generation — final images will be regenerated later, do not re-source
or substitute with stock photos. Use the files exactly as named.

CATEGORIES section (section 4) — 8 cards, this order, these exact files:
  card 1: PLC & Controllers       → categories/01_plc_controllers.jpeg
  card 2: Servo Motors & Drives   → categories/02_servo_drives.jpeg
  card 3: Sensors & Switches      → categories/03_sensors_switches.jpeg
  card 4: HMI & Panels            → categories/04_hmi_panels.jpeg
  card 5: Power Supplies          → categories/05_power_supplies.jpeg
  card 6: Industrial Robots       → categories/06_industrial_robots.jpeg
  card 7: CNC Components          → categories/07_cnc_components.jpeg
  card 8: Automation Spare Parts  → categories/08_spare_parts.jpeg

INDUSTRIES section (section 5) — 8 cards, this order, these exact files:
  card 1: Manufacturing    → industries/01_manufacturing.jpeg
  card 2: Automation       → industries/02_automation.jpeg
  card 3: Electronics      → industries/03_electronics.jpeg
  card 4: Energy           → industries/04_energy.jpeg
  card 5: Oil & Gas        → industries/05_oil_gas.jpeg
  card 6: Mining           → industries/06_mining.jpeg
  card 7: Marine           → industries/07_marine.jpeg
  card 8: Infrastructure   → industries/08_infrastructure.jpeg

The /brief/ folder is REFERENCE CONTEXT ONLY (client's original docx screenshots).
DO NOT use brief/ images on the site itself.

Hero — NO photo (type-driven, see Hero spec above).
Brands wall — text wordmarks initially (logos come later).

═══ DELIVERABLE FOR THIS TURN ═══

Show me BOTH hero options A (Editorial Cover) and B (Trade Dossier) side by side
in the first generation. I will pick one. We will then build sections 2-8.

If your output is anything that looks like a generic B2B industrial supply landing —
re-read the anti-patterns and try again. We are explicitly going AGAINST the niche
norm.
```

---

## PART 2 — Готовые ответы на вопросы Claude Design

Claude Design после промпта задаст серию структурированных вопросов. Используй
эти ответы (по выводам UI Collective video — он задаёт их одинаково):

| Вопрос Claude Design | Твой ответ |
|---|---|
| **Product core concept** | AxisParts — Hong Kong multibrand industrial supply. Lead-generation via RFQ form, NOT e-commerce. |
| **Primary audience** | Procurement managers and sourcing engineers at mainland Chinese factories + global B2B industrial buyers |
| **Visual direction** | Tech Utility (closest to "Asian Trade Authority") OR pick "Decide for me" if Tech Utility isn't refined |
| **Onboarding steps / page sections** | All 8 specified in prompt above |
| **Device frame** | Browser Chrome (desktop-first, mobile responsive) |
| **Single flow vs options** | Single flow |
| **Novel / experimental level** | 2/10 — conservative B2B authority, NOT avant-garde |
| **Color theme** | Navy #003D7A primary + gold #FFC107 accent + red #DC2626 CTA |
| **Animation intensity** | 2/10 — minimal, professional (fade-ups only, no parallax/scroll-driven) |
| **Tweaks to expose** | color theme, brand wall density, animation intensity |
| **Tone** | Authoritative, factual |
| **Anything else to add?** | "Avoid generic split-hero pattern — competitors all use it" |

---

## PART 3 — Изображения для перетаскивания

Я извлёк все картинки из твоего брифа в чистые JPG-файлы. Когда Claude Design
будет генерить секции Categories и Industries — **перетащи эти файлы прямо
в чат-инпут** (он принимает drag-and-drop):

### Папка `/Users/nmk_one/Downloads/github/hk/images/categories/` — 8 JPG
```
01_plc_controllers.jpeg
02_servo_drives.jpeg
03_sensors_switches.jpeg
04_hmi_panels.jpeg
05_power_supplies.jpeg
06_industrial_robots.jpeg
07_cnc_components.jpeg
08_spare_parts.jpeg
```

### Папка `/Users/nmk_one/Downloads/github/hk/images/industries/` — 8 JPG
```
01_manufacturing.jpeg
02_automation.jpeg
03_electronics.jpeg
04_energy.jpeg
05_oil_gas.jpeg
06_mining.jpeg
07_marine.jpeg
08_infrastructure.jpeg
```

### Папка `/Users/nmk_one/Downloads/github/hk/images/brief/` — 10 JPG
Изображения из исходного брифа клиента (cover, скриншоты структуры). Не для
финального сайта, но можешь показать Claude Design для контекста.

### Hero photo — ЕЁ НЕТ
Для hero нужно фото HK-порта / тяжёлой индустрии. Варианты:
- Сгенерировать через Claude Design прямо в проекте (он умеет gpt-image-2)
- Взять с Unsplash: «hong kong port», «container terminal», «heavy machinery»
- В первом проходе использовать placeholder, потом заменим

---

## PART 4 — Что делать после первого драфта

1. **Claude Design покажет 2 варианта Hero** → выбираешь лучший
2. **Просишь сгенерировать Hero photo** (Claude Design умеет через gpt-image-2):
   `"Generate a wide cinematic photo of Hong Kong container port at golden hour, heavy industrial cranes, freight containers, warm late-afternoon light, depth, professional, photorealistic. Aspect ratio 16:9, high detail."`
3. **Итерируешь по очереди:** Brands wall → Categories → Industries → How It Works → Global Supply → Final CTA
4. **На каждой итерации добавляешь свои фото** (drag&drop из папок выше)
5. **Когда драфт устроит** → жми «Hand off to Claude Code» → возвращаешься ко мне в Claude Code → я допиливаю код по дизайну
6. **НЕ ставь свой Custom Design System** в Claude Design (по выводам UI Collective video — токены сожжёт, результат хуже)

---

## PART 5 — Что в `/Users/nmk_one/Downloads/github/hk/site/` (мой scaffold)

Этот код я собрал зря — это не то, что ты ждал. Оставляю как fallback:
- если Claude Design не справится — есть рабочая база (Astro 5 + Tailwind v4 + i18n + Direction B токены + Header + Footer)
- логотип Logo.astro можно переиспользовать (V3a Authority уже в SVG)
- цветовая палитра и шрифты в `src/styles/global.css` готовы

**Можешь удалить эту папку** (`rm -rf site/`) без потерь, или оставить.
Я к ней без твоего слова не вернусь.

---

## ОДНА КЛЮЧЕВАЯ ЗАПИСЬ — НЕ ПУТАТЬ С ПРОШЛЫМ РАЗОМ

Hero — **full-width photo с overlay**. НЕ split layout. НЕ форма справа в hero.
Форма RFQ — отдельной секцией ниже на navy фоне.

Если Claude Design попытается сделать split — отвечай в чате:
> «No split layout in hero. Full-width photo background with text overlay only.
> RFQ form goes in a separate section below the hero.»
