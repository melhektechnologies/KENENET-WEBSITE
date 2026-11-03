# Kenenét Consultancy — Official Website

> **"Transforming Workplaces."**  
> *Organizational Excellence for Sustainable Change.*

Official web platform for **Kenenét Consultancy**, an Ethiopian organizational and management consultancy.

---

## 1. Technical Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**:
  - Display: `Newsreader` (Editorial Serif via `next/font/google`)
  - Body & UI: `Source Sans 3` (Humanist Sans via `next/font/google`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel

---

## 2. Brand Architecture & Colors

Sampled directly from the official logo artwork (`kenenet_consultancy_logo_transparent.png`):

| Token | Hex | Role |
| :--- | :--- | :--- |
| `purple` | `#7F3293` | Brand Purple. Structural elements, navigation, focus rings |
| `orange` | `#F9A21B` | Brand Orange. Single primary action highlight per viewport |
| `ink` | `#1C1720` | Headings, primary text |
| `paper` | `#FCFBF9` | Warm off-white default background |
| `mist` | `#F5F2F7` | Alternate surface background |
| `purple-900` | `#2B1236` | Full-bleed closing CTA band |

---

## 3. Directory Structure

```text
kenenet-website/
├── public/
│   ├── images/
│   ├── logo/
│   │   └── kenenet_consultancy_logo_transparent.png
│   └── favicon/
│
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # About Us
│   │   ├── services/page.tsx # Our Services & ERP
│   │   ├── approach/page.tsx # Our Approach
│   │   ├── contact/page.tsx  # Contact & Consultation Form
│   │   ├── layout.tsx        # Global fonts, metadata & shell
│   │   └── globals.css       # Design tokens & base styles
│   │
│   ├── components/
│   │   ├── layout/           # SiteHeader, MobileMenu, SiteFooter, SkipLink
│   │   ├── sections/         # HomeHero, CredibilityStrip, StatementSection, ErpBand, ClosingBand, PageOpener
│   │   ├── ui/               # Button, Heading, Statement, SectionLabel, BrandName
│   │   └── forms/            # ConsultationForm
│   │
│   ├── data/                 # Typed copy layers (site, home, about, services, approach, contact)
│   └── lib/                  # Utilities (cn)
│
├── package.json
└── tsconfig.json
```

---

## 4. Getting Started

### Prerequisites
- Node.js >= 18.17 (Node.js 20.x LTS recommended)
- npm >= 9.x

### Installation
```bash
# Navigate to the project directory
cd 03-DEVELOPMENT/kenenet-website

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

