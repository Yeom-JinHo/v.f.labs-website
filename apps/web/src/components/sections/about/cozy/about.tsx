import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";


function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              About Ho
            </TextReveal>
            <div className="space-y-4">
              <TextReveal
                as="p"
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                현승호 그는 사람들의 숨소리에 반응하며, 테크노의 신이다.
                외쳐 ! 승호 업 외쳐 ! 승호 업 외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업
                외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업외쳐 ! 승호 업 외쳐 ! 승호 업
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
