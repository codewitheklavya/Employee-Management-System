import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = () => {
  const { loggedInUserData } = useContext(AuthContext)

  if (!loggedInUserData) return null

  return (
    <div className="min-h-screen bg-[#f4f9ff] p-4 sm:p-6 md:p-8 text-gray-800">
      
      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-sm p-5 sm:p-6">
          <Header />
        </div>

        {/* Task Numbers */}
        <div className="mt-6">
          <TaskListNumber data={loggedInUserData} />
        </div>

        {/* Task List */}
        <div className="mt-8">
          <TaskList data={loggedInUserData} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard