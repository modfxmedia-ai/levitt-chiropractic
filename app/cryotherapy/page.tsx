import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import CryotherapyContent from "@/components/services/CryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Cryotherapy in Saint Louis Park, MN",
  description:
    "Ice pack and whole-body cryotherapy services in Saint Louis Park, MN from Dr. Alan Levitt drug-free relief from pain, swelling, and inflammation.",
  slug: "cryotherapy",
});

export default function CryotherapyPage() {
  return (
    <>
      <ServiceSchema
        name="Cryotherapy"
        slug="cryotherapy"
        description="Cryotherapy in Saint Louis Park, MN ice pack and whole-body cold therapy to reduce pain, swelling and inflammation."
      />
      <CryotherapyContent />
    </>
  );
}
