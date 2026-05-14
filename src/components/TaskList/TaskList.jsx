import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  const { updateTaskStatus } = useContext(AuthContext)

  return (
    <div className="mt-10">
      
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[30px] font-bold text-[#387ED1]">
          Your Tasks
        </h2>

        <span className="text-sm text-gray-500 font-medium">
          {data.tasks.length} Tasks
        </span>
      </div>

      {/* Task Cards */}
      <div
        id="Tasklist"
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
      >
        {data.tasks.map((task, index) => {

          // New Task
          if (task.newTask) {
            return (
              <NewTask
                key={index}
                data={task}
                onAccept={() => updateTaskStatus(index, 'active')}
              />
            )
          }

          // Active Task
          if (task.active) {
            return (
              <AcceptTask
                key={index}
                data={task}
                onComplete={() =>
                  updateTaskStatus(index, 'completed')
                }
                onFail={() =>
                  updateTaskStatus(index, 'failed')
                }
              />
            )
          }

          // Completed Task
          if (task.completed) {
            return (
              <CompleteTask
                key={index}
                data={task}
              />
            )
          }

          // Failed Task
          if (task.failed) {
            return (
              <FailedTask
                key={index}
                data={task}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}

export default TaskList