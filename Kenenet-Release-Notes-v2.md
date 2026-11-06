# Kenenét Consultancy — Release Notes v2 (cumulative)

Apply to `main` @ `3c27230`:  `git apply kenenet-world-class.patch`  (supersedes the earlier UI patch; verified to apply cleanly to a fresh clone).

## How it was verified
| Check | Result |
|---|---|
| `tsc --noEmit` | Clean |
| Production build (13 routes, fonts stubbed — sandbox cannot reach Google Fonts) | Compiles |
| Production HTML scanned for 19 unverified strings (fake stats, "certified", invented phases, fake ref IDs…) | **0 found** |
| Preview build | Drafts visible and labelled; `robots.txt` = `Disallow: /` |
| Form API: valid, invalid, bad enum, honeypot, bot-speed, foreign origin, GET, bad JSON, rate-limit | All correct codes |
| Delivery to mock provider incl. newline header-injection attempt | Delivered; injection neutralised |
| **Not done** | Visual check in a real browser; live email delivery (needs your Resend key) |

## 1. Integrity fixes (the blockers from the audit)
| Issue | Fix |
|---|---|
| Form faked success and invented `KEN-######` IDs | Real `POST /api/consultation`: validation, honeypot, time-trap, same-origin check, rate limit, plain-text email with `reply_to`. **Never reports success unless delivered.** Unconfigured → honest failure message |
| Invented 4-phase methodology | Moved behind `<Draft>`; hidden in production |
| ERP/Services copy with "certified", "verified partner", "ongoing support", FAQ | Rewritten to the two confirmed facts only; FAQ removed |
| Invented commitments (1–2 days, advisory privilege, senior consultant, confidentiality) | Removed; replaced with neutral "Helpful to include" guidance |
| Invented form category; false "confirmation email" line; "never share with third parties" | Removed / softened |
| Hard-coded `kenenet.com` in JSON-LD, robots, sitemap | Env-driven (`NEXT_PUBLIC_SITE_URL` → Vercel URL); omitted if unknown |

## 2. The verification gate (new)
`<Draft>` and `<ContentSlot>` wrap anything unverified. **Production hides them; previews show them with a dashed "Draft / Awaiting verified content (E-xx)" marker.** The client can review the full intended structure on a preview URL while the public site can never carry an unverified claim. Override: `SHOW_DRAFT_CONTENT=true` (not recommended).

## 3. Advanced layer
- Opacity-modifier bug fixed at the token level (translucent header/jump bar now actually work)
- Premium hero, tinted elevation system, two-tone focus rings, lift/glow micro-interactions
- Scroll-driven reveals: CSS-only, zero JS, no hidden-until-JS flash, disabled for reduced-motion
- Favicon + Apple icon extracted from the real logo mark (was a 460 KB PNG)
- Generated Open Graph / social image (brand colours, "é" intact)
- Canonical URLs, OG + Twitter metadata, preview-deployment indexing blocked
- Security headers (nosniff, frame deny, referrer, permissions, COOP); `X-Powered-By` removed

## 4. YOU must do (Vercel → Settings → Environment Variables)
`RESEND_API_KEY`, `CONSULTATION_TO_EMAIL`, `CONSULTATION_FROM_EMAIL` (sender domain verified in Resend). See `.env.example`. **Until set, the form will show an error.** Provider is a proposal; swapping it means editing one `fetch` call.

## 5. What the live site shows today (deliberately)
Home, About, Services, Contact carry only verified facts. **Approach is thin** (opener + closing band) and **Services has no catalogue** because no verified methodology or catalogue exists. This is by design. Everything missing appears on previews as a labelled slot with its gate code.

## 6. Still blocked on the client
| Item | Gate |
|---|---|
| Brochure, newer profile, founder photo, `logo-original.png` are still **0 bytes** | G1 / G5 |
| ERP partner name and exact scope of implementation support | E-05 |
| Methodology (documents or interview) | E-13 |
| Email / phone / address; form recipient inbox; sender domain | E-08, E-15 |
| Domain and ASCII email form (accent can't be used) | E-07 |
| Privacy notice text and legal review | E-14 |
| **Logo artwork carries a different tagline — "A FERTILE GROUND FOR GROWTH!"** — vs the confirmed "Transforming Workplaces." Decide: keep both, or issue a logo version without it | new |
| Home positioning copy (statement lines) is 🟦 proposed, pending approval | — |

## 7. Known minor items (not changed)
`framer-motion` installed but unused · duplicate strategy/logo files at repo root · mobile menu `top-16` vs 80 px header · rate-limit is per warm instance (add Upstash/Vercel KV if abuse appears).
