import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import AutoInjuryContent from "@/components/services/AutoInjuryContent";

export const metadata: Metadata = generateMeta({
  title:
    "Auto Injury Chiropractor in Saint Louis Park, MN | Whiplash & Crash Care | Dr. Levitt",
  description:
    "Auto accident chiropractic care in Saint Louis Park, MN. Dr. Alan Levitt treats whiplash, neck & back pain, soft- and hard-tissue injuries after a collision. Call 952-920-7535 for an evaluation.",
  slug: "auto-injury",
});

export default function AutoInjuryPage() {
  return <AutoInjuryContent />;
}
