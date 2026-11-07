import React from "react";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { homeData } from "@/data/home";
import { serviceGroups } from "@/data/services";

/** H-4: all ten service names in four groups. Descriptions live on the Services page. */
export const ServicesOverview: React.FC = () => {
  const { services } = homeData;

  return (
    <section aria-labelledby="services-heading" className="w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <SectionLabel index="03">{services.label}</SectionLabel>
              <Heading as="h2" id="services-heading" variant="heading-xl">
                {services.heading}
              </Heading>
              <ArrowLink href={services.link.href}>{services.link.label}</ArrowLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
              {serviceGroups.map((group) => (
                <div key={group.slug} className="reveal space-y-4">
                  <h3 className="border-b border-line pb-3 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-600">
                    {group.name}
                  </h3>
                  <ul className="space-y-1">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services#${service.slug}`}
                          className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 font-serif text-[1.2rem] leading-snug text-ink transition-colors hover:bg-mist hover:text-purple-700"
                        >
                          {service.name}
                          <span
                            aria-hidden="true"
                            className="h-px w-4 flex-none bg-purple/30 transition-all duration-300 group-hover:w-7 group-hover:bg-purple"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
