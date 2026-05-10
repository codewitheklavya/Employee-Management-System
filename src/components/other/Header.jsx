import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Eklavya</span></h1>
      <button className='bg-red-400 font-medium text-white px-5 py-2 rounded-sm cursor-pointer active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
