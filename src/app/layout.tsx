import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

// use of variable fonts - no need to specify weight and style
const montserrat = Montserrat({ subsets: ['latin'] })
const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apevertising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white text-black mx-auto`}>{children}</body>
    </html>
  )
}
