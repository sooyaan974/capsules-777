import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '777 Knowledge Stream',
  description: 'Un site moderne qui publie automatiquement des sujets courts, illustrés et éducatifs — toutes les 5 heures.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="brand-gradient fixed inset-0 -z-10"></div>
        <header className="max-w-5xl mx-auto px-6 pt-8 pb-6">
          <div className="glass px-6 py-5 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">777 Knowledge Stream</span>
            </h1>
            <nav className="text-sm text-white/80">
              <a href="/" className="hover:text-white">Accueil</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 pb-24">
          {children}
        </main>
        <footer className="max-w-5xl mx-auto px-6 pb-12 text-white/60 text-sm">
          <div className="glass p-6">
            <p>
              © {new Date().getFullYear()} • Ce site publie des contenus courts et originaux à propos du Boeing 777.
              Veillez à ne publier que des médias et textes dont vous détenez les droits.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
