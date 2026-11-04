import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ConsultationFormSkeleton } from "@/components/ui/Skeleton";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactData } from "@/data/contact";
import { ShieldCheck, Clock, CheckCircle } from "lucide-react";

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
              <Suspense fallback={<ConsultationFormSkeleton />}>
                <ConsultationForm />
              </Suspense>
            </div>

            {/* Aside Guidance (Columns 9-12) */}
            <div className="lg:col-span-4 space-y-6 pt-2">
              <SectionLabel as="h2">Consultation Process</SectionLabel>

              <div className="bg-mist border border-line rounded p-6 sm:p-8 space-y-6">
                <div>
                  <Heading as="h3" variant="heading-md">
                    What to expect
                  </Heading>
                  <p className="font-sans text-[15px] text-ink-600 leading-relaxed mt-3">
                    We review every enquiry carefully. A senior consultant will reach out to understand your organization’s context and schedule an introductory conversation.
                  </p>
                  <p className="font-sans text-[15px] text-ink-600 leading-relaxed mt-3">
                    No preparation or formal scoping documents are required to begin.
                  </p>
                </div>

                <div className="pt-4 border-t border-line/70 space-y-3.5">
                  <div className="flex items-start gap-3 text-[14px] text-ink">
                    <ShieldCheck className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Full Confidentiality</span>
                      <span className="text-ink-600 text-[13px]">Discussions remain strictly confidential under advisory privilege.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[14px] text-ink">
                    <Clock className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Prompt Initial Review</span>
                      <span className="text-ink-600 text-[13px]">Initial response within 1–2 business days.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[14px] text-ink">
                    <CheckCircle className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Tailored Engagement</span>
                      <span className="text-ink-600 text-[13px]">Focused advisory aligned with your leadership’s immediate operational goals.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
