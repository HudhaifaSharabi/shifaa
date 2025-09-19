"use client";

import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className="gap-2 rounded-full border border-transparent px-4 py-2 text-xs font-medium uppercase tracking-wider"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {t.languageName}
    </Button>
  );
}
