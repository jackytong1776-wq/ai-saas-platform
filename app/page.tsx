export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-bold mb-6">Unified AI API Platform</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          One API for AI models. Simple, fast, developer-friendly.
        </p>
        <div className="space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">Start Free Trial</a>
          <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">View Pricing</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="font-bold mb-2">Unified AI API</h3>
            <p className="text-gray-600 text-sm">Single API endpoint for multiple AI models</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2">Fast Response</h3>
            <p className="text-gray-600 text-sm">Optimized for speed and reliability</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="font-bold mb-2">Usage Billing</h3>
            <p className="text-gray-600 text-sm">Pay only for what you use</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold mb-2">Secure API Keys</h3>
            <p className="text-gray-600 text-sm">Enterprise-grade security</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-8">Start building with AI in minutes</p>
        <a href="/login" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Get API Key</a>
      </section>
    </main>
  )
}
