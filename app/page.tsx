import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import HomeContent from "@/components/home/HomeContent";
import { StickyBookNowBanner } from "@/components/layout/StickyBookNowBanner";

export const metadata: Metadata = generateMeta({
  title: "Chiropractor in Saint Louis Park, MN",
  description:
    "Dr. Alan Levitt offers drug-free, personalized chiropractic care in Saint Louis Park, MN back pain, injuries, cold laser, cryotherapy & orthotics.",
  slug: "",
});

export default function Page() {
  return (
    <>
      <HomeContent />
      <StickyBookNowBanner />
    </>
  );
}
