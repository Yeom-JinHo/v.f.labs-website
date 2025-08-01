"use client";

import React from "react";
import Link from "next/link";
import { musicInfo } from "@/app/source";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

import MusicInfoCard from "./MusicInfoCard";

function MusicList() {
  const dummyMusicInfos = [
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
  ];

  const musicInfos = dummyMusicInfos.slice(0, 9);

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="music-list">
      <div className="grid gap-10">
        <div className="flex w-full flex-col items-center justify-center px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              Music
            </TextReveal>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-16">
            {musicInfos.map((info, index) => (
              <MusicInfoCard musicInfo={info} key={info.name + index} />
            ))}
          </div>
          <Link href="/vague-frequency-labs/music">
            <Button className="mt-12">
              <Icons.add className="mr-2 h-4 w-4" />
              More
            </Button>
          </Link>
        </div>
      </div>
    </MotionWrap>
  );
}

export default MusicList;
