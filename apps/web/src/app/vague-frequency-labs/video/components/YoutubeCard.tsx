"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { BlurFade } from "@/components/common/BlurFade";

interface YoutubeCardProps {
  id: string;
  title: string;
}

export default function YoutubeCard({ id, title }: YoutubeCardProps) {
  return (
    <BlurFade inView duration={0.6}>
      <div className="relative w-full p-8 md:w-[640px]">
        <LiteYouTubeEmbed id={id} title={title} />
        <p className="mt-2 text-xl font-bold">{title}</p>
      </div>
    </BlurFade>
  );
}
