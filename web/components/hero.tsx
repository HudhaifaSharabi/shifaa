"use client";

import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "./language-provider";
import { gsap } from "../lib/gsap";

export function Hero() {
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .from("[data-animate=hero-preheading]", { y: 30, opacity: 0, duration: 0.6 })
        .from("[data-animate=hero-heading]", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
        .from("[data-animate=hero-description]", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-animate=hero-ctas] > *", { y: 30, opacity: 0, stagger: 0.15, duration: 0.5 }, "-=0.4");

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%"
            }
          }
        );
      }

      gsap.to("[data-parallax=hero-bg]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-darkBlue text-white"
      dir={direction}
    >
      <Image
        src="/hero-bg.svg"
        alt="Abstract humanitarian collage"
        fill
        priority
        data-parallax="hero-bg"
        className="object-cover opacity-90"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-32 lg:flex-row lg:items-center">
        <div className="w-full max-w-2xl space-y-6" aria-label="Hero copy">
          <span
            data-animate="hero-preheading"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            {t.hero.preheading}
          </span>
          <h1 data-animate="hero-heading" className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t.hero.heading}
          </h1>
          <p data-animate="hero-description" className="max-w-xl text-base text-white/80 lg:text-lg">
            {t.hero.description}
          </p>
          <div data-animate="hero-ctas" className="flex flex-wrap items-center gap-4">
            <Button href="#cta" className="shadow-glow">
              {t.hero.primaryCta}
            </Button>
            <Button
              href="#partners"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span>{t.hero.secondaryCta}</span>
            </Button>
          </div>
          <p className="text-sm text-white/70">{t.hero.trustNote}</p>
        </div>
        <div className="w-full max-w-md space-y-6 rounded-3xl bg-white/10 p-8 backdrop-blur-lg">
          <h2 className="text-lg font-semibold text-white">{t.problem.heading}</h2>
          <p className="text-sm text-white/70">{t.problem.description}</p>
          <div ref={statsRef} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {t.impact.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-3xl font-bold text-white" aria-live="polite">
                  {new Intl.NumberFormat(direction === "rtl" ? "ar" : "en", {
                    notation: "compact",
                    maximumFractionDigits: 1
                  }).format(stat.value)}
                  {stat.suffix || ""}
                </p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
