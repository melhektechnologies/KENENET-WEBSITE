import React from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading } from "@/components/ui/Heading";
import { homeData } from "@/data/home";

export const ErpBand: React.FC = () => {
  const { erpBand } = homeData;

  return (
    <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Empty left rail on desktop (Columns 1-4) or editorial header */}
          <div className="lg:col-span-4">
            <SectionLabel>{erpBand.label}</SectionLabel>
          </div>

          {/* Panel on right (Columns 5-12) */}
          <div className="reveal relative overflow-hidden rounded border border-line bg-mist p-8 shadow-lift sm:p-12 lg:col-span-8 space-y-6">
            <span
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple via-purple to-orange"
              aria-hidden="true"
            />
            <Heading as="h2" variant="heading-xl">
              {erpBand.heading}
            </Heading>
            <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
              {erpBand.body}
            </p>
            <div className="pt-2">
              <Link
                href={erpBand.link.href}
                className="inline-flex items-center gap-2 font-sans text-[16px] text-purple hover:text-purple-700 underline underline-offset-4 font-medium"
              >
                <span>{erpBand.link.label}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

