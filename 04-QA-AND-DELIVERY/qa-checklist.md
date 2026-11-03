# Kenenet Website QA & Pre-Launch Checklist

This document outlines the mandatory quality assurance checks required prior to public launch and client handover.

---

## 1. Visual & Responsive Design
- [ ] **Mobile Viewport (< 640px)**
  - [ ] Hamburger / mobile navigation opens, closes, and navigates correctly
  - [ ] No horizontal scrollbars or overflow issues
  - [ ] Font sizes remain readable without manual zooming
  - [ ] Touch targets (buttons, links) are at least 44x44px
- [ ] **Tablet Viewport (768px - 1024px)**
  - [ ] Multi-column grids wrap appropriately
  - [ ] Hero layout and banner graphics scale properly
- [ ] **Desktop & Ultra-wide (> 1200px)**
  - [ ] Max-width constraints hold (no over-stretching across 1440p / 4k monitors)
  - [ ] Layout alignment is centered and balanced

---

## 2. Cross-Browser & Device Compatibility
- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Apple Safari (iOS & macOS)
- [ ] Microsoft Edge (latest)

---

## 3. Performance & Core Web Vitals
- [ ] **Lighthouse Performance Score >= 90**
- [ ] **LCP (Largest Contentful Paint)** < 2.5s
- [ ] **FID / INP (Interaction to Next Paint)** < 200ms
- [ ] **CLS (Cumulative Layout Shift)** < 0.1
- [ ] All images optimized (WebP / AVIF format with explicit `width` and `height` attributes)
- [ ] CSS and JavaScript bundles minified and code-split

---

## 4. SEO & Meta Configuration
- [ ] Dynamic or unique `<title>` and `<meta name="description">` on every page
- [ ] Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) configured for social sharing
- [ ] Twitter Card meta tags present
- [ ] Canonical URL tags (`<link rel="canonical">`) pointing to production domain
- [ ] `robots.txt` configured correctly (not blocking production indexing)
- [ ] Dynamic or static `sitemap.xml` generated and valid
- [ ] Favicon, Apple Touch Icon, and Web Manifest present and verified

---

## 5. Forms, Interactivity & Security
- [ ] Contact form validates required fields (email format, message length)
- [ ] Submitting form displays clear loading, success, and error states
- [ ] Spam protection active (reCAPTCHA, Turnstile, or honeypot field)
- [ ] Form notification emails successfully reach Kenenet operational inbox
- [ ] SSL / HTTPS enforced globally with HSTS
- [ ] External links include `rel="noopener noreferrer"` attributes
- [ ] 404 Custom Error page implemented with a return-to-home button

---

## 6. Accessibility (WCAG 2.1 AA)
- [ ] Color contrast ratio is at least 4.5:1 for normal text and 3:1 for large text
- [ ] All image assets have meaningful `alt` attributes
- [ ] Site is navigable via Keyboard (`Tab`, `Enter`, `Escape`) with visible focus rings
- [ ] Semantic HTML headings hierarchy (`<h1>` through `<h6>`) is strictly followed

