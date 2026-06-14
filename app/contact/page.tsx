export default function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">
          Get in touch with our team.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="you@example.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help?" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message..."></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
        
        <p className="text-center text-gray-500 mt-8">
          Or email us directly at <span className="text-blue-600">support@aisaas.example</span>
        </p>
      </div>
    </div>
  )
}
