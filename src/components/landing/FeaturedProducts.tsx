"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";
import { landingCardMinH } from "@/lib/landingCardShell";
import { landingCardHover, landingCardHoverTransition } from "@/lib/landingMotion";
import { useLanguage } from "@/components/providers/LanguageProvider";

type StatusKey = "live" | "inProgress" | "comingSoon";

function StatusBadge({ statusKey }: { statusKey: StatusKey }) {
  const { t } = useLanguage();
  const label = t.featured.status[statusKey];
  const styles: Record<StatusKey, string> = {
    live:
      "border-slate-200/80 bg-emerald-50/95 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/55 dark:text-emerald-200",
    inProgress:
      "border-slate-200/80 bg-amber-50/95 text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/50 dark:text-amber-200",
    comingSoon:
      "border-slate-200/80 bg-sky-50/95 text-sky-900 dark:border-sky-500/30 dark:bg-sky-950/55 dark:text-sky-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        styles[statusKey],
      )}
    >
      {label}
    </span>
  );
}

export function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-transparent py-28 sm:py-36"
      aria-labelledby="products-heading"
    >
      <SectionPatterns />
      <Container className="relative z-[1]">
        <FadeIn>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-accent-fade-h motion-safe:animate-kicker-line motion-reduce:animate-none sm:w-12"
              aria-hidden
            />
            <p className="section-kicker">{t.featured.eyebrow}</p>
          </div>
          <h2
            id="products-heading"
            className="font-display mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-display text-ink sm:text-4xl lg:text-[2.35rem]"
          >
            {t.featured.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
            {t.featured.subtitle}
          </p>
        </FadeIn>

        <div className="mt-24 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.featured.items.map((p, i) => (
            <FadeIn key={p.title} className="h-full min-h-0" delay={i * 0.05}>
              <motion.article
                whileHover={landingCardHover}
                transition={landingCardHoverTransition}
                className={cn(
                  landingCardMinH,
                  "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-cyan-200/50 bg-card-tone-2 shadow-card ring-1 ring-slate-900/[0.04] transition-[transform,box-shadow,border-color] duration-300 hover:border-cyan-300/65 hover:shadow-[0_16px_44px_-18px_rgba(14,165,233,0.13)]",
                  "dark:border-cyan-500/25 dark:bg-card-dark-2 dark:shadow-[0_16px_48px_-18px_rgba(0,0,0,0.55)] dark:ring-slate-950/50",
                  "dark:hover:border-cyan-400/45 dark:hover:shadow-[0_16px_44px_-16px_rgba(34,211,238,0.1)]",
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:20px_20px] opacity-[0.22] dark:opacity-[0.1]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/[0.04] via-transparent to-white/45 dark:from-sky-950/35 dark:to-slate-900/30" />

                <div className="relative flex min-h-0 flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-cyan-950 dark:text-cyan-200/90 sm:text-[13px]">
                        {p.category}
                      </p>
                      <p className="mt-1.5 truncate font-display text-lg font-semibold tracking-tight text-ink">
                        {p.title}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/65 bg-white/90 text-cyan-600 shadow-sm transition-[transform,box-shadow] duration-300 group-hover:scale-[1.04] group-hover:shadow-md dark:border-cyan-500/35 dark:bg-slate-900/90 dark:text-cyan-300">
                      <Gamepad2 className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} aria-hidden />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-ink-muted">{p.platform}</span>
                    <StatusBadge statusKey={p.status} />
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{p.description}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
