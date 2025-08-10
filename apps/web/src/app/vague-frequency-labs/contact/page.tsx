"use client";

import type { ReactElement } from "react";
import React from "react";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";

// TODO: 수정필요
// export const metadata = createMetadata({
//   title,
//   description,
//   openGraph: {
//     url: "/music",
//     title,
//     description,
//   },
//   twitter: {
//     title,
//     description,
//   },
// });

// const jsonLd: WithContext<CollectionPage> = {
//   "@context": "https://schema.org",
//   "@type": "CollectionPage",
//   name: title,
//   description,
//   url: `${meta.site.url}/music`,
//   isPartOf: {
//     "@type": "WebSite",
//     name: meta.site.title,
//     url: meta.site.url,
//   },
//   hasPart: [...project.getPages()].map((project) => ({
//     "@type": "SoftwareApplication",
//     name: project.data.title,
//     description: project.data.description,
//     url: project.url,
//     applicationCategory: "WebApplication",
//   })),
// };

export default function ContactPage(): ReactElement {
  return (
    <main className="my-14 flex-1">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Contact
          </TextReveal>

          <Line className={"m-16"} />
          <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden"></div>
        </div>
      </section>
    </main>
  );
}
