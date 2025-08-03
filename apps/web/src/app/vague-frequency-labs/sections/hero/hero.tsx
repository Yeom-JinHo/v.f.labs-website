"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";

import HeroImage from "./HeroImage";

export const VAGUE_FREQUENCY_LABS_HERO_IMAGES = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
];

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // 🔄 scroll 끝나는 시점 조정
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      {/* sticky 영역 안에 이미지들이 고정되고 퍼지는 애니메이션 진행 */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-x-hidden">
        <h1 className="absolute top-[10vh] text-4xl font-bold">We are</h1>
        <div className="relative h-[400px] w-full">
          {VAGUE_FREQUENCY_LABS_HERO_IMAGES.map((src, i) => (
            <HeroImage
              key={i}
              scrollYProgress={scrollYProgress}
              i={i}
              src={src}
            />
          ))}
        </div>
        <h1 className="absolute bottom-[10vh] text-3xl font-bold">
          Vague Frequency Labs
        </h1>
      </div>
    </section>
  );
}

export default Hero;
