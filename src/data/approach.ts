export interface Stage {
  number: string;
  name: string;
  /** One-line summary used on the homepage preview. */
  summary: string;
  /** Full description used on the Approach page. */
  description: string;
}

/** Five stages: names and order are client-confirmed. No durations, deliverables or frequencies are added. */
export const stages: Stage[] = [
  {
    number: "01",
    name: "Problem Identification",
    summary: "Find where workflows, time and policy compliance break down.",
    description:
      "We start by mapping where the organization loses ground: gaps in workflow, lost time, policy non-compliance and wider operational inefficiencies.",
  },
  {
    number: "02",
    name: "Workflow Assessment",
    summary: "Observe the work and interview key stakeholders.",
    description:
      "Through detailed observation and interviews with key stakeholders, we uncover the structural bottlenecks in how work flows.",
  },
  {
    number: "03",
    name: "Policy & Compliance Alignment",
    summary: "Review, update and enforce rules, codes of conduct and SOPs.",
    description:
      "We review, update and enforce the organization\u2019s administrative rules, codes of conduct and standard operating procedures (SOPs). The aim is policy that is followed, not merely written.",
  },
  {
    number: "04",
    name: "System Implementation",
    summary: "Put in place the frameworks, job descriptions, handbooks and training the organization needs.",
    description:
      "We design and embed customized operational frameworks, job descriptions, employee handbooks and targeted capacity-building programs, working with the organization\u2019s leadership.",
  },
  {
    number: "05",
    name: "Follow-Up & Impact Review",
    summary: "Measure the gains afterwards and keep the systems working.",
    description:
      "After implementation we carry out periodic evaluations that measure performance gains, sustain compliance and refine administrative systems.",
  },
];

export const approachData = {
  opener: {
    title: "Our Approach",
    intro:
      "Every Kenenét engagement is built around the client\u2019s own operating environment. With our team, we carry out on-site operational evaluations across all departments, analyzing workflows, evaluating policy compliance and auditing administrative practices.",
  },
  reach:
    "We work at every organizational tier, from front-desk operations to executive management, so that policy compliance, punctuality, professional standards and corporate governance are aligned.",
  role: {
    heading: "Our role",
    body: "Kenenét acts as lead partner in the transformation. We bring expertise in corporate systems development, HR solutions and operational restructuring, and work directly with executive leadership to provide practical strategies, guidance and sustainable tools for organizational growth.",
  },
  aim: {
    heading: "What it is meant to achieve",
    body: "The aim is a culture of accountability, precision and operational integrity among management and employees alike, supporting business reliability and commercial competitiveness.",
  },
  closing: {
    heading: "See how this would apply to your organization.",
    body: "Talk through your organization\u2019s operations with us.",
  },
};
