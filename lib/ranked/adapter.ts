/**
 * Convert Ranked BlogPostData → existing BlogPost shape used by the UI.
 * Ranked sections become h2 + p blocks. Body is plain text (not dangerouslySetInnerHTML).
 */
import type { BlogBlock, BlogPost } from '@/lib/blog'
import type { BlogPostData } from './types'

export function rankedToBlogPost(r: BlogPostData): BlogPost {
  const blocks: BlogBlock[] = []

  if (r.intro) {
    blocks.push({ type: 'p', text: r.intro })
  }

  for (const section of r.sections) {
    const id = section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    blocks.push({ type: 'h2', text: section.heading, id })
    for (const para of section.body) {
      blocks.push({ type: 'p', text: para })
    }
  }

  blocks.push({
    type: 'cta',
    title: 'Ready to feel better?',
    segments: [
      { text: 'Schedule your appointment at ' },
      { text: 'Levitt Chiropractic Center', href: r.cta.href },
      { text: ' today.' },
    ],
  })

  const wordCount = blocks.reduce((sum, b) => {
    if ('text' in b && typeof b.text === 'string') return sum + b.text.split(/\s+/).length
    return sum
  }, 0)

  return {
    slug: r.slug,
    title: r.title,
    description: r.metaDescription,
    excerpt: r.intro.slice(0, 200),
    publishedAt: r.publishDate,
    author: {
      name: 'Dr. Alan Levitt, D.C.',
      title: 'Chiropractor, Levitt Chiropractic Center',
      url: '/meet-the-doctor',
    },
    category: 'Chiropractic Care',
    tags: [],
    coverImage: r.coverImage,
    coverAlt: r.coverAlt,
    readingMinutes: Math.max(1, Math.round(wordCount / 230)),
    blocks,
  }
}
