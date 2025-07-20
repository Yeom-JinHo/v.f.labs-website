"use client";

import { useEffect, useState } from "react";
import NumberTicker from "@/components/fancy/number-ticker";
import TextReveal from "@/components/fancy/text-reveal";
import { Preloader } from "@/components/preloader";
import { AnimatePresence } from "motion/react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
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
              onStart={() => console.log("start")}
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
