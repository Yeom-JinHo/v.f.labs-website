"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VAGUE_FREQUENCY_LABS_HERO_IMAGES } from "@/app/vague-frequency-labs/sections/hero/hero";
import HighlightText from "@/components/common/HighlightText";
import { COMPANY_NAME, COMPANY_SHORT_NAME } from "@/consts/company";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "motion/react";

function Main() {
  const isMobile = useMobile();
  const [hoveredText, setHoveredText] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/vague-frequency-labs");
    router.prefetch("/celebrate-agency");
    router.prefetch("/payday-records");
  }, [router]);

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
        routePath={`/vague-frequency-labs`}
        isHover={hoveredText === COMPANY_NAME.VAGUE_FREQUENCY_LABS}
        imageUrl={`/images/logo/400_300/${COMPANY_SHORT_NAME.VAGUE_FREQUENCY_LABS}.png`}
        prefetchImageList={VAGUE_FREQUENCY_LABS_HERO_IMAGES}
      >
        {COMPANY_NAME.VAGUE_FREQUENCY_LABS}
      </HighlightText>
      <HighlightText
        onHover={setHoveredText}
        isMobile={isMobile}
        routePath={`/celebrate-agency`}
        isHover={hoveredText === COMPANY_NAME.CELEBRATE_AGENCY}
        imageUrl={`/images/logo/400_300/${COMPANY_SHORT_NAME.CELEBRATE_AGENCY}.png`}
      >
        {COMPANY_NAME.CELEBRATE_AGENCY}
      </HighlightText>
      <HighlightText
        onHover={setHoveredText}
        isMobile={isMobile}
        routePath={`/payday-records`}
        isHover={hoveredText === COMPANY_NAME.PAYDAY_RECORDS}
        imageUrl={`/images/logo/400_300/${COMPANY_SHORT_NAME.PAYDAY_RECORDS}.png`}
      >
        {COMPANY_NAME.PAYDAY_RECORDS}
      </HighlightText>
    </section>
  );
}

export default Main;
