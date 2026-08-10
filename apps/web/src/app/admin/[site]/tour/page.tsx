import { ADMIN_MODULE } from "@repo/site-config";

import { ModulePage } from "../../_components/module-page";
import { requireModule } from "../../_lib/guard";

export default async function AdminTourPage({
  params,
}: {
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;
  const { site: resolvedSite } = await requireModule(site, ADMIN_MODULE.TOUR);

  return <ModulePage site={resolvedSite} module={ADMIN_MODULE.TOUR} />;
}
