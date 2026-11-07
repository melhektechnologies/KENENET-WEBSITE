import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageOpener } from "@/components/sections/PageOpener";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ConsultationFormSkeleton } from "@/components/ui/Skeleton";
import { Heading } from "@/components/ui/Heading";
import { contactData } from "@/data/contact";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kenenét Consultancy in Addis Ababa by phone, email or the contact form to discuss your organization.",
};

const channelClass =
  "group flex items-start gap-4 rounded-xl p-3 -m-3 transition-colors hover:bg-paper";
const iconWrap = "flex h-10 w-10 flex-none items-center justify-center rounded-full bg-purple-100 text-purple-700";

export default function ContactPage() {
  const { opener, form, privacy } = contactData;

  return (
    <div className="flex flex-col">
      <PageOpener title={opener.title} intro={opener.intro} />

      <section id={form.id} className="w-full scroll-mt-24 border-b border-line bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-7">
              <Heading as="h2" variant="heading-md">
                {form.heading}
              </Heading>
              <Suspense fallback={<ConsultationFormSkeleton />}>
                <ConsultationForm />
              </Suspense>
            </div>

            <aside aria-labelledby="direct-heading" className="lg:col-span-5">
              <div className="space-y-7 rounded-2xl border border-line bg-mist p-7 sm:p-9 lg:sticky lg:top-28">
                <h2 id="direct-heading" className="font-serif text-[1.5rem] text-ink">
                  Reach us directly
                </h2>
                <ul className="space-y-6">
                  <li>
                    <a href={contactDetails.phoneHref} className={channelClass}>
                      <span className={iconWrap}>
                        <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-600">Phone</span>
                        <span className="block font-sans text-[17px] text-ink group-hover:text-purple-700">
                          {contactDetails.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={contactDetails.emailHref} className={channelClass}>
                      <span className={iconWrap}>
                        <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-600">Email</span>
                        <span className="block break-all font-sans text-[17px] text-ink group-hover:text-purple-700">
                          {contactDetails.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={contactDetails.mapsHref} target="_blank" rel="noopener noreferrer" className={channelClass}>
                      <span className={iconWrap}>
                        <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-600">Office</span>
                        <address className="font-sans text-[16px] not-italic leading-relaxed text-ink">
                          {contactDetails.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                        <span className="mt-1 block font-sans text-[14px] font-semibold text-purple-700 underline underline-offset-4">
                          Open in Google Maps
                          <span className="sr-only"> (opens in a new tab)</span>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="privacy" aria-labelledby="privacy-heading" className="w-full scroll-mt-24 bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-5">
            <h2 id="privacy-heading" className="font-serif text-[1.75rem] text-ink">
              {privacy.heading}
            </h2>
            {privacy.paragraphs.map((p) => (
              <p key={p} className="font-sans text-[16px] leading-relaxed text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
