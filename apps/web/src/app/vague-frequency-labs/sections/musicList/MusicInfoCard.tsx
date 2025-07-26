"use client";

import type { MusicInfo } from "@/types/music";
import React, { useState } from "react";
import {
  MorphingDialog as Dialog,
  MorphingDialogContainer as DialogContainer,
  MorphingDialogContent as DialogContent,
  MorphingDialogImage as DialogImage,
  MorphingDialogTrigger as DialogTrigger,
} from "@/components/fancy/morphing-dialog";
import { motion } from "framer-motion";

interface MusicInfoProps {
  musicInfo: MusicInfo;
}

function MusicInfoCard({ musicInfo }: MusicInfoProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <motion.div
          onHoverStart={() => {
            setIsHovering(true);
          }}
          onHoverEnd={() => setIsHovering(false)}
          className="width-[150px] md:width-[360px] h-[150px] overflow-hidden md:h-[360px]"
        >
          <DialogImage
            src={musicInfo.image}
            alt={musicInfo.name}
            className="h-full w-full object-cover"
          ></DialogImage>
        </motion.div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            backdropFilter: "blur(11px) saturate(200%)",
            WebkitBackdropFilter: "blur(11px) saturate(200%)",
            backgroundColor: "rgba(17, 25, 40, 0.27)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
          className="pointer-events-auto relative flex h-auto w-full basis-1/4 flex-col overflow-hidden"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              borderRadius: "50%",
              scale: 1,
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              borderRadius: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            style={{ borderRadius: "50%" }}
            className="overflow-hidden"
          >
            <DialogImage
              src={musicInfo.image}
              alt={musicInfo.name}
              className="h-full w-full object-cover"
            ></DialogImage>
          </motion.div>

          <div>{musicInfo.name}</div>
          <div>{musicInfo.artist}</div>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}

export default MusicInfoCard;
