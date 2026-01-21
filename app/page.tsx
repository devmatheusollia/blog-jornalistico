import { Badge } from "@/components/ui/badge"

const featuredArticle = {
  title: "O Futuro do Jornalismo Digital.",
  excerpt: "Saiba mais sobre as diversas ferramentas utilizadas no meio do Jornalismo Digital para entregar um conteúdo íntegro e atualizado.",
  date: "12 de agosto de 2025.",
  readTime: "8 min read",
  category: "Technology",
  image: "/modern-newsroom-digital.png",
}

const articles = [
  {
    id: 1,
    title: "Só quem gosta de carros",
    excerpt: "Teste.",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Investigation",
    image: "/journalist-documents.png",
  },
  {
    id: 2,
    title: "The Ethics of AI in News Creation",
    excerpt: "Examining the moral implications of artificial intelligence in journalism and content creation.",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Ethics",
    image: "/ai-journalism.png",
  },
  {
    id: 3,
    title: "Local News in a Global World",
    excerpt: "Why community journalism remains crucial in our interconnected digital landscape.",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "Community",
    image: "/placeholder-9ss5k.png",
  },
  {
    id: 4,
    title: "Breaking News: The Speed vs Accuracy Dilemma",
    excerpt: "Navigating the pressure to publish quickly while maintaining journalistic integrity.",
    date: "December 5, 2024",
    readTime: "4 min read",
    category: "Industry",
    image: "/placeholder-caiqm.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold tracking-tight">THE TRIBE JOURNAL</h1>
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  CULTURA
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  FUTEBOL
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  GASTRONOMIA
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  MÚSICA
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">BUSCAR</button>
              <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
                INSCREVA-SE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <section className="mb-12">
          <div className="relative">
            <img
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <Badge variant="outline" className="border-white/40 text-white bg-black/50 mb-4">
                  {featuredArticle.category}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{featuredArticle.title}</h2>
                <p className="text-white/90 text-xl mb-4 leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <Badge variant="outline" className="border-white/20 text-white/60 bg-transparent text-xs mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-white/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed text-sm">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Mantenha-se informado!</h3>
            <p className="text-white/60 mb-8">Receba nossas últimas postagens via email.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-colors">
                INSCREVA-SE
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">THE TRIBE JOURNAL</h4>
              <p className="text-white/60 text-sm">Jornalismo independente e digital.</p>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/80">TÓPICOS</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  CULTURA
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  FUTEBOL
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  GASTRONOMIA
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  MÚSICA
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/80">SOBRE</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  NOSSO PROPÓSITO
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  NOSSO TIME
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  CONTATO
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  SUPORTE
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/80">REDES SOCIAIS</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  THREADS
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  LINKEDIN
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm text-white/40 flex justify-between items-center">
            <div className="flex flex-col">
              <p>© 2025 The Tribe Journal. Todos os direitos reservados a Leonardo Costa Teixeira.</p>
              <p>Desenvolvido por: Matheus Ollia.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">PRIVACIDADE</a>
              <a href="#" className="hover:text-white/60 transition-colors">TERMOS</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
