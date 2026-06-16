"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import type { ServedCity } from "@/lib/areasData";
import { servedCities } from "@/lib/areasData";
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

export default function AreaCityPageContent({ city }: { city: ServedCity }) {
  const sameRegionCities = servedCities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 8);

  const distanceCopy =
    city.distanceMi === 0
      ? `Our office is in ${city.name} itself.`
      : `${city.name} is about ${city.distanceMi} ${city.distanceMi === 1 ? "mile" : "miles"} from our Saint Louis Park office.`;

  return (
    <>
      <ServiceHero
        title={`Chiropractor in ${city.name}, MN`}
        subtitle={`Drug-free chiropractic care for ${city.name} families — adjustments, cold laser, cryotherapy, custom orthotics and more.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: city.name },
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
              Serving {city.name}, Minnesota
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {distanceCopy} Dr. Alan Levitt has cared for patients across the{" "}
              {city.region.toLowerCase()} for more than 35 years — including
              {" "}
              {city.name} families near {city.landmark} and the surrounding{" "}
              {neighborsPhrase(city)} neighborhoods. Whether you're managing
              chronic back pain, recovering from a recent injury, or chasing
              better performance for an active lifestyle, our care is built
              around you, not a template.
            </p>
            <p className="mt-4 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Below is the full list of chiropractic services available to
              {" "}
              {city.name} residents. Click any service for the full overview.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All services grid */}
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
              Services for {city.name}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              All chiropractic care available to{" "}
              <span className="text-[#F97316]">{city.name} residents</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pseoServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.03 }}
              >
                <Link
                  href={`/areas-we-serve/${city.slug}/${s.slug}`}
                  className="group block h-full rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-[#1E3A5F]/80 hover:ring-white/20"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white transition-colors group-hover:text-orange-200">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.tagline}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">
                    Explore in {city.name}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {sameRegionCities.length > 0 && (
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
                Nearby Areas We Serve
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Other communities near {city.name}
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-4 block h-1 w-12 rounded-full bg-[#F97316]"
              />
            </motion.div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {sameRegionCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas-we-serve/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:border-[#F97316] hover:shadow-md"
                >
                  <span>{c.name}</span>
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
                href="/areas-we-serve"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316] hover:text-orange-700"
              >
                See every area we serve
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <CtaCard
            eyebrow={`Serving ${city.name}, MN`}
            title="Book your visit"
            body={`Call ${siteConfig.phone} or request an appointment online. Most ${city.name} patients are seen within the same week.`}
          />
        </div>
      </section>

      <LocationStrip />
    </>
  );
}

function neighborsPhrase(city: ServedCity): string {
  const n = city.neighbors;
  if (n.length === 0) return "surrounding";
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}
