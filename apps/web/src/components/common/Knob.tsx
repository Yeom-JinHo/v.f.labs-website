"use client";

import type { MotionValue } from "motion/react";
import React, { useEffect, useState } from "react";
import { motion, useTransform } from "motion/react";

interface KnobProps {
  scrollYProgress: MotionValue<number>;
}

export default function Knob({ scrollYProgress }: KnobProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const rotation = useTransform(scrollYProgress, [0, 0.8], [0, 180]);

  // scrollYProgress를 실시간으로 추적
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setCurrentProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // 각 라인의 opacity 계산 함수
  const getLineOpacity = (lineIndex: number) => {
    const progress = currentProgress;
    if (!progress) return 0;

    const lineAngle = lineIndex * 45; // 각 라인의 각도 (0, 45, 90, 135, 180)
    // 스크롤 범위 [0, 0.8]을 [0, 180]으로 매핑
    const currentAngle = (progress / 0.8) * 180; // 현재 스크롤에 따른 각도 (0~180)

    // 각도 차이 계산 (절댓값)
    const angleDiff = Math.abs(currentAngle - lineAngle);

    // opacity 계산 - 정밀한 단계별 적용 (최소값 0.4)
    if (angleDiff <= 5) {
      return 1; // 정확히 일치
    } else if (angleDiff <= 15) {
      return 0.85; // 15도 안
    } else if (angleDiff <= 25) {
      return 0.7; // 25도 안
    } else if (angleDiff <= 35) {
      return 0.55; // 35도 안
    } else {
      return 0.4; // 기본 최소값
    }
  };

  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center gap-2 bg-gray-500">
      <div className="absolute top-52 left-50 h-[100px] w-[100px] rounded-full border border-2 border-white"></div>
      <motion.div
        className="absolute top-50 left-50 h-[100px] w-[100px] overflow-hidden rounded-full border border-2 border-white"
        style={{
          rotate: rotation,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          zoomAndPan="magnify"
          viewBox="0 0 75 74.999997"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          version="1.2"
        >
          <defs>
            <clipPath id="899b4b5a2f">
              <path d="M 0 37.5 C 0 58.210938 16.789062 75 37.5 75 C 58.210938 75 75 58.210938 75 37.5 C 75 16.789062 58.210938 0 37.5 0 C 16.789062 0 0 16.789062 0 37.5 Z M 0 37.5 " />
            </clipPath>
            <clipPath id="01f4158927">
              <path d="M 0 32.566406 L 38.703125 32.566406 L 38.703125 42.316406 L 0 42.316406 Z M 0 32.566406 " />
            </clipPath>
            <clipPath id="9bfe6c3b66">
              <path d="M 3.445312 33.566406 L 37.195312 33.566406 L 37.195312 41.066406 L 3.445312 41.066406 Z M 3.445312 33.566406 " />
            </clipPath>
            <clipPath id="a8fe3e23a1">
              <path d="M 0 33.566406 L 33.296875 33.566406 L 33.296875 41.066406 L 0 41.066406 Z M 0 33.566406 " />
            </clipPath>
          </defs>
          <g id="3c9ff561ef">
            <rect
              x="0"
              width="75"
              y="0"
              height="74.999997"
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
            />
            <rect
              x="0"
              width="75"
              y="0"
              height="74.999997"
              style={{ fill: "#ffffff", fillOpacity: 1, stroke: "none" }}
            />
            <g clip-rule="nonzero" clip-path="url(#899b4b5a2f)">
              <rect
                x="0"
                width="75"
                y="0"
                height="74.999997"
                style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
              />
            </g>
            <g clip-rule="nonzero" clip-path="url(#01f4158927)">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#ffffff",
                  fillOpacity: 1,
                }}
                d="M -1.429688 42.316406 L 33.835938 42.316406 C 34.148438 42.316406 34.460938 42.285156 34.773438 42.222656 C 35.082031 42.160156 35.382812 42.070312 35.675781 41.949219 C 35.964844 41.828125 36.242188 41.679688 36.507812 41.503906 C 36.769531 41.328125 37.011719 41.128906 37.234375 40.90625 C 37.457031 40.683594 37.65625 40.441406 37.832031 40.179688 C 38.007812 39.914062 38.15625 39.636719 38.277344 39.347656 C 38.398438 39.054688 38.488281 38.753906 38.550781 38.445312 C 38.613281 38.136719 38.644531 37.820312 38.644531 37.507812 C 38.644531 37.191406 38.613281 36.878906 38.550781 36.566406 C 38.488281 36.257812 38.398438 35.957031 38.277344 35.667969 C 38.15625 35.375 38.007812 35.097656 37.832031 34.835938 C 37.65625 34.570312 37.457031 34.328125 37.234375 34.105469 C 37.011719 33.882812 36.769531 33.683594 36.507812 33.507812 C 36.242188 33.332031 35.964844 33.183594 35.675781 33.0625 C 35.382812 32.941406 35.082031 32.851562 34.773438 32.789062 C 34.460938 32.726562 34.148438 32.699219 33.835938 32.699219 L -1.429688 32.699219 C -1.746094 32.699219 -2.058594 32.726562 -2.367188 32.789062 C -2.679688 32.851562 -2.980469 32.941406 -3.269531 33.0625 C -3.5625 33.183594 -3.839844 33.332031 -4.101562 33.507812 C -4.363281 33.683594 -4.609375 33.882812 -4.832031 34.105469 C -5.054688 34.328125 -5.253906 34.570312 -5.429688 34.835938 C -5.605469 35.097656 -5.753906 35.375 -5.875 35.667969 C -5.996094 35.957031 -6.085938 36.257812 -6.148438 36.566406 C -6.207031 36.878906 -6.238281 37.191406 -6.238281 37.507812 C -6.238281 37.820312 -6.207031 38.136719 -6.148438 38.445312 C -6.085938 38.753906 -5.996094 39.054688 -5.875 39.347656 C -5.753906 39.636719 -5.605469 39.914062 -5.429688 40.179688 C -5.253906 40.441406 -5.054688 40.683594 -4.832031 40.90625 C -4.609375 41.128906 -4.363281 41.328125 -4.101562 41.503906 C -3.839844 41.679688 -3.5625 41.828125 -3.269531 41.949219 C -2.980469 42.070312 -2.679688 42.160156 -2.367188 42.222656 C -2.058594 42.285156 -1.746094 42.316406 -1.429688 42.316406 Z M -1.429688 42.316406 "
              />
            </g>
            <g clip-rule="nonzero" clip-path="url(#9bfe6c3b66)">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#000000",
                  fillOpacity: 1,
                }}
                d="M 7.097656 41.066406 L 33.539062 41.066406 C 34.019531 41.066406 34.480469 40.972656 34.921875 40.78125 C 35.363281 40.59375 35.753906 40.320312 36.089844 39.96875 C 36.429688 39.617188 36.6875 39.210938 36.871094 38.753906 C 37.054688 38.292969 37.148438 37.816406 37.148438 37.316406 C 37.148438 36.820312 37.054688 36.34375 36.871094 35.882812 C 36.6875 35.421875 36.429688 35.019531 36.089844 34.667969 C 35.753906 34.316406 35.363281 34.042969 34.921875 33.855469 C 34.480469 33.664062 34.019531 33.566406 33.539062 33.566406 L 7.097656 33.566406 C 6.621094 33.566406 6.160156 33.664062 5.71875 33.855469 C 5.277344 34.042969 4.886719 34.316406 4.546875 34.667969 C 4.210938 35.019531 3.949219 35.421875 3.765625 35.882812 C 3.582031 36.34375 3.492188 36.820312 3.492188 37.316406 C 3.492188 37.816406 3.582031 38.292969 3.765625 38.753906 C 3.949219 39.210938 4.210938 39.617188 4.546875 39.96875 C 4.886719 40.320312 5.277344 40.59375 5.71875 40.78125 C 6.160156 40.972656 6.621094 41.066406 7.097656 41.066406 Z M 7.097656 41.066406 "
              />
            </g>
            <g clip-rule="nonzero" clip-path="url(#a8fe3e23a1)">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#000000",
                  fillOpacity: 1,
                }}
                d="M -129.960938 41.046875 L 33.539062 41.046875 L 33.539062 33.589844 L -129.960938 33.589844 Z M -129.960938 41.046875 "
              />
            </g>
          </g>
        </svg>
      </motion.div>
      <ul>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.li
            key={i}
            className="absolute top-50 left-50 h-[1px] w-[100px] bg-white"
            style={{
              rotate: `${i * 45}deg`,
              opacity: currentProgress ? getLineOpacity(i) : 0,
            }}
          >
            <div
              className="h-[1px] w-[10px] bg-blue-500"
              style={{ transform: `translateX(-100%)` }}
            >
              <div
                className="absolute top-0 left-0 text-white"
                style={{
                  transform: `translateY(-50%) rotate(${i * -45}deg)`,
                  left: "-500%",
                }}
              >
                <p>Line {i}</p>
                <p>1%</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
