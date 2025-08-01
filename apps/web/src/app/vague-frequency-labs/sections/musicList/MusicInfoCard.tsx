"use client";

import type { MusicInfo } from "@/types/music";
import React, { useState } from "react";
import Link from "next/link";
import {
  MorphingDialog as Dialog,
  MorphingDialogContainer as DialogContainer,
  MorphingDialogContent as DialogContent,
  MorphingDialogImage as DialogImage,
  MorphingDialogTrigger as DialogTrigger,
} from "@/components/fancy/morphing-dialog";
import { motion } from "framer-motion";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

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
          className="h-[150px] w-[150px] overflow-hidden md:h-[360px] md:w-[360px]"
        >
          <DialogImage
            width={360}
            height={360}
            fill
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
          className="pointer-events-auto relative flex h-auto w-full basis-3/4 flex-col overflow-hidden p-8 md:basis-1/4"
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
              fill
              width={360}
              height={360}
              src={musicInfo.image}
              alt={musicInfo.name}
              className="h-full w-full object-cover"
            ></DialogImage>
          </motion.div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold">{musicInfo.name}</h3>
            <h3 className="text-muted-foreground text-sm">
              {musicInfo.artist}
            </h3>
            <div
              className="mt-4 flex flex-col gap-2"
              style={{ borderTop: "1px solid dark-gray" }}
            >
              {musicInfo.socials?.map((social, index) => (
                <Link
                  target="_blank"
                  href={social.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "mt-2 h-min w-full gap-1 p-0",
                  )}
                  key={`contact-social_${index}`}
                >
                  {social.Icon && <social.Icon className="size-6" />}
                  <h3 className="text-muted-foreground text-m">
                    {social.name}
                  </h3>
                  <Icons.arrowRight className="ml-auto size-4" />
                </Link>
              ))}
            </div>
          </div>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}

export default MusicInfoCard;
