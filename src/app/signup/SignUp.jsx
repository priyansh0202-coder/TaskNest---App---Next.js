"use client"
import React, { useState } from 'react'
import SingUpsvg from "../../assets/undraw_sign-up_z2ku.svg"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://cdn.vectorstock.com/i/1000v/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.name.trim() || !data.email.trim() || !data.password.trim()) {
            toast.warning("please fill in all fields", {
                position: "top-center"
            })
            return;
        }
        try {

            const result = await signUp(data)
            console.log(result, "success result ")
            toast.success("user created successfully", {
                position: "top-center"
            })
            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: "https://cdn.vectorstock.com/i/1000v/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg",
            })
        } catch (error) {
            console.log(error)
            toast.error(`signup error ${error.response.data.message}`, {
                position: "top-center"
            })
        }
    }

    const handleClear = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: "https://cdn.vectorstock.com/i/1000v/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg",
        })
    }



    return (
        <div className='grid grid-cols-12 m-4'>
            <div className=' col-span-12 sm:col-span-4 sm:col-start-1 md:col-span-4 md:col-start-1 lg:col-span-4 lg:col-start-1 lg:h-10 lg:ml-20 lg:mt-32'>
                <Image src={SingUpsvg} alt="Signup svg" className="w-80 h-80 " />

            </div>
            <div className='col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 border shadow-orange-300 shadow p-5 rounded'>
                <div className='py-5'>

                    <h1 className='text-2xl sm:text-3xl text-center'>Sign-Up Here</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mt-3'>
                            <label htmlFor="user_name" className='block text-sm font-medium mb-2'>UserName</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name='name'
                                value={data.name}
                                className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_email" className='block text-sm font-medium mb-2'>UserEmail</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                name='email'
                                value={data.email}
                                id='user_email'
                                className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300'
                                placeholder='Enter your Email'
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_password" className='block text-sm font-medium mb-2'>Password</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                name='password'
                                value={data.password}
                                id='user_password'
                                className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300'
                                placeholder='Enter your Password'
                            />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_about" className='block text-sm font-medium mb-2'>About</label>
                            <textarea
                                onChange={handleChange}
                                id='user_about'
                                name='about'
                                value={data.about}
                                rows={4}
                                className='w-full p-2.5 rounded-lg bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300'
                                placeholder='Enter your About'
                            />
                        </div>
                        <div className='flex justify-center mt-4 space-x-6'>
                            <button type='submit' className='bg-green-600 py-2 px-3 rounded-lg shadow shadow-white hover:bg-green-700'>SignUp</button>
                            <button type='reset' onClick={handleClear} className='bg-red-500 py-2 px-3 rounded-lg shadow shadow-white hover:bg-red-700'>Clear Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;





// const SignUp = () => {
//     return (
//         <div className='grid grid-cols-12 m-4 '>
//             <div className='col-span-4 col-start-5 border shadow-orange-300 shadow  p-5  rounded '>
//                 <div className='py-5'>
//                     <h1 className='text-3xl text-center'>Sign-Up Here</h1>
//                     <form action="">
//                         <div className='mt-3'>
//                             <label htmlFor="user_name" className='block text-sm font-medium mb-2'>UserName</label>
//                             <input type="text" className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' placeholder='Enter your name' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor="user_email" className='block text-sm font-medium mb-2'>UserEmail</label>
//                             <input type="email" id='user_email' className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' placeholder='Enter your Email' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor="user_password" className='block text-sm font-medium mb-2'>Password</label>
//                             <input type="password" id='user_password' className='w-full p-2.5 rounded-full bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' placeholder='Enter your Password' />
//                         </div>
//                         <div className='mt-3'>
//                             <label htmlFor="user_about" className='block text-sm font-medium mb-2'>About</label>
//                             <textarea type="text" id='user_about' className='w-full p-2.5 rounded-lg bg-black focus:outline-white border border-gray-200 shadow shadow-orange-300' placeholder='Enter your About' />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignUp