export interface Service {
  slug: string;
  name: string;
  /** Defining line shown directly under the name, where the bare name could be misread. */
  definingLine?: string;
  /** Omitted while a description is on hold (e.g. pending a licensing check). */
  description?: string;
}

export interface ServiceGroup {
  slug: string;
  name: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "management-organization-projects",
    name: "Management, Organization & Projects",
    services: [
      {
        slug: "management-consulting",
        name: "Management Consulting",
        description:
          "Advisory support for owners and executives on how an organization is structured, managed and measured.",
      },
      {
        slug: "professional-organizing",
        name: "Professional Organizing",
        definingLine: "Organizational design and structuring.",
        description:
          "Designing and redesigning how an organization is set up: team formations, lines of reporting, communication channels and the systems that connect them.",
      },
      {
        slug: "project-management",
        name: "Project Management",
        description: "Planning, coordination and delivery oversight for client projects.",
      },
      {
        slug: "event-organizing",
        name: "Event Organizing",
        description: "Planning and running business events.",
      },
    ],
  },
  {
    slug: "systems-workforce-operations",
    name: "Systems & Workforce Operations",
    services: [
      {
        slug: "corporate-system-creation",
        name: "Corporate System Creation",
        description:
          "Developing the systems and procedures a company runs on, including operating frameworks, standard operating procedures and management reporting, tailored to the client\u2019s operation.",
      },
      {
        slug: "workforce-management",
        name: "Workforce Management",
        description:
          "Structuring how people, roles and working time are organized so that work is done reliably.",
      },
    ],
  },
  {
    slug: "people-hr",
    name: "People & HR",
    services: [
      {
        slug: "human-resource-service-solutions",
        name: "Human Resource Service & Solutions",
        description:
          "HR documentation and practice: job descriptions, employee handbooks, codes of conduct and targeted capacity-building programs.",
      },
      {
        // Description withheld until the insurance licensing question is answered.
        slug: "employee-insurance-facilitation",
        name: "Employee Insurance Facilitation",
      },
    ],
  },
  {
    slug: "business-setup-planning",
    name: "Business Setup & Planning",
    services: [
      {
        slug: "company-formation",
        name: "Company Formation",
        description: "Practical support for founders and investors setting up a new company.",
      },
      {
        slug: "business-plan-feasibility-study",
        name: "Business Plan & Feasibility Study",
        description:
          "Business plans and feasibility studies for new ventures and expansion, including identifying the resources growth requires.",
      },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);

export const servicesData = {
  opener: {
    title: "Our Services",
    intro:
      "Kenenét\u2019s services cover how an organization is designed, staffed, systemized and planned. We respond to demand for organizing and consulting services through assessment, research, analysis, drafting, implementation and evaluation, building collaborative client relationships along the way.",
  },
  umbrella: {
    text: "Our services are delivered through our five-stage approach to workplace transformation.",
    link: { label: "Read the approach", href: "/approach" },
  },
  engagementTypes: {
    heading: "Organizing & Consulting Excellence",
    body: "Engaging solutions include due diligence reviews; development of company systems and procedures; work on manufacturing processes; and quality systems integration. We also develop management reporting systems to measure progress in both service and product development.",
  },
  closing: {
    heading: "Not sure where to start?",
    body: "Describe your organization\u2019s situation. We will discuss where to begin.",
  },
};
