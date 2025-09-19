"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "./language-provider";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const MotionHeader = motion.header;

export function Navbar() {
  const { t, direction } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionHeader
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-6 py-4 transition-all",
        scrolled ? "backdrop-blur bg-white/80 shadow-lg dark:bg-[#060b1a]/80" : "bg-transparent"
      )}
      dir={direction}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6" aria-label="Main navigation">
        <Link href="#top" className="flex items-center gap-2" aria-label="Shifaa logo">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-darkBlue font-bold">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight">Shifaa</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-darkBlue/80 transition hover:text-darkBlue dark:text-gray-200 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button className="hidden text-sm lg:inline-flex" href="#cta">
            {t.nav.donate}
          </Button>
        </div>
      </nav>
    </MotionHeader>
  );
}
