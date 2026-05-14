import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      const result = login(email, password)

      if (result.success) {
        navigate(
          result.role === 'admin'
            ? '/admin/dashboard'
            : '/employee/dashboard'
        )
      } else {
        setError('Invalid email or password')
        setLoading(false)
      }
    }, 600)
  }

  return (
  <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-[#f4f9ff] overflow-hidden">
    
    <div className="w-full max-w-[430px] bg-white border border-[#dbeafe] rounded-2xl p-10 shadow-xl max-sm:p-6 max-sm:rounded-xl">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-[32px] font-bold tracking-tight text-[#387ED1] max-sm:text-[28px]">
          Welcome Back
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Sign in to your workspace
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-500 px-4 py-3 rounded-lg text-sm mb-5 text-center">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="login-email"
            className="text-sm font-medium text-[#387ED1]"
          >
            Email Address
          </label>

          <input
            id="login-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.2)] placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="login-password"
            className="text-sm font-medium text-[#387ED1]"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-12 rounded-lg text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.2)] placeholder:text-gray-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#387ED1] transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-[#387ED1] hover:bg-[#2f6db7] text-white font-semibold text-[15px] rounded-lg transition-all active:scale-[0.98] disabled:opacity-80 disabled:pointer-events-none flex items-center justify-center"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Demo Credentials */}
      <div className="mt-8 text-center">
        <p className="text-[11px] text-gray-400 uppercase tracking-[3px] mb-3">
          Demo Credentials
        </p>

        <div className="flex gap-3 max-sm:flex-col">
          
          {/* Admin */}
          <div
            onClick={() => {
              setEmail('admin@example.com')
              setPassword('123')
            }}
            className="flex-1 p-3 rounded-xl bg-[#f8fbff] border border-[#dbeafe] cursor-pointer transition-all text-center hover:border-[#387ED1] hover:bg-[#387ED1]/10"
          >
            <span className="block text-sm font-semibold text-[#387ED1] mb-1">
              Admin
            </span>

            <span className="block text-xs text-gray-500 break-all">
              admin@example.com
            </span>
          </div>

          {/* Employee */}
          <div
            onClick={() => {
              setEmail('employee1@example.com')
              setPassword('123')
            }}
            className="flex-1 p-3 rounded-xl bg-[#f8fbff] border border-[#dbeafe] cursor-pointer transition-all text-center hover:border-[#387ED1] hover:bg-[#387ED1]/10"
          >
            <span className="block text-sm font-semibold text-[#387ED1] mb-1">
              Employee
            </span>

            <span className="block text-xs text-gray-500 break-all">
              employee1@example.com
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Login