import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { contactDetails, siteConfig } from "@/data/site";

const headingClass = "font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-600";
const linkClass = "text-ink transition-colors hover:text-purple-700 underline-offset-4 hover:underline";

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();
  const { socialLinks } = siteConfig;

  return (
    <footer className="relative mt-auto w-full border-t border-line bg-paper">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple via-purple/60 to-orange" />

      <div className="mx-auto max-w-[1336px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-5">
            <BrandLogo width={156} />
            <div className="space-y-1">
              <p className="font-serif text-2xl text-ink">{siteConfig.tagline}</p>
              <p className="font-sans text-[15px] text-ink-600">{siteConfig.supportingLine}</p>
            </div>
            <address className="max-w-xs font-sans text-[15px] not-italic leading-relaxed text-ink-600">
              {contactDetails.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <nav aria-labelledby="footer-pages" className="space-y-4 lg:col-span-3">
            <h2 id="footer-pages" className={headingClass}>
              Pages
            </h2>
            <ul className="space-y-3 font-sans text-[15px]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 lg:col-span-4">
            <h2 className={headingClass}>Contact</h2>
            <ul className="space-y-3 font-sans text-[15px]">
              <li>
                <a href={contactDetails.phoneHref} className={linkClass}>
                  {contactDetails.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contactDetails.emailHref} className={`${linkClass} break-all`}>
                  {contactDetails.email}
                </a>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <div className="space-y-3 pt-4">
                <h2 className={headingClass}>Follow</h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[15px]">
                  {socialLinks.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {s.platform}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-sans text-[14px] text-ink-600 sm:flex-row sm:items-center">
          <p>
            {"\u00A9"} {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <Link href="/contact#privacy" className={linkClass}>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};
