import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import { connectDb } from "@/helper/db";

export const GET = async (request) => {
    const authToken = request.cookies.get("authtoken")?.value;
    // console.log(authToken, "token")
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    // console.log(data, "data")

    await connectDb();

    const user = await User.findById(data._id).select("-password")

    // console.log("test")
    return NextResponse.json(user)

}