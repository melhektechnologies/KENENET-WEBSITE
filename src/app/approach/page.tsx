import React from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { approachData, stages } from "@/data/approach";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Kenenét Consultancy's five-stage approach to workplace transformation: problem identification, workflow assessment, policy alignment, system implementation and follow-up review.",
};

export default function ApproachPage() {
  const { opener, reach, role, aim, closing } = approachData;

  return (
    <div className="flex flex-col">
      <PageOpener title={opener.title} intro={opener.intro}>
        <p className="max-w-2xl font-sans text-[16px] leading-relaxed text-ink">{reach}</p>
      </PageOpener>

      <section aria-labelledby="stages-heading" className="w-full bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-28">
                <SectionLabel index="01">Method</SectionLabel>
                <Heading as="h2" id="stages-heading" variant="heading-xl">
                  Five stages of workplace transformation
                </Heading>
              </div>
            </div>

            <ol className="relative lg:col-span-8">
              <span aria-hidden="true" className="approach-progress-line absolute bottom-6 left-[1.6rem] top-6 w-px origin-top bg-gradient-to-b from-orange via-purple/70 to-purple/20 sm:left-[2.1rem]" />
              {stages.map((stage, i) => (
                <li key={stage.number} id={`stage-${i + 1}`} className="reveal relative scroll-mt-28 pb-12 last:pb-0">
                  <div className="flex gap-6 sm:gap-8">
                    <span
                      aria-hidden="true"
                      className="tabular relative z-10 flex h-[3.25rem] w-[3.25rem] flex-none items-center justify-center rounded-full border border-purple/30 bg-paper font-serif text-[1.35rem] text-purple sm:h-[4.25rem] sm:w-[4.25rem] sm:text-[1.75rem]"
                    >
                      {stage.number}
                    </span>
                    <div className="space-y-3 pt-2 sm:pt-4">
                      <h3 className="font-serif text-[clamp(1.4rem,1.3rem+0.5vw,1.85rem)] leading-snug text-ink">
                        <span className="sr-only">Stage {i + 1}: </span>
                        {stage.name}
                      </h3>
                      <p className="max-w-[58ch] font-sans text-[17px] leading-relaxed text-ink-600">{stage.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-label="Our role and aim" className="w-full border-t border-line bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-[1336px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="reveal space-y-5">
            <SectionLabel index="02">Role</SectionLabel>
            <Heading as="h2" variant="heading-md">
              {role.heading}
            </Heading>
            <p className="max-w-[58ch] font-sans text-[17px] leading-relaxed text-ink-600">{role.body}</p>
          </div>
          <div className="reveal space-y-5">
            <SectionLabel index="03">Outcome</SectionLabel>
            <Heading as="h2" variant="heading-md">
              {aim.heading}
            </Heading>
            <p className="max-w-[58ch] font-sans text-[17px] leading-relaxed text-ink-600">{aim.body}</p>
          </div>
        </div>
      </section>

      <ClosingBand heading={closing.heading} body={closing.body} />
    </div>
  );
}
