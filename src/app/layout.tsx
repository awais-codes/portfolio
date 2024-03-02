import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  style: ['normal'],
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Awais Ahmad',
  description: 'Awais Ahmad - Fullstack Developer Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
