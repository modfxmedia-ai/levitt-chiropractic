"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const facts = [
  {
    title: "It Gets to the Heart of the Matter",
    body: "Functional medicine provides an approach through which you can experience true healing and health. It focuses on assessing the body, its various systems, and how everything is functioning to determine what is actually causing the symptoms you experience. It’s incredibly effective because it digs up the root and treats it.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
      </svg>
    ),
  },
  {
    title: "It’s Highly Personalized",
    body: "Functional medicine providers don’t glaze over your symptoms and provide a generic treatment plan. They take a look at various factors in your life, including everything from genetics to daily habits.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "It Utilizes a Holistic Approach",
    body: "Treatment includes a variety of areas. In addition to adjustments for back pain, your plan might address poor sleep positions, nutrition issues, and weakened muscles. Headaches might be treated through stress management, chiropractic manipulation, diet, and exercise.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
  {
    title: "It’s Effective for a Wide Range of Conditions",
    body: "This method of care is beneficial in many treatment plans, including for fibromyalgia, sciatica, joint pain, degenerative disc disease, and more.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M9 11h6M9 15h4" />
        <path d="M5 7a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" />
      </svg>
    ),
  },
  {
    title: "It Creates Lasting Results",
    body: "Functional medicine focuses on addressing underlying issues that cause your symptoms. In doing so, it provides a path to optimal healing — benefits you can reap for years, or decades, to come.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 2l3 7h7l-5.5 4 2 8-6.5-4.5L5.5 21l2-8L2 9h7z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FunctionalMedicineContent() {
  return (
    <>
      <ServiceHero
        title="Functional Medicine"
        subtitle="From chronic pain to chronic illness — Dr. Alan Levitt provides functional medicine to help you achieve optimal relief."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Functional Medicine" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              5 Facts to Know
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Functional medicine, demystified
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Functional medicine is becoming a more common term, but there is
              still some confusion around the topic. To help provide some
              clarity, Dr. Levitt and the team at Levitt Chiropractic Center
              in Saint Louis Park, MN share five important facts below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: 5 FACTS */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              The Five Facts
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why functional medicine works
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {facts.map((f, i) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-heading text-4xl font-black text-white/[0.06]"
                >
                  0{i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                  {f.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CLOSING + CTA */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Get Started
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Discover what functional medicine can do for you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Learn more about functional medicine with a visit to Dr. Alan
                Levitt at Levitt Chiropractic Center in Saint Louis Park, MN.
                Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>{" "}
                today.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Functional Medicine"
                title="Heal at the root"
                body="Schedule a personalized consultation with Dr. Levitt."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
