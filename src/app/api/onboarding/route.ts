import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "hello@willard.design";
const FROM_EMAIL = "Willard Onboarding <no-reply@willard.design>";

/**
 * Field labels for the onboarding email — lets us keep the React form free
 * to evolve while preserving a clean, human-readable email layout.
 *
 * Order here = order in the email.
 */
const FIELD_LABELS: Record<string, string> = {
  // 01 — Who we'll be working with
  primaryContactName: "Primary contact",
  primaryContactRole: "Role",
  primaryContactEmail: "Email",
  primaryContactPhone: "Phone",
  otherStakeholders: "Other stakeholders",
  preferredCommsChannel: "Preferred comms channel",

  // 02 — Goals & success
  projectGoal: "Project goal (one-liner)",
  successMetrics: "How we'll know it's working",
  ninetyDayWin: "90-day win",
  whatHappensIfWeMissTheMark: "What happens if we miss the mark",
  whatExcitesYou: "What excites you most",
  whatFrustratesYou: "What frustrates you most",
  yourWhy: "Your why",

  // 03 — Audience & users
  primaryAudience: "Primary audience",
  audiencePainPoint: "Audience pain point",
  audienceJourney: "Audience journey today",
  audienceResearch: "Existing audience research",

  // 04 — Brand & voice
  brandAssets: "Existing brand assets",
  brandTone: "Brand tone",
  brandDosAndDonts: "Brand do's and don'ts",
  competitorBrandsToAvoid: "Brands to avoid looking like",

  // 05 — Site / product specifics
  pagesNeeded: "Pages needed",
  pageCount: "Page templates count",
  featuresNeeded: "Features needed",
  techStack: "Tech stack constraints",
  integrations: "Integrations",
  hostingProvider: "Hosting today",

  // 06 — Inspiration & competitors
  inspirationLinks: "Inspiration links",
  inspirationWhy: "Why those inspirations",
  competitors: "Direct competitors",
  competitorNotes: "Competitor notes",

  // 07 — Accounts & access
  domainRegistrar: "Domain registrar",
  emailServiceProvider: "Email service provider",
  analyticsAccounts: "Analytics & tracking",
  socialAccounts: "Social accounts",
  otherAccounts: "Other accounts",

  // 08 — Logistics
  contentStatus: "Content readiness",
  assetStatus: "Photography / asset status",
  decisionProcess: "Decision-making process",
  hardDeadlines: "Hard deadlines",
  blockers: "Potential blockers",
  notes: "Anything else",

  // 09 — Acknowledgements
  ackScope: "Acknowledged scope",
  ackRevisions: "Acknowledged revisions process",
  ackDeadlines: "Acknowledged client-side deadlines",
};

const SECTION_BREAKS: Record<string, string> = {
  projectGoal: "Goals & success",
  primaryAudience: "Audience & users",
  brandAssets: "Brand & voice",
  pagesNeeded: "What we're building",
  inspirationLinks: "References",
  domainRegistrar: "Accounts & access",
  contentStatus: "Logistics",
  ackScope: "Acknowledgements",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    // The form mirrors primaryContactName → name and primaryContactEmail →
    // email so this endpoint can also be reused by simpler form variants.
    const name =
      (body.name as string) || (body.primaryContactName as string) || "";
    const email =
      (body.email as string) || (body.primaryContactEmail as string) || "";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const html = renderEmail(body);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New project onboarding — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding form error:", error);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}

function renderEmail(body: Record<string, unknown>): string {
  const rows: string[] = [];
  let alt = false;

  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    const value = body[key];

    // Skip empty values (but keep "false" booleans visible — useful for "no")
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value) && value.length === 0) continue;

    if (SECTION_BREAKS[key]) {
      rows.push(`
        <tr>
          <td colspan="2" style="padding:24px 12px 8px;font-size:11px;letter-spacing:0.05em;text-transform:uppercase;color:#999;border-top:1px solid #eee;">
            ${escapeHtml(SECTION_BREAKS[key])}
          </td>
        </tr>
      `);
      alt = false;
    }

    let display: string;
    if (Array.isArray(value)) {
      display = value.map((v) => escapeHtml(String(v))).join(", ");
    } else if (typeof value === "boolean") {
      display = value ? "✓ Yes" : "—";
    } else {
      display = escapeHtml(String(value));
    }

    const bg = alt ? "background:#f9f9f9;" : "";
    rows.push(`
      <tr style="${bg}">
        <td style="padding:8px 12px;font-weight:bold;color:#666;vertical-align:top;width:180px;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;white-space:pre-wrap;">${display}</td>
      </tr>
    `);
    alt = !alt;
  }

  return `
    <h2 style="font-family:sans-serif;color:#222;">New Onboarding Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:680px;font-family:sans-serif;font-size:14px;">
      ${rows.join("")}
    </table>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
