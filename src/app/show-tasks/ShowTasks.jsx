"use client"
import UserContext from '@/context/userContext'
import { deleteTask, getTasksOfUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { toast } from 'react-toastify'
import Loader from '@/components/Loader'

const ShowTasks = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    const context = useContext(UserContext)
    const loadTasks = async (userId) => {
        try {
            const tasks = await getTasksOfUser(userId)
            setTasks([...tasks].reverse())
            console.log(tasks, "all tasks of user")
        } catch (error) {
            console.log(error)

        }finally{
            setLoading(false)
        }
    }
    
    useEffect(() => {
        if (context.user) {
            loadTasks(context.user._id);
        }
        
    }, [context.user])
    
    if (loading) return <Loader />;
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
        <div className=' bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-8 px-4 relative overflow-hidden'>
            {/* Decorative Background Elements */}
            <div className='absolute top-20 right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl pointer-events-none'></div>

            {/* Content Container */}
            <div className='grid grid-cols-12 mt-20 mb-3 relative z-10'>
                <div className='col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4'>
                    {/* Header Section */}
                    <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-gray-200'>
                        <div className='flex items-center gap-3'>
                            <div className='p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg shadow-orange-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent'>
                                    Your Tasks
                                </h1>
                                <p className='text-sm text-gray-600 mt-1'>
                                    {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} in total
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tasks List */}
                    <div className='space-y-4'>
                        {tasks.map((task) => (
                            <Task key={task._id} task={task} deleteTaskParent={deleteTaskParent} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {tasks.length === 0 && (
                        <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-300'>
                            <div className='inline-block p-4 bg-gray-100 rounded-full mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No tasks yet</h3>
                            <p className='text-gray-500'>Start by adding your first task!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ShowTasks
