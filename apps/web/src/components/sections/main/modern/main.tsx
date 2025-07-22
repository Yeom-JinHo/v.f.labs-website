"use client";

import { useState } from "react";
import HighlightText from "@/components/common/HighlightText";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "motion/react";

function Main() {
  const isMobile = useMobile();
  const [hoveredText, setHoveredText] = useState("");

  return (
    <section
      className={
        isMobile
          ? "relative flex h-screen w-full flex-col overflow-hidden"
          : "relative flex h-full w-screen overflow-hidden"
      }
    >
      {/* 상단 텍스트 표시 */}
      {!isMobile && (
        <div className="fixed top-8 left-1/2 z-50 -translate-x-1/2 text-2xl font-bold text-white">
          <span>We're </span>
          <motion.span
            className="inline-block text-white"
            key={hoveredText}
            initial={{ opacity: 0, y: -40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 40, rotateX: 90 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {hoveredText || "?"}
          </motion.span>
        </div>
      )}

      <HighlightText
        onHover={setHoveredText}
        isMobile={isMobile}
        isHover={hoveredText === "VAGUE FREQUENCY LABS"}
        imageUrl="/images/logo/1_400_300.png"
      >
        VAGUE FREQUENCY LABS
      </HighlightText>
      <HighlightText
        onHover={setHoveredText}
        isMobile={isMobile}
        isHover={hoveredText === "CELEBRATE AGENCY"}
        imageUrl="/images/logo/2_400_300.png"
      >
        CELEBRATE AGENCY
      </HighlightText>
      <HighlightText
        onHover={setHoveredText}
        isMobile={isMobile}
        isHover={hoveredText === "Payday Records"}
        imageUrl="/images/logo/3_400_300.png"
      >
        Payday Records
      </HighlightText>
    </section>
  );
}

export default Main;
