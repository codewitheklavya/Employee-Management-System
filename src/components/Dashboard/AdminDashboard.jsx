import React, { useContext } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'
import { LayoutDashboard, Users, ClipboardList, CheckCircle2, XCircle, Clock } from 'lucide-react'

const AdminDashboard = () => {
  const { userData } = useContext(AuthContext)
  const employees = userData?.employees || []

  const allTasks = employees.flatMap(e => e.tasks || [])
  const totalTasks = allTasks.length
  const newTasks = allTasks.filter(t => t.newTask).length
  const activeTasks = allTasks.filter(t => t.active).length
  const completedTasks = allTasks.filter(t => t.completed).length
  const failedTasks = allTasks.filter(t => t.failed).length

  const stats = [
    { icon: <ClipboardList size={24} />, count: totalTasks, label: 'Total Tasks', iconBg: 'bg-violet-500/15', iconColor: 'text-violet-400' },
    { icon: <Clock size={24} />, count: newTasks, label: 'New Tasks', iconBg: 'bg-blue-500/15', iconColor: 'text-blue-400' },
    { icon: <LayoutDashboard size={24} />, count: activeTasks, label: 'Active', iconBg: 'bg-amber-500/15', iconColor: 'text-amber-400' },
    { icon: <CheckCircle2 size={24} />, count: completedTasks, label: 'Completed', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-400' },
    { icon: <XCircle size={24} />, count: failedTasks, label: 'Failed', iconBg: 'bg-rose-500/15', iconColor: 'text-rose-400' },
    { icon: <Users size={24} />, count: employees.length, label: 'Employees', iconBg: 'bg-blue-500/15', iconColor: 'text-blue-400' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-6 md:p-8 text-white">
      <Header />

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#1a1a2e] border border-white/[0.06] rounded-[14px] p-5 flex items-center gap-4 transition-all hover:-translate-y-1 hover:border-white/10">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg} ${s.iconColor}`}>
              {s.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-none">{s.count}</h3>
              <p className="text-[13px] text-[#8b8ba3] mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard