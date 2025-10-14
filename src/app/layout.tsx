import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koperasi Desa Merah Putih',
  description: 'Koperasi terpercaya sejak 1995 yang melayani masyarakat pedesaan dengan berbagai layanan keuangan dan pemberdayaan ekonomi.',
  keywords: 'koperasi, simpan pinjam, kredit, investasi, pedesaan, kesejahteraan, ekonomi',
  authors: [{ name: 'Koperasi Desa Merah Putih ' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}