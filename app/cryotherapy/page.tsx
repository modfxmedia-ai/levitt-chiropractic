import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import CryotherapyContent from "@/components/services/CryotherapyContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title:
    "Cryotherapy in Saint Louis Park, MN | Ice Pack & Whole Body Cold Therapy | Dr. Alan Levitt",
  description:
    "Cryotherapy services in Saint Louis Park, MN. Dr. Levitt offers ice pack cryotherapy and whole body cryotherapy to reduce pain, swelling and inflammation. Call 952-920-7535.",
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
