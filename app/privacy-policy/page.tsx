import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Privacy Policy",
  description: "Privacy policy for Levitt Chiropractic Center, P.A.",
  slug: "privacy-policy",
});

export default function Page() {
  return (
    <>
      <HeroSection eyebrow="Legal" title="Privacy Policy" />
      <AnimatedSection className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
        <p>
          Levitt Chiropractic Center, P.A. respects your privacy. This page
          describes how we collect, use, and protect personal information.
        </p>
        <p>
          We collect only the information needed to schedule appointments,
          provide care, and communicate with you. We do not sell your
          information. We use commercially reasonable safeguards to protect it.
        </p>
        <p>
          For questions about this policy, contact our office.
        </p>
      </AnimatedSection>
    </>
  );
}
