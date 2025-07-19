import Cursor from "@/components/cursor/cursor";
import { Footer, Header } from "@/components/sections";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </>
  );
}
