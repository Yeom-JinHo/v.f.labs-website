import Link from "next/link";

import {
  ADMIN_MODULE_LABEL,
  getEnabledModules,
  SITE_LABEL,
  SITES,
} from "@repo/site-config";

import { requireAdminSession } from "./_lib/guard";

export default async function AdminHomePage() {
  await requireAdminSession();

  return (
    <main className="flex-1 p-6">
      <h1 className="text-lg font-semibold tracking-tight">Sites</h1>
      <p className="text-muted-foreground mt-1 text-sm">
        Pick a site to manage. Each one exposes only the modules configured for
        it.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SITES.map((site) => (
          <li key={site}>
            <Link
              href={`/admin/${site}`}
              className="border-border hover:bg-accent block rounded-lg border p-4 transition-colors"
            >
              <span className="text-sm font-medium">{SITE_LABEL[site]}</span>
              <span className="text-muted-foreground mt-2 block text-xs">
                {getEnabledModules(site)
                  .map((module) => ADMIN_MODULE_LABEL[module])
                  .join(" · ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
