"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UserProfile() {
    return (
        <div className="relative min-h-screen flex flex-col  justify-center items-center bg-gradient-to-br from-orange-100 via-white to-blue-100 text-gray-800 px-4">
            {/* Animated header */}
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Welcome to Work Manager
            </motion.h1>

            {/* Subheading */}
            <motion.p
                className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Manage your daily tasks efficiently, stay productive, and keep everything
                organized — all in one simple and elegant workspace.
            </motion.p>

            {/* Illustration and content card */}
            <motion.div
                className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png"
                    alt="Work Illustration"
                    width={250}
                    height={250}
                    className="rounded-xl"
                />

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        Organize Smarter. Work Better.
                    </h2>
                    <p className="text-gray-600 mb-5">
                        Track your progress, set deadlines, and boost your productivity with
                        a user-friendly interface designed to help you focus on what truly
                        matters.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition-all"
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>

            {/* Decorative footer text */}
            {/* <motion.footer
                className="mt-16 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                © {new Date().getFullYear()} Work Manager. All rights reserved.
            </motion.footer> */}
        </div>
    );
}
