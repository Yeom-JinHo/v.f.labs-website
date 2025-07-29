import type { ArtistProfile } from "@/types/artist";
import React from "react";
import Image from "next/image";
import { CloudinaryImage } from "@/components/cloudinary-image";
import TextReveal from "@/components/fancy/text-reveal";
import { ARTIST_NAME } from "@/consts/artist";

interface ArtistSimpleCardProps {
  artist: ArtistProfile;
}

export default function ArtistSimpleCard({ artist }: ArtistSimpleCardProps) {
  return (
    <div>
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
  );
}
