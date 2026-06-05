import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import MeetTheDoctorContent from "@/components/about/MeetTheDoctorContent";

export const metadata: Metadata = generateMeta({
  title:
    "Meet Dr. Alan G. Levitt, DC | Saint Louis Park Chiropractor for 35+ Years",
  description:
    "Born and raised in Saint Louis Park, MN, Dr. Alan G. Levitt graduated from Northwestern College of Chiropractic in 1986 and has been in private practice for 35+ years. Call 952-920-7535.",
  slug: "meet-the-doctor",
});

export default function Page() {
  return <MeetTheDoctorContent />;
}
