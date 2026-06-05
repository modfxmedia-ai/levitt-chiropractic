"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Region = {
  region: string;
  vertebrae: string;
  affects: string;
};

const regions: Region[] = [
  {
    region: "Cervical",
    vertebrae: "C1 – C7",
    affects:
      "Head, face, scalp, sinuses, eyes, ears, neck, shoulders, arms, and hands.",
  },
  {
    region: "Thoracic",
    vertebrae: "T1 – T12",
    affects:
      "Heart, lungs, esophagus, stomach, gallbladder, liver, kidneys, and small intestine.",
  },
  {
    region: "Lumbar",
    vertebrae: "L1 – L5",
    affects:
      "Lower back, abdomen, reproductive organs, bladder, legs, knees, and feet.",
  },
  {
    region: "Sacral / Coccyx",
    vertebrae: "S1 – S5",
    affects:
      "Hips, pelvis, buttocks, sciatic nerve — and overall pelvic stability.",
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

export default function SpineSimulatorContent() {
  return (
    <>
      <ServiceHero
        title="3D Spine Simulator"
        subtitle="Explore which areas of your body are influenced by each region of your spine — and see why alignment matters."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "3D Spine Simulator" },
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
              Your Nervous System, Visualized
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              The spine controls more than you think
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              All of the functions related to the amazing human body are
              controlled and coordinated by the extensive neural network.
              Interference or stresses in any part of the nerve system may
              result in health problems in a variety of areas throughout our
              bodies.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Take a moment and explore which areas of the body are
              influenced by the different areas of your spine. You&rsquo;ll
              be amazed at how the spine and nerve system are interrelated
              and connected to every aspect of our expression of health and
              wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — DARK NAVY: SPINE REGIONS GUIDE */}
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
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left — vertical spine illustration */}
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
                  className="absolute -inset-6 -z-10 rounded-3xl bg-[#F97316]/10 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    The 4 Regions
                  </p>
                  <p className="mt-3 font-heading text-3xl font-black leading-tight text-white">
                    Your spine,
                    <br />
                    head to tail.
                  </p>

                  <ul className="mt-8 space-y-1">
                    {regions.map((r, i) => (
                      <li
                        key={r.region}
                        className="flex items-center gap-4 border-t border-white/10 py-4 first:border-t-0"
                      >
                        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#F97316]/15 font-heading text-sm font-black text-[#F97316] ring-1 ring-[#F97316]/30">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-heading text-sm font-bold text-white">
                            {r.region}
                          </p>
                          <p className="text-xs text-white/60">{r.vertebrae}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    33 vertebrae · 31 nerve pairs
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — region details */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                  Region by Region
                </p>
                <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  What each section affects
                </h3>
                <span
                  aria-hidden
                  className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
                />
              </motion.div>

              <div className="mt-8 space-y-4">
                {regions.map((r, i) => (
                  <motion.div
                    key={r.region}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="group rounded-2xl border border-white/10 bg-[#1E3A5F]/40 p-6 backdrop-blur-sm transition-colors hover:bg-[#1E3A5F]/70"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-heading text-3xl font-black text-[#F97316]/70 group-hover:text-[#F97316]">
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h4 className="font-heading text-lg font-bold text-white">
                            {r.region}
                          </h4>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                            {r.vertebrae}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          {r.affects}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHITE: CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
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
                See It in Person
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Walk through your spine with Dr. Levitt
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                During your visit, Dr. Levitt will walk through your specific
                spinal regions, explain what we&rsquo;re seeing, and map your
                symptoms to the nerves involved. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/resources/about-chiropractic"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  read more about chiropractic
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Curious About Your Spine?"
                title="Book a consultation"
                body="See exactly what we&rsquo;re looking at — together."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
