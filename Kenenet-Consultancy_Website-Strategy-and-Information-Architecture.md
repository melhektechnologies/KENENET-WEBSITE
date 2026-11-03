# Kenenét Consultancy — Website Strategy & Information Architecture

**Version:** 1.0 (Strategy). Content slots are gated on source verification
**Date:** 3 November 2026
**Builds on:** Company Intelligence & Content Validation Report v0.1
**Scope:** Exactly five primary pages. English only. Vercel hosting. Purple and orange identity.
**Not in this document:** website code, final copy (next stage)

---

## 0. Read First: How This Strategy Treats Unverified Content

At the time of writing, the repository's brochure, newer company profile, logo and founder photo are still **0 bytes** (verified again against commit `ddd68e2`). The strategy therefore does the following:

- **Structure, hierarchy, layout, navigation, CTAs and journeys** are fully defined. None of them depends on unread documents.
- **Every piece of company-specific content is a labelled slot**, filled only from verified sources. Nothing is invented.
- **The layouts flex.** Services, phases, values and leadership modules accept a variable number of items, so the brochure's real content fits without a redesign.

### Labels

| Label | Meaning |
|---|---|
| ✅ | Confirmed by the client (brief or decisions) |
| 🟦 | Proposed by this strategy. Needs client approval |
| ⬜ | Slot. Content required from a verified source |
| 🔀 | Conditional. Appears only if verified content exists. Layout collapses gracefully if not |
| ⛔ | Prohibited |

### Global content gates

| Gate | Requires | Unlocks |
|---|---|---|
| **G1** | Brochure and profile readable (E-01, E-02) | Services, About, Approach copy |
| **G2** | Logo and brand colours (E-03) | Visual design, final colour values |
| **G3** | ERP partner details (E-05) | Final ERP copy |
| **G4** | Contact details verified (E-08) | Contact page, footer |
| **G5** | Leadership information and consent (E-10) | Leadership modules |

---

## 1. Strategic Foundation

### 1.1 Positioning the site must express

| Element | Value | Status |
|---|---|---|
| Brand | Kenenét Consultancy | ✅ |
| Primary tagline | Transforming Workplaces. | ✅ |
| Supporting line | Organizational Excellence for Sustainable Change. | ✅ |
| Category | Ethiopian organizational and management consultancy | ✅ |
| ERP | Provided through a technology partner, with implementation support | ✅ |

### 1.2 Strategic idea 🟦

> **A calm, credible, specialist voice for organizations that are changing.**

The firm is selling judgement, structure and trust. It cannot rely on a client list, awards or numbers, because none have been supplied. The strategy therefore builds credibility from five sources that are all verifiable:

1. **Clarity.** A visitor understands the offer in five seconds.
2. **Structure.** A clearly presented, real methodology (Approach page).
3. **Transparency.** The ERP partnership is stated plainly, which signals honesty.
4. **People.** Named, real leadership, once verified.
5. **Accessibility.** Real contact channels and a low-friction enquiry.

### 1.3 Audience

| # | Audience | What they are really asking | Primary page(s) |
|---|---|---|---|
| 1 | Business owners and founders | "Can I trust this firm with how my company runs?" | Home → About → Contact |
| 2 | CEOs and executive management | "Is this firm credible and structured enough for strategic change?" | Home → Approach → About |
| 3 | HR directors and managers | "Can they help with our people, structure and culture issues?" | Services → Approach |
| 4 | Operations managers | "Will this improve how work actually gets done?" | Services → Approach |
| 5 | Organizations seeking restructuring | "Do they have a clear process for reorganizing?" | Approach → Services → Contact |
| 6 | Companies seeking ERP | "Who delivers ERP, and what does Kenenét actually do?" | Services (ERP block) → Contact |

### 1.4 Experience principles

| Principle | Rule |
|---|---|
| **Premium and restrained** | Fewer elements, larger type, more space. No decoration for its own sake |
| **Editorial** | Strong typographic hierarchy. Headlines carry the message. Text is written to be read |
| **Honest** | No claim without a source. Absence of proof is handled by design, not by invention |
| **Mobile-first** | Designed at about 360 px first, then enhanced. Assume mobile traffic and variable connectivity |
| **Conversion-led** | Every page ends in a clear next step. One primary action per view |
| **Accessible** | WCAG 2.1 AA minimum |

### 1.5 Visual direction

**Colour discipline** 🟦 (exact values pending the logo, G2)

| Role | Rule |
|---|---|
| Neutrals | Dominant. Warm off-white and white backgrounds, near-black text. Roughly 70% of any screen |
| Purple | Structural brand colour. Hero and footer fields, headings accents, rules, icons. Roughly 20–25% |
| Orange | **Reserved accent, 5% or less.** Primary CTA and at most one highlight per view. Never for body text, never for long underlines or large fills |
| Contrast | Test every pairing once exact values are known. Orange is likely to need dark text on it, or a deeper shade for text |

**Typography** 🟦

- Display: an editorial serif with presence at large sizes. Body and UI: a neutral humanist sans. Candidate pairs: *Newsreader* or *Source Serif 4* with *Inter* or *Source Sans 3*.
- All candidates must render **é** correctly. Check "Kenenét" in every weight used.
- Limit to two families and about four weights. Scale ratio generous. Body at 17–18 px minimum on mobile.
- Tagline and H1s set large, with tight but readable leading.

**Imagery** 🟦

- Authentic workplaces, people in conversation, meetings, documents, spaces. Real, client-supplied photography is preferred.
- ⛔ No stock photos presented as clients or staff. No generic "handshake", globe, or circuit-board imagery. No technology-infrastructure imagery.
- Where no imagery is available, use typographic and colour-field compositions. The design must look finished without photographs.

**Performance posture** 🟦: light pages, compressed images, system-font fallbacks, no autoplay video, minimal motion. Motion respects the reduced-motion preference.

---

## 2. Final Sitemap

### 2.1 Primary pages (exactly five)

```
Kenenét Consultancy
│
├── 1. Home ............... /
├── 2. About Us ........... /about
├── 3. Our Services ....... /services
├── 4. Our Approach ....... /approach
└── 5. Contact Us ......... /contact
```

### 2.2 On-page anchors (not separate pages)

| Page | Anchors |
|---|---|
| `/services` | One anchor per service category (⬜ names from the brochure), plus `#erp` |
| `/about` | `#leadership`, `#mission-vision`, `#values` |
| `/approach` | `#process` |
| `/contact` | `#consultation-form` |

### 2.3 Utility elements (not primary pages)

| Element | Treatment | Decision |
|---|---|---|
| Privacy notice | Short footer-linked notice. A contact form collects personal data, so a notice is needed. Not a primary page | E-14 🟦 |
| 404 page | Technical error page with a link home | 🟦 |
| Form success state | A state on `/contact`, not a page | 🟦 |

### 2.4 Removed from the earlier template

Solutions/Products · Blog / Insights · Blog posts · Service detail pages · Terms of Service as a primary route · Case studies · Testimonials page.

### 2.5 URL rules

Lowercase, hyphen-free single words as above. No accents in URLs. The domain is decided under E-07.

---

## 3. Global Systems

### 3.1 Recommended navigation structure

**Header (desktop)**

| Position | Item | Destination |
|---|---|---|
| Left | Logo (Kenenét Consultancy) | `/` (Home) |
| Centre/right | About Us | `/about` |
| | Our Services | `/services` |
| | Our Approach | `/approach` |
| Right | **[Request a Consultation]** button (primary CTA) | `/contact#consultation-form` |

**Why Home and Contact do not appear as text links:** the logo is the universal Home link, and the highlighted button is the Contact page. This leaves a clean four-element header and puts the conversion action in the most prominent place. Both remain labelled in the mobile menu and the footer, so all five pages are always reachable.

**Header behaviour:** sticky on scroll, compressing slightly. Current page marked visibly and programmatically. Keyboard-operable with visible focus. A "Skip to content" link is the first focusable element.

**Mobile (below about 900 px):** logo and a menu button. The menu opens a full-screen panel with: Home, About Us, Our Services, Our Approach, Contact Us, then the primary CTA button, then verified direct contact (tap-to-call and tap-to-email, if verified). Touch targets are at least 44 × 44 px. There is no sticky bottom bar, to keep the experience premium and unobstructed.

**Footer**

| Block | Content |
|---|---|
| Brand | Logo, tagline "Transforming Workplaces.", supporting line |
| Navigate | Home · About Us · Our Services · Our Approach · Contact Us |
| Contact | Verified email, phone, address only (G4) |
| Utility | Privacy notice (E-14) |
| Legal line | © [year] Kenenét Consultancy |
| Social | 🔀 Only verified profiles (E-16) |

**Breadcrumbs:** none. The site is flat and five pages deep.

**In-page navigation:** Services has a sticky jump menu (categories and ERP). Approach has a phase indicator. Other pages are linear.

### 3.2 Global page template

Every page follows: **Header → Page opener (H1 + one-sentence purpose) → Content sections → Closing CTA band → Footer.** Each page has exactly one H1. Section H2s are descriptive, not slogans, so the page can be scanned and understood by assistive technology.

### 3.3 Writing guardrails for the content stage

- English, with consistent spelling. The client's own wording uses *-ize* ("Organizational"), so use **-ize spellings** with British vocabulary ("consultancy"). Confirm in E-18.
- Plain, confident, human. Short paragraphs. Outcome-focused and organization-centred. Not technical or "engineering" language.
- ⛔ "Cutting-edge", "world-class", "leading", "trusted by hundreds", "end-to-end" unless a source supports them.
- ⛔ Invented statistics, years of experience, client counts, testimonials, awards, certifications, partner statuses.
- Always write **Kenenét Consultancy** with the accent. On second reference, "Kenenét".

---

## 4. Detailed Page Wireframe Specifications

**Notation.** Each section lists: purpose, content hierarchy (L1 = most prominent), layout (mobile first, then desktop), visuals and fallback. *Layout descriptions are low-fidelity: positions and relative emphasis only.*

---

### 4.1 PAGE 1: HOME `/`

| Item | Specification |
|---|---|
| **Business objective** | Communicate the value proposition within five seconds, establish credibility without fabricated proof, introduce the services, and move the visitor to a consultation request or the Services page |
| **Target visitor** | First-time visitors from all six audiences, often a decision-maker comparing firms, arriving from search, referral or a business card |
| **Main message** 🟦 | *Kenenét Consultancy, an Ethiopian organizational and management consultancy, helps organizations build the structures, practices and systems for sustainable change.* Anchored by the tagline "Transforming Workplaces." |
| **Conversion objective** | Primary: click **Request a Consultation**. Secondary: reach Services or Approach |

#### Section structure

**H-1 Hero**
- *Purpose:* instant value proposition and first CTA.
- *Hierarchy:* L1 H1 "Transforming Workplaces." ✅ → L2 supporting line "Organizational Excellence for Sustainable Change." ✅ → L3 one-sentence descriptor of what Kenenét does ⬜ (from brochure) → L4 CTAs.
- *CTAs:* Primary **Request a Consultation** (→ `/contact#consultation-form`). Secondary text-link **Explore Our Services** (→ `/services`).
- *Layout:* Mobile: text stack on a purple field, tall but not full-screen, so the next section's top peeks in. Desktop: asymmetrical editorial layout, text left across about 7 of 12 columns, with generous white space or a restrained image/typographic composition on the right.
- *Visual:* a large typographic composition, or one authentic workplace photograph (client-supplied). No stock-people collage.
- *Fallback:* type-only hero. Must look complete.

**H-2 Credibility strip** 🔀
- *Purpose:* establish trust early, using only verified facts.
- *Content:* 2–4 short fact items. Allowed: "Ethiopian organizational and management consultancy" ✅, "ERP solutions through a technology partner" ✅, plus any verified facts from the brochure or profile (year established, etc.) ⬜.
- *Layout:* one row on desktop, stacked on mobile. Small caps labels.
- *Fallback:* merge into H-3. Never show placeholders or fabricated figures.

**H-3 Who we are and what we do (positioning statement)**
- *Hierarchy:* L1 H2 (descriptive) → L2 a large editorial pull-statement of 2–3 sentences ⬜/🟦 → L3 link "About Kenenét" (→ `/about`).
- *Layout:* narrow measure (about 60–70 characters) with wide margins. Large serif type.

**H-4 Services overview**
- *Purpose:* introduce the main services and let visitors self-select.
- *Hierarchy:* L1 H2 "Our Services" → L2 one-line intro → L3 category cards → L4 "View all services".
- *Content:* one card per **service category** from the catalogue (⬜), each with a short descriptor (verbatim or condensed from the brochure) and an arrow link to its anchor on `/services`. Cards show categories, not every individual service.
- *Layout:* mobile: stacked cards. Desktop: 2- or 3-column grid. Layout supports 3–6 cards.
- *ERP:* appears here as a card or in H-5, never unqualified.

**H-5 ERP solutions strip**
- *Purpose:* speak directly to audience 6, with accurate positioning.
- *Content:* a short band: "ERP solutions" ✅ → "Delivered through our technology partner, with Kenenét Consultancy providing implementation support." 🟦 → link "How ERP works with Kenenét" (→ `/services#erp`).
- *Visual:* subtle contrasting band. No product screenshots. No partner logo without permission (E-05).

**H-6 Approach preview**
- *Purpose:* demonstrate structure, which reduces perceived risk.
- *Hierarchy:* L1 H2 "Our Approach" → L2 one-sentence summary ⬜ → L3 phase names in a compact numbered row (from the real methodology) ⬜ → L4 link "See how we work" (→ `/approach`).
- *Layout:* horizontal numbered steps on desktop, vertical list on mobile. Supports 3–6 phases.
- *Fallback:* if the methodology is unavailable at launch, replace with a text paragraph and link. Do not display invented phases.

**H-7 Leadership preview** 🔀
- *Content:* founder name, title, photo, one verified sentence or quote, link "Meet our leadership" (→ `/about#leadership`).
- *Fallback:* omit. About still carries leadership once available.

**H-8 Proof of work** 🔀
- *Content:* only real, permissioned testimonials, client names or case summaries (E-12).
- *Fallback:* **section does not exist at launch.** The page flow must read as complete without it.

**H-9 Closing CTA band**
- *Hierarchy:* L1 H2 inviting a conversation 🟦 → L2 one reassuring sentence 🟦 → L3 CTA.
- *CTAs:* Primary **Request a Consultation**. Secondary verified email or phone link 🔀.
- *Layout:* full-width purple band, orange primary button.

#### Home: content hierarchy summary
H1 tagline → positioning statement → services → ERP clarity → approach → people → proof 🔀 → CTA.

#### Home: internal links
`/services` (×3: hero, services, ERP), `/services#erp`, `/approach`, `/about`, `/about#leadership`, `/contact#consultation-form` (×3).

---

### 4.2 PAGE 2: ABOUT US `/about`

| Item | Specification |
|---|---|
| **Business objective** | Turn interest into confidence by presenting who Kenenét is, what it believes and who leads it |
| **Target visitor** | Executives, owners and HR directors vetting the firm. They want to see people, principles and seriousness |
| **Main message** 🟦 | *Kenenét Consultancy is an Ethiopian organizational and management consultancy committed to organizational excellence for sustainable change* ✅ (positioning). The remaining philosophy comes from verified material ⬜ |
| **Conversion objective** | Move to Approach or Contact. Success is a visitor who now trusts the people and principles |

#### Section structure

**A-1 Page opener**
- L1 H1 (working title 🟦 "About Kenenét Consultancy") → L2 one sentence of identity ✅/⬜.
- *Layout:* editorial opener with large type and a thin purple rule. No hero image required.

**A-2 Who we are (identity and background)**
- *Content:* company story and background ⬜ (E-11). Only verified facts: founding, purpose, location, focus.
- *Layout:* two-column editorial on desktop (heading left, long text right). Single column on mobile. Optional pull-quote 🔀.
- *Fallback:* shorten to an identity paragraph drawn from ✅ positioning.

**A-3 Our philosophy** 🔀
- *Content:* how Kenenét thinks about workplaces and change ⬜ (from the brochure or profile). One to three short statements.
- *Fallback:* merge into A-2.

**A-4 Mission and vision**
- *Content:* mission ⬜ and vision ⬜ (E-09), verbatim from the approved source.
- *Layout:* two large typographic blocks side by side (desktop), stacked (mobile). Labels "Mission" and "Vision" small, text large.
- *Rule:* if only one exists, show one. Never write a mission or vision for the client without approval.

**A-5 Values**
- *Content:* 3–6 values with a name and an optional one-line meaning ⬜.
- *Layout:* numbered list or grid. No icons needed. Typography carries it.
- *Fallback:* omit if no verified values exist. Never infer values from the tagline.

**A-6 Leadership** 🔀 (G5)
- *Content:* founder name, title, photograph, biography ⬜, optional quote ⬜. Only supplied facts. ⛔ No invented qualifications, years or affiliations.
- *Layout:* photo and text side by side on desktop, stacked on mobile. Multiple leaders: equal cards.
- *Fallback:* text-only profile, or omit the photo. If no leadership information is approved, the section is removed and the page remains valid.

**A-7 Technology partnership note** 🔀
- *Content:* two or three sentences explaining that ERP solutions are provided through a technology partner, if this is part of the company story (E-05). Link to `/services#erp`.

**A-8 Closing band**
- Primary CTA **Request a Consultation**. Secondary **See Our Approach** (→ `/approach`).

#### About: content hierarchy summary
Identity → belief (philosophy, mission, vision, values) → people → partnership transparency → CTA.

#### About: internal links
`/approach`, `/services#erp`, `/contact#consultation-form`, `/services`.

---

### 4.3 PAGE 3: OUR SERVICES `/services`

| Item | Specification |
|---|---|
| **Business objective** | Let each visitor identify their need quickly, understand every approved service, and request a consultation |
| **Target visitor** | HR directors, operations managers, organizations seeking restructuring, and ERP seekers. These are visitors with a specific problem |
| **Main message** 🟦 | *Kenenét offers a clear set of services for organizational transformation, organized so you can find what applies to your organization.* ERP is presented as a service delivered through a technology partner |
| **Conversion objective** | Click a service CTA or **Request a Consultation**. Secondary: view Approach |

#### Structure rules

- The catalogue is **the approved brochure catalogue only** ⬜. No service is added, removed or renamed without a client decision (B3 protocol from the validation report).
- Service categories come from the brochure's own groupings where they exist. Proposed groupings are labelled 🟦 and approved before use.
- The page is **modular**: category sections repeat identically, so a service or category can be added or removed later with no redesign.
- No individual service pages. Detail lives inside expandable panels.

#### Section structure

**S-1 Page opener**
- L1 H1 "Our Services" → L2 an intro of 1–2 sentences ⬜/🟦 → L3 category jump menu.

**S-2 Category jump menu**
- *Content:* links to each category plus **ERP Solutions**.
- *Layout:* sticky horizontal bar on desktop. On mobile, a compact row that scrolls horizontally, or a "Jump to…" select. Active category is highlighted.

**S-3 → S-n Category sections** (repeat per category) ⬜
- *Hierarchy:* L1 category H2 → L2 one- to two-sentence description (brochure wording) → L3 service list → L4 optional per-service enquiry link.
- *Service item:* service name (L3) with its brochure description. Short descriptions are always visible. Longer ones sit in an accordion ("Show details").
- *Layout:* desktop: category title and description on the left (about 4 columns), services on the right (about 8). Mobile: stacked, accordions.
- *Optional enquiry link* 🟦: "Enquire about this service" → `/contact#consultation-form` pre-selecting the interest dropdown. Included only if low-effort.
- *Rule:* verbatim meaning. ⛔ No invented deliverables, durations, outcomes or "best for" statements unless the brochure says so.

**S-ERP ERP Solutions** (`#erp`)
- *Purpose:* give audience 6 a direct, accurate, trustworthy answer.
- *Visual treatment:* clearly distinct block, with an unambiguous label "Delivered through our technology partner".
- *Content (confirmed facts only):*
  - What it is ⬜ (from the brochure).
  - Who does what, as two parallel columns: **Our technology partner** provides the ERP solution; **Kenenét Consultancy** provides implementation support ✅. Further detail ⬜ (E-05).
  - Partner name and logo 🔀 only with permission.
  - CTA: **Discuss ERP with us** (→ `/contact#consultation-form`, pre-selecting ERP).
- ⛔ "Our ERP", "Kenenét ERP", "certified/authorized partner" unless documented, any product screenshots or dashboards.
- *Placement:* after the organizational service categories, with a top-level jump link so it can be reached in one tap.

**S-last "Not sure where to start?"**
- Short invitation to describe the challenge, since many visitors may not know which category applies. CTA **Request a Consultation**. Secondary **See Our Approach**.

#### Services: content hierarchy summary
Page purpose → category map → categories (in brochure order) → ERP (distinct) → guided next step.

#### Services: internal links
Each category anchor, `#erp`, `/approach`, `/contact#consultation-form` (several), `/about` (optional).

---

### 4.4 PAGE 4: OUR APPROACH `/approach`

| Item | Specification |
|---|---|
| **Business objective** | Reduce perceived risk by showing that transformation is handled through a clear, thoughtful, structured process |
| **Target visitor** | CEOs, executives, HR directors and operations managers who are evaluating "how will you actually do this, and what will we experience?" |
| **Main message** 🟦 | *Organizational transformation at Kenenét follows a clear process. This is how we work with you.* The content is the **client's actual methodology** ⬜ |
| **Conversion objective** | Move to Contact after gaining confidence in the process |

#### Non-negotiable content rules

- The methodology comes from the client's documents or a client interview. **Not invented.**
- ⛔ No proprietary framework name, acronym or trademark symbol invented by us. ⛔ No "certified", "accredited" or "patented" language. ⛔ No fabricated phases, timelines or deliverables.
- If the client's methodology has a name, it may be used **exactly as the client uses it**, and described plainly, without claims of proprietary status or certification unless documented.
- Phase names and descriptions are the client's own wording, edited only for clarity with approval.

#### Methodology capture protocol (to run if the documents do not cover it)

A 45–60 minute client interview, with answers recorded and signed off:

1. In plain words, how does an engagement begin? What does the client experience first?
2. What are the distinct phases or stages, in order? What does each aim to achieve?
3. What activities occur in each phase (for example diagnosis, design, implementation, review)?
4. What does the client receive or see at the end of each phase?
5. How does the firm involve the client's leadership and staff?
6. How is change sustained after the engagement (links to "Sustainable Change")?
7. Where does ERP implementation support fit, if at all?
8. What does the client want visitors **not** to assume about the process?

#### Section structure

**P-1 Page opener**
- L1 H1 "Our Approach" → L2 a one- to two-sentence summary of the philosophy of working ⬜.

**P-2 Guiding principles** 🔀
- 3–5 short principles describing how Kenenét works with clients ⬜ (client's words).
- *Layout:* spacious numbered list in large type.

**P-3 The process** (`#process`)
- *Purpose:* the heart of the page.
- *Content per phase:* number, **name** ⬜, one- to two-sentence purpose ⬜, key activities ⬜, outcome or what the client receives ⬜.
- *Layout:* desktop: a vertical editorial timeline or a staged horizontal layout with large numerals, alternating text and white space. Mobile: a vertical sequence with a thin purple connecting line, one phase per screen section. Layout supports **3 to 6 phases**.
- *Visual:* typographic numerals and thin lines. No pictograms, no complex diagrams, no icons that suggest unverified activities.
- *Fallback:* if only a short description exists, present it as prose with a simple ordered list.

**P-4 What working with us looks like** 🔀
- Engagement model, client involvement and communication ⬜. Include only what the client states.

**P-5 How ERP implementation support fits** 🔀
- Two or three sentences, only if the client confirms (E-05, E-13). Link to `/services#erp`.

**P-6 Closing band**
- Primary CTA **Request a Consultation**. Secondary **Explore Our Services**.

#### Approach: content hierarchy summary
Promise → principles → process → client experience → ERP fit → CTA.

#### Approach: internal links
`/services`, `/services#erp`, `/contact#consultation-form`, `/about`.

---

### 4.5 PAGE 5: CONTACT US `/contact`

| Item | Specification |
|---|---|
| **Business objective** | Make requesting a consultation straightforward and low-friction, and capture a qualified enquiry |
| **Target visitor** | A visitor ready to act: an owner, executive, HR director or operations manager. Many arrive on mobile |
| **Main message** 🟦 | *Start a conversation about your organization.* Short, welcoming, specific |
| **Conversion objective** | **Primary conversion: a submitted consultation request.** Secondary: click-to-call or click-to-email (verified channels only) |

#### Section structure

**C-1 Page opener**
- L1 H1 "Contact Us" → L2 one sentence inviting a consultation request 🟦. Optional line on what happens next, **only** if the client confirms the process or response time (E-08).

**C-2 Consultation request form** (`#consultation-form`)
- *Position:* immediately below the opener. On mobile, the first interactive element.
- *Fields (🟦, short by design):*

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | Text | Yes | |
| Organization | Text | Yes | Qualifies the enquiry |
| Your role | Text | No | Helps tailor the response |
| Email | Email | Yes | |
| Phone | Phone | No | Include country code hint |
| Area of interest | Select | No | Options drawn from the **approved catalogue** categories, plus **ERP solutions** and **Not sure yet** |
| Message ("Tell us about your organization's needs") | Textarea | Yes | |
| Consent line linking to the privacy notice | Checkbox or statement | Yes (if required by E-14) | |

- Spam protection must be present and non-intrusive (honeypot or invisible challenge).
- *States:* default, focus, inline validation (specific, helpful messages), submitting, success, failure.
- *Success state:* confirmation message, a short sentence of what happens next (only if verified), and links to Services and Approach, so the page is never a dead end.
- *Failure state:* explain the problem and show the verified email address as a fallback.
- *Delivery:* the form sends to a client-nominated inbox (E-15). No CRM, no database, no dashboard.

**C-3 Direct contact channels**
- *Content:* only **verified** email, phone, address and hours ⬜ (G4). Email and phone are tap-to-act on mobile.
- ⛔ No WhatsApp, Telegram, LinkedIn, social links, chat widget or live chat unless the client supplies and verifies them.
- *Layout:* desktop: right column beside the form. Mobile: below the form.

**C-4 Location** 🔀
- Address text and an optional map only if a physical address is verified and the client wants it shown. A map must not be loaded if no address exists.

**C-5 Privacy reassurance**
- One short sentence near the form linking to the privacy notice 🟦.

#### Contact: content hierarchy summary
Invitation → form → direct channels → location 🔀 → privacy.

#### Contact: internal links
`/services`, `/approach` (success state and light links), footer links, privacy notice.

---

## 5. Content Hierarchy (Site-Wide)

### 5.1 Level definitions

| Level | Role | Typographic treatment |
|---|---|---|
| **L1** | The one idea of the page or section (H1 or H2) | Largest display size |
| **L2** | Qualifier or summary sentence | Large body or sub-heading |
| **L3** | Supporting content (cards, lists, descriptions) | Standard body |
| **L4** | Actions and navigation | Buttons and links |
| **L5** | Reference (captions, metadata, legal) | Small |

### 5.2 Information priority by page

| Page | 1st | 2nd | 3rd | 4th |
|---|---|---|---|---|
| Home | Value proposition | What we do | How we work | Act |
| About | Who we are | What we believe | Who leads | Act |
| Services | Find my need | Understand it | ERP clarity | Act |
| Approach | Our process | What to expect | Fit with ERP | Act |
| Contact | Act | Alternatives | Reassurance | — |

### 5.3 Heading structure rule
One H1 per page. H2 for each major section. H3 for cards and sub-items. No heading level is skipped.

### 5.4 Page metadata plan 🟦

| Page | Title pattern | Meta description |
|---|---|---|
| Home | Kenenét Consultancy — Transforming Workplaces. | One sentence from the approved positioning |
| About | About Us — Kenenét Consultancy | One sentence on identity and leadership |
| Services | Our Services — Kenenét Consultancy | One sentence on the service groups |
| Approach | Our Approach — Kenenét Consultancy | One sentence on the process |
| Contact | Contact Us — Kenenét Consultancy | One sentence inviting a consultation request |

Social preview images use the approved logo and tagline only.

---

## 6. User Journeys

### 6.1 Primary journeys

**J1: Owner or founder (trust-seeking)**
Arrives on Home → reads hero and positioning → scans services → opens About for people → reads Approach for method → **Contact form**.
*Success signal:* contact form submitted after at least two pages viewed.

**J2: CEO or executive (credibility and rigor)**
Home → **Approach** (judges method quality) → About (leadership) → Contact.
*Design implication:* Approach must be strong and specific. Leadership must be real.

**J3: HR director or operations manager (specific problem)**
Search or referral → Services (category jump) → reads relevant service → Approach for process → Contact (pre-selected interest).
*Design implication:* jump menu and clear service descriptions are critical. May land directly on `/services`.

**J4: Restructuring organization**
Home → Approach (process) → Services (relevant category) → Contact.

**J5: ERP seeker**
Home ERP strip, or search → `/services#erp` → reads who does what → Contact (ERP pre-selected).
*Design implication:* the ERP block must make the partnership and Kenenét's role instantly clear, and the page must work as a landing page.

**J6: Returning visitor**
Direct to Contact, or via email or phone from the footer or header.

### 6.2 Journey map

| Stage | Question | Page | Mechanism |
|---|---|---|---|
| Awareness | What is this? | Home | H1, positioning |
| Interest | Do they cover my need? | Services | Categories, jump menu |
| Evaluation | Are they credible? How do they work? | About, Approach | People, principles, process |
| Decision | Can I talk to them easily? | Contact | Short form, verified channels |
| Action | I will send a request | Contact | Submit |

### 6.3 Drop-off safeguards

- Every page ends with a CTA band.
- The form success state links onward, so there is no dead end.
- Failure state offers the email fallback.
- Services and Approach both offer a next step to Contact at the end and mid-page.

---

## 7. CTA Strategy

### 7.1 Principles

1. **One primary conversion:** *request a consultation.* Everything points to it.
2. **One primary button per viewport.** Orange is reserved for it.
3. **Low-commitment, outcome-led wording.** The visitor asks for a conversation, not a purchase.
4. **Secondary actions are quieter** (text links or outlined buttons in purple).
5. ⛔ No "Get a Quote", "Buy", "Book Now", "Free Audit" or "Download" offers. They imply processes, prices or assets that are not confirmed. ⛔ No newsletter signup, no downloadable brochure (not in scope).

### 7.2 CTA labels 🟦

| Type | Label |
|---|---|
| Primary | **Request a Consultation** |
| Secondary: services | Explore Our Services |
| Secondary: process | See How We Work |
| Secondary: about | Learn About Kenenét |
| ERP | Discuss ERP With Us |
| Direct | Email Us · Call Us (verified only) |

### 7.3 CTA map

| Page | Primary | Secondary |
|---|---|---|
| Home | Request a Consultation (hero, closing band) | Explore Our Services · See How We Work · Learn About Kenenét · Discuss ERP (ERP strip) |
| About | Request a Consultation (closing band) | See How We Work · Explore Our Services |
| Services | Request a Consultation (closing band, ERP block as "Discuss ERP With Us") | See How We Work · per-service enquiry link 🔀 |
| Approach | Request a Consultation (closing band) | Explore Our Services |
| Contact | **Submit** consultation request | Email Us · Call Us |
| Header (all pages) | Request a Consultation | — |

### 7.4 Measurement plan 🟦

Define the events now so that the build supports them. The analytics tool and consent approach are chosen at the technical stage (E-14), and no tracking is added that the privacy notice does not cover.

| Event | Meaning |
|---|---|
| Form started | A first field is focused |
| **Form submitted** | **Primary conversion** |
| Form error | Which field failed |
| Email or phone link clicked | Secondary conversion |
| CTA clicked (by label and location) | Which CTAs work |
| ERP section viewed | Interest in ERP |
| Service category jump used | Which needs are explored |
| Approach process section reached | Depth of engagement |

No targets are set. No benchmarks are claimed, because none exist for this site yet.

---

## 8. Content and Asset Requirements

### 8.1 Content requirements by page

| Page | Content item | Source | Status | Gate |
|---|---|---|---|---|
| **All** | Brand spelling, tagline, supporting line | Client | ✅ | — |
| **Home** | Descriptor sentence of what Kenenét does | Brochure | ⬜ | G1 |
| | Positioning statement | Brochure / profile | ⬜ | G1 |
| | Service category names and short descriptors | Brochure | ⬜ | G1 |
| | ERP strip copy | Decision 4, partner info | ✅ / ⬜ | G3 |
| | Approach summary and phase names | Methodology | ⬜ | G1 |
| | Credibility facts | Verified documents | ⬜ 🔀 | G1 |
| | Leadership teaser | Founder info | ⬜ 🔀 | G5 |
| **About** | Company background | Brochure / profile | ⬜ | G1 |
| | Philosophy | Brochure / profile | ⬜ 🔀 | G1 |
| | Mission, vision, values | Approved source | ⬜ | G1 |
| | Founder biography, title, photo, quote | Founder, with consent | ⬜ | G5 |
| **Services** | Complete catalogue (verbatim) with grouping | Brochure | ⬜ | G1 |
| | Per-service client status (active, retired, new) | Client | ⬜ | G1 |
| | ERP: description, partner name, scope of implementation support, permission to name partner | Client | ⬜ | G3 |
| **Approach** | Methodology: principles, phases, activities, outcomes | Documents or interview | ⬜ | G1 |
| | Engagement model and client involvement | Client | ⬜ 🔀 | G1 |
| **Contact** | Email, phone, address, hours | Client | ⬜ | G4 |
| | Form recipient inbox | Client | ⬜ | G4 |
| | Expected response time, if stated | Client | ⬜ 🔀 | G4 |
| | Privacy notice text | Client / legal review | ⬜ | E-14 |
| **Global** | Domain and ASCII email form (accent issue) | Client | ⬜ | E-07 |
| | Social profiles | Client | ⬜ 🔀 | E-16 |

### 8.2 Copy budget 🟦 (guideline for the content stage)

| Page | Approximate length |
|---|---|
| Home | 350–500 words |
| About | 400–650 words, depending on verified material |
| Services | Driven by the brochure. Short descriptions, 30–60 words per service |
| Approach | 400–700 words |
| Contact | 100–150 words, plus form microcopy |

### 8.3 Microcopy to be written in the content stage
Navigation labels, button labels, form labels, helper text, validation messages, success and failure messages, 404 text, image alt text, and meta titles and descriptions.

### 8.4 Brand and visual assets

| Asset | Requirement | Status |
|---|---|---|
| Logo | Vector (SVG, PDF or AI) plus PNG. Full-colour, one-colour, reversed, and a compact mark for the favicon | ⬜ (E-03) |
| Exact brand colours | HEX or Pantone values for purple and orange | ⬜ |
| Brand typography | Any existing fonts or guidelines | ⬜ |
| Founder photograph | High resolution, approved, with written consent for web use | ⬜ (E-10) |
| Leadership or team photos | Same conditions | ⬜ 🔀 |
| Workplace and context photography | Client-owned, or licensed with a correct licence. Ethiopian workplace context where possible | ⬜ 🔀 |
| Partner logo | Only with written permission | ⬜ 🔀 (E-05) |
| Favicon and social-sharing image | Derived from the logo | 🟦 |
| Icons | A minimal set only if needed | 🟦 |

### 8.5 Imagery rules
No unverifiable people presented as clients. No misleading captions. Every image has meaningful alt text or is marked decorative. Compressed and sized for mobile.

### 8.6 Accessibility requirements 🟦

- WCAG 2.1 AA contrast. Orange and purple pairings tested.
- Full keyboard operation. Visible focus states. Skip link.
- Form labels visible and programmatically linked. Errors identified in text, not colour alone.
- Reduced-motion support. Text resizable to 200% without loss.
- Language declared as English. The name "Kenenét" must be read correctly. Consider a pronunciation aid only if the client provides one (do not invent).

---

## 9. Scope Guardrails

**Excluded, and must be declined or escalated for a change decision:**
Blog or insights · careers or jobs portal · client portal or login · ERP dashboard or demo · CRM or lead database · additional primary pages · service detail pages · case study pages · newsletter · downloadable resources · live chat · multilingual switcher · e-commerce or payments · booking calendar · search function.

**Inside scope** 🟦: contact form with email delivery, privacy notice, 404 page, metadata, basic privacy-respecting analytics events.

**Change rule:** any new feature requires a written scope decision before design starts.

---

## 10. Open Decisions Needing Client Approval

| ID | Decision | Recommended default |
|---|---|---|
| D-1 | Nav model: logo as Home and CTA button as Contact | Approve |
| D-2 | Privacy notice as a footer utility, not a primary page (E-14) | Approve |
| D-3 | ERP as its own distinct section on Services | Approve |
| D-4 | Per-service "Enquire" links pre-selecting the form | Approve if cheap, else skip |
| D-5 | Spelling convention (-ize, British vocabulary) | Approve |
| D-6 | Primary CTA label "Request a Consultation" | Approve |
| D-7 | Launch without proof-of-work section | Approve (no verified proof exists) |
| D-8 | Methodology source: documents or interview | Interview if the documents are silent |

---

## 11. What Happens Next

**Next stage: complete website content.** Final copy can be written **only for items that are verified.** At this moment that is limited to the brand name, tagline, supporting line, ERP's partnership model, and the page structure. To complete the full copy without invention, the following are needed:

1. The brochure and newer profile, readable (G1).
2. Logo files and colours (G2).
3. ERP partner details (G3).
4. Contact details (G4).
5. Founder information and photo consent (G5).
6. Methodology (documents or interview, D-8).

If these can only be supplied as text, they can be pasted into the conversation, and the full copy can be produced from them.

*End of strategy document.*
