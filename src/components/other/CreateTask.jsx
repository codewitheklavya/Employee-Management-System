import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { PlusCircle, CheckCircle } from 'lucide-react'

const CreateTask = () => {
  const { userData, createTask } = useContext(AuthContext)
  const employees = userData?.employees || []

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const employeeExists = employees.find(
      emp => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    )
    if (!employeeExists) {
      setError(`Employee "${assignTo}" not found. Available: ${employees.map(e => e.firstName).join(', ')}`)
      return
    }

    createTask({ title, date, category, description }, assignTo)
    setSuccess(true)
    setTitle(''); setDate(''); setAssignTo(''); setCategory(''); setDescription('')
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="mt-8 bg-[#1a1a2e] border border-white/[0.06] rounded-[14px] p-7">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-6">
        <PlusCircle size={22} className="text-emerald-400" />
        <h2 className="text-lg font-semibold text-white">Create New Task</h2>
      </div>

      {success && (
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-4 py-3 rounded-lg text-[13px] font-medium mb-5">
          <CheckCircle size={18} />
          <span>Task assigned successfully!</span>
        </div>
      )}

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/25 text-rose-400 px-4 py-3 rounded-lg text-[13px] font-medium mb-5">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-7 flex-wrap">
        {/* Left */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-title" className="text-[13px] font-medium text-[#8b8ba3]">Task Title</label>
            <input id="task-title" type="text" required placeholder="e.g. Design landing page" value={title} onChange={e => setTitle(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.06] text-white py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] placeholder:text-[#5a5a72]" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-date" className="text-[13px] font-medium text-[#8b8ba3]">Due Date</label>
            <input id="task-date" type="date" required value={date} onChange={e => setDate(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.06] text-white py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-assign" className="text-[13px] font-medium text-[#8b8ba3]">Assign To</label>
            <select id="task-assign" required value={assignTo} onChange={e => setAssignTo(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.06] text-white py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 cursor-pointer [&>option]:bg-[#1a1a2e] [&>option]:text-white">
              <option value="">Select employee</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.firstName}>{emp.firstName} ({emp.email})</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-category" className="text-[13px] font-medium text-[#8b8ba3]">Category</label>
            <input id="task-category" type="text" required placeholder="Design, Dev, Testing..." value={category} onChange={e => setCategory(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.06] text-white py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] placeholder:text-[#5a5a72]" />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="task-description" className="text-[13px] font-medium text-[#8b8ba3]">Description</label>
            <textarea id="task-description" rows="8" required placeholder="Describe the task in detail..." value={description} onChange={e => setDescription(e.target.value)}
              className="w-full flex-1 min-h-[140px] resize-none bg-white/[0.04] border border-white/[0.06] text-white py-3 px-4 rounded-lg text-sm outline-none transition-all focus:border-emerald-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.15)] placeholder:text-[#5a5a72]"></textarea>
          </div>

          <button type="submit" id="create-task-button"
            className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-semibold text-sm border-none rounded-lg cursor-pointer transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(16,185,129,0.4)] active:scale-[0.98]">
            <PlusCircle size={18} />
            <span>Create Task</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
