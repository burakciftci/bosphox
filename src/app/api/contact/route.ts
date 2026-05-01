import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_MESSAGE = 12000;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const hp = typeof payload.hp === "string" ? payload.hp : "";
  if (hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const locale = payload.locale === "en" ? "en" : "tr";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }
  if (company.length > 200) {
    return NextResponse.json({ error: "invalid_company" }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL_TO ?? "info@bosphox.com";
  const from = process.env.RESEND_FROM ?? "BosphoX <onboarding@resend.dev>";
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    return NextResponse.json({ error: "mail_not_configured" }, { status: 503 });
  }

  const resend = new Resend(key);
  const subject =
    locale === "tr" ? `[BosphoX] Yeni iletişim: ${name}` : `[BosphoX] Contact: ${name}`;

  const html = `
    <p><strong>Name</strong><br/>${escapeHtml(name)}</p>
    <p><strong>Email</strong><br/>${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company</strong><br/>${escapeHtml(company)}</p>` : ""}
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    <p style="color:#64748b;font-size:12px">Locale: ${locale}</p>
  `;

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (result.error) {
      console.error("[contact]", result.error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
