import React from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { approachData } from "@/data/approach";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Kenenét Consultancy works with organizations to ensure structural changes take root and last.",
};

export default function ApproachPage() {
  const { opener, context, closing } = approachData;

  return (
    <div className="flex flex-col">
      {/* P-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {/* P-2 Context */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Methodology</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {context.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {context.body}
              </p>
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

