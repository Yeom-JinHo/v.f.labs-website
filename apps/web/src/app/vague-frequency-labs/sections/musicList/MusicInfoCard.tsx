"use client";

import type { MusicInfo } from "@/types/music";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MusicInfoProps {
  musicInfo: MusicInfo;
}

function MusicInfoCard({ musicInfo }: MusicInfoProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="width-[360px] h-[360px]">
      <motion.div
        onHoverStart={() => setIsAnimating(true)}
        onHoverEnd={() => setIsAnimating(false)}
        animate={
          isAnimating
            ? {
                rotate: [0, 360],
                borderRadius: "50%",
              }
            : {
                rotate: 0,
                borderRadius: "0%",
              }
        }
        transition={
          isAnimating
            ? {
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                borderRadius: { duration: 0.4 },
              }
            : {
                duration: 0.4,
              }
        }
        onTap={() => setIsAnimating(true)}
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
      {isAnimating && (
        <>
          <div className="text-3xl">{musicInfo.name}</div>
          <div className="text-xl">{musicInfo.artist}</div>
        </>
      )}
    </div>
  );
}

export default MusicInfoCard;
