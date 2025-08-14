import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage?: string
}

const postsDir = path.join(process.cwd(), 'content', 'posts')

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
  const posts = files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '')
    const full = path.join(postsDir, filename)
    const raw = fs.readFileSync(full, 'utf8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? '',
      date: data.date ?? new Date().toISOString(),
      coverImage: data.coverImage ?? undefined
    } as PostMeta
  })
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getPost(slug: string) {
  const filename = ['.mdx', '.md'].map(ext => path.join(postsDir, slug + ext)).find(fs.existsSync)
  if (!filename) throw new Error('Post not found: ' + slug)
  const raw = fs.readFileSync(filename, 'utf8')
  const { data, content } = matter(raw)
  return { meta: {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? '',
    date: data.date ?? new Date().toISOString(),
    coverImage: data.coverImage ?? undefined,
  }, content }
}
