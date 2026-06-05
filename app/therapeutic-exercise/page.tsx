import type { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import TherapeuticExerciseContent from "@/components/services/TherapeuticExerciseContent";

export const metadata: Metadata = generateMeta({
  title:
    "Therapeutic Exercise in Saint Louis Park, MN | Endurance, Resistance & Flexibility | Dr. Alan Levitt",
  description:
    "Therapeutic exercise programs from Dr. Alan Levitt in Saint Louis Park, MN — endurance, resistance and flexibility training to restore mobility, strength and quality of life. Call 952-920-7535.",
  slug: "therapeutic-exercise",
});

export default function TherapeuticExercisePage() {
  return <TherapeuticExerciseContent />;
}
