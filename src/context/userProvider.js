"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext';
import { currentUser } from '@/services/userService';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const fetchedUser = await currentUser();
                console.log(fetchedUser, "current user");
                setUser({ ...fetchedUser });
            } catch (error) {
                console.log(error);
                // toast.error("Error while loading user");
                setUser(undefined);
            }
        };

        fetchCurrentUser();
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
