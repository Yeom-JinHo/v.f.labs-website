"use client";

import React, { useRef } from "react";
import { useScroll } from "motion/react";

import Knob from "./Knob";

export default function KnobSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // 🔄 scroll 끝나는 시점 조정
  });

  const steps = [
    { step: "Step 1", value: 100 },
    {},
    { step: "Step 2", value: 300 },
    {},
    { step: "Step 3", value: 500 },
  ];

  return (
    <div
      className="relative flex h-[400vh] w-[500px] flex-col items-center gap-2 bg-gray-900"
      ref={sectionRef}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-x-hidden">
        <Knob scrollYProgress={scrollYProgress} steps={steps} />
      </div>
    </div>
  );
}
