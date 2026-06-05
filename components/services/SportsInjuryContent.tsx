"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const benefits = [
  {
    title: "Whole-body, integrated approach",
    body: "Chiropractic care treats the body as one connected system — not a single injury in isolation.",
  },
  {
    title: "Less time on the sidelines",
    body: "Spinal adjustments and physical therapy help muscles, tendons, and ligaments return to normal function.",
  },
  {
    title: "Less reliance on pain meds",
    body: "Address the cause of pain instead of icing and medicating after every game.",
  },
  {
    title: "Maximize athletic performance",
    body: "Used by professional athletes to keep the musculoskeletal system in its healthiest, most natural state.",
  },
];

const focusAreas = ["Spine", "Joints", "Muscles", "Tendons", "Nerves"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SportsInjuryContent() {
  return (
    <>
      <ServiceHero
        title="Sports Injury"
        subtitle="Whole-body chiropractic care for athletes and weekend warriors — recover faster and perform at your peak."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Injuries", href: "/injuries" },
          { label: "Sports Injury" },
        ]}
      />

      {/* SECTION 2 — WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Built for athletes
                  </p>
                  <p className="mt-4 font-heading text-5xl font-black leading-none text-[#F97316]">
                    1:1
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Chiropractors are to athletes as cardiologists are to those
                    who suffer from cardiovascular disease — specialists in
                    keeping the system working at its best.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Performance & Recovery
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Even the most conditioned athletes get hurt
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Professional athletes are constantly reaching new heights in
                their professional careers. With each passing year, new records
                are shattered and the human body is pushed to its limits.
                Competitors train rigorously and take their diets to a new
                level every day. Yet despite the conscientious care and
                precautions that athletes follow, most experience
                musculoskeletal injuries at one time or another.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: HOLISTIC vs MEDICAL APPROACH */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              The Difference
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              An integrated approach, not an isolated one
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
              <p>
                Athletes who receive treatment from a medical doctor find
                themselves frequently benched and on the sidelines. Others play
                and then spend hours after the game icing their injuries and
                taking pain medication. This is because medical doctors do not
                treat the body as an integrated system, but rather treat each
                injury individually.
              </p>
              <p>
                Meanwhile, chiropractic treatment offers a balanced, holistic
                approach, by using spinal adjustments and physical therapy
                techniques to help the patient’s muscles, tendons, and
                ligaments return to their normal function.
              </p>
            </div>
          </motion.div>

          {/* Focus areas chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
              Special attention is given to
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
                  />
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: BENEFIT CARDS, stagger */}
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
              Why Athletes Choose Chiropractic
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Recover smarter. Perform stronger.
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Chiropractic care meticulously tends to the needs of the athlete
              and ensures that all pieces of the musculoskeletal system are
              working harmoniously in their healthiest, most natural state.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {benefits.map((b, i) => (
              <motion.article
                key={b.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 shadow-xl shadow-slate-900/10"
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F97316]/10 blur-2xl"
                />
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-heading text-4xl font-black text-white/[0.06]"
                >
                  0{i + 1}
                </span>
                <h3 className="relative font-heading text-lg font-bold text-white">
                  {b.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/75">
                  {b.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — DARK NAVY: CLOSING + CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
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
                Athlete or weekend warrior
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Reach your peak without breaking yourself
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
                Professional athletes recognize tremendous value in
                chiropractic care because they realize that it helps them
                maximize athletic performance. Whether you’re an athlete or
                weekend warrior, receiving chiropractic care will enable you
                to reach an optimum level of achievement without breaking
                yourself. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  (952) 920-7535
                </a>{" "}
                to book an evaluation.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Train. Recover. Repeat."
                title="Get back in the game"
                body="Schedule a sports injury evaluation with Dr. Levitt."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
