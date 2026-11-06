import React from "react";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { homeData } from "@/data/home";
import { stages } from "@/data/approach";

/** H-3: the five stages on one rail. Each stage links to its full description. */
export const StagePreview: React.FC = () => {
  const { approach } = homeData;

  return (
    <section aria-labelledby="stages-heading" className="w-full border-y border-line bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-5">
            <SectionLabel index="02">{approach.label}</SectionLabel>
            <Heading as="h2" id="stages-heading" variant="heading-xl">
              {approach.heading}
            </Heading>
          </div>
          <ArrowLink href={approach.link.href} className="flex-none">
            {approach.link.label}
          </ArrowLink>
        </div>

        <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <li key={stage.number} className="reveal relative">
              <Link
                href={`/approach#stage-${i + 1}`}
                className="group flex h-full flex-col gap-4 border-t border-purple/25 py-6 transition-colors hover:border-purple sm:pr-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full border border-purple bg-mist transition-colors group-hover:bg-purple"
                />
                <span className="tabular font-serif text-[2.75rem] leading-none text-purple" aria-hidden="true">
                  {stage.number}
                </span>
                <span className="font-serif text-[1.2rem] leading-snug text-ink underline-offset-4 group-hover:underline">
                  <span className="sr-only">Stage {i + 1}: </span>
                  {stage.name}
                </span>
                <span className="font-sans text-[15px] leading-relaxed text-ink-600">{stage.summary}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
