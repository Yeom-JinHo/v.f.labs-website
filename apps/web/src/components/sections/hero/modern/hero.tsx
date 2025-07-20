"use client";

import { useRef } from "react";
import Image from "next/image";
import ParallaxImage from "@/components/fancy/parallax-image";
import { useMobile } from "@/hooks/use-mobile";

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  return (
    <section
      className="bg-background relative mt-6 w-full overflow-hidden"
      ref={container}
    >
      <div className="relative z-10 h-screen">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex h-full flex-col items-center justify-center object-cover px-4 md:px-6">
            <div className={isMobile ? "m-6 flex h-full" : "flex w-full"}>
              <Image
                src={
                  isMobile ? `/images/logo/allV.png` : `/images/logo/allH.png`
                }
                alt="logo"
                width={isMobile ? 800 : 1000}
                height={isMobile ? 1200 : 1200}
              />
            </div>
          </div>
        </div>
      </div>

      <ParallaxImage
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
      />
    </section>
  );
}

export default Hero;
