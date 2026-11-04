import React from "react";
import { Heading } from "@/components/ui/Heading";

export interface PageOpenerProps {
  title: string;
  intro: string;
}

export const PageOpener: React.FC<PageOpenerProps> = ({ title, intro }) => {
  return (
    <section className="w-full bg-paper pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 border-b border-line">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-6">
          <Heading as="h1" variant="display-lg">
            {title}
          </Heading>
          <p className="font-sans text-[clamp(1.15rem,1.1rem+0.2vw,1.35rem)] text-ink-600 leading-relaxed [text-wrap:pretty]">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
};

