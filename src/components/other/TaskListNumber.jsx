import React from 'react'
import { Star, Clock, CheckCircle2, XCircle } from 'lucide-react'

const TaskListNumber = ({ data }) => {
  const tasks = data?.tasks || []

  const stats = [
    {
      icon: <Star size={24} />,
      count: tasks.filter((t) => t.newTask).length,
      label: 'New Tasks',
      cardBg: 'bg-white',
      border: 'border-[#dbeafe]',
      iconBg: 'bg-[#387ED1]/10',
      iconColor: 'text-[#387ED1]',
      textColor: 'text-[#387ED1]',
    },

    {
      icon: <Clock size={24} />,
      count: tasks.filter((t) => t.active).length,
      label: 'Active',
      cardBg: 'bg-white',
      border: 'border-[#dbeafe]',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
      textColor: 'text-amber-500',
    },

    {
      icon: <CheckCircle2 size={24} />,
      count: tasks.filter((t) => t.completed).length,
      label: 'Completed',
      cardBg: 'bg-white',
      border: 'border-[#dbeafe]',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-500',
      textColor: 'text-emerald-500',
    },

    {
      icon: <XCircle size={24} />,
      count: tasks.filter((t) => t.failed).length,
      label: 'Failed',
      cardBg: 'bg-white',
      border: 'border-[#dbeafe]',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
      textColor: 'text-red-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`${s.cardBg} ${s.border} border rounded-2xl p-6 flex items-center gap-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md`}
        >
          
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${s.iconBg} ${s.iconColor}`}
          >
            {s.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className={`text-3xl font-bold leading-none ${s.textColor}`}>
              {s.count}
            </h3>

            <p className="text-sm text-gray-500 mt-2 font-medium">
              {s.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber