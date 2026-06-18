import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import NewPatientCenterContent from "@/components/patient/NewPatientCenterContent";

export const metadata: Metadata = generateMeta({
  title: "New Patient Center | Levitt Chiropractic Center",
  description:
    "Everything new patients need to prepare for their first visit at Levitt Chiropractic Center in Saint Louis Park, MN what to expect and a quick checklist.",
  slug: "new-patient-center",
});

export default function Page() {
  return <NewPatientCenterContent />;
}
