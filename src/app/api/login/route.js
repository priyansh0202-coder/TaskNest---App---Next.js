import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

await connectDb();

export const POST = async (request) => {
    const { email, password } = await request.json();

    try {
        await connectDb();
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json(
                {
                    message: "User not found",
                    success: false,
                },
                {
                    status: 404,
                }
            );
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                {
                    message: "Password does not match !!",
                    success: false,
                },
                {
                    status: 400,
                }
            );
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.JWT_KEY
        );
        // console.log(token, "token");

        const response = NextResponse.json({
            message: "user logged in successfully",
            success: true,
            user: user
        });

        response.cookies.set("authtoken", token, {
            expiresIn: "1d",
            httpOnly: true,
        })

        return response;

    } catch (error) {
        return NextResponse.json(
            {
                message: "error while logging in",
                success: false,
            },
            {
                status: 500,
            }
        );
    }
};
