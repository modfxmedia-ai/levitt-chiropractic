import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import GoodFaithEstimateContent from "@/components/legal/GoodFaithEstimateContent";

export const metadata: Metadata = generateMeta({
  title: "Good Faith Estimate",
  description:
    "Your right to a Good Faith Estimate under the No Surprises Act and what to expect when planning chiropractic visits at Levitt Chiropractic Center, P.A.",
  slug: "good-faith-estimate",
});

export default function Page() {
  return <GoodFaithEstimateContent />;
}
