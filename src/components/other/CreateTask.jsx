import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-10 bg-[#1c1c1c] p-8 rounded-md border border-zinc-800'>
        
        <form className='flex flex-col lg:flex-row gap-10 justify-between'>
          
          {/* Left Section */}
          <div className='w-full lg:w-1/2 space-y-5'>

            <div>
              <h3 className='text-sm mb-2 text-zinc-300'>Task Title</h3>
              <input
                type="text"
                placeholder='Make a UI design'
                className='w-full bg-transparent border border-zinc-600 rounded px-4 py-2 outline-none focus:border-emerald-400 text-sm'
              />
            </div>

            <div>
              <h3 className='text-sm mb-2 text-zinc-300'>Date</h3>
              <input
                type="date"
                className='w-full bg-transparent border border-zinc-600 rounded px-4 py-2 outline-none focus:border-emerald-400 text-sm'
              />
            </div>

            <div>
              <h3 className='text-sm mb-2 text-zinc-300'>Assign to</h3>
              <input
                type="text"
                placeholder='employee name'
                className='w-full bg-transparent border border-zinc-600 rounded px-4 py-2 outline-none focus:border-emerald-400 text-sm'
              />
            </div>

            <div>
              <h3 className='text-sm mb-2 text-zinc-300'>Category</h3>
              <input
                type="text"
                placeholder='design, dev, etc'
                className='w-full bg-transparent border border-zinc-600 rounded px-4 py-2 outline-none focus:border-emerald-400 text-sm'
              />
            </div>

          </div>

          {/* Right Section */}
          <div className='w-full lg:w-1/2 flex flex-col'>
            
            <div className='flex-1'>
              <h3 className='text-sm mb-2 text-zinc-300'>Description</h3>

              <textarea
                rows='10'
                placeholder='Enter task description...'
                className='w-full bg-transparent border border-zinc-600 rounded px-4 py-3 outline-none focus:border-emerald-400 resize-none text-sm'
              ></textarea>
            </div>

            <button className='mt-5 bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 text-white py-3 rounded font-semibold'>
              Create Task
            </button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask
