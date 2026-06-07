"use client";

import { useState } from "react";
import { optionChoices, contactMethods, whatNext } from "@/lib/content/contact";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-[0.97rem] text-charcoal " +
  "placeholder:text-slate/50 transition-colors duration-200 outline-none " +
  "focus:border-teal-600";

/**
 * Contact form — the conversion surface. Client validation mirrors the API
 * (`app/api/contact/route.ts`); on success the form is replaced by a calm
 * acknowledgement that restates "what happens next". Approved CTA language only.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {};
    if (!data.name?.trim()) e.name = "Please tell us your name.";
    if (!data.email?.trim() || !EMAIL_RE.test(data.email))
      e.email = "Please enter a valid email.";
    if (!data.message?.trim())
      e.message = "Tell us what you want to talk about.";
    return e;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    const clientErrors = validate(data);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        if (body.errors) setErrors(body.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-600/30 bg-charcoal/[0.02] p-8 md:p-10">
        <span className="label text-[0.72rem] text-teal-700">Message sent</span>
        <h3 className="mt-3 text-[1.6rem] font-semibold tracking-[-0.02em]">
          Thanks — we have it.
        </h3>
        <ol className="mt-6 space-y-3">
          {whatNext.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-slate">
              <span className="label mt-0.5 text-teal-600">0{i + 1}</span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-charcoal/12 bg-white p-7 shadow-[0_1px_40px_-24px_rgba(17,24,32,0.5)] md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Business" name="business" />
        <Field label="Email" name="email" type="email" error={errors.email} required />
        <Field label="Website" name="website" type="url" placeholder="https://" />
      </div>

      <div className="mt-5">
        <FieldLabel htmlFor="message" required>
          What do you want to talk about?
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(
            fieldBase,
            "mt-2 resize-y",
            errors.message ? "border-red-500" : "border-charcoal/15",
          )}
          placeholder="Where you are trying to get to, and what is getting in the way."
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="option">Which option feels closest?</FieldLabel>
          <select
            id="option"
            name="option"
            defaultValue={optionChoices[3]}
            className={cn(fieldBase, "mt-2 border-charcoal/15")}
          >
            {optionChoices.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="contactMethod">Preferred contact method</FieldLabel>
          <select
            id="contactMethod"
            name="contactMethod"
            defaultValue={contactMethods[0]}
            className={cn(fieldBase, "mt-2 border-charcoal/15")}
          >
            {contactMethods.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="label inline-flex min-h-[48px] items-center justify-center rounded-full bg-charcoal px-8 text-[0.82rem] text-white transition-all duration-300 ease-calm hover:bg-teal-800 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Start a conversation"}
        </button>
        {status === "error" && !Object.keys(errors).length && (
          <p className="text-[0.9rem] text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}

function FieldLabel({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="label text-[0.66rem] text-slate">
      {children}
      {required && <span className="ml-1 text-teal-600">*</span>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[0.82rem] text-red-600">{children}</p>;
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
    <div>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={cn(
          fieldBase,
          "mt-2",
          error ? "border-red-500" : "border-charcoal/15",
        )}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
