import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import DegenerativeDiscDiseaseContent from "@/components/services/DegenerativeDiscDiseaseContent";

export const metadata: Metadata = generateMeta({
  title:
    "Degenerative Disc Disease Treatment in Saint Louis Park, MN | Dr. Alan Levitt",
  description:
    "Chiropractic care for degenerative disc disease in Saint Louis Park, MN. Dr. Levitt evaluates symptoms, causes and treatment options for herniated discs, spinal stenosis and more. Call 952-920-7535.",
  slug: "degenerative-disc-disease",
});

export default function DegenerativeDiscDiseasePage() {
  return <DegenerativeDiscDiseaseContent />;
}
