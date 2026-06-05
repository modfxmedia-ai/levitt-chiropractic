"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const objectives = [
  "Increasing mobility",
  "Releasing contracted muscles, tendons, and fascia",
  "Mobilizing joints",
  "Improving circulation",
  "Improving respiratory capacity",
  "Improving coordination",
  "Reducing rigidity",
  "Improving balance",
];

const categories = [
  {
    name: "Endurance Training",
    body: "Builds stamina and cardiovascular capacity over longer durations of activity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M3 12h4l3-7 4 14 3-7h4" />
      </svg>
    ),
  },
  {
    name: "Resistance Training",
    body: "Strengthens muscles and connective tissue using progressive load.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M2 12h2M20 12h2M5 8v8M19 8v8M8 6v12M16 6v12M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Flexibility Training",
    body: "Restores range of motion and helps prevent re-injury.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M3 17c4-8 14-8 18 0" />
        <path d="M6 17l-2 4M18 17l2 4" />
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

export default function TherapeuticExerciseContent() {
  return (
    <>
      <ServiceHero
        title="Therapeutic Exercise"
        subtitle="Specific exercises to correct specific problems — built to restore flexibility, strength, and endurance."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Therapeutic Exercise" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              What It Is
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Movement, prescribed for your body
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Therapeutic exercises are specific exercises meant for
              correcting specific problems. Depending on the matter of your
              concern, your chiropractor may give you a list of exercises to
              perform to reduce discomfort. The focus of therapeutic exercise
              is to regain flexibility, strength, and endurance related to
              specific physical problems.
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Therapeutic exercise aims to improve, restore, and prevent loss
              of physical function. It can also improve a patient’s overall
              health, fitness, and sense of well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: OBJECTIVES */}
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
              Additional Objectives
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What therapeutic exercise targets
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-8 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {objectives.map((o, i) => (
              <motion.li
                key={o}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group relative overflow-hidden rounded-xl border-t-2 border-[#F97316]/70 bg-[#1E3A5F]/50 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-[#1E3A5F]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  0{i + 1}
                </span>
                <p className="mt-2 text-sm font-semibold leading-snug text-white">
                  {o}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* SECTION 4 — WHITE: 3 CATEGORIES */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Three Major Categories
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              How therapeutic exercise is classified
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
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {categories.map((c) => (
              <motion.div
                key={c.name}
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
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/20">
                  {c.icon}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#0F172A]">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-slate-700 sm:text-lg"
          >
            No matter what type of exercise is prescribed to remedy a
            patient’s specific condition, the final goal of rehabilitation is
            to acquire a maximum level of physical fitness — without the use
            of more invasive methods. Therapeutic exercise can be performed at
            home, and gives you the power to improve your quality of life.
          </motion.p>
        </div>
      </section>

      {/* SECTION 5 — DARK NAVY: CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#F97316]/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Take the Next Step
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Get an exercise plan built for you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Talk with Dr. Levitt about a therapeutic exercise plan
                tailored to your condition. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-orange-300 underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>{" "}
                today.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Move Better"
                title="Build your exercise plan"
                body="Schedule a chiropractic evaluation today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
