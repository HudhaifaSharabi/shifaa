"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./language-provider";
import { gsap } from "../lib/gsap";

export function PlanSection() {
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-animate=plan-step]");
      gsap.fromTo(
        steps,
        { xPercent: direction === "rtl" ? 40 : -40, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      gsap.fromTo(
        "[data-animate=plan-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: direction === "rtl" ? "right center" : "left center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <section id="plan" className="py-24" dir={direction}>
      <div ref={containerRef} className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">{t.plan.heading}</h2>
          <p className="section-subheading">{t.plan.description}</p>
        </div>
        <div className="relative">
          <div data-animate="plan-line" className="timeline-line absolute top-1/2 hidden h-1 w-full -translate-y-1/2 lg:block" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {t.plan.steps.map((step, index) => (
              <article
                key={step.title}
                data-animate="plan-step"
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-darkBlue/5 bg-white p-8 shadow-card transition dark:border-white/5 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="timeline-dot" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-primary">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-darkBlue dark:text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-darkBlue/70 dark:text-gray-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
