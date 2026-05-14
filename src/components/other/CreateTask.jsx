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
      (emp) =>
        emp.firstName.toLowerCase() ===
        assignTo.toLowerCase()
    )

    if (!employeeExists) {
      setError(
        `Employee "${assignTo}" not found. Available: ${employees
          .map((e) => e.firstName)
          .join(', ')}`
      )

      return
    }

    createTask(
      {
        title,
        date,
        category,
        description,
      },
      assignTo
    )

    setSuccess(true)

    setTitle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')

    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="mt-8 bg-white border border-[#dbeafe] rounded-2xl p-7 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-11 h-11 rounded-xl bg-[#387ED1]/10 flex items-center justify-center">
          <PlusCircle size={22} className="text-[#387ED1]" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#387ED1]">
            Create New Task
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Assign tasks to employees
          </p>
        </div>
      </div>

      {/* Success */}
      {success && (
        <div className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-xl text-sm font-medium mb-5">
          <CheckCircle size={18} />
          <span>Task assigned successfully!</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-500 text-white px-4 py-3 rounded-xl text-sm font-medium mb-5">
          {error}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-7 flex-wrap"
      >
        
        {/* Left Side */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-5">

          {/* Task Title */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="task-title"
              className="text-sm font-semibold text-[#387ED1]"
            >
              Task Title
            </label>

            <input
              id="task-title"
              type="text"
              required
              placeholder="e.g. Design landing page"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.15)] placeholder:text-gray-400"
            />
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="task-date"
              className="text-sm font-semibold text-[#387ED1]"
            >
              Due Date
            </label>

            <input
              id="task-date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.15)]"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="task-assign"
              className="text-sm font-semibold text-[#387ED1]"
            >
              Assign To
            </label>

            <select
              id="task-assign"
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm outline-none transition-all focus:border-[#387ED1] cursor-pointer"
            >
              <option value="">Select employee</option>

              {employees.map((emp) => (
                <option
                  key={emp.id}
                  value={emp.firstName}
                >
                  {emp.firstName} ({emp.email})
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="task-category"
              className="text-sm font-semibold text-[#387ED1]"
            >
              Category
            </label>

            <input
              id="task-category"
              type="text"
              required
              placeholder="Design, Dev, Testing..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.15)] placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-5">

          {/* Description */}
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="task-description"
              className="text-sm font-semibold text-[#387ED1]"
            >
              Description
            </label>

            <textarea
              id="task-description"
              rows="8"
              required
              placeholder="Describe the task in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full flex-1 min-h-[180px] resize-none bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl text-sm outline-none transition-all focus:border-[#387ED1] focus:shadow-[0_0_0_3px_rgba(56,126,209,0.15)] placeholder:text-gray-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            id="create-task-button"
            className="flex items-center justify-center gap-2 py-3.5 bg-[#387ED1] text-white font-semibold text-sm rounded-xl cursor-pointer transition-all hover:bg-[#2f6db7] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <PlusCircle size={18} />
            <span>Create Task</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask