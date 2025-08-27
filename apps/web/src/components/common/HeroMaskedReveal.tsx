"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface HeroMaskedRevealProps {
  bgSrc: string;
  fgSrc: string;
}

export default function HeroMaskedReveal({
  bgSrc,
  fgSrc,
}: HeroMaskedRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 진행도: 전체 페이지 기준
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 마스크 크기: 60% → 120% (더 자연스러운 범위)
  const maskSize = useTransform(scrollYProgress, [0, 1], ["60%", "120%"]);

  // 이미지 scale: 1 → 1.05 (미묘한 확대)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <main className="relative">
      {/* 스크롤 영역 */}
      <div ref={containerRef} className="h-[300vh] bg-white" />

      {/* 고정된 마스크 영역 */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative h-screen w-screen"
          style={{
            WebkitMaskImage: `url(${fgSrc})`,
            WebkitMaskPosition: "center center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: maskSize,
            maskImage: `url(${fgSrc})`,
            maskPosition: "center center",
            maskRepeat: "no-repeat",
            maskSize: maskSize,
          }}
        >
          <motion.div style={{ scale }} className="relative h-full w-full">
            <Image src={bgSrc} alt="bg" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
