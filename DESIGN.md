---
name: HK Industrial Sourcing Desk
description: Bilingual Hong Kong trade-desk web system — white paper, navy mass, one gold thread.
colors:
  page: "#FFFFFF"
  soft: "#F7F8FA"
  navy: "#003D7A"
  navy-deep: "#002A52"
  navy-hover: "#0B2A52"
  ink: "#1A1A1A"
  text-muted: "#6B7280"
  text-on-navy: "#FFFFFF"
  text-on-navy-secondary: "rgba(255,255,255,0.70)"
  gold: "#FFC107"
  gold-on-light: "#B8860B"
  gold-hover: "#E0A800"
  cta-red: "#DC2626"
  cta-red-hover: "#B91C1C"
  cta-red-active: "#991B1B"
  border-line: "#E5E7EB"
  border-on-navy: "rgba(255,255,255,0.10)"
  status-success: "#16A34A"
  status-warning: "#F59E0B"
  disabled: "#9CA3AF"
typography:
  display:
    fontFamily: "'IBM Plex Serif', 'IBM Plex Sans SC', Georgia, serif"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'IBM Plex Serif', 'IBM Plex Sans SC', Georgia, serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "'IBM Plex Sans', 'IBM Plex Sans SC', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "'IBM Plex Sans', 'IBM Plex Sans SC', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'IBM Plex Sans', 'IBM Plex Sans SC', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
  button:
    fontFamily: "'IBM Plex Sans', 'IBM Plex Sans SC', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
  mono:
    fontFamily: "'IBM Plex Mono', 'IBM Plex Sans SC', ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  none: "0"
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  step-1: "4px"
  step-2: "8px"
  step-3: "12px"
  step-4: "16px"
  step-5: "24px"
  step-6: "32px"
  step-7: "48px"
  step-8: "64px"
  step-9: "96px"
  step-10: "128px"
  step-11: "160px"
components:
  button-primary:
    backgroundColor: "{colors.cta-red}"
    textColor: "{colors.page}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cta-red-hover}"
    textColor: "{colors.page}"
  button-primary-active:
    backgroundColor: "{colors.cta-red-active}"
    textColor: "{colors.page}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "rgba(0,61,122,0.05)"
    textColor: "{colors.navy}"
  input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "44px"
    width: "380px"
  content-card:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  brand-cell:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
    height: "88px"
  section-label:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  freight-pill:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  side-rail-item:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.page}"
    rounded: "{rounded.none}"
    size: "54px"
---

# Design System: HK Industrial Sourcing Desk

> `name` is a working project title, not a brand. The company name and wordmark are
> unresolved; see PRODUCT.md. Nothing here may assume a name.

## Overview

**Creative North Star: "The Hong Kong Trade Desk"**

This is the desk of a Hong Kong trading house rendered as a website: white paper as
the default ground, navy as the ink and the institutional mass, and a single gold
thread that marks where the document is organised. It is not a SaaS landing page and
not a machinery catalogue. A procurement engineer arriving with a part number should
feel they have reached a counter that keeps records, not a funnel that keeps leads.

The system runs on restraint with one authored exception per screen. Sections breathe
(96px of vertical air at desktop) while the content inside them stays dense and
factual. Colour is budgeted rather than composed: roughly 70% white, 25% navy, 4%
gold, 1% red, and the red appears on exactly one button per view. The serif carries
authority, the sans carries information, the mono carries anything a buyer would
copy — a part number, a phone number, a registration line.

Two things separate the implemented system from the original brand bible, and both
are deliberate. First, form language: the bible demanded razor corners everywhere,
but the shipped interface uses soft corners and light shadows on anything that
floats, hovers, or is pressed. That split is now the law (see **The Sharp Content,
Soft Chrome Rule**). Second, the section label: the bible forbade gold as a fill, but
the client asked for a solid gold block behind section labels, and the client's
request wins.

**Key Characteristics:**
- White-first surface; navy is mass, never a mood
- Gold is a thread and a marker, never a mood either — one exception, below
- Exactly one red button per view; red has no second job
- Content sits on sharp-cornered cards; interface chrome is soft-cornered
- Serif for authority, sans for information, mono for anything copyable
- Bilingual by construction: every face chains IBM Plex Sans SC for 简体中文

## Colors

A three-note palette on paper white: institutional navy, a gold thread, and one red
that exists only to be pressed.

### Primary
- **Trade Navy** (`#003D7A`): the brand mass. Footer ground, CTA band ground, side
  contact rail, header underline, active pagination, checkbox accent, and the colour
  every border turns on hover. Any surface that needs to feel like the institution
  rather than the paper is navy.
- **Deep Navy** (`#002A52`) and **Navy Hover** (`#0B2A52`): reserved darker steps for
  a navy-on-navy layer and for the pressed state of navy tiles. Not decorative
  alternatives — use only where a second navy is structurally required.

### Secondary
- **Signal Gold** (`#FFC107`): the thread. The 24px rule under a section label, the
  1px hairline above the footer and below the hero, the active carousel dot, the
  breadcrumb separator, the focus ring, the 3px reveal bar on the contact rail, and
  the fill behind section labels. It never fills a button, a card, or a band.
- **Document Gold** (`#B8860B`): the same idea at text size on white. Gold at 11px on
  paper fails contrast, so every eyebrow, field label, and column heading on a light
  ground uses this darker gold instead. On navy, revert to Signal Gold.
- **Gold Hover** (`#E0A800`): rare; only for a gold element that is itself
  interactive.

### Tertiary
- **Action Red** (`#DC2626`): the single call to action, and nothing else. Its hover
  (`#B91C1C`) and active (`#991B1B`) steps darken rather than glow. Red is also the
  field-error border, which is the one place it appears without being a button.

### Neutral
- **Paper** (`#FFFFFF`): the default ground for roughly 70% of any screen.
- **Soft Paper** (`#F7F8FA`): alternating section ground and hovered table row. Used
  to separate two adjacent sections, never to build a card.
- **Document Ink** (`#1A1A1A`): body and heading text on light.
- **Muted Ink** (`#6B7280`): secondary text, captions, placeholder text, breadcrumb.
- **Rule Grey** (`#E5E7EB`): every 1px border, divider, and card edge on light.
- **On-navy secondary** (`rgba(255,255,255,0.70)`) and **On-navy rule**
  (`rgba(255,255,255,0.10)`): the same two roles inverted, tinted from the navy
  ground rather than greyed.

### Status
- **Success** (`#16A34A`) and **Warning** (`#F59E0B`) appear as small text and 1px
  borders only. Error reuses Action Red. No status colour ever becomes a fill.

### Named Rules
**The One Red Rule.** Exactly one `#DC2626` button exists per view. A second red
button is not an emphasis decision, it is a bug: demote it to secondary (navy
outline) or to a link.

**The Gold Thread Rule.** Gold is a 1px rule, a 3px marker, a dot, or 11px letter-
spaced type. It fills exactly one thing — the section label block — because the client
asked for it. Any other gold fill is out of system.

**The Tint-Don't-Grey Rule.** Secondary text on navy is white at 70%, not grey. Secondary
text on white is `#6B7280`. Never move a grey across grounds.

## Typography

**Display Font:** IBM Plex Serif (fallback Georgia, serif)
**Body Font:** IBM Plex Sans (fallback system-ui, -apple-system, sans-serif)
**Label/Mono Font:** IBM Plex Mono (fallback ui-monospace, monospace)
**CJK:** IBM Plex Sans SC is chained into all three stacks so 简体中文 never falls
back to a system face mid-sentence.

**Character:** Serif for claims, sans for facts, mono for anything a buyer would copy
into an email. The pairing is IBM Plex throughout, so the three voices share a
skeleton and differ only in register — the reason the page reads as one document
rather than three.

### Hierarchy
- **Display** (Serif 700, 96 / 72 / 56px, line-height 1.05–1.15, tracking -0.02em):
  headline moments of four words or fewer. Currently unused on the home page, whose
  hero is a photographic carousel with the type baked into the slides. It is defined,
  not dead: a text hero or a landing sub-page should reach for it.
- **Headline** (Serif 600, 40 / 32px, line-height 1.2, tracking -0.01em): section
  titles, CTA band headline, product titles.
- **Title** (Sans 600, 24 / 18 / 16px, line-height 1.3–1.4): card names, step titles,
  sub-headings. Note the switch: at title size the system leaves the serif for the sans.
- **Body** (Sans 400, 18 / 16 / 14 / 13px, line-height 1.5–1.6): running text. Measure
  is capped structurally — 560–640px on section ledes and supply lists, 480px on
  product copy.
- **Label** (Sans 500, 11px, tracking 0.18em, uppercase): eyebrows, field labels,
  column headings, footer headings. This is the system's most recognisable typographic
  gesture.
- **Button** (Sans 500, 14px, tracking 0.06–0.08em, uppercase): every button label.
- **Mono** (Mono 400, 9–16px): part numbers, phone numbers, prices, step numbers,
  language switcher, registration line, pagination. Mono means data, never decoration.

**Section lede** is the one place the serif is used at body scale (Serif 500, 22px,
line-height 1.4): it introduces a section in the display voice at a readable size,
and it is why sections do not need large titles.

### Named Rules
**The Copyable-Is-Mono Rule.** If a buyer might select it and paste it into an email —
part number, phone, email, reference, registration number — it is IBM Plex Mono. If
they would only read it, it is not.

**The One Weight Per Role Rule.** Each role owns one weight. Do not bold a word inside
body copy for emphasis, do not colour a word, do not italicise. Emphasis is a
different role or a different line.

## Layout

A single 1280px container with 32px gutters (20px below 560px), centred, with no
full-bleed exceptions except the hero photograph, the CTA band, and the footer, which
run edge to edge and hold their own inner container.

Vertical rhythm is an 8px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160px.
Sections are 96px tall at desktop, 64px below 980px, 48px below 768px, and each closes
with a 1px Rule Grey border rather than a gap — the page reads as ruled paper.

Grids are four-up by default (brands, categories, industries, steps), collapsing to
two-up at 980px and one-up at 560px. The two-column layouts — global supply (0.85fr /
1.15fr), product detail, quote form (1fr / 380px) — all collapse to a single column at
980px. The industries marquee is the exception: it never becomes a grid, it stays a
horizontally scrolling band and simply narrows its slides (300px → 260px → 78vw).

Breakpoints: 1100px (drops the second header contact), 980px (grids halve, side rail
hides, two-column layouts stack), 768px (burger menu appears, header shrinks to 56px,
brand cells become chips), 560px (single column, supply image hides, gutters tighten).

### Named Rules
**The Ruled-Paper Rule.** Sections are separated by a 1px Rule Grey border, not by
empty space alone. The border is what makes a long scroll read as a document.

**The Reachable-Contact Rule.** Contact is never more than one gesture away at any
width: header contacts at desktop, the fixed side rail above 980px, the burger menu
below 768px, the footer everywhere. A layout change that removes a contact path
without adding another is a regression.

## Elevation & Depth

Depth is carried by borders and displacement, not by shadow. Every card, cell, table
row, and input sits flat on its ground inside a 1px Rule Grey border. Hover does not
add a shadow to content — it lifts the element 4px (2px for brand cells) and turns the
border Trade Navy. That border-to-navy transition is the system's primary "this is
interactive" signal and it is used everywhere.

Shadows exist, but only under things that genuinely float above the page, and all of
them are tinted from the same cool navy-black (`rgba(10,15,30,...)`) rather than
neutral black. There are five, and the list is closed.

### Shadow Vocabulary
- **Menu lift** (`0 16px 40px rgba(10,15,30,0.12)`): the open language dropdown.
- **Sheet lift** (`0 16px 32px rgba(10,15,30,0.10)`): the mobile navigation panel.
- **Rail lift** (`0 12px 36px rgba(10,15,30,0.18)`): the fixed side contact rail and
  its hover labels. The heaviest shadow in the system, because it is the only element
  permanently detached from the page.
- **Focus lift** (`0 8px 24px rgba(10,15,30,0.08)`): the language button while its
  menu is open.
- **Card hover** (`0 14px 36px rgba(10,15,30,0.08)`): industry grid cards on hover —
  the single exception to the no-shadow-on-content rule.

### Named Rules
**The Float-Earns-Shadow Rule.** A shadow is permission to leave the page, not
decoration. If the element is in the flow, it gets a border and a 4px lift instead.

**The One Grey-Black Rule.** Every shadow tints from `rgba(10,15,30, α)`. Pure black
shadows are out of system.

## Shapes

The form language is split, and the split is the rule rather than an inconsistency:
**content is sharp, chrome is soft.**

Content surfaces — category cards, industry grid cards, product cards, the generic
card, tables, the confirmation panel, image slots — carry no radius at all. They read
as cut paper.

Interface chrome rounds: buttons, inputs, textareas, the file drop, carousel buttons
and the contact rail's hover labels at 8px; the language menu and the rail's outer
corners at 10px; the logo placeholder and menu options at 6px; brand cells at 12px;
industry marquee slides at 14px. Two shapes go fully round: freight modes and mobile
brand chips are pills (999px), and hero dots and arrows are circles.

Borders are always 1px and always Rule Grey on light or `rgba(255,255,255,0.10)` on
navy, with two exceptions: the dashed 1.5px file-drop edge, and the 3px gold bar that
scales in on a contact rail item. Pagination overlaps its cells by -1px so the grid
reads as one continuous ruled strip.

### Named Rules
**The Sharp Content, Soft Chrome Rule.** If it holds the product's information, it has
square corners. If it is a control, an overlay, or something that floats, it may
round. When in doubt, the element is content.

**The Three-Step Rule (new work only).** New components pick from `0`, `8px`, or
`pill`. The 6 / 10 / 12 / 14px steps are legalised history, not an invitation — they
stay where they are and nothing needs rework, but a new component reaching for a
fourth radius is drifting.

## Components

### Buttons
- **Shape:** softly cut (8px radius), 44px minimum height, uppercase label at 14px
  with 0.06em tracking.
- **Primary:** Action Red ground, white label, 12px/22px padding. One per view.
  Hover darkens to `#B91C1C`, active to `#991B1B`. Disabled goes Rule Grey ground with
  `#9CA3AF` text and `not-allowed`.
- **Secondary:** transparent ground, 1px Trade Navy border, navy label. Hover washes
  to `rgba(0,61,122,0.05)` — a wash, never a fill.
- **Link:** navy uppercase 14px with no box; hover turns Action Red. This is the only
  place red appears on something that is not a button.
- **Focus:** 2px Signal Gold outline at 2px offset, on every variant. Gold is the
  focus colour system-wide.

### Inputs / Fields
- **Style:** white ground, 1px Rule Grey border, 8px radius, 44px tall, 380px max
  width, 15px sans text.
- **Label:** Document Gold, 11px, 0.18em tracking, uppercase, always above the field.
  Placeholders are examples, never labels.
- **Focus:** the border turns Trade Navy and the native outline is removed. Note this
  is the one control whose focus is a border shift rather than a gold ring.
- **Error:** border turns Action Red; the hint below is mono 11px in the same red.
- **File drop:** 1.5px dashed Rule Grey; on drag-over the border goes navy and the
  ground goes Soft Paper.

### Cards / Containers
- **Corner style:** square (0). This is the content signature.
- **Background:** white on white sections, white on Soft Paper sections — the border,
  not the fill, is what separates them.
- **Border:** 1px Rule Grey, turning Trade Navy on hover.
- **Hover:** `translateY(-4px)` over 200ms. Image slots scale their photo to 1.04
  inside the fixed frame, so the card never grows.
- **Internal padding:** 16–24px; image slots are edge to edge with a 1px bottom rule.

### Section Header (signature)
The recurring gesture that opens every section: a solid Signal Gold block, 6px/12px
padding, holding the section label in Document Ink at 11px with 0.18em tracking, with
a 24px × 1px gold rule beneath it. It sits at the start of the section, above a serif
lede at 22px. The gold fill is a client-approved exception to the no-gold-fill rule
and must not be "corrected" back to a plain eyebrow.

### Brand Cell (signature)
A 12px-radius white cell, 88px tall, holding either a brand wordmark in IBM Plex Serif
at 16px or a logo image constrained to a 44px slot. Logos render greyscale at 85%
opacity and return to full colour on hover, while the cell lifts 2px and its border
turns navy. Below 768px the whole wall abandons the grid and becomes a centre-aligned
flow of 999px chips at 13px.

### Side Contact Rail (signature)
A fixed column of 54px navy tiles on the right edge above 980px, carrying phone,
email, WhatsApp, and WeChat as inline SVG at 22px. It slides in from off-screen rather
than fading. On hover: a 3px gold bar scales in from the left edge, the icon turns
gold, the tile darkens to `#0B2A52`, and a navy label slides out to the left carrying
the actual value — the WeChat tile opens a QR panel instead. Below 980px it is
replaced by the burger menu's contact block, never simply removed.

### Navigation
- **Header:** 64px tall, sticky, white, with a 1px Trade Navy bottom border. Three
  columns: mono contacts left, centred logo, language switcher and burger right.
  Contacts are mono 12px Muted Ink turning navy on hover.
- **Language switcher:** a 44px 8px-radius button in mono 13px opening a 10px-radius
  menu; the current locale is marked by a 6px gold dot, not a checkmark.
- **Mobile:** below 768px contacts leave the bar, the burger appears, and the panel
  drops full-width with 16px sans links, a Rule Grey divider, and the contacts
  restated in mono 13px. Link hover turns Action Red.
- **Footer:** navy ground opened by a 1px gold hairline, label headings in Signal
  Gold, body in white at 70%, and a mono 9px registration line closing the page.

### Motion
One curve, `cubic-bezier(0.2, 0.8, 0.2, 1)`, and three durations: 150ms for colour
shifts, 200ms for card lifts and image scales, 300ms for the rail and page-level
moves. Entrances are a separate, slower grammar: content rises 28px over 650ms
ease-out as it enters the viewport, staggered 50–60ms per item, with the how-it-works
steps animating their number, rule, title, and body in sequence. The industries band
runs a 48s linear marquee that pauses on hover. `prefers-reduced-motion: reduce` kills
every transition and freezes the marquee — this is already implemented and must stay.

**The One Curve Rule.** There is a single easing curve in this system. A new component
that needs a different curve is asking for a different system.

## Do's and Don'ts

### Do:
- **Do** budget colour before composing it: ~70% white, ~25% navy, ~4% gold, ~1% red.
- **Do** give every interactive content surface the same signal — 1px border to Trade
  Navy plus a 4px lift over 200ms.
- **Do** use Document Gold (`#B8860B`) for gold type on white and Signal Gold
  (`#FFC107`) for gold type on navy. The two are not interchangeable.
- **Do** set part numbers, phones, emails, references, and step numbers in IBM Plex
  Mono.
- **Do** keep the section header exactly as built: gold block, 24px gold rule, serif
  lede beneath.
- **Do** chain `'IBM Plex Sans SC'` into any new font stack, or 简体中文 will break to
  a system face.
- **Do** close every section with a 1px Rule Grey border.

### Don't:
- **Don't** put a second red button in a view.
- **Don't** fill anything with gold except the section label block.
- **Don't** add a shadow to an element that sits in the page flow; borders and lift
  carry content depth.
- **Don't** introduce a radius outside `0`, `8px`, or `pill` in new components.
- **Don't** grey out secondary text on navy — tint it from white at 70%.
- **Don't** bold, colour, or italicise individual words for emphasis.
- **Don't** use a neutral-black shadow; every shadow tints from `rgba(10,15,30, α)`.
- **Don't** remove a contact path at any breakpoint without replacing it with another.
