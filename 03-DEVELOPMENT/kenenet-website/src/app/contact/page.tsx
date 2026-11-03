import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a consultation with Kenenét Consultancy to discuss management, organizational change, and ERP implementation support.",
};

export default function ContactPage() {
  const { opener } = contactData;

  return (
    <div className="flex flex-col">
      {/* C-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {/* Form Section */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form (Columns 1-8) */}
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="h-96 flex items-center justify-center font-sans text-ink-600">Loading form…</div>}>
                <ConsultationForm />
              </Suspense>
            </div>

            {/* Aside Guidance (Columns 9-12) */}
            <div className="lg:col-span-4 space-y-6 pt-2">
              <SectionLabel as="h2">Consultation Process</SectionLabel>
              <div className="bg-mist border border-line rounded p-6 sm:p-8 space-y-4">
                <Heading as="h3" variant="heading-md">
                  What to expect
                </Heading>
                <p className="font-sans text-[15px] text-ink-600 leading-relaxed">
                  We review every enquiry carefully. A senior consultant will reach out to understand your organization’s context and schedule an introductory conversation.
                </p>
                <p className="font-sans text-[15px] text-ink-600 leading-relaxed">
                  No preparation or formal scoping documents are required to begin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

