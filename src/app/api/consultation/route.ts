import { NextResponse } from "next/server";
import { contactData } from "@/data/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ── Limits ─────────────────────────────────────────────────────────────── */
const MAX = { fullName: 120, organization: 160, role: 120, email: 254, phone: 40, message: 4000 };
const ALLOWED_INTERESTS = new Set(contactData.form.interestOptions.map((o) => o.value));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 1500; // humans cannot complete the form faster

/* ── Best-effort rate limit (per warm instance; not a security boundary) ── */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  /* Same-origin only */
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, error: "forbidden" }, 403);
    } catch {
      return json({ ok: false, error: "forbidden" }, 403);
    }
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  /* Bots: honeypot filled or form completed implausibly fast → pretend success, send nothing */
  const elapsed = Number(raw.elapsedMs);
  if (clean(raw.website, 200) || (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS)) {
    return json({ ok: true });
  }

  const data = {
    fullName: clean(raw.fullName, MAX.fullName),
    organization: clean(raw.organization, MAX.organization),
    role: clean(raw.role, MAX.role),
    email: clean(raw.email, MAX.email),
    phone: clean(raw.phone, MAX.phone),
    interest: clean(raw.interest, 40),
    message: clean(raw.message, MAX.message),
    consent: raw.consent === true,
  };

  const fieldErrors: Record<string, string> = {};
  if (!data.fullName) fieldErrors.fullName = "Full name is required.";
  if (!data.organization) fieldErrors.organization = "Organization is required.";
  if (!data.email || !EMAIL_RE.test(data.email)) fieldErrors.email = "A valid email address is required.";
  if (!data.message) fieldErrors.message = "Message is required.";
  if (!data.consent) fieldErrors.consent = "Consent is required to submit.";
  if (data.interest && !ALLOWED_INTERESTS.has(data.interest)) fieldErrors.interest = "Invalid selection.";
  if (Object.keys(fieldErrors).length) return json({ ok: false, error: "validation", fieldErrors }, 400);

  /* Delivery configuration (E-15). Never fake success when unconfigured. */
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[consultation] delivery not configured: set RESEND_API_KEY, CONSULTATION_TO_EMAIL, CONSULTATION_FROM_EMAIL");
    return json({ ok: false, error: "unavailable" }, 503);
  }

  const interestLabel =
    contactData.form.interestOptions.find((o) => o.value === data.interest)?.label ?? "Not specified";

  const text = [
    "New consultation request — Kenenét Consultancy website",
    "",
    `Name:          ${oneLine(data.fullName)}`,
    `Organization:  ${oneLine(data.organization)}`,
    `Role:          ${oneLine(data.role) || "—"}`,
    `Email:         ${oneLine(data.email)}`,
    `Phone:         ${oneLine(data.phone) || "—"}`,
    `Interest:      ${interestLabel}`,
    "",
    "Message:",
    data.message,
    "",
    "—",
    "Consent to be contacted: given on the form.",
  ].join("\n");

  try {
    const res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: data.email,
        subject: oneLine(`Consultation request — ${data.organization}`).slice(0, 150),
        text,
      }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!res.ok) {
      console.error(`[consultation] provider responded ${res.status}`);
      return json({ ok: false, error: "delivery_failed" }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[consultation] provider request failed:", err instanceof Error ? err.name : "unknown");
    return json({ ok: false, error: "delivery_failed" }, 502);
  }
}

/** Anything other than POST is not part of the contract. */
export function GET() {
  return json({ ok: false, error: "method_not_allowed" }, 405);
}
