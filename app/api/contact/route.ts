import { NextResponse } from "next/server";

/**
 * Contact endpoint — validates the enquiry and acknowledges it. Wiring to email
 * or a CRM is a one-line follow-up: read an env var (e.g. CONTACT_WEBHOOK_URL or
 * a Resend key) and forward `data` here. Until then it validates and logs, so the
 * form is fully functional end-to-end without a third-party account.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: string;
  business?: string;
  email?: string;
  website?: string;
  message?: string;
  option?: string;
  contactMethod?: string;
};

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Please tell us your name.";
  if (!data.email?.trim() || !EMAIL_RE.test(data.email))
    errors.email = "Please enter a valid email.";
  if (!data.message?.trim())
    errors.message = "Tell us what you want to talk about.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: forward to email/CRM via env-configured destination.
  console.log("[contact] new enquiry:", {
    name: data.name,
    business: data.business,
    email: data.email,
    website: data.website,
    option: data.option,
    contactMethod: data.contactMethod,
  });

  return NextResponse.json({ ok: true });
}
