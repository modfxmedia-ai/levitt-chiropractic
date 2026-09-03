import { blogPosts } from '@/lib/blogPosts'
import type { BlogPostData } from './types'

/**
 * Map existing compiled blog posts to Ranked BlogPostData shape.
 * Local posts win on slug collision so a Ranked import cannot overwrite
 * a hand-written article.
 */
export function getLocalBlogPosts(): BlogPostData[] {
  return blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    metaDescription: p.description,
    h1: p.title,
    publishDate: p.publishedAt,
    intro: p.excerpt,
    coverImage: p.coverImage,
    coverAlt: p.coverAlt,
    sections: [],
    cta: { label: 'Contact us', href: '/contact' },
  }))
}
