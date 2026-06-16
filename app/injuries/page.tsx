import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import InjuriesContent from "@/components/services/InjuriesContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Injury Chiropractor in Saint Louis Park, MN | Personal Injuries | Dr. Alan Levitt",
  description:
    "Chiropractic treatment for common injuries in Saint Louis Park, MN — personal injury care from Dr. Alan Levitt. Call 952-920-7535.",
  slug: "injuries",
});

export default function InjuriesPage() {
  return (
    <>
      <ServiceSchema
        name="Injury Chiropractic Care"
        slug="injuries"
        description="Chiropractic treatment for personal injuries in Saint Louis Park, MN by Dr. Alan Levitt."
      />
      <InjuriesContent />
    </>
  );
}
