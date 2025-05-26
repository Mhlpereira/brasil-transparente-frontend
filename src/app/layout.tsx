import Header from '@/components/layout/banner'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brasil Transparente',
  description: 'Brasil Transparente: Facilitando o acesso à transparência no Brasil. Veja os gastos da União em 2024 de forma acessível.',
  metadataBase: new URL('https://brasiltransparente.digital'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brasil Transparente',
    description: 'Brasil Transparente: Facilitando o acesso à transparência no Brasil. Veja os gastos da União em 2024 de forma acessível.',
    url: 'https://brasiltransparente.digital',
    siteName: 'Brasil Transparente',
    images: [
      {
        url: '/images/original-blue.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brasil Transparente',
    description: 'Brasil Transparente: Facilitando o acesso à transparência no Brasil. Veja os gastos da União em 2024 de forma acessível.',
    images: ['/images/original-blue.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-4 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  
  )
}