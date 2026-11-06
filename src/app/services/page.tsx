import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContentSlot } from "@/components/ui/Draft";
import { showDrafts } from "@/lib/content-status";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "What Kenenét Consultancy offers, including ERP solutions delivered through a technology partner with implementation support.",
};

export default function ServicesPage() {
  const { opener, erp, notSure, closing } = servicesData;

  // The jump bar only earns its place once the catalogue exists (3+ targets).
  const jumpItems = [
    ...(showDrafts() ? [{ href: "#catalogue", label: "Services" }] : []),
    { href: "#erp", label: "ERP Solutions" },
    { href: "#getting-started", label: "Getting Started" },
  ];

  return (
    <div className="flex flex-col">
      <PageOpener title={opener.title} intro={opener.intro} />

      {jumpItems.length >= 3 && (
        <nav
          aria-label="Jump to a section"
          className="sticky top-16 z-20 w-full border-b border-line bg-paper/95 supports-[backdrop-filter]:bg-paper/75 backdrop-blur-xl md:top-20"
        >
          <div className="mx-auto flex h-14 max-w-[1336px] items-center gap-8 overflow-x-auto px-5 font-sans text-[15px] font-medium sm:px-8 lg:px-12">
            {jumpItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap py-1 text-ink transition-colors hover:text-purple"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Service catalogue — populated from the approved brochure (G1) */}
      {showDrafts() && (
        <section id="catalogue" className="scroll-mt-36 w-full border-b border-line bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <SectionLabel as="h2">Services</SectionLabel>
              </div>
              <div className="lg:col-span-8">
                <ContentSlot
                  label="Complete service catalogue, grouped by category, verbatim from the brochure"
                  gate="E-01 · E-06 · G1"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ERP — confirmed facts only */}
      <section id="erp" className="scroll-mt-36 w-full border-b border-line bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">{erp.label}</SectionLabel>
            </div>
            <div className="reveal relative space-y-6 overflow-hidden rounded border border-line bg-mist p-8 shadow-lift sm:p-12 lg:col-span-8">
              <span
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple via-purple to-orange"
                aria-hidden="true"
              />
              <Heading as="h2" variant="heading-xl">
                {erp.heading}
              </Heading>
              <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
                {erp.whatErpIs}
              </p>
              <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-ink sm:text-[18px]">
                {erp.model}
              </p>

              <div className="grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
                <div className="space-y-3 md:pr-8">
                  <span className="block font-sans text-[13px] font-semibold uppercase tracking-wider text-purple">
                    {erp.partner.label}
                  </span>
                  <Heading as="h3" variant="heading-md">
                    {erp.partner.heading}
                  </Heading>
                  <p className="font-sans text-[16px] leading-relaxed text-ink-600">{erp.partner.body}</p>
                </div>
                <div className="space-y-3 md:pl-8">
                  <span className="block font-sans text-[13px] font-semibold uppercase tracking-wider text-purple">
                    {erp.kenenet.label}
                  </span>
                  <Heading as="h3" variant="heading-md">
                    {erp.kenenet.heading}
                  </Heading>
                  <p className="font-sans text-[16px] leading-relaxed text-ink-600">{erp.kenenet.body}</p>
                </div>
              </div>

              <ContentSlot
                label="Partner name, ERP product, exact scope of implementation support, naming permission"
                gate="E-05 · G3"
              />

              <div className="pt-2">
                <Button variant="primary" size="md" href={erp.cta.href}>
                  {erp.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="getting-started" className="scroll-mt-36 w-full border-b border-line bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Getting Started</SectionLabel>
            </div>
            <div className="space-y-6 lg:col-span-8">
              <Heading as="h2" variant="heading-xl">
                {notSure.heading}
              </Heading>
              <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
                {notSure.body}
              </p>
              <div className="pt-2">
                <Button variant="secondary" size="md" href={notSure.cta.href}>
                  {notSure.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand heading={closing.heading} body={closing.body} primaryCta={closing.primaryCta} />
    </div>
  );
}
