"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactData } from "@/data/contact";

export const ConsultationForm: React.FC = () => {
  const searchParams = useSearchParams();
  const defaultInterest = searchParams?.get("interest") === "erp" ? "erp" : "general";

  const { form } = contactData;
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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) {
      setStatus("success");
      return;
    }

    if (!formData.fullName || !formData.organization || !formData.email || !formData.message || !formData.consent) {
      setStatus("error");
      setErrorMessage("Please complete all required fields and accept the consent notice.");
      return;
    }

    setStatus("submitting");

    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div
        className="bg-paper border border-line rounded p-8 sm:p-12 space-y-6 animate-in fade-in duration-300"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 text-success">
          <CheckCircle2 className="w-8 h-8 stroke-[1.75]" />
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            {form.success.heading}
          </h2>
        </div>
        <p className="font-sans text-[17px] text-ink-600 leading-relaxed max-w-xl">
          {form.success.body}
        </p>
      </div>
    );
  }

  return (
    <form
      id={form.id}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl"
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

      {status === "error" && (
        <div
          className="p-4 bg-mist border border-error rounded flex items-start gap-3 text-error"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-sans font-semibold text-[15px]">{form.failure.heading}</p>
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
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.organization} <span className="text-purple">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.email} <span className="text-purple">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block font-sans text-[15px] font-semibold text-ink">
            {form.labels.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
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
          value={formData.interest}
          onChange={handleChange}
          className="w-full h-12 px-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
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
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3.5 bg-white border border-ink-400 rounded text-ink font-sans text-base focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-purple border-ink-400 rounded focus:ring-purple"
        />
        <label htmlFor="consent" className="font-sans text-[14px] text-ink-600 leading-snug">
          {form.labels.consent}
        </label>
      </div>

      {/* Privacy note */}
      <p className="font-sans text-[13px] text-ink-600">
        {form.privacyLine}
      </p>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              {form.labels.submitting}
            </span>
          ) : (
            form.labels.submit
          )}
        </Button>
      </div>
    </form>
  );
};

