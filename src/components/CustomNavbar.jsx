"use client"
import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Menu from "../assets/menu.png"
import Close from "../assets/close.png"
import Image from 'next/image'

const CustomNavbar = () => {

    const context = useContext(UserContext)
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        try {
            const result = await logout();
            console.log(result)
            context.setUser(undefined)
            router.push("/")
        } catch (error) {
            console.log(error)
            toast.error("logout error")
        }
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav className='bg-white shadow-orange shadow-orange-400 text-black h-14 px-3 my-3 mx-8 rounded-full flex justify-between items-center'>
                <div className='brand'>
                    <h1 className='font-bold font-serif text-2xl text-gray-800 hover:text-orange-500 p-2 rounded-md'>
                        <a href="/">Work Manager</a>
                    </h1>
                </div>

                <div className="h-10 w-10 md:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <Image
                            src={Close.src}
                            alt="Close"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                    ) : (
                        <Image
                            src={Menu.src}
                            alt="Menu"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                    )}
                </div>

                <div className='hidden md:flex space-x-6 items-center'>
                    {context.user && (
                        <>
                            <Link href="/" className='font-bold hover:font-extrabold'>Home</Link>
                            <Link href="/add-task" className='font-bold hover:font-extrabold'>AddTask</Link>
                            <Link href="/show-tasks" className='font-bold hover:font-extrabold'>ShowTasks</Link>
                        </>
                    )}
                </div>

                <div className='hidden md:flex space-x-4 items-center'>
                    {context.user ? (
                        <>
                            <Link href="#!" className='bg-orange-500 px-6 py-2 rounded-full shadow-xl shadow-black hover:bg-orange-400'>{context.user.name}</Link>
                            <button onClick={handleLogout} className='bg-orange-500 px-4 py-2 rounded-full shadow-xl shadow-black hover:bg-orange-400'>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className='bg-orange-500 px-6 py-2 rounded-full shadow-lg shadow-black hover:bg-orange-400'>Login</Link>
                            <Link href="/signup" className='bg-orange-500 px-4 py-2 rounded-full shadow-lg shadow-black hover:bg-orange-400'>Signup</Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden bg-white rounded-lg shadow-lg p-4 absolute top-16 left-0 right-0 z-50 mt-5'>
                    <ul className='space-y-4 text-center'>
                        {context.user && (
                            <>
                                <li>
                                    <Link href="/" onClick={() => setMenuOpen(false)} className='block font-bold text-black border-2 border-slate-700 shadow shadow-black p-2 rounded-md hover:bg-neutral-300'>Home</Link>
                                </li>
                                <li>
                                    <Link href="/add-task" onClick={() => setMenuOpen(false)} className='block font-bold text-black border-2 border-slate-700 shadow shadow-black p-2 rounded-md hover:bg-neutral-300'>AddTask</Link>
                                </li>
                                <li>
                                    <Link href="/show-tasks" onClick={() => setMenuOpen(false)} className='block font-bold text-black border-2 border-slate-700 shadow shadow-black p-2 rounded-md hover:bg-neutral-300'>ShowTasks</Link>
                                </li>
                            </>
                        )}

                        {context.user ? (
                            <>
                                <li>
                                    <Link href="#!" className='block bg-orange-500 px-4 py-2 rounded-md shadow-lg shadow-black hover:bg-orange-400'>{context.user.name}</Link>
                                </li>
                                <li>
                                    <button onClick={() => { handleLogout(); setMenuOpen(false); }} className='block bg-orange-500 px-4 py-2 rounded-md shadow-lg shadow-black hover:bg-orange-400'>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/login" onClick={() => setMenuOpen(false)} className='block bg-orange-500 px-4 py-2 rounded-md shadow-lg shadow-black hover:bg-orange-400'>Login</Link>
                                </li>
                                <li>
                                    <Link href="/signup" onClick={() => setMenuOpen(false)} className='block bg-orange-500 px-4 py-2 rounded-md shadow-lg shadow-black hover:bg-orange-400'>Signup</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}

export default CustomNavbar
