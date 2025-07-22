import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "motion/react";

interface HighlightTextProps {
  children: ReactNode;
  onHover: (text: string) => void;
}

function HighlightText({ children, onHover }: HighlightTextProps) {
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
      className="flex h-screen w-screen items-center justify-center"
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
