import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { physicianJsonLd } from "@/lib/jsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import MeetTheDoctorContent from "@/components/about/MeetTheDoctorContent";

export const metadata: Metadata = generateMeta({
  title: "Meet Dr. Alan G. Levitt, DC",
  description:
    "Meet Dr. Alan G. Levitt, DC born and raised in Saint Louis Park, MN with 39 years of nervous-system-first chiropractic experience since 1987.",
  slug: "meet-the-doctor",
});

export default function Page() {
  return (
    <>
      <JsonLd id="ld-physician" data={physicianJsonLd()} />
      <MeetTheDoctorContent />
    </>
  );
}
