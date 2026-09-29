"use client";

import { FormEvent, useState } from "react";
import { submitProjectRequest } from "@/lib/submit-project-request";

const projectTypes = [
  "FPV",
  "Flycam",
  "Photography",
  "Videography",
  "TVC",
  "Branding",
  "Marketing",
  "VR360",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "contact" | "details", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const next: Errors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!name) next.name = "Please tell us your name.";

    if (!email && !phone) {
      next.contact = "Please add an email or a phone number.";
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.contact = "That email doesn't look right.";
    }

    if (!details) next.details = "Tell us a little about the project.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await submitProjectRequest({
        name: String(formData.get("name") || ""),
        company: String(formData.get("company") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        projectType: String(formData.get("projectType") || ""),
        details: String(formData.get("details") || ""),
        budget: String(formData.get("budget") || ""),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="contact-form" className="border border-line bg-surface px-8 py-16 text-center">
        <p className="meta-label mb-4 text-accent">Request sent</p>
        <p className="font-display text-2xl font-extrabold uppercase text-ink">
          Thank you.
        </p>
        <p className="mt-3 font-body text-ink-dim">
          We&rsquo;ve received your project request and will reply within
          1&ndash;2 business days.
        </p>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Name *" name="name" error={errors.name} required />
        <Field label="Company" name="company" />
      </div>

      <div>
        <div className="grid gap-8 md:grid-cols-2">
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" type="tel" />
        </div>
        <p className="mt-2 font-body text-sm text-ink-faint">
          Please provide at least one so we can reach you.
        </p>
        {errors.contact && (
          <p className="mt-1 font-body text-sm text-accent">{errors.contact}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="projectType" className="meta-label text-ink-dim">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue={projectTypes[0]}
          className="border-b border-line bg-transparent py-3 font-body text-ink outline-none transition-colors focus:border-accent md:max-w-xs"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-surface">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="meta-label text-ink-dim">
          Project Details *
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          aria-invalid={!!errors.details}
          className="resize-none border-b border-line bg-transparent py-3 font-body text-ink outline-none transition-colors focus:border-accent"
        />
        {errors.details && (
          <p className="font-body text-sm text-accent">{errors.details}</p>
        )}
      </div>

      <Field
        label="Budget (optional)"
        name="budget"
        placeholder="e.g. under $5,000"
      />

      <div>
        {status === "error" && (
          <p className="mb-4 font-body text-sm text-accent">
            Something went wrong sending your request. Please try again, or
            reach us directly using the details above.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-body text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Start a Project"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="meta-label text-ink-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="border-b border-line bg-transparent py-3 font-body text-ink outline-none transition-colors focus:border-accent"
      />
      {error && <p className="font-body text-sm text-accent">{error}</p>}
    </div>
  );
}
