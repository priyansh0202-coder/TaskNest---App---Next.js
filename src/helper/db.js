import mongoose from "mongoose";
// import User from "../models/user";

const config = {
    isConnected: 0,
}
export const connectDb = async () => {
    if (config.isConnected) {
        return;
    }
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });

        console.log(connection.readyState)
        config.isConnected = connection.readyState;
        console.log("mongodb database is connected sucessfully ")
    } catch (error) {
        console.log(error, "error while coneecting the mongodb")
    }
}

