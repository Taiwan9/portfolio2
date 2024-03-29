import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taiwan Marinho',
  description: 'Desenvolvedor Fullstack C#',
  icons: {
    icon: '/Thome.png',
    shortcut: '/shortcut-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
          <Head>
            <link rel="icon" href="images/favicon.ico"/>
          </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
