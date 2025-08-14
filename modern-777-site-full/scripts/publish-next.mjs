import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const draftsDir = path.join(process.cwd(), 'content', 'drafts')
const postsDir = path.join(process.cwd(), 'content', 'posts')

// Ensure dirs
fs.mkdirSync(draftsDir, { recursive: true })
fs.mkdirSync(postsDir, { recursive: true })

const drafts = fs.readdirSync(draftsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')).sort()
if (drafts.length === 0) {
  console.log('No drafts to publish. Exiting.')
  process.exit(0)
}

const filename = drafts[0]
const src = path.join(draftsDir, filename)
const dest = path.join(postsDir, filename)

const raw = fs.readFileSync(src, 'utf8')
const parsed = matter(raw)
const now = new Date().toISOString()

const fm = {
  title: parsed.data.title ?? filename.replace(/\.(md|mdx)$/, ''),
  excerpt: parsed.data.excerpt ?? '',
  coverImage: parsed.data.coverImage ?? undefined,
  date: now
}

const output = matter.stringify(parsed.content.trim() + '\n', fm)
fs.writeFileSync(dest, output, 'utf8')
fs.unlinkSync(src)

console.log(`Published: ${filename} at ${now}`)
