import React from 'react'

const Header = ({data}) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
      
      <h1 className='text-xl sm:text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-2xl sm:text-3xl font-semibold'>
          {data?.firstName || 'User'} 👋
        </span>
      </h1>

      <button 
        onClick={logOutUser}
        className='bg-red-400 hover:bg-red-500 font-medium text-white px-4 py-2 sm:px-5 rounded-sm cursor-pointer active:scale-95 w-full sm:w-auto'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header
