import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-line bg-paper">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple via-purple/60 to-orange" />

      <div className="mx-auto max-w-[1336px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-5">
            <span className="relative block h-14 w-44">
              <Image
                src="/logo/kenenet-logo-720.png"
                alt="Kenenét Consultancy"
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </span>
            <p className="pt-2 font-serif text-2xl font-normal text-ink">{siteConfig.tagline}</p>
            <p className="max-w-sm font-sans text-[15px] leading-relaxed text-ink-600">{siteConfig.supportingLine}</p>
          </div>

          <nav aria-labelledby="footer-navigate" className="space-y-4 lg:col-span-3">
            <h2 id="footer-navigate" className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-600">
              Navigate
            </h2>
            <ul className="space-y-3 font-sans text-[15px]">
              {siteConfig.footer.navigate.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink transition-colors hover:text-purple">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 lg:col-span-4">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-600">Enquiries</h2>
            <p className="font-sans text-[15px] leading-relaxed text-ink-600">{siteConfig.footer.contactNote}</p>
            <Link
              href="/contact#consultation-form"
              className="group mt-2 flex items-center justify-between gap-4 rounded-xl border border-line bg-mist px-5 py-4 font-sans text-[15px] font-semibold text-purple-700 transition-[border-color,background-color,box-shadow] duration-300 hover:border-purple/40 hover:bg-purple-100 hover:shadow-lift"
            >
              Open Consultation Form
              <ArrowUpRight
                className="h-5 w-5 stroke-[1.75] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-sans text-[14px] text-ink-600 sm:flex-row">
          <p>{siteConfig.footer.legalLine}</p>
          <p>{siteConfig.category}</p>
        </div>
      </div>
    </footer>
  );
};
