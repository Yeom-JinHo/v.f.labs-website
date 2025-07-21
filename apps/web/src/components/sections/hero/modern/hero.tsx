"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="bg-red relative mt-6 w-full overflow-hidden"
      style={{ backgroundColor: "red" }}
      ref={container}
    >
      <div
        style={{ position: "relative", width: 300, height: 2000 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            pointerEvents: "none",
          }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>컨텐츠</div>
      </div>
      <div className="relative z-10 h-screen">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex h-full flex-col items-center justify-center object-cover px-4 md:px-6">
            <div className={isMobile ? "m-6 flex h-full" : "flex w-full"}>
              <Image
                src={
                  isMobile ? `/images/logo/allV.png` : `/images/logo/allH.png`
                }
                alt="logo"
                className={isMobile ? "h-full" : ""}
                width={isMobile ? 800 : 1000}
                height={isMobile ? 1200 : 1200}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <ParallaxImage
        src="/images/hero.png"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-4/2 w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: "-10%",
          yEnd: "10%",
          scaleStart: 1,
          scaleEnd: 1.5,
        }}
      /> */}
    </section>
  );
}

export default Hero;
