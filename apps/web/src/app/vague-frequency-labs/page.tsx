import {
  About,
  ArtistProfiles,
  Footer,
  Header,
  Hero,
} from "@/app/vague-frequency-labs/sections/index";

export default function VagueFrequencyLabsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ArtistProfiles />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
