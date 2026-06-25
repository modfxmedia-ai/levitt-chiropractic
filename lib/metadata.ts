import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

const SITE_NAME = siteConfig.name;
const SITE_URL = siteConfig.url;
const OG_DEFAULT = "/images/og-default.jpg";

type GenerateMetaInput = {
  /** Page title WITHOUT the brand suffix the root layout template appends it. */
  title: string;
  description: string;
  /** Path slug without leading/trailing slashes. Use "" for the homepage. */
  slug: string;
  image?: string;
  noindex?: boolean;
};

function buildUrl(slug: string): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}` : SITE_URL;
}

export function generateMeta({
  title,
  description,
  slug,
  image = OG_DEFAULT,
  noindex = false,
}: GenerateMetaInput): Metadata {
  const url = buildUrl(slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/** Backwards-compat alias used by older imports. */
export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  return generateMeta({
    title: input.title,
    description: input.description ?? "",
    slug: input.path ?? "",
    image: input.image,
    noindex: input.noindex,
  });
}

export const SEO = { SITE_NAME, SITE_URL };
