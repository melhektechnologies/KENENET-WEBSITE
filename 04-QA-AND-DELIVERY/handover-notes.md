# Kenenet Website Handover & Operations Guide

## 1. Project & Repository Summary
- **Client / Brand**: Kenenet
- **Repository Directory**: `03-DEVELOPMENT/kenenet-website`
- **Git Repository**: *(Add Git Remote URL here)*
- **Primary Contacts**:
  - Technical Lead:
  - Account Manager / Project Manager:

---

## 2. Technical Stack
- **Frontend Framework**: *(e.g., Next.js / Astro / Vite + React / Static HTML)*
- **Styling**: Tailwind CSS / Modular CSS
- **Icons**: Lucide Icons / Heroicons
- **Hosting & Infrastructure**: *(e.g., Vercel, Netlify, Cloudflare Pages, AWS)*
- **DNS / Domain Provider**: *(e.g., Cloudflare, Namecheap, GoDaddy)*

---

## 3. Local Development Setup

### Prerequisites
- Node.js (v18.x or v20.x LTS recommended)
- Package Manager: `npm` / `pnpm` / `yarn`

### Installation & Run Steps
```bash
# 1. Navigate to development project folder
cd 03-DEVELOPMENT/kenenet-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser:
# http://localhost:3000 (or http://localhost:5173 depending on tooling)
```

---

## 4. Production Build & Deployment

### Generating a Production Build
```bash
npm run build
```

### Deployment Instructions
1. Push production code to the `main` or `production` branch on Git.
2. Automated CI/CD pipeline triggers preview / production deployment.
3. Verify production URL and check SSL certificate validation.

---

## 5. Environment Variables & Credentials
Ensure the following environment variables are securely stored in your deployment environment:

| Variable | Description | Example / Note |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of the production website | `https://kenenet.com` |
| `CONTACT_FORM_ENDPOINT` | API endpoint / webhook receiving contact form data | Formspree / Resend / Webhook |
| `ANALYTICS_ID` | Google Analytics / Plausible ID | `G-XXXXXXXXXX` |

> [!NOTE]
> Never commit real production API keys or credentials directly to version control. Use `.env.local` for local development and add it to `.gitignore`.

---

## 6. Maintenance & Backups
- **Dependencies**: Run `npm audit` and dependency updates quarterly.
- **Domain & SSL**: Enable auto-renewal on domain names and verify Let's Encrypt / Cloudflare SSL auto-renewal.
- **Backups**: Ensure Git repository is backed up on a remote Git provider (GitHub / GitLab / Bitbucket).

