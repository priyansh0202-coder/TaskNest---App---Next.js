import { NextResponse } from "next/server"

export const POST = async (request) => {

    const response = NextResponse.json({
        message: "User logged out successfully",
        success: true
    })

    response.cookies.set("authtoken", "", {
        expires: new Date(0)
    });

    return response;
}