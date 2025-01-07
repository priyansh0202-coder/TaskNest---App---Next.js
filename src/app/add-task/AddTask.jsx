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
            status: "",
        })
    }

    return (
        <div className='grid grid-cols-12 justify-center m-4 '>
            <div className='border shadow-orange-300 shadow col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-4 md:col-start-3 p-5  rounded '>
                <h1 className='text-2xl lg:text-3xl font-semibold text-center'> Add your task here!! </h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <label htmlFor="task_title" className='block text-sm font-medium mb-2'>
                            Title
                        </label>
                        <input onChange={handleChange} name='title' value={task.title} type="text" className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' id='task_title' />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="task_content" className='block text-sm font-medium mb-2'>
                            Content
                        </label>
                        <textarea type="text" onChange={handleChange} name='content' value={task.content} className='w-full p-2.5 rounded bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' id='task_content'
                            rows={4} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="task_status" className='block text-sm font-medium mb-2'>
                            Status
                        </label>
                        <select name="status" value={task.status} onChange={handleChange} id="task_status" className='h-full rounded bg-inherit text-white border' >
                            <option value="none" className='bg-black' disabled>--Select Status</option>
                            <option value="pending" className='bg-black'>pending</option>
                            <option value="completed" className='bg-black'>completed</option>
                        </select>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-3 md:space-y-0 mt-4 space-x-6'>
                        <button type='submit' className='bg-blue-600 py-2 px-4 rounded-lg shadow shadow-white hover:bg-blue-800 w-full md:w-auto'>Add Task</button>
                        <button type='reset' onClick={handleClear} className='bg-red-500 py-2 px-4 rounded-lg shadow shadow-white hover:bg-red-700 w-full md:w-auto'>Clear Task</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddTask


