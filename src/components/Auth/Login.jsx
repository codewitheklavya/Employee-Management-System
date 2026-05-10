import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(`email is ${email}`);
    console.log(`password is ${[password]}`);
    
    setEmail('');//clear 
    setPassword('');//clear

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
        className="flex flex-col gap-5 relative"
      >
        {/* Email */}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
          className="w-full border border-emerald-500/40 bg-transparent text-white placeholder:text-zinc-500 py-3 px-5 rounded-xl text-base sm:text-lg outline-none focus:border-emerald-400 focus:ring-0.8 focus:ring-emerald-500 transition-all autofill:bg-transparent"
          type="email"
          placeholder="Enter your email"
        />

        {/* Password */}
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          className="w-full border border-emerald-500/40 bg-transparent text-white placeholder:text-zinc-500 py-3 px-5 rounded-xl text-base sm:text-lg outline-none focus:border-emerald-400 focus:ring-0.8 focus:ring-emerald-500 transition-all"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />

            {/* Eye Button */}
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
        {/* Forgot Password
        <div className="flex justify-end">
          <button
            type="button"
            className="text-emerald-400 text-sm hover:text-emerald-300 transition"
          >
            Forgot Password?
          </button>
        </div> */}

        {/* Button */}
        <button
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-xl text-lg transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
        >
          Log In
        </button>
      </form>

      {/* Footer
      <p className="text-zinc-400 text-sm text-center mt-6">
        Don’t have an account?
        <span className="text-emerald-400 cursor-pointer hover:text-emerald-300 ml-1">
          Sign up
        </span>
      </p> */}
    </div>
  </div>
)
}

export default Login
