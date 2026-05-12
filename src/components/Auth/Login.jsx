import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    handleLogin(email, password)

    // Clear inputs
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen w-full  from-black via-zinc-900 to-emerald-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-zinc-400 mt-2 text-sm sm:text-base">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >

          {/* Email */}
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-emerald-500/40 bg-transparent text-white placeholder:text-zinc-500 py-3 px-5 rounded-xl text-base sm:text-lg outline-none focus:border-emerald-400 focus:ring-0.8 focus:ring-emerald-500 transition-all"
          />

          {/* Password Wrapper */}
          <div className="relative">

            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-emerald-500/40 bg-transparent text-white placeholder:text-zinc-500 py-3 px-5 pr-14 rounded-xl text-base sm:text-lg outline-none focus:border-emerald-400 focus:ring-0.8 focus:ring-emerald-500 transition-all"
            />

            {/* Eye Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
            >
              {showPassword ? (
                <EyeOff size={22} />
              ) : (
                <Eye size={22} />
              )}
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-xl text-lg transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            Log In
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login