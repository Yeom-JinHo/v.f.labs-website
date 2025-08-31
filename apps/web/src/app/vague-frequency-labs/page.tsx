import {
  About,
  ArtistProfiles,
  Hero,
  MusicList,
} from "@/app/vague-frequency-labs/sections/index";

export default function VagueFrequencyLabsPage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ArtistProfiles />
      <MusicList />
    </main>
  );
}
