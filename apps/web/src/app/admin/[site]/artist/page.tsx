import { ADMIN_MODULE } from "@repo/site-config";

import { ModulePage } from "../../_components/module-page";
import { requireModule } from "../../_lib/guard";

export default async function AdminArtistPage({
  params,
}: {
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;
  const { site: resolvedSite } = await requireModule(site, ADMIN_MODULE.ARTIST);

  return <ModulePage site={resolvedSite} module={ADMIN_MODULE.ARTIST} />;
}
