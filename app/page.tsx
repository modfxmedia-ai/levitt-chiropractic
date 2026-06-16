import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = generateMeta({
  title:
    "Chiropractor in Saint Louis Park, MN | Levitt Chiropractic Center, P.A.",
  description:
    "Dr. Alan Levitt offers personalized chiropractic care in Saint Louis Park, MN. Specializing in back pain, personal injuries, cold laser therapy, and functional medicine. Call 952-920-7535.",
  slug: "",
});

export default function Page() {
  return <HomeContent />;
}
