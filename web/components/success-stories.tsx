"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { cn } from "../lib/utils";

export function SuccessStories() {
  const { t, direction } = useLanguage();
  const [active, setActive] = useState(0);
  const stories = t.success.stories;
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [stories.length]);

  const goTo = (index: number) => {
    setActive((index + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="bg-white py-24 dark:bg-[#070d1c]" dir={direction}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">{t.success.heading}</h2>
          <p className="section-subheading">{t.success.description}</p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-lightGray/60 p-6 dark:bg-white/5" ref={sliderRef}>
            <motion.div
              className="flex gap-6"
              animate={{ x: `${(direction === "rtl" ? active : -active) * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
            >
              {stories.map((story) => (
                <motion.article
                  key={story.name}
                  className="group relative flex min-w-full flex-col gap-6 rounded-3xl bg-white p-6 shadow-card dark:bg-white/10"
                  whileHover={{ y: -6 }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                    <p className="text-lg font-medium text-darkBlue dark:text-white">{story.quote}</p>
                    <p className="text-sm font-semibold text-darkBlue/70 dark:text-gray-300">
                      {story.name} · {story.role}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {stories.map((story, index) => (
                <button
                  key={story.name}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-2.5 w-8 rounded-full transition",
                    active === index ? "bg-primary" : "bg-darkBlue/10 dark:bg-white/20"
                  )}
                  aria-label={`Show story ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                className="flex size-10 items-center justify-center rounded-full border border-darkBlue/10 text-darkBlue transition hover:bg-primary hover:text-darkBlue dark:border-white/10 dark:text-white"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                className="flex size-10 items-center justify-center rounded-full border border-darkBlue/10 text-darkBlue transition hover:bg-primary hover:text-darkBlue dark:border-white/10 dark:text-white"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
