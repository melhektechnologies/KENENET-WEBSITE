import React from "react";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/data/site";

export interface PageOpenerProps {
  title: string;
  intro: string;
}

export const PageOpener: React.FC<PageOpenerProps> = ({ title, intro }) => {
  return (
    <section className="relative isolate -mt-[72px] w-full overflow-hidden border-b border-line bg-paper pt-[72px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-field" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-purple/[0.12] blur-3xl" />
        <Image
          src="/brand/kenenet-mark.png"
          alt=""
          width={512}
          height={512}
          className="absolute -right-10 top-1/2 hidden w-[26rem] -translate-y-1/2 opacity-[0.06] md:block"
        />
      </div>

      <div className="mx-auto max-w-[1336px] px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-20 lg:px-12 lg:pt-24">
        <div className="max-w-3xl">
          <p className="animate-hero-1 mb-6 inline-flex items-center gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-purple sm:text-[13px]">
            <span className="h-px w-8 bg-gradient-to-r from-purple to-orange" aria-hidden="true" />
            {siteConfig.brandName}
          </p>
          <Heading as="h1" variant="display-lg" className="animate-hero-2">
            {title}
          </Heading>
          <p className="animate-hero-3 mt-6 font-sans text-[clamp(1.15rem,1.1rem+0.2vw,1.35rem)] leading-relaxed text-ink-600 [text-wrap:pretty]">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
};
