import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  
  return (
    <div className='min-h-screen bg-[#1c1c1c] p-4 sm:p-6 md:p-10'>
      <Header data={data}/>
      <TaskListNumber data={data} />
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard  