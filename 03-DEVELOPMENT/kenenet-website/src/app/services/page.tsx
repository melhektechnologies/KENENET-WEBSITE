import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Accordion } from "@/components/ui/Accordion";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Organizational and management consultancy built around how organizations actually operate, with ERP solutions delivered through a technology partner.",
};

const erpAccordionItems = [
  {
    id: "change-management",
    title: "Why does ERP need organizational change management?",
    content:
      "New enterprise software changes how people perform their daily work. Without clear process alignment, role clarity, and hands-on change leadership, teams default back to legacy spreadsheets and informal workarounds.",
  },
  {
    id: "partner-division",
    title: "Who handles technical deployment versus business adoption?",
    content:
      "Our verified technology partner handles core software configuration, infrastructure, and technical integration. Kenenét Consultancy leads process mapping, workflow design, stakeholder engagement, and operational governance.",
  },
  {
    id: "readiness",
    title: "How do we know if our organization is ready for an ERP?",
    content:
      "If your core operations—procurement, inventory, billing, or multi-location coordination—are suffering from delayed reporting and data discrepancies, an exploratory readiness consultation helps evaluate your timing.",
  },
];

export default function ServicesPage() {
  const { opener, erp, notSure, closing } = servicesData;

  return (
    <div className="flex flex-col">
      {/* S-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {/* S-2 Sticky Jump Menu */}
      <nav
        aria-label="Jump to a service area"
        className="sticky top-16 md:top-20 z-20 w-full bg-paper/95 backdrop-blur border-b border-line"
      >
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12 h-14 flex items-center overflow-x-auto gap-8 text-[15px] font-sans font-medium">
          <Link
            href="#overview"
            className="text-ink hover:text-purple transition-colors whitespace-nowrap py-1"
          >
            Advisory Scope
          </Link>
          <Link
            href="#erp"
            className="text-ink hover:text-purple transition-colors whitespace-nowrap py-1"
          >
            ERP Solutions
          </Link>
          <Link
            href="#division"
            className="text-ink hover:text-purple transition-colors whitespace-nowrap py-1"
          >
            Partner Division
          </Link>
          <Link
            href="#faq"
            className="text-ink hover:text-purple transition-colors whitespace-nowrap py-1"
          >
            ERP Considerations
          </Link>
          <Link
            href="#getting-started"
            className="text-ink hover:text-purple transition-colors whitespace-nowrap py-1"
          >
            Getting Started
          </Link>
        </div>
      </nav>

      {/* Advisory Scope */}
      <section id="overview" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-36">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Advisory Scope</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                Consultancy tailored to operational realities.
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                Our advisory engagements focus directly on management practices, operational structure, and leadership governance. We work alongside client teams to ensure organizational adjustments produce measurable, lasting improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S-ERP Section */}
      <section id="erp" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-36">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-2">
              <SectionLabel as="h2">{erp.label}</SectionLabel>
            </div>
            <div className="lg:col-span-8 bg-mist border border-line rounded p-8 sm:p-12 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {erp.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink leading-relaxed max-w-2xl">
                {erp.whatErpIs}
              </p>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {erp.implementationSupport}
              </p>
              <div className="pt-2">
                <Button variant="primary" size="md" href={erp.cta.href}>
                  {erp.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallel Columns: Who Does What */}
      <section id="division" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-36">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Collaboration Model</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-line">
                <div className="space-y-4 md:pr-8">
                  <span className="font-sans text-[13px] font-semibold tracking-wider uppercase text-purple block">
                    Our Technology Partner
                  </span>
                  <Heading as="h3" variant="heading-md">
                    Technical Implementation
                  </Heading>
                  <p className="font-sans text-[16px] text-ink-600 leading-relaxed">
                    Provides certified enterprise software, core database configuration, system infrastructure, and ongoing technical support.
                  </p>
                </div>

                <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                  <span className="font-sans text-[13px] font-semibold tracking-wider uppercase text-purple block">
                    Kenenét Consultancy
                  </span>
                  <Heading as="h3" variant="heading-md">
                    Organizational Alignment
                  </Heading>
                  <p className="font-sans text-[16px] text-ink-600 leading-relaxed">
                    Prepares departmental workflows, bridges executive leadership and operational staff, guides change management, and oversees adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ: ERP Considerations */}
      <section id="faq" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-36">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Key Considerations</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                Common questions on ERP implementation
              </Heading>
              <Accordion items={erpAccordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* S-NotSure Section */}
      <section id="getting-started" className="w-full bg-paper py-16 md:py-24 border-b border-line scroll-mt-36">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Getting Started</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {notSure.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {notSure.body}
              </p>
              <div className="pt-2">
                <Button variant="secondary" size="md" href={notSure.cta.href}>
                  {notSure.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Band */}
      <ClosingBand
        heading={closing.heading}
        body={closing.body}
        primaryCta={closing.primaryCta}
      />
    </div>
  );
}
