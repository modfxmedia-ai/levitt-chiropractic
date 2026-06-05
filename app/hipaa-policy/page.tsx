import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import HipaaPolicyContent from "@/components/legal/HipaaPolicyContent";

export const metadata: Metadata = generateMeta({
  title: "HIPAA Notice of Privacy Practices",
  description:
    "Notice of Privacy Practices for Levitt Chiropractic Center, P.A. — how medical information about you may be used and disclosed, and how you can access this information.",
  slug: "hipaa-policy",
});

export default function Page() {
  return <HipaaPolicyContent />;
}
