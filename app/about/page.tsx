export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            AI SaaS Platform is a developer-first company building unified AI infrastructure for businesses worldwide.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe AI should be accessible to every developer. Our platform simplifies the complexity of AI integrations, allowing you to focus on building great products.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Enterprise-grade reliability and security</li>
            <li>Simple, transparent pricing</li>
            <li>Developer-friendly documentation</li>
            <li>Responsive customer support</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            Have questions? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
