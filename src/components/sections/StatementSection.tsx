import React from "react";
import { Statement } from "@/components/ui/Statement";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { homeData } from "@/data/home";

export const StatementSection: React.FC = () => {
  const { statement } = homeData;

  return (
    <section aria-labelledby="statement-heading" className="w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel as="h2" id="statement-heading" index="01">
                {statement.heading}
              </SectionLabel>
            </div>
          </div>

          <div className="reveal space-y-8 lg:col-span-8">
            <Statement lead={statement.statementLead} rest={statement.statementRest} />
            <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">
                {statement.body}
              </p>
              <ArrowLink href={statement.link.href} className="flex-none">
                {statement.link.label}
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
