"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";

const whiplashSigns = [
  "Blurred vision",
  "Headaches",
  "Shoulder pain",
  "Dizziness",
  "Reduced range of motion",
  "Arm pain",
];

const damageTypes = [
  {
    title: "Minor back injuries",
    body: "Strain and stiffness from the sudden force of impact.",
  },
  {
    title: "Muscle injuries",
    body: "Soft-tissue strain that can linger long after the crash.",
  },
  {
    title: "Ligament problems",
    body: "Stretched or torn ligaments that affect stability.",
  },
  {
    title: "Disc damage",
    body: "Stress on spinal discs that can lead to ongoing pain.",
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

export default function AutoInjuryContent() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* SECTION 1 — NARROW DARK NAVY HERO (45vh) */}
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
            <Link href="/" className="transition-colors hover:text-orange-300">
              Home
            </Link>{" "}
            <span className="text-white/30">/</span>{" "}
            <span className="text-white/55">Services</span>{" "}
            <span className="text-white/30">/</span>{" "}
            <span className="text-white/55">Injuries</span>{" "}
            <span className="text-white/30">/</span>{" "}
            <span className="text-orange-200">Auto Injury</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-heading text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            Auto Injury
          </motion.h1>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 block h-1 w-20 rounded-full bg-[#F97316]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            After a collision, your body comes first. Specialized chiropractic
            care for whiplash and soft- and hard-tissue damage from auto
            accidents.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — WHITE: INTRO + URGENT MESSAGE */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                You Come First
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Your injuries come before the car
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  One moment everything may seem fine, when suddenly you’re
                  involved in a serious collision. Most people have one thing
                  on their mind after a car accident — their car! However, it’s
                  important to remember that you and your injuries come first.
                </p>
                <p>
                  A visit to a chiropractor should always follow an auto
                  injury, as chiropractors are specialists in damage to soft
                  and hard tissue.
                </p>
              </div>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                  <span
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F97316]/15 blur-2xl"
                  />
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
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
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    </span>
                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                      Important
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-white">
                      Treat pain or whiplash before your car or insurance
                      paperwork.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/75">
                      Treating pain or whiplash should never be secondary to
                      bringing your car to the mechanic or working with your
                      insurance company. If you’ve had an auto accident
                      recently, your first priority should be taking the
                      initiative to visit your chiropractor.
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: HOW A CHIROPRACTOR HELPS + WHIPLASH SIGNS */}
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
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              After the Accident
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How Can a Chiropractor Help Me After My Auto Accident?
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
              Chiropractors are able to treat neck and back injuries associated
              with auto accidents. Many times, individuals who have been
              injured in a car accident experience such intense muscle pain and
              stiffness that they simply cannot function normally. When left
              untreated, this discomfort can be a serious issue.
            </p>
          </motion.div>

          {/* Whiplash signs grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-14 max-w-5xl"
          >
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
              Watch For Whiplash Signs
            </p>
            <h3 className="mt-2 text-center font-heading text-2xl font-bold text-white sm:text-3xl">
              Some indicators appear right away
            </h3>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: {
                  transition: { delayChildren: 0.1, staggerChildren: 0.05 },
                },
              }}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {whiplashSigns.map((s) => (
                <motion.div
                  key={s}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{
                    borderColor: "rgba(249,115,22,0.55)",
                    y: -3,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1E3A5F]/60 px-4 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/5 backdrop-blur-sm sm:px-5 sm:py-4 sm:text-base"
                >
                  <span
                    aria-hidden
                    className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/40"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  <span>{s}</span>
                </motion.div>
              ))}
            </motion.div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/65 sm:text-base">
              Other individuals may be injured and feel nothing at all — which
              is why an evaluation is so important even when you feel okay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: TYPES OF DAMAGE WHIPLASH CAN CAUSE */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Whiplash Damage
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Whiplash can also result in:
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {damageTypes.map((d, i) => (
              <motion.article
                key={d.title}
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
                  {d.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/75">
                  {d.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — DARK NAVY: CLOSING + FLOATING CTA */}
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
                Take Action
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Get checked out — even if you feel fine
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
                If you’ve had an auto accident recently, your first priority
                should be taking the initiative to visit your chiropractor.
                Dr. Levitt specializes in evaluating and treating the soft- and
                hard-tissue damage that accidents leave behind. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  (952) 920-7535
                </a>{" "}
                to schedule an evaluation.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <motion.aside
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="sticky top-28 overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F] p-8 shadow-2xl ring-1 ring-white/10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    After an Accident
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                    Get an evaluation
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Don’t wait for symptoms to worsen.
                  </p>

                  <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                      Call Now
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-1 block font-heading text-2xl font-black text-orange-400 transition-colors hover:text-orange-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="mt-5"
                  >
                    <Link
                      href="/appointment"
                      className="flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition-colors hover:bg-orange-600"
                    >
                      Request Appointment →
                    </Link>
                  </motion.div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHITE: LOCATION STRIP */}
      <LocationStrip />
    </>
  );
}
