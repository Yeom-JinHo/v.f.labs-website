import React from "react";
import ScrollVelocity from "@/components/common/ScrollVelocity";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <ScrollVelocity
          texts={["Payday", "Records"]}
          className="custom-scroll-text"
        />
        <div className="mt-40 flex items-center justify-center">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              About
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                payday records의 소개 payday records payday records payday
                records payday records payday records payday records payday
                records payday records payday records payday records payday
                records payday records payday records payday records payday
                records payday records
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
