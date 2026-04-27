"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";

/* ------------------------------------------------------------------ */
/*  Autosave config                                                    */
/* ------------------------------------------------------------------ */

// Bump the version when the FormData shape changes incompatibly so old
// drafts get discarded instead of hydrating partial data.
const STORAGE_KEY = "willard-onboarding-draft-v1";
const SAVE_DEBOUNCE_MS = 500;

/* ------------------------------------------------------------------ */
/*  Options                                                            */
/* ------------------------------------------------------------------ */

const SUCCESS_METRICS = [
  "More qualified leads",
  "More conversions / sales",
  "Better brand perception",
  "Investor-ready story",
  "Higher engagement / retention",
  "Lower bounce / drop-off",
  "Easier for the team to maintain",
  "Other (tell us in the notes)",
];

const PAGES_NEEDED = [
  "Home",
  "About",
  "Services / What we do",
  "Work / Portfolio / Case studies",
  "Pricing",
  "Blog",
  "Contact",
  "Careers",
  "Login / app entry point",
  "Custom landing pages",
];

const FEATURES_NEEDED = [
  "Contact / lead capture form",
  "Newsletter signup",
  "Booking / scheduling",
  "eCommerce / payments",
  "User accounts / login",
  "CMS so we can edit content ourselves",
  "Multi-language",
  "Analytics & tracking",
  "Live chat / support",
  "Search",
];

const CONTENT_STATUS = [
  "We have all the copy ready to go",
  "We have most of it — needs polish",
  "We have rough drafts",
  "We need help writing it",
  "We haven't started yet",
];

const ASSET_STATUS = [
  "We have professional photography",
  "We have iPhone / amateur photos",
  "We need photography commissioned",
  "We'll use stock imagery",
  "Mix of the above",
];

const DECISION_PROCESS = [
  "Just me — I sign off on everything",
  "Me + one other (e.g. co-founder)",
  "Small team review",
  "Larger committee / board approval",
];

/* ------------------------------------------------------------------ */
/*  Form state shape                                                   */
/* ------------------------------------------------------------------ */

interface FormData {
  // 01 — Who we'll be working with
  primaryContactName: string;
  primaryContactRole: string;
  primaryContactEmail: string;
  primaryContactPhone: string;
  otherStakeholders: string;
  preferredCommsChannel: string;

  // 02 — Goals & success
  projectGoal: string;
  successMetrics: string[];
  ninetyDayWin: string;
  whatHappensIfWeMissTheMark: string;
  // Heart questions (Sinek-style "why")
  whatExcitesYou: string;
  whatFrustratesYou: string;
  yourWhy: string;

  // 03 — Audience & users
  primaryAudience: string;
  audiencePainPoint: string;
  audienceJourney: string;
  audienceResearch: string;

  // 04 — Brand & voice
  brandAssets: string;
  brandTone: string;
  brandDosAndDonts: string;
  competitorBrandsToAvoid: string;

  // 05 — Site / product specifics
  pagesNeeded: string[];
  pageCount: string;
  featuresNeeded: string[];
  techStack: string;
  integrations: string;
  hostingProvider: string;

  // 06 — Inspiration & competitors
  inspirationLinks: string;
  inspirationWhy: string;
  competitors: string;
  competitorNotes: string;

  // 07 — Accounts & access
  domainRegistrar: string;
  emailServiceProvider: string;
  analyticsAccounts: string;
  socialAccounts: string;
  otherAccounts: string;

  // 08 — Logistics
  contentStatus: string;
  assetStatus: string;
  decisionProcess: string;
  hardDeadlines: string;
  blockers: string;
  notes: string;

  // 09 — Acknowledgements
  ackScope: boolean;
  ackRevisions: boolean;
  ackDeadlines: boolean;
}

const INITIAL: FormData = {
  primaryContactName: "",
  primaryContactRole: "",
  primaryContactEmail: "",
  primaryContactPhone: "",
  otherStakeholders: "",
  preferredCommsChannel: "",

  projectGoal: "",
  successMetrics: [],
  ninetyDayWin: "",
  whatHappensIfWeMissTheMark: "",
  whatExcitesYou: "",
  whatFrustratesYou: "",
  yourWhy: "",

  primaryAudience: "",
  audiencePainPoint: "",
  audienceJourney: "",
  audienceResearch: "",

  brandAssets: "",
  brandTone: "",
  brandDosAndDonts: "",
  competitorBrandsToAvoid: "",

  pagesNeeded: [],
  pageCount: "",
  featuresNeeded: [],
  techStack: "",
  integrations: "",
  hostingProvider: "",

  inspirationLinks: "",
  inspirationWhy: "",
  competitors: "",
  competitorNotes: "",

  domainRegistrar: "",
  emailServiceProvider: "",
  analyticsAccounts: "",
  socialAccounts: "",
  otherAccounts: "",

  contentStatus: "",
  assetStatus: "",
  decisionProcess: "",
  hardDeadlines: "",
  blockers: "",
  notes: "",

  ackScope: false,
  ackRevisions: false,
  ackDeadlines: false,
};

/* ------------------------------------------------------------------ */
/*  Reusable field components                                          */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Relative-time helper for the "saved Xs ago" indicator              */
/* ------------------------------------------------------------------ */
function formatRelativeTime(ms: number): string {
  if (ms < 5_000) return "just now";
  if (ms < 60_000) return `${Math.round(ms / 1000)}s ago`;
  if (ms < 3_600_000) return `${Math.round(ms / 60_000)}m ago`;
  if (ms < 86_400_000) return `${Math.round(ms / 3_600_000)}h ago`;
  return `${Math.round(ms / 86_400_000)}d ago`;
}

function FieldLabel({
  htmlFor,
  required,
  optional,
  children,
}: {
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm text-gray-400 font-light mb-2"
    >
      {children}
      {required && <span className="text-gray-300"> *</span>}
      {optional && <span className="text-gray-300"> (optional)</span>}
    </label>
  );
}

const inputClass =
  "w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500";

function SectionHeader({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 lg:mb-10">
      <div className="inline-flex items-center space-x-2 mb-3">
        <div className="text-sm text-primary-500 font-light tabular-nums">
          {step}
        </div>
        <div className="bg-gray-200 w-1 h-1 rounded-full" />
        <div className="text-sm text-gray-400 font-light">{title}</div>
      </div>
      <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-2xl">
        {description}
      </h2>
    </div>
  );
}

function CheckboxGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center px-4 py-3 rounded-xl bg-white text-base text-gray-600 cursor-pointer transition-colors ${
            selected.includes(opt)
              ? "ring-2 ring-primary-500"
              : "hover:ring-1 hover:ring-gray-200"
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
            className="mr-3"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function OnboardingPage() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Autosave state. `hydrated` flips true after we've attempted to load
  // a draft from localStorage so the save effect doesn't fire with the
  // empty INITIAL state on first render.
  const [hydrated, setHydrated] = useState(false);
  const [hasSavedDraft, setHasSavedDraft] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<number | null>(null);
  const [savedAgo, setSavedAgo] = useState<string>("");

  // ----- Hydrate from localStorage on first mount ------------------
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as {
          data: Partial<FormData>;
          savedAt: number;
        };
        if (parsed?.data && typeof parsed.data === "object") {
          setData((prev) => ({ ...prev, ...parsed.data }));
          setHasSavedDraft(true);
          setLastSavedAt(parsed.savedAt ?? null);
        }
      }
    } catch {
      // Ignore parse failures — bad drafts get overwritten on next save.
    }
    setHydrated(true);
  }, []);

  // ----- Debounced save to localStorage ----------------------------
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!hydrated || submitted) return;
    // Don't save while the form is still in its untouched initial state —
    // we don't want a fresh visit to immediately show "Draft saved" with
    // nothing actually typed.
    if (JSON.stringify(data) === JSON.stringify(INITIAL)) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      try {
        const now = Date.now();
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ data, savedAt: now })
        );
        setLastSavedAt(now);
        setHasSavedDraft(true);
      } catch {
        // Quota exceeded or storage unavailable — fail silently.
      }
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [data, hydrated, submitted]);

  // ----- Tick the "saved Xs ago" string every 10s ------------------
  useEffect(() => {
    if (lastSavedAt === null) return;
    function tick() {
      setSavedAgo(formatRelativeTime(Date.now() - (lastSavedAt as number)));
    }
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, [lastSavedAt]);

  function clearDraft() {
    if (
      !confirm(
        "Clear all the answers you've entered so far? This can't be undone."
      )
    ) {
      return;
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setData(INITIAL);
    setHasSavedDraft(false);
    setLastSavedAt(null);
    setSavedAgo("");
  }

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(key: "successMetrics" | "pagesNeeded" | "featuresNeeded", value: string) {
    setData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // The API expects `name` and `email` to validate; mirror the
          // primary contact into those fields.
          ...data,
          name: data.primaryContactName,
          email: data.primaryContactEmail,
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      // Clear the saved draft now that we've successfully submitted.
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
      setHasSavedDraft(false);
      setLastSavedAt(null);

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="w-full pt-28 pb-10 lg:pt-40 lg:pb-16 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center mb-4">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Project onboarding
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-6 text-balance lg:indent-48">
                  Welcome aboard. Let&apos;s set this project up to win.
                </h1>
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-xl lg:ml-48">
                  Now that we&apos;re working together, we want to know
                  everything that helps us deliver the best possible end
                  result — your goals, your audience, your existing assets,
                  and the logistics. Take 15–20 minutes. Skip anything that
                  doesn&apos;t apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FORM                                                        */}
        {/* ============================================================ */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-12/16 lg:mx-auto">
              {submitted ? (
                <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-10 lg:p-16 text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h2 className="text-2xl md:text-3xl tracking-tight text-gray-600 mb-3">
                    Thanks for the deep dive.
                  </h2>
                  <p className="text-base text-gray-400 font-light leading-7 max-w-md mx-auto">
                    We&apos;ll review everything and circle back within 1–2
                    business days with a kickoff agenda and any follow-up
                    questions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* ====================================================
                  /  AUTOSAVE INDICATOR                                   */}
                  <div
                    className="sticky top-20 z-30 -mb-6"
                    aria-live="polite"
                  >
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-4 py-2 text-sm text-gray-400 font-light shadow-sm">
                      {hasSavedDraft ? (
                        <>
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            Draft saved
                            {savedAgo && (
                              <span className="text-gray-300">
                                {" "}
                                · {savedAgo}
                              </span>
                            )}
                          </span>
                          <button
                            type="button"
                            onClick={clearDraft}
                            className="text-gray-400 underline underline-offset-2 hover:text-gray-600 transition-colors"
                          >
                            Start over
                          </button>
                        </>
                      ) : (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                          We&apos;ll save your progress as you go — come back
                          anytime
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ====================================================
                  /  01 — PROJECT BASICS & CONTACTS                       */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="01"
                      title="Who we'll be working with"
                      description="The people we'll talk to day-to-day."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <FieldLabel htmlFor="primaryContactName" required>
                          Primary contact name
                        </FieldLabel>
                        <input
                          id="primaryContactName"
                          required
                          value={data.primaryContactName}
                          onChange={(e) =>
                            update("primaryContactName", e.target.value)
                          }
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="primaryContactRole" optional>
                          Role
                        </FieldLabel>
                        <input
                          id="primaryContactRole"
                          value={data.primaryContactRole}
                          onChange={(e) =>
                            update("primaryContactRole", e.target.value)
                          }
                          className={inputClass}
                          placeholder="Founder, CEO, Marketing Lead…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="primaryContactEmail" required>
                          Email
                        </FieldLabel>
                        <input
                          id="primaryContactEmail"
                          type="email"
                          required
                          value={data.primaryContactEmail}
                          onChange={(e) =>
                            update("primaryContactEmail", e.target.value)
                          }
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="primaryContactPhone" optional>
                          Phone
                        </FieldLabel>
                        <input
                          id="primaryContactPhone"
                          type="tel"
                          value={data.primaryContactPhone}
                          onChange={(e) =>
                            update("primaryContactPhone", e.target.value)
                          }
                          className={inputClass}
                          placeholder="+44 7000 000000"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <FieldLabel htmlFor="otherStakeholders" optional>
                          Other stakeholders we should know about
                        </FieldLabel>
                        <textarea
                          id="otherStakeholders"
                          rows={3}
                          value={data.otherStakeholders}
                          onChange={(e) =>
                            update("otherStakeholders", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Co-founders, marketing team, board members — names, roles, and what they care about most."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <FieldLabel htmlFor="preferredCommsChannel">
                          How do you prefer to communicate?
                        </FieldLabel>
                        <input
                          id="preferredCommsChannel"
                          value={data.preferredCommsChannel}
                          onChange={(e) =>
                            update("preferredCommsChannel", e.target.value)
                          }
                          className={inputClass}
                          placeholder="Slack, email, weekly calls, async Loom — whatever works for you."
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  02 — GOALS & SUCCESS                                  */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="02"
                      title="Goals & success"
                      description="What does winning actually look like?"
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="projectGoal" required>
                          In one sentence — what's the #1 thing this project
                          needs to do?
                        </FieldLabel>
                        <textarea
                          id="projectGoal"
                          required
                          rows={2}
                          value={data.projectGoal}
                          onChange={(e) =>
                            update("projectGoal", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="e.g. 'Convert more high-intent visitors into demo bookings.'"
                        />
                      </div>

                      <div>
                        <FieldLabel>
                          How will we know it&apos;s working? (pick all that
                          apply)
                        </FieldLabel>
                        <CheckboxGrid
                          options={SUCCESS_METRICS}
                          selected={data.successMetrics}
                          onToggle={(v) => toggle("successMetrics", v)}
                        />
                      </div>

                      <div>
                        <FieldLabel htmlFor="ninetyDayWin">
                          What does a 90-day win look like after launch?
                        </FieldLabel>
                        <textarea
                          id="ninetyDayWin"
                          rows={3}
                          value={data.ninetyDayWin}
                          onChange={(e) =>
                            update("ninetyDayWin", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Specific numbers, behaviours, or feedback that would make you call this a success."
                        />
                      </div>

                      <div>
                        <FieldLabel htmlFor="whatHappensIfWeMissTheMark">
                          What happens to the business if we miss the mark?
                        </FieldLabel>
                        <textarea
                          id="whatHappensIfWeMissTheMark"
                          rows={2}
                          value={data.whatHappensIfWeMissTheMark}
                          onChange={(e) =>
                            update(
                              "whatHappensIfWeMissTheMark",
                              e.target.value
                            )
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Helps us understand the stakes — be honest."
                        />
                      </div>

                      {/* Heart questions */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-400 font-light mb-4">
                          The motivational stuff — the &quot;why&quot; that
                          drives the work.
                        </div>
                        <div className="space-y-6">
                          <div>
                            <FieldLabel htmlFor="whatExcitesYou">
                              What excites you most about your business right
                              now?
                            </FieldLabel>
                            <textarea
                              id="whatExcitesYou"
                              rows={2}
                              value={data.whatExcitesYou}
                              onChange={(e) =>
                                update("whatExcitesYou", e.target.value)
                              }
                              className={`${inputClass} resize-none`}
                              placeholder="The momentum, the early wins, the conversations that light you up."
                            />
                          </div>
                          <div>
                            <FieldLabel htmlFor="whatFrustratesYou">
                              What frustrates you most about it?
                            </FieldLabel>
                            <textarea
                              id="whatFrustratesYou"
                              rows={2}
                              value={data.whatFrustratesYou}
                              onChange={(e) =>
                                update("whatFrustratesYou", e.target.value)
                              }
                              className={`${inputClass} resize-none`}
                              placeholder="The friction, the misunderstandings, the things that should be easier."
                            />
                          </div>
                          <div>
                            <FieldLabel htmlFor="yourWhy">
                              Why are you doing this?
                            </FieldLabel>
                            <textarea
                              id="yourWhy"
                              rows={3}
                              value={data.yourWhy}
                              onChange={(e) =>
                                update("yourWhy", e.target.value)
                              }
                              className={`${inputClass} resize-none`}
                              placeholder="The bigger reason behind the company. We do better work when we understand it."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  03 — AUDIENCE & USERS                                */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="03"
                      title="Audience & users"
                      description="Who are we actually designing for?"
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="primaryAudience" required>
                          Who&apos;s the primary audience?
                        </FieldLabel>
                        <textarea
                          id="primaryAudience"
                          required
                          rows={3}
                          value={data.primaryAudience}
                          onChange={(e) =>
                            update("primaryAudience", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Be specific. Roles, demographics, technical level, what they buy / use today."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="audiencePainPoint">
                          What problem are they trying to solve when they
                          arrive?
                        </FieldLabel>
                        <textarea
                          id="audiencePainPoint"
                          rows={3}
                          value={data.audiencePainPoint}
                          onChange={(e) =>
                            update("audiencePainPoint", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="The job-to-be-done. What's frustrating them about today's options?"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="audienceJourney">
                          Walk us through their journey today
                        </FieldLabel>
                        <textarea
                          id="audienceJourney"
                          rows={3}
                          value={data.audienceJourney}
                          onChange={(e) =>
                            update("audienceJourney", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="How do they find you? What do they read first? What do they typically do, and where do they drop off?"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="audienceResearch" optional>
                          Existing audience research, surveys, or analytics we
                          can see
                        </FieldLabel>
                        <textarea
                          id="audienceResearch"
                          rows={2}
                          value={data.audienceResearch}
                          onChange={(e) =>
                            update("audienceResearch", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Drop links, summaries, or attach in your kickoff folder."
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  04 — BRAND & VOICE                                   */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="04"
                      title="Brand & voice"
                      description="What we should keep, what we should evolve."
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="brandAssets">
                          Existing brand assets — quick summary
                        </FieldLabel>
                        <textarea
                          id="brandAssets"
                          rows={3}
                          value={data.brandAssets}
                          onChange={(e) =>
                            update("brandAssets", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Quick rundown of what you already have — logo, colours, fonts, photography, guidelines — and what's still missing or out of date."
                        />
                        <p className="text-xs text-gray-300 mt-2 font-light">
                          No need to send files here — we&apos;ll share a
                          Google Drive folder during kickoff for you to upload
                          logos, guidelines, photography, and any other
                          source files.
                        </p>
                      </div>
                      <div>
                        <FieldLabel htmlFor="brandTone">
                          How should the brand sound?
                        </FieldLabel>
                        <input
                          id="brandTone"
                          value={data.brandTone}
                          onChange={(e) => update("brandTone", e.target.value)}
                          className={inputClass}
                          placeholder="e.g. warm and human, sharp and technical, confidently casual…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="brandDosAndDonts">
                          Brand do&apos;s and don&apos;ts
                        </FieldLabel>
                        <textarea
                          id="brandDosAndDonts"
                          rows={3}
                          value={data.brandDosAndDonts}
                          onChange={(e) =>
                            update("brandDosAndDonts", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Words to use, words to avoid, visual moves we should never make."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="competitorBrandsToAvoid">
                          Brands you don&apos;t want to look like
                        </FieldLabel>
                        <textarea
                          id="competitorBrandsToAvoid"
                          rows={2}
                          value={data.competitorBrandsToAvoid}
                          onChange={(e) =>
                            update("competitorBrandsToAvoid", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Just as useful as the ones you admire — names + a sentence on why."
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  05 — SITE / PRODUCT SPECIFICS                        */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="05"
                      title="What we're building"
                      description="The structural and technical specifics."
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel>
                          Pages we need (pick all that apply)
                        </FieldLabel>
                        <CheckboxGrid
                          options={PAGES_NEEDED}
                          selected={data.pagesNeeded}
                          onToggle={(v) => toggle("pagesNeeded", v)}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="pageCount">
                          Roughly how many total unique page templates?
                        </FieldLabel>
                        <input
                          id="pageCount"
                          value={data.pageCount}
                          onChange={(e) =>
                            update("pageCount", e.target.value)
                          }
                          className={inputClass}
                          placeholder="e.g. 8 page types, plus 50 dynamically generated case study pages"
                        />
                        <p className="text-xs text-gray-300 mt-2 font-light">
                          We&apos;re asking about distinct templates, not total
                          URLs. A blog with 100 posts is one template.
                        </p>
                      </div>
                      <div>
                        <FieldLabel>
                          Features we need (pick all that apply)
                        </FieldLabel>
                        <CheckboxGrid
                          options={FEATURES_NEEDED}
                          selected={data.featuresNeeded}
                          onToggle={(v) => toggle("featuresNeeded", v)}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="techStack" optional>
                          Tech stack constraints
                        </FieldLabel>
                        <input
                          id="techStack"
                          value={data.techStack}
                          onChange={(e) => update("techStack", e.target.value)}
                          className={inputClass}
                          placeholder="e.g. must run on Webflow, must be Next.js, prefer no headless CMS…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="integrations" optional>
                          Integrations we need to support
                        </FieldLabel>
                        <textarea
                          id="integrations"
                          rows={2}
                          value={data.integrations}
                          onChange={(e) =>
                            update("integrations", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="HubSpot, Stripe, Calendly, Segment, Klaviyo — anything the new site has to talk to."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="hostingProvider" optional>
                          Where does the site live today?
                        </FieldLabel>
                        <input
                          id="hostingProvider"
                          value={data.hostingProvider}
                          onChange={(e) =>
                            update("hostingProvider", e.target.value)
                          }
                          className={inputClass}
                          placeholder="Vercel, Netlify, AWS, GoDaddy, your nephew's basement…"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  06 — INSPIRATION & COMPETITORS                       */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="06"
                      title="References"
                      description="What's working out there — and what's not."
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="inspirationLinks">
                          3–5 sites or brands you admire
                        </FieldLabel>
                        <textarea
                          id="inspirationLinks"
                          rows={3}
                          value={data.inspirationLinks}
                          onChange={(e) =>
                            update("inspirationLinks", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Drop links — one per line. They don't have to be in your industry."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="inspirationWhy">
                          What specifically do you like about each one?
                        </FieldLabel>
                        <textarea
                          id="inspirationWhy"
                          rows={3}
                          value={data.inspirationWhy}
                          onChange={(e) =>
                            update("inspirationWhy", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Layout, tone, motion, photography style, navigation, the way they explain pricing — be specific."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="competitors">
                          Direct competitors we should look at
                        </FieldLabel>
                        <textarea
                          id="competitors"
                          rows={2}
                          value={data.competitors}
                          onChange={(e) =>
                            update("competitors", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Names + URLs."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="competitorNotes">
                          Where are they doing it right? Where are they
                          missing the mark?
                        </FieldLabel>
                        <textarea
                          id="competitorNotes"
                          rows={3}
                          value={data.competitorNotes}
                          onChange={(e) =>
                            update("competitorNotes", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="What do they do that you envy? What do they do that you'd never copy?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  07 — ACCOUNTS & ACCESS                                */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="07"
                      title="Accounts & access"
                      description="The third-party accounts we'll need to touch."
                    />
                    <p className="text-sm text-gray-400 font-light mb-6 -mt-4">
                      Don&apos;t share passwords here. Once we kick off
                      we&apos;ll send you a secure 1Password vault to share
                      credentials safely. For now, just tell us what exists
                      and where.
                    </p>
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="domainRegistrar">
                          Domain registrar
                        </FieldLabel>
                        <input
                          id="domainRegistrar"
                          value={data.domainRegistrar}
                          onChange={(e) =>
                            update("domainRegistrar", e.target.value)
                          }
                          className={inputClass}
                          placeholder="GoDaddy, Namecheap, Cloudflare, Google Domains…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="emailServiceProvider">
                          Email service provider (newsletter / lifecycle)
                        </FieldLabel>
                        <input
                          id="emailServiceProvider"
                          value={data.emailServiceProvider}
                          onChange={(e) =>
                            update("emailServiceProvider", e.target.value)
                          }
                          className={inputClass}
                          placeholder="Mailchimp, Klaviyo, ConvertKit, Customer.io, none yet…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="analyticsAccounts">
                          Analytics & tracking
                        </FieldLabel>
                        <input
                          id="analyticsAccounts"
                          value={data.analyticsAccounts}
                          onChange={(e) =>
                            update("analyticsAccounts", e.target.value)
                          }
                          className={inputClass}
                          placeholder="GA4, Plausible, PostHog, Segment, GTM, Mixpanel…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="socialAccounts">
                          Social accounts to link / embed
                        </FieldLabel>
                        <input
                          id="socialAccounts"
                          value={data.socialAccounts}
                          onChange={(e) =>
                            update("socialAccounts", e.target.value)
                          }
                          className={inputClass}
                          placeholder="LinkedIn, X, Instagram, YouTube, TikTok…"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="otherAccounts" optional>
                          Anything else we&apos;ll need access to
                        </FieldLabel>
                        <textarea
                          id="otherAccounts"
                          rows={2}
                          value={data.otherAccounts}
                          onChange={(e) =>
                            update("otherAccounts", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="CRM, payment processor, support tool, embed scripts, internal tools…"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  08 — LOGISTICS                                        */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="08"
                      title="Logistics"
                      description="The stuff that derails projects when we don't talk about it."
                    />
                    <div className="space-y-6">
                      <div>
                        <FieldLabel htmlFor="contentStatus">
                          Content readiness
                        </FieldLabel>
                        <select
                          id="contentStatus"
                          value={data.contentStatus}
                          onChange={(e) =>
                            update("contentStatus", e.target.value)
                          }
                          className={inputClass}
                        >
                          <option value="">Select an option</option>
                          {CONTENT_STATUS.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel htmlFor="assetStatus">
                          Photography & visual assets
                        </FieldLabel>
                        <select
                          id="assetStatus"
                          value={data.assetStatus}
                          onChange={(e) =>
                            update("assetStatus", e.target.value)
                          }
                          className={inputClass}
                        >
                          <option value="">Select an option</option>
                          {ASSET_STATUS.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel htmlFor="decisionProcess">
                          How will decisions get made?
                        </FieldLabel>
                        <select
                          id="decisionProcess"
                          value={data.decisionProcess}
                          onChange={(e) =>
                            update("decisionProcess", e.target.value)
                          }
                          className={inputClass}
                        >
                          <option value="">Select an option</option>
                          {DECISION_PROCESS.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <FieldLabel htmlFor="hardDeadlines">
                          Hard deadlines or fixed dates we need to hit
                        </FieldLabel>
                        <textarea
                          id="hardDeadlines"
                          rows={2}
                          value={data.hardDeadlines}
                          onChange={(e) =>
                            update("hardDeadlines", e.target.value)
                          }
                          className={`${inputClass} resize-none`}
                          placeholder="Investor meetings, conference launches, fiscal year end — anything immovable."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="blockers">
                          Anything you&apos;re worried might block us?
                        </FieldLabel>
                        <textarea
                          id="blockers"
                          rows={3}
                          value={data.blockers}
                          onChange={(e) => update("blockers", e.target.value)}
                          className={`${inputClass} resize-none`}
                          placeholder="Slow legal, unclear ownership, an internal stakeholder who wasn't in the sales conversations — better to flag it now than discover it in week 4."
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="notes" optional>
                          Anything else we should know?
                        </FieldLabel>
                        <textarea
                          id="notes"
                          rows={3}
                          value={data.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          className={`${inputClass} resize-none`}
                          placeholder="Anything that didn't fit anywhere else."
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====================================================
                  /  09 — ACKNOWLEDGEMENTS                                 */}
                  <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10">
                    <SectionHeader
                      step="09"
                      title="The ground rules"
                      description="A few things we want to make sure we're aligned on."
                    />
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={data.ackScope}
                          onChange={(e) =>
                            update("ackScope", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 rounded border-gray-200 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">
                          <span className="font-medium">Scope.</span>{" "}
                          I&apos;ve read our agreed scope of work and
                          understand what is and isn&apos;t included. Anything
                          new beyond that scope will be discussed and may
                          require an additional engagement.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={data.ackRevisions}
                          onChange={(e) =>
                            update("ackRevisions", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 rounded border-gray-200 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">
                          <span className="font-medium">Revisions.</span>{" "}
                          I understand the project includes a defined number
                          of revision rounds with a 48-hour feedback window
                          per round. Additional rounds beyond that can be
                          scoped separately.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={data.ackDeadlines}
                          onChange={(e) =>
                            update("ackDeadlines", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 rounded border-gray-200 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-600 font-light leading-relaxed">
                          <span className="font-medium">Deadlines.</span> I
                          understand my team is responsible for delivering
                          content, assets, and feedback on time, and that
                          delays on our side may push the project timeline.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* ====================================================
                  /  ERROR + SUBMIT                                       */}
                  {error && (
                    <div className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 font-light max-w-md">
                      We&apos;ll review everything and follow up within 1–2
                      business days with a kickoff agenda.
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      className={`inline-flex items-center bg-gray-600 text-white py-3 px-8 rounded-full text-base font-medium transition-all hover:bg-gray-500 hover:scale-105 ${
                        sending ? "opacity-50 pointer-events-none" : ""
                      }`}
                    >
                      {sending ? "Sending…" : "Submit kickoff details"}
                      {!sending && (
                        <svg
                          className="w-3 h-3 fill-current ml-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
