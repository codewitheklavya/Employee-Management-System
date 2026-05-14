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
    <header className="flex items-center justify-between flex-wrap gap-4">
      
      {/* Left */}
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500 font-medium">
          {user === 'admin' ? 'Welcome back,' : 'Hello,'}
        </span>

        <h1 className="text-[32px] font-bold tracking-tight text-[#387ED1] max-sm:text-[24px]">
          {loggedInUserData?.firstName || 'User'}{' '}
          <span className="animate-wave inline-block">👋</span>
        </h1>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        id="logout-button"
        className="flex items-center gap-2 px-5 py-3 bg-white border border-[#387ED1] rounded-xl text-[#387ED1] font-semibold text-sm cursor-pointer transition-all hover:bg-[#387ED1] hover:text-white hover:shadow-md active:scale-[0.97]"
      >
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </header>
  )
}

export default Header