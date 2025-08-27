"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "motion/react";

export default function Page() {
  const [hasStarted, setHasStarted] = useState(false);
  const overlayControls = useAnimationControls();

  const startIntro = async () => {
    if (hasStarted) return;
    setHasStarted(true);

    setTimeout(() => {
      // VFL이 커지면서 오버레이 페이드아웃
      overlayControls.start({
        opacity: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }, 700);
  };

  return (
    <main className="min-h-[100svh] text-white">
      <section className="relative mt-10 h-[100vh] bg-white">
        {/* sticky 뷰포트 */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* 뒤 컨텐츠(이미지 or 비디오) */}
          <Image
            src="/images/hero/2.jpg"
            alt="hero"
            fill
            className="object-cover"
            priority
          />

          {/* 오버레이: 클릭으로 트리거 */}
          <motion.div
            className="absolute inset-0 cursor-pointer select-none"
            initial={{ opacity: 1 }}
            animate={overlayControls}
            onClick={startIntro}
            title="Click to reveal"
          >
            <MaskOverlay hasStarted={hasStarted} />

            {/* 클릭 가이드 (시작 전에만 표시) */}
            {!hasStarted && (
              <div className="absolute inset-x-0 bottom-8 mx-auto w-fit rounded-full bg-black/50 px-4 py-2 text-sm backdrop-blur">
                Click anywhere to reveal
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/** SVG 마스크 오버레이 (흰=보임, 검정=구멍) */
function MaskOverlay({ hasStarted }: { hasStarted: boolean }) {
  return (
    <svg
      className="block h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <mask id="word-cutout">
        <rect x="0" y="0" width="100" height="100" fill="#fff" />

        {/* VFL 마스크 */}
        <motion.g
          initial={{ scale: 1 }}
          animate={{ scale: hasStarted ? 10 : 1 }}
          transition={{
            duration: hasStarted ? 1.5 : 0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <text
            className="text-[8px] font-bold md:text-xl"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#000"
          >
            VFL
          </text>
        </motion.g>
      </mask>

      {/* 실제 오버레이 패널 */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill="#000000"
        mask="url(#word-cutout)"
      />
    </svg>
  );
}
