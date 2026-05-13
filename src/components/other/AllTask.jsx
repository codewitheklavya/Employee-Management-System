import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { List } from 'lucide-react'

const AllTask = () => {
  const { userData } = useContext(AuthContext)
  const employees = userData?.employees || []

  const getStatusInfo = (task) => {
    if (task.newTask) return { label: 'New', classes: 'bg-blue-500/15 text-blue-400' }
    if (task.active) return { label: 'Active', classes: 'bg-amber-500/15 text-amber-400' }
    if (task.completed) return { label: 'Completed', classes: 'bg-emerald-500/15 text-emerald-400' }
    if (task.failed) return { label: 'Failed', classes: 'bg-rose-500/15 text-rose-400' }
    return { label: 'Unknown', classes: 'bg-gray-500/15 text-gray-400' }
  }

  return (
    <div className="mt-8 bg-[#1a1a2e] border border-white/[0.06] rounded-[14px] p-7">
      <div className="flex items-center gap-2.5 mb-6">
        <List size={22} className="text-emerald-400" />
        <h2 className="text-lg font-semibold text-white">All Employee Tasks</h2>
      </div>

      <div className="overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-[140px_1fr_120px_110px_110px] gap-3 items-center px-4 py-3 text-[11px] uppercase tracking-wider text-[#5a5a72] font-semibold border-b border-white/[0.06] max-md:grid-cols-[100px_1fr_100px] max-md:[&>*:nth-child(3)]:hidden max-md:[&>*:nth-child(4)]:hidden">
          <span>Employee</span>
          <span>Task</span>
          <span className="max-md:hidden">Category</span>
          <span className="max-md:hidden">Date</span>
          <span>Status</span>
        </div>

        {/* Table Body */}
        <div className="max-h-[400px] overflow-y-auto">
          {employees.map(emp =>
            emp.tasks.map((task, idx) => {
              const status = getStatusInfo(task)
              return (
                <div key={`${emp.id}-${idx}`}
                  className="grid grid-cols-[140px_1fr_120px_110px_110px] gap-3 items-center px-4 py-3 text-[13px] border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] max-md:grid-cols-[100px_1fr_100px] max-md:[&>*:nth-child(3)]:hidden max-md:[&>*:nth-child(4)]:hidden">
                  <span className="flex items-center gap-2.5 font-medium">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-[13px] font-bold text-white shrink-0">
                      {emp.firstName.charAt(0)}
                    </span>
                    {emp.firstName}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <strong className="font-medium text-white">{task.taskTitle}</strong>
                    <small className="text-[11px] text-[#5a5a72]">{task.taskDescription}</small>
                  </span>
                  <span className="max-md:hidden">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-violet-500/12 text-violet-400">
                      {task.category || 'General'}
                    </span>
                  </span>
                  <span className="text-xs text-[#8b8ba3] max-md:hidden">{task.taskDate}</span>
                  <span>
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${status.classes}`}>
                      {status.label}
                    </span>
                  </span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default AllTask
