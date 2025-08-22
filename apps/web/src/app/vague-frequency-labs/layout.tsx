import { Footer, Header } from "@/app/vague-frequency-labs/sections/index";

export default function VagueFrequencyLabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="my-2 flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
