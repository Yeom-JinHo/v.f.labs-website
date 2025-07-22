import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "motion/react";

interface HighlightTextProps {
  children: ReactNode;
  onHover: (text: string) => void;
  imageUrl?: string;
  isMobile?: boolean;
}

function HighlightText({
  children,
  onHover,
  imageUrl,
  isMobile,
}: HighlightTextProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    onHover(children as string);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onHover("");
  };

  return (
    <div
      className={
        isMobile
          ? "relative flex h-full w-screen items-center justify-center"
          : "relative flex h-screen w-full items-center justify-center"
      }
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 배경 이미지 오버레이 */}
      {imageUrl && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.6 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <button
        className="relative overflow-hidden font-sans text-2xl font-bold text-transparent uppercase"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        <span className="actual-text">{children}</span>

        <motion.span
          className="align-center pointer-events-none absolute inset-0 whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          style={{
            color: "white",
            WebkitTextStroke: "1px white",
            borderRight: hovered ? "6px solid white" : "0px solid transparent",
            overflow: "hidden",
            filter: hovered ? "drop-shadow(0 0 3px white)" : "none",
          }}
        >
          {children}
        </motion.span>
      </button>
    </div>
  );
}

export default HighlightText;
