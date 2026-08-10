import { cache } from "react";
import { notFound } from "next/navigation";

import type { AdminModule, Site } from "@repo/site-config";
import { getSession } from "@repo/auth";
import { isModuleEnabled, isSite } from "@repo/site-config";

export type AdminSession = NonNullable<Awaited<ReturnType<typeof getSession>>>;

/**
 * Deduped for the lifetime of a request. A layout and the page it wraps both
 * guard themselves, which would otherwise cost two session lookups per render.
 */
const getCachedSession = cache(getSession);

/**
 * Every admin page guards itself rather than leaning on `admin/layout.tsx`:
 * a layout is not guaranteed to re-render for a given request, so a layout-only
 * check is not an access control.
 *
 * Non-admins get a 404 rather than a 403, so the admin surface stays
 * undiscoverable.
 */
export const requireAdminSession = async (): Promise<AdminSession> => {
  const session = await getCachedSession();
  if (!session || session.user.role !== "admin") notFound();
  return session;
};

/** Narrows a raw `[site]` route param behind the admin check. */
export const requireAdminSite = async (
  site: string,
): Promise<{ session: AdminSession; site: Site }> => {
  const session = await requireAdminSession();
  if (!isSite(site)) notFound();
  return { session, site };
};

/**
 * The guard that actually enforces `SITE_ADMIN_MODULES`. Leaving a module out
 * of the sidebar is cosmetic — this is what stops someone typing
 * `/admin/celebrate-agency/tour` by hand.
 *
 * Call it from every module page *and* from every server action that reads or
 * writes that module's rows; a page-level check does not cover actions.
 */
export const requireModule = async (
  site: string,
  module: AdminModule,
): Promise<{ session: AdminSession; site: Site }> => {
  const { session, site: resolvedSite } = await requireAdminSite(site);
  if (!isModuleEnabled(resolvedSite, module)) notFound();
  return { session, site: resolvedSite };
};
