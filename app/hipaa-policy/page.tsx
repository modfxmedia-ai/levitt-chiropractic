import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "HIPAA Policy",
  description:
    "HIPAA Notice of Privacy Practices for Levitt Chiropractic Center, P.A.",
  slug: "hipaa-policy",
});

export default function Page() {
  return (
    <>
      <HeroSection eyebrow="Legal" title="HIPAA Policy" />
      <AnimatedSection className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
        <p>
          This notice describes how medical information about you may be used
          and disclosed and how you can get access to this information. Please
          review carefully.
        </p>
        <p>
          We are required by law to maintain the privacy of your protected
          health information and to provide you with this notice of our legal
          duties and privacy practices.
        </p>
      </AnimatedSection>
    </>
  );
}
