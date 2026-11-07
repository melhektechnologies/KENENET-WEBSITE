import { NextResponse } from "next/server";
import { interestOptions } from "@/data/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ── Limits ─────────────────────────────────────────────────────────────── */
const MAX = { fullName: 120, organization: 160, email: 254, phone: 40, message: 4000 };
const ALLOWED_INTERESTS = new Set(interestOptions.map((o) => o.value).filter(Boolean));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 12 * 1024;

/* ── Best-effort rate limit (per warm instance; not a security boundary) ── */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 2000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (!hits.has(ip) && hits.size >= MAX_TRACKED_IPS) {
    for (const [key, timestamps] of hits) {
      const active = timestamps.filter((t) => now - t < WINDOW_MS);
      if (active.length) hits.set(key, active);
      else hits.delete(key);
    }
    if (hits.size >= MAX_TRACKED_IPS) return true;
  }
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

function json(body: Record<string, unknown>, status = 200, extraHeaders: Record<string, string> = {}) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extraHeaders },
  });
}

class BodyTooLargeError extends Error {}

async function readJsonObject(request: Request): Promise<Record<string, unknown>> {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("missing_body");

  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel().catch(() => undefined);
      throw new BodyTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const value: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body));
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("invalid_body");
  return value as Record<string, unknown>;
}

export async function POST(request: Request) {
  /* Require an explicit same-origin browser request. */
  const origin = request.headers.get("origin");
  if (!origin) return json({ ok: false, error: "forbidden" }, 403);
  try {
    if (new URL(origin).origin !== new URL(request.url).origin) {
      return json({ ok: false, error: "forbidden" }, 403);
    }
  } catch {
    return json({ ok: false, error: "forbidden" }, 403);
  }

  // Platform-set headers first: x-forwarded-for alone is client-spoofable.
  const ip =
    (request.headers.get("x-real-ip") ||
      request.headers.get("x-vercel-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-forwarded-for")?.split(",")[0])
      ?.trim()
      .slice(0, 64) || "unknown";
  if (rateLimited(ip)) {
    return json({ ok: false, error: "rate_limited" }, 429, { "Retry-After": String(WINDOW_MS / 1000) });
  }

  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") return json({ ok: false, error: "unsupported_media_type" }, 415);

  const contentLength = request.headers.get("content-length");
  if (contentLength !== null) {
    if (!/^\d+$/.test(contentLength)) return json({ ok: false, error: "invalid_request" }, 400);
    if (Number(contentLength) > MAX_BODY_BYTES) return json({ ok: false, error: "payload_too_large" }, 413);
  }

  let raw: Record<string, unknown>;
  try {
    raw = await readJsonObject(request);
  } catch (error) {
    if (error instanceof BodyTooLargeError) {
      return json({ ok: false, error: "payload_too_large" }, 413);
    }
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  /* A filled honeypot is ignored; valid submissions must reach the mail provider. */
  if (clean(raw.website, 200)) {
    return json({ ok: true });
  }

  const data = {
    fullName: clean(raw.fullName, MAX.fullName),
    organization: clean(raw.organization, MAX.organization),
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
    interestOptions.find((o) => o.value === data.interest)?.label ?? "Not specified";

  const text = [
    "New inquiry — Kenenét Consultancy website",
    "",
    `Name:          ${oneLine(data.fullName)}`,
    `Organization:  ${oneLine(data.organization)}`,
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
        subject: oneLine(`Website inquiry — ${data.organization}`).slice(0, 150),
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
