import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Terms of Use",
  description:
    "Terms of Use for the Levitt Chiropractic Center, P.A. website.",
  slug: "terms-of-use",
});

export default function Page() {
  return (
    <>
      <HeroSection eyebrow="Legal" title="Terms of Use" />
      <AnimatedSection className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
        <p>
          By accessing this website, you agree to these Terms of Use. The
          content on this site is for general informational purposes and is not
          a substitute for professional medical advice.
        </p>
        <p>
          We may update these terms at any time. Continued use of the site
          constitutes acceptance of the updated terms.
        </p>
      </AnimatedSection>
    </>
  );
}
