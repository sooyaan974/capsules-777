import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const dynamic = 'error' // fully static

import Hero from '@/components/Hero'

export default function Home() {
  const posts = getAllPosts()
  return (
      <>
        <Hero />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.length === 0 ? (
        <div className="glass p-6 text-white/80">
          Aucun article publié pour le moment. Ajoutez des brouillons dans <code className="text-white">content/drafts</code> — l’automatisation en publiera un toutes les 5 heures.
        </div>
      </>
      ) : posts.map(p => (
        <PostCard key={p.slug} {...p} />
      ))}
    </div>
      </>
  )
}
