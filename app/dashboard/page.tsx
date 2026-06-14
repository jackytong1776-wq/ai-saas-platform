'use client'

import { useState } from 'react'

export default function DashboardPage() {
const [apiKey] = useState(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* API Key Section */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">API Keys</h2>
          <div className="flex gap-2 mb-4">
            <input type="text" readOnly value={apiKey} className="flex-1 border rounded-lg px-4 py-2 bg-gray-50" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Copy</button>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Create New Key</button>
        </div>

        {/* Usage Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-600 mb-2">API Calls Today</h3>
            <p className="text-3xl font-bold">47</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-600 mb-2">Tokens Used</h3>
            <p className="text-3xl font-bold">12,450</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-gray-600 mb-2">Current Plan</h3>
            <p className="text-3xl font-bold">Pro</p>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Subscription</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Pro Plan - $29/month</p>
              <p className="text-sm text-gray-600">Next billing date: July 13, 2024</p>
            </div>
            <div className="space-x-2">
              <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">Manage</button>
              <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50">Cancel</button>
            </div>
          </div>
        </div>

        {/* Usage Limits */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Usage Limits</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>API Calls (1000/day limit)</span>
                <span>47/1000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '4.7%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Monthly Credits</span>
                <span>$24.50/$29</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
