export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 9,
      description: 'Perfect for beginners',
      features: ['100 API calls/month', '1 API Key', 'Email support', 'Basic documentation']
    },
    {
      name: 'Pro',
      price: 29,
      description: 'For growing teams',
      features: ['1,000 API calls/month', '5 API Keys', 'Priority support', 'Advanced documentation', 'Usage analytics']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Unlimited API calls', 'Unlimited API Keys', '24/7 support', 'Custom integrations', 'Dedicated account manager']
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Simple, transparent pricing. No hidden fees.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 border rounded-xl ${plan.name === 'Pro' ? 'border-blue-500 shadow-lg' : ''}`}>
              {plan.name === 'Pro' && <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">Popular</span>}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="my-6">
                {typeof plan.price === 'number' ? (
                  <span className="text-4xl font-bold">${plan.price}</span>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/login" className={`block text-center py-3 rounded-lg font-semibold ${plan.name === 'Enterprise' ? 'border border-gray-300 hover:bg-gray-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
