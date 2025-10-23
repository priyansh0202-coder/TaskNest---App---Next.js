// import React from 'react'
// const Footer = () => {
//     return (
//         <footer className="bg-white">
//             <div className="flex p-5 justify-around sm:flex-row sm:justify-around text-black">
//                 <div className="text-center flex flex-col justify-center sm:mb-0">
//                     <h1 className="text-2xl sm:text-3xl">Welcome to Work Manager</h1>
//                     <p className="text-sm sm:text-base mt-2">
//                         Lorem ipsum dolor sit amet consectetur adipisicing
//                     </p>
//                 </div>

//                 <div className="text-center sm:text-left">
//                     <h1 className="text-lg sm:text-xl mb-3">Important Links</h1>
//                     <ul className="">
//                         <li>
//                             <a href="#" className="hover:text-orange-400 break-words">
//                                 Facebook
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 break-words">
//                                 Instagram
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 break-words">
//                                 Twitter
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 break-words">
//                                 LinkedIn
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800 rounded-t-4xl">
            {/* Glass panel */}
            <div className="backdrop-blur-md bg-white/60 border-t border-orange-200 shadow-inner">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand Info */}
                    <div className="text-center md:text-left max-w-sm">
                        <h1 className="text-2xl font-bold text-orange-600 mb-2">
                            Work Manager
                        </h1>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Manage your daily tasks efficiently, stay productive, and keep everything organized — all in one simple workspace.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Quick Links
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                                >
                                    Add Task
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                                >
                                    Show Tasks
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-end">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Follow Us
                        </h2>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-orange-500 hover:bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:-translate-y-1"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="bg-orange-500 hover:bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:-translate-y-1"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="bg-orange-500 hover:bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:-translate-y-1"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="bg-orange-500 hover:bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:-translate-y-1"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-orange-200 mt-4 py-4 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} <span className="font-semibold text-orange-500">Work Manager</span> — All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
