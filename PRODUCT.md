# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: procurement managers and sourcing engineers at mainland-Chinese factories,
plus global B2B industrial buyers. They arrive with a concrete need — a machine is
down or a spare is required — usually holding a part number, a brand name, or a
photo of a nameplate. Their job is to find a supplier who can confirm the reference
and quote it. They are not browsing; they are checking whether this desk can be
trusted with a real order.

## Product Purpose

A Hong Kong multibrand industrial supply desk presented on the web. The site sources
original and replacement industrial equipment and spare parts from global brands and
routes buyers into a direct conversation. It is lead generation, not e-commerce:
no cart, no checkout, no public prices.

Success is a qualified inbound enquiry with a part number attached.

## Positioning

Many brands, one Hong Kong desk. The buyer does not have to open a separate channel
per manufacturer; a single Hong Kong intermediary handles sourcing and export across
the brand roster. Hong Kong is the mechanism, not decoration: it is the trade and
logistics position that makes multibrand consolidation and cross-border shipping
credible.

## Operating Context

- Bilingual by necessity: English (default, `/`) and 简体中文 (`/zh-cn`). The Chinese
  version is a peer, not a translation afterthought.
- A large share of visitors are inside mainland China, where cold-load speed and
  self-hosted assets matter more than richness.
- Contact happens in messengers: WhatsApp, WeChat, phone, email. Chinese and Hong Kong
  buyers expect to write directly to a person, not to fill in a web form.
- Evaluation is adversarial: a buyer is deciding whether an unknown intermediary is
  real. Verifiable specifics build trust; unverifiable claims destroy it.

## Capabilities and Constraints

- Astro 5, static output, no backend. Deployed to GitHub Pages under `/hk_draft`,
  built from `site/`. Nothing on the site can accept and process a form submission
  server-side.
- Contact mechanism (decided 2026-09-16, narrowed the same day): **email and
  WeChat only.** No phone number, no WhatsApp, and **no RFQ form** — the
  `Quick RFQ` section was deliberately removed. Do not reintroduce a form as a
  "conversion improvement", and do not re-add a phone or WhatsApp affordance.
- i18n dictionary in `site/src/i18n/dict.ts`; every string ships in both locales.
- Self-hosted IBM Plex (Serif / Sans / Mono) + IBM Plex Sans SC in `site/public/fonts/`.
- Catalogue data is static TypeScript (`site/src/data/catalogue.ts`), not a database.
- The company is **Cheng Trading Limited**, Hong Kong Business Registration No.
  78886987, registered at Room 8, S-V, 6/F, Valiant Industrial Centre, 2-12 Au Pui
  Wan Street, Fo Tan, Hong Kong (confirmed by the client 2026-09-16, taken from
  their invoice). The earlier `AxisParts` name was a proposal and is dead.
- **Undecided:** the wordmark. The build still carries a `LOGO HERE` placeholder in
  the header and footer. The name is known, the logo is not — do not invent one, and
  keep the logo slot swappable in markup and CSS.
- **Undecided:** the public email address. `sales@example.hk` is still a placeholder
  and the client will supply the real one.

## Brand Commitments

- Voice: authoritative, factual, editorial. No superlatives, no marketing filler
  ("world-class", "industry-leading", "trusted by thousands"). Short declarative
  sentences that a procurement engineer can verify.
- **No invented numbers** (decided 2026-09-16). Every figure on the site must come
  from the client. Numbers currently in the code are unverified placeholders and are
  to be removed rather than displayed: `1,000+` brands, `12` anchor brands,
  `120 hrs` quote window, per-category counts (412 / 386 / 524), and the conflicting
  founding year (`Est. 2020` in the header strip vs `Est. 2026` in the brief).
- The same rule covers testimonials, customer logos, certifications, case studies,
  delivery times, and coverage claims: absent until the client supplies them.

## Evidence on Hand

Real:
- Client brief and analysis: `бриф/docs/бриф.docx`, `01_project_analysis.pdf`,
  `02_design_audit.pdf`, `03_claude_design_brief.md`, `04_design_system_prd.md`,
  competitor review `сайты_конкурентов.docx`, screen specs for Categories and Applications.
- Brand roster from the client brief (Siemens, ABB, Schneider Electric, Mitsubishi
  Electric, Omron, Fanuc, Allen-Bradley / Rockwell, Yaskawa, Delta Electronics,
  Honeywell, Bosch Rexroth, Panasonic) — brief-sourced product scope; the "1,000+ more"
  count is not verified.
- Imagery: category and industry photographs, plus two full hero sets — the same
  four compositions with English and 简体中文 headlines baked in, supplied by the
  client 2026-09-16. Masters in `site/images-src/`, built to `site/public/images/`.
  The category and industry photographs remain placeholder-grade; the hero sets
  are the client's own.
- Logo candidates: `бриф/logos/v1_compass.svg`, `v2_hub.svg`, `v3_caps.svg`,
  `v3_stacked.svg` — drawn for the discarded `AxisParts` name.
- Incumbent visual system exported from the AxisParts design handoff:
  `site/src/styles/` and `бриф/handoff/axisparts-design-system/`.

- Company identity, supplied by the client from their invoice: legal name,
  business registration number, and registered address (see Capabilities above).
- The WeChat QR code, supplied by the client, at
  `site/public/images/wechat-qr.png`.

Absent — must not be fabricated:
- The public email address. `sales@example.hk` is a placeholder until the client
  supplies the real one; the previously shown phone number and WhatsApp link were
  invented and have been removed.
- Customers, testimonials, case studies, press, certifications, stock levels,
  lead times, prices, founding year.

## Product Principles

1. **Verifiable or absent.** A claim with no source behind it does not ship. Empty
   space outranks a plausible-looking number.
2. **The part number is the conversation.** Everything on the site exists to get a
   buyer from "I have a reference" to "I have sent it to a human".
3. **Two channels, no form.** Email and WeChat are the whole contact surface.
   Both must be reachable from any section; nothing else gets added to compete
   with them.
4. **Chinese is a first language here, not a locale toggle.** Layout, typography,
   and copy length have to work in 简体中文 without degrading.
5. **Placeholder honesty.** While the name, contacts, and figures are unresolved,
   the build must read as an unfinished document with deliberate blanks — never as a
   finished site that happens to be lying.
