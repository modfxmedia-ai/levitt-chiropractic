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

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "what-we-collect",
    title: "What We May Collect",
    body: (
      <>
        <p className="mb-4">
          We may collect the following information:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Name and job title</li>
          <li>Contact information including email address</li>
          <li>
            Demographic information such as postcode, preferences and interests
          </li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Internal record keeping.</li>
          <li>We may use the information to improve our products and services.</li>
          <li>
            We may periodically send promotional email about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail.
          </li>
          <li>
            We may use the information to customize the website according to
            your interests.
          </li>
          <li>
            We may provide your information to our third party partners for
            marketing or promotional purposes.
          </li>
          <li className="font-semibold text-[#0F172A]">
            We will never sell your information.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We are committed to ensuring that your information is secure. In order
        to prevent unauthorized access or disclosure we have put in place
        suitable physical, electronic and managerial procedures to safeguard
        and secure the information we collect online.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "How We Use Cookies",
    body: (
      <>
        <p className="mb-4">
          A cookie is a small file which asks permission to be placed on your
          computer&rsquo;s hard drive. Once you agree, the file is added and
          the cookie helps analyze web traffic or lets you know when you visit
          a particular site. Cookies allow web applications to respond to you
          as an individual. The web application can tailor its operations to
          your needs, likes and dislikes by gathering and remembering
          information about your preferences.
        </p>
        <p className="mb-4">
          We use traffic log cookies to identify which pages are being used.
          This helps us analyze data about web page traffic and improve our
          website in order to tailor it to customer needs. We only use this
          information for statistical analysis purposes and then the data is
          removed from the system.
        </p>
        <p className="mb-4">
          Overall, cookies help us provide you with a better website, by
          enabling us to monitor which pages you find useful and which you do
          not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with
          us.
        </p>
        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "Links to Other Websites",
    body: (
      <p>
        Our website may contain links to enable you to visit other websites of
        interest easily. However, once you have used these links to leave our
        site, you should note that we do not have any control over that other
        website. Therefore, we cannot be responsible for the protection and
        privacy of any information which you provide whilst visiting such
        sites and such sites are not governed by this privacy statement. You
        should exercise caution and look at the privacy statement applicable
        to the website in question.
      </p>
    ),
  },
  {
    id: "controlling",
    title: "Controlling Your Personal Information",
    body: (
      <>
        <p className="mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Whenever you are asked to fill in a form on the website, look for
            the box that you can click to indicate that you do not want the
            information to be used by anybody for direct marketing purposes.
          </li>
          <li>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or calling us at{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
            >
              {siteConfig.phone}
            </a>
            .
          </li>
        </ul>
        <p className="mt-4">
          We will not sell, distribute or lease your personal information to
          third parties unless we have your permission or are required by law.
          We may use your personal information to send you promotional
          information about third parties which we think you may find
          interesting if you tell us that you wish this to happen.
        </p>
        <p className="mt-4">
          You may request details of personal information which we hold about
          you under the Data Protection Act 1998. A small fee will be payable.
          If you would like a copy of the information held on you please
          contact us at{" "}
          <a
            href={siteConfig.phoneHref}
            className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <p className="mt-4">
          If you believe that any information we are holding on you is
          incorrect or incomplete, please write to or call us as soon as
          possible at the number above. We will promptly correct any
          information found to be incorrect.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyContent() {
  return (
    <>
      <ServiceHero
        title="Privacy Policy"
        subtitle="How Levitt Chiropractic Center, P.A. collects, uses, and protects your information."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
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
              Effective 1/14/2013
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Your privacy matters
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              This privacy policy sets out how Levitt Chiropractic Center,
              P.A. uses and protects any information that you give Levitt
              Chiropractic Center, P.A. when you use this website.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Levitt Chiropractic Center, P.A. is committed to ensuring that
              your privacy is protected. Should we ask you to provide certain
              information by which you can be identified when using this
              website, then you can be assured that it will only be used in
              accordance with this privacy statement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Levitt Chiropractic Center, P.A. may change this policy from
              time to time by updating this page. You should check this page
              from time to time to ensure that you are happy with any changes.
              This policy is effective from 1/14/2013.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — WHITE: NUMBERED SECTIONS */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10">
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
                    0{i + 1}
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

      {/* SECTION 4 — DARK NAVY: CONTACT CTA */}
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
              Questions About This Policy?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              We&rsquo;re happy to help
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              For any questions about how we handle your information, contact
              our office at{" "}
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
