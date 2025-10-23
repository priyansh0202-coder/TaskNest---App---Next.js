"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";
import { updateTask } from "@/services/taskService";

const EditTaskModal = ({ task, onClose, onUpdateSuccess }) => {
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.content);
    const [status, setStatus] = useState(task.status);

    const handleUpdate = async () => {
        try {
            const response = await updateTask(task._id, {
                title,
                content,
                status,
            });
            toast.success("Task updated successfully!");
            onUpdateSuccess(response);
        } catch (error) {
            console.error(error);
            toast.error("Error updating task");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Task</h2>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none text-black"
                    placeholder="Title"
                />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none text-black"
                    rows={4}
                    placeholder="Task description"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-orange-400 outline-none text-black"
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all text-black"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-black font-medium hover:opacity-90 transition-all"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;
