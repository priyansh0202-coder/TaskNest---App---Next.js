import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export const GET = async (request) => {
    try {
        await connectDb();

        const tasks = await Task.find();
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error)
        return getResponseMessage("failed to fetch tasks", 500, false)
    }
}
export const POST = async (request) => {

    const { title, content, userId, status } = await request.json();

    // fetching userid
    const authToken = request.cookies.get("authtoken")?.value;
    // console.log(authToken, "token")
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data._id, "useridddd")

    try {
        const task = new Task({
            title,
            content,
            userId: data._id,
            status,
        })

        await connectDb()
        const createdTask = await task.save();
        return NextResponse.json(createdTask, {
            status: 201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create task ",
            success: false,
        }, {
            status: 500
        })
    }
}