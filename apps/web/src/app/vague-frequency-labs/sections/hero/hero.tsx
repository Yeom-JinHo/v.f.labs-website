"use client";

import type { MotionValue } from "motion/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  "/images/hero.png",
  "/images/hero.png",
  "/images/hero.png",
  "/images/hero.png",
  "/images/hero.png",
];

function Test({
  scrollYProgress,
  i,
  src,
}: {
  scrollYProgress: MotionValue<number>;
  i: number;
  src: string;
}) {
  const inputStart = 0;
  const inputEnd = 0.75;

  const x = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    ["0vw", `${i * 28 - 40}vw`], // 숫자 대신 vw 단위 문자열
  );
  const y = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    // [0, i === 0 ? -(i - 0.25) * vh : 0], // i=0일 때만 아래로 400px 이동
    [0, 0],
  );

  // 이미지
  // AS-IS : 100vw, 100vh
  // TO-BE : 25vw, 25vh
  const scale = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    [1, 0.25],
  );
  const z = 999 - i;

  return (
    <motion.img
      key={i}
      src={src}
      className="absolute top-1/2 left-1/2 h-screen w-screen rounded object-cover shadow-xl"
      style={{
        x,
        scale,
        y,
        zIndex: z,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // 🔄 scroll 끝나는 시점 조정
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      {/* sticky 영역 안에 이미지들이 고정되고 퍼지는 애니메이션 진행 */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-[400px] w-full">
          {images.map((src, i) => (
            <Test key={i} scrollYProgress={scrollYProgress} i={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
