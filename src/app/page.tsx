import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Draft } from "@/components/ui/Draft";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { approachPreview, closing } = homeData;

  return (
    <div className="flex flex-col">
      {/* H-1 Hero + H-2 Credibility */}
      <HomeHero />

      {/* H-3 Statement — proposed positioning is not yet client-approved */}
      <Draft label="Draft — homepage positioning pending client approval" className="mx-5 my-8 sm:mx-8 lg:mx-12">
        <StatementSection />
      </Draft>

      {/* H-4 Services Overview + H-5 ERP */}
      <ServicesOverview />

      {/* H-6 Approach Preview — hidden in production until the methodology is verified */}
      <Draft label="Draft — approach preview (pending verified methodology)" className="mx-5 my-8 sm:mx-8 lg:mx-12">
        <section aria-labelledby="approach-preview-heading" className="w-full bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <SectionLabel index="03">Approach</SectionLabel>
              </div>
              <div className="space-y-6 lg:col-span-8">
                <Heading as="h2" id="approach-preview-heading" variant="heading-xl">
                  {approachPreview.heading}
                </Heading>
                <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
                  {approachPreview.body}
                </p>
                <ArrowLink href={approachPreview.link.href}>{approachPreview.link.label}</ArrowLink>
              </div>
            </div>
          </div>
        </section>
      </Draft>

      {/* H-9 Closing Band */}
      <ClosingBand heading={closing.heading} body={closing.body} primaryCta={closing.primaryCta} />
    </div>
  );
}
