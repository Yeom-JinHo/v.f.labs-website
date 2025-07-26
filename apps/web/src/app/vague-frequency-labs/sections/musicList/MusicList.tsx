"use client";

import type { MusicInfo } from "@/types/music";
import React, { useState } from "react";
import { musicInfo } from "@/app/source";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

import MusicInfoCard from "./MusicInfoCard";

function MusicList() {
  const musicInfos = [
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
    ...musicInfo.getInfos(),
  ];

  const [selectedMusicInfo, setSelectedMusicInfo] = useState<MusicInfo | null>(
    null,
  );

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="grid gap-10">
        <div className="flex w-full flex-col items-center justify-center px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              Artist Profiles
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 lg:mt-0 lg:block lg:w-[35%] dark:text-gray-400">
            Vague Frequency Laboratory
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-32">
            {musicInfos.map((info, index) => (
              <MusicInfoCard
                musicInfo={info}
                key={info.name + index}
                isSelected={selectedMusicInfo?.name === info.name}
                setSelectedMusicInfo={setSelectedMusicInfo}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedMusicInfo && (
        <div className="fixed bottom-0 left-0 flex h-[200px] w-screen items-center justify-center p-4">
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4"
            style={{
              backdropFilter: "blur(11px) saturate(200%)",
              WebkitBackdropFilter: "blur(11px) saturate(200%)",
              backgroundColor: "rgba(17, 25, 40, 0.27)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <div>{selectedMusicInfo.name}</div>
            <div>{selectedMusicInfo.artist}</div>
          </div>
        </div>
      )}
    </MotionWrap>
  );
}

export default MusicList;
