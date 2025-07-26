"use client";

import type { MusicInfo } from "@/types/music";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MusicInfoProps {
  musicInfo: MusicInfo;
}

function MusicInfoCard({ musicInfo }: MusicInfoProps) {
  return (
    <motion.div
      whileHover={{
        rotate: 360,
        borderRadius: "50%",
        transition: { duration: 0.4 },
      }}
      whileTap={{ rotate: 360, borderRadius: "50%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
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
  );
}

export default MusicInfoCard;
