"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import type { ServedCity } from "@/lib/areasData";
import type { PseoService } from "@/lib/pseoServices";
import { pseoServices } from "@/lib/pseoServices";
import { ServiceHero } from "@/components/services/ServiceHero";
import { LocationStrip } from "@/components/services/LocationStrip";
import { CtaCard } from "@/components/services/CtaCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Props = {
  city: ServedCity;
  service: PseoService;
};

export default function AreaServicePageContent({ city, service }: Props) {
  const conditionsList = service.conditions
    .map((c, i, arr) =>
      i === arr.length - 1 && arr.length > 1 ? `and ${c}` : c,
    )
    .join(arr2(service.conditions));

  const distanceCopy =
    city.distanceMi === 0
      ? `Our office is located right here in ${city.name} —`
      : city.distanceMi <= 10
      ? `Our ${city.name} patients are just ${city.distanceMi} miles from our Saint Louis Park office —`
      : `${city.name} patients drive about ${city.distanceMi} miles to reach us in Saint Louis Park —`;

  const relatedServices = pseoServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      <ServiceHero
        title={`${service.name} in ${city.name}, MN`}
        subtitle={service.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: city.name, href: `/areas-we-serve/${city.slug}` },
          { label: service.name },
        ]}
      />

      {/* Intro */}
      <section className="relative bg-white py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {city.region} · {city.county} County
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              {service.name} for {city.name} residents
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {distanceCopy} a short drive past {landmarkPhrase(city)} from
              {" "}
              {neighborsPhrase(city)}. Dr. Alan Levitt has been delivering{" "}
              {service.inlineNoun} to families across the {city.region.toLowerCase()}{" "}
              for more than 35 years. If you live or work in {city.name},
              you'll find an evidence-informed, drug-free approach designed
              around your specific case — not a one-size-fits-all protocol.
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Common reasons {city.name} patients come to us for{" "}
              {service.inlineNoun}: {conditionsList}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              What We Deliver
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {service.name} —{" "}
              <span className="text-[#F97316]">built around you</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b, idx) => (
              <motion.div
                key={b}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  Benefit {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/90">
                  {b}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              {city.name} Patient Questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Frequently asked
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-10 space-y-4">
            {service.faqs.map((f, idx) => (
              <motion.div
                key={f.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-slate-50 p-6 shadow-sm"
              >
                <p className="font-heading text-lg font-bold text-[#0F172A]">
                  {f.q}
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {f.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-slate-50 py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Other Services in {city.name}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              Browse related care
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-12 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/areas-we-serve/${city.slug}/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#F97316] hover:shadow-md"
              >
                <span>
                  {s.name}{" "}
                  <span className="text-slate-500">in {city.name}</span>
                </span>
                <span
                  aria-hidden
                  className="text-[#F97316] transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/areas-we-serve/${city.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316] hover:text-orange-700"
            >
              See all services in {city.name}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow={`Serving ${city.name}, MN`}
            title={`Book your ${service.name.toLowerCase()} visit`}
            body={`Call ${siteConfig.phone} or request an appointment online — most ${city.name} patients are seen within the same week.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}

/** Oxford-style joiner: ["a","b","c"] → ", " (then `and c` is added by caller) */
function arr2(items: string[]): string {
  return items.length > 2 ? ", " : " ";
}

function neighborsPhrase(city: { neighbors: string[] }): string {
  const n = city.neighbors;
  if (n.length === 0) return "the surrounding area";
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

function landmarkPhrase(city: { landmark: string }): string {
  return city.landmark;
}
