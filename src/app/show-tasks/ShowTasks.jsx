"use client"
import UserContext from '@/context/userContext'
import { deleteTask, getTasksOfUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { toast } from 'react-toastify'

const ShowTasks = () => {
    const [tasks, setTasks] = useState([])
    const context = useContext(UserContext)
    const loadTasks = async (userId) => {
        try {
            const tasks = await getTasksOfUser(userId)
            setTasks([...tasks].reverse())
            console.log(tasks, "all tasks of user")
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        if (context.user) {
            loadTasks(context.user._id);
        }

    }, [context.user])

    const deleteTaskParent = async (taskId) => {
        try {
            const result = await deleteTask(taskId)
            // console.log(result)
            const newTasks = tasks.filter((item) => item._id !== taskId)
            setTasks(newTasks)
            toast.success("task deleted successfully ")
        } catch (error) {
            console.log(error)
            toast.error("error while deleting task")
        }
    }

    return (
        <div className=' grid grid-cols-12 mt-5 mb-3'>
            <div className='col-span-6 col-start-4'>
                <h1 className='text-3xl mb-3'>
                    Your Tasks : {tasks.length}
                </h1>
                {tasks.map((task) => (
                    <Task key={task._id} task={task} deleteTaskParent={deleteTaskParent} />
                ))}
            </div>
        </div>
    )
}

export default ShowTasks
