import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import PersonalInjuryContent from "@/components/services/PersonalInjuryContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Personal Injury Chiropractor in Saint Louis Park, MN",
  description:
    "Personal injury chiropractic care in Saint Louis Park, MN from Dr. Alan Levitt for auto, bike, construction, OSHA and malpractice accident recovery.",
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
