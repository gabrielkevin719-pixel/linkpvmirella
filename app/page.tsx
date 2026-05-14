import Image from "next/image"
import Link from "next/link"

const previewImages = [
  "/assets/prev-1-Cv7yWjFc.jpg",
  "/assets/prev-2-Cpv7t6c5.jpg",
  "/assets/prev-3-xFfygf3O.jpg",
]

const newImages = [
  "/assets/new-1-zNxUvgkc.jpg",
  "/assets/new-2-Cg6mABAH.jpg",
  "/assets/new-3-DIaBfBF5.jpg",
  "/assets/new-4-C1WhLKgo.jpg",
  "/assets/new-5-BWdPk1lN.jpg",
  "/assets/new-6-Uvgr99CF.jpg",
  "/assets/new-7-B6eGvSt-.jpg",
]

const links = [
  {
    title: "Quer ter acesso a + de 4.000MIL VÍDEOS e FOTOS para se satisfazer? Assine aqui e goze comigo!",
    url: "https://www.linkpriv.com/672327ef-4350-4112-bade-95bf86c7cda0",
  },
  {
    title: "Tenha acesso a mais de 4MIL CONTEUDOS!! aproveite enquanto pode",
    url: "https://www.linkpriv.com/1a637600-6051-44fa-adf3-4e46996ef8ae",
  },
  {
    title: "Acesso VIP",
    url: "https://www.linkpriv.com/678a493b-830a-4b70-9202-8e1778fd7128",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/linkpriv-logo-dark-BRavyTkq.svg"
            alt="LinkPriv"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Preview Images Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {previewImages.map((src, index) => (
            <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Preview ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Links */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* New Content Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">Novidades</h2>
          <div className="grid grid-cols-3 gap-2">
            {newImages.map((src, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Novo conteúdo ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Content Preview */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/assets/locked-post-BXVfsV0P.jpg"
              alt="Conteúdo bloqueado"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/assets/locked-video-BhlzI2t2.jpg"
              alt="Vídeo bloqueado"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>Powered by LinkPriv</p>
        </footer>
      </div>
    </main>
  )
}
