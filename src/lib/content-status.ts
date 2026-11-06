import { isProduction } from "./site-url";

/**
 * Content-verification gate.
 *
 * Anything not yet verified against a client source document is wrapped in
 * <Draft> or <ContentSlot>. Those render on previews and local dev (clearly
 * marked) so the client can review, and are HIDDEN on the live production
 * deployment, so unverified claims can never reach the public.
 *
 * Override (not recommended): SHOW_DRAFT_CONTENT=true
 */
export function showDrafts(): boolean {
  if (process.env.SHOW_DRAFT_CONTENT === "true") return true;
  return !isProduction();
}
