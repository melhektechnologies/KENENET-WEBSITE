export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Platform name as displayed, e.g. "LinkedIn". */
  platform: string;
  /** Verified, active profile URL. */
  href: string;
}

export const contactDetails = {
  addressLines: [
    "Abenezer building, 5th floor",
    "Kebena, Queen Elizabeth Street, opposite Belair",
    "Addis Ababa, Ethiopia",
  ],
  phoneDisplay: "+251 95 662 5562",
  phoneHref: "tel:+251956625562",
  email: "kenenetconsultancy@gmail.com",
  get emailHref() {
    return `mailto:${this.email}`;
  },
  get mapsHref() {
    const query = "Abenezer building, 5th floor, Kebena, Queen Elizabeth Street, opposite Belair, Addis Ababa, Ethiopia";
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  },
} as const;

export const siteConfig = {
  brandName: "Kenenét Consultancy",
  /** Unaccented alternate, used only in structured data and search metadata. */
  alternateName: "Kenenet Consultancy",
  tagline: "Transforming Workplaces.",
  supportingLine: "Organizational Excellence for Sustainable Change.",
  descriptor: "A privately owned management consulting and organizing business in Addis Ababa.",
  eyebrow: "Management consultancy · Addis Ababa",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Kenenét", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Approach", href: "/approach" },
    { label: "Contact Us", href: "/contact" },
  ] satisfies NavItem[],
  headerCta: { label: "Contact Kenenét", href: "/contact" },
  /**
   * Company channels. Add an entry only for an account that is verified and
   * active; the footer renders nothing while this list is empty.
   */
  socialLinks: [] as SocialLink[],
  /** Registered legal name is unconfirmed, so the brand name is used without a suffix. */
  legalName: "Kenenét Consultancy",
};

export const closingCta = { label: "Contact Kenenét", href: "/contact" } as const;
