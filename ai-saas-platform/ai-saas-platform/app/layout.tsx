import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SaaS Platform',
  description: 'Unified AI API Platform for Developers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">AI SaaS</a>
            <div className="flex gap-6">
              <a href="/features" className="hover:text-blue-600">Features</a>
              <a href="/pricing" className="hover:text-blue-600">Pricing</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/login" className="hover:text-blue-600">Login</a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 AI SaaS Platform. All rights reserved.</p>
            <p className="mt-2">
              <a href="/legal/terms" className="hover:text-blue-600 mr-4">Terms</a>
              <a href="/legal/privacy" className="hover:text-blue-600">Privacy</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
