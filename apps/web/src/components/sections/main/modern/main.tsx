"use client";

import { useState } from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Test = ({ index }: { index: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          backgroundColor: "transparent",
        }}
        animate={{
          scale: hovered ? 1.05 : 1,
          y: hovered ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src={`/images/logo/${index}.png`}
          alt="logo"
          width={1000}
          height={400}
          unoptimized
        />
      </motion.div>
    </div>
  );
};

function Main() {
  const isMobile = useMobile();
  return (
    <section
      className="relative flex w-full overflow-hidden"
      style={{
        backgroundColor: "rgba(0,0,0)",
      }}
    >
      <Test index={1} />
      <Test index={2} />
      <Test index={3} />
    </section>
  );
}

export default Main;
