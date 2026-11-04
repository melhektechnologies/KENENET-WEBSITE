import React from "react";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";
import { ShieldCheck, Clock } from "lucide-react";

export const HomeHero: React.FC = () => {
  const { hero } = homeData;

  return (
    <section className="relative w-full bg-paper bg-subtle-glow pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24 border-b border-line overflow-hidden">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Category Trust Signal */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100/80 border border-purple/20 rounded text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.08em] text-purple uppercase mb-6 animate-hero-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple" aria-hidden="true" />
          <span>Organizational &amp; Management Advisory</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Signature Headline (Columns 1-7) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[clamp(3.1rem,2.2rem+4.5vw,6.25rem)] leading-[0.98] tracking-[-0.02em] text-ink overflow-visible">
              <span className="block font-normal animate-hero-1">{hero.headlineWord1}</span>
              <span className="block font-normal italic text-purple animate-hero-2">
                {hero.headlineWord2}
                <span className="text-orange not-italic">.</span>
              </span>
            </h1>
          </div>

          {/* Supporting Copy & CTAs (Columns 8-12) */}
          <div className="lg:col-span-5 lg:pt-3 space-y-6 animate-hero-3">
            <p className="font-serif text-[clamp(1.35rem,1.25rem+0.5vw,1.75rem)] text-ink leading-snug">
              {hero.supportingLine}
            </p>
            <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-xl">
              {hero.descriptor}
            </p>

            <div className="pt-2 space-y-4 animate-hero-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="primary" size="lg" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </Button>
                <Button variant="secondary" size="lg" href={hero.secondaryCta.href} icon={false}>
                  {hero.secondaryCta.label}
                </Button>
              </div>

              {/* High-trust Micro-markers */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-2 text-[13px] font-sans text-ink-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple flex-shrink-0" />
                  <span>Strict Confidentiality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple flex-shrink-0" />
                  <span>Prompt Direct Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
