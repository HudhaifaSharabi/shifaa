"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { gsap } from "../lib/gsap";

export function DonationCta() {
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      gsap.fromTo(
        containerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" className="py-24" dir={direction}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          ref={containerRef}
          className="parallax-cta relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-white"
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.cta.heading}</h2>
            <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base">{t.cta.description}</p>
            <div className="flex justify-center">
              <Button
                href="https://donate.shifaa.org"
                className="animate-[pulse_2.5s_ease-in-out_infinite] bg-white text-darkBlue shadow-glow"
                aria-label={t.cta.action}
              >
                {t.cta.action}
              </Button>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
        </motion.div>
      </div>
    </section>
  );
}
