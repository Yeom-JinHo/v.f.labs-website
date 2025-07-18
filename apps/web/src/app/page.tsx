import Cursor from "@/components/cursor/cursor";
import {
  About,
  ArtistProfiles,
  Footer,
  Header,
  Hero,
} from "@/components/sections";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          {/* <Skills />
          <Projects />
          <Experience />
          <Testimonials /> */}
          <ArtistProfiles />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
