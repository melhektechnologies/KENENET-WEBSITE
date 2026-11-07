import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { serviceGroups, servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Management consulting, professional organizing, corporate systems, HR and workforce services, company formation, project and event management, and business planning from Kenenét Consultancy in Addis Ababa.",
};

export default function ServicesPage() {
  const { opener, umbrella, engagementTypes, closing } = servicesData;

  return (
    <div className="flex flex-col">
      <PageOpener title={opener.title} intro={opener.intro}>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[16px] text-ink">
          {umbrella.text}
          <ArrowLink href={umbrella.link.href}>{umbrella.link.label}</ArrowLink>
        </p>
      </PageOpener>

      <nav aria-label="Service groups" className="sticky top-[72px] z-20 w-full border-b border-line bg-paper/90 backdrop-blur-xl">
        <ul className="mx-auto flex max-w-[1336px] gap-1 overflow-x-auto px-5 py-2 sm:px-8 lg:px-12">
          {serviceGroups.map((g) => (
            <li key={g.slug} className="flex-none">
              <a
                href={`#${g.slug}`}
                className="inline-flex h-10 items-center rounded-full px-4 font-sans text-[14px] font-medium text-ink-600 transition-colors hover:bg-mist hover:text-purple-700"
              >
                {g.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {serviceGroups.map((group, gi) => (
        <section
          key={group.slug}
          id={group.slug}
          aria-labelledby={`${group.slug}-heading`}
          className="w-full scroll-mt-32 border-b border-line bg-paper py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="space-y-4 lg:sticky lg:top-40">
                  <SectionLabel index={String(gi + 1).padStart(2, "0")}>Service group</SectionLabel>
                  <Heading as="h2" id={`${group.slug}-heading`} variant="heading-xl">
                    {group.name}
                  </Heading>
                </div>
              </div>
              <ul className="divide-y divide-line border-y border-line lg:col-span-8">
                {group.services.map((service) => (
                  <li key={service.slug} id={service.slug} className="reveal scroll-mt-36 py-8">
                    <article className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-8">
                      <div className="space-y-1 md:col-span-5">
                        <h3 className="font-serif text-[1.5rem] leading-snug text-ink">{service.name}</h3>
                        {service.definingLine && (
                          <p className="font-sans text-[15px] font-semibold text-purple-700">{service.definingLine}</p>
                        )}
                      </div>
                      <div className="space-y-4 md:col-span-7">
                        {service.description && (
                          <p className="font-sans text-[16px] leading-relaxed text-ink-600 sm:text-[17px]">{service.description}</p>
                        )}
                        <Link
                          href={`/contact?interest=${service.slug}#consultation-form`}
                          className="inline-flex min-h-11 items-center font-sans text-[15px] font-semibold text-purple-700 underline underline-offset-4 hover:text-purple"
                        >
                          Ask about {service.name}
                        </Link>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="engagements-heading" className="w-full bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="reveal grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Heading as="h2" id="engagements-heading" variant="heading-md">
                {engagementTypes.heading}
              </Heading>
            </div>
            <p className="max-w-[62ch] font-sans text-[17px] leading-relaxed text-ink-600 lg:col-span-8">{engagementTypes.body}</p>
          </div>
        </div>
      </section>

      <ClosingBand heading={closing.heading} body={closing.body} />
    </div>
  );
}
