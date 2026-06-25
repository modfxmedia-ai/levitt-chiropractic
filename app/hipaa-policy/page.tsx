import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import HipaaPolicyContent from "@/components/legal/HipaaPolicyContent";

export const metadata: Metadata = generateMeta({
  title: "HIPAA Notice of Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices for Levitt Chiropractic Center, P.A. how your protected health information may be used, disclosed, and accessed.",
  slug: "hipaa-policy",
});

export default function Page() {
  return <HipaaPolicyContent />;
}
