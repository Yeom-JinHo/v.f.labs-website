"use client";

import type { MusicInfo } from "@/types/music";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MusicInfoProps {
  musicInfo: MusicInfo;
  isSelected: boolean;
  setSelectedMusicInfo: (musicInfo: MusicInfo | null) => void;
}

function MusicInfoCard({
  musicInfo,
  isSelected,
  setSelectedMusicInfo,
}: MusicInfoProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="width-[360px] h-[360px]">
      <motion.div
        onHoverStart={() => {
          setIsHovering(true);
          setSelectedMusicInfo(null);
        }}
        onHoverEnd={() => setIsHovering(false)}
        animate={
          isSelected
            ? {
                rotate: [0, 360],
                borderRadius: "50%",
                scale: 1,
              }
            : isHovering
              ? {
                  rotate: 0,
                  borderRadius: "0%",
                  scale: 1.2,
                }
              : {
                  rotate: 0,
                  borderRadius: "0%",
                  scale: 1,
                }
        }
        transition={
          isSelected
            ? {
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                borderRadius: { duration: 0.4 },
                scale: { duration: 0.4 },
              }
            : {
                rotate: 0,
                borderRadius: { duration: 0.4 },
                scale: { duration: 0.4 },
                duration: 0.4,
              }
        }
        onTap={() => setSelectedMusicInfo(musicInfo)}
        className="overflow-hidden"
      >
        <Image
          src={musicInfo.image}
          alt={musicInfo.name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        ></Image>
      </motion.div>
      {isSelected && (
        <>
          <div className="text-3xl">{musicInfo.name}</div>
          <div className="text-xl">{musicInfo.artist}</div>
        </>
      )}
    </div>
  );
}

export default MusicInfoCard;
