import { getPost } from '@/lib/posts'
import { marked } from 'marked'

export const dynamic = 'error'

export default function PostPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getPost(params.slug)
  const html = marked.parse(content, { breaks: true }) as string
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="mb-3">{meta.title}</h1>
      <p className="text-white/60 -mt-2 mb-6">
        <time dateTime={meta.date}>{new Date(meta.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</time>
      </p>
      {meta.coverImage ? <img src={meta.coverImage} alt={meta.title} /> : null}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
