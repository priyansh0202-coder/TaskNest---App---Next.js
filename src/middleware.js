import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log("middleware executed")
    const authToken = request.cookies.get("authtoken")?.value
    // public routes
    if (request.nextUrl.pathname === "/api/login" ||
        request.nextUrl.pathname === "/api/users") {
        return;
    }
    const userNotAccess =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/signup";

    if (userNotAccess) {
        if (authToken) {
            return NextResponse.redirect(new URL("/", request.url))
        }
    } else {
        if (!authToken) {

            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    message: "Access denied",
                    success: false,
                }, {
                    status: 401,
                })
            }
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}

export const config = {
    matcher: ["/", "/login", "/add-task", "/show-tasks", "/signup", "/profile/:path*", "/api/:path*"]
}
