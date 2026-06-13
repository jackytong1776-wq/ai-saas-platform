export default function Privacy() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2024</p>
        
        <div className="prose max-w-none space-y-6">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information you provide directly, including: name, email address, payment information, and API usage data.
          </p>
          
          <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
          <p className="text-gray-600">
            We use the information to provide and improve our services, process payments, and communicate with you about your account.
          </p>
          
          <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell your personal information. We may share data with service providers who assist in operating our platform, subject to confidentiality obligations.
          </p>
          
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold">5. Cookies</h2>
          <p className="text-gray-600">
            We use cookies to maintain session state and improve your experience. You may disable cookies in your browser settings.
          </p>
          
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. Contact us at <span className="text-blue-600">privacy@aisaas.example</span>
          </p>
          
          <h2 className="text-2xl font-semibold">7. Contact</h2>
          <p className="text-gray-600">
            For privacy-related questions, contact our Data Protection Officer at <span className="text-blue-600">privacy@aisaas.example</span>
          </p>
        </div>
      </div>
    </div>
  )
}
