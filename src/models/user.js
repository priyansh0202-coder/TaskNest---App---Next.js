import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, "Email is required "],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    about: String,
    profileURL: String,
})

User.index({ email: 1 }, { unique: true })

export default mongoose.models.users || mongoose.model("users", User)