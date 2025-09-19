"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./language-provider";
import { gsap } from "../lib/gsap";

export function ImpactStats() {
  const { t, direction } = useLanguage();
  const countersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!countersRef.current) return;
      const targets = Array.from(countersRef.current.querySelectorAll<HTMLElement>("[data-counter]"));
      targets.forEach((target) => {
        const endValue = Number(target.dataset.counter);
        const counter = { value: 0 };
        target.textContent = "0";
        gsap.to(counter, {
          value: endValue,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%"
          },
          onUpdate: () => {
            const formatted = new Intl.NumberFormat(direction === "rtl" ? "ar" : "en").format(Math.round(counter.value));
            target.textContent = formatted;
          }
        });
      });
    }, countersRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <section id="impact" className="bg-lightGray/60 py-24 dark:bg-[#0b1328]" dir={direction}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">{t.impact.heading}</h2>
          <p className="section-subheading">{t.impact.description}</p>
        </div>
        <div ref={countersRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.impact.stats.map((stat) => (
            <div
              key={stat.label}
              className="card-surface flex flex-col items-center gap-3 text-center"
              role="group"
              aria-label={`${stat.label} ${stat.value}`}
            >
              <span className="counter-value" data-counter={stat.value}>
                {new Intl.NumberFormat(direction === "rtl" ? "ar" : "en").format(stat.value)}
                {stat.suffix || ""}
              </span>
              <span className="text-sm font-medium text-darkBlue/70 dark:text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
