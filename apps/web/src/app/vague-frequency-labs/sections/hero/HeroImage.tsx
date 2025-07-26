import type { MotionValue } from "motion/react";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useTransform } from "motion/react";

function HeroImage({
  scrollYProgress,
  i,
  src,
}: {
  scrollYProgress: MotionValue<number>;
  i: number;
  src: string;
}) {
  const isMobile = useMobile();
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
    <motion.div
      key={i}
      className={`absolute top-1/2 left-1/2 h-[50vh] w-screen rounded object-cover shadow-xl ${
        isMobile ? "h-[60vh]" : "h-screen"
      }`}
      style={{
        x,
        scale,
        y,
        zIndex: z,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <Image src={src} alt="hero" className="aspect-[4/3] object-cover" fill />
    </motion.div>
  );
}

export default HeroImage;
