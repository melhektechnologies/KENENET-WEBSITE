export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  supportingLine: string;
  category: string;
  nav: NavItem[];
  headerCta: {
    label: string;
    href: string;
  };
  footer: {
    navigate: NavItem[];
    legalLine: string;
    contactNote: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Kenenét Consultancy",
  tagline: "Transforming Workplaces.",
  supportingLine: "Organizational Excellence for Sustainable Change.",
  category: "Ethiopian organizational and management consultancy",
  nav: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Approach", href: "/approach" },
  ],
  headerCta: {
    label: "Request a Consultation",
    href: "/contact#consultation-form",
  },
  footer: {
    navigate: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Our Approach", href: "/approach" },
      { label: "Contact Us", href: "/contact" },
    ],
    legalLine: "© 2026 Kenenét Consultancy.",
    contactNote: "Reach out via our consultation form to discuss how Kenenét can support your organization.",
  },
};

