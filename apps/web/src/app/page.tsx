import Main from "@/components/common/main/modern/main";
import Cursor from "@/components/cursor/cursor";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        {/* <Header /> */}
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
