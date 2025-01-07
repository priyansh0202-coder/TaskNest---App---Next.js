import { NextResponse } from "next/server"

export const getResponseMessage = (message, statusCode, success) => {
    return NextResponse.json({
        message: message,
        success: success
    }, {
        status: statusCode
    })
}
