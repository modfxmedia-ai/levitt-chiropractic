"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Crumb = {
  label: string;
  href?: string;
};

type ServiceHeroProps = {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
};

export function ServiceHero({ title, subtitle, crumbs }: ServiceHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate flex items-center overflow-hidden bg-[#0F172A] text-white"
      style={{ minHeight: "45vh" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#F97316]/15 blur-[140px]"
        animate={reduce ? undefined : { y: [0, 22, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-12 sm:pt-32">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-400"
        >
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={`${c.label}-${i}`}>
                {i > 0 && <span className="text-white/30"> / </span>}
                {c.href && !isLast ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-orange-300"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-orange-200" : "text-white/55"}
                  >
                    {c.label}
                  </span>
                )}
              </span>
            );
          })}
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]"
        >
          {title}
        </motion.h1>

        <motion.span
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ transformOrigin: "left" }}
          className="mt-4 block h-1 w-20 rounded-full bg-[#F97316]"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
