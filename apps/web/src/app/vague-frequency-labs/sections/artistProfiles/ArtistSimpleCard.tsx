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
      <div className="group relative h-[400px] w-[300px] overflow-hidden object-cover md:h-[520px] md:w-[350px]">
        {/* 기본 이미지 */}
        {artist.name === ARTIST_NAME.LOOZBONE ||
        artist.name === ARTIST_NAME.SAM ? (
          <CloudinaryImage
            src={artist.image}
            alt={`Image of ${artist.name}`}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-30"
          />
        ) : (
          <Image
            src={artist.image}
            width={1280}
            height={600}
            alt={`Image of ${artist.name}`}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-30"
            priority
          />
        )}

        {/* Hover 시 나타나는 이미지 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Image
            src={artist.logoImage}
            width={1280}
            height={600}
            alt={`Hover image of ${artist.name}`}
            className="h-auto w-full object-contain brightness-75"
            priority
          />
        </div>
      </div>
      <div className="flex grow flex-col items-end justify-between gap-4 p-4">
        <div className="flex w-full flex-col gap-2">
          <div className="l:text-3xl text-2xl leading-8 font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            <TextReveal>{artist.name}</TextReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
