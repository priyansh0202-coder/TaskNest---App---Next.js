"use client";
import React, { useContext, useState } from "react";
import loginImg from "../../assets/login.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loginData.email.trim() || !loginData.password.trim()) {
            toast.error("Please fill in all fields", {
                position: "top-right",
            });
            return;
        }

        try {
            const result = await login(loginData);
            toast.success("Logged in successfully", {
                position: "top-right",
            });
            context.setUser(result.user);
            router.push("/add-task");
        } catch (error) {
            toast.error(`${error.response?.data?.message || "Login failed"}`, {
                position: "top-right",
            });
        }
    };

    return (
        <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-blue-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">

                {/* Left Section */}
                <div className="flex flex-col justify-center items-center p-10 bg-gradient-to-br from-orange-50 to-blue-50">
                    <Image
                        src={loginImg}
                        alt="Login Illustration"
                        className="w-72 h-72 object-contain"
                    />
                    <h2 className="text-3xl font-semibold text-gray-700 mt-4">
                        Welcome Back 👋
                    </h2>
                    <p className="text-gray-500 mt-2 text-center max-w-sm">
                        Login to continue exploring your personalized dashboard.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center p-10">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                        Login Here
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-black text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white text-black transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-medium py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Login
                        </button>

                        {/* Signup link below login button */}
                        <p className="text-center text-gray-600 text-sm mt-4">
                            Don’t have an account?{" "}
                            <a
                                href="/signup"
                                className="text-orange-500 font-medium hover:underline hover:text-orange-600 transition"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
