import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import BackPainTreatmentsContent from "@/components/services/BackPainTreatmentsContent";

export const metadata: Metadata = generateMeta({
  title:
    "Back Pain Treatments in Saint Louis Park, MN | Drug-Free Chiropractic Relief | Dr. Alan Levitt",
  description:
    "Personalized chiropractic back pain treatments in Saint Louis Park, MN — spinal adjustments, cold laser therapy, therapeutic exercise and soft-tissue techniques. Drug-free, non-invasive. Call 952-920-7535.",
  slug: "back-pain-treatments",
});

export default function BackPainTreatmentsPage() {
  return <BackPainTreatmentsContent />;
}
