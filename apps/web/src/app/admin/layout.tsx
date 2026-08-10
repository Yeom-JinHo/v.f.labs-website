import type { Metadata } from "next";
import Link from "next/link";

import { requireAdminSession } from "./_lib/guard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await requireAdminSession();

  return (
    <div className="bg-background text-foreground flex min-h-[100dvh] flex-col">
      <header className="border-border flex h-14 shrink-0 items-center justify-between border-b px-4">
        <Link
          href="/admin"
          className="text-sm font-semibold tracking-tight uppercase"
        >
          Admin
        </Link>
        <span className="text-muted-foreground text-xs">
          {session.user.email}
        </span>
      </header>
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
