import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { List, Search } from 'lucide-react'

const AllTask = () => {
  const { userData } = useContext(AuthContext)

  const employees = userData?.employees || []

  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredEmployees = employees.filter((emp) =>
    emp.firstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mt-8 bg-white border border-[#dbeafe] rounded-2xl p-7 shadow-sm max-sm:p-4">
      
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
        
        {/* Left */}
        <div className="flex items-start gap-3">
          
          <div className="w-11 h-11 rounded-xl bg-[#387ED1]/10 flex items-center justify-center shrink-0">
            <List size={22} className="text-[#387ED1]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#387ED1] leading-tight max-sm:text-xl">
              All Employee Tasks
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage all assigned employee tasks
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          
          {/* Search */}
          <div className="relative w-full sm:w-[260px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search employee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dbeafe] bg-white text-gray-700 text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.15)] placeholder:text-gray-400"
            />
          </div>

          {/* Count */}
          <div className="px-4 py-3 bg-[#387ED1]/10 rounded-xl whitespace-nowrap">
            <span className="text-sm font-semibold text-[#387ED1]">
              Total Employees : {filteredEmployees.length}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-4 lg:hidden">
        {filteredEmployees.map((emp) =>
          emp.tasks.map((task, idx) => {
            const status = getStatusInfo(task)

            return (
              <div
                key={`${emp.id}-${idx}`}
                className="border border-[#dbeafe] rounded-2xl p-4 bg-[#f8fbff]"
              >
                
                {/* Top */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#387ED1] flex items-center justify-center text-sm font-bold text-white shrink-0">
                      {emp.firstName.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {emp.firstName}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {task.taskDate}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold ${status.classes}`}
                  >
                    {status.label}
                  </span>
                </div>

                {/* Task */}
                <div>
                  <h3 className="font-bold text-gray-800 text-[15px] leading-snug">
                    {task.taskTitle}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {task.taskDescription}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#387ED1]/10 text-[#387ED1]">
                    {task.category || 'General'}
                  </span>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        
        {/* Table Header */}
        <div className="grid grid-cols-[160px_1fr_140px_120px_120px] gap-4 items-center px-5 py-4 text-[12px] uppercase tracking-wider text-gray-500 font-bold border-b border-[#dbeafe] bg-[#f8fbff] rounded-t-xl min-w-[900px]">
          <span>Employee</span>
          <span>Task</span>
          <span>Category</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {/* Table Body */}
        <div className="max-h-[500px] overflow-y-auto min-w-[900px]">
          {filteredEmployees.map((emp) =>
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