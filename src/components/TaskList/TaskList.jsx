import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='Tasklist' className='flex gap-5 overflow-x-auto mt-10 pb-5 w-full'>
            {data.tasks.map((task, index) => {
                if (task.active) {
                    return <AcceptTask key={index} data={task} />
                }
                if (task.newTask) {
                    return <NewTask key={index} data={task} />
                }
                if (task.completed) {
                    return <CompleteTask key={index} data={task} />
                }
                if (task.failed) {
                    return <FailedTask key={index} data={task} />
                }
                return null
            })}
        </div>
    )
}

export default TaskList