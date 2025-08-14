import Link from 'next/link'

export default function PostCard({
  slug, title, excerpt, date, coverImage
}: { slug: string, title: string, excerpt: string, date: string, coverImage?: string }) {
  return (
    <article className="glass p-5 md:p-6 hover:scale-[1.01] transition">
      {coverImage ? (
        <img src={coverImage} alt={title} className="w-full h-48 object-cover rounded-xl border border-white/10 mb-4" />
      ) : null}
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80 text-sm md:text-base mb-3">{excerpt}</p>
      <div className="flex items-center justify-between text-xs text-white/60">
        <time dateTime={date}>{new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}</time>
        <Link href={`/posts/${slug}`} className="text-blue-300 hover:text-blue-200 underline underline-offset-4">Lire</Link>
      </div>
    </article>
  )
}
