import React from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Organizational and management consultancy built around how organizations actually operate, with ERP solutions delivered through a technology partner.",
};

export default function ServicesPage() {
  const { opener, erp, notSure, closing } = servicesData;

  return (
    <div className="flex flex-col">
      {/* S-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {/* S-ERP Section */}
      <section id="erp" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-24">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-2">
              <SectionLabel as="h2">{erp.label}</SectionLabel>
            </div>
            <div className="lg:col-span-8 bg-mist border border-line rounded p-8 sm:p-12 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {erp.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink leading-relaxed max-w-2xl">
                {erp.whatErpIs}
              </p>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {erp.implementationSupport}
              </p>
              <div className="pt-2">
                <Button variant="primary" size="md" href={erp.cta.href}>
                  {erp.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S-NotSure Section */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Getting Started</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {notSure.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
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

      {/* Closing Band */}
      <ClosingBand
        heading={closing.heading}
        body={closing.body}
        primaryCta={closing.primaryCta}
      />
    </div>
  );
}

