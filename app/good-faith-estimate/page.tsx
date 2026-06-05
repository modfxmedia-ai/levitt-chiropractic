import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Good Faith Estimate",
  description:
    "Information about your right to a Good Faith Estimate of expected charges at Levitt Chiropractic Center, P.A.",
  slug: "good-faith-estimate",
});

export default function Page() {
  return (
    <>
      <HeroSection eyebrow="Legal" title="Good Faith Estimate" />
      <AnimatedSection className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
        <p>
          You have the right to receive a &quot;Good Faith Estimate&quot;
          explaining how much your medical care will cost.
        </p>
        <p>
          Under the law, healthcare providers need to give patients who don&apos;t
          have insurance, or who are not using insurance, an estimate of the
          bill for medical items and services. Please ask us for an estimate
          before scheduling.
        </p>
      </AnimatedSection>
    </>
  );
}
