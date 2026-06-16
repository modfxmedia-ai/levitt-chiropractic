import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMeta } from "@/lib/metadata";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { BlogPostContent } from "@/components/blog/BlogPostContent";

type RouteParams = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return generateMeta({
      title: "Post Not Found",
      description: "The article you’re looking for could not be found.",
      slug: `blog/${slug}`,
      noindex: true,
    });
  }

  return generateMeta({
    title: post.title,
    description: post.description,
    slug: `blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default async function Page(
  { params }: { params: Promise<RouteParams> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  return <BlogPostContent post={post} related={related} />;
}
