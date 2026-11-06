/**
 * Canonical site URL.
 * Priority: NEXT_PUBLIC_SITE_URL (set once the real domain is confirmed, E-07)
 *           → Vercel production URL → local dev.
 * No domain is hard-coded: the real domain is still unconfirmed.
 */
export function getSiteUrl(): { url: string; isConfigured: boolean } {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return { url: explicit.replace(/\/$/, ""), isConfigured: true };

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return { url: `https://${vercel}`, isConfigured: true };

  return { url: "http://localhost:3000", isConfigured: false };
}

/** True only for the live production deployment. */
export function isProduction(): boolean {
  return process.env.VERCEL_ENV === "production";
}
