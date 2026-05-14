import React, { useContext } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CheckCircle2,
  XCircle,
  Clock,
} from 'lucide-react'

const AdminDashboard = () => {
  const { userData } = useContext(AuthContext)

  const employees = userData?.employees || []

  const allTasks = employees.flatMap((e) => e.tasks || [])

  const totalTasks = allTasks.length
  const newTasks = allTasks.filter((t) => t.newTask).length
  const activeTasks = allTasks.filter((t) => t.active).length
  const completedTasks = allTasks.filter((t) => t.completed).length
  const failedTasks = allTasks.filter((t) => t.failed).length

  const stats = [
    {
      icon: <ClipboardList size={24} />,
      count: totalTasks,
      label: 'Total Tasks',
      iconBg: 'bg-[#387ED1]/10',
      iconColor: 'text-[#387ED1]',
      textColor: 'text-[#387ED1]',
    },

    {
      icon: <Clock size={24} />,
      count: newTasks,
      label: 'New Tasks',
      iconBg: 'bg-blue-100',
      iconColor: 'text-[#387ED1]',
      textColor: 'text-[#387ED1]',
    },

    {
      icon: <LayoutDashboard size={24} />,
      count: activeTasks,
      label: 'Active',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
      textColor: 'text-amber-500',
    },

    {
      icon: <CheckCircle2 size={24} />,
      count: completedTasks,
      label: 'Completed',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-500',
      textColor: 'text-emerald-500',
    },

    {
      icon: <XCircle size={24} />,
      count: failedTasks,
      label: 'Failed',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      textColor: 'text-red-500',
    },

    {
      icon: <Users size={24} />,
      count: employees.length,
      label: 'Employees',
      iconBg: 'bg-[#387ED1]/10',
      iconColor: 'text-[#387ED1]',
      textColor: 'text-[#387ED1]',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f4f9ff] p-4 sm:p-6 md:p-8">
      
      {/* Main Wrapper */}
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-sm p-5 sm:p-6">
          <Header />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#dbeafe] rounded-2xl p-6 flex items-center gap-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${s.iconBg} ${s.iconColor}`}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`text-3xl font-bold leading-none ${s.textColor}`}
                >
                  {s.count}
                </h3>

                <p className="text-sm text-gray-500 mt-2 font-medium">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Create Task */}
        <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-sm p-6">
          <CreateTask />
        </div>

        {/* All Tasks */}
        <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-sm p-6">
          <AllTask />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard