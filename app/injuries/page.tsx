import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import InjuriesContent from "@/components/services/InjuriesContent";

export const metadata: Metadata = generateMeta({
  title:
    "Injury Chiropractor in Saint Louis Park, MN | Auto, Personal & Sports Injuries | Dr. Alan Levitt",
  description:
    "Chiropractic treatment for common injuries in Saint Louis Park, MN — auto injuries, personal injuries, and sports injuries. Learn more about each service from Dr. Alan Levitt. Call 952-920-7535.",
  slug: "injuries",
});

export default function InjuriesPage() {
  return <InjuriesContent />;
}
