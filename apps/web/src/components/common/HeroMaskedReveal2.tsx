"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "motion/react";

const WORDS = ["We", "Are", "VFL"] as const;

export default function Page() {
  const [playing, setPlaying] = useState(false);
  const [cycle, setCycle] = useState(0);
  const overlayControls = useAnimationControls();

  // 타이밍
  const perWord = 2; // 초
  const gap = 0.15; // 초
  const total = WORDS.length * (perWord + gap); // 전체 길이(초)
  const lastIndex = WORDS.length - 1;
  const lastDelay = lastIndex * (perWord + gap);

  const startIntro = async () => {
    if (playing) return;
    setPlaying(true);
    setCycle((c) => c + 1);

    // 🔥 마지막 단어가 커지는 "중후반"에 맞춰 오버레이 페이드아웃 시작
    const fadeAt = (lastDelay + perWord * 0.7) * 1000; // 70% 지점에서 시작
    const fadeTimer = setTimeout(() => {
      overlayControls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }, fadeAt);

    // 전체 끝난 뒤 상태 정리
    const cleanup = setTimeout(() => {
      overlayControls.set({ opacity: 0 }); // 이미 0이지만 안전하게
      setPlaying(false);
      clearTimeout(fadeTimer);
    }, total * 1000);

    // 필요시 unmount/재시작 대비: 반환하지 않아도 OK (단일 페이지)
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(cleanup);
    };
  };

  // 컴포넌트 마운트 시 자동 실행
  useEffect(() => {
    startIntro();
  }, []); // 빈 의존성 배열로 마운트 시 한 번만 실행

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

          {/* 오버레이: 자동 실행 */}
          <motion.div
            key={cycle}
            className="absolute inset-0 select-none"
            initial={{ opacity: 1 }}
            animate={overlayControls}
          >
            <MaskOverlay
              words={WORDS}
              overlayColor="#000000"
              perWord={perWord}
              gap={gap}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/** SVG 마스크 오버레이 (흰=보임, 검정=구멍) */
function MaskOverlay({
  words,
  overlayColor = "#000000",
  perWord,
  gap,
}: {
  words: readonly string[];
  overlayColor?: string;
  perWord: number;
  gap: number;
}) {
  const lastIndex = words.length - 1;

  return (
    <svg
      className="block h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <mask id="word-cutout">
        <rect x="0" y="0" width="100" height="100" fill="#fff" />
        {words.map((w, i) => (
          <WordMask
            key={w + i}
            text={w}
            index={i}
            perWord={perWord}
            gap={gap}
            isLast={i === lastIndex}
          />
        ))}
      </mask>

      {/* 실제 오버레이 패널 */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill={overlayColor}
        mask="url(#word-cutout)"
      />
    </svg>
  );
}

/** 단어 한 개의 등장/퇴장
 * - 바깥 그룹: 단어 자체 스케일 (마스크 구멍 크기)
 * - 마지막 단어만 더 크게 확장 (ex. 9배), 앞 단어는 5배
 */
function WordMask({
  text,
  index,
  perWord,
  gap,
  isLast,
}: {
  text: string;
  index: number;
  perWord: number;
  gap: number;
  isLast: boolean;
}) {
  const delay = index * (perWord + gap);
  const outerTarget = isLast ? 50 : 5; // 마지막 단어는 더 크게

  return (
    <motion.g
      initial={{ scale: 1 }}
      animate={{ scale: outerTarget }}
      transition={{
        duration: isLast ? perWord * 5 : perWord,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ originX: "50%", originY: "50%" }}
    >
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1.0, 1.06, 1.12] }}
        transition={{
          duration: isLast ? perWord * 5 : perWord,
          times: [0, 0.2, 0.78, 1],
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <text
          className="text-[8px] font-bold md:text-sm"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000"
        >
          {text}
        </text>
      </motion.g>
    </motion.g>
  );
}
