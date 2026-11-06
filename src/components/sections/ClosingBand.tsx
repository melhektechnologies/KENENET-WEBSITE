import React from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export interface ClosingBandProps {
  heading: string;
  body: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const ClosingBand: React.FC<ClosingBandProps> = ({
  heading,
  body,
  primaryCta = {
    label: "Request a Consultation",
    href: "/contact#consultation-form",
  },
  secondaryCta,
}) => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-purple-900 py-20 text-paper lg:py-28">
      {/* Restrained ambient light — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-purple/45 blur-3xl" />
        <div className="absolute -bottom-52 -left-24 h-[26rem] w-[26rem] rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/25 to-transparent" />
      </div>
      <div className="reveal max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2rem,1.67rem+1.5vw,3.25rem)] text-paper leading-tight font-normal">
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-[18px] text-on-dark-muted leading-relaxed">
              {body}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  variant="secondary-dark"
                  size="lg"
                  href={secondaryCta.href}
                  icon={false}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

