import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>

      <div className='rounded-xl py-6 px-6 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.tasks.filter(t => t.newTask).length}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl py-6 px-6 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.tasks.filter(t => t.completed).length}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='rounded-xl py-6 px-6 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.tasks.filter(t => t.active).length}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>

      <div className='rounded-xl py-6 px-6 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.tasks.filter(t => t.failed).length}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumber