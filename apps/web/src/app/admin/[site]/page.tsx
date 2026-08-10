import Link from "next/link";

import {
  ADMIN_MODULE_LABEL,
  adminModulePath,
  getEnabledModules,
  SITE_LABEL,
} from "@repo/site-config";

import { requireAdminSite } from "../_lib/guard";

export default async function AdminSiteOverviewPage({
  params,
}: {
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;
  const { site: resolvedSite } = await requireAdminSite(site);

  return (
    <>
      <h1 className="text-lg font-semibold tracking-tight">
        {SITE_LABEL[resolvedSite]}
      </h1>
      <p className="text-muted-foreground mt-1 text-sm">
        Modules enabled for this site.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {getEnabledModules(resolvedSite).map((module) => (
          <li key={module}>
            <Link
              href={adminModulePath(resolvedSite, module)}
              className="border-border hover:bg-accent block rounded-lg border p-4 text-sm font-medium transition-colors"
            >
              {ADMIN_MODULE_LABEL[module]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
