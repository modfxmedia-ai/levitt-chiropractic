import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AdjustmentsContent from "@/components/services/AdjustmentsContent";

export const metadata: Metadata = generateMeta({
  title:
    "Adjustments and Manipulation in Saint Louis Park, MN | Spinal Care by Dr. Levitt",
  description:
    "Chiropractic adjustments & spinal manipulation in Saint Louis Park, MN. Dr. Alan Levitt uses Diversified Technique, Zone Therapy and Torque Release Technique to relieve pain, restore alignment and support whole-body healing. Call 952-920-7535.",
  slug: "adjustments-and-manipulation",
  image: "/images/adjustment-1.jpg",
});

export default function AdjustmentsPage() {
  return <AdjustmentsContent />;
}
