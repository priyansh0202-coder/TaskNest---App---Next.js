import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx"

const Task = ({ task, deleteTaskParent }) => {
    const { user } = useContext(UserContext)

    const handleDelete = async (taskId) => {
        deleteTaskParent(taskId)
    }
    console.log(task, "status")
    return (
        <div className={`shadow shadow-orange-500 mt-2 rounded-md ${task.status === "completed" ? "bg-red-500" : "bg-gray-800"
            }`}>
            <div className='p-5'>
                <div className='flex flex-wrap justify-between items-center'>
                    <h1 className='text-2xl sm:text-xl md:text-2xl font-semibold'>{task.title}</h1>
                    <span onClick={() => {
                        handleDelete(task._id)
                    }} className='shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 sm:w-9 sm:h-9 cursor-pointer flex justify-center items-center '>
                        <RxCross1 />
                    </span>
                </div>
                <p className='font-normal text-sm sm:text-base md:text-lg'>{task.content}</p>
                <div className='flex flex-wrap justify-between mt-3 text-sm sm:text-base'>
                    <p className='text-left w-full sm:w-auto'>Status: <span className='font-bold'>{task.status.toUpperCase()}</span>  </p>
                    <p className='text-right w-full sm:w-auto'>Author : <span className='font-bold'>{user?.name}</span>  </p>

                </div>
            </div>
        </div>
    )
}

export default Task
