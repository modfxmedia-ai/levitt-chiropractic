"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { primaryNav } from "./navData";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const legalLinks = [
  { label: "Site Map", href: "/sitemap.xml" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "HIPAA Policy", href: "/hipaa-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Good Faith Estimate", href: "/good-faith-estimate" },
];

export function Footer() {
  const reduce = useReducedMotion();
  const quickLinkColumns = primaryNav.filter((e) => e.href !== "/");
  const half = Math.ceil(quickLinkColumns.length / 2);
  const colA = quickLinkColumns.slice(0, half);
  const colB = quickLinkColumns.slice(half);
  const year = new Date().getFullYear();

  const fadeUp: MotionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <>
      <motion.footer
        {...fadeUp}
        className="mt-auto border-t border-white/5 bg-dark text-white/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label={`${siteConfig.name} home`}
              >
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  width={240}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                Proudly serving Saint Louis Park and the Twin Cities with
                expert chiropractic care, integrative therapies, and
                personalized treatment plans.
              </p>
              <Link
                href={siteConfig.appointmentUrl}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Request Appointment
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Quick Links
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-8">
                {[colA, colB].map((col, idx) => (
                  <ul key={idx} className="space-y-4 text-sm">
                    {col.map((entry) => (
                      <li key={entry.href}>
                        <Link
                          href={entry.href}
                          className="font-semibold text-white hover:text-primary"
                        >
                          {entry.label}
                        </Link>
                        {entry.groups && entry.groups.length > 0 && (
                          <ul className="mt-2 space-y-1.5">
                            {entry.groups.map((g) => (
                              <li key={g.label + ("href" in g ? g.href : "")}>
                                {"href" in g && g.href ? (
                                  <Link
                                    href={g.href}
                                    className="text-white/70 hover:text-primary"
                                  >
                                    {g.label}
                                  </Link>
                                ) : (
                                  <span className="text-white/60">
                                    {g.label}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Contact & Hours */}
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Contact & Hours
              </h3>

              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-white/80">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={siteConfig.phoneHref}
                    className="font-semibold text-white hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  Hours of Operation
                </p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {siteConfig.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-white/5 pb-1.5"
                    >
                      <span className="font-medium text-white/85">{h.day}</span>
                      <span className="text-right text-white/70">
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/60">
              © {year} {siteConfig.name} All Rights Reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-white/60 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.footer>

      <ScrollToTop />
    </>
  );
}
