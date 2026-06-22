"use client";

import { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { optionChoices, contactMethods, whatNext } from "@/lib/content/contact";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-[0.97rem] text-charcoal " +
  "placeholder:text-slate/50 transition-all duration-200 outline-none " +
  "focus:border-[#FF2E8A] focus:shadow-[0_0_0_3px_rgba(255,46,138,0.10)]";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-[#FF2E8A]/30 bg-charcoal/[0.02] p-8 md:p-10"
      >
        <span className="label text-[0.72rem] text-[#FF2E8A]">Message sent</span>
        <h3 className="mt-3 text-[1.6rem] font-semibold tracking-[-0.02em]">
          Thanks — we have it.
        </h3>
        <ol className="mt-6 space-y-3">
          {whatNext.steps.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 }}
              className="flex items-start gap-3 text-slate"
            >
              <span className="label mt-0.5 text-[#FF2E8A]">0{i + 1}</span>
              <span className="leading-relaxed">{step}</span>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-charcoal/12 bg-white p-7 shadow-[0_1px_40px_-24px_rgba(17,24,32,0.5)] transition-shadow duration-300 hover:shadow-[0_4px_50px_-18px_rgba(17,24,32,0.16)] md:p-9"
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
        <CustomSelect
          name="option"
          label="Which option feels closest?"
          options={optionChoices}
          defaultValue={optionChoices[3]}
        />
        <CustomSelect
          name="contactMethod"
          label="Preferred contact method"
          options={contactMethods}
          defaultValue={contactMethods[0]}
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="label inline-flex min-h-[48px] items-center justify-center rounded-full bg-charcoal px-8 text-[0.82rem] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#C01872] hover:shadow-[0_4px_14px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.98] active:shadow-none disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Let's talk"}
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
    <label htmlFor={htmlFor} className="label text-[0.75rem] text-slate md:text-[0.66rem]">
      {children}
      {required && <span className="ml-1 text-[#FF2E8A]">*</span>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="mt-1.5 text-[0.82rem] text-red-600"
    >
      {children}
    </motion.p>
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

function CustomSelect({
  name,
  label,
  options,
  defaultValue,
}: {
  name: string;
  label: string;
  options: readonly string[];
  defaultValue: string;
}) {
  const [selected, setSelected] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const labelId = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <p id={labelId} className="label text-[0.75rem] text-slate md:text-[0.66rem]">
        {label}
      </p>
      <input type="hidden" name={name} value={selected} />

      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "mt-2 flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-[0.97rem] text-charcoal transition-all duration-200 outline-none",
          open
            ? "border-[#FF2E8A] shadow-[0_0_0_3px_rgba(255,46,138,0.10)]"
            : "border-charcoal/15 hover:border-charcoal/30",
        )}
      >
        <span>{selected}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="shrink-0 text-[#FF2E8A]"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-labelledby={labelId}
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-xl border border-charcoal/10 bg-white py-1.5 shadow-[0_8px_28px_-6px_rgba(17,24,32,0.18)]"
          >
            {options.map((opt) => {
              const active = selected === opt;
              return (
                <li
                  key={opt}
                  role="option"
                  aria-selected={active}
                  onClick={() => { setSelected(opt); setOpen(false); }}
                  className={cn(
                    "flex cursor-pointer items-center justify-between px-4 py-2.5 text-[0.95rem] transition-colors duration-150",
                    active
                      ? "bg-charcoal/[0.04] text-[#FF2E8A]"
                      : "text-charcoal hover:bg-charcoal/[0.03] hover:text-charcoal",
                  )}
                >
                  <span>{opt}</span>
                  {active && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="text-[#FF2E8A]"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
