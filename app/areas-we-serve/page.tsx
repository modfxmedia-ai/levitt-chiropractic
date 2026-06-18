import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { servedCities } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import AreasWeServeContent from "@/components/areas/AreasWeServeContent";

export const metadata: Metadata = generateMeta({
  title:
    "Areas We Serve | Levitt Chiropractic Center Twin Cities Chiropractor",
  description: `Drug-free chiropractic care for ${servedCities.length}+ Minnesota communities across the Twin Cities metro. Find your city and explore ${pseoServices.length} specialty services available locally.`,
  slug: "areas-we-serve",
});

export default function Page() {
  return <AreasWeServeContent />;
}
