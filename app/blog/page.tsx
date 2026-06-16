import type { Metadata } from "next";

import { generateMeta } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata: Metadata = generateMeta({
  title: "Blog & Insights",
  description:
    "Plain-language articles on chiropractic care, recovery, and spinal health from Dr. Alan Levitt at Levitt Chiropractic Center in Saint Louis Park, MN.",
  slug: "blog",
});

export default function Page() {
  const posts = getAllPosts();
  return <BlogIndexContent posts={posts} />;
}
