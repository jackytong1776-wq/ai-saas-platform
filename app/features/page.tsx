export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Features</h1>
        
        <div className="space-y-12">
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">Unified AI API</h2>
            <p className="text-gray-600">Access multiple AI models through a single, consistent API interface. No more managing multiple integrations.</p>
          </div>
          
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">Multi-model Access</h2>
            <p className="text-gray-600">Choose from various AI models including GPT-4, Claude, and more. Switch models easily without changing your code.</p>
          </div>
          
          <div className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-4">Developer Dashboard</h2>
            <p className="text-gray-600">Manage your API keys, monitor usage, and track costs in real-time from a unified dashboard.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Usage Billing</h2>
            <p className="text-gray-600">Transparent, usage-based pricing. Pay only for what you use with no hidden fees.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
