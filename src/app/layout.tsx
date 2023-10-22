import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import { AuthProvider } from "@/providers/auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IRC Store',
  description: 'App de E-Commerce criado por Isaque Chaves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
        </body>
    </html>
  )
}
