"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "./language-provider";
import { gsap } from "../lib/gsap";

export function PartnersSection() {
  const { t, direction } = useLanguage();
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%"
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="partners" className="bg-white py-24 dark:bg-[#070d1c]" dir={direction}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">{t.partners.heading}</h2>
          <p className="section-subheading">{t.partners.description}</p>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {t.partners.partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-24 items-center justify-center rounded-2xl border border-darkBlue/5 bg-lightGray/40 transition hover:border-primary hover:bg-white dark:border-white/10 dark:bg-white/5"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="h-12 w-auto grayscale transition duration-300 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
