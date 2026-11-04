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
      { value: "change-management", label: "Organizational & change management" },
      { value: "not-sure", label: "Not sure yet" },
    ],
    helperText: {
      message: "Briefly outline your situation or questions.",
    },
    privacyLine:
      "We respect your privacy and will never share your information with third parties without your consent.",
    success: {
      heading: "Thank you. Your request has been received.",
      body: "A member of our consultancy team will review your enquiry and get back to you shortly.",
    },
    failure: {
      heading: "Your request could not be sent.",
      body: "Please check your connection and try again.",
    },
  },
};

