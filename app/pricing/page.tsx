export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '$9', period: '/month', features: ['100 API calls/day', '1 API Key', 'Email support', 'Basic analytics'] },
    { name: 'Pro', price: '$29', period: '/month', features: ['1000 API calls/day', '5 API Keys', 'Priority support', 'Advanced analytics', 'Custom models'] },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited API calls', 'Unlimited API Keys', '24/7 support', 'Custom integrations', 'SLA guarantee'] },
  ]

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
        <p className="text-gray-600 text-center mb-12">Choose the plan that fits your needs</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/login" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Pay as you go</h3>
          <p className="text-gray-600">Need flexibility? Use our API without a subscription and pay only for what you use.</p>
        </div>
      </div>
    </main>
  )
}
