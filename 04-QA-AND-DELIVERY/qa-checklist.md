# Kenenét Consultancy — QA & Pre-Launch Checklist

**Based on:** Design System v1.0 §10.12, Content Validation Report v0.1, Website Strategy v1.0

---

## 1. Build & Content Integrity QA
- [ ] **1. Verbatim Copy**: Every visible string matches *Website Copy v1.0* character for character.
- [ ] **2. No Gated Leakage**: Zero `[CLIENT CONFIRMATION` strings or rejected spellings ("Kenent", "Kenenet" without accent) in rendered HTML.
- [ ] **3. Clean Gated Layouts**: Blocked sections (e.g. unverified brochure services, unverified founder profile) remain completely absent with no empty cards, skeletons, or placeholder text.
- [ ] **4. Logo Integrity**: Only the supplied original logo artwork is used; no recoloring, minimum clear space respected, accessible alt text "Kenenét Consultancy".
- [ ] **5. Strict Orange Discipline**: Orange appears at most ONCE per viewport as a call-to-action or signal (with the sole exception of the Home hero headline full stop + primary CTA button). Never used as body text or large background fills.
- [ ] **6. Accent Rendering**: "é" in "Kenenét" renders accurately across all loaded typefaces (Newsreader and Source Sans 3) at all responsive sizes.

---

## 2. Visual & Responsive Design (WCAG 2.1 AA)
- [ ] **7. Mobile Viewport (320px - 360px)**: Zero horizontal scroll, touch targets minimum 44x44px, readable 17px minimum body size.
- [ ] **8. Tablet Viewport (768px - 1023px)**: Clean wrapping, tablet navigation behavior verified.
- [ ] **9. Desktop Viewport (1024px - 1440px+)**: Sticky header compression (80px to 64px), 12-column layout max 1240px content width.
- [ ] **10. No-JS & Print**: All content fully readable with JavaScript disabled and in print preview.
- [ ] **11. Reduced Motion**: `@media (prefers-reduced-motion: reduce)` disables hero entrance transitions, smooth scrolling, and accordion animations.
- [ ] **12. Focus Rings**: Visible 2px solid ring with 2px offset (`#7F3293` on light surfaces, `#F9A21B` on dark surfaces).

---

## 3. Performance & Delivery
- [ ] **Lighthouse Mobile**: Performance >= 90, Accessibility 100, Best Practices >= 95, SEO 100.
- [ ] **Core Web Vitals**: LCP <= 2.5s (Target <= 1.5s), CLS <= 0.05, INP <= 200ms.
- [ ] **Security Headers**: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security`.
