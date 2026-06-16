import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import MeetTheDoctorContent from "@/components/about/MeetTheDoctorContent";

export const metadata: Metadata = generateMeta({
  title:
    "Meet Dr. Alan G. Levitt, DC | Saint Louis Park Chiropractor for 35+ Years",
  description:
    "Meet Dr. Alan G. Levitt, DC — born and raised in Saint Louis Park, MN. Learn about his nervous-system-first approach (Applied Kinesiology, Koren, Torque Release & more) and 35+ years of experience. Call 952-920-7535.",
  slug: "meet-the-doctor",
});

export default function Page() {
  return <MeetTheDoctorContent />;
}
