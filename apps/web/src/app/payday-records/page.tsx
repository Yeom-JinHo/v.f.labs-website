import About from "./sections/about/about";
import Hero from "./sections/hero/hero";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Hero />
        <About />
      </main>
    </div>
  );
}
