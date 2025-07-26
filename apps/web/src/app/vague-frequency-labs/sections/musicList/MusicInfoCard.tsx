"use client";

import type { MusicInfo } from "@/types/music";
import React from "react";
import Image from "next/image";

interface MusicInfoProps {
  musicInfo: MusicInfo;
}

function MusicInfoCard({ musicInfo }: MusicInfoProps) {
  return (
    <div>
      <Image
        src={musicInfo.image}
        alt={musicInfo.name}
        width={300}
        height={300}
        className="h-full w-full object-cover"
      ></Image>
    </div>
  );
}

export default MusicInfoCard;
