"use client";

import { useEffect, useState } from "react";
import { linkLimit, links } from "@/app/payday-records/sections/header/config";
import Link from "@/components/fancy/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={[
        "bg-background/80 fixed z-[900] w-full backdrop-blur-sm",
        "transform transition-opacity transition-transform duration-[800ms] ease-out will-change-transform",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
        "motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
      ].join(" ")}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex w-full justify-between">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center text-2xl font-semibold md:w-auto"
          >
            payday records
          </Link>

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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
