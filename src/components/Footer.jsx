import React from 'react'
const Footer = () => {
    return (
        <footer className="bg-white sm:h-40 shadow-lg shadow-orange-400">
            <div className="flex p-5 justify-around sm:flex-row sm:justify-around text-black">
                <div className="text-center flex flex-col justify-center sm:mb-0">
                    <h1 className="text-2xl sm:text-3xl">Welcome to Work Manager</h1>
                    <p className="text-sm sm:text-base mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                </div>

                <div className="text-center sm:text-left">
                    <h1 className="text-lg sm:text-xl mb-3">Important Links</h1>
                    <ul className="">
                        <li>
                            <a href="#" className="hover:text-orange-400 break-words">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 break-words">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 break-words">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 break-words">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
