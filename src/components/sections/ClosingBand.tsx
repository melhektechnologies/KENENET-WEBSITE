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
    <section className="w-full bg-purple-900 text-paper py-20 lg:py-28">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
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

