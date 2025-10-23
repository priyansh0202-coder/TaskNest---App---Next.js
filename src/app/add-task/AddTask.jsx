
"use client"
import { addTask } from '@/services/taskService'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddTask = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: "676e7a5a5fecdd57c6b84641"
    })

    console.log(JSON.stringify(task, "taskkkkkkk"))

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title.trim() || !task.content.trim() || task.status === "none") {
            toast.error("Please fill in all fields before adding a task", {
                position: "top-center",
            });
            return;
        }
        try {
            const result = await addTask(task)
            console.log(result)
            toast.success("Task added successfully", {
                position: "top-center"
            })
            setTask({
                title: "",
                content: "",
                status: "none",
            });
        } catch (error) {
            console.log(error)
            toast.error("Error while adding task ", {
                position: "top-center"
            })
        }
    }

    const handleClear = () => {
        setTask({
            title: "",
            content: "",
            status: "none",
        })
    }

    return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50'>
            <div className='w-full max-w-2xl mt-20'>
                {/* Header Section */}
                <div className='text-center mb-2 flex items-center justify-center space-x-2'>
                    <div className='inline-block p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-orange-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                    <h1 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                        Create New Task
                    </h1>
                    {/* <p className='text-gray-600 text-sm'>Organize your work efficiently</p> */}
                </div>

                {/* Form Card */}
                <div className='bg-white backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl '>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Title Input */}
                        <div className='group'>
                            <label htmlFor="task_title" className='block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2'>
                                <span className='w-1.5 h-1.5 bg-orange-500 rounded-full'></span>
                                Task Title
                            </label>
                            <div className='relative'>
                                <input
                                    onChange={handleChange}
                                    name='title'
                                    value={task.title}
                                    type="text"
                                    className='w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-gray-800 placeholder-gray-400 outline-none'
                                    id='task_title'
                                    placeholder='Enter your task title...'
                                />
                                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 pointer-events-none transition-all duration-500'></div>
                            </div>
                        </div>

                        {/* Content Textarea */}
                        <div className='group'>
                            <label htmlFor="task_content" className='block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2'>
                                <span className='w-1.5 h-1.5 bg-pink-500 rounded-full'></span>
                                Task Description
                            </label>
                            <div className='relative'>
                                <textarea
                                    onChange={handleChange}
                                    name='content'
                                    value={task.content}
                                    className='w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-gray-800 placeholder-gray-400 outline-none resize-none'
                                    id='task_content'
                                    rows={5}
                                    placeholder='Describe your task in detail...'
                                />
                                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 pointer-events-none transition-all duration-500'></div>
                            </div>
                        </div>

                        {/* Status Select */}
                        <div className='group'>
                            <label htmlFor="task_status" className='block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2'>
                                <span className='w-1.5 h-1.5 bg-purple-500 rounded-full'></span>
                                Task Status
                            </label>
                            <div className='relative'>
                                <select
                                    name="status"
                                    value={task.status}
                                    onChange={handleChange}
                                    id="task_status"
                                    className='w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-gray-800 outline-none appearance-none cursor-pointer'
                                >
                                    <option value="none" className='bg-white' disabled>Select task status</option>
                                    <option value="pending" className='bg-white'>⏳ Pending</option>
                                    <option value="completed" className='bg-white'>✓ Completed</option>
                                </select>
                                <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 pointer-events-none transition-all duration-500'></div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                            <button
                                type='submit'
                                className='flex-1 relative py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:shadow-xl hover:shadow-orange-300 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group'
                            >
                                <span className='relative z-10 flex items-center justify-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    Add Task
                                </span>
                                <div className='absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </button>

                            <button
                                type='reset'
                                onClick={handleClear}
                                className='flex-1 sm:flex-none py-4 px-6 rounded-xl font-semibold text-gray-700 bg-gray-100 border-2 border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                </svg>
                                Clear
                            </button>
                        </div>
                    </form>
                </div>

                {/* Decorative Elements */}
                <div className='absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none'></div>
                <div className='absolute bottom-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none'></div>
            </div>
        </div>
    )
}

export default AddTask