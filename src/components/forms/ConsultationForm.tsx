"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactData } from "@/data/contact";

export const ConsultationForm: React.FC = () => {
  const searchParams = useSearchParams();
  const defaultInterest = searchParams?.get("interest") === "erp" ? "erp" : "general";

  const { form } = contactData;
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    message: "",
    consent: false,
    website: "", // honeypot
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorKind, setErrorKind] = useState<"validation" | "delivery">("delivery");
  const [errorMessage, setErrorMessage] = useState("");
  const mountedAt = useRef<number>(0);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const errors = {
    fullName: !formData.fullName.trim() ? "Full name is required." : null,
    organization: !formData.organization.trim() ? "Organization is required." : null,
    email: !formData.email.trim()
      ? "Email address is required."
      : !isEmailValid(formData.email)
      ? "Please provide a valid email address."
      : null,
    message: !formData.message.trim() ? "Message is required." : null,
    consent: !formData.consent ? "Consent is required to submit." : null,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) {
      setStatus("success");
      return;
    }

    // Mark all as touched
    setTouched({
      fullName: true,
      organization: true,
      email: true,
      message: true,
      consent: true,
    });

    const hasErrors = Object.values(errors).some((err) => err !== null);

    if (hasErrors) {
      setStatus("error");
      setErrorKind("validation");
      setErrorMessage("Please complete all required fields and accept the consent notice.");
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          role: formData.role,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          consent: formData.consent,
          website: formData.website,
          elapsedMs: Date.now() - mountedAt.current,
        }),
        signal: AbortSignal.timeout(20_000),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      let serverMessage = "";
      if (res.status === 400) {
        serverMessage = "Some details need attention. Please review the form and try again.";
      } else if (res.status === 429) {
        serverMessage = "Too many attempts. Please wait a few minutes and try again.";
      }
      setErrorMessage(serverMessage || form.failure.body);
    } catch {
      setErrorMessage(form.failure.body);
    }

    setErrorKind("delivery");
    setStatus("error");
    setTimeout(() => errorSummaryRef.current?.focus(), 50);
  };

  if (status === "success") {
    return (
      <div
        className="bg-paper border border-purple/30 rounded-2xl p-8 sm:p-12 space-y-6 animate-hero-1 shadow-lift"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4 text-success">
          <div className="w-12 h-12 rounded bg-purple-100 flex items-center justify-center text-purple flex-shrink-0">
            <CheckCircle2 className="w-7 h-7 stroke-[1.75]" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h2
              ref={successRef}
              tabIndex={-1}
              className="font-serif text-2xl sm:text-3xl text-ink font-normal focus:outline-none"
            >
              {form.success.heading}
            </h2>
          </div>
        </div>

        <p className="font-sans text-[17px] text-ink-600 leading-relaxed max-w-xl">
          {form.success.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button variant="secondary" size="md" href="/services" icon={false}>
            Explore Our Services
          </Button>
          <Button variant="secondary" size="md" href="/approach" icon={false}>
            See Our Approach
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      id={form.id}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl bg-paper"
      noValidate
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Accessible Error Summary */}
      {status === "error" && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          className="p-4 bg-mist border border-error rounded-lg flex items-start gap-3 text-error focus:outline-none focus:ring-2 focus:ring-error"
          role="alert"
          aria-labelledby="error-summary-title"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p id="error-summary-title" className="font-sans font-semibold text-[15px]">
              {errorKind === "validation" ? "Some details need attention." : form.failure.heading}
            </p>
            <p className="font-sans text-[14px]">{errorMessage || form.failure.body}</p>
          </div>
        </div>
      )}

      {/* Row 1: Name & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.fullName} <span className="text-purple">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              disabled={status === "submitting"}
              value={formData.fullName}
              onBlur={() => handleBlur("fullName")}
              onChange={handleChange}
              aria-invalid={touched.fullName && Boolean(errors.fullName)}
              aria-describedby={touched.fullName && errors.fullName ? "fullName-error" : undefined}
              className={`w-full h-12 px-3.5 bg-white border rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple ${
                touched.fullName && errors.fullName
                  ? "border-error focus:border-error focus:ring-error"
                  : touched.fullName && formData.fullName
                  ? "border-line pr-10 focus:border-purple"
                  : "border-ink-400 focus:border-purple"
              }`}
            />
            {touched.fullName && formData.fullName && !errors.fullName && (
              <span className="absolute right-3 top-3.5 text-success">
                <Check className="w-5 h-5 stroke-[2]" />
              </span>
            )}
          </div>
          {touched.fullName && errors.fullName && (
            <p id="fullName-error" className="font-sans text-xs text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 inline" /> {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.organization} <span className="text-purple">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="organization"
              name="organization"
              required
              disabled={status === "submitting"}
              value={formData.organization}
              onBlur={() => handleBlur("organization")}
              onChange={handleChange}
              aria-invalid={touched.organization && Boolean(errors.organization)}
              aria-describedby={touched.organization && errors.organization ? "organization-error" : undefined}
              className={`w-full h-12 px-3.5 bg-white border rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple ${
                touched.organization && errors.organization
                  ? "border-error focus:border-error focus:ring-error"
                  : touched.organization && formData.organization
                  ? "border-line pr-10 focus:border-purple"
                  : "border-ink-400 focus:border-purple"
              }`}
            />
            {touched.organization && formData.organization && !errors.organization && (
              <span className="absolute right-3 top-3.5 text-success">
                <Check className="w-5 h-5 stroke-[2]" />
              </span>
            )}
          </div>
          {touched.organization && errors.organization && (
            <p id="organization-error" className="font-sans text-xs text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 inline" /> {errors.organization}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.email} <span className="text-purple">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={status === "submitting"}
              value={formData.email}
              onBlur={() => handleBlur("email")}
              onChange={handleChange}
              aria-invalid={touched.email && Boolean(errors.email)}
              aria-describedby={touched.email && errors.email ? "email-error" : undefined}
              className={`w-full h-12 px-3.5 bg-white border rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple ${
                touched.email && errors.email
                  ? "border-error focus:border-error focus:ring-error"
                  : touched.email && isEmailValid(formData.email)
                  ? "border-line pr-10 focus:border-purple"
                  : "border-ink-400 focus:border-purple"
              }`}
            />
            {touched.email && isEmailValid(formData.email) && (
              <span className="absolute right-3 top-3.5 text-success">
                <Check className="w-5 h-5 stroke-[2]" />
              </span>
            )}
          </div>
          {touched.email && errors.email && (
            <p id="email-error" className="font-sans text-xs text-error mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 inline" /> {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={status === "submitting"}
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
          />
        </div>
      </div>

      {/* Area of interest */}
      <div className="space-y-2">
        <label htmlFor="interest" className="block font-sans text-[15px] font-semibold text-ink">
          {form.labels.interest}
        </label>
        <select
          id="interest"
          name="interest"
          disabled={status === "submitting"}
          value={formData.interest}
          onChange={handleChange}
          className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple cursor-pointer"
        >
          {form.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.message} <span className="text-purple">*</span>
          </label>
          <span className="font-sans text-[13px] text-ink-600">
            {form.helperText.message}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          value={formData.message}
          onBlur={() => handleBlur("message")}
          onChange={handleChange}
          aria-invalid={touched.message && Boolean(errors.message)}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
          className={`w-full p-3.5 bg-white border rounded-lg text-ink font-sans text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple resize-y min-h-[140px] ${
            touched.message && errors.message
              ? "border-error focus:border-error focus:ring-error"
              : "border-ink-400 focus:border-purple"
          }`}
        />
        {touched.message && errors.message && (
          <p id="message-error" className="font-sans text-xs text-error flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 inline" /> {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1 pt-2">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            disabled={status === "submitting"}
            checked={formData.consent}
            onBlur={() => handleBlur("consent")}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-purple border-ink-400 rounded focus:ring-purple cursor-pointer"
          />
          <label htmlFor="consent" className="font-sans text-[14px] text-ink-600 leading-snug cursor-pointer select-none">
            {form.labels.consent}
          </label>
        </div>
        {touched.consent && errors.consent && (
          <p className="font-sans text-xs text-error pl-7 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 inline" /> {errors.consent}
          </p>
        )}
      </div>

      {/* Privacy note */}
      <div className="flex items-center gap-2 text-[13px] font-sans text-ink-600 pt-1">
        <Info className="w-4 h-4 text-purple flex-shrink-0" />
        <p>{form.privacyLine}</p>
      </div>

      {/* Submit Button */}
      <div className="pt-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? form.labels.submitting : form.labels.submit}
        </Button>
      </div>
    </form>
  );
};
