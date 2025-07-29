import type { CollectionPage, WithContext } from "schema-dts";
import React from "react";
import { metadata as meta } from "@/app/config";
import { project } from "@/app/source";
import KnobSection from "@/components/common/KnobSection";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { createMetadata } from "@/lib/metadata";

const title = "About";
const description = "Here are some about I have worked on.";

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

const jsonLd: WithContext<CollectionPage> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${meta.site.url}/about`,
  isPartOf: {
    "@type": "WebSite",
    name: meta.site.title,
    url: meta.site.url,
  },
  hasPart: [...project.getPages()].map((project) => ({
    "@type": "SoftwareApplication",
    name: project.data.title,
    description: project.data.description,
    url: project.url,
    applicationCategory: "WebApplication",
  })),
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
          <KnobSection />
        </div>
      </section>
    </main>
  );
}
