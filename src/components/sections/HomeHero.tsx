import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";
import { siteConfig } from "@/data/site";

/** H-1: typographic hero with the logo-arc motif, followed by the three principles strip. */
export const HomeHero: React.FC = () => {
  const { hero, principles, valuesLine } = homeData;

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate -mt-[72px] w-full overflow-hidden border-b border-line bg-paper pt-[72px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-field" />
        <div className="absolute inset-0 bg-grid" />
        <Image
          src="/brand/kenenet-mark.png"
          alt=""
          width={512}
          height={512}
          priority
          className="absolute -right-32 top-[42%] hidden w-[40rem] max-w-none -translate-y-1/2 opacity-[0.09] lg:block"
        />
      </div>

      <div className="mx-auto max-w-[1336px] px-5 pb-14 pt-12 sm:px-8 md:pt-20 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="max-w-4xl">
          <p className="animate-hero-1 mb-8 inline-flex items-center gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-purple-700 sm:text-[13px]">
            <span className="h-[3px] w-12 rounded-full bg-orange" aria-hidden="true" />
            {siteConfig.eyebrow}
          </p>

          <h1
            id="home-hero-heading"
            className="font-serif text-[clamp(3rem,2.1rem+4.6vw,6.5rem)] font-normal leading-[0.96] tracking-[-0.03em] text-ink"
          >
            <span className="animate-hero-1 block">Transforming</span>
            <span className="animate-hero-2 block pb-[0.08em] italic">
              <span className="text-gradient-brand">Workplaces</span>
              <span className="not-italic text-purple">.</span>
            </span>
          </h1>

          <p className="animate-hero-3 mt-8 max-w-2xl font-serif text-[clamp(1.35rem,1.2rem+0.7vw,1.9rem)] leading-snug text-ink [text-wrap:balance]">
            {siteConfig.supportingLine}
          </p>
          <p className="animate-hero-3 mt-5 max-w-[56ch] font-sans text-[17px] leading-[1.65] text-ink-600 sm:text-[18px]">
            {hero.intro}
          </p>

          <div className="animate-hero-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" size="lg" href={hero.primaryCta.href} className="justify-between sm:justify-center">
              {hero.primaryCta.label}
            </Button>
            <Button variant="secondary" size="lg" href={hero.secondaryCta.href} icon={false}>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10 lg:mt-24">
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {principles.map((p) => (
              <li key={p.title} className="space-y-2">
                <span className="block h-[3px] w-8 rounded-full bg-orange" aria-hidden="true" />
                <h2 className="pt-2 font-serif text-[1.35rem] leading-snug text-ink">{p.title}</h2>
                <p className="max-w-sm font-sans text-[16px] leading-relaxed text-ink-600">{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-sans text-[15px] italic text-ink-600">{valuesLine}</p>
        </div>
      </div>
    </section>
  );
};
