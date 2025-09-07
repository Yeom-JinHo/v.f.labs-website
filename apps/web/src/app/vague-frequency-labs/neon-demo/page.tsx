import React from "react";
import { NeonGradientCard } from "@/components/common/neon-gradient-card";
import { NeonGradientCardASIS } from "@/components/common/neon-gradient-card-asis";
import TextReveal from "@/components/fancy/text-reveal";

export default function DemoPage() {
  return (
    <main className="my-14 flex-1">
      <section className="relative flex min-h-[calc(50dvh)] items-center justify-center">
        <div className="flex w-screen max-w-[50vw] max-w-screen flex-col items-center p-20">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            TOBE
          </TextReveal>
          <NeonGradientCard className="w-[200px] items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Neon Gradient Card
            </span>
          </NeonGradientCard>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed mt-10 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            ASIS
          </TextReveal>
          <NeonGradientCardASIS className="w-[200px] items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Neon Gradient Card
            </span>
          </NeonGradientCardASIS>
        </div>
      </section>
    </main>
  );
}
