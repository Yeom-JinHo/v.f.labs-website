"use client";

import { useEffect, useState } from "react";
import {
  linkLimit,
  links,
} from "@/app/vague-frequency-labs/sections/header/config";
import Link from "@/components/fancy/link";
import { motion } from "motion/react";

import { Icons } from "@repo/ui/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="bg-background/80 fixed z-[999] w-full backdrop-blur-lg"
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex w-full justify-between">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-2xl font-semibold"
          >
            v.f.labs
          </Link>

          <button className="md:hidden" onClick={toggleMenu}>
            <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
            {isOpen ? (
              <Icons.close className="h-6 w-6" />
            ) : (
              <Icons.menu className="h-6 w-6" />
            )}
          </button>
          <div className="hidden md:flex md:w-auto md:items-center">
            <nav className="flex items-center gap-4">
              <div className="flex items-center gap-4 lg:gap-6">
                {links.slice(0, linkLimit).map(({ title, href }, index) => (
                  <Link
                    className="flex items-center text-xl font-medium underline-offset-4 hover:underline"
                    href={href}
                    key={`header-desktop-link_${index}`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              {/* <div className="flex items-center gap-2">
                <ThemeToggle />
              </div> */}
            </nav>
          </div>
        </div>
      </div>
      <div
        className="bg-transparent md:hidden"
        style={{
          height: isOpen ? "auto" : 0,
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map(({ title, href }, index) => (
            <Link
              className="flex items-center text-xl font-medium underline-offset-4 hover:underline"
              href={href}
              onClick={toggleMenu}
              key={`header-mobile-link_${index}`}
            >
              {title}
            </Link>
          ))}
          {/* <div className="flex w-full items-center justify-end">
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </motion.header>
  );
}
