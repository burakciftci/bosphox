"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, MonitorSmartphone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";
import { landingCardMinH } from "@/lib/landingCardShell";
import { landingCardHover, landingCardHoverTransition } from "@/lib/landingMotion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const SERVICE_ICONS = [MonitorSmartphone, Layers, Sparkles] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent py-28 sm:py-36"
      aria-labelledby="services-heading"
    >
      <SectionPatterns />
      <Container className="relative z-[1]">
        <FadeIn>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-accent-fade-h motion-safe:animate-kicker-line motion-reduce:animate-none sm:w-12"
              aria-hidden
            />
            <p className="section-kicker">{t.services.eyebrow}</p>
          </div>
          <h2
            id="services-heading"
            className="font-display mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-display text-ink sm:text-4xl lg:text-[2.35rem]"
          >
            {t.services.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
            {t.services.subtitle}
          </p>
        </FadeIn>

        <div className="mt-24 grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {t.services.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <FadeIn key={item.title} className="h-full min-h-0" delay={i * 0.06}>
                <motion.article
                  whileHover={landingCardHover}
                  transition={landingCardHoverTransition}
                  className={cn(
                    landingCardMinH,
                    "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-cyan-200/45 bg-card-tone-1 p-7",
                    "shadow-card ring-1 ring-slate-900/[0.03]",
                    "transition-[transform,box-shadow] duration-300",
                    "hover:border-cyan-300/60 hover:shadow-[0_12px_40px_-14px_rgba(14,165,233,0.14)]",
                    "dark:border-cyan-500/25 dark:bg-card-dark-1 dark:shadow-[0_16px_48px_-18px_rgba(0,0,0,0.55)] dark:ring-slate-950/50",
                    "dark:hover:border-cyan-400/45 dark:hover:shadow-[0_16px_44px_-16px_rgba(34,211,238,0.1)]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:20px_20px] opacity-[0.2] dark:opacity-[0.1]" aria-hidden />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/[0.04] via-transparent to-white/50 dark:from-sky-950/40 dark:to-slate-900/25"
                    aria-hidden
                  />

                  <span
                    className="font-display pointer-events-none absolute right-5 top-5 text-3xl font-bold tabular-nums text-sky-600/12 transition-colors duration-300 group-hover:text-sky-600/18 dark:text-sky-400/15 dark:group-hover:text-sky-400/25"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-cyan-300/50 via-cyan-200/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      "bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.65),transparent_55%)]",
                    )}
                    aria-hidden
                  />

                  <div className="relative mb-8 flex items-start justify-between gap-4">
                    <div
                      className={cn(
                        "inline-flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl",
                        "border border-cyan-200/60 bg-white/90 text-cyan-600 shadow-sm dark:border-cyan-500/35 dark:bg-slate-900/90 dark:text-cyan-300",
                        "transition-[transform,border-color,box-shadow] duration-300",
                        "group-hover:scale-[1.04] group-hover:border-cyan-300/80 group-hover:shadow-md",
                      )}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.35} aria-hidden />
                    </div>
                    <span
                      className={cn(
                        "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/50 text-cyan-600/50 dark:border-cyan-500/30 dark:text-cyan-400/50",
                        "opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100",
                        "group-hover:border-cyan-300 group-hover:text-cyan-700",
                      )}
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="relative font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>

                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/[0.04] transition-[box-shadow] duration-300 group-hover:ring-cyan-300/35 dark:ring-slate-950/60 dark:group-hover:ring-cyan-500/30"
                    aria-hidden
                  />
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
