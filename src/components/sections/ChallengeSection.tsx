import React from "react";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeData } from "@/data/home";

/** H-2: name the problem before offering a method, then state what Kenenét does about it. */
export const ChallengeSection: React.FC = () => {
  const { problem, whatWeDo } = homeData;

  return (
    <section aria-labelledby="challenge-heading" className="w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel index="01" className="lg:sticky lg:top-28">
              {problem.label}
            </SectionLabel>
          </div>

          <div className="reveal space-y-10 lg:col-span-8">
            <div className="space-y-6">
              <Heading as="h2" id="challenge-heading" variant="heading-xl">
                {problem.heading}
              </Heading>
              <p className="max-w-[60ch] font-sans text-[17px] leading-relaxed text-ink-600 sm:text-[18px]">{problem.body}</p>
            </div>

            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
              {problem.items.map((item) => (
                <li key={item.title} className="space-y-3 border-t border-ink/80 pt-5">
                  <h3 className="font-serif text-[1.25rem] leading-snug text-ink">{item.title}</h3>
                  <p className="font-sans text-[15px] leading-relaxed text-ink-600">{item.body}</p>
                </li>
              ))}
            </ul>

            <p className="max-w-[60ch] font-sans text-[17px] leading-relaxed text-ink sm:text-[18px]">{problem.closing}</p>

            <div className="space-y-4 rounded-2xl border border-line bg-mist p-7 sm:p-10">
              <SectionLabel as="p">{whatWeDo.label}</SectionLabel>
              <h3 className="font-serif text-[clamp(1.5rem,1.35rem+0.7vw,2.1rem)] leading-tight text-ink [text-wrap:balance]">
                {whatWeDo.heading}
              </h3>
              <p className="max-w-[62ch] font-sans text-[16px] leading-relaxed text-ink-600 sm:text-[17px]">{whatWeDo.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
