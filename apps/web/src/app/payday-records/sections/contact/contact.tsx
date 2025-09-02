import React from "react";
import Image from "next/image";
import CopyButton from "@/components/common/CopyButton";
import { MacBookScroll } from "@/components/common/MacBookScroll";

function Contact() {
  return (
    <div className="w-full" id="contact">
      <div className="flex flex-col items-center justify-center">
        <MacBookScroll
          title={
            <span className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              Show me the your dream
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
        <div
          style={{
            backdropFilter: "blur(11px) saturate(200%)",
            WebkitBackdropFilter: "blur(11px) saturate(200%)",
            backgroundColor: "rgba(17, 25, 40, 0.27)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
          className="align-center pointer-events-auto mb-[200px] flex h-auto min-w-[300px] flex-col items-center justify-center overflow-hidden p-8 sm:w-[40vw] [@media(max-width:375px)]:mb-40"
        >
          <h3 className="mb-8 text-center text-3xl font-bold">Contact</h3>
          <div className="flex items-center">
            <p className="text-lg md:text-xl">pwlsghq@naver.com</p>
            <CopyButton text="pwlsghq@naver.com" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
