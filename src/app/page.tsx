import React from "react";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { StatementSection } from "@/components/sections/StatementSection";
import { ErpBand } from "@/components/sections/ErpBand";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { servicesIntro, approachPreview, closing } = homeData;

  return (
    <div className="flex flex-col">
      {/* H-1 Hero */}
      <HomeHero />

      {/* H-2 Credibility Strip */}
      <CredibilityStrip />

      {/* H-3 Statement */}
      <StatementSection />

      {/* H-4 Services Overview */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">{servicesIntro.heading}</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {servicesIntro.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {servicesIntro.intro}
              </p>
              <div>
                <Link
                  href={servicesIntro.link.href}
                  className="inline-flex items-center gap-2 font-sans text-[16px] text-purple hover:text-purple-700 underline underline-offset-4 font-medium"
                >
                  <span>{servicesIntro.link.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H-5 ERP Band */}
      <ErpBand />

      {/* H-6 Approach Preview */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">{approachPreview.heading}</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {approachPreview.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {approachPreview.body}
              </p>
              <div>
                <Link
                  href={approachPreview.link.href}
                  className="inline-flex items-center gap-2 font-sans text-[16px] text-purple hover:text-purple-700 underline underline-offset-4 font-medium"
                >
                  <span>{approachPreview.link.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H-9 Closing Band */}
      <ClosingBand
        heading={closing.heading}
        body={closing.body}
        primaryCta={closing.primaryCta}
      />
    </div>
  );
}

