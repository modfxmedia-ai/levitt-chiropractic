import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HomeHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "3D Spine Simulator",
  description:
    "Interactive 3D spine simulator to help you understand your condition and our recommended care.",
  slug: "resources/3d-spine-simulator",
});

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Resources"
        title="3D Spine Simulator"
        subtitle="See how your spine works — and what we'll be addressing."
      />
      <AnimatedSection className="mx-auto max-w-4xl px-6 py-20">
        <div className="aspect-video w-full rounded-2xl border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">
          Interactive 3D spine viewer placeholder
        </div>
        <p className="mt-6 text-sm text-slate-600">
          The interactive viewer will be embedded here. In the meantime, ask us
          to walk through it during your visit.
        </p>
      </AnimatedSection>
    </>
  );
}
