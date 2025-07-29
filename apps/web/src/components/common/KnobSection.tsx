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
    <div className="relative flex h-[400vh] w-full flex-col" ref={sectionRef}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-x-hidden">
        <Knob
          scrollYProgress={scrollYProgress}
          steps={steps}
          onActiveStepChange={(index) => {
            if (index !== -1) {
              setActiveStep(index);
            }
          }}
        />
        <div className="absolute bottom-[100px] flex flex-col items-center justify-center">
          <TextReveal className="text-4xl font-bold">
            {steps[activeStep]?.value}
          </TextReveal>
          <TextReveal className="text-2xl">
            {steps[activeStep]?.description}
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
