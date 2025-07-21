import Cursor from "@/components/cursor/cursor";
import { Header } from "@/components/sections";
import Main from "@/components/sections/main/modern/main";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <Main />
          {/* <Hero /> */}
          {/* <About /> */}
          {/* <Skills />
          <Projects />
          <Experience />
          <Testimonials /> */}
          {/* <ArtistProfiles /> */}
        </main>
        <footer>{/* <Footer /> */}</footer>
      </div>
      <Cursor />
    </>
  );
}
