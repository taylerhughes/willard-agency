import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "hello@willard.design";
const FROM_EMAIL = "Willard Website <no-reply@willard.design>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, hearAbout, message, newsletter } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;width:140px;">Name</td>
            <td style="padding:8px 12px;">${escapeHtml(name)}</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">Email</td>
            <td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">Phone</td>
            <td style="padding:8px 12px;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${hearAbout ? `
          <tr style="background:#f9f9f9;">
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">How they heard</td>
            <td style="padding:8px 12px;">${escapeHtml(hearAbout)}</td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(message)}</td>
          </tr>` : ""}
          <tr style="background:#f9f9f9;">
            <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;">Newsletter</td>
            <td style="padding:8px 12px;">${newsletter ? "Yes" : "No"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
