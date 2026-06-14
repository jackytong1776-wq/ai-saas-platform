'use client'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
        
        <div className="space-y-4">
          <button className="w-full bg-white border py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
            <span>Continue with Google</span>
          </button>
          
          <button className="w-full bg-white border py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
            <span>Continue with GitHub</span>
          </button>
          
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-3" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" className="w-full border rounded-lg px-4 py-3" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="/login" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  )
}
