import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    const { updateTaskStatus } = useContext(AuthContext)

    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold text-white mb-4">Your Tasks</h2>
            <div id="Tasklist" className="flex gap-4 overflow-x-auto pb-3 scroll-smooth">
                {data.tasks.map((task, index) => {
                    if (task.newTask) {
                        return <NewTask key={index} data={task} onAccept={() => updateTaskStatus(index, 'active')} />
                    }
                    if (task.active) {
                        return <AcceptTask key={index} data={task}
                            onComplete={() => updateTaskStatus(index, 'completed')}
                            onFail={() => updateTaskStatus(index, 'failed')}
                        />
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
        </div>
    )
}

export default TaskList