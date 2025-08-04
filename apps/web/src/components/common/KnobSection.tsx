"use client";

import React, { useRef, useState } from "react";
import { useScroll } from "motion/react";

import TextReveal from "../fancy/text-reveal";
import Knob from "./Knob";

export default function KnobSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // 🔄 scroll 끝나는 시점 조정
  });

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "1",
      value: "DISCOVER",
      description:
        "The first step into music, embarking on a journey to find the perfect beat",
    },
    {},
    {
      step: "2",
      value: "CREATE",
      description:
        "Transforming imagination into reality, the moment of creation",
    },
    {},
    {
      step: "3",
      value: "INSPIRE",
      description: "Sharing our unique melody with the world",
    },
  ];

  return (
    <div
      className="relative mt-40 flex h-[400vh] w-full flex-col"
      ref={sectionRef}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-x-hidden">
        <span className="absolute top-[100px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Our Process
        </span>
        <Knob
          scrollYProgress={scrollYProgress}
          steps={steps}
          onActiveStepChange={(index) => {
            if (index !== -1) {
              setActiveStep(index);
            }
          }}
        />
        <div className="absolute bottom-[150px] flex flex-col items-center justify-center px-4 text-center">
          <TextReveal className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {steps[activeStep]?.value}
          </TextReveal>
          <TextReveal className="max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {steps[activeStep]?.description}
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
