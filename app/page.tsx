import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Unified AI API Platform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            One API for AI models. Simple, fast, developer-friendly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </Link>
            <Link href="/pricing" className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">AI Chat API</h3>
              <p className="text-gray-600">Simple OpenAI-compatible API for seamless integration.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
              <p className="text-gray-600">Optimized infrastructure for low-latency responses.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Usage Billing</h3>
              <p className="text-gray-600">Pay only for what you use with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">Start building with AI today.</p>
          <Link href="/login" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get API Key
          </Link>
        </div>
      </section>
    </div>
  )
}
