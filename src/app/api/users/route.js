import { connectDb } from "@/helper/db"
import User from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

// login api
export const GET = async (request) => {
    let users = []
    try {
        await connectDb();
        users = await User.find();
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to fetch users",
            success: false
        })
    }
    return NextResponse.json(users)
}

// signup Api
export const POST = async (request) => {

    const { name, email, password, about, profileURL } = await request.json()

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    })
    try {
        user.password = bcrypt.hashSync(user.password, 10)
        await connectDb();
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            status: 201,
        })
        return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create user",
            status: false
        }, {
            status: 500
        })
    }

}

