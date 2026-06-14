export default function Dashboard() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border rounded-lg">
            <p className="text-gray-600 mb-2">API Calls Today</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p className="text-gray-600 mb-2">Usage This Month</p>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p className="text-gray-600 mb-2">API Keys</p>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
        
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your API Key</h2>
          <div className="flex gap-4">
            <input type="text" readOnly className="flex-1 px-4 py-2 border rounded bg-gray-50" placeholder="No API key yet" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Generate</button>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            <p>curl -X POST https://api.yourdomain.com/v1/chat</p>
            <p>-H &quot;Authorization: Bearer YOUR_API_KEY&quot;</p>
            <p>-d &apos;{&quot;{ \&quot;message\&quot;: \&quot;Hello\&quot; }&quot;}&apos;</p>
          </div>
        </div>
      </div>
    </div>
  )
}
