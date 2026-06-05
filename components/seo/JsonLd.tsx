import Script from "next/script";

type Props = {
  id: string;
  data: object;
};

export function JsonLd({ id, data }: Props) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
