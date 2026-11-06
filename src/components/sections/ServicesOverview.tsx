import React from "react";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { homeData } from "@/data/home";

/** H-4 Services overview with the H-5 ERP band nested as its featured offering. */
export const ServicesOverview: React.FC = () => {
  const { servicesIntro, erpBand } = homeData;

  return (
    <section aria-labelledby="services-heading" className="relative isolate w-full overflow-hidden bg-mist py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/25 to-transparent" />

      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="reveal space-y-6 lg:col-span-5">
            <SectionLabel index="02">Services</SectionLabel>
            <Heading as="h2" id="services-heading" variant="heading-xl">
              {servicesIntro.heading}
            </Heading>
            <p className="max-w-md font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
              {servicesIntro.intro}
            </p>
            <div className="pt-2">
              <ArrowLink href={servicesIntro.link.href}>{servicesIntro.link.label}</ArrowLink>
            </div>
          </div>

          <article
            aria-labelledby="erp-heading"
            className="reveal relative isolate overflow-hidden rounded-2xl bg-purple-900 p-8 text-paper shadow-panel sm:p-12 lg:col-span-7"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid-dark" />
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-purple/60 blur-3xl" />
              <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
              <Image
                src="/brand/kenenet-mark.png"
                alt=""
                width={512}
                height={512}
                className="absolute -bottom-20 -right-16 w-80 opacity-[0.12]"
              />
            </div>

            <SectionLabel tone="dark">{erpBand.label}</SectionLabel>
            <h3
              id="erp-heading"
              className="mt-6 max-w-lg font-serif text-[clamp(1.9rem,1.6rem+1.3vw,2.85rem)] font-normal leading-[1.1] tracking-[-0.015em] text-paper [text-wrap:balance]"
            >
              {erpBand.heading}
            </h3>

            <div className="glass-dark mt-8 rounded-xl p-6 sm:p-7">
              <p className="font-sans text-[16px] leading-relaxed text-on-dark-muted sm:text-[17px]">{erpBand.body}</p>
            </div>

            <div className="mt-8">
              <ArrowLink href={erpBand.link.href} tone="dark">
                {erpBand.link.label}
              </ArrowLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
