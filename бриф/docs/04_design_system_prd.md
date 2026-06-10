# AxisParts Design System — PRD for Claude Design

> **Как пользоваться:** Создай в Claude Design **новый проект** (НЕ продолжай в "HK"
> — там мусор от 5 итераций). Назови, например, `AxisParts Design System`.
> Скопируй ВЕСЬ блок ниже (от `BEGIN PROMPT` до `END PROMPT`) и вставь как
> первое сообщение. Прикрепи `v3_caps.svg` из папки `logos/`. **Не прикрепляй
> другие картинки** на этом шаге — мы строим систему, не продукт.
>
> Когда система будет залочена → экспортируешь её как Design System в Claude
> Design → в **новом** проекте «AxisParts Site» подключаешь её и уже там
> строишь сайт.

---

```
═══════════════════════════════════════════════════════════════════════════
BEGIN PROMPT — paste this entire block into a fresh Claude Design project
═══════════════════════════════════════════════════════════════════════════

# AxisParts Design System — Spec v1

This is a DESIGN SYSTEM specification, NOT a product brief. Do NOT build any
pages, heroes, or marketing layouts in this turn. Build a design system canvas:
color swatches, typography ramps, component states, spacing tokens, voice
guidelines. We'll build the product website in a separate project AFTER this
design system is locked.

═══ 1. BRAND FOUNDATIONS ═══

Company: AxisParts — Hong Kong-based multibrand industrial sourcing desk.
Position: NOT a manufacturer. NOT a marketplace. A SOURCING DESK — meaning
we are an information / access service that helps procurement teams find
original industrial spare parts from 1,000+ global brands worldwide.

Audience: industrial procurement managers, sourcing engineers, factory
maintenance teams. Primary market = mainland China. Secondary = global.

Brand voice: factual, declarative, restrained. Trade document, not marketing.
Numerical specificity over superlatives. Single-sentence statements, not
paragraphs.

Mood reference set (positive — feel this):
- Hutchison Whampoa corporate homepage
- Li & Fung corporate
- Bosch Rexroth product pages
- Schneider Electric China corporate sections
- DBS Bank corporate Asia
- Aesop product detail pages (for composition restraint)

Anti-references (DO NOT feel like these):
- terramine.ng / mooreplc.com / cdlambor.com / antletstech.com — generic dark
  template B2B with split hero and machinery photo
- The Economist / Financial Times — overcorrection toward editorial publication
- Linear / Vercel / Stripe — Western SaaS minimalism (wrong genre)
- Alibaba supplier pages — cluttered template

═══ 2. COLOR TOKENS ═══

Surface tokens (semantic):
- bg-page          #FFFFFF   page background, default surface
- bg-soft          #F7F8FA   alternating soft section bg (use sparingly)
- bg-navy          #003D7A   primary navy — used for hero, footer, banners,
                              dark sections. THIS IS THE BRAND COLOR.
- bg-navy-deep     #002A52   deeper navy variant — only for footer if needed
- bg-ink           #1A1A1A   extreme dark — avoid; navy is preferred over ink

Text tokens:
- text-primary     #1A1A1A   default text on light backgrounds
- text-on-navy     #FFFFFF   default text on navy
- text-muted       #6B7280   secondary text on light
- text-on-navy-2   rgba(255,255,255,0.70)   secondary text on navy

Accent tokens (USE WITH RESTRAINT):
- accent-gold      #FFC107   ONLY for: eyebrow labels (11px caps), hairline
                              rules between sections, micro-decoration.
                              NEVER as a fill on cards or buttons.
                              NEVER as bg.
- accent-gold-hover #E0A800  hover state for gold elements (rare)

CTA tokens:
- cta-red          #DC2626   primary call-to-action button background.
                              Used on EXACTLY ONE button per screen, period.
                              Never as a fill anywhere else.
- cta-red-hover    #B91C1C   button hover state
- cta-red-active   #991B1B   button active state

Border tokens:
- border-line          #E5E7EB                     default border on light
- border-line-on-navy  rgba(255,255,255,0.10)      default border on navy

Status tokens (used inside RFQ form if validation needed):
- status-success   #16A34A   small text only, never fill
- status-error     #DC2626   reuses CTA red
- status-warning   #F59E0B   rare

PALETTE PROPORTIONS (enforce these ratios):
- 70% white / soft white surface
- 25% navy as color mass (hero bg, footer bg, banners)
- 4% accent gold (rules + eyebrows ONLY)
- 1% red (single primary CTA per view ONLY)
- 0% other colors EVER. No purple. No blue variants. No greens (except status).

═══ 3. TYPOGRAPHY TOKENS ═══

Font families (self-hosted via @fontsource, NO Google Fonts):
- font-display    'IBM Plex Serif'   weights 400, 500, 600, 700
- font-body       'IBM Plex Sans'    weights 300, 400, 500, 600, 700
- font-mono       'IBM Plex Mono'    weights 400, 500 (for codes, part numbers,
                                      technical labels — rare)

Display scale (use serif, for headlines & display numbers):
- display-1   96px / 700 / 1.05 / -0.02em letter-spacing   — hero H1, max once per page
- display-2   72px / 700 / 1.10 / -0.02em                  — major section opener
- display-3   56px / 600 / 1.15 / -0.015em                 — secondary display
- display-4   40px / 600 / 1.20 / -0.01em                  — feature numbers

Heading scale (mostly sans, sometimes serif for emphasis):
- heading-1   32px / serif 600 / 1.20                      — section primary title
- heading-2   24px / sans 600 / 1.30                       — subsection
- heading-3   18px / sans 600 / 1.40                       — card title

Body scale (sans):
- body-lg     18px / 400 / 1.60                            — hero body, intro paragraph
- body-md     16px / 400 / 1.60                            — default body
- body-sm     14px / 400 / 1.50                            — secondary body, labels
- body-xs     13px / 400 / 1.50                            — tertiary

Utility scale:
- eyebrow     11px / sans 500 / 1.40 / 0.18em letter-spacing / UPPERCASE / color gold
              Used as section labels, micro-eyebrows. NEVER bigger than this.
- micro       11px / sans 400 / 1.40                       — meta text, fine print
- button      14px / sans 500 / 1.00 / 0.08em letter-spacing — button text

ABSOLUTE TYPOGRAPHY RULES:
- ONE font weight per role. Never mix weights on the same line.
- NO italic on individual words for emphasis. EVER. If emphasis is needed, use
  the heading scale or bold the entire line.
- NO color emphasis on individual words within a line. If a word needs
  attention, restructure the sentence so it doesn't.
- NO drop caps.
- NO underlines on body text. Underlines only on text-links (gold 1px).
- Letter-spacing is NEGATIVE on display (tighter) and POSITIVE on eyebrow
  (wider). Never both on same element.
- Line-height tighter on display (1.05–1.20), looser on body (1.50–1.60).

═══ 4. SPACING & LAYOUT TOKENS ═══

Spacing scale (8px base, semantic names):
- space-0    0
- space-1    4px      tight icon-text gap
- space-2    8px      micro
- space-3    12px     small
- space-4    16px     default within components
- space-5    24px     between related elements
- space-6    32px     between component groups
- space-7    48px     intra-section spacing
- space-8    64px     section breathing
- space-9    96px     between sections (DEFAULT section spacing)
- space-10   128px    major section breathing (hero only)
- space-11   160px    rare, hero/footer extreme

Container & grid:
- container-max-width    1280px
- container-padding-x    32px desktop / 24px tablet / 20px mobile
- grid                   12-column with 24px gutter

Section vertical padding:
- section-py-default     96px top + 96px bottom (space-9)
- section-py-tight       48px (rare, for dense info sections)
- section-py-hero        90vh height (hero only)

Breakpoints:
- sm   640px
- md   768px
- lg   1024px
- xl   1280px
- 2xl  1536px

═══ 5. BORDER, RADIUS, SHADOW TOKENS ═══

Border widths:
- 1px   default
- 2px   focus rings only

Radius scale:
- radius-none   0px    DEFAULT for cards, buttons, inputs, banners
- radius-sm     2px    very rare
- radius-md     4px    rare (chips/badges only)
- NO radius above 4px anywhere on this site.
- Radius >= 8px is BANNED.

Shadow scale:
- NO shadows by default. ZERO drop shadows.
- focus-ring: 2px solid accent-gold, offset 2px (the only "shadow-like" effect)

ABSOLUTE RULES:
- NO box-shadows
- NO glassmorphism / backdrop-blur
- NO neumorphism
- NO gradients (except 70% navy overlay on a hero photo — that's it)
- Sharp corners. Sharp lines. Sharp typography. No softness.

═══ 6. COMPONENT LIBRARY ═══

Build canvas with all component states visible.

6.1 — Button primary (CTA)
  - bg: cta-red, text: white, font: button token
  - padding: space-4 (16px) vertical, space-6 (32px) horizontal
  - height min: 48px
  - radius: radius-none (0)
  - transition: bg 150ms ease-out
  - states: default / hover / active / focus / disabled
  - example label: "REQUEST A PART NUMBER →"

6.2 — Button secondary
  - bg: transparent
  - border: 1px solid currentColor (navy on light, white on navy)
  - text color matches border
  - padding: same as primary
  - hover: bg currentColor at 5% opacity

6.3 — Button text-link (tertiary)
  - bg: none
  - text: navy or white
  - underline: 1px gold (#FFC107), offset 4px from baseline
  - hover: underline becomes 2px

6.4 — Input field (text/email/number)
  - height: 48px
  - bg: white
  - border: 1px solid border-line
  - padding: 14px 16px
  - font: body-md
  - placeholder: text-muted
  - focus: border-color navy, outline none
  - states: default / focus / filled / error / disabled

6.5 — Textarea
  - same as input but min-height: 96px

6.6 — File upload input
  - dashed border 1.5px, border-line color
  - centered label inside: "Drop file or browse"
  - drag-over state: border navy, bg bg-soft

6.7 — Card (default)
  - bg: white
  - border: 1px solid border-line OR no border
  - padding: space-5 (24px)
  - radius: 0
  - hover: translate-y -4px, border navy, transition 200ms ease-out

6.8 — Image card (for Categories / Industries)
  - aspect: 4:3 image area top
  - padding: 24px on text below
  - title: heading-3
  - hover: same as card

6.9 — Section header pattern (CRITICAL — non-standard)
  - Position: top-right of section, NOT centered, NOT a large banner
  - Composition:
    1. tiny eyebrow label (eyebrow token, gold) — e.g., "BRANDS WE SUPPLY"
    2. 24px wide × 1px tall gold rule, right-aligned with label
  - That's the entire section header. Section content carries the visual weight.
  - DO NOT render section headers as large centered banners.
  - DO NOT add "§01", "§02" numbering.

6.10 — Navigation (header)
  - height: 64px, sticky top
  - bg: white with 1px navy border-bottom — OR transparent on hero (white text)
  - layout: logo left | nav center | lang switcher right
  - nav items separated by gold middle-dot "·"
  - NO "Get Quote" button in header (convention break — important)
  - lang switcher: "EN | 简体中文" with vertical bar separator

6.11 — Footer
  - bg: bg-navy
  - text: text-on-navy (white) and text-on-navy-2 (white 70%)
  - layout: 4-column grid
    col 1: brand (reversed logo + tagline)
    col 2: brands list (top 4 + "1000+ more")
    col 3: categories list (top 4)
    col 4: contact (address, phone, email, WhatsApp, WeChat icons)
  - top: 1px gold hairline divider
  - bottom: 1px white 10% divider
  - tiny micro line at very bottom: "© 2026 AxisParts. HK Business Registration in good standing."

6.12 — Brand wall component
  - layout: 4-column × 3-row grid (12 brand wordmarks)
  - each brand: heading-3 in serif weight 500, text-primary
  - 32px gap between brands
  - 1px gold rule between rows
  - below the grid: small line "and 1,000+ more — request a brand" with gold underline link

6.13 — Stats display (for inside content, NOT as a strip-band)
  - composition: number (display-4 serif) above, caption (eyebrow) below
  - 8px gap between number and caption
  - NEVER laid out as horizontal strip-band with 4 stats. ALWAYS embedded
    in content section, never as standalone hero attachment.

6.14 — Hero photo overlay
  - photo: full-bleed background
  - overlay: solid navy #003D7A at 70% opacity
  - text on overlay: white, contrasts > 4.5:1

6.15 — Form (RFQ)
  - vertical stack of inputs, 16px gap
  - label above input, eyebrow style
  - single CTA button bottom
  - no fancy decorations

═══ 7. MOTION & MICRO-INTERACTIONS ═══

- Default ease: ease-out cubic-bezier(0.2, 0.8, 0.2, 1)
- Micro (button hover, color shift): 150ms ease-out
- Component (card lift, focus transition): 200ms ease-out
- Page transition: 300ms ease-out
- NO bounce, NO elastic, NO spring overshoot
- NO scroll-driven decorative animations (parallax, scroll-snap fancy effects)
- NO marquee unless explicitly approved (and even then: subtle, 60s loop)
- Respect prefers-reduced-motion: disable all transitions

═══ 8. ACCESSIBILITY ═══

- Color contrast: minimum 4.5:1 for body text, 3:1 for large text (display)
- Tap targets: minimum 44×44px
- Focus indicators: 2px gold outline with 2px offset on ALL interactive elements
- All images have alt text
- Headings: semantic order (no skipping h1 → h3)
- Form inputs: associated labels (not just placeholders)
- Keyboard navigable

═══ 9. VOICE & TONE ═══

Voice traits:
- Authoritative — speak as a trade institution, not a vendor
- Factual — claims with numbers, no superlatives
- Restrained — short sentences, no flourish
- Bilingual — every public string has EN + 简体中文 mirror

DO write:
- "AxisParts supplies original parts from 1,000+ global brands."
- "Quote within 120 hours. Worldwide shipping."
- "12 anchor brands. 1,000+ supply chain. One Hong Kong desk."

DO NOT write:
- "We are the leading supplier..." (superlative)
- "World-class quality you can trust" (marketing fluff)
- "Your one-stop shop for industrial parts" (cliché)
- "Excellence in everything we do" (generic)

Language structure:
- Active voice
- Present tense
- Numbers as digits (1,000 not "one thousand")
- Brand names in their official capitalization (Siemens, ABB, Schneider Electric)
- Hong Kong always written as "Hong Kong" — never "HK" in marketing copy.
  "HK" only in micro labels (address, registry, eyebrows).

═══ 10. ANTI-PATTERNS — DO NOT PRODUCE ═══

If your output contains any of these, REDO from scratch:

Layout anti-patterns:
- Split hero with text-left + large-image-right (terramine pattern)
- Carousel hero with rotating slides
- Stat-band strip of 4+ stats under the hero (1000+/50+/24/7 cliché)
- "§ 01 · § 02 · § 03" page navigation strips (publication mannerism)
- Big bold "BRANDS WE SUPPLY" centered banner before sections (use whisper-quiet labels instead)
- "Get Quote" button glued to top-right of sticky header
- Vol/Issue/Filed/Reg metadata blocks (publication mannerism)
- Drop caps
- Fake "trading floor / live manifest" tables with made-up part numbers

Typography anti-patterns:
- Italic emphasis on individual words inside a sentence
- Color emphasis on individual words (e.g., one gold word among navy)
- Mixed font weights on the same line
- Underlining body text (only links underline)

Visual anti-patterns:
- Drop shadows
- Glassmorphism
- Rounded corners >= 8px
- Generic gear/cog/wrench icons
- Stock photos of mining trucks, factory workers, gears
- Neon accent colors

Content anti-patterns:
- Superlatives ("the best", "leading", "world-class")
- Made-up testimonials
- Numbered stat-strips replacing real content

═══ 11. IMAGE GUIDELINES ═══

When images are used (in sections AFTER this design system is locked):
- Original photography preferred. Stock photo only if cropped tightly and
  treated.
- For category cards: product-on-clean-background, 4:3 ratio
- For industry cards: contextual scene, 4:3 ratio, slightly desaturated
- For hero: cinematic wide establishing shot (Hong Kong port, container
  terminal, harbour) — NEVER a single piece of machinery as hero photo
- Apply consistent treatment: slight desaturation, navy color tint at 5%
- NEVER overlay text on uncomposed photos — either use clean overlay
  (70% navy) OR have text in a separate band

═══ 12. LOGO ═══

The AxisParts logo is `v3_caps.svg` (attached).
- "AXIS" in IBM Plex Serif 600, letter-spacing 4 (very open)
- Gold vertical rule (#FFC107, 1.8 × 24px) between words
- "PARTS" in IBM Plex Sans 300, letter-spacing 6 (luxury-house open)
- Render this EXACT SVG inline. NEVER redraw. NEVER alter the tracking.
- Color: uses currentColor (navy on light bg, white on navy bg)
- On dark surfaces, the gold rule stays gold (#FFC107)
- Minimum width: 180px. Below that, scale proportionally.

═══ 13. WHAT TO BUILD IN THIS TURN ═══

Build a DESIGN SYSTEM CANVAS — a single page that displays the entire token
system visually, like a corporate style guide page. Include:

1. Logo (v3_caps.svg attached) — render at 280px width.
2. Color swatches — each token as a 120×120 swatch with hex value below.
   Group by: Surface / Text / Accent / CTA / Border / Status.
3. Typography ramp — render each typography token with sample text:
   "Original parts from one Hong Kong desk."
4. Spacing scale — visualized as a horizontal bar chart, each space value
   as a labeled bar.
5. Border / radius examples (small grid).
6. Component states — buttons (primary/secondary/text — all 5 states),
   inputs (4 states), card hover, section header pattern example,
   brand wall snippet, stats display snippet, navigation example,
   footer column structure.
7. Motion notes — written, not animated, since this is a static canvas.
8. Voice examples — DO write / DO NOT write side-by-side.
9. Anti-patterns block — visually showing what NOT to do (small mocks
   crossed out).

DO NOT BUILD: a hero, a landing page, sections of the product website.
This is JUST the design system canvas. The product is a separate project.

═══ 14. CLARIFYING QUESTIONS — ASK ME ═══

After you produce the design system canvas, ASK ME the following questions
explicitly, one at a time, and wait for my answers before proposing any
revisions:

1. "Are the navy/gold proportions in the canvas matching your intent
   (25% navy mass, 4% gold accent)? Should the gold be more or less prominent?"

2. "The section header pattern (top-right eyebrow + 24px gold rule, no big
   banner) is unconventional. Want to see one alternative section header
   treatment for comparison?"

3. "The display scale tops out at 96px (display-1). For the hero of the
   product site, do you want display-1 reduced or kept at 96px?"

4. "The brand wall is specified as 4×3 grid with brand wordmarks in serif.
   Want to see brand-LOGOS variant as an alternative?"

5. "Voice examples — does the 'trade document' tone match the client's
   actual voice in conversation with their customers?"

6. "Are there any tokens missing from this spec that you need for sections
   I haven't anticipated?"

═══ END PROMPT ═══════════════════════════════════════════════════════════
```

---

## После того, как Claude Design ответит

1. **Просмотри дизайн-систему канвас** — все ли токены, компоненты, состояния показаны правильно
2. **Ответь на 6 уточняющих вопросов** Claude Design — синхронизируйтесь
3. Если что-то надо поправить — **точечно** через комментарии в чате
4. Когда система устроит → **экспортируй её как Design System** в Claude Design (через настройки проекта)
5. **Создай новый проект** «AxisParts Site» → **подключи свежесозданную Design System** → теперь строй продукт уже с заякоренной системой

---

## Логика, которую мы применяем

| Раньше (product-first) | Теперь (system-first) |
|---|---|
| Один промпт смешивал дизайн и контент | Отдельная фаза только для системы |
| Claude импровизировал визуальный язык каждый раз | Токены залочены — Claude применяет, не интерпретирует |
| Brief был «hero + 8 секций» | Brief — «color tokens + components + states», БЕЗ продукта |
| Не было вопросов от Claude | В конце промпта Claude ОБЯЗАН задать 6 вопросов |
| Section headers = большие баннеры | Section headers = whisper-quiet gold ярлык top-right |
| CTA по левому краю по умолчанию | CTA имеет одну специфическую позицию по компоненту |
| Italic / mixed weights возникали сами | Жёстко запрещены в Anti-patterns |

Это даст Claude Design **жёсткие границы**, в которых он будет работать. Когда границы есть — модель не может улететь в template.
