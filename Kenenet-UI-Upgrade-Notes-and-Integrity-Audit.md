# Kenenét Consultancy — UI Upgrade Notes & Integrity Audit

Applies with: `git apply kenenet-ui-upgrade.patch` (against `main` @ `3c27230`).
Verified: `tsc --noEmit` clean; production build compiles and prerenders all 5 routes (fonts stubbed in the sandbox only, because it cannot reach Google Fonts). **Not visually browser-tested** — review on a Vercel preview.

## 1. What changed (7 files)

| File | Change |
|---|---|
| `tailwind.config.ts` | Colours moved to `rgb(var(--rgb-*) / <alpha-value>)` so opacity modifiers work. New purple-tinted elevation tokens: `shadow-cta`, `-cta-hover`, `-brand`, `-brand-hover`, `-panel`, `-lift` |
| `globals.css` | RGB channel variables; `.bg-hero-field` (layered purple/orange light); `.glass-panel` with fallbacks for no-`backdrop-filter` and `prefers-reduced-transparency` |
| `ui/Button.tsx` | Lift + tinted glow on hover, `ease-emphasis`, two-tone focus ring visible on light and dark bands, motion gated by `motion-safe`. **Bug fix:** `onClick` was dropped on link-buttons |
| `sections/HomeHero.tsx` | Recomposed: verified category line, headline, offset frosted action panel. Unverified claims removed |
| `layout/SiteHeader.tsx` | Translucent blurred header on scroll |
| `sections/ClosingBand.tsx` | Ambient glow and hairline; content unchanged |
| `sections/ErpBand.tsx` | Elevated panel with accent hairline; content unchanged |

## 2. Defects fixed in passing
1. **Opacity classes generated no CSS** (`bg-paper/95`, `border-paper/40`, `bg-purple-100/80`, `border-purple/20`…). The Services jump bar was fully transparent and the dark-band secondary button had no border. Fixed at the token level.
2. **Mobile menu CTA** did not close the menu (`onClick` not forwarded on `<Link>`).
3. **Focus ring** was purple-on-purple on `ClosingBand`.

## 3. Deliberately NOT implemented from the brief (and why)
| Requested | Decision |
|---|---|
| Micro-testimonials, "verified" badges, live status indicators, security markers | **Declined.** No testimonials, clients or credentials exist. Project rule: never invent. |
| Dark glassmorphism, neon-style glows, `shadow-black/40` | **Adapted.** Kept the light editorial system; glass and glow are restrained and purple-tinted. |
| Display fonts (Syne, Plus Jakarta) | **Kept Newsreader + Source Sans 3.** Already installed, supports "é", matches the strategy. |
| Skeletons, spinners, empty states | **Already exist** (`Skeleton`, `EmptyState`, `Button loading`, `loading.tsx`). |

## 3b. Removed from the hero (unverified commitments)
"Organizational & Management Advisory" (invented label) → replaced by the confirmed category line. "Strict Confidentiality" and "Prompt Direct Response" → removed.

## 4. BLOCKING issues found in the existing build (not fixed — need a decision)
| # | Issue | Location | Severity |
|---|---|---|---|
| 1 | **Form fakes submission.** `setTimeout` → "success" + random `KEN-######` reference. Nothing is sent. Enquiries are lost while visitors are told they were received. The honeypot also returns "success". | `ConsultationForm.tsx` | 🔴 Critical |
| 2 | **Invented methodology**: four named phases, activities and deliverables ("Diagnostic Baseline & Practical Alignment Roadmap"…). Violates "use the client's actual methodology". | `approach/page.tsx` | 🔴 Critical |
| 3 | **No service catalogue** on Services. Page is ERP-only. Contains "certified enterprise software", "verified technology partner", "ongoing technical support", and a division of responsibilities nobody has confirmed. | `services/page.tsx` | 🔴 Critical |
| 4 | **Invented commitments**: "response within 1–2 business days", "advisory privilege", "A senior consultant will reach out", "Full Confidentiality". | `contact/page.tsx`, `data/contact.ts` | 🔴 Critical |
| 5 | Invented form category "Organizational & change management"; ERP scope text ("change management, workflow alignment, governance") not confirmed | `data/contact.ts`, `data/services.ts`, `data/about.ts` | 🟠 High |
| 6 | Placeholder domain `kenenet.com` in JSON-LD (unverified) | `layout.tsx` | 🟠 High |
| 7 | `framer-motion` ^14.9.1 is installed but unused | `package.json` | 🟢 Low |
| 8 | Mobile menu `top-16` overlaps the 80 px header before scroll | `MobileMenu.tsx` | 🟢 Low |
| 9 | Source documents (brochure, newer profile, founder photo, `logo-original.png`) are still 0 bytes | `/01-SOURCE-MATERIALS` | 🔴 Blocks G1 |
