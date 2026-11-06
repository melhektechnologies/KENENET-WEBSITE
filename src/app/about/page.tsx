import React from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Draft, ContentSlot } from "@/components/ui/Draft";
import { showDrafts } from "@/lib/content-status";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Kenenét Consultancy, an Ethiopian organizational and management consultancy committed to organizational excellence for sustainable change.",
};

export default function AboutPage() {
  const { opener, whoWeAre, erpNote, closing } = aboutData;

  return (
    <div className="flex flex-col">
      {/* A-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {/* A-2 Who we are */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="01">About Kenenét</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {whoWeAre.heading}
              </Heading>
              {whoWeAre.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl"
                >
                  {p}
                </p>
              ))}
              <Draft>
                {whoWeAre.draftParagraphs.map((p, idx) => (
                  <p key={idx} className="font-sans text-[17px] text-ink-600 leading-relaxed max-w-2xl">
                    {p}
                  </p>
                ))}
              </Draft>
              <ContentSlot label="Company background: founding, location, focus, origin" gate="E-11 · G1" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, vision, values, leadership — verified content only (hidden in production until supplied) */}
      {showDrafts() && (
      <section className="w-full bg-paper py-12 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12 space-y-4">
          <ContentSlot label="Mission and vision, verbatim from the approved source" gate="E-09 · G1" />
          <ContentSlot label="Core values" gate="E-09 · G1" />
          <ContentSlot label="Leadership: founder name, title, biography, photo with consent" gate="E-10 · G5" />
        </div>
      </section>
      )}

      {/* Technology & Organizational Change */}
      <section className="w-full bg-mist py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="02">Technology</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {erpNote.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {erpNote.body}
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

