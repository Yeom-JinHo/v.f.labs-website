import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { metadata as meta } from "@/app/config";
import { project } from "@/app/source";
import { contact } from "@/components/sections/contact/config";
import { createMetadata } from "@/lib/metadata";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";
import { Separator } from "@repo/ui/separator";

export function generateStaticParams({
  params,
}: {
  params: { artistName: string };
}) {
  const { artistName } = params;
  // @ts-expect-error issue with fumadocs
  return project.generateParams([artistName]);
}

export async function generateMetadata(props: {
  params: Promise<{ artistName: string }>;
}) {
  const params = await props.params;
  const { artistName } = params;
  // const page = project.getPage([artistName]);
  // if (!page) notFound();
  const page = {
    data: {
      title: "123",
      description: "123",
    },
  };

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: "article",
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/person/${artistName}.png`,
          type: "image/png",
        },
      ],
      authors: meta.author.name,
      // modifiedTime: page.data.date.toISOString()
    },
    twitter: {
      images: [
        {
          alt: "banner",
          width: 1200,
          height: 630,
          url: `/images/person/${artistName}.png`,
        },
      ],
    },
  }) satisfies Metadata;
}

export default async function ProjectPage(props0: {
  params: Promise<{ artistName: string }>;
}) {
  const params = await props0.params;
  const { artistName } = params;
  // const page = project.getPage([artistName]);
  // if (!page) notFound();

  // const {
  //   data: { body },
  // } = page;

  return (
    <main className="my-14 flex-1">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {artistName}
        </h2>
        <Image
          src={`/images/person/${artistName}.png`}
          width={1280}
          height={1000}
          alt={`Image of ${artistName}`}
          className="my-12 aspect-video h-auto w-full rounded-lg object-cover"
        />
        <div className="mt-2 flex gap-1">
          {contact.socials.map(({ Icon, name, href }, index) => (
            <Link
              target="_blank"
              href={href}
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-min w-min gap-1 p-0",
              )}
              key={`contact-social_${index}`}
            >
              {Icon && <Icon className="size-6" />}
            </Link>
          ))}
        </div>
      </div>
      <Separator />
    </main>
  );
}
