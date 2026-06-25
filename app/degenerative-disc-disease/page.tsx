import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import DegenerativeDiscDiseaseContent from "@/components/services/DegenerativeDiscDiseaseContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Degenerative Disc Disease Treatment in Saint Louis Park, MN",
  description:
    "Chiropractic care for degenerative disc disease in Saint Louis Park, MN. Dr. Levitt explains symptoms, causes and options for discs and spinal stenosis.",
  slug: "degenerative-disc-disease",
});

export default function DegenerativeDiscDiseasePage() {
  return (
    <>
      <ServiceSchema
        name="Degenerative Disc Disease Treatment"
        slug="degenerative-disc-disease"
        description="Chiropractic care for degenerative disc disease in Saint Louis Park, MN evaluation and treatment for herniated discs, spinal stenosis and related conditions."
      />
      <DegenerativeDiscDiseaseContent />
    </>
  );
}
