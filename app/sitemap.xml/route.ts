import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";
import { sitemapEntries, type SitemapEntry } from "@/lib/sitemapEntries";
import { servedCities, citySitemapPriority } from "@/lib/areasData";
import { pseoServices } from "@/lib/pseoServices";
import { getAllPosts } from "@/lib/blog";
import { getLiveRankedBlogPosts } from "@/lib/ranked/posts";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  const lastmod = new Date().toISOString();

  // Programmatic /areas-we-serve URLs (hub + city + city/service)
  const pseoEntries: SitemapEntry[] = [
    { path: "/areas-we-serve", priority: 0.8, changefreq: "monthly" },
    ...servedCities.map<SitemapEntry>((c) => ({
      path: `/areas-we-serve/${c.slug}`,
      priority: citySitemapPriority(c),
      changefreq: "monthly",
    })),
    ...servedCities.flatMap<SitemapEntry>((c) =>
      pseoServices.map<SitemapEntry>((s) => ({
        path: `/areas-we-serve/${c.slug}/${s.slug}`,
        priority: Math.max(0.4, citySitemapPriority(c) - 0.15),
        changefreq: "monthly",
      })),
    ),
  ];

  // Blog post URLs (local + Ranked)
  const localBlogEntries: SitemapEntry[] = getAllPosts().map<SitemapEntry>((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
    changefreq: "monthly",
  }));
  const localBlogSlugs = new Set(getAllPosts().map((p) => p.slug));
  const rankedPosts = await getLiveRankedBlogPosts().catch(() => []);
  const rankedBlogEntries: SitemapEntry[] = rankedPosts
    .filter((p) => !localBlogSlugs.has(p.slug))
    .map<SitemapEntry>((p) => ({
      path: `/blog/${p.slug}`,
      priority: 0.7,
      changefreq: "monthly",
    }));
  const blogEntries = [...localBlogEntries, ...rankedBlogEntries];

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
