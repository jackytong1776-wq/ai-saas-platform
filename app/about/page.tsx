export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            AI SaaS Platform is a developer-focused AI API service that makes it easy to integrate AI capabilities into your applications.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            We believe AI should be accessible to every developer. Our mission is to provide simple, reliable, and affordable AI APIs that empower developers to build amazing products.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Simple, unified API across multiple AI providers</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Enterprise-grade security and reliability</li>
            <li>Excellent developer documentation and support</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
