import Cursor from "@/components/cursor/cursor";
import { Footer, Header } from "@/components/sections";

export default function VagueFrequencyLabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </>
  );
}
