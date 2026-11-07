import { allServices } from "./services";

export const interestOptions = [
  { value: "", label: "Select an option" },
  ...allServices.map((s) => ({ value: s.slug, label: s.name })),
  { value: "not-sure", label: "Not sure yet" },
];

export const contactData = {
  opener: {
    title: "Contact Us",
    intro: "Tell us about your organization and what you would like to change. We will discuss how we could help.",
  },
  form: {
    id: "consultation-form",
    heading: "Send us a message",
    labels: {
      fullName: "Full name",
      organization: "Organization",
      email: "Email",
      phone: "Phone (optional)",
      interest: "Which service interests you? (optional)",
      message: "Message",
      consent: "I agree that Kenenét Consultancy may use my details to respond to my inquiry.",
      submit: "Send message",
      submitting: "Sending\u2026",
    },
    success: {
      heading: "Thank you.",
      body: "Your message has reached Kenenét Consultancy. We will be in touch.",
    },
    failure: {
      heading: "Something went wrong.",
      body: "Please try again, or contact us by phone or email.",
    },
  },
  privacy: {
    heading: "Privacy notice",
    paragraphs: [
      "When you send the contact form, Kenenét Consultancy receives the details you enter: your name, organization, email address, and, if you choose to give them, your phone number, area of interest and message.",
      "We use these details only to respond to your inquiry. They are delivered to our inbox by email and are not sold, shared for marketing or added to a mailing list.",
      "This website does not use advertising or analytics cookies.",
      "To ask what we hold about you, or to have it deleted, email us at the address on this page.",
    ],
  },
};
