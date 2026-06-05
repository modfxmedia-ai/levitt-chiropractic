import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import CommonChiropracticConditionsContent from "@/components/services/CommonChiropracticConditionsContent";

export const metadata: Metadata = generateMeta({
  title:
    "Common Chiropractic Conditions Treated in Saint Louis Park, MN | Dr. Alan Levitt",
  description:
    "Chiropractic care for allergies, headaches, sciatica, whiplash, carpal tunnel, fibromyalgia, joint dysfunction and more — from Dr. Alan Levitt in Saint Louis Park, MN. Call 952-920-7535.",
  slug: "common-chiropractic-conditions",
});

export default function CommonChiropracticConditionsPage() {
  return <CommonChiropracticConditionsContent />;
}
