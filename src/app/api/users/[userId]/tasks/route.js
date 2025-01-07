import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { userId } = await params;

    try {
        await connectDb()
        const tasks = await Task.find({
            userId: userId,
        });
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error);
        return getResponseMessage("failed to fetch tasks", 404, false)
    }
}