"use client"
import { motion } from "framer-motion";

export default function HomePage() {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
            },
        },
    };

    const textStretchVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut",
            },
        },
    };

    const textFadeVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: custom * 0.3,
                ease: "easeOut",
            },
        }),
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: custom * 0.3,
                ease: "easeOut",
            },
        }),
    };

    const bgVariants = {
        animate: {
            x: ["0%", "10%", "-10%", "0%"],
            scale: [1.1, 1.05, 1.1],
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="absolute inset-0"
                variants={bgVariants}
                animate="animate"
            >
                <img
                    src="https://images.pexels.com/photos/2538089/pexels-photo-2538089.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
            </motion.div>

            <motion.h1
                className="relative text-6xl font-bold uppercase text-center tracking-wide italic border-black border-2 p-2 rounded-s-sm"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                variants={textVariants}
                custom={1}
            >
                Welcome to Work Manager
            </motion.h1 >

            <motion.p
                className="relative text-xl mt-4 text-gray-300 text-center max-w-2xl"
                variants={textFadeVariants}
                custom={2}
                initial="hidden"
                animate="visible"
            >
                "Effortlessly manage and prioritize your tasks with our work manager app. Stay organized, meet deadlines, and collaborate seamlessly with your team."
            </motion.p>
        </motion.div>
    );
}


