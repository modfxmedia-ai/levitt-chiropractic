"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "./Button";

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  ctaText = "Request Appointment",
  ctaHref = "/contact/appointment-request",
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const spineY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const words = title.split(" ");

  return (
    <section
      ref={ref}
      className="relative isolate flex w-full items-center overflow-hidden bg-dark text-white lg:min-h-[92vh]"
    >
      {/* Parallax background image */}
      {backgroundImage && (
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: bgY }}
          className="absolute inset-0 -z-30 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </motion.div>
      )}

      {/* Gradient overlays */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-dark via-dark/95 to-dark/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-t from-dark via-dark/40 to-transparent"
      />

      {/* Soft radial spotlight (replaces grid) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(249,115,22,0.08), transparent 70%)",
        }}
      />

      {/* Animated orange blob */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -left-24 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]"
          animate={{
            x: [0, 60, -20, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Animated navy blob */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -right-32 bottom-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-navy/60 blur-[140px]"
          animate={{
            x: [0, -50, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating particles */}
      {!reduce && (
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary/60"
              style={{
                left: `${(i * 8.3 + 7) % 100}%`,
                top: `${(i * 13.7 + 11) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4 + (i % 5),
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main grid */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-12 lg:gap-12 lg:py-32">
        {/* LEFT — Content */}
        <motion.div
          style={
            reduce ? undefined : { y: contentY, opacity: contentOpacity }
          }
          className="lg:col-span-7"
        >
          <motion.div
            variants={reduce ? undefined : containerVariants}
            initial="hidden"
            animate="show"
          >
            {eyebrow && (
              <motion.div
                variants={reduce ? undefined : fadeUp}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-primary"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-6xl xl:text-7xl">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={reduce ? undefined : wordVariants}
                  className="inline-block whitespace-pre"
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </h1>

            {/* Animated underline accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
              className="mt-6 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-primary to-orange-400 sm:mt-8 sm:w-24"
            />

            {subtitle && (
              <motion.p
                variants={reduce ? undefined : fadeUp}
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg lg:text-xl"
              >
                {subtitle}
              </motion.p>
            )}

            {(ctaText || secondaryCtaText) && (
              <motion.div
                variants={reduce ? undefined : fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
              >
                {ctaText && (
                  <Button href={ctaHref} size="lg" variant="primary">
                    {ctaText}
                  </Button>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Button href={secondaryCtaHref} size="lg" variant="outline">
                    {secondaryCtaText}
                  </Button>
                )}
              </motion.div>
            )}

            {/* Stats / trust indicators */}
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:mt-12 sm:gap-x-10 sm:gap-y-6 sm:pt-8"
            >
              <div>
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  35+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Years experience
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Since 1999
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Saint Louis Park
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Holistic
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  Whole-body care
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Animated Spine Illustration */}
        <motion.div
          style={reduce ? undefined : { y: spineY }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <SpineGraphic reduce={!!reduce} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 p-1.5">
              <motion.span
                className="h-1.5 w-1 rounded-full bg-primary"
                animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function SpineGraphic({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Soft orange glow halo */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-orange-500/10 to-transparent blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Decorative back-card 1 */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, rotate: -6, x: -28, y: 18 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-orange-300/5 ring-1 ring-primary/30"
        />
      )}

      {/* Decorative back-card 2 */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, rotate: 4, x: 22, y: -14 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="absolute inset-0 -z-10 rounded-[2rem] bg-navy/40 ring-1 ring-white/10 backdrop-blur-sm"
        />
      )}

      {/* MAIN — Hero image card */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 30, scale: 0.96 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-2xl shadow-black/50"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/adjustment-1.jpg)" }}
        />

        {/* Image color treatment + readability gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-dark/0"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-navy/30 mix-blend-overlay"
        />

        {/* Sweeping scan line */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            animate={{ y: ["-20%", "120%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        )}

        {/* Top-left: live indicator */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-dark/70 px-3 py-1.5 backdrop-blur-md ring-1 ring-white/10">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
            Now accepting new patients
          </span>
        </div>

        {/* Bottom badge: doctor info */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-dark/70 p-3 backdrop-blur-md ring-1 ring-white/10"
        >
          <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-orange-600 font-heading text-base font-black text-white shadow-lg shadow-primary/30">
            AL
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-sm font-bold text-white">
              Dr. Alan Levitt, D.C.
            </p>
            <p className="truncate text-[10px] uppercase tracking-[0.18em] text-white/60">
              Saint Louis Park · 35+ yrs
            </p>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0 text-primary"
            aria-hidden
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </motion.div>
      </motion.div>

      {/* FLOATING — Rating card (top right) */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: 30, y: -10 }}
        animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
        className="absolute -right-4 top-10 hidden sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-white p-4 shadow-2xl shadow-black/30 ring-1 ring-black/5"
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="#F97316"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 font-heading text-2xl font-black leading-none text-dark">
            5.0
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Patient Reviews
          </p>
        </motion.div>
      </motion.div>

      {/* FLOATING — Treatment chip (bottom left) */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: -30, y: 10 }}
        animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="absolute -left-6 bottom-24 hidden sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-dark/80 p-4 shadow-2xl shadow-black/40 ring-1 ring-primary/30 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M9 11l3 3L22 4" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Specialties
              </p>
              <p className="font-heading text-sm font-bold text-white">
                6+ Therapies
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FLOATING — Insurance / accepted (top left) */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: -20, y: -20 }}
        animate={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
        className="absolute -left-2 top-32 hidden xl:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="rounded-xl bg-white/95 px-4 py-2.5 shadow-xl shadow-black/30 ring-1 ring-black/5"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="text-[11px] font-semibold text-dark">
              Most insurance accepted
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
