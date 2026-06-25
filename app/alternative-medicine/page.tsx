import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AlternativeMedicineContent from "@/components/services/AlternativeMedicineContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Alternative Medicine Doctor in Saint Louis Park, MN",
  description:
    "Natural, root-cause alternative medicine in Saint Louis Park, MN from Dr. Alan Levitt chiropractic and soft-tissue therapies for pain and headaches.",
  slug: "alternative-medicine",
});

export default function AlternativeMedicinePage() {
  return (
    <>
      <ServiceSchema
        name="Alternative Medicine"
        slug="alternative-medicine"
        description="Alternative medicine in Saint Louis Park, MN natural, drug-free therapies including chiropractic, nutritional and lifestyle care from Dr. Alan Levitt."
      />
      <AlternativeMedicineContent />
    </>
  );
}
