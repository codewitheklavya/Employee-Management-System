import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { List } from 'lucide-react'

const AllTask = () => {
  const { userData } = useContext(AuthContext)

  const employees = userData?.employees || []

  const getStatusInfo = (task) => {
    if (task.newTask)
      return {
        label: 'New',
        classes: 'bg-[#387ED1] text-white',
      }

    if (task.active)
      return {
        label: 'Active',
        classes: 'bg-amber-500 text-white',
      }

    if (task.completed)
      return {
        label: 'Completed',
        classes: 'bg-emerald-500 text-white',
      }

    if (task.failed)
      return {
        label: 'Failed',
        classes: 'bg-red-500 text-white',
      }

    return {
      label: 'Unknown',
      classes: 'bg-gray-500 text-white',
    }
  }

  return (
    <div className="mt-8 bg-white border border-[#dbeafe] rounded-2xl p-7 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-7">
        
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#387ED1]/10 flex items-center justify-center">
            <List size={22} className="text-[#387ED1]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#387ED1]">
              All Employee Tasks
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage all assigned employee tasks
            </p>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#387ED1]/10 rounded-xl">
          <span className="text-sm font-semibold text-[#387ED1]">
            Total Employees : {employees.length}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        
        {/* Header */}
        <div className="grid grid-cols-[160px_1fr_140px_120px_120px] gap-4 items-center px-5 py-4 text-[12px] uppercase tracking-wider text-gray-500 font-bold border-b border-[#dbeafe] bg-[#f8fbff] rounded-t-xl min-w-[900px]">
          <span>Employee</span>
          <span>Task</span>
          <span>Category</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {/* Body */}
        <div className="max-h-[500px] overflow-y-auto min-w-[900px]">
          {employees.map((emp) =>
            emp.tasks.map((task, idx) => {
              const status = getStatusInfo(task)

              return (
                <div
                  key={`${emp.id}-${idx}`}
                  className="grid grid-cols-[160px_1fr_140px_120px_120px] gap-4 items-center px-5 py-4 border-b border-[#eef4ff] hover:bg-[#f8fbff] transition-all"
                >
                  
                  {/* Employee */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#387ED1] flex items-center justify-center text-sm font-bold text-white shrink-0">
                      {emp.firstName.charAt(0)}
                    </div>

                    <span className="font-semibold text-gray-800">
                      {emp.firstName}
                    </span>
                  </div>

                  {/* Task */}
                  <div className="flex flex-col">
                    <strong className="font-semibold text-gray-800 text-[15px]">
                      {task.taskTitle}
                    </strong>

                    <small className="text-[12px] text-gray-500 mt-1">
                      {task.taskDescription}
                    </small>
                  </div>

                  {/* Category */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#387ED1]/10 text-[#387ED1]">
                      {task.category || 'General'}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="text-sm text-gray-500 font-medium">
                    {task.taskDate}
                  </span>

                  {/* Status */}
                  <div>
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold ${status.classes}`}
                    >
                      {status.label}
                    </span>
                  </div>
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