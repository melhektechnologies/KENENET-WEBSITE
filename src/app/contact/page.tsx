import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ConsultationFormSkeleton } from "@/components/ui/Skeleton";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactData } from "@/data/contact";
import { ContentSlot } from "@/components/ui/Draft";

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
              <SectionLabel as="h2">{contactData.form.guidance.heading}</SectionLabel>

              <div className="bg-mist border border-line rounded-2xl p-6 sm:p-8 space-y-5">
                <ul className="space-y-3">
                  {contactData.form.guidance.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-[15px] text-ink-600 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-purple" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-line pt-4 font-sans text-[15px] text-ink">
                  {contactData.form.guidance.note}
                </p>
              </div>

              <ContentSlot
                label="Verified direct contact channels: email, phone, address, hours"
                gate="E-08 · G4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
