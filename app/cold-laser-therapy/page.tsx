import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import ColdLaserTherapyContent from "@/components/services/ColdLaserTherapyContent";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generateMeta({
  title:
    "Cold Laser Therapy in Saint Louis Park, MN | Levitt Chiropractic Center",
  description:
    "Dr. Levitt offers cold laser therapy (low level laser therapy) for back pain, arthritis, carpal tunnel, tendonitis, fibromyalgia & more in Saint Louis Park, MN. Drug-free pain relief. Call 952-920-7535.",
  slug: "cold-laser-therapy",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cold laser therapy used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold laser therapy is used for acute and chronic pain, ligament sprains, muscle strain, tendonitis, arthritis, tennis elbow, back pain, bursitis, carpal tunnel syndrome, fibromyalgia, and wound healing.",
      },
    },
    {
      "@type": "Question",
      name: "Is cold laser therapy painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Cold laser therapy is non-invasive and pain-free. The handheld device is placed over the injured area for 30 seconds to several minutes with no heat or discomfort.",
      },
    },
  ],
};

export default function ColdLaserTherapyPage() {
  return (
    <>
      <JsonLd id="cold-laser-faq" data={faqSchema} />
      <ColdLaserTherapyContent />
    </>
  );
}
