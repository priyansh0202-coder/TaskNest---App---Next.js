"use client"
import React, { useContext, useState } from 'react';
import loginImg from "../../assets/login.svg"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';

const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext)

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loginData.email.trim() || !loginData.password.trim()) {
            toast.error("please fill in all fields", {
                position: "top-center"
            });
            return;
        }
        try {
            const result = await login(loginData)
            console.log(result, "success result")
            toast.success("Logged in", {
                position: "top-center"
            })
            context.setUser(result.user)
            router.push("/")

        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`, {
                position: "top-center"
            })
        }
    }

    return (
        <div className='grid grid-cols-12 m-20 items-center'>
            <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
                <Image src={loginImg} alt="Signup svg" className="w-80 h-80 " />

            </div>

            <div className='col-span-12 md:col-span-6 flex justify-center'>
                <div className='w-full max-w-sm border shadow-orange-300 shadow p-5 rounded'>
                    <div className='py-5'>
                        <h1 className='text-3xl text-center'>Login Here</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={loginData.email}
                                onChange={handleChange}

                                placeholder='Enter your email'
                                className='w-full px-4 py-2 border rounded-full bg-black focus:outline-none focus:ring focus:ring-orange-300'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={loginData.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                                className='w-full px-4 py-2 bg-black border rounded-full  focus:outline-none focus:ring focus:ring-orange-300'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-orange-500 text-white py-2 mb-3 rounded hover:bg-orange-600'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
