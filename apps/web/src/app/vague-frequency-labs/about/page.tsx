import type { Organization, WithContext } from "schema-dts";
import React from "react";
import Image from "next/image";
import { metadata as meta } from "@/app/config";
import Globe from "@/components/common/Globe";
import KnobSection from "@/components/common/KnobSection";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { COMPANY_SHORT_NAME } from "@/consts/company";
import { createMetadata } from "@/lib/metadata";

const title = "About";
const description = "Learn more about Vague Frequency Laboratory";

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: "/about",
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
});

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vague Frequency Laboratory",
  description:
    "An independent music label focused on experimental and innovative electronic music",
  url: `${meta.site.url}/vague-frequency-labs/about`,
  sameAs: [meta.site.url],
  founder: {
    "@type": "Person",
    name: "Vague Frequency Laboratory Team",
  },
  foundingDate: "2024",
  knowsAbout: [
    "Electronic Music",
    "Experimental Music",
    "Music Production",
    "Sound Design",
    "Audio Engineering",
    "Ambient Music",
    "IDM",
  ],
};

export default function AboutPage(): React.ReactElement {
  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="about"
      >
        <div className="flex w-screen flex-col items-center">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            About
          </TextReveal>
          <Line className={"m-16"} />
          <div className="flex flex-col items-center justify-center">
            <span
              className="pointer-events-none inset-0 text-4xl whitespace-nowrap"
              style={{
                width: "100%",
                color: "white",
                WebkitTextStroke: "1px white",
                borderRight: "6px solid white",
                overflow: "hidden",
                filter: "drop-shadow(0 0 3px white)",
              }}
            >
              We play worldwide
            </span>
          </div>
          <Globe />
          <KnobSection />
          <Image
            src={`/images/logo/400_300/${COMPANY_SHORT_NAME.VAGUE_FREQUENCY_LABS}.png`}
            alt="Vague Frequency Laboratory"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </main>
  );
}
