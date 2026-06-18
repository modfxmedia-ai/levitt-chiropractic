import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import CustomFootOrthoticsContent from "@/components/services/CustomFootOrthoticsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Custom Foot Orthotics in Saint Louis Park, MN | Levitt Chiropractic Center",
  description:
    "Dr. Levitt provides prescription custom foot orthotics for knee, foot, hip, and back pain in Saint Louis Park, MN. Precision-fit, lasts 1+ year. Far better than OTC inserts. Call 952-920-7535.",
  slug: "custom-foot-orthotics",
});

export default function CustomFootOrthoticsPage() {
  return (
    <>
      <ServiceSchema
        name="Custom Foot Orthotics"
        slug="custom-foot-orthotics"
        description="Prescription custom foot orthotics for knee, foot, hip and back pain in Saint Louis Park, MN. Precision-fit, lasting 1+ year far better than over-the-counter inserts."
      />
      <CustomFootOrthoticsContent />
    </>
  );
}
