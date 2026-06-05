"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const techniques = ["Acupuncture", "Chiropractic Care", "Naturopathy"];

const conditions = [
  "Back pain",
  "Neck pain",
  "Migraines",
  "Headaches",
  "Pinched nerves",
  "Herniated discs",
  "Digestive issues",
];

const benefits = [
  {
    title: "Care for Many Different Issues",
    body: "Alternative medicine can treat various symptoms and conditions — from back and neck pain to migraines, pinched nerves, herniated discs, digestive issues, and much more.",
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
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "It’s Personalized",
    body: "Care is customized to the individual. Two people experiencing the same issue rarely got there the same way — your plan reflects that.",
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
    title: "It Focuses on Natural Healing",
    body: "Removing restrictions through adjustments and soft-tissue therapies, fueling the body through nutritional guidance, and building healthy habits.",
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
        <path d="M12 2c3 5 3 9 0 14-3-5-3-9 0-14z" />
        <path d="M5 22c5-1 9-4 14-9" />
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

export default function AlternativeMedicineContent() {
  return (
    <>
      <ServiceHero
        title="Alternative Medicine"
        subtitle="Looking for effective and natural relief? Dr. Alan Levitt is the alternative medicine doctor you can trust."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Alternative Medicine" },
        ]}
      />

      {/* SECTION 2 — WHITE: WHAT IS / WHY VISIT */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                What Is Alternative Medicine?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Methods that lie outside the mainstream
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Alternative medicine is a term used to describe methods and
                techniques that lie outside the standard or mainstream medical
                methods. Though the type of techniques used depends on the
                provider you visit, some examples include:
              </p>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="mt-6 flex flex-wrap gap-2.5"
              >
                {techniques.map((t) => (
                  <motion.li
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/8 px-4 py-2 text-sm font-semibold text-[#0F172A]"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
                    />
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl ring-1 ring-white/10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                  Why Visit an Alternative Medicine Provider?
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-white/80">
                  Standard care tends to focus on relieving your symptoms.
                  That isn’t the issue — the issue is that the symptoms are
                  the main, and usually only, focus. This leaves the root
                  cause free to bring those symptoms back.
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-white/80">
                  The two main methods for treating symptoms are medication
                  and surgery. Sometimes these are necessary, but not as
                  often as they are prescribed — and they can leave patients
                  relying on substances or living with the aftereffects of
                  procedures.
                </p>
                <p className="relative mt-3 text-sm font-semibold leading-relaxed text-orange-200">
                  Alternative medicine is much different. It focuses on
                  healing from the root cause — using methods that enable the
                  body to heal itself.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: BENEFITS */}
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
              The Benefits
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What alternative medicine can do
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
            className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
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
                  {b.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Conditions strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 rounded-2xl bg-white/[0.03] p-7 ring-1 ring-white/10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
              Commonly Treated
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {conditions.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/85"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
                  />
                  {c}
                </li>
              ))}
            </ul>
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
                Visit your alternative medicine doctor
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Learn more by visiting Dr. Levitt at Levitt Chiropractic
                Center in Saint Louis Park, MN. Call{" "}
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
                  schedule online
                </Link>{" "}
                today.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Natural Healing"
                title="Try a different approach"
                body="Schedule your alternative medicine consultation."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
