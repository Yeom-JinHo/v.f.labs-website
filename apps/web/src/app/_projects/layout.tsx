import { Footer, Header } from "@/components/sections";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
