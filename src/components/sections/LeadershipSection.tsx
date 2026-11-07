import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { homeData } from "@/data/home";
import { founder } from "@/data/about";

/** Homepage leadership teaser; the portrait and full biography are on the About page. */
export const LeadershipSection: React.FC = () => {
  const { leadership } = homeData;

  return (
    <section aria-labelledby="leadership-heading" className="w-full border-t border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="reveal grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">{leadership.label}</SectionLabel>
          </div>
          <div className="space-y-8 lg:col-span-8">
            <div className="space-y-2">
              <h2 id="leadership-heading" className="font-serif text-[clamp(2rem,1.7rem+1.5vw,3rem)] leading-tight text-ink">
                {founder.name}
              </h2>
              <p className="font-sans text-[15px] font-semibold uppercase tracking-[0.12em] text-purple-700">{founder.title}</p>
            </div>
            <p className="max-w-[60ch] font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">{leadership.body}</p>
            <ArrowLink href={leadership.link.href}>{leadership.link.label}</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
};
