import type { AdminModule, Site } from "@repo/site-config";
import { ADMIN_MODULE_LABEL, SITE_LABEL } from "@repo/site-config";

/**
 * Shared frame for a module's index route. The list/table replaces the empty
 * state once the module has a data layer behind it.
 */
export function ModulePage({
  site,
  module,
}: {
  site: Site;
  module: AdminModule;
}) {
  return (
    <>
      <p className="text-muted-foreground text-xs tracking-wide uppercase">
        {SITE_LABEL[site]}
      </p>
      <h1 className="mt-1 text-lg font-semibold tracking-tight">
        {ADMIN_MODULE_LABEL[module]}
      </h1>

      <div className="border-border text-muted-foreground mt-6 rounded-lg border border-dashed p-8 text-center text-sm">
        No <code>{module}</code> data source yet — this content still lives in{" "}
        <code>src/app/source.ts</code>.
      </div>
    </>
  );
}
