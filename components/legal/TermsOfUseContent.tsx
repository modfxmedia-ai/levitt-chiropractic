"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Section = { id: string; title: string; body: React.ReactNode };

const sections: Section[] = [
  {
    id: "terms",
    title: "Terms",
    body: (
      <p>
        By accessing this website, you are agreeing to be bound by the website
        Terms and Conditions of Use, all applicable laws and regulations, and
        agree that you are responsible for compliance with any applicable
        local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site. The materials contained
        in this website are protected by applicable copyright and trademark
        law.
      </p>
    ),
  },
  {
    id: "license",
    title: "License",
    body: (
      <>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on this website for personal,
          non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title, and under this license, you may
          not:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li>
            attempt to decompile or reverse engineer any software contained on
            this website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transfer the materials to another person or &ldquo;mirror&rdquo;
            the materials on any other server.
          </li>
        </ul>
        <p className="mt-4">
          This license shall automatically terminate if you violate any of
          these restrictions and may be terminated by us at any time. Upon
          terminating your viewing of these materials or upon the termination
          of this license, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The materials on this website are provided &ldquo;as is&rdquo;. We
        make no warranties, expressed or implied, and hereby disclaim and
        negate all other warranties, including without limitation, implied
        warranties or conditions of merchantability, fitness for a particular
        purpose, or non-infringement of intellectual property or other
        violation of rights. Further, we do not warrant or make any
        representations concerning the accuracy, likely results, or
        reliability of the use of the materials on its Internet website or
        otherwise relating to such materials or on any sites linked to this
        site.
      </p>
    ),
  },
  {
    id: "limitations",
    title: "Limitations",
    body: (
      <p>
        In no event shall we or our suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to
        use the materials on this site, even if we or an authorized
        representative has been notified orally or in writing of the
        possibility of such damage. Because some jurisdictions do not allow
        limitations on implied warranties or limitations of liability for
        consequential or incidental damages, these limitations may not apply
        to you.
      </p>
    ),
  },
  {
    id: "revisions",
    title: "Revisions and Errata",
    body: (
      <p>
        The materials appearing on this website could include technical,
        typographical, or photographic errors. We do not warrant that any of
        the materials on its website are accurate, complete, or current. We
        may make changes to the materials contained on its website at any
        time without notice. We do not, however, make any commitment to
        update the materials.
      </p>
    ),
  },
  {
    id: "links",
    title: "Links",
    body: (
      <p>
        We have not reviewed all of the sites linked to its Internet website
        and are not responsible for the contents of any such linked site. The
        inclusion of any link does not imply endorsement by us. Use of any
        such linked website is at the user&rsquo;s own risk.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Site Terms of Use Modifications",
    body: (
      <p>
        We may revise these terms of use for its website at any time without
        notice. By using this website you are agreeing to be bound by the
        then-current version of these Terms and Conditions of Use.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <>
        <p>
          Any claim relating to this website shall be governed by the laws of
          the State of Minnesota without regard to its conflict of law
          provisions.
        </p>
        <p className="mt-4 text-sm italic text-slate-500">
          General Terms and Conditions are applicable to the use of a website.
        </p>
      </>
    ),
  },
];

export default function TermsOfUseContent() {
  return (
    <>
      <ServiceHero
        title="Terms of Use"
        subtitle="Website Terms of Service for Levitt Chiropractic Center, P.A."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Website Terms of Service
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Please read these terms carefully
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              By accessing this website, you agree to the Terms and Conditions
              of Use set out below. If you do not agree with any of these
              terms, you are prohibited from using or accessing this site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 SLATE: NUMBERED CARDS */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.article
                key={s.id}
                id={s.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-2xl font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <div className="mt-4 text-base leading-relaxed text-slate-700">
                  {s.body}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 DARK NAVY: CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Questions About These Terms?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Contact our office
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              For any questions about these Terms of Use, contact our office
              at{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
