import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_DESTINATION = "vandan.mandloi@chapeaucollective.com";
const CONTACT_FROM = "Chapeau Collective <enquiries@chapeaucollective.com>";

type Payload = {
  name?: string;
  business?: string;
  email?: string;
  website?: string;
  message?: string;
  option?: string;
  contactMethod?: string;
  captchaToken?: string;
};

async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[contact] RECAPTCHA_SECRET_KEY is not set — rejecting submission.");
    return false;
  }
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const result = await res.json().catch(() => ({ success: false }));
  return result.success === true;
}

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

  if (!data.captchaToken || !(await verifyCaptcha(data.captchaToken))) {
    return NextResponse.json(
      { errors: { captcha: "Captcha verification failed. Please try again." } },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — enquiry not delivered.");
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email us directly." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_DESTINATION,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.business ? ` (${data.business})` : ""}`,
      text: [
        `Name: ${data.name}`,
        `Business: ${data.business ?? "—"}`,
        `Email: ${data.email}`,
        `Website: ${data.website ?? "—"}`,
        `Option: ${data.option ?? "—"}`,
        `Preferred contact method: ${data.contactMethod ?? "—"}`,
        "",
        "Message:",
        data.message ?? "",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] Resend delivery failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
