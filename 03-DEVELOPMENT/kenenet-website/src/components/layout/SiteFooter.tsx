import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-paper border-t border-line mt-auto">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Block */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-14 w-44">
              <Image
                src="/logo/kenenet_consultancy_logo_transparent.png"
                alt="Kenenét Consultancy"
                fill
                className="object-contain object-left"
                sizes="180px"
              />
            </div>
            <p className="font-serif text-2xl text-ink font-normal pt-2">
              {siteConfig.tagline}
            </p>
            <p className="font-sans text-[15px] text-ink-600 max-w-sm leading-relaxed">
              {siteConfig.supportingLine}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-sans text-[14px] font-semibold tracking-[0.12em] uppercase text-ink-600">
              Navigate
            </h2>
            <ul className="space-y-3 font-sans text-[15px]">
              {siteConfig.footer.navigate.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink hover:text-purple transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-sans text-[14px] font-semibold tracking-[0.12em] uppercase text-ink-600">
              Enquiries
            </h2>
            <p className="font-sans text-[15px] text-ink-600 leading-relaxed">
              {siteConfig.footer.contactNote}
            </p>
            <div className="pt-2">
              <Link
                href="/contact#consultation-form"
                className="inline-flex font-sans text-[15px] text-purple hover:text-purple-700 underline underline-offset-4"
              >
                Open Consultation Form &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[14px] text-ink-600">
          <p>{siteConfig.footer.legalLine}</p>
          <p>{siteConfig.category}</p>
        </div>
      </div>
    </footer>
  );
};

