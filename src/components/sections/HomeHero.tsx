import React from "react";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";
import { siteConfig } from "@/data/site";

/**
 * H-1 Hero
 * Only verified content is rendered here: tagline, supporting line,
 * category, and the approved descriptor. No unverified trust claims.
 */
export const HomeHero: React.FC = () => {
  const { hero } = homeData;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate w-full overflow-hidden border-b border-line bg-paper bg-hero-field pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-32"
    >
      <div className="relative z-10 mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        {/* Verified category line */}
        <p className="mb-8 inline-flex items-center gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-purple sm:text-[13px] animate-hero-1">
          <span className="h-px w-8 bg-purple" aria-hidden="true" />
          {siteConfig.category}
        </p>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Signature headline */}
          <div className="lg:col-span-7">
            <h1
              id="home-hero-heading"
              className="font-serif text-[clamp(3.1rem,2.2rem+4.5vw,6.25rem)] font-normal leading-[0.98] tracking-[-0.025em] text-ink"
            >
              <span className="block animate-hero-1">{hero.headlineWord1}</span>
              <span className="block italic text-purple animate-hero-2">
                {hero.headlineWord2}
                {/* Decorative accent; the sentence still reads correctly without it */}
                <span className="not-italic text-orange" aria-hidden="true">
                  .
                </span>
              </span>
            </h1>
          </div>

          {/* Frosted action panel — offset lower for an asymmetric break */}
          <div className="lg:col-span-5 lg:mt-24 animate-hero-3">
            <div className="glass-panel rounded p-7 shadow-panel sm:p-9">
              <p className="font-serif text-[clamp(1.35rem,1.25rem+0.5vw,1.75rem)] leading-snug text-ink [text-wrap:balance]">
                {hero.supportingLine}
              </p>

              <span
                className="mt-5 block h-[2px] w-12 bg-gradient-to-r from-purple to-orange"
                aria-hidden="true"
              />

              <p className="mt-5 font-sans text-[16px] leading-[1.65] text-ink-600 sm:text-[17px]">
                {hero.descriptor}
              </p>

              <div className="mt-8 flex flex-col gap-3 animate-hero-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={hero.primaryCta.href}
                  className="w-full justify-between"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={hero.secondaryCta.href}
                  icon={false}
                  className="w-full"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
