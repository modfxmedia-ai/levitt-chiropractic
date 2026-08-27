import { JsonLd } from "./JsonLd";
import { serviceJsonLd } from "@/lib/jsonLd";

type ServiceSchemaProps = {
  name: string;
  slug: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
};

export function ServiceSchema(props: ServiceSchemaProps) {
  return (
    <JsonLd id={`ld-service-${props.slug}`} data={serviceJsonLd(props)} />
  );
}
