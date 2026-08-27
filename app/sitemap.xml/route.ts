import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";
import { sitemapEntries, type SitemapEntry } from "@/lib/sitemapEntries";
import { servedCities, isCityIndexed } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString();

  // Programmatic /areas-we-serve URLs (hub + city + city/service)
  const indexedCities = servedCities.filter(isCityIndexed);

  const pseoEntries: SitemapEntry[] = [
    { path: "/areas-we-serve", priority: 0.8, changefreq: "monthly" },
    ...indexedCities.map<SitemapEntry>((c) => ({
      path: `/areas-we-serve/${c.slug}`,
      priority: c.slug === "saint-louis-park" ? 0.8 : 0.6,
      changefreq: "monthly",
    })),
    ...indexedCities.flatMap<SitemapEntry>((c) =>
      pseoServices.map<SitemapEntry>((s) => ({
        path: `/areas-we-serve/${c.slug}/${s.slug}`,
        priority: c.slug === "saint-louis-park" ? 0.6 : 0.5,
        changefreq: "monthly",
      })),
    ),
  ];

  // Blog post URLs
  const blogEntries: SitemapEntry[] = getAllPosts().map<SitemapEntry>((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
    changefreq: "monthly",
  }));

  const allEntries = [...sitemapEntries, ...pseoEntries, ...blogEntries];

  const urls = allEntries
    .map((e) => {
      const loc = new URL(e.path, siteConfig.url).toString();
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
