export default function PaydayRecordsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
