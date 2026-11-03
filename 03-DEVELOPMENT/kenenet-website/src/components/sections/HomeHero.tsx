import React from "react";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";

export const HomeHero: React.FC = () => {
  const { hero } = homeData;

  return (
    <section className="w-full bg-paper pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24 border-b border-line">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Signature Headline (Columns 1-7) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[clamp(3rem,2.2rem+4vw,5.75rem)] leading-[0.98] tracking-[-0.02em] text-ink">
              <span className="block font-normal">{hero.headlineWord1}</span>
              <span className="block font-normal italic text-purple">
                {hero.headlineWord2}
                <span className="text-orange not-italic">.</span>
              </span>
            </h1>
          </div>

          {/* Supporting Copy & CTAs (Columns 8-12 / 9-12) */}
          <div className="lg:col-span-5 lg:pt-3 space-y-6">
            <p className="font-serif text-[clamp(1.35rem,1.25rem+0.5vw,1.75rem)] text-ink leading-snug">
              {hero.supportingLine}
            </p>
            <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-xl">
              {hero.descriptor}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button variant="primary" size="lg" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button variant="secondary" size="lg" href={hero.secondaryCta.href} icon={false}>
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

