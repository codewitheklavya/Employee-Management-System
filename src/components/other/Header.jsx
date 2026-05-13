import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { AuthContext } from '../../context/AuthProvider'

const Header = () => {
  const { loggedInUserData, logout, user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="flex items-center justify-between pb-6 border-b border-white/[0.06] flex-wrap gap-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-[#8b8ba3]">
          {user === 'admin' ? 'Welcome back,' : 'Hello,'}
        </span>
        <h1 className="text-[28px] font-bold tracking-tight text-white max-sm:text-[22px]">
          {loggedInUserData?.firstName || 'User'} <span className="animate-wave">👋</span>
        </h1>
      </div>

      <button
        onClick={handleLogout}
        id="logout-button"
        className="flex items-center gap-2 px-5 py-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 font-medium text-sm cursor-pointer transition-all hover:bg-rose-500/20 hover:border-rose-500/40 hover:-translate-y-0.5 active:scale-[0.97]"
      >
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </header>
  )
}

export default Header
