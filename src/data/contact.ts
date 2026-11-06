export const contactData = {
  opener: {
    title: "Request a Consultation",
    intro:
      "Tell us about your organization and what you are looking to change.",
  },
  form: {
    id: "consultation-form",
    labels: {
      fullName: "Full name",
      organization: "Organization",
      role: "Your role (optional)",
      email: "Business email",
      phone: "Phone (optional)",
      interest: "Area of interest (optional)",
      message: "Message",
      consent:
        "I understand that Kenenét Consultancy will use these details to respond to this enquiry.",
      submit: "Submit Request",
      submitting: "Sending your request…",
    },
    interestOptions: [
      { value: "general", label: "General enquiry" },
      { value: "erp", label: "ERP Solutions" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    guidance: {
      heading: "Helpful to include",
      items: [
        "Your organization and the sector it operates in",
        "What you would like to change or achieve",
        "Any timing that matters to you",
      ],
      note: "A few sentences is enough to start.",
    },
    helperText: {
      message: "Briefly outline your situation or questions.",
    },
    privacyLine: "Your details are used only to respond to your enquiry.",
    success: {
      heading: "Thank you. Your request has been sent.",
      body: "Kenenét Consultancy will review your enquiry.",
    },
    failure: {
      heading: "Your request could not be sent.",
      body: "Please check your connection and try again in a moment.",
    },
  },
};

