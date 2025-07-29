import type { CollectionPage, WithContext } from "schema-dts";
import React from "react";
import Image from "next/image";
import { metadata as meta } from "@/app/config";
import { artistProfile, project } from "@/app/source";
import { CloudinaryImage } from "@/components/cloudinary-image";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { ARTIST_NAME } from "@/consts/artist";
import { createMetadata } from "@/lib/metadata";

const title = "Artist";
const description = "Here are some artist I have worked on.";

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: "/artist",
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
  url: `${meta.site.url}/artist`,
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

export default function ProjectsPage(): React.ReactElement {
  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Artist
          </TextReveal>

          <Line className={"m-16"} />
          <div className="flex flex-wrap justify-center gap-16">
            {artistProfile.getPages().map((artist, index) => (
              <div key={index}>
                <div className="h-[300px] w-full object-cover md:h-[520px]">
                  {artist.name === ARTIST_NAME.LOOZBONE ||
                  artist.name === ARTIST_NAME.SAM ? (
                    <CloudinaryImage
                      src={artist.image}
                      alt={`Image of ${artist.name}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={artist.image}
                      width={1280}
                      height={600}
                      alt={`Image of ${artist.name}`}
                      className="h-full w-full object-cover"
                      priority
                    />
                  )}
                </div>
                <div className="l:p-6 flex grow flex-col items-end justify-between gap-4 p-4">
                  <div className="flex w-full flex-col gap-2">
                    <div className="l:text-3xl text-2xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                      <TextReveal>{artist.name}</TextReveal>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
