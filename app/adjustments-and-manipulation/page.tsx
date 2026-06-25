import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AdjustmentsContent from "@/components/services/AdjustmentsContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Chiropractic Adjustments & Spinal Manipulation in Saint Louis Park, MN",
  description:
    "Chiropractic adjustments and spinal manipulation in Saint Louis Park, MN from Dr. Alan Levitt Diversified, Zone, and Torque Release techniques.",
  slug: "adjustments-and-manipulation",
  image: "/images/adjustment-1.jpg",
});

export default function AdjustmentsPage() {
  return (
    <>
      <ServiceSchema
        name="Chiropractic Adjustments & Spinal Manipulation"
        slug="adjustments-and-manipulation"
        description="Chiropractic adjustments and spinal manipulation in Saint Louis Park, MN using Diversified Technique, Zone Therapy and Torque Release Technique to relieve pain and restore alignment."
      />
      <AdjustmentsContent />
    </>
  );
}
