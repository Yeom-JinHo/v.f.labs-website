import React from "react";
import { Safari } from "@/components/common/safari";
import TextReveal from "@/components/fancy/text-reveal";

export default function DemoPage() {
  return (
    <main className="my-14 flex-1">
      <section className="relative flex min-h-[calc(50dvh)] items-center justify-center">
        <div className="flex w-[50vw] w-screen max-w-screen flex-col items-center p-20">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            TOBE
          </TextReveal>
          <Safari
            className="h-full w-full"
            videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
          />
        </div>
      </section>
    </main>
  );
}
