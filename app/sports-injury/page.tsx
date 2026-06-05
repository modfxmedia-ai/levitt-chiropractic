import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import SportsInjuryContent from "@/components/services/SportsInjuryContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Sports Injury Chiropractor in Saint Louis Park, MN | Dr. Alan Levitt",
  description:
    "Chiropractic care for sports injuries in Saint Louis Park, MN. Dr. Levitt uses spinal adjustments and physical therapy to help muscles, tendons and ligaments recover so you can perform at your peak. Call 952-920-7535.",
  slug: "sports-injury",
});

export default function SportsInjuryPage() {
  return (
    <>
      <ServiceSchema
        name="Sports Injury Chiropractic Care"
        slug="sports-injury"
        description="Chiropractic care for sports injuries in Saint Louis Park, MN — spinal adjustments and physical therapy to help muscles, tendons and ligaments recover."
      />
      <SportsInjuryContent />
    </>
  );
}
