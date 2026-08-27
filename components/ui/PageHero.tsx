"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, type BreadcrumbCrumb } from "@/components/seo/BreadcrumbJsonLd";

export type Crumb = BreadcrumbCrumb;

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  crumbs: Crumb[];
  ctaText?: string;
  ctaHref?: string;
  /** Big watermark word shown faintly on the right (defaults to last crumb label). */
  watermark?: string;
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  crumbs,
  ctaText,
  ctaHref = "/appointment",
  watermark,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const watermarkText = (watermark ?? crumbs[crumbs.length - 1]?.label ?? "").toUpperCase();

  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <BreadcrumbJsonLd crumbs={crumbs} />
      {/* Diagonal split background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-navy/60 to-dark" />
        {/* Angled orange slash */}
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-full w-[60%] origin-top-right -skew-x-12 bg-gradient-to-l from-primary/15 via-primary/5 to-transparent"
        />
        {/* Faint vertical rules */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "120px 100%",
          }}
        />
        {/* Soft glow */}
        <motion.div
          aria-hidden
          className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px]"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Giant watermark word on the right */}
      {watermarkText && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[14vw] font-black leading-none tracking-tighter text-white/[0.04] lg:text-[10rem]"
        >
          {watermarkText}
        </motion.span>
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:mb-8"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href && !last ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-primary"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-primary" : undefined}>{c.label}</span>
                  )}
                  {!last && <span className="text-white/30">/</span>}
                </li>
              );
            })}
          </ol>
        </motion.nav>

        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-6xl"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-3 max-w-2xl text-sm text-white/70 sm:mt-6 sm:text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right rail: meta + optional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 lg:pb-2"
          >
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
                Saint Louis Park, MN
              </div>

              {ctaText && (
                <Button href={ctaHref} variant="primary" size="md">
                  {ctaText}
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px origin-left bg-gradient-to-r from-primary via-primary/40 to-transparent sm:mt-12"
        />
      </div>

      {/* Angled bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-dark sm:h-12"
      />
    </section>
  );
}

export default PageHero;
