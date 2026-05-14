import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "linkpriv",
  description: "Mc mirella",
  openGraph: {
    type: "website",
    title: "linkpriv",
    description: "Mc mirella",
    images: ["https://storage.googleapis.com/gpt-engineer-file-uploads/B6eReBA9ejQ2FgIQMNAXQZRgKqs1/social-images/social-1771948160703-transferir_(1).webp"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "linkpriv",
    description: "Mc mirella",
    images: ["https://storage.googleapis.com/gpt-engineer-file-uploads/B6eReBA9ejQ2FgIQMNAXQZRgKqs1/social-images/social-1771948160703-transferir_(1).webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
