import React from 'react'
import { Star, Clock, CheckCircle2, XCircle } from 'lucide-react'

const TaskListNumber = ({ data }) => {
  const tasks = data?.tasks || []

  const stats = [
    { icon: <Star size={24} />, count: tasks.filter(t => t.newTask).length, label: 'New Tasks', iconBg: 'bg-blue-500/15', iconColor: 'text-blue-400' },
    { icon: <Clock size={24} />, count: tasks.filter(t => t.active).length, label: 'Active', iconBg: 'bg-amber-500/15', iconColor: 'text-amber-400' },
    { icon: <CheckCircle2 size={24} />, count: tasks.filter(t => t.completed).length, label: 'Completed', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-400' },
    { icon: <XCircle size={24} />, count: tasks.filter(t => t.failed).length, label: 'Failed', iconBg: 'bg-rose-500/15', iconColor: 'text-rose-400' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-[#1a1a2e] border border-white/[0.06] rounded-[14px] p-5 flex items-center gap-4 transition-all hover:-translate-y-1 hover:border-white/10">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg} ${s.iconColor}`}>
            {s.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold leading-none text-white">{s.count}</h3>
            <p className="text-[13px] text-[#8b8ba3] mt-1">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber