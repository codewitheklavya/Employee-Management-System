import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
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
        navigate(result.role === 'admin' ? '/admin/dashboard' : '/employee/dashboard')
      } else {
        setError('Invalid email or password')
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden bg-black">
      {/* Animated background orbs */}
      

      <div className="w-full max-w-[420px] bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-10 shadow-2xl relative z-10 animate-[fadeInUp_0.6s_ease-out] sm:p-10 max-sm:p-7">
        {/* Logo */}
        

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold tracking-tight text-[#f0f0f5]">Welcome Back</h1>
          <p className="text-[#8b8ba3] mt-1.5 text-sm">Sign in to your workspace</p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-2.5 rounded-lg text-[13px] mb-5 text-center animate-[fadeInUp_0.3s_ease]">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-email" className="text-[13px] font-medium text-[#8b8ba3] tracking-wide">Email Address</label>
            <input
              id="login-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full bg-white/[0.04] border border-white/[0.06] text-[#f0f0f5] py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] placeholder:text-[#5a5a72]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-password" className="text-[13px] font-medium text-[#8b8ba3] tracking-wide">Password</label>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full bg-white/[0.04] border border-white/[0.06] text-[#f0f0f5] py-3 px-4 pr-12 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] placeholder:text-[#5a5a72]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a5a72] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-semibold text-[15px] border-none rounded-lg cursor-pointer hover:-translate-y-0.5  active:translate-y-0 active:scale-[0.98] disabled:opacity-80 disabled:pointer-events-none flex items-center justify-center"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin-loader"></span>
            ) : 'Sign In'}
          </button>
        </form>

        {/* Demo credentials */}
        <div className="mt-7 text-center">
          <p className="text-[11px] text-[#5a5a72] uppercase tracking-widest mb-2.5">Demo Credentials</p>
          <div className="flex gap-2">
            <div
              onClick={() => { setEmail('admin@example.com'); setPassword('123') }}
              className="flex-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-pointer transition-all text-center hover:border-emerald-500 hover:bg-emerald-500/[0.08]"
            >
              <span className="block text-xs font-semibold text-emerald-400 mb-0.5">Admin</span>
              <span className="block text-[11px] text-[#5a5a72]">admin@example.com</span>
            </div>
            <div
              onClick={() => { setEmail('employee1@example.com'); setPassword('123') }}
              className="flex-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-pointer transition-all text-center hover:border-emerald-500 hover:bg-emerald-500/[0.08]"
            >
              <span className="block text-xs font-semibold text-emerald-400 mb-0.5">Employee</span>
              <span className="block text-[11px] text-[#5a5a72]">employee1@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login