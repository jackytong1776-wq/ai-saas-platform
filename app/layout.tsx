import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI SaaS Platform',
  description: 'Unified AI API Platform for Developers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b p-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">AI SaaS Platform</a>
          <div className="space-x-4">
            <a href="/features" className="hover:text-blue-600">Features</a>
            <a href="/pricing" className="hover:text-blue-600">Pricing</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
          </div>
        </nav>
        {children}
        <footer className="border-t p-8 text-center text-gray-600">
          <p>&copy; 2024 AI SaaS Platform. All rights reserved.</p>
          <p className="mt-2">
            <a href="/legal/terms" className="hover:text-blue-600">Terms</a> | <a href="/legal/privacy" className="hover:text-blue-600">Privacy</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
