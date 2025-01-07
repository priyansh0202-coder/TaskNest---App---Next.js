import User from "@/models/user";
import { NextResponse } from "next/server"

// GET user By id API

export const GET = async (request, { params }) => {
    const { userId } = await params
    try {
        const user = await User.findById(userId)
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }
}
// delete user API
export const DELETE = async (request, { params }) => {
    const { userId } = await params;

    try {
        await User.deleteOne({
            _id: userId
        })
        return NextResponse.json({
            message: "user deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "erro while deleting user ",
            success: false
        })
    }

}

// Update user API

export const PUT = async (request, { params }) => {
    const { userId } = await params;

    const { name, password, about, profileURL } = await request.json()

    try {
        const user = await User.findById(userId)
        user.name = name;
        user.password = password,
            user.about = about,
            user.profileURL = profileURL;
        const updatedUser = await user.save();
        return NextResponse.json({
            user: updatedUser,
            message: "User updated successfully",
            status: true,
        });
    } catch (error) {
        return NextResponse.json({
            message: "error while updating user data",
            status: false
        })
    }
}