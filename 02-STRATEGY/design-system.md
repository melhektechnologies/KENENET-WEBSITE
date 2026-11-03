# Kenenét Consultancy — Design System & Frontend Implementation Specification

**Version:** 1.0
**Date:** 3 November 2026
**Replaces:** `02-STRATEGY/design-system.md` in `melhektechnologies/KENENET-WEBSITE` (navy, cobalt and cyan template, rejected under Validation Report C2 #6)
**Builds on:** Company Intelligence & Content Validation Report v0.1 · Website Strategy & Information Architecture v1.0 · Website Copy v1.0
**Visual reference reviewed:** Lovable preview `fKkNyN593bUyuzPvkTIvwg6xU6BGPZWb`. Used for direction only. None of its code is used (see §0.3)
**Stack target:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Vercel
**Scope rule:** This document defines design and implementation. It does not change any approved copy. Where a component shows text, the text comes from *Website Copy v1.0*, character for character.

---

## 0. Foundations

### 0.1 Design idea

> **Quiet authority, with one warm signal.**

Kenenét is selling judgement, structure and trust, so the interface should feel the same way: composed, typographic and spacious. Purple carries the structure. Orange appears once per view, as the signal to act. It echoes the orange figure in the logo.

**The signature element** is the hero headline. "Transforming" is set in roman ink, "Workplaces" in italic brand purple, and the closing full stop in logo orange. The full stop is the same orange "point" as the head of the figure in the logo. Every other element stays quiet so this one is remembered.

### 0.2 Source assets (verified)

| Asset | Finding | Consequence |
|---|---|---|
| Logo (`kenenet_consultancy_logo_transparent.png`, 1610 × 724 px, transparent PNG) | Orange abstract figure (circle head, crescent body) on the left. Bold humanist-sans wordmark "Kenenét" over "consultancy" in purple. Spaced-caps line "A FERTILE GROUND FOR GROWTH!" in purple | The two brand colours are taken from this file (see §1.1) |
| Sampled purple | `#7F3293` (dominant, 140k+ pixels) | Brand Purple |
| Sampled orange | `#F9A21B` (dominant, 80k+ pixels) | Brand Orange |
| Logo variants | Only full colour on a transparent background. **No reversed, one-colour, vector or tagline-free version exists** | Constrains placement (see §5.1 and Decision DS-1) |
| Founder photo, brochure, profile | Still 0 bytes in the repo | Designs must look finished without them |

**Brand-line conflict (escalate):** the logo artwork contains *"A FERTILE GROUND FOR GROWTH!"*, but the confirmed primary tagline is *"Transforming Workplaces."* (Client Decision 2). The design system never sets the logo line as live text, and never pairs it with the confirmed tagline in the same view. The client must confirm whether the logo line is retired, and whether a tagline-free lockup exists (see Decision DS-1).

### 0.3 Lovable reference: keep, refine, reject

| Element in the Lovable preview | Verdict | Reason |
|---|---|---|
| Newsreader display serif with a neutral sans | **Keep** (sans changed, see §2) | Editorial and calm. Renders "é" well |
| Hero: roman "Transforming" over italic purple "Workplaces.", asymmetric two-column layout | **Keep, refine** | Strongest idea in the reference. Becomes the signature element, with the orange full stop added |
| Large two-tone positioning statement (first sentence ink, second muted) | **Keep** | Turns approved copy into a strong editorial moment without changing words |
| Small spaced-caps section labels | **Keep, with a rule** | Labels may only use approved copy strings (§5.12) |
| Hairline rules, generous whitespace, 4–6 px radius | **Keep** | Restrained and premium |
| Deep-purple footer field | **Refine** | The logo has no reversed version, so it cannot sit on deep purple. The deep field moves to the closing CTA band, and the footer goes on Paper (§5.3) |
| Typed text wordmark ("Kenenét • CONSULTANCY") in place of the logo | **Reject** | Violates "use the supplied logo, preserve its integrity" |
| Purple filled primary buttons everywhere | **Reject** | Strategy §1.5 reserves orange for the primary CTA. Purple solid is kept only for the persistent header CTA (§5.4) |
| Eyebrow "ORGANIZATIONAL & MANAGEMENT CONSULTANCY · ETHIOPIA" | **Reject** | This string is not in approved copy |
| H2 "Find what applies to your organization." / "See how the work will be done." | **Reject** | Approved H2s are "Our Services" and "Our Approach" |
| "01 / 02" numbers on the credibility strip | **Reject** | The items are not a sequence (Design rule: numerals only for real sequences) |
| AI-generated photographs of business people | **Reject** | Visitors could read them as Kenenét staff or clients. Strategy §1.5 prohibits this |
| Sections hidden until scrolled into view | **Reject** | Content was blank in a full-page capture. Hidden-by-default content harms no-JS users, crawlers, print and screenshots (§6.4) |
| Warm-cream alternate band (`oklch(96.8% .014 80)`) | **Refine** | Replaced by Mist, a near-neutral surface with a trace of brand purple. This avoids the generic cream-and-serif look |

---

## 1. Color System

### 1.1 Core palette (five colours)

| Token | Role | HEX | Source |
|---|---|---|---|
| `purple` | Brand Purple. Structure, links, rules, focus | `#7F3293` | Sampled from the logo |
| `orange` | Brand Orange. Primary CTA fill, one highlight per view | `#F9A21B` | Sampled from the logo |
| `ink` | Text, headings | `#1C1720` | Near-black with a purple undertone |
| `paper` | Default background | `#FCFBF9` | Warm off-white |
| `mist` | Alternate section surface | `#F5F2F7` | Paper with a trace of purple |

Everything else is a functional shade of these five. No other hue is introduced.

### 1.2 Functional shades

| Token | HEX | Use |
|---|---|---|
| `purple-700` | `#662779` | Link hover, secondary-button text, pressed purple |
| `purple-900` | `#2B1236` | Deep brand field (closing CTA band), text on orange |
| `purple-100` | `#ECE3F0` | Selected and active backgrounds (jump menu current item, accordion open header) |
| `orange-600` | `#E08A00` | Primary button hover |
| `ink-600` | `#5C5563` | Secondary text, helper text, muted statement half |
| `ink-400` | `#8A8290` | Form-field borders, disabled text on Paper (non-essential only) |
| `line` | `#E6E1E8` | Hairline rules and card borders (decorative only) |
| `white` | `#FFFFFF` | Form-field fill, card fill on Mist |
| `on-dark-muted` | `#C9BED0` | Secondary text on `purple-900` |
| `error` | `#B42318` | Validation errors (always with text and an icon) |
| `success` | `#1F7A4D` | Form success icon and heading accent |

### 1.3 Semantic tokens

| Semantic token | Value | Notes |
|---|---|---|
| `--background` | `paper` | `<html>` and `<body>` |
| `--foreground` | `ink` | Default text |
| `--surface-alt` | `mist` | Alternate sections |
| `--surface-raised` | `white` | Cards on Mist, form fields |
| `--surface-inverse` | `purple-900` | Closing CTA band only |
| `--text-muted` | `ink-600` | |
| `--text-inverse` | `paper` | On `purple-900` |
| `--text-inverse-muted` | `on-dark-muted` | |
| `--brand` | `purple` | |
| `--brand-strong` | `purple-700` | |
| `--accent` | `orange` | Primary CTA only, plus §1.5 exceptions |
| `--accent-hover` | `orange-600` | |
| `--on-accent` | `purple-900` | **Text on orange is always deep purple, never white** |
| `--border` | `line` | Decorative |
| `--border-input` | `ink-400` | Functional (meets 3:1) |
| `--ring` | `purple` on light, `orange` on dark | Focus ring |
| `--destructive` | `error` | |
| `--radius` | `0.25rem` (4 px) | See §4.6 |

### 1.4 Verified contrast (WCAG 2.1)

All ratios were calculated from the HEX values above.

| Foreground on background | Ratio | Permitted use |
|---|---|---|
| `ink` on `paper` | 17.02 : 1 | All text |
| `ink-600` on `paper` | 6.92 : 1 | Body and secondary text |
| `ink-600` on `mist` | 6.45 : 1 | Body and secondary text |
| `purple` on `paper` | 7.30 : 1 | Links, headings, accents, focus ring |
| `purple` on `mist` | 6.81 : 1 | Links, accents |
| `purple-700` on `paper` | 9.53 : 1 | Hover links, secondary-button text |
| `paper` on `purple` | 7.30 : 1 | Header CTA (purple solid) |
| `paper` on `purple-900` | 16.34 : 1 | Closing band headline and body |
| `on-dark-muted` on `purple-900` | 9.46 : 1 | Secondary text in the closing band |
| `purple-900` on `orange` | 8.22 : 1 | **Primary button label** |
| `purple-900` on `orange-600` | 6.28 : 1 | Primary button label, hover |
| `orange` on `purple-900` | 8.22 : 1 | Focus ring on dark. Button fill on dark |
| `ink-400` on `paper` | 3.58 : 1 | Form-field borders (UI, 3:1 rule) |
| `error` on `paper` | 6.36 : 1 | Error text |
| `success` on `paper` | 5.14 : 1 | Success text |
| `orange` on `paper` | **1.99 : 1** | **Never text. Never a meaningful UI boundary.** Decorative accents only |
| `orange` on `purple` | **3.67 : 1** | Never text. Focus ring on purple only (meets the 3:1 non-text rule) |
| `line` on `paper` | 1.25 : 1 | Decorative hairlines only. Never the only boundary of an input |

### 1.5 Colour discipline (per screen)

| Colour | Share | Rules |
|---|---|---|
| Neutrals (`paper`, `mist`, `white`, `ink`, `ink-600`) | ~70% or more | Dominant |
| Purple family | ~20–25% | Links, H1 italic word, rules, active states, focus, closing band, header CTA |
| Orange | **5% or less** | Allowed, at most **one** per viewport: (a) the primary CTA fill, or (b) the hero full stop, or (c) the focus ring on dark surfaces. Never body text, long underlines, icons, large fills or backgrounds |

On the Home hero the full stop and the primary button both appear. This is the one sanctioned exception, because the button is below the headline and the two read as a pair.

### 1.6 Interaction colours

| State | Treatment |
|---|---|
| Link default | `purple`, no underline (in navigation) or underline offset 4 px, thickness 1 px (in body text) |
| Link hover | `purple-700`, underline visible |
| Link visited | Same as default. Five-page site, no visited distinction |
| Primary hover | Fill `orange-600` |
| Secondary hover | Fill `mist`, border `purple-700` |
| Pressed | Hover colour. No scale or shift |
| Focus visible | 2 px solid ring, 2 px offset. `purple` on light surfaces, `orange` on `purple-900` and `purple` surfaces |
| Disabled | Opacity 0.5, `cursor: not-allowed`. Only for the submit button while sending |
| Selection (`::selection`) | Background `purple-100`, text `ink` |

---

## 2. Typography

### 2.1 Families

| Role | Family | Weights and styles loaded | Why |
|---|---|---|---|
| Display (H1, H2, H3, statement, numerals) | **Newsreader** (Google Fonts, variable, optical sizing) | 400, 400 italic, 500 | Editorial presence at large sizes. A true italic for the signature word. Optical sizing keeps small headings sturdy. Full Latin Extended, so "é" is drawn correctly at every size |
| Body and UI | **Source Sans 3** (Google Fonts, variable) | 400, 600 | Humanist sans that echoes the open, rounded letterforms of the logo wordmark. Excellent legibility at 17–18 px. Full Latin Extended |

Two families, five styles in total. **Check:** set "Kenenét Consultancy" in every style above at 14 px, 18 px, 48 px and 104 px before sign-off. The accent must not clip on line-height 0.98 (hero). Keep `overflow: visible` on the H1.

Fallback stacks: Newsreader → `Georgia, "Times New Roman", serif`. Source Sans 3 → `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Use `next/font` with `adjustFontFallback` so fallback metrics match and layout shift is avoided.

### 2.2 Type scale (fluid, mobile 360 px → desktop 1440 px)

| Style | Family / weight | Size (min → max) | `clamp()` | Line height | Tracking | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Newsreader 400 | 48 → 104 px | `clamp(3rem, 1.83rem + 5.19vw, 6.5rem)` | 0.98 | −0.02em | Home H1 only |
| `display-lg` | Newsreader 400 | 40 → 72 px | `clamp(2.5rem, 1.83rem + 2.96vw, 4.5rem)` | 1.04 | −0.02em | Inner-page H1 |
| `heading-xl` | Newsreader 400 | 32 → 48 px | `clamp(2rem, 1.67rem + 1.48vw, 3rem)` | 1.12 | −0.015em | Section H2 |
| `statement` | Newsreader 400 | 26 → 44 px | `clamp(1.625rem, 1.25rem + 1.67vw, 2.75rem)` | 1.22 | −0.01em | Positioning statement, mission and vision text, founder quote |
| `heading-md` | Newsreader 500 | 22 → 28 px | `clamp(1.375rem, 1.25rem + 0.56vw, 1.75rem)` | 1.25 | −0.005em | H3: cards, services, phases, FAQ questions |
| `numeral` | Newsreader 400 | 40 → 56 px | `clamp(2.5rem, 2.17rem + 1.48vw, 3.5rem)` | 1 | 0 | Process phase and principle numbers (real sequences only). Tabular figures |
| `lead` | Source Sans 3 400 | 19 → 21 px | `clamp(1.1875rem, 1.15rem + 0.19vw, 1.3125rem)` | 1.55 | 0 | Page-opener intro, hero descriptor, supporting line in sans contexts |
| `body` | Source Sans 3 400 | 17 → 18 px | `clamp(1.0625rem, 1.04rem + 0.09vw, 1.125rem)` | 1.6 | 0 | All running text (strategy minimum 17 px on mobile) |
| `body-sm` | Source Sans 3 400 | 15 px | `0.9375rem` | 1.5 | 0 | Helper text, footer links, captions |
| `label` | Source Sans 3 600 | 14 px | `0.875rem` | 1.4 | 0.12em, uppercase | Section labels (§5.12), footer column titles, ERP partner label |
| `ui` | Source Sans 3 600 | 16 px | `1rem` | 1.25 | 0.005em | Buttons, nav links, form labels |
| `legal` | Source Sans 3 400 | 14 px | `0.875rem` | 1.5 | 0 | Copyright line |

No text below 14 px anywhere. Uppercase is used only for the `label` style, never for headings or body.

### 2.3 The hero H1 composition

| Part | Style |
|---|---|
| "Transforming" | `display-xl`, `ink`, roman |
| Line break | Visual only: each word sits in a block-level `<span>`, with a normal space between them in the source, so no `<br>` is needed |
| "Workplaces" | `display-xl`, `purple`, italic |
| "." | `display-xl`, `orange`, italic. Same text node order, so screen readers read "Transforming Workplaces." |

The H1 remains one heading element with the exact copy "Transforming Workplaces." Colour and style changes are presentational spans only.

### 2.4 Typographic rules

- Measure: body text max `68ch`. Statement max `22em`. Lead max `36em`.
- `text-wrap: balance` on H1, H2 and H3. `text-wrap: pretty` on body and lead.
- Hanging punctuation is not used (inconsistent browser support).
- Numerals: `font-variant-numeric: lining-nums tabular-nums` on process numbers.
- Paragraph spacing: one `body` line (≈ 1.6em) between paragraphs. Never indented.
- **Brand name:** always "Kenenét Consultancy" / "Kenenét" exactly as in the copy. Never typeset as a wordmark imitation.
- Italic is reserved for the signature word in the Home H1 and for founder quotes. No other italic display text.

---

## 3. Spacing System

Base unit 4 px. Use the Tailwind default scale, which maps to it. Arbitrary values are not used.

| Token | px | Tailwind | Typical use |
|---|---|---|---|
| `space-1` | 4 | `1` | Icon-to-text nudge |
| `space-2` | 8 | `2` | Label to field, icon gap in buttons |
| `space-3` | 12 | `3` | Helper text below field |
| `space-4` | 16 | `4` | Between related items, card inner gap (mobile) |
| `space-6` | 24 | `6` | Between paragraphs groups, form-field rows, card padding (mobile) |
| `space-8` | 32 | `8` | Card padding (desktop), heading to body |
| `space-12` | 48 | `12` | Block to block within a section |
| `space-16` | 64 | `16` | Section padding (mobile) |
| `space-24` | 96 | `24` | Section padding (tablet) |
| `space-32` | 128 | `32` | Section padding (desktop) |
| `space-40` | 160 | `40` | Hero top padding (desktop) |

**Vertical rhythm inside a section**

| Relationship | Mobile | Desktop |
|---|---|---|
| Section label → H2 | 16 | 16 |
| H2 → intro / body | 24 | 32 |
| Body → link or button row | 32 | 40 |
| Intro → grid / list | 48 | 64 |
| Between list items with hairlines | 24 above / 24 below | 32 / 32 |

Spacing is set with `gap-*` on flex and grid parents. Margin and gap are not mixed on the same element. `space-x-*` and `space-y-*` utilities are not used.

---

## 4. Layout System

### 4.1 Breakpoints

| Name | Min width | Tailwind | Behaviour |
|---|---|---|---|
| Mobile | 0 | (base) | Designed first, at 360 px |
| Large mobile | 640 px | `sm` | Two-up buttons, wider measure |
| Tablet | 768 px | `md` | Two-column grids begin |
| Desktop | 1024 px | `lg` | **Desktop navigation appears.** 12-column layouts |
| Wide | 1280 px | `xl` | Max container reached |
| Ultra-wide | 1536 px | `2xl` | Container stays fixed. Margins grow |

This resolves the repo's tablet-range inconsistency (Validation Report C2 #13). Tablet is 768–1023 px.

### 4.2 Container and gutters

| Property | Mobile | Tablet | Desktop |
|---|---|---|---|
| Container max width | — | — | **1240 px** content (1336 px including side padding) |
| Side padding | 20 px | 32 px | 48 px |
| Columns | 4 | 8 | 12 |
| Column gutter | 16 px | 24 px | 32 px |
| Narrow container (statements, forms, long text) | 100% | 640 px | 760 px |

### 4.3 Standard section layouts

| Layout | Desktop columns (of 12) | Tablet / mobile |
|---|---|---|
| **Editorial split** (label left, content right) | Label 1–4, content 5–12 (content max 760 px) | Stacked: label above content |
| **Hero split** | Headline 1–7, supporting copy and CTAs 9–12, aligned to the headline's first line | Stacked. Headline, then supporting copy, then CTAs |
| **Lead and list** (Services categories) | Title and description 1–4, sticky at `top: 120px`; service list 6–12 | Stacked, accordions |
| **Card grid** | 3 columns (3, 6 or 9 cards) or 2 columns (4 cards). 5 cards: 3 + 2 left-aligned | 2 columns at `md`, 1 below |
| **Two parallel columns** (ERP who-does-what, mission / vision) | 1–6 and 7–12, divided by a 1 px `line` rule | Stacked with a horizontal rule between |
| **Form and aside** (Contact) | Form 1–7, direct channels 9–12 | Form first, aside below |
| **Band** (closing CTA) | H2 1–7, body and buttons 9–12 | Stacked |

### 4.4 Section spacing and backgrounds

| Context | Padding block |
|---|---|
| Standard section | 64 px mobile / 96 px tablet / 128 px desktop |
| Hero (Home) | Top 64 / 112 / 160, bottom 64 / 96 / 112 |
| Page opener (inner pages) | Top 48 / 80 / 112, bottom 48 / 64 / 80, with a 1 px `line` rule at the bottom of the container (not full bleed) |
| Credibility strip | 32 / 40 / 40 |
| Closing CTA band | 80 / 96 / 120 |

**Background rhythm:** alternate `paper` and `mist` by section. Never place two `mist` sections in a row. The closing band is always `purple-900` and is always followed by the `paper` footer. A 1 px `line` rule separates two `paper` sections only when no background change occurs and the content type changes.

### 4.5 Z-index scale

| Layer | Value |
|---|---|
| Content | 0 |
| Sticky jump menu | 20 |
| Header | 30 |
| Mobile menu panel | 40 |
| Skip link (focused) | 50 |

### 4.6 Radius and elevation

| Element | Radius |
|---|---|
| Buttons, inputs, select, checkbox, cards, images | 4 px (`--radius`) |
| Pills / tags | Not used |
| Full-bleed bands | 0 |

Elevation: none by default. Separation is created with `line` borders and surface changes. One shadow is defined, for the open mobile menu and the sticky header after scroll: `0 1px 0 0 #E6E1E8` (a hairline, not a blur).

---

## 5. Component System

Every component below lists anatomy, tokens, states and responsive behaviour. Text always comes from *Website Copy v1.0*.

### 5.1 Logo usage

| Rule | Specification |
|---|---|
| File | The supplied PNG until a vector arrives (E-03). Serve via `next/image` with explicit width and height, `priority` in the header |
| Alt text | "Kenenét Consultancy" (Copy §7.2). In the header the logo is a link to `/`, so the link's accessible name is "Kenenét Consultancy" |
| Clear space | On all sides, at least **x**, where x = the diameter of the orange head circle (≈ 0.21 × logo height) |
| Allowed backgrounds | `paper`, `mist`, `white` only |
| Prohibited | Recolouring, outlining, shadows, stretching, rotating, cropping without approval, placing on `purple`, `purple-900`, `orange` or photographs, re-typesetting the wordmark in any font |
| Header size | Height 44 px desktop, 36 px when the header is compressed, 36 px on mobile |
| Footer size | Height 56 px |
| Full lockup with logo line | Only at ≥ 320 px rendered width (404 page, Open Graph image), where the logo line stays legible |

**Decision DS-1 (needs client approval).** At header size (≈ 98 px wide), the logo line "A FERTILE GROUND FOR GROWTH!" renders at about 2 px cap height. That is illegible, and it also conflicts with the confirmed tagline.
*Recommended default:* ask the client for a tagline-free lockup. Until it arrives, use a crop of the supplied artwork that removes only the bottom logo line, with no redrawing, no recolouring and no change to proportions. Use it only after written approval. If the crop is refused, use the full lockup at 56 px height in the header (≈ 124 px wide) and accept the illegible line.

**Favicon and app icon:** the orange figure mark alone, cropped from the supplied artwork, on a transparent (favicon) or `paper` (Apple touch icon, 180 × 180) background. Subject to the same approval as DS-1.

### 5.2 Header and desktop navigation

| Part | Specification |
|---|---|
| Element | `<header>` containing `<nav aria-label="Primary">` |
| Height | 80 px. Compresses to 64 px after 24 px of scroll |
| Background | `paper`. After scroll: `paper` plus the hairline shadow. No backdrop blur (performance on low-end devices) |
| Layout | Container width. Logo left. Links and CTA right, `gap-10` between links, `gap-8` before the CTA |
| Links | About Us · Our Services · Our Approach. Style `ui` in `ink`. Hover `purple-700` |
| Current page | Text `purple`, plus a 2 px `purple` underline positioned 6 px below the baseline. `aria-current="page"` |
| CTA | "Request a Consultation" (→ `/contact#consultation-form`). **Purple solid** button (§5.4). Small size |
| Position | `sticky; top: 0`. Compression transition 200 ms (§6.2) |
| Skip link | First focusable element: "Skip to main content" → `#main`. Visually hidden until focused, then shown top-left as a purple-solid button |

Why the header CTA is purple, not orange: the header is persistent, so an orange header button would make two orange buttons visible on almost every screen. Orange stays with the in-content primary action (Strategy §7.1, "one primary button per viewport").

### 5.3 Mobile navigation (below 1024 px)

| Part | Specification |
|---|---|
| Bar | Height 64 px. Logo left. Menu button right: 44 × 44 px hit area, 24 px icon, accessible name "Open menu" / "Close menu", `aria-expanded`, `aria-controls` |
| Panel | Full-screen sheet below the bar, background `paper`, 20 px side padding |
| Contents, in order | Home · About Us · Our Services · Our Approach · Contact Us (each `heading-md` Newsreader, 56 px row height, `line` separator), then a full-width **orange primary** "Request a Consultation", then verified phone and email (tap-to-call, tap-to-email) **only when verified** |
| Current page | `purple` text and a 2 px `purple` bar on the left of the row. `aria-current="page"` |
| Behaviour | Opens with a 240 ms fade and 8 px slide. Focus moves to the first link. Focus is trapped while open. `Esc` closes and returns focus to the menu button. Body scroll is locked. Navigating closes the panel |
| No sticky bottom bar | Per Strategy §3.1 |

### 5.4 Buttons

| Variant | Fill | Text | Border | Hover | Use |
|---|---|---|---|---|---|
| **Primary** | `orange` | `purple-900` | none | Fill `orange-600`, arrow moves 3 px right | One per viewport. "Request a Consultation", "Discuss ERP With Us", "Submit Request" |
| **Purple solid** | `purple` | `paper` | none | Fill `purple-700` | Header CTA, focused skip link |
| **Secondary** | transparent | `purple-700` | 1 px `purple` | Fill `mist`, border `purple-700` | Secondary paired actions: "Explore Our Services", "See How We Work" |
| **Secondary on dark** | transparent | `paper` | 1 px `paper` at 40% opacity | Border `paper` 100%, fill `paper` at 8% | Secondary action in the closing band |
| **Text link** | none | `purple` | none | `purple-700`, underline | "Learn About Kenenét", "View all services", "How ERP works with Kenenét" |

| Size | Height | Padding inline | Type | Icon |
|---|---|---|---|---|
| Large (hero, closing band, form submit) | 56 px | 28 px | `ui` 17 px | 18 px arrow |
| Default | 48 px | 24 px | `ui` 16 px | 16 px arrow |
| Small (header) | 40 px | 18 px | `ui` 15 px | 16 px arrow |

Shared rules: radius 4 px. Gap 10 px between label and icon. The trailing arrow icon (`ArrowRight`, Lucide, 1.5 px stroke) is decorative (`aria-hidden`), and is the only arrow used on buttons and links across the site. Minimum width 44 px. In a button pair, the primary comes first in DOM order and on the left (desktop) or top (mobile). Below 640 px, buttons in a pair are full width and stacked with `gap-3`. Buttons use `<a>` for navigation and `<button>` only for actions.

### 5.5 Hero sections

**Home hero (H-1)**

| Part | Specification |
|---|---|
| Background | `paper`. No image required. The type composition is the visual |
| Grid | Hero split (§4.3). Desktop: H1 in columns 1–7. Supporting block in columns 9–12, top-aligned to the H1 cap height |
| H1 | Signature composition (§2.3) |
| Supporting line | "Organizational Excellence for Sustainable Change." in Newsreader 400, 24 → 28 px, `ink` |
| Descriptor | Approved descriptor in `lead`, `ink-600`, max 36em |
| Buttons | Primary large "Request a Consultation" + Secondary large "Explore Our Services" |
| Below the hero | The credibility strip (§5.6) sits directly under it, on the same `paper` surface, separated by a 1 px `line` rule |
| Height | Content height, not `100vh`. On mobile the top of the next section must peek in at 360 × 740 |
| Optional image | Only a client-supplied photograph (§8). It sits below the H1 / supporting row, full container width, 21:9 on desktop and 4:3 on mobile. **At launch: none** |

**Inner-page opener (A-1, S-1, P-1, C-1)**

| Part | Specification |
|---|---|
| Layout | Editorial split. Desktop: H1 in columns 1–8, intro in columns 1–7 under it. No image |
| H1 | `display-lg`, `ink`. No italic, no orange |
| Intro | `lead`, `ink-600` |
| Rule | 1 px `line` rule at the bottom, container width. On Services, the jump menu sits immediately below this rule |

### 5.6 Credibility strip (H-2)

- Row of 2–3 items. Each item is `body` in `ink`, with a 6 × 6 px `purple` square marker before the text (decorative). **No numerals.**
- Desktop: items in one row, separated by 1 px vertical `line` rules, `gap-12`. Mobile: stacked, separated by horizontal `line` rules.
- Shows only approved items. The third item renders only when the verified fact exists. No placeholder.

### 5.7 Service cards (Home H-4)

| Part | Specification |
|---|---|
| Element | `<article>` inside a list (`<ul role="list">`). Entire card is one link to `/services#<category-anchor>` (accessible name = category name) |
| Surface | `white` on `mist` sections, 1 px `line` border, radius 4 px, padding 24 px mobile / 32 px desktop |
| Content | H3 category name (`heading-md`), one-line descriptor (`body`, `ink-600`), `ArrowRight` 20 px in `purple` aligned bottom-right |
| Height | Equal heights per row (CSS grid `auto-rows: 1fr`) |
| Hover | Border `purple`. Arrow moves 3 px right. H3 turns `purple-700`. 150 ms |
| Focus | Ring on the card (§1.6) |
| Count | 3–6 cards (§4.3 card grid) |
| **Blocked state** | Until the catalogue is approved the grid does not render at all. The section shows H2 "Our Services", the approved intro and "View all services". No skeletons, no placeholder cards |

### 5.8 Content sections

| Pattern | Use | Specification |
|---|---|---|
| **Statement** | Home H-3 | Editorial split. The H2 "Who we are and what we do" is rendered in the `label` style (it stays an `<h2>`). Statement paragraph 1 in `statement`, first sentence `ink`, second sentence `ink-600`. Paragraph 2 in `body`, `ink-600`, max 36em. Text link below |
| **Prose** | About A-2, Approach P-2, Services "Not sure where to start?" | Editorial split. H2 in `heading-xl` on the left (desktop) or above (mobile). Body in narrow container |
| **Band** | Home H-5 ERP band | Section on `paper`. A `mist` panel (1 px `line` border, 4 px radius, 40 px padding) holds: label "ERP Solutions" (`label`, `purple`), H2, body, text link. Panel spans columns 6–12; columns 1–5 empty on desktop |
| **Two-column parallel** | ERP "Who does what", Mission / Vision | Each column: `label` heading ("Our technology partner" / "Kenenét Consultancy", or "Mission" / "Vision"), then content. Mission and vision text in `statement`. Vertical 1 px `line` divider on desktop |
| **FAQ / accordion** | ERP common questions, long service descriptions | Native `<details>` / `<summary>`, or a disclosure button with `aria-expanded`. Each row: question in `heading-md` (desktop) / 20 px (mobile), `Plus` icon rotating 45° to become × when open, separated by `line` rules. Accessible labels "Show details" / "Hide details" where the trigger has no visible text. Height animates 240 ms (or instantly with reduced motion) |
| **Values list** | About A-5 | Numbered only if the client's values are an ordered list; otherwise a 2- or 3-column grid with `heading-md` name and `body` meaning, separated by top `line` rules. No icons |

### 5.9 Process diagram (Home H-6 row, Approach P-4)

The process is drawn with type and thin lines only. No pictograms.

| Context | Desktop | Mobile |
|---|---|---|
| **Home preview row** | Horizontal row of 3–6 phases. Each phase: `numeral` in `purple` (e.g. "1"), phase name in `heading-md`. Phases joined by a 1 px `line` rule running through the numeral midline | Vertical list. Numeral left, name right, 1 px `purple` connecting line on the left between numerals |
| **Approach timeline (`#process`)** | Vertical editorial timeline. Left rail (columns 1–2): sticky numeral, `purple`. Content (columns 4–11): H3 phase name, purpose (`lead`), key activities (`body` list with 6 px `purple` square markers), "What you receive" (`label` + `body`). 1 px `purple` rail connects phases. 96 px between phases | Single column. Numeral above the name. Rail on the left edge of the content, 16 px from the text |
| **Phase indicator** (Approach only, ≥ 1024 px) | A small sticky list in the left rail that highlights the current phase as you scroll (`purple-100` background, `purple` text). Implemented with IntersectionObserver. Not shown on mobile | — |

Semantics: an ordered list (`<ol>`), each phase an `<li>` containing an `<h3>`. The numeral is part of the list marker rendering, not repeated in the heading text.

**Blocked state:** if the methodology is not supplied, the Home row is not rendered (the paragraph and link remain), and Approach P-4 is not rendered. No invented phases, no empty numerals.

### 5.10 Founder profile (Home H-7, About A-6 `#leadership`)

| Part | Specification |
|---|---|
| Photo | Client-supplied only, with written consent. Aspect 4:5. Width 100% mobile, columns 1–5 desktop. Radius 4 px. Natural colour, no duotone, no purple overlay. Alt text from Copy §7.2 frame |
| Text | Columns 7–12 on desktop. `label` "Leadership" is not used (the H2 "Leadership" is the heading). Name in `heading-xl`, title in `label` `ink-600`, biography in `body`, optional quote in `statement` italic with a 2 px `purple` left rule (the only left-rule treatment in the system, used only for quotations) |
| Without photo | Text only, centred on the narrow container. The layout must not show a grey placeholder |
| Home preview | Compact version: photo 1:1 at 120 px, name, title, one verified sentence, text link "Meet our leadership" |
| Multiple leaders | Equal cards in a 2- or 3-column grid |
| **Blocked state** | Section not rendered |

### 5.11 Contact form (C-2 `#consultation-form`)

| Part | Specification |
|---|---|
| Container | Form and aside layout (§4.3). Form on `paper` (no card), max 640 px |
| Field order | Full name · Organization · Your role (optional) · Email · Phone (optional) · Area of interest (optional) · Message · Consent · Submit |
| Pairing | ≥ 768 px: Full name + Organization on one row, Email + Phone on one row. Others full width |
| Label | Above the field, `ui` 15 px, `ink`. Optional fields show "(optional)" as part of the approved label |
| Helper text | Below the label, above the field (so it is read before typing), `body-sm`, `ink-600`, linked with `aria-describedby` |
| Input | Height 48 px (textarea min 160 px, vertical resize). Fill `white`. Border 1 px `ink-400`. Radius 4 px. Text `body` (≥ 16 px to stop iOS zoom). Padding 12 × 14 px |
| Focus | Border `purple` + 2 px `purple` ring at 2 px offset |
| Error | Border `error`. Message below the field: `AlertCircle` 16 px + approved message text, `body-sm`, `error`. `aria-invalid="true"`, message linked via `aria-describedby`. On submit with errors, focus moves to an error summary at the top of the form listing each error as a link to its field |
| Validation timing | On blur after the first interaction, and on submit. Never while typing the first time |
| Select | Native `<select>` styled to match inputs, with a `ChevronDown` 16 px. Options: approved categories · ERP Solutions · Not sure yet. ERP is pre-selected when arriving via "Discuss ERP With Us" (`?interest=erp`) |
| Consent | 20 × 20 px checkbox, `ink-400` border, checked fill `purple` with `paper` tick. Label is the approved consent sentence, with "Privacy Notice" as a link |
| Honeypot | Visually hidden text field (`tabindex="-1"`, `autocomplete="off"`, `aria-hidden`), named neutrally |
| Submit | Primary large "Submit Request", full width below 640 px. While sending: label "Sending your request…", spinner 16 px, `aria-busy`, disabled |
| Success | Replaces the form in place: `CheckCircle` 24 px `success`, H2-level heading "Thank you. Your request has been received." in `heading-xl`, optional confirmed body, then the approved onward links. Focus moves to the heading. Announced via `role="status"` |
| Failure | Inline alert above the submit button: `error` 1 px border, `white` fill, heading "Your request could not be sent." and the approved body with the verified email link. `role="alert"`. Form values are preserved |
| Privacy line (C-5) | Below the submit button, `body-sm`, `ink-600` |
| Aside (C-3) | H2 "Reach us directly" in `heading-md`. Definition list: `label` term ("Email", "Phone", "Address", "Hours") and `body` value. Email and phone are links. Rows render only when verified. If none are verified, the aside is not rendered and the form spans columns 1–8 |

### 5.12 Section labels (eyebrows)

A small `label`-style line above an H2 is allowed **only** when the text is an approved copy string. Approved instances:

- "ERP Solutions" (Home H-5 label)
- "Delivered through our technology partner" (Services S-ERP label)
- "Mission" / "Vision" (About A-4 sub-labels)
- "Our technology partner" / "Kenenét Consultancy" (ERP who-does-what column heads)
- Home H-3, where the approved H2 itself is set in label style (§5.8)

No other eyebrows are added. Colour: `purple` (or `ink-600` for sub-labels).

### 5.13 CTA sections (closing bands)

| Part | Specification |
|---|---|
| Surface | `purple-900`, full bleed |
| H2 | `heading-xl`, `paper` |
| Body | `lead`, `on-dark-muted` |
| Buttons | Primary large (orange) + Secondary on dark. Focus ring `orange` |
| Layout | Band layout (§4.3) |
| Copy | Each page's closing band uses its own approved H2 and body (Copy Appendix B, repetition control) |

### 5.14 Services jump menu (S-2)

| Part | Specification |
|---|---|
| Element | `<nav aria-label="Jump to a service area">` with a list of anchor links |
| Desktop | Sticky below the header (`top: 64px`), `paper` background, bottom `line` rule, 56 px tall, links in `ui` `ink-600`, `gap-8`. Current section: `purple` text + 2 px `purple` underline. "ERP Solutions" is always last |
| Mobile | Horizontally scrolling row, 48 px tall, with a right-edge fade (decorative gradient from transparent to `paper`, 24 px). Scroll snap. Current item scrolls into view |
| Scroll offset | Anchored sections use `scroll-margin-top: 136px` (header 64 + menu 56 + 16) |

### 5.15 Footer

| Part | Specification |
|---|---|
| Surface | `paper`, top 1 px `line` rule. (It follows the `purple-900` closing band, so no extra rule is needed above it in practice) |
| Grid | Desktop 12 columns: brand block 1–5, Navigate 7–8, Contact 9–10, Utility 11–12. Tablet: brand full width, then three columns. Mobile: stacked, `gap-12` |
| Brand block | Logo (56 px high), then "Transforming Workplaces." in Newsreader 24 px `ink`, then the supporting line in `body-sm` `ink-600` |
| Column titles | `label`, `ink-600` ("Navigate", "Contact"). Titles are `<h2>` elements styled as labels, so the footer has a valid outline |
| Links | `body-sm`, `ink`, hover `purple-700` underline. 32 px row height (44 px tap target via padding on mobile) |
| Contact column | Verified items only. Hidden entirely if none |
| Social | Rendered only with verified profiles. Icon buttons 44 × 44 px with accessible names |
| Legal line | Full-width row below a `line` rule: "© 2026 Kenenét Consultancy." in `legal` `ink-600`. Year generated at build time |

### 5.16 Reusable typography components

| Component | Renders | Props | Notes |
|---|---|---|---|
| `Heading` | `h1`–`h4` | `as` (semantic level), `variant` (`display-xl`, `display-lg`, `heading-xl`, `heading-md`, `label`), `className` | Semantic level and visual style are independent, so outline stays correct |
| `Statement` | `p` | `lead` (first sentence), `rest` (remaining text) | Two-tone treatment (§5.8). Text passed through unchanged |
| `Lead` | `p` | `children` | `lead` style, max 36em |
| `Prose` | `div` | `children` | Body rhythm, link styling, list markers (6 px `purple` squares), max 68ch |
| `SectionLabel` | `p` or `h2` | `as`, `children` | Approved strings only (§5.12) |
| `BrandName` | `span` | none | Outputs "Kenenét Consultancy" or "Kenenét" (`short` prop). Guarantees the accent and prevents the rejected spellings. `lang` not overridden |
| `Numeral` | `span` | `value` | Tabular lining figures, `aria-hidden` when the number is already conveyed by `<ol>` |

### 5.17 Utility pages

- **404:** `paper`, centred narrow container, full logo lockup at 320 px wide (logo line legible here, subject to DS-1), H1 "Page not found." in `display-lg`, body, then the three approved links as text links.
- **Privacy Notice:** footer-linked utility page using the `Prose` component in the narrow container. Text pending (E-14).

---

## 6. Interaction Design

### 6.1 Principles

Motion confirms an action or orients the reader. It never decorates. There is one orchestrated entrance (the Home hero) and otherwise only state feedback.

### 6.2 Timing tokens

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion-fast` | 150 ms | `cubic-bezier(0.2, 0, 0, 1)` | Hover colours, arrow nudge, border changes |
| `motion-base` | 240 ms | `cubic-bezier(0.2, 0, 0, 1)` | Menu panel, accordion, header compression |
| `motion-slow` | 600 ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero entrance, section reveal |

### 6.3 Hover and press

| Element | Hover | Press |
|---|---|---|
| Primary button | Fill to `orange-600`, arrow `translateX(3px)` | Hover state held |
| Secondary button | Fill `mist`, border `purple-700` | Same |
| Text link | Colour `purple-700`, underline appears (offset 4 px), arrow `translateX(3px)` | Same |
| Nav link | Colour `purple-700` | Same |
| Service card | Border `purple`, H3 `purple-700`, arrow `translateX(3px)` | Same |
| Accordion row | Question colour `purple-700` | — |

Hover effects apply only under `@media (hover: hover) and (pointer: fine)`, so touch devices never get stuck hover states.

### 6.4 Entrance and reveal

**Home hero entrance (once per page load):**
1. H1 line 1: opacity 0 → 1, `translateY(12px)` → 0, 600 ms, delay 0.
2. H1 line 2: same, delay 80 ms.
3. Supporting line and descriptor: same, delay 160 ms.
4. Buttons: same, delay 240 ms.

**Section reveal (below the fold only):** opacity 0 → 1 and `translateY(8px)` → 0, 600 ms, triggered once when 15% of the section enters the viewport.

**Non-negotiable safety rules** (the Lovable reference fails these):
- Content is **visible by default** in the HTML and CSS. The hidden starting state is applied only by a class added from JavaScript after hydration, and only when IntersectionObserver is supported and reduced motion is not requested.
- Above-the-fold content other than the hero sequence is never hidden.
- The hero entrance must not delay LCP: the H1 is painted in its final position on first render in the server HTML, and the animation is CSS-only (`@keyframes` with `animation-fill-mode: both`), starting immediately.
- Print stylesheet forces all content visible.

### 6.5 Focus states

- `:focus-visible` only (no ring on mouse click).
- 2 px solid ring, 2 px offset, radius follows the element. `purple` on light, `orange` on `purple-900`.
- Never `outline: none` without a replacement.
- Focus order follows visual order. The sticky header must not cover focused elements (`scroll-padding-top: 96px` on `html`).

### 6.6 Reduced motion

Under `@media (prefers-reduced-motion: reduce)`:
- Hero entrance and section reveals are disabled. Content appears immediately.
- Accordion and menu open instantly (or with a ≤ 100 ms opacity fade).
- Arrow nudges and header compression transitions are removed. The header still compresses, without animation.
- `scroll-behavior: smooth` is disabled.
- Nothing auto-plays, loops or parallaxes, in any mode.

---

## 7. Responsive Design

| Area | Mobile (< 768) | Tablet (768–1023) | Desktop (≥ 1024) |
|---|---|---|---|
| Header | 64 px bar, logo + menu button | Same as mobile | 80 → 64 px, full nav and purple-solid CTA |
| Home hero | Stacked. H1 48–64 px. Buttons full width, stacked | Stacked. H1 ≈ 72 px. Buttons side by side | Split 7 / 4. H1 up to 104 px |
| Section padding | 64 px | 96 px | 128 px |
| Editorial split | Label above content | Label above content | Label left (cols 1–4), content right |
| Service cards | 1 column | 2 columns | 3 columns (2 for four cards) |
| Services category | Title, description, then accordion list | Same, wider | Sticky title left, list right |
| Jump menu | Scrolling row with edge fade | Scrolling row | Full sticky row |
| Process | Vertical rail list | Vertical rail list | Home: horizontal row. Approach: vertical timeline with sticky phase indicator |
| ERP who-does-what | Stacked with horizontal rule | Two columns | Two columns |
| Founder | Photo above text | Photo 1/3, text 2/3 | Photo cols 1–5, text cols 7–12 |
| Contact | Form, then direct channels | Form, then direct channels | Form left, channels right |
| Closing band | Stacked, buttons full width | Stacked, buttons inline | H2 left, body and buttons right |
| Footer | Stacked blocks | Brand row, then three columns | Four columns |

Additional rules:
- Touch targets ≥ 44 × 44 px everywhere.
- No horizontal page scroll at 320 px. "Transforming" is the longest unbreakable word on the site: verify it fits the 280 px content width at the 48 px floor, in both Newsreader and the Georgia fallback. If it does not, lower the `display-xl` floor to 44 px rather than allowing the word to break.
- Text can be zoomed to 200% without loss of content or function.
- Landscape phones: the hero must not push the CTAs below 2 screen heights.

---

## 8. Image Direction

### 8.1 Launch position

The site launches **without photography**. Typography, colour fields and hairline structure carry the design (Strategy §1.5). Every component in §5 has a defined no-image state.

### 8.2 When photography is supplied

| Type | Content | Aspect ratio | Where |
|---|---|---|---|
| Workplace context | Real Ethiopian workplaces: meeting rooms, working sessions, documents on a table, corridors, natural light. Client-owned or properly licensed | 21:9 desktop / 4:3 mobile (art-directed with `<picture>`) | Home hero (optional, below the headline row), About A-2 |
| Detail | Hands, documents, notebooks, whiteboards. No identifiable faces | 4:3 or 3:2 | Approach, Services opener (optional) |
| Founder portrait | Head-and-shoulders, neutral or real office background, eye level, natural light | 4:5 (About), 1:1 (Home preview) | Leadership modules |

**Composition:** one subject, generous negative space, horizon and verticals level. Subjects look into the page (toward the text column).

**Treatment:** natural colour, slightly warm white balance, no filters, no duotone, no purple or orange overlays, no gradients over images, no text on images. Radius 4 px. A 1 px `line` border only when the image edge meets `paper` with low contrast.

**Prohibited (Strategy §1.5, §8.5):** stock people presented as clients or staff, AI-generated people, handshake, globe, circuit-board, server or "technology infrastructure" imagery, ERP product screenshots or dashboards, partner logos without written permission.

### 8.3 Illustration and icons

- No illustrations. No decorative shapes, blobs or gradients.
- Icons: **Lucide** only, 1.5 px stroke, sizes 16 / 20 / 24 px, `currentColor`. The full icon set used: `ArrowRight`, `Menu`, `X`, `Plus`, `ChevronDown`, `Check`, `CheckCircle`, `AlertCircle`, `Mail`, `Phone`, `MapPin`, `Loader2`. Icons are never used to represent services or phases.

### 8.4 Technical requirements

- `next/image` for every raster image. AVIF and WebP output. `sizes` set per layout. Explicit dimensions to prevent layout shift.
- Hero image (if any): `priority`, ≤ 180 KB at 1440 px wide. Others lazy-loaded, ≤ 120 KB.
- Alt text per Copy §7.2. Decorative images use `alt=""`.

### 8.5 Social sharing image

1200 × 630 px, `paper` background, full logo lockup centred at 480 px wide (subject to DS-1), "Transforming Workplaces." in Newsreader 56 px `ink` below. No other text (Copy §7.3). Generated with `next/og` at build time, using the same font files.

---

## 9. Page-by-Page Design

Backgrounds are listed per section. **Bold** sections render only when their content is approved. Section IDs refer to *Website Copy v1.0*.

### 9.1 Home `/`

| # | Section | Surface | Component | Notes |
|---|---|---|---|---|
| H-1 | Hero | `paper` | Home hero (§5.5) | Signature H1. Primary + secondary |
| H-2 | Credibility strip | `paper` | §5.6 | Two items at launch |
| H-3 | Who we are and what we do | `paper` (separated by `line` rule) | Statement (§5.8) | Two-tone statement |
| H-4 | Our Services | `mist` | Card grid (§5.7) | Cards hidden until catalogue approved. Intro and link always shown |
| H-5 | ERP band | `paper` | Band (§5.8), `mist` panel | Never the hero. Text link only, no orange |
| H-6 | Our Approach | `mist` | Prose + process row (§5.9) | Row hidden until methodology supplied. Secondary button "See How We Work" |
| **H-7** | **Leadership preview** | `paper` | Founder compact (§5.10) | Omitted at launch |
| H-8 | Proof of work | — | — | Does not exist at launch |
| H-9 | Closing band | `purple-900` | §5.13 | Primary + verified direct link (when available) |

Launch rhythm (with blocked sections removed): paper hero → paper statement → mist services → paper ERP → mist approach → deep closing → paper footer.

### 9.2 About `/about`

| # | Section | Surface | Component |
|---|---|---|---|
| A-1 | Opener | `paper` | Inner-page opener |
| A-2 | Who we are | `paper` | Prose (editorial split) |
| **A-3** | **Our philosophy** | `mist` | Statement style, 1–3 statements stacked with `gap-12` |
| **A-4** | **Mission and vision** `#mission-vision` | `paper` | Two-column parallel, `statement` text |
| **A-5** | **Our values** `#values` | `mist` | Values list |
| **A-6** | **Leadership** `#leadership` | `paper` | Founder profile |
| A-7 | How ERP fits | `mist` | Prose, text link (render only if the client opts in) |
| A-8 | Closing band | `purple-900` | Primary + secondary on dark |

If A-3 to A-6 are all absent at launch, the page is opener → who we are → how ERP fits → closing band. The alternation still holds (paper, paper with rule, mist, deep).

### 9.3 Our Services `/services`

| # | Section | Surface | Component |
|---|---|---|---|
| S-1 | Opener | `paper` | Inner-page opener |
| S-2 | Jump menu | `paper`, sticky | §5.14. At launch it contains only "ERP Solutions" and is hidden if it has a single item |
| **S-3…n** | **Service categories** | alternate `paper` / `mist` | Lead-and-list layout. Each service: H3 + description, accordion when > 60 words, optional "Enquire about this service" text link (`?interest=<slug>`) |
| S-ERP | ERP Solutions `#erp` | `mist` (distinct block) | Label "Delivered through our technology partner" (`purple`), H2, prose subsections ("What ERP is", "Why implementation matters"), two-column who-does-what, "What this means for you", FAQ accordion, primary "Discuss ERP With Us" |
| S-last | Not sure where to start? | `purple-900` | Closing-band component (§5.13) with primary + secondary on dark. This section is the page's closing band, so no additional band is added |

The ERP block's primary button and the "Not sure" band's primary button are always more than one viewport apart.

### 9.4 Our Approach `/approach`

| # | Section | Surface | Component |
|---|---|---|---|
| P-1 | Opener | `paper` | Inner-page opener |
| P-2 | What organizational change involves | `paper` | Prose |
| **P-3** | **How we work** | `mist` | Numbered list, `numeral` + `heading-md`, 3–5 items |
| **P-4** | **Our process** `#process` | `paper` | Approach timeline + phase indicator (§5.9) |
| **P-5** | **What working with us looks like** | `mist` | Prose |
| **P-6** | **Where ERP fits** | `paper` | Prose + text link |
| P-7 | Closing band | `purple-900` | Primary + secondary on dark |

### 9.5 Contact Us `/contact`

| # | Section | Surface | Component |
|---|---|---|---|
| C-1 | Opener | `paper` | Inner-page opener (shorter: bottom padding 32 / 48 / 64) |
| C-2 | Consultation form `#consultation-form` | `paper` | §5.11, form column |
| C-3 | Reach us directly | `paper` | §5.11 aside |
| **C-4** | **Location** | `mist` | Address text. A map only if the client wants one; load it on interaction (click to load), never on page load |
| C-5 | Privacy reassurance | — | Inside the form |

No closing band on Contact: the form is the conversion. The footer follows directly.

---

## 10. Frontend Handoff (Next.js 16 + TypeScript)

### 10.1 Stack and conventions

| Item | Decision |
|---|---|
| Framework | Next.js 16, App Router, React Server Components by default. Client components only for: mobile menu, header scroll state, accordion (if not native `<details>`), jump-menu active state, phase indicator, contact form |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind CSS v4. Tokens in `app/globals.css` under `@theme inline`. **No raw colour utilities** (`bg-white`, `text-black`, hex values) in components. Only semantic token utilities |
| UI primitives | shadcn/ui only where it saves real work (e.g. `Sheet` for the mobile menu is optional; native elements preferred for form controls). All primitives restyled to these tokens |
| Icons | `lucide-react` |
| Fonts | `next/font/google`: `Newsreader` (variable, `style: ['normal','italic']`, `axes: ['opsz']`, `subsets: ['latin','latin-ext']`, `display: 'swap'`) and `Source_Sans_3` (variable, same subsets). Exposed as CSS variables mapped to `--font-serif` and `--font-sans` |
| Hosting | Vercel (confirmed) |
| Package manager | pnpm |

### 10.2 Route map

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | |
| `/about` | `app/about/page.tsx` | |
| `/services` | `app/services/page.tsx` | Reads `?interest` only on `/contact` |
| `/approach` | `app/approach/page.tsx` | |
| `/contact` | `app/contact/page.tsx` | Awaits `searchParams` (Next 16) to pre-select interest |
| `/privacy` | `app/privacy/page.tsx` | Utility, `noindex` until text approved |
| 404 | `app/not-found.tsx` | |
| OG image | `app/opengraph-image.tsx` | `next/og` |
| Icons | `app/icon.png`, `app/apple-icon.png` | From DS-1 approved mark |

All five primary pages are statically rendered. The contact form posts to a Server Action.

### 10.3 Directory structure

| Path | Contents |
|---|---|
| `app/` | Routes, `layout.tsx` (fonts, `<html lang="en" className="bg-background">`, header, footer, skip link), `globals.css` |
| `components/layout/` | `site-header`, `mobile-menu`, `site-footer`, `skip-link` |
| `components/sections/` | One file per reusable section pattern: `home-hero`, `page-opener`, `credibility-strip`, `statement-section`, `prose-section`, `service-card-grid`, `service-category`, `erp-band`, `erp-section`, `process-row`, `process-timeline`, `founder-profile`, `values-list`, `two-column-parallel`, `faq-accordion`, `closing-band`, `jump-menu` |
| `components/ui/` | `button` (variants §5.4), `heading`, `statement`, `lead`, `prose`, `section-label`, `brand-name`, `numeral`, form controls (`field`, `input`, `textarea`, `select`, `checkbox`, `error-summary`) |
| `components/contact/` | `consultation-form` (client), `contact-aside` |
| `content/` | Typed content modules (§10.4). The only place copy lives |
| `lib/` | `utils.ts` (`cn`), `validation.ts` (form schema), `site.ts` (nav items, CTA map) |
| `app/actions/` | `submit-consultation.ts` (Server Action) |

### 10.4 Content model and gating

Copy is stored as typed data in `content/`, transcribed verbatim from *Website Copy v1.0*. Every item that depends on a client confirmation is optional in the type, and components render nothing when it is absent. This is how "blocked" sections stay invisible without code changes.

| Module | Fields | Gate |
|---|---|---|
| `content/site.ts` | brandName, tagline, supportingLine, nav items, CTA labels and hrefs, legalLine, `contact?` { email?, phone?, address?, hours? }, `social?` [] | G4 for contact |
| `content/home.ts` | hero, credibility items (2 required, 1 optional), statement, servicesIntro, erpBand, approachPreview { body, `phases?` }, `leadership?`, closing | G1, G5 |
| `content/about.ts` | opener, whoWeAre { body, `background?` }, `philosophy?`, `mission?`, `vision?`, `values?`, `leadership?`, erpNote (with `enabled` flag), closing | G1, G5 |
| `content/services.ts` | opener, `categories?` [ { slug, name, description, services: [ { name, description } ] } ], erp { label, whatErpIs, whyImplementation, partner { `name?`, `logo?` }, kenenetScope?, whatThisMeans, faq [] }, notSure | G1, G3 |
| `content/approach.ts` | opener, context, `principles?`, `phases?` [ { name, purpose, activities [], receives } ], `engagement?`, `erpFit?`, closing | G1 |
| `content/contact.ts` | opener, `afterSubmit?`, form labels, helper texts, validation messages, states, privacy line, area-of-interest options (derived: categories + "ERP Solutions" + "Not sure yet") | G4, E-14 |

Rules:
- **No `[CLIENT CONFIRMATION]` text is ever rendered.** A build-time check fails the build if any content string contains `[CLIENT CONFIRMATION` or the rejected spellings "Kenenet" / "Kenent" (case-insensitive, outside URLs and email addresses).
- Collections with a minimum (service cards 3–6, phases 3–6, values 3–6, principles 3–5) render only when the minimum is met.
- Category `slug` values are ASCII, lowercase, single words or hyphen-free where possible (Strategy §2.5).

### 10.5 Design tokens in Tailwind v4

Implement §1, §2 and §4 in `app/globals.css`:

| Group | Tokens to define in `@theme inline` |
|---|---|
| Colours | `--color-background`, `--color-foreground`, `--color-surface-alt`, `--color-surface-raised`, `--color-surface-inverse`, `--color-muted-foreground`, `--color-inverse-foreground`, `--color-inverse-muted`, `--color-brand`, `--color-brand-strong`, `--color-brand-subtle` (`purple-100`), `--color-accent`, `--color-accent-hover`, `--color-on-accent`, `--color-border`, `--color-input`, `--color-ring`, `--color-destructive`, `--color-success` — values from §1.1–1.3 |
| shadcn aliases | Map `--primary` to `purple`, `--primary-foreground` to `paper`, `--secondary` to `mist`, `--muted` to `mist`, `--card` to `white`, `--popover` to `paper`, so any added shadcn component inherits the system |
| Fonts | `--font-serif` (Newsreader variable), `--font-sans` (Source Sans 3 variable) |
| Type | `--text-display-xl`, `--text-display-lg`, `--text-heading-xl`, `--text-statement`, `--text-heading-md`, `--text-numeral`, `--text-lead`, `--text-body`, `--text-body-sm`, `--text-label`, `--text-ui`, `--text-legal`, each with its `--line-height` and `--letter-spacing` companion (§2.2) |
| Radius | `--radius: 0.25rem` |
| Motion | `--ease-standard`, `--ease-emphasis`, `--duration-fast`, `--duration-base`, `--duration-slow` (§6.2) |
| Container | A `container-page` utility: `max-width: 1336px; padding-inline: 20px / 32px / 48px; margin-inline: auto` |

Base layer: `html { scroll-padding-top: 96px; }`, `body` uses `font-sans text-body text-foreground bg-background antialiased`, `::selection` per §1.6, `:focus-visible` ring per §6.5, and the reduced-motion block per §6.6.

### 10.6 Component API summary

| Component | Key props | Server / client |
|---|---|---|
| `Button` | `variant: 'primary' \| 'brand' \| 'secondary' \| 'secondary-inverse' \| 'link'`, `size: 'sm' \| 'md' \| 'lg'`, `href?`, `icon?: boolean` (trailing arrow), `asChild?` | Server |
| `HomeHero` | content from `home.hero` | Server (entrance is CSS) |
| `PageOpener` | `title`, `intro` | Server |
| `CredibilityStrip` | `items: string[]` | Server |
| `StatementSection` | `heading`, `statement: { lead, rest }`, `body`, `link` | Server |
| `ServiceCardGrid` | `categories?` | Server. Returns `null` below 3 |
| `ErpBand` / `ErpSection` | content from `home.erpBand` / `services.erp` | Server |
| `ProcessRow` / `ProcessTimeline` | `phases?` | Server. Timeline's phase indicator is a small client island |
| `FounderProfile` | `leader?`, `variant: 'full' \| 'compact'` | Server |
| `FaqAccordion` | `items` | Server (native `<details>`) |
| `ClosingBand` | `heading`, `body`, `primary`, `secondary?` | Server |
| `JumpMenu` | `items` | Client (active state). Hidden if one item |
| `SiteHeader` | `pathname` derived via `usePathname` in a client child | Server shell + client island |
| `MobileMenu` | `items`, `cta`, `contact?` | Client |
| `ConsultationForm` | `options`, `defaultInterest?`, `messages` | Client, posts to Server Action with `useActionState` |

### 10.7 Contact form implementation

| Concern | Requirement |
|---|---|
| Validation | Shared schema (e.g. Zod) used on client and server. Messages exactly as Copy §6 C-2 |
| Submission | Server Action. Re-validates, checks the honeypot (silently accept and discard if filled), rate-limits by IP (lightweight, e.g. Upstash Ratelimit, only if approved) |
| Delivery | Email to the client-nominated inbox (E-15) through a transactional email provider (e.g. Resend via the Vercel integration). **No database, no CRM** (Strategy §9) |
| Progressive enhancement | The form works without JavaScript (native `action` posts to the Server Action, server renders errors) |
| Pre-selection | `/contact?interest=erp` or `?interest=<slug>` sets the default option. Unknown values are ignored |
| Analytics events | Fire only if the privacy notice covers them (Strategy §7.4): form started, submitted, error (field name only, never values) |

### 10.8 Metadata and SEO

- `metadata` exported per page with the exact titles and descriptions from Copy §8. Home uses `title.absolute`. Other pages use the template `%s — Kenenét Consultancy` with the page segment only.
- `metadataBase` set once the domain is confirmed (E-07).
- `viewport`: `themeColor: '#FCFBF9'`, `width: 'device-width'`, `initialScale: 1`. User scaling is never disabled.
- Organization structured data (JSON-LD) with `name: "Kenenét Consultancy"`, and `alternateName` for the ASCII spelling only if the client approves (Copy §8 note). URL and logo once confirmed.
- `sitemap.ts` and `robots.ts` for the five pages. Privacy and 404 excluded.

### 10.9 Security headers (`next.config` `headers()`)

| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Strict-Transport-Security` | `max-age=63072000` |
| `X-Frame-Options` | `SAMEORIGIN` (the site has a form that submits personal data) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy-Report-Only` | Start with `default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'`, then tighten and enforce before launch |

Fonts are self-hosted by `next/font`, so no Google Fonts origins are needed in the CSP.

### 10.10 Performance budget

| Metric | Gate (launch) | Target |
|---|---|---|
| LCP (mobile, 4G) | ≤ 2.5 s | ≤ 1.5 s (resolves the repo's 1.5 s / 2.5 s conflict: 2.5 s is the pass/fail gate, 1.5 s is the aim) |
| CLS | ≤ 0.05 | 0 |
| INP | ≤ 200 ms | ≤ 100 ms |
| JS shipped per page (gzip) | ≤ 90 KB | ≤ 70 KB |
| Fonts | 2 variable files + italic ≤ 160 KB total, `latin` + `latin-ext` subsets only | |
| Lighthouse (mobile) | Performance ≥ 90, Accessibility 100, Best Practices ≥ 95, SEO 100 | |

No third-party scripts at launch other than an approved, privacy-respecting analytics tool (e.g. Vercel Web Analytics).

### 10.11 Accessibility acceptance (WCAG 2.1 AA)

- One `<h1>` per page. No skipped heading levels. Landmarks: `header`, `nav` (primary, jump menu, footer nav), `main#main`, `footer`.
- All colour pairings from §1.4 only. Orange never carries text on light surfaces.
- Full keyboard path through header, mobile menu (trap, `Esc`), accordions, jump menu, form, and footer.
- Form: visible labels, `aria-describedby` for helper and error, error summary on submit, `role="status"` / `role="alert"` for outcomes.
- Reduced motion honoured (§6.6). Content visible without JavaScript (§6.4).
- `lang="en"` on `<html>`. "Kenenét" is never split by spans that would break screen-reader pronunciation.
- Tested with VoiceOver (iOS Safari, macOS Safari) and NVDA (Windows Firefox or Chrome) before launch.

### 10.12 Build QA checklist

| # | Check |
|---|---|
| 1 | Every visible string matches *Website Copy v1.0* (diff the `content/` modules against the copy document) |
| 2 | No `[CLIENT CONFIRMATION` strings or rejected spellings in rendered HTML (automated build check) |
| 3 | Blocked sections absent, with no placeholders, skeletons or empty grids |
| 4 | Logo: supplied artwork only, no recolour, correct clear space, alt text "Kenenét Consultancy" |
| 5 | Orange appears at most once per viewport (except the sanctioned Home hero pair) at 360, 768, 1024 and 1440 px |
| 6 | "é" renders correctly in every font style used, at every size used |
| 7 | No horizontal scroll at 320 px |
| 8 | All content visible with JavaScript disabled and in print preview |
| 9 | Reduced-motion mode removes all movement |
| 10 | Form: each validation message, sending, success and failure state verified. Works without JavaScript |
| 11 | Performance budget and Lighthouse scores met on a production build |
| 12 | Security headers present on the deployed site |

---

## 11. Decisions Needing Client Approval

| ID | Decision | Recommended default |
|---|---|---|
| **DS-1** | Use a tagline-free crop of the supplied logo in the header and footer until a proper variant is supplied | Approve the crop, and request vector artwork with tagline-free, one-colour and reversed variants (E-03) |
| **DS-2** | Retire or keep the logo line "A FERTILE GROUND FOR GROWTH!", given the confirmed tagline "Transforming Workplaces." | Retire it from all web use. Keep the artwork untouched where the full lockup is shown |
| **DS-3** | Favicon from the orange figure mark | Approve |
| **DS-4** | Header CTA in purple solid, orange reserved for in-content primary actions | Approve |
| **DS-5** | Typeface pair Newsreader + Source Sans 3 | Approve, unless the client holds brand fonts |
| **DS-6** | Launch without photography (type-led design) | Approve. Add client-owned photography later without layout changes |
| **DS-7** | Hero on `paper` rather than a purple field (Strategy §4.1 suggested a purple field on mobile) | Approve. The logo cannot sit on purple, and the signature H1 needs the light field for the italic purple word |

---

*End of design system v1.0.*
