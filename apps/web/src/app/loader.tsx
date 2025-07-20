"use client";

import { useEffect, useRef, useState } from "react";
import NumberTicker from "@/components/fancy/number-ticker";
import TextReveal from "@/components/fancy/text-reveal";
import { Preloader } from "@/components/preloader";
import { AnimatePresence } from "motion/react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 이전 timer가 있다면 항상 정리
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // isReady가 true일 때만 새로운 timer 설정
    if (isReady) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    // cleanup 함수 - 컴포넌트 언마운트 시에도 실행됨
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isReady]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Preloader>
          {!isReady ? (
            <NumberTicker
              from={10}
              target={100}
              autoStart={true}
              transition={{ duration: 2, type: "tween", ease: "easeInOut" }}
              onComplete={() => setIsReady(true)}
            />
          ) : (
            <>
              <TextReveal className="text-6xl font-bold xl:text-[12rem]">
                Are
              </TextReveal>
              <TextReveal className="ml-2 text-6xl font-bold xl:ml-10 xl:text-[12rem]">
                you
              </TextReveal>
              <TextReveal className="ml-2 text-6xl font-bold xl:ml-10 xl:text-[12rem]">
                ready?
              </TextReveal>
            </>
          )}
        </Preloader>
      )}
    </AnimatePresence>
  );
}
