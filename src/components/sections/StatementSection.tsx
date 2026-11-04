import React from "react";
import Link from "next/link";
import { Statement } from "@/components/ui/Statement";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeData } from "@/data/home";

export const StatementSection: React.FC = () => {
  const { statement } = homeData;

  return (
    <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
      <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Label left (Columns 1-4) */}
          <div className="lg:col-span-4">
            <SectionLabel as="h2">{statement.heading}</SectionLabel>
          </div>

          {/* Content right (Columns 5-12) */}
          <div className="lg:col-span-8 space-y-8">
            <Statement
              lead={statement.statementLead}
              rest={statement.statementRest}
            />
            <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
              {statement.body}
            </p>
            <div>
              <Link
                href={statement.link.href}
                className="inline-flex items-center gap-2 font-sans text-[16px] text-purple hover:text-purple-700 underline underline-offset-4 font-medium"
              >
                <span>{statement.link.label}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

