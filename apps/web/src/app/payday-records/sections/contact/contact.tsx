import React from "react";
import Image from "next/image";
import { MacBookScroll } from "@/components/common/MacBookScroll";

function Contact() {
  return (
    <div className="w-full" id="contact">
      <div className="flex items-center justify-center">
        <MacBookScroll
          title={
            <span className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              Show me the your dream <br /> No kidding.
            </span>
          }
          badge={
            <a href="https://www.instagram.com/samkor.br/">
              <Image
                src="/images/artist/sam/logo.png"
                alt="SAM"
                width={100}
                height={100}
              />
            </a>
          }
          src={"/images/mac/image.png"}
          showGradient={false}
        />
      </div>
    </div>
  );
}

export default Contact;
