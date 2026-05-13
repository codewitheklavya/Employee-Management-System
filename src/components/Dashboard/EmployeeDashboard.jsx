import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = () => {
  const { loggedInUserData } = useContext(AuthContext)

  if (!loggedInUserData) return null

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-4 sm:p-6 md:p-8 text-white">
      <Header />
      <TaskListNumber data={loggedInUserData} />
      <TaskList data={loggedInUserData} />
    </div>
  )
}

export default EmployeeDashboard