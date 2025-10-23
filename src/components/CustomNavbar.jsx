

"use client";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import Image from "next/image";

const CustomNavbar = () => {
    const context = useContext(UserContext);
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const result = await logout();
            console.log(result);
            context.setUser(undefined);
            router.push("/");
        } catch (error) {
            console.log(error);
            toast.error("Logout error");
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
        bg-white/30 backdrop-blur-md border border-white/80 
        shadow-lg text-gray-900 px-6 py-3 w-[90%] max-w-6xl 
        rounded-2xl flex justify-between items-center transition-all duration-300"
            >
                {/* Brand */}
                <div className="brand">
                    <h1 className="font-bold text-2xl text-gray-800 hover:text-orange-500 transition-colors duration-300">
                        {/* <Link href="/">Work Manager</Link> */}
                        <p>Work Manager</p>
                    </h1>
                </div>

                {/* Mobile menu toggle */}
                <div className="h-9 w-9 md:hidden cursor-pointer" onClick={toggleMenu}>
                    <Image
                        src={menuOpen ? Close.src : Menu.src}
                        alt="menu"
                        width={28}
                        height={28}
                        className="h-6 w-6"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {context.user && (
                        <>
                            {/* <Link href="/" className="hover:text-orange-500 font-semibold">
                                Home
                            </Link> */}
                            <Link
                                href="/add-task"
                                className="hover:text-orange-500 font-semibold"
                            >
                                Add Task
                            </Link>
                            <Link
                                href="/show-tasks"
                                className="hover:text-orange-500 font-semibold"
                            >
                                Show Tasks
                            </Link>
                        </>
                    )}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    {context.user ? (
                        <>
                            <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5">
                                {context.user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-4 w-[90%] max-w-sm z-50 transition-all duration-300">
                    <ul className="space-y-4 text-center">
                        {context.user && (
                            <>
                                {/* <li>
                                    <Link
                                        href="/"
                                        onClick={() => setMenuOpen(false)}
                                        className="block font-semibold text-gray-800 hover:text-orange-500 transition"
                                    >
                                        Home
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        href="/add-task"
                                        onClick={() => setMenuOpen(false)}
                                        className="block font-semibold text-gray-800 hover:text-orange-500 transition"
                                    >
                                        Add Task
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/show-tasks"
                                        onClick={() => setMenuOpen(false)}
                                        className="block font-semibold text-gray-800 hover:text-orange-500 transition"
                                    >
                                        Show Tasks
                                    </Link>
                                </li>
                            </>
                        )}

                        {context.user ? (
                            <div className="flex items-center justify-between ">
                                <li>
                                    <span className="block bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5">
                                        {context.user.name}
                                    </span>
                                </li>
                                <li>
                                    <span>

                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setMenuOpen(false);
                                        }}
                                        className="border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                                    >
                                        Logout
                                    </button>
                                    </span>
                                </li>
                            </div>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href="/login"
                                        onClick={() => setMenuOpen(false)}
                                        className="block bg-orange-500 text-white font-semibold py-2 rounded-full shadow hover:bg-orange-400 transition"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMenuOpen(false)}
                                        className="block border-2 border-orange-500 text-orange-500 font-semibold py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
                                    >
                                        Signup
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default CustomNavbar;
