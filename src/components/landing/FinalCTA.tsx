"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionPatterns } from "@/components/ui/SectionPatterns";
import { FadeIn } from "@/components/motion/FadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";

const CONTACT_MAIL = "info@bosphox.com";

export function FinalCTA() {
  const { t, language } = useLanguage();
  const f = t.cta.form;

  const subject = language === "tr" ? "BosphoX — Proje talebi" : "BosphoX — Project inquiry";
  const bodyTemplate =
    language === "tr"
      ? ["Ad Soyad:", "Sirket:", "Proje Ozeti:", "Hedef Tarih:", "Butce Araligi:"].join("\n")
      : ["Full Name:", "Company:", "Project Summary:", "Target Timeline:", "Budget Range:"].join("\n");
  const mailtoHref = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-24 sm:py-36" aria-labelledby="cta-heading">
      <SectionPatterns />
      <Container className="relative z-[1]">
        <FadeIn>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-cyan-200/50 bg-card-tone-2 px-6 py-12 shadow-card ring-1 ring-slate-900/[0.04] transition-shadow duration-300 hover:border-cyan-300/55 hover:shadow-[0_20px_48px_-20px_rgba(14,165,233,0.14)] dark:border-cyan-500/25 dark:bg-card-dark-2 dark:shadow-[0_20px_52px_-20px_rgba(0,0,0,0.55)] dark:ring-slate-950/50 dark:hover:border-cyan-400/40 dark:hover:shadow-[0_20px_48px_-18px_rgba(34,211,238,0.08)] sm:px-10 sm:py-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(14,165,233,0.14),transparent_55%)] opacity-90 dark:opacity-60" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/30 to-transparent opacity-90" />

            <div className="relative mx-auto max-w-xl">
              <h2
                id="cta-heading"
                className="font-display text-balance text-center text-[1.65rem] font-semibold leading-[1.12] tracking-display text-ink sm:text-3xl lg:text-[2.25rem]"
              >
                {t.cta.title}
              </h2>
              <p className="mt-4 text-center text-base font-medium leading-relaxed text-slate-800 dark:text-slate-300 sm:text-[1.0625rem]">
                {t.cta.subtitle}
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-cyan-200/80 bg-white/80 p-5 dark:border-cyan-500/30 dark:bg-slate-900/60">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{f.mailGuideTitle}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {f.mailGuideItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <a
                    href={mailtoHref}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-accent-soft/35 bg-gradient-to-r from-accent-soft to-accent px-4 py-3 text-sm font-semibold text-[#061018] shadow-glow transition-[filter,box-shadow] hover:brightness-[1.03] hover:border-accent-soft/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60 sm:w-auto sm:min-w-[16rem]"
                  >
                    {f.altMail}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}
