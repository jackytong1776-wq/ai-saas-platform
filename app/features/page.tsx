export default function Features() {
  const features = [
    {
      title: 'Unified AI API',
      description: 'Access multiple AI models through a single, OpenAI-compatible API. No complex integrations required.',
      icon: '🔗'
    },
    {
      title: 'Multi-model Access',
      description: 'Leverage the power of advanced AI models with simple API calls. Switch models effortlessly.',
      icon: '🤖'
    },
    {
      title: 'Developer Dashboard',
      description: 'Monitor usage, manage API keys, and track costs in real-time from your dashboard.',
      icon: '📊'
    },
    {
      title: 'Usage Billing',
      description: 'Transparent, pay-as-you-go pricing. Pay only for what you use, with no hidden fees.',
      icon: '💳'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Features</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to build AI-powered applications.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
