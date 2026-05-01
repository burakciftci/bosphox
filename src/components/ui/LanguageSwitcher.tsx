"use client";

import { cn } from "@/lib/cn";
import type { Language } from "@/lib/translations";
import { useLanguage } from "@/components/providers/LanguageProvider";

/** Sıra: TR | EN (varsayılan dil TR ile uyumlu) */
const options: { id: Language; label: string }[] = [
  { id: "tr", label: "TR" },
  { id: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-cyan-200/80 bg-white/85 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm dark:border-cyan-500/25 dark:bg-slate-900/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
      role="group"
      aria-label={t.nav.langAria}
    >
      {options.map((opt) => {
        const active = language === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLanguage(opt.id)}
            className={cn(
              "relative min-w-[3rem] rounded-full px-3.5 py-2 text-xs font-semibold tracking-wide transition-[color,background-color,box-shadow] duration-200 sm:text-sm",
              active
                ? "bg-cyan-100 text-sky-950 shadow-sm ring-1 ring-cyan-200/80 dark:bg-cyan-500/25 dark:text-cyan-50 dark:ring-cyan-400/35"
                : "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-slate-200",
            )}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
