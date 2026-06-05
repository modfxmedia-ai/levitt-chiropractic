import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import { servedCities, getCityBySlug } from "@/lib/areasData";
import { pseoServices, getServiceBySlug } from "@/lib/pseoServices";
import { siteConfig } from "@/lib/siteConfig";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import AreaServicePageContent from "@/components/areas/AreaServicePageContent";

type Params = { city: string; service: string };

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const c of servedCities) {
    for (const s of pseoServices) {
      out.push({ city: c.slug, service: s.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, MN | Dr. Alan Levitt`;
  const description = `${service.name} for ${city.name}, Minnesota residents at Levitt Chiropractic Center. ${service.tagline} Call ${siteConfig.phone}.`;

  return generateMeta({
    title,
    description,
    slug: `areas-we-serve/${city.slug}/${service.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return notFound();

  return (
    <>
      <ServiceSchema
        name={`${service.name} in ${city.name}, MN`}
        slug={`areas-we-serve/${city.slug}/${service.slug}`}
        description={`${service.name} for ${city.name}, Minnesota patients at Levitt Chiropractic Center, P.A. ${service.tagline}`}
        serviceType={service.serviceType ?? service.name}
      />
      <AreaServicePageContent city={city} service={service} />
    </>
  );
}
