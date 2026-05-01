"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme } from "@/components/providers/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

/** Light / Dark · Açık / Koyu — dil çevirileriyle tam kelime */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  /** Dar üst barda yer açmak için: ikonlar hep; yazı sadece geniş ekranda (2xl+) */
  const pillBtn =
    "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold transition-[color,background-color,box-shadow] duration-200 2xl:gap-2 2xl:px-3.5 2xl:text-sm";

  return (
    <div
      className={cn(
        "inline-flex shrink-0 rounded-full border border-cyan-200/80 bg-white/85 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm dark:border-cyan-500/25 dark:bg-slate-900/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      )}
      role="group"
      aria-label={t.theme.aria}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          pillBtn,
          theme === "light"
            ? "bg-cyan-100 text-sky-950 shadow-sm ring-1 ring-cyan-200/80 dark:bg-cyan-500/25 dark:text-cyan-50 dark:ring-cyan-400/35"
            : "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-slate-200",
        )}
        aria-pressed={theme === "light"}
        aria-label={t.theme.light}
        title={t.theme.light}
      >
        <Sun className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
        <span className="hidden 2xl:inline" aria-hidden="true">
          {t.theme.light}
        </span>
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          pillBtn,
          theme === "dark"
            ? "bg-cyan-100 text-sky-950 shadow-sm ring-1 ring-cyan-200/80 dark:bg-cyan-500/30 dark:text-cyan-50 dark:ring-cyan-400/40"
            : "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-slate-200",
        )}
        aria-pressed={theme === "dark"}
        aria-label={t.theme.dark}
        title={t.theme.dark}
      >
        <Moon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
        <span className="hidden 2xl:inline" aria-hidden="true">
          {t.theme.dark}
        </span>
      </button>
    </div>
  );
}
