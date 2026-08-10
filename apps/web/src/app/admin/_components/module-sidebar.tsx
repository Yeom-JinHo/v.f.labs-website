"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Site } from "@repo/site-config";
import {
  ADMIN_MODULE_LABEL,
  adminModulePath,
  getEnabledModules,
  SITE_SHORT_LABEL,
} from "@repo/site-config";
import { cn } from "@repo/ui";

export function ModuleSidebar({ site }: { site: Site }) {
  const pathname = usePathname();

  return (
    <aside className="border-border w-52 shrink-0 border-r p-3">
      <Link
        href={`/admin/${site}`}
        className="text-muted-foreground block px-2 text-xs font-medium tracking-wide uppercase"
      >
        {SITE_SHORT_LABEL[site]}
      </Link>

      <nav className="mt-3 flex flex-col gap-1">
        {getEnabledModules(site).map((module) => {
          const href = adminModulePath(site, module);
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={module}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "hover:bg-accent rounded-md px-2 py-1.5 text-sm transition-colors",
                isActive && "bg-accent font-medium",
              )}
            >
              {ADMIN_MODULE_LABEL[module]}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
