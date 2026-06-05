"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const stats = [
  { value: "35+", label: "Years in private practice" },
  { value: "1986", label: "Graduated Northwestern College of Chiropractic" },
  { value: "1981", label: "Began studies at the University of Minnesota" },
];

const personal = [
  "Married with 3 grown children",
  "Loves live music & sporting events",
  "Enjoys travel and making food",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function MeetTheDoctorContent() {
  return (
    <>
      <ServiceHero
        title="Meet the Doctor"
        subtitle="Dr. Alan G. Levitt, DC — born, raised, and practicing in Saint Louis Park, Minnesota."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Meet the Doctor" },
        ]}
      />

      {/* SECTION 2 — WHITE: BIO SPLIT */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Portrait card */}
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
                <div className="relative overflow-hidden rounded-3xl border-t-4 border-[#F97316] bg-[#0F172A] text-white shadow-2xl ring-1 ring-white/10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0F172A]">
                    <Image
                      src="/images/dr-alan-g-levitt-dc.png"
                      alt="Dr. Alan G. Levitt, DC"
                      fill
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 90vw"
                      className="object-cover"
                      priority
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/10 to-transparent"
                    />
                  </div>
                  <div className="px-7 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                      Your Chiropractor
                    </p>
                    <p className="mt-1 font-heading text-xl font-bold text-white">
                      Dr. Alan G. Levitt, DC
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Saint Louis Park, MN
                    </p>
                  </div>
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
                His Story
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Born and raised in Saint Louis Park
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Levitt was born and raised in St Louis Park, Minnesota.
                He attended local public schools including St Louis Park
                High School. In 1981 he attended the University of Minnesota
                fulfilling his requirements to attend Chiropractic School.
                In December 1986 he graduated from Northwestern College of
                Chiropractic in Bloomington, Minnesota.
              </p>
              <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Levitt has been in private practice for 35+ years in the
                St. Louis Park area. He still loves going to work daily to
                help improve the quality of life of his patients and is
                always looking to help others on their health journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: STATS */}
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
              Education & Experience
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A career devoted to your spine
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
            className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
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
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 text-center ring-1 ring-white/10 backdrop-blur-sm"
              >
                <p className="font-heading text-5xl font-black text-[#F97316]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: PERSONAL + CTA */}
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
                Outside the Office
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Family man, music lover, foodie
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Levitt is married with 3 grown children — 2 are in
                college and 1 lives in Colorado. He really enjoys spending
                time with his wife and children, live music, sporting events,
                travel, and making food.
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
                {personal.map((p) => (
                  <motion.li
                    key={p}
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
                    {p}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">
                Ready to meet Dr. Levitt? Call{" "}
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
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Meet Dr. Levitt"
                title="Schedule your visit"
                body="Make an appointment today and start feeling better."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
