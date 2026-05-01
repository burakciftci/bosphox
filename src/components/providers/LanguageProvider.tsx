"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language, Messages } from "@/lib/translations";
import { LANGUAGE_STORAGE_KEY, translations } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "tr";
  const raw = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (raw === "en") return "en";
  if (raw === "tr") return "tr";
  return "tr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLanguageState(readStoredLanguage());
    setReady(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      document.documentElement.lang = lang === "tr" ? "tr" : "en";
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = language === "tr" ? "tr" : "en";
  }, [language, ready]);

  const t = translations[language];

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
