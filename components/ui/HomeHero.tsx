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

  const words = title.split(" ");

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden bg-dark text-white"
    >
      {/* Parallax background image */}
      {backgroundImage && (
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: bgY }}
          className="absolute inset-0 -z-30 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </motion.div>
      )}

      {/* Gradient overlays */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-dark via-dark/85 to-dark/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-t from-dark via-dark/30 to-transparent"
      />

      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
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
          {[...Array(12)].map((_, i) => (
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

      {/* Top-right glowing ring */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-10 top-20 -z-10 hidden h-72 w-72 rounded-full border border-primary/30 lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
        </motion.div>
      )}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-24 top-32 -z-10 hidden h-44 w-44 rounded-full border border-white/10 lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70" />
        </motion.div>
      )}

      {/* Main content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-6 py-28 sm:py-36 lg:py-44"
      >
        <motion.div
          variants={reduce ? undefined : containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
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

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
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
            className="mt-8 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-primary to-orange-400"
          />

          {subtitle && (
            <motion.p
              variants={reduce ? undefined : fadeUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaText || secondaryCtaText) && (
            <motion.div
              variants={reduce ? undefined : fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
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
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8"
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

      {/* Scroll indicator */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
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
