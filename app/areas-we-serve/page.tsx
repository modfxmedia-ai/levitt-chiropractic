import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { servedCities } from "@/lib/areasData";
import AreasWeServeContent from "@/components/areas/AreasWeServeContent";

export const metadata: Metadata = generateMeta({
  title: "Areas We Serve | Twin Cities Chiropractor",
  description: `Drug-free chiropractic care for ${servedCities.length}+ Twin Cities communities served by Dr. Alan Levitt in Saint Louis Park, MN. Find your city and book today.`,
  slug: "areas-we-serve",
});

export default function Page() {
  return <AreasWeServeContent />;
}
