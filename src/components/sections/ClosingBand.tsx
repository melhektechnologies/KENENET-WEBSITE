import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
    <section className="w-full bg-paper px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative isolate overflow-hidden rounded-3xl bg-purple-900 py-20 text-paper lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="animate-drift absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-purple/50 blur-3xl" />
          <div className="animate-drift-slow absolute -bottom-52 -left-24 h-[28rem] w-[28rem] rounded-full bg-orange/[0.14] blur-3xl" />
          <Image
            src="/brand/kenenet-mark.png"
            alt=""
            width={512}
            height={512}
            className="absolute -left-20 top-1/2 hidden w-[30rem] -translate-y-1/2 opacity-[0.08] lg:block"
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/25 to-transparent" />
        </div>

        <div className="reveal mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(2.1rem,1.6rem+2vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-paper [text-wrap:balance]">
                {heading}
              </h2>
            </div>
            <div className="glass-dark space-y-6 rounded-2xl p-7 sm:p-9 lg:col-span-5">
              <p className="font-sans text-[18px] leading-relaxed text-on-dark-muted">{body}</p>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button variant="primary" size="lg" href={primaryCta.href} className="justify-between sm:justify-center">
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button variant="secondary-dark" size="lg" href={secondaryCta.href} icon={false}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
