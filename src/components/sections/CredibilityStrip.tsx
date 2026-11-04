import React from "react";
import { homeData } from "@/data/home";

export const CredibilityStrip: React.FC = () => {
  const { credibility } = homeData;

  return (
    <section className="w-full bg-paper py-8 border-b border-line">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-line">
          {credibility.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 pt-4 md:pt-0 first:pt-0 md:first:pl-0 md:pl-12"
            >
              <span className="w-1.5 h-1.5 bg-purple flex-shrink-0" aria-hidden="true" />
              <p className="font-sans text-[17px] text-ink font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

