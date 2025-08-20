import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zondagavondtennis - Terrein Reservaties',
  description: 'Reserveer je tennisterrein voor de zondagavond sessies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
