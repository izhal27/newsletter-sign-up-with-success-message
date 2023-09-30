import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | Newsletter sign-up form with success message solution',
  description: 'Frontend Mentor Challenge by Risal Walangadi',
  icons: {
    icon: "favicon-32x32.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
