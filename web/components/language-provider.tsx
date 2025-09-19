"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, SiteContent } from "../data/content";
import { content } from "../data/content";

type LanguageContextValue = {
  language: Locale;
  direction: "ltr" | "rtl";
  t: SiteContent;
  toggleLanguage: () => void;
  setLanguage: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>("en");

  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.dir = direction;
    root.lang = language;
  }, [direction, language]);

  useEffect(() => {
    const stored = window.localStorage.getItem("shifaa-language") as Locale | null;
    if (stored && (stored === "en" || stored === "ar")) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("shifaa-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      direction,
      t: content[language],
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "ar" : "en")),
      setLanguage
    }),
    [direction, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
