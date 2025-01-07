import { NextResponse } from "next/server";

export async function GET(request, context) {
    const { userId, postId } = await context.params
    return NextResponse.json({ userId, postId })
}