import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { taskId } = await params;

    try {
        await connectDb();
        const task = await Task.findById(taskId)
        return NextResponse.json(task, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("failed to fetch task!!!", 404, false)
    }
}

export const POST = async (request) => {


}
export const PUT = async (request, { params }) => {
    try {
        const { taskId } = await params;
        const { title, content, status } = await request.json();
        let task = await Task.findById(taskId)

        task.title = title,
            task.content = content,
            task.status = status

        await connectDb();
        const updatedTask = await task.save()
        return NextResponse.json(updatedTask)

    } catch (error) {
        console.log(error)
        return getResponseMessage("error while updating task", 500, false)
    }
}
export const DELETE = async (request, { params }) => {
    try {
        const { taskId } = await params;
        await connectDb();
        await Task.deleteOne({
            _id: taskId,
        });
        return getResponseMessage("task deleted successfully", 200, true)
    } catch (error) {
        console.log(error);
        return getResponseMessage("error while deleting task", 500, false)
    }
}