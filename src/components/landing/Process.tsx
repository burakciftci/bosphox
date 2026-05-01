"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";
import { landingCardMinH } from "@/lib/landingCardShell";
import { landingCardHover, landingCardHoverTransition } from "@/lib/landingMotion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-transparent py-28 sm:py-36"
      aria-labelledby="process-heading"
    >
      <SectionPatterns />
      <Container className="relative z-[1]">
        <FadeIn>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-accent-fade-h motion-safe:animate-kicker-line motion-reduce:animate-none sm:w-12"
              aria-hidden
            />
            <p className="section-kicker">{t.process.eyebrow}</p>
          </div>
          <h2
            id="process-heading"
            className="font-display mt-5 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.08] tracking-display text-ink sm:text-4xl lg:text-[2.35rem]"
          >
            {t.process.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
            {t.process.subtitle}
          </p>
        </FadeIn>

        <ol className="mt-24 grid items-stretch gap-6 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <FadeIn key={step.title} className="h-full min-h-0" delay={i * 0.07}>
              <motion.li
                whileHover={landingCardHover}
                transition={landingCardHoverTransition}
                className={cn(
                  landingCardMinH,
                  "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-cyan-200/55 bg-card-tone-3 p-7 shadow-card ring-1 ring-slate-900/[0.05] transition-[transform,box-shadow,border-color] duration-300 hover:border-cyan-300/55 hover:shadow-[0_12px_40px_-14px_rgba(14,165,233,0.12)]",
                  "dark:border-cyan-500/25 dark:bg-card-dark-3 dark:shadow-[0_16px_48px_-18px_rgba(0,0,0,0.55)] dark:ring-slate-950/50",
                  "dark:hover:border-cyan-400/45 dark:hover:shadow-[0_14px_40px_-14px_rgba(34,211,238,0.1)]",
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-sky-400/12 dark:from-slate-900/40 dark:via-transparent dark:to-cyan-950/25" />
                <span className="relative text-xs font-medium uppercase tracking-widest text-accent-soft/80">
                  {t.process.stepLabel} {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-3 font-display text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                {i < t.process.steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-accent-soft/35 to-transparent lg:block"
                    aria-hidden
                  />
                ) : null}
              </motion.li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
