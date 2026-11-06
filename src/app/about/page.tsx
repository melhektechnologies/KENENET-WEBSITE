import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { aboutData, founder, values } from "@/data/about";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kenenét Consultancy is a privately owned management consulting firm in Addis Ababa, working with industrial, commercial and governmental organizations on structure, operations and performance.",
};

export default function AboutPage() {
  const { opener, whatWeDo, objective, philosophy, values: valuesCopy, founderHeading, location, closing } = aboutData;

  return (
    <div className="flex flex-col">
      <PageOpener title={opener.title} intro={opener.intro} />

      <section aria-labelledby="what-we-do-heading" className="w-full bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="01">Practice</SectionLabel>
            </div>
            <div className="reveal space-y-6 lg:col-span-8">
              <Heading as="h2" id="what-we-do-heading" variant="heading-xl">
                {whatWeDo.heading}
              </Heading>
              {whatWeDo.paragraphs.map((p) => (
                <p key={p} className="max-w-[62ch] font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="objective-heading" className="w-full border-y border-line bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal space-y-5">
              <SectionLabel index="02">Objective</SectionLabel>
              <Heading as="h2" id="objective-heading" variant="heading-md">
                {objective.heading}
              </Heading>
              <p className="max-w-[58ch] font-sans text-[17px] leading-relaxed text-ink-600">{objective.body}</p>
            </div>
            <div className="reveal space-y-5">
              <SectionLabel index="03">Philosophy</SectionLabel>
              <Heading as="h2" variant="heading-md">
                {philosophy.heading}
              </Heading>
              <p className="max-w-[40ch] border-l-[3px] border-orange pl-5 font-serif text-[clamp(1.35rem,1.2rem+0.6vw,1.75rem)] leading-snug text-ink">
                {philosophy.lead}
              </p>
              <p className="max-w-[58ch] font-sans text-[17px] leading-relaxed text-ink-600">{philosophy.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="w-full bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="reveal max-w-2xl space-y-5">
            <SectionLabel index="04">Values</SectionLabel>
            <Heading as="h2" id="values-heading" variant="heading-xl">
              {valuesCopy.heading}
            </Heading>
            <p className="font-sans text-[17px] leading-relaxed text-ink-600">{valuesCopy.lead}</p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {values.map((v) => (
              <div key={v.name} className="reveal space-y-3 border-t border-ink/80 pt-5">
                <dt className="font-serif text-[1.35rem] leading-snug text-ink">{v.name}</dt>
                <dd className="font-sans text-[15px] leading-relaxed text-ink-600">{v.line}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="founder-heading" className="w-full border-t border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-4">
              <SectionLabel index="05">Leadership</SectionLabel>
              {founder.portrait && (
                <Image
                  src={founder.portrait.src}
                  alt={founder.portrait.alt}
                  width={480}
                  height={600}
                  className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                />
              )}
            </div>
            <div className="reveal space-y-8 lg:col-span-8">
              <div className="space-y-3">
                <h2 id="founder-heading" className="font-sans text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-600">
                  {founderHeading}
                </h2>
                <p className="font-serif text-[clamp(2rem,1.7rem+1.5vw,3rem)] leading-tight text-ink">{founder.name}</p>
                <p className="font-sans text-[15px] font-semibold uppercase tracking-[0.12em] text-purple-700">{founder.title}</p>
              </div>
              <p className="max-w-[62ch] font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">{founder.bio}</p>
              <dl className="grid max-w-2xl grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
                {founder.facts.map((f) => (
                  <div key={f.term} className="space-y-1">
                    <dt className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-600">{f.term}</dt>
                    <dd className="font-sans text-[16px] leading-relaxed text-ink">{f.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="location-heading" className="w-full border-t border-line bg-mist py-16 md:py-20">
        <div className="mx-auto flex max-w-[1336px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div className="space-y-4">
            <h2 id="location-heading" className="font-serif text-[clamp(1.5rem,1.35rem+0.7vw,2rem)] text-ink">
              {location.heading}
            </h2>
            <address className="flex items-start gap-3 font-sans text-[17px] not-italic leading-relaxed text-ink-600">
              <MapPin className="mt-1 h-5 w-5 flex-none text-purple" aria-hidden="true" />
              <span>
                {contactDetails.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>
          <ArrowLink href={location.link.href}>{location.link.label}</ArrowLink>
        </div>
      </section>

      <ClosingBand heading={closing.heading} body={closing.body} />
    </div>
  );
}
