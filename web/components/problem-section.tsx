"use client";

import { BookOpen, ShieldCheck, Stethoscope } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "./language-provider";
import { gsap } from "../lib/gsap";

const iconMap = {
  0: BookOpen,
  1: Stethoscope,
  2: ShieldCheck
} as const;

export function ProblemSection() {
  const { t, direction } = useLanguage();
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      gsap.fromTo(
        cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%"
          }
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="problem" className="bg-lightGray/60 py-24 dark:bg-[#0b1328]" dir={direction}>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">{t.problem.heading}</h2>
          <p className="section-subheading">{t.problem.description}</p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.problem.cards.map((card, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <article
                key={card.title}
                className="card-surface flex flex-col gap-4"
                aria-label={card.title}
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-darkBlue dark:text-white">{card.title}</h3>
                <p className="text-sm text-darkBlue/70 dark:text-gray-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
