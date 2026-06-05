import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import PersonalInjuryContent from "@/components/services/PersonalInjuryContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Personal Injury Chiropractor in Saint Louis Park, MN | Dr. Alan Levitt",
  description:
    "Personal injury chiropractic care in Saint Louis Park, MN. Dr. Levitt evaluates and treats underlying issues from auto, bike, construction, OSHA and malpractice accidents. Call 952-920-7535.",
  slug: "personal-injury",
});

export default function PersonalInjuryPage() {
  return (
    <>
      <ServiceSchema
        name="Personal Injury Chiropractic Care"
        slug="personal-injury"
        description="Personal injury chiropractic care in Saint Louis Park, MN. Evaluation and treatment for injuries from auto, bike, construction, OSHA and malpractice incidents."
      />
      <PersonalInjuryContent />
    </>
  );
}
