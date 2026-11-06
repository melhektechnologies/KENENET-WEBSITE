import React from "react";
import type { Metadata } from "next";
import { PageOpener } from "@/components/sections/PageOpener";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Draft, ContentSlot } from "@/components/ui/Draft";
import { showDrafts } from "@/lib/content-status";
import { approachData } from "@/data/approach";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Kenenét Consultancy works with organizations to ensure structural changes take root and last.",
};

// ⚠ DRAFT — not the client's verified methodology. Hidden in production (see <Draft>).
// Replace with the real phases once supplied (E-13 / D-8).
const approachPhases = [
  {
    numeral: "01",
    name: "Discovery & Operational Diagnosis",
    purpose:
      "Understanding the exact friction points and workflow dependencies across departments.",
    activities: [
      "Interviews with departmental heads, frontline managers, and operational staff",
      "Analysis of information handoffs, bottlenecks, and documentation practices",
      "Identification of structural misalignments between leadership objectives and day-to-day work",
    ],
    deliverable: "Diagnostic Baseline & Practical Alignment Roadmap",
  },
  {
    numeral: "02",
    name: "Structure & Workflow Design",
    purpose:
      "Designing lean management frameworks and standard procedures that teams can realistically operate.",
    activities: [
      "Standard Operating Procedure (SOP) drafting and operational boundary definition",
      "Governance structure design and accountability matrix development",
      "Technology adoption workflow integration and stakeholder role assignment",
    ],
    deliverable: "Operational Blueprint & Implementation Framework",
  },
  {
    numeral: "03",
    name: "Implementation & Change Adoption",
    purpose:
      "Bridging the critical gap between executive decisions and daily departmental execution.",
    activities: [
      "Guided workflow transition workshops and pilot testing within selected departments",
      "Management coaching on accountability reinforcement and change resistance handling",
      "Continuous feedback capture and process calibration during live cycles",
    ],
    deliverable: "Adoption Milestones & Active Governance Support",
  },
  {
    numeral: "04",
    name: "Governance & Sustainable Handover",
    purpose:
      "Ensuring management teams independently maintain and evolve the new structures over the long term.",
    activities: [
      "Leadership performance metric review and recurring governance cadence setup",
      "Post-implementation adoption audit and team competency confirmation",
      "Final handover of operational documentation and management tools",
    ],
    deliverable: "Sustainable Operations Review & Closure Assessment",
  },
];

export default function ApproachPage() {
  const { opener, context, closing } = approachData;

  return (
    <div className="flex flex-col">
      {/* P-1 Opener */}
      <PageOpener title={opener.title} intro={opener.intro} />

      {showDrafts() && (
      <section className="w-full bg-paper py-12 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <ContentSlot
            label="The client's actual methodology: principles, phases, activities, outcomes"
            gate="E-13 · G1"
          />
        </div>
      </section>
      )}

      <Draft label="Draft — placeholder methodology, NOT client-verified" className="mx-5 sm:mx-8 lg:mx-12 my-8">
      {/* P-2 Context */}
      <section className="w-full bg-paper py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Methodology</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <Heading as="h2" variant="heading-xl">
                {context.heading}
              </Heading>
              <p className="font-sans text-[17px] sm:text-[18px] text-ink-600 leading-relaxed max-w-2xl">
                {context.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* P-3 Process Timeline */}
      <section className="w-full bg-mist py-16 md:py-24 border-b border-line">
        <div className="max-w-[1336px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel as="h2">Engagement Lifecycle</SectionLabel>
              <div className="mt-4 hidden lg:block sticky top-28">
                <p className="font-sans text-[15px] text-ink-600 leading-relaxed max-w-xs">
                  Each phase is grounded in practical operational handovers, ensuring your internal management retains ownership from day one.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <ol className="relative border-l border-line space-y-12 ml-4 sm:ml-6">
                {approachPhases.map((phase, idx) => (
                  <li key={idx} className="relative pl-8 sm:pl-10">
                    {/* Timeline Node */}
                    <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-paper border border-purple text-purple font-serif text-[15px] font-medium shadow-sm">
                      {phase.numeral}
                    </span>

                    <div className="bg-paper border border-line rounded p-6 sm:p-8 space-y-4 hover:border-purple/40 transition-colors">
                      <Heading as="h3" variant="heading-md">
                        {phase.name}
                      </Heading>

                      <p className="font-sans text-[16px] text-ink leading-relaxed">
                        {phase.purpose}
                      </p>

                      <div className="pt-2">
                        <span className="font-sans text-[13px] font-semibold tracking-wider uppercase text-ink-600 block mb-2">
                          Core Activities
                        </span>
                        <ul className="space-y-2">
                          {phase.activities.map((act, actIdx) => (
                            <li
                              key={actIdx}
                              className="flex items-start gap-3 font-sans text-[15px] text-ink-600"
                            >
                              <span
                                className="w-1.5 h-1.5 bg-purple flex-shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-line/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[14px]">
                        <span className="font-sans text-ink-600">Phase Outcome:</span>
                        <span className="font-sans font-semibold text-purple">
                          {phase.deliverable}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      </Draft>

      {/* Closing Band */}
      <ClosingBand
        heading={closing.heading}
        body={closing.body}
        primaryCta={closing.primaryCta}
      />
    </div>
  );
}
