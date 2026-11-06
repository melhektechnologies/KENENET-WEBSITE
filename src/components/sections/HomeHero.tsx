import React from "react";
import Image from "next/image";
import { Building2, Network } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";
import { siteConfig } from "@/data/site";

const credibilityIcons = [Building2, Network];

/**
 * H-1 Hero + H-2 credibility.
 * Only verified content is rendered here: tagline, supporting line,
 * category, the approved descriptor and the two approved credibility lines.
 */
export const HomeHero: React.FC = () => {
  const { hero, credibility } = homeData;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate -mt-[72px] w-full overflow-hidden border-b border-line bg-paper pt-[72px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-field" />
        <div className="absolute inset-0 bg-grid" />
        <div className="animate-drift absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-purple/[0.14] blur-3xl" />
        <div className="animate-drift-slow absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-orange/[0.12] blur-3xl" />
        <Image
          src="/brand/kenenet-mark.png"
          alt=""
          width={512}
          height={512}
          priority
          className="absolute -right-24 top-1/2 hidden w-[44rem] max-w-none -translate-y-1/2 opacity-[0.07] lg:block"
        />
      </div>

      <div className="mx-auto max-w-[1336px] px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-20 lg:px-12 lg:pb-24 lg:pt-28">
        <p className="animate-hero-1 mb-8 inline-flex items-center gap-2.5 rounded-full border border-purple/15 bg-paper/70 py-1.5 pl-1.5 pr-4 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-purple-700 backdrop-blur-md sm:text-[13px]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          </span>
          {siteConfig.category}
        </p>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1
              id="home-hero-heading"
              className="font-serif text-[clamp(3.1rem,2.2rem+4.5vw,6.5rem)] font-normal leading-[0.96] tracking-[-0.03em] text-ink"
            >
              <span className="animate-hero-1 block">{hero.headlineWord1}</span>
              <span className="animate-hero-2 block pb-[0.08em] italic">
                <span className="text-gradient-brand">{hero.headlineWord2}</span>
                {/* Decorative accent; the sentence still reads correctly without it */}
                <span className="not-italic text-orange" aria-hidden="true">
                  .
                </span>
              </span>
            </h1>

            <ul className="animate-hero-3 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-14">
              {credibility.map((item, index) => {
                const Icon = credibilityIcons[index] ?? Building2;
                return (
                  <li
                    key={item}
                    className="glass-panel flex items-center gap-3 rounded-full py-2 pl-2 pr-5 shadow-[0_8px_24px_-16px_rgba(43,18,54,0.35)]"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-purple text-paper">
                      <Icon className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-[15px] font-medium leading-snug text-ink">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="animate-hero-3 lg:col-span-5 lg:mt-20">
            <div className="glass-panel border-gradient relative rounded-xl p-7 shadow-panel sm:p-9">
              <p className="font-serif text-[clamp(1.35rem,1.25rem+0.5vw,1.75rem)] leading-snug text-ink [text-wrap:balance]">
                {hero.supportingLine}
              </p>

              <span className="mt-5 block h-[2px] w-12 rounded-full bg-gradient-to-r from-purple to-orange" aria-hidden="true" />

              <p className="mt-5 font-sans text-[16px] leading-[1.65] text-ink-600 sm:text-[17px]">{hero.descriptor}</p>

              <div className="animate-hero-4 mt-8 flex flex-col gap-3">
                <Button variant="primary" size="lg" href={hero.primaryCta.href} className="w-full justify-between">
                  {hero.primaryCta.label}
                </Button>
                <Button variant="secondary" size="lg" href={hero.secondaryCta.href} icon={false} className="w-full">
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
