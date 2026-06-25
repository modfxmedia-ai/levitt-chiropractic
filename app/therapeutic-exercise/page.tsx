import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import TherapeuticExerciseContent from "@/components/services/TherapeuticExerciseContent";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export const metadata: Metadata = generateMeta({
  title: "Therapeutic Exercise in Saint Louis Park, MN",
  description:
    "Therapeutic exercise from Dr. Alan Levitt in Saint Louis Park, MN endurance, resistance, and flexibility training to restore mobility and strength.",
  slug: "therapeutic-exercise",
});

export default function TherapeuticExercisePage() {
  return (
    <>
      <ServiceSchema
        name="Therapeutic Exercise"
        slug="therapeutic-exercise"
        description="Therapeutic exercise programs in Saint Louis Park, MN endurance, resistance and flexibility training to restore mobility, strength and quality of life."
      />
      <TherapeuticExerciseContent />
    </>
  );
}
