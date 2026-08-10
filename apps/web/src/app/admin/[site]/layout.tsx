import { ModuleSidebar } from "../_components/module-sidebar";
import { requireAdminSite } from "../_lib/guard";

export default async function AdminSiteLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ site: string }>;
}>) {
  const { site } = await params;
  const { site: resolvedSite } = await requireAdminSite(site);

  return (
    <>
      <ModuleSidebar site={resolvedSite} />
      <main className="flex-1 p-6">{children}</main>
    </>
  );
}
