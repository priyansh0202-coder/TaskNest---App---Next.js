



import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx"

const Task = ({ task, deleteTaskParent }) => {
    const { user } = useContext(UserContext)

    const handleDelete = async (taskId) => {
        deleteTaskParent(taskId)
    }

    console.log(task, "status")

    const isCompleted = task.status === "completed"

    return (
        <div className={` group relative mt-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${isCompleted
                ? "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
                : "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200"
            } shadow-lg hover:shadow-xl`}>

            {/* Status Indicator Bar */}
            <div className={`h-1.5 rounded-t-2xl ${isCompleted
                    ? "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
                    : "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
                }`}></div>

            <div className='p-6'>
                {/* Header Section */}
                <div className='flex justify-between items-start gap-4 mb-4'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                            {isCompleted ? (
                                <span className='flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            ) : (
                                <span className='flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            )}
                            <h1 className='text-xl sm:text-2xl font-bold text-gray-800 leading-tight'>
                                {task.title}
                            </h1>
                        </div>
                    </div>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleDelete(task._id)}
                        className='flex-shrink-0 group/btn relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 flex items-center justify-center cursor-pointer'
                        aria-label="Delete task"
                    >
                        <RxCross1 className='text-gray-600 group-hover/btn:text-red-500 transition-colors duration-300' />
                        <div className='absolute inset-0 rounded-xl bg-red-500/0 group-hover/btn:bg-red-500/5 transition-all duration-300'></div>
                    </button>
                </div>

                {/* Content Section */}
                <p className='text-gray-700 text-sm sm:text-base leading-relaxed mb-4 pl-8'>
                    {task.content}
                </p>

                {/* Footer Section */}
                <div className='flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-gray-200'>
                    {/* Status Badge */}
                    <div className='flex items-center gap-2'>
                        <span className='text-xs font-medium text-gray-500'>Status:</span>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${isCompleted
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-orange-100 text-orange-700 border border-orange-200"
                            }`}>
                            {isCompleted ? "✓ " : "⏳ "}
                            {task.status.toUpperCase()}
                        </span>
                    </div>

                    {/* Author Badge */}
                    <div className='flex items-center gap-2'>
                        <span className='text-xs font-medium text-gray-500'>Author:</span>
                        <div className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200'>
                            <div className='w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold'>
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <span className='text-xs font-bold text-purple-700'>
                                {user?.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Overlay on Hover */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 pointer-events-none transition-all duration-500'></div>
        </div>
    )
}

export default Task