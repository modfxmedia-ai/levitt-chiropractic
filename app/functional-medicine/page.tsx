import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import FunctionalMedicineContent from "@/components/services/FunctionalMedicineContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Functional Medicine in Saint Louis Park, MN | Root-Cause Chiropractic | Dr. Alan Levitt",
  description:
    "Functional medicine in Saint Louis Park, MN. Dr. Levitt uses a personalized, whole-person approach to address chronic pain and chronic illness at the root. Call 952-920-7535.",
  slug: "functional-medicine",
});

export default function FunctionalMedicinePage() {
  return (
    <>
      <ServiceSchema
        name="Functional Medicine"
        slug="functional-medicine"
        description="Functional medicine in Saint Louis Park, MN. A personalized, whole-person approach to address chronic pain and chronic illness at the root cause."
      />
      <FunctionalMedicineContent />
    </>
  );
}
